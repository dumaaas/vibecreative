import { useRouter } from "next/router";
import { navigation } from "@/helpers/staticData";
import portfolioImg from '../../public/portfolio-cover.jpg'
export default function PageTitle() {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/" && router.pathname !== "/contact" && (
        <div className="relative flex flex-col items-center justify-center text-center min-h-[600px]">
          <div
            className="w-full h-full absolute top-0 left-0 z-10"
            style={{
              backgroundImage: `url(${navigation.find((item) => item.href === router.pathname).image.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full z-10"></div>
          <h2 className="z-20 text-white lg:text-[72px] lg:leading-[79px] text-[48px] leading-[53px] font-semibold">
            {navigation.find((item) => item.href === router.pathname).name}
          </h2>
        </div>
      )}
    </>
  );
}
