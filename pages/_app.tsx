import type { AppProps } from 'next/app';
import { ThemeWrapper } from '../hooks/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}

export default MyApp;
