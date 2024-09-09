import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/layout";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "@/shared/Store/store";
import "@/styles/globals.css";
import { NextPage } from "next";
import { Analytics } from "@vercel/analytics/react";
import { PersistGate } from "redux-persist/integration/react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {getLayout(<Component {...pageProps} />)}
          <Analytics mode={"production"} />;
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
