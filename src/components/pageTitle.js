import { useRouter } from "next/router";
import { navigation } from "@/helpers/staticData";
import portfolioImg from "../../public/portfolio-cover.jpg";
export default function PageTitle() {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/" && router.pathname !== "/contact" && (
        <div className="relative flex flex-col items-center justify-center text-center min-h-[600px]">
          {navigation.find((item) => item.href === router.pathname) &&
            navigation.find((item) => item.href === router.pathname).image && (
              <div
                className="absolute top-0 left-0 z-10 w-full h-full"
                style={{
                  backgroundImage: `url(${
                    navigation.find((item) => item.href === router.pathname)
                      .image.src
                  })`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            )}
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-80"></div>
          {navigation.find((item) => item.href === router.pathname) &&
            navigation.find((item) => item.href === router.pathname).image && (
              <h2 className="z-20 text-white lg:text-[72px] lg:leading-[79px] text-[48px] leading-[53px] font-semibold">
                {navigation.find((item) => item.href === router.pathname).name}
              </h2>
            )}
        </div>
      )}
    </>
  );
}
