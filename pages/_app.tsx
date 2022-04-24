import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Footer from '../container/Footer';
import SEO from '../config/seo.config';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
