import Head from "next/head";
import Newsletter from "@/components/newsletter";
import { ourPortfolio } from "@/helpers/staticData";
import { useState, useEffect } from "react";
import PortfolioCard from "@/components/PortfolioCard";

export default function Portfolio() {
  var [newPortfolio, setNewPorfolio] = useState([]);
  var [page, setPage] = useState(1);

  useEffect(() => {
    setNewPorfolio(ourPortfolio.slice(0, newPortfolio.length + 10));
  }, [page]);

  return (
    <>
      <Head>
        <title>Portfolio - Vibe!</title>
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
        <meta property="og:title" content="Portfolio - Vibe!" />
        <meta
          property="og:description"
          content="We know how to run your social media accounts, create online campaigns and content according to your needs."
        />
        <meta property="og:url" content="https://vibecreative.net/portfolio" />
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
        <div className="container lg:max-w-screen-xl lg:py-[100px] py-[60px]">
          <div className="flex justify-between md:flex-row flex-col gap-[30px] md:mb-[70px] mb-[40px]">
            <h2 className="basis-0 grow relative md:text-[48px] md:leading-[58px] text-[32px] leading-[38px] font-medium  after:content-[''] after:absolute after:w-[100px] after:h-[3px] after:left-0 after:bg-primary after:top-[-20px]">
              We know how to make your business grow!
            </h2>
            <p className="basis-0 grow lg:text-[16px] lg:leading-[30px] text-[15px] leading-[27px]">
              Take the chance to make your business shine better than others. We
              will take care of your logo and brand identity, create a modern
              website, deliver quality social media content on a daily bases and
              advertise your company on the most popular platforms. In the
              meantime, you can be fully committed to your core business
            </p>
          </div>
          <div className="flex flex-wrap gap-[16px] items-center justify-center">
            {newPortfolio.map((item, index) => {
              return (
                <PortfolioCard
                  title={item.title}
                  url={item.url}
                  desc={item.desc}
                  image={item.image}
                  key={index}
                  isLast={index === newPortfolio.length - 1}
                  newLimit={() => setPage(page + 1)}
                />
              );
            })}
          </div>
        </div>
        <Newsletter />
      </main>
    </>
  );
}
