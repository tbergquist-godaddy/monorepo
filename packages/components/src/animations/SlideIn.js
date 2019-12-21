// @flow strict

import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-height: ${props => (props.isExpanded ? '300px' : 0)};
  overflow-y: hidden;
  transition: max-height 0.3s ease-in-out;
`;

type Props = {|
  +isExpanded: boolean,
  +children: React.Node,
|};
/**
 * To animate in, component must be in the dom, with isExpanded false, then isExpanded must change to true
 * To animate out, component must be in the dom, with isExpanded true, then isExpanded must change to false, and component removed from DOM
 * */
export default function ExerciseForm(props: Props): React.Element<'div'> | null {
  const [isExpanded, setIsExpanded] = React.useState(props.isExpanded);
  const [shouldRender, setShouldRender] = React.useState(props.isExpanded);

  React.useEffect(() => {
    if (props.isExpanded) {
      setShouldRender(true);
    } else {
      setIsExpanded(false);
    }
  }, [props.isExpanded]);

  React.useEffect(() => {
    if (shouldRender) {
      setIsExpanded(true);
    }
  }, [shouldRender]);

  React.useEffect(() => {
    if (!isExpanded) {
      // Allow component to animate out, then remove it from the DOM
      setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }
  }, [isExpanded]);

  return shouldRender ? <Wrapper isExpanded={isExpanded}>{props.children}</Wrapper> : null;
}
