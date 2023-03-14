import Image from "next/image";
import Link from "next/link";

export default function IndexHero() {
  return (
    <div className="relative flex items-center justify-center min-h-[700px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 object-cover w-full h-full"
      >
        <source src="/Video.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full object-cover bg-black opacity-[0.65]"></div>
      <div className="container lg:max-w-screen-xl z-10 relative py-0 px-[20px] text-center text-white">
        <h1 className=" lg:text-[72px] lg:leading-[79px] font-semibold color-white lg:mb-[25px] text-[48px] leading-[53px] mb-[20px]">
          It’s all about vibes!
        </h1>
        <p className="lg:text-[24px] lg:leading-[36px] text-white mb-[40px] text-[20px] leading-[30px]">
          We know how to make your business grow.
        </p>
        <Link className="btn" href="/contact">
          Contact us
        </Link>
      </div>
    </div>
  );
}
