import Head from "next/head";
import Image from "next/image";
import IndexHero from "@/components/indexHero";
import ServicesItems from "@/components/servicesItems";
import About from "@/components/about";
import portfolioImg from "../../public/portfolio-cover.jpg";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderImages } from "@/helpers/staticData";
import Newsletter from "@/components/newsletter";

export default function Home() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 700,
    InitalSlide: 0,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Head>
        <title>Vibe! Digital Marketing Agency | Chicago, Illinois</title>
        <meta
          name="description"
          content="We know how to run your social media accounts, create online campaigns and content according to your needs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Vibe, Design, Web Design, Instagram, Social Marketing, Logo Design, Marketing Agency, Social Media Management, Advertising"
        />
        <meta name="author" content="Marko Dumnic" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Vibe! Digital Marketing Agency | Chicago, Illinois"
        />
        <meta
          property="og:description"
          content="We know how to run your social media accounts, create online campaigns and content according to your needs"
        />
        <meta property="og:url" content="https://vibecreative.net/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Vibe!"></meta>
        <meta
          property="og:image"
          content=" https://vibecreative.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvibe-about.32d3ffc5.png&w=640&q=75"
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:label1"
          content="Est. reading time"
        />
        <meta
          name="twitter:data1"
          content="7 minutes"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <IndexHero />
        <div className="py-[50px] container lg:max-w-screen-xl">
          <h2 className="relative text-center lg:text-[48px] lg:leading-[58px] text-[32px] leading-[38px] font-bold mb-[70px] after:content-[''] after:absolute after:w-[100px] after:h-[3px] after:left-[50%] after:transform after:translate-x-[-50%] after:translate-y-[50%] after:bg-primary after:bottom-[-20px]">
            Our Services
          </h2>
          <ServicesItems type="small" />
        </div>
        <About type="left" />
        <div className="relative flex flex-col items-center justify-center text-center min-h-[500px]">
          <div
            className="absolute top-0 left-0 z-10 w-full h-full"
            style={{
              backgroundImage: `url(${portfolioImg.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-80"></div>
          <h2 className="z-20 text-white text-[32px] leading-[38px] mb-[25px] lg:mb-[30px] font-bold lg:text-[48px] lg:leading-[58px]">
            Check out our work
          </h2>
          <Link href="/portfolio" className="z-20 btn"> Portfolio </Link>
        </div>
        <div className="py-[50px] container lg:max-w-screen-xl">
          <h2 className="relative text-center lg:text-[48px] lg:leading-[58px] text-[32px] leading-[38px] font-bold mb-[70px] after:content-[''] after:absolute after:w-[100px] after:h-[3px] after:left-[50%] after:transform after:translate-x-[-50%] after:translate-y-[50%] after:bg-primary after:bottom-[-20px]">
            They felt our vibe
          </h2>
          <Slider {...settings}>
            {sliderImages.map((item, index) => {
              return (
                <div key={index}>
                  <Image
                    style={{ margin: "0 auto" }}
                    src={item}
                    alt="partner"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
        <Newsletter />
      </main>
    </>
  );
}
