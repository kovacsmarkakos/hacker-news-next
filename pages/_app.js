import '../styles/globals.css';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import '../styles/nprogress.css'; //styles of nprogress

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.set(0.3));
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
