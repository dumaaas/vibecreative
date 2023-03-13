import Head from "next/head";
import Image from "next/image";
import IndexHero from "@/components/indexHero";
import AboutComponent from "@/components/about";
import { ourTeam } from "@/helpers/staticData";
import Newsletter from "@/components/newsletter";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Vibe!</title>
        <meta name="description" content="We know how to run your social media accounts, create online campaigns and content according to your needs. Vibe Creative LLC is a digital marketing agency based in Chicago, Illinois and specializes in social media and marketing campaigns. Our main goal and priority is to provide the best return of investment (ROI) to our customers! … About Read More »" />
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
          content="About - Vibe!"
        />
        <meta
          property="og:description"
          content="We know how to run your social media accounts, create online campaigns and content according to your needs. Vibe Creative LLC is a digital marketing agency based in Chicago, Illinois and specializes in social media and marketing campaigns. Our main goal and priority is to provide the best return of investment (ROI) to our customers! … About Read More »"
        />
        <meta property="og:url" content="https://vibecreative.net/about" />
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
        <AboutComponent type="right" />
        <div className="bg-[#F7F7F7]">
          <div className="container lg:max-w-screen-xl py-[60px]">
            <h2 className="relative text-center lg:text-[48px] lg:leading-[58px] text-[32px] leading-[38px] font-bold mb-[70px] after:content-[''] after:absolute after:w-[100px] after:h-[3px] after:left-[50%] after:transform after:translate-x-[-50%] after:translate-y-[50%] after:bg-primary after:bottom-[-20px]">
              Meet Our Team
            </h2>
            <div className="mt-[100px] flex justify-between md:gap-[80px] gap-[60px] flex-wrap">
              {ourTeam.map((item) => {
                return (
                  <div
                    className="flex-[28%] md:gap-[20px] gap-[18px] flex items-center justify-center flex-col"
                    key={item.name}
                  >
                    <div className="w-[180px] h-[180px]">
                      <Image
                        style={{ borderRadius: "50%" }}
                        src={item.image}
                        alt="team"
                      />
                    </div>
                    <h4 className="mt-[16px] md:text-[24px] md:leading-[36px] text-[18px] leading-[27px] font-bold">
                      {item.name}
                    </h4>
                    <p className="md:text-[16px] md:leading-[30px] text-[15px] leading-[27px] font-bold">
                      {item.title}
                    </p>
                    <span className="text-[15px] leading-[28px]">
                      {item.desc}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Newsletter />
      </main>
    </>
  );
}
