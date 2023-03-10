import Image from "next/image";
import vibePic from "../../public/vibe-about.png";
export default function About({ type }) {
  return (
    <div
      className={`${
        type === "left" ? "bg-[#F7F7F7]" : "bg-white"
      } bg-[#F7F7F7] md:py-[80px] py-[60px]`}
    >
      <div
        className={`${
          type === "left" ? "items-start" : "items-center"
        } container lg:max-w-screen-xl flex md:flex-row flex-col items-start justify-between gap-[50px]`}
      >
        <div
          className={`${type === "left" ? "md:order-1" : "md:order-2"} flex-[50%]`}
        >
          <div
            className={`${
              type === "left"
                ? "md:max-w-[450px] md:max-h-[606px] w-full"
                : "md:max-w-[540px] md:max-h-[727px] w-full"
            } `}
          >
            <Image src={vibePic} alt="vibe" />
          </div>
        </div>
        <div
          className={`${type === "left" ? "md:order-2" : "md:order-1"} flex-[50%]`}
        >
          <h2
            className={`${
              type === "left" ? "" : "hidden"
            } relative lg:text-[48px] lg:leading-[58px] text-[32px] leading-[38px] font-bold mb-[25px] after:content-[''] after:absolute after:w-[100px] after:h-[3px] after:left-0  after:bg-primary after:top-[-20px]`}
          >
            About Us
          </h2>
          <p className="tracking-[1px] font-bold lg:text-[16px] lg:leading-[30px] text-[15px] leading-[27px] text-[#1b1f29] mb-[20px]">
            We know how to run your social media accounts, create online
            campaigns and content according to your needs.
          </p>
          <p className="lg:text-[16px] lg:leading-[30px] text-[15px] leading-[27px] mb-[30px]">
            Vibe Creative LLC is a digital marketing agency based in Chicago,
            Illinois and specializes in social media and marketing campaigns.
            Our main goal and priority is to provide the best return of
            investment (ROI) to our customers!
          </p>
          <div className="flex md:flex-row flex-col gap-[70px] mb-[40px]">
            <div className="flex flex-col items-center text-center justify-center gap-[30px]">
              <h4 className="font-bold text-[72px] leading-[86px] text-primary">
                6
              </h4>
              <p className="md:text-[24px] md:leading-[36px] text-[18px] leading-[30px] font-bold">
                Years of Experiance
              </p>
            </div>
            <div className="flex flex-col items-center text-center justify-center gap-[30px]">
              <h4 className="font-bold text-[72px] leading-[86px] text-primary">
                100+
              </h4>
              <p className="md:text-[24px] md:leading-[36px] text-[18px] leading-[30px] font-bold">
                Completed projects
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <button className={`${type === "left" ? "" : "hidden"}`}>
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
