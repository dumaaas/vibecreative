import Image from "next/image";
import logoPic from "../../public/logo.png";
import FacebookIcon from "../../public/facebook-header-icon.svg";
import InstagramIcon from "../../public/instagram-header-icon.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import { navigation } from "@/helpers/staticData";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const mobileNavRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileNavRef]);

  useEffect(() => {
    document.querySelector("html").style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={
        "lg:px-[55px] px-[20px] py-[20px] bg-transparent absolute top-0 w-full z-[999] min-h-[134px] flex items-center justify-between"
      }
    >
      <div className="flex flex-row items-center gap-[70px]">
        <Link href="/">
          <Image
            src={logoPic}
            alt="prologs-logo"
            className="lg:w-[210px] w-[120px]"
            placeholder="blur"
          />
        </Link>
        <div className="hidden lg:flex justify-between gap-[32px] text-[16px] leading-[16px] uppercase flex-wrap">
          {navigation.map((item) => {
            return (
              <Link
                className={
                  router.pathname == item.href
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }
                key={item.href}
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="gap-[4px] hidden lg:flex">
        <a href="https://www.facebook.com/vibecreative.chi" target="_blank">
          <FacebookIcon
            fill="white"
            className=" hover:fill-primary"
            width="27"
            height="27"
            viewBox="0 0 24 24"
          />
        </a>
        <a
          href="https://www.instagram.com/vibecreative.digital/"
          target="_blank"
        >
          <InstagramIcon
            className=" hover:fill-primary"
            fill="white"
            width="27"
            height="27"
            viewBox="0 0 30 30"
          />
        </a>
      </div>

      <div className="flex lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon
          className="w-[40px] h-[40px] cursor-pointer"
          color="white"
          icon="bars"
        />
      </div>
      <div
        ref={mobileNavRef}
        className={`${
          menuOpen
            ? "lg:hidden translate-x-0 opacity-1"
            : "translate-x-[100%] opacity-0"
        } shadow-[-3px_0px_3px_rgba(0,0,0,1)] transition-all duration-200 ease-linear z-[999] flex flex-col px-[20px] absolute top-0 right-0 w-[90vw] h-[100vh] transform  bg-white`}
      >
        <FontAwesomeIcon
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-[21px] h-[21px] cursor-pointer absolute right-[20px] top-[20px]"
          color="black"
          icon="xmark"
        />
        {navigation.map((item) => {
          return (
            <Link
              className={`${
                router.pathname == item.href
                  ? "text-primary"
                  : "text-black hover:text-primary"
              } py-[12px] uppercase first-of-type:mt-[60px] text-[15px] sm:text-[16px] md:text-[18px]`}
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          );
        })}
        <div className="flex gap-[4px] mt-[12px]">
          <a href="https://www.facebook.com/prologs.us" target="_blank">
            <FacebookIcon width="27" height="27" viewBox="0 0 24 24" />
          </a>
          <a href="https://www.instagram.com/prologs.us/" target="_blank">
            <InstagramIcon width="27" height="27" viewBox="0 0 30 30" />
          </a>
        </div>
      </div>
      <div
        className={`${
          menuOpen ? "z-[998] opacity-1 w-screen h-screen" : "z-[-1] opacity-0"
        } transition-opacity duration-150 ease-linear bg-black bg-opacity-90  absolute top-0 left-0`}
      ></div>
    </header>
  );
}
