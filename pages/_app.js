import "../styles/globals.css";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import graphQLClient from "../comps/apollo/graphQLClient";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={graphQLClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
