import "@/styles/globals.css";
import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLaptop, faPaintBrush, faBriefcase, faAt, faCamera, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faLaptop, faPaintBrush, faBriefcase, faAt, faCamera, faBars, faXmark);

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <PageTitle />
      <Component {...pageProps} />
    </Layout>
  );
}
