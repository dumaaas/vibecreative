import Head from "next/head";
import Image from "next/image";
import IndexHero from "@/components/indexHero";
import AboutComponent from "@/components/about";
import { ourTeam } from "@/helpers/staticData";
import Newsletter from "@/components/newsletter";
import bookkeepingImg from "../../public/bookkeeping-img.jpg";
import bookkeepingCover from "../../public/bookkeeping-cover.jpg";

export default function Bookkeeping() {
  return (
    <>
      <Head>
        <title>Bookkeeping - Vibe!</title>
        <meta
          name="description"
          content="We know how to run your social media accounts, create online campaigns and content according to your needs."
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
        <meta property="og:title" content="Bookkeeping - Vibe!" />
        <meta
          property="og:description"
          content="We know how to run your social media accounts, create online campaigns and content according to your needs."
        />
        <meta property="og:url" content="https://vibecreative.net/bookkeeping" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Vibe!"></meta>
        <meta
          property="og:image"
          content=" https://vibecreative.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvibe-about.32d3ffc5.png&w=640&q=75"
          class="yoast-seo-meta-tag"
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:label1"
          content="Est. reading time"
          class="yoast-seo-meta-tag"
        />
        <meta
          name="twitter:data1"
          content="7 minutes"
          class="yoast-seo-meta-tag"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className="container lg:max-w-screen-xl py-[60px]">
          <h2 className="relative text-center lg:text-[48px] lg:leading-[58px] text-[32px] leading-[38px] font-bold mb-[60px] md:mb-[70px] after:content-[''] after:absolute after:w-[100px] after:h-[3px] after:left-[50%] after:transform after:translate-x-[-50%] after:translate-y-[50%] after:bg-primary after:bottom-[-20px]">
            Do you need a professional bookkeeper?
          </h2>
          <div className="flex md:flex-row flex-col md:items-center md:justify-between pt-[10px] md:gap-[20px] gap-[50px]">
            <div className="grow basis-0 md:text-[16px] md:leading-[30px] text-[15px] leading-[27px]">
              <p>We offer wide range of services:</p>
              <ul className="list-disc ml-[45px] mt-[15px]">
                <li>Quickbooks set up</li>
                <li>Catch up and clean up services</li>
                <li>Monthly bookkeeping</li>
                <li>Bank and credit card reconciliation</li>
                <li>Financial reports</li>
                <li>Payroll</li>
                <li>1099 management</li>
              </ul>
            </div>
            <div className="grow basis-0">
              <Image src={bookkeepingImg} alt="bookkeeping" />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center text-center min-h-[500px]">
          <div
            className="absolute top-0 left-0 z-10 w-full h-full"
            style={{
              backgroundImage: `url(${bookkeepingCover.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-80"></div>
          <h2 className="px-[1.1em] xl:w-[50%] lg:w-[70%] md:w-[80%] sm:w-[90%] z-20 text-white text-[32px] leading-[38px] mb-[25px] lg:mb-[30px] font-bold lg:text-[48px] lg:leading-[58px]">
            Call us now! Schedule a consult or let’s have a coffee and we will
            be happy to help!
          </h2>
          <p className="z-20 text-white text-[30px] leading-[55px] lg:text-[36px] lg:leading-[67px] font-bold mb-[25px] lg:mb-[30px]">
            Tamara Kostic
          </p>
          <span className="z-20 text-white lg:text-[16px] lg:leading-[30px] text-[15px] leading-[26px]">
            Phone: (630) 750-5771
          </span>
        </div>

        <Newsletter />
      </main>
    </>
  );
}
