import './globals.css';

import { Meta } from '@container/Meta';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta title="平台" description="大赛" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
