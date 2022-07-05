import { useState } from 'react';
import Script from 'next/script';

import type { AppProps } from 'next/app';

//service
import { Hydrate } from 'react-query/hydration';
import { queryConfig } from 'src/services/config';
import { QueryClient, QueryClientProvider } from 'react-query';

//style
import '../styles/globals.scss';
import 'react-loading-skeleton/dist/skeleton.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(queryConfig));

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/js/uikit-icons.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/js/uikit.min.js"></Script>
    </>
  );
}

export default MyApp;
