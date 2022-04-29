import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Footer from '../containers/Footer';
import SEO from '../config/seo.config';
import '../styles/globals.css';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then(res => res.json()),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
      <Footer />
    </>
  );
}

export default MyApp;
