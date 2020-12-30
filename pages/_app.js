import "../styles/globals.css";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import graphQLClient from "../comps/apollo/graphQLClient";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const publicUrl = process.env.PUBLIC_URL || "";

  return (
    <>
      <Head>
        <meta property="og:url" content={publicUrl + router.asPath} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Abir Taheer's Portfolio" />
      </Head>
      <ApolloProvider client={graphQLClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
