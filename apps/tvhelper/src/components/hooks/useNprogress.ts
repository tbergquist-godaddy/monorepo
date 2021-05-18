import { useEffect } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';

export default function useNprogress() {
  useEffect(() => {
    const handleRouteChangeStart = () => {
      NProgress.start();
    };
    const handleRouteChangeComplete = () => {
      NProgress.done();
    };
    NProgress.configure({ showSpinner: false });
    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeComplete);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
      Router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, []);
}
