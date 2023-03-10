import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import { SessionProvider } from "next-auth/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
