import Image from "next/image";
import logoPic from "../../public/logo-white.png";
import FacebookIcon from "../../public/facebook-header-icon.svg";
import InstagramIcon from "../../public/instagram-header-icon.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container lg:max-w-screen-xl sm:py-[90px] py-[60px] flex sm:flex-row flex-col items-center justify-center sm:justify-between sm:gap-[20px] gap-[70px] flex-wrap">
        <div>
          <p className="text-[14px] leading-[26px] sm:text-left text-center">
            6829 N Ridge Blvd, Apt 208
          </p>
          <p className="text-[14px] leading-[26px] sm:text-left text-center">Chicago, Illinois 60645</p>
          <p className="text-[14px] leading-[26px] sm:text-left text-center">(312) 442-215</p>
          <div className="gap-[4px] mt-[20px] flex items-center justify-center sm:items-start sm:justify-start">
            <a href="https://www.facebook.com/vibecreative.chi" target="_blank">
              <FacebookIcon
                fill="#009696"
                className="hover:fill-gray-400"
                width="27"
                height="27"
                viewBox="0 0 24 24"
              />
            </a>
            <a href="https://www.instagram.com/vibecreative.digital/" target="_blank">
              <InstagramIcon
                fill="#009696"
                className="hover:fill-gray-400"
                width="27"
                height="27"
                viewBox="0 0 30 30"
              />
            </a>
          </div>
        </div>
        <Image src={logoPic} alt="logo" />
      </div>
      <div className="">
        <p className="text-[14px] leading-[30px] text-center py-[40px] border border-t-[#e2e7f0]">© 2023 Vibe!</p>
      </div>
    </footer>
  );
}
