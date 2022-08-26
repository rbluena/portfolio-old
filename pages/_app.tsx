import type { AppProps } from 'next/app';
import { ThemeWrapper } from '../hooks/theme';

import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper>
      <Header />
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}

export default MyApp;
