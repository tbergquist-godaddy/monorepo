// @flow

import * as React from 'react';
import { createOperationDescriptor, deepFreeze, getRequest } from 'relay-runtime';
import areEqual from 'react-fast-compare';
import { ReactRelayContext } from 'react-relay';
import ReactRelayQueryFetcher from 'react-relay/lib/ReactRelayQueryFetcher';

/**
 * This is mostly a copy-paste https://github.com/facebook/relay/blob/master/packages/react-relay/ReactRelayQueryRenderer.js
 * but it has been added the suggested fix from this PR https://github.com/facebook/relay/pull/2883/files
 * to fix this bug: https://github.com/facebook/relay/issues/2566
 * This fix should be temporary, since really is planning to fix this with the relase of suspense (https://github.com/facebook/relay/issues/2566#issuecomment-451623689)
 * Suspense and hooks are now available in `react-relay@experimental`, so I expect the fix to come soon ⌛
 * */
let requestCache = {};

// eslint-disable-next-line no-new-func
const isBrowser = new Function('try { return this===window; }catch(e){ return false; }');

class ReactRelayQueryRenderer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    const retryCallbacks = {
      handleDataChange: null,
      handleRetryAfterError: null,
    };

    let queryFetcher;
    let requestCacheKey;
    if (!isBrowser() && typeof process === 'object' && process.env.NODE_ENV !== 'test') {
      requestCache = {};
    }
    if (props.query) {
      const { query } = props;

      const request = getRequest(query);
      requestCacheKey = getRequestCacheKey(request.params, props.variables);
      queryFetcher = requestCache[requestCacheKey]
        ? requestCache[requestCacheKey].queryFetcher
        : new ReactRelayQueryFetcher();
    } else {
      queryFetcher = new ReactRelayQueryFetcher();
    }

    this.state = {
      prevPropsEnvironment: props.environment,
      prevPropsVariables: props.variables,
      prevQuery: props.query,
      queryFetcher,
      retryCallbacks,
      ...fetchQueryAndComputeStateFromProps(props, queryFetcher, retryCallbacks, requestCacheKey),
    };
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any): any {
    if (
      prevState.prevQuery !== nextProps.query ||
      prevState.prevPropsEnvironment !== nextProps.environment ||
      !areEqual(prevState.prevPropsVariables, nextProps.variables)
    ) {
      const { query } = nextProps;
      const prevSelectionReferences = prevState.queryFetcher.getSelectionReferences();
      prevState.queryFetcher.disposeRequest();

      let queryFetcher;
      if (query) {
        const request = getRequest(query);
        const requestCacheKey = getRequestCacheKey(request.params, nextProps.variables);
        queryFetcher = requestCache[requestCacheKey]
          ? requestCache[requestCacheKey].queryFetcher
          : new ReactRelayQueryFetcher(prevSelectionReferences);
      } else {
        queryFetcher = new ReactRelayQueryFetcher(prevSelectionReferences);
      }
      return {
        prevQuery: nextProps.query,
        prevPropsEnvironment: nextProps.environment,
        prevPropsVariables: nextProps.variables,
        queryFetcher: queryFetcher,
        ...fetchQueryAndComputeStateFromProps(
          nextProps,
          queryFetcher,
          prevState.retryCallbacks,
          // passing no requestCacheKey will cause it to be recalculated internally
          // and we want the updated requestCacheKey, since variables may have changed
        ),
      };
    }

    return null;
  }

  componentDidMount() {
    const { retryCallbacks, queryFetcher, requestCacheKey } = this.state;
    if (requestCacheKey) {
      delete requestCache[requestCacheKey];
    }

    retryCallbacks.handleDataChange = (params: { error?: Error, snapshot?: any, ... }): void => {
      const error = params.error == null ? null : params.error;
      const snapshot = params.snapshot == null ? null : params.snapshot;

      this.setState(prevState => {
        const { requestCacheKey: prevRequestCacheKey } = prevState;
        if (prevRequestCacheKey) {
          delete requestCache[prevRequestCacheKey];
        }

        // Don't update state if nothing has changed.
        if (snapshot === prevState.snapshot && error === prevState.error) {
          return null;
        }
        return {
          renderProps: getRenderProps(
            error,
            snapshot,
            prevState.queryFetcher,
            prevState.retryCallbacks,
          ),
          snapshot,
          requestCacheKey: null,
        };
      });
    };

    // eslint-disable-next-line no-unused-vars
    retryCallbacks.handleRetryAfterError = (error: Error) =>
      this.setState(prevState => {
        const { requestCacheKey: prevRequestCacheKey } = prevState;
        if (prevRequestCacheKey) {
          delete requestCache[prevRequestCacheKey];
        }

        return {
          renderProps: getLoadingRenderProps(),
          requestCacheKey: null,
        };
      });

    // Re-initialize the ReactRelayQueryFetcher with callbacks.
    // If data has changed since constructions, this will re-render.
    if (this.props.query) {
      queryFetcher.setOnDataChange(retryCallbacks.handleDataChange);
    }
  }

  componentDidUpdate(): void {
    // We don't need to cache the request after the component commits
    const { requestCacheKey } = this.state;
    if (requestCacheKey) {
      delete requestCache[requestCacheKey];
      // HACK
      delete this.state.requestCacheKey;
    }
  }

  componentWillUnmount(): void {
    this.state.queryFetcher.dispose();
  }

  // eslint-disable-next-line react/sort-comp
  shouldComponentUpdate(nextProps: any, nextState: any): boolean {
    return (
      nextProps.render !== this.props.render || nextState.renderProps !== this.state.renderProps
    );
  }

  render(): React.Element<typeof ReactRelayContext.Provider> {
    const { renderProps, relayContext } = this.state;
    // Note that the root fragment results in `renderProps.props` is already
    // frozen by the store; this call is to freeze the renderProps object and
    // error property if set.
    if (__DEV__) {
      deepFreeze(renderProps);
    }

    return (
      <ReactRelayContext.Provider value={relayContext}>
        {this.props.render(renderProps)}
      </ReactRelayContext.Provider>
    );
  }
}

function getLoadingRenderProps(): any {
  return {
    error: null,
    props: null, // `props: null` indicates that the data is being fetched (i.e. loading)
    retry: null,
  };
}

function getEmptyRenderProps(): any {
  return {
    error: null,
    props: {}, // `props: {}` indicates no data available
    retry: null,
  };
}

function getRenderProps(
  error: ?Error,
  snapshot: ?any,
  queryFetcher: ReactRelayQueryFetcher,
  retryCallbacks: any,
): any {
  return {
    error: error ? error : null,
    props: snapshot ? snapshot.data : null,
    retry: (cacheConfigOverride?: any) => {
      const syncSnapshot = queryFetcher.retry(cacheConfigOverride);
      if (syncSnapshot && typeof retryCallbacks.handleDataChange === 'function') {
        retryCallbacks.handleDataChange({ snapshot: syncSnapshot });
      } else if (error && typeof retryCallbacks.handleRetryAfterError === 'function') {
        // If retrying after an error and no synchronous result available,
        // reset the render props
        retryCallbacks.handleRetryAfterError(error);
      }
    },
  };
}

function getRequestCacheKey(request: any, variables: any): string {
  const requestID = request.id || request.text;
  return JSON.stringify({
    id: String(requestID),
    variables,
  });
}

function fetchQueryAndComputeStateFromProps(
  props: any,
  queryFetcher: ReactRelayQueryFetcher,
  retryCallbacks: any,
  requestCacheKey: ?string,
): any {
  const { environment, query, variables } = props;
  const genericEnvironment = (environment: any);
  if (query) {
    const request = getRequest(query);
    const operation = createOperationDescriptor(request, variables);
    const relayContext: any = {
      environment: genericEnvironment,
    };
    if (typeof requestCacheKey === 'string' && requestCache[requestCacheKey]) {
      // This same request is already in flight.

      const { snapshot } = requestCache[requestCacheKey];
      if (snapshot) {
        // Use the cached response
        return {
          error: null,
          relayContext,
          renderProps: getRenderProps(null, snapshot, queryFetcher, retryCallbacks),
          snapshot,
          requestCacheKey,
        };
      }
      // Render loading state
      return {
        error: null,
        relayContext,
        renderProps: getLoadingRenderProps(),
        snapshot: null,
        requestCacheKey,
      };
    }

    try {
      const storeSnapshot = queryFetcher.lookupInStore(
        genericEnvironment,
        operation,
        props.fetchPolicy,
      );
      const querySnapshot = queryFetcher.fetch({
        cacheConfig: props.cacheConfig,
        environment: genericEnvironment,
        onDataChange: retryCallbacks.handleDataChange,
        operation,
      });

      // Use network data first, since it may be fresher
      const snapshot = querySnapshot || storeSnapshot;

      // cache the request to avoid duplicate requests

      // $FlowFixMe
      requestCacheKey = requestCacheKey || getRequestCacheKey(request.params, props.variables); // eslint-disable-line no-param-reassign
      // $FlowFixMe
      requestCache[requestCacheKey] = { queryFetcher, snapshot };

      if (!snapshot) {
        return {
          error: null,
          relayContext,
          renderProps: getLoadingRenderProps(),
          snapshot: null,
          requestCacheKey,
        };
      }

      return {
        error: null,
        relayContext,

        renderProps: getRenderProps(null, snapshot, queryFetcher, retryCallbacks),
        snapshot,
        requestCacheKey,
      };
    } catch (error) {
      return {
        error,
        relayContext,
        renderProps: getRenderProps(error, null, queryFetcher, retryCallbacks),
        snapshot: null,
        requestCacheKey,
      };
    }
  } else {
    queryFetcher.dispose();
    const relayContext: any = {
      environment: genericEnvironment,
    };
    return {
      error: null,
      relayContext,
      renderProps: getEmptyRenderProps(),
      requestCacheKey: null, // if there is an error, don't cache request
    };
  }
}

export default ReactRelayQueryRenderer;
