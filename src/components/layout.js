import Header from "./headerVibe";
import Footer from "./footerVibe";

import { Poppins } from "next/font/google";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faLaptop,
  faPaintBrush,
  faBriefcase,
  faAt,
  faCamera,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUser,
  faLaptop,
  faPaintBrush,
  faBriefcase,
  faAt,
  faCamera,
  faBars,
  faXmark
);

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <>
      <div className={poppins.className + " relative overflow-x-hidden"}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
