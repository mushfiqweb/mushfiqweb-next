import "@/css/tailwind.css";
import "@/css/prism.css";
import "@/css/font.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import LayoutWrapper from "@/components/LayoutWrapper";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const { ...rest } = pageProps;

  return (
    <>
      <ThemeProvider attribute="class">
        
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
          </Head>
          <LayoutWrapper>
            <Component {...rest} />
          </LayoutWrapper>
   
      </ThemeProvider>
    </>
  );
}

export default MyApp;
