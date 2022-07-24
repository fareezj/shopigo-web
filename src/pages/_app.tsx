import "/styles/index.scss";
import Head from "next/head";
import Script from "next/script";
import type { AppProps } from "next/app";
import AppHeader from "../components/layout/AppHeader";
import AppLayout from "../components/layout/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        crossOrigin="anonymous"
      />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;
