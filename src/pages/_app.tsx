import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/layout";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/shared/Store/store";
import "@/styles/globals.css";
import { NextPage } from "next";
import { useRouter } from "next/router";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// export const [queryClient] = useState(
//   () =>
//     new QueryClient({
//       defaultOptions: {
//         queries: {
//           staleTime: 60 * 1000,
//         },
//       },
//     }),
// );

export const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const path = useRouter();

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
