import "@/styles/globals.css";
import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <PageTitle />
      <Component {...pageProps} />
    </Layout>
  );
}
