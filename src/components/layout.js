import Header from "./headerVibe";
import Footer from "./footerVibe";

import { Lato } from "next/font/google";

const poppins = Lato({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={poppins.className}>{children}</main>
      <Footer />
    </>
  );
}
