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
        <title>Next Template Website</title>
        <meta name="description" content="Next template for websites..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
