import { globalStyles } from '../styles';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {globalStyles}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
