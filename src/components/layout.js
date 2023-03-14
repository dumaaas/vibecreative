import Header from "./headerVibe";
import Footer from "./footerVibe";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

export default function Layout({ children }) {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Header />
        <main className={poppins.className}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
