import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import Footer from '@C/Footer';
import SEO from '@config/seo.config';
import GlobalStyle from '@styles/global';

const cache = createCache({ key: 'next' });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <CacheProvider value={cache}>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <RecoilRoot>
            <GlobalStyle />
            <Component {...pageProps} />
          </RecoilRoot>
        </SWRConfig>
      </CacheProvider>

      <Footer />
    </>
  );
}

export default MyApp;
