import Head from "next/head";
import Image from "next/image";
import IndexHero from "@/components/indexHero";
import AboutComponent from "@/components/about";
import { ourTeam } from "@/helpers/staticData";
import Newsletter from "@/components/newsletter";
import ServicesItems from "@/components/servicesItems";

export default function About() {
  return (
    <>
      <Head>
        <title>Services - Vibe!</title>
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
        <meta property="og:title" content="Services - Vibe!" />
        <meta
          property="og:description"
          content="We know how to run your social media accounts, create online campaigns and content according to your needs."
        />
        <meta property="og:url" content="https://vibecreative.net/services" />
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
        <div className="container py-[60px] lg:max-w-screen-xl">
          <ServicesItems type="big" />
        </div>
        <Newsletter />
      </main>
    </>
  );
}
