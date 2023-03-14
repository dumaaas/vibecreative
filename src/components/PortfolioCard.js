export default function PortfolioCard({
  title,
  url,
  desc,
  image,
}) {

  return (
    <>
      <a
        className="lg:flex-[30%] sm:flex-[48%] flex-[100%] relative flex flex-col justify-end h-[390px] p-[30px] group overflow-hidden opacity-1 transition-all duration-300 ease-in-out"
        href={url}
        target="_blank"
      >
        <div
          className="absolute top-0 left-0 z-10 w-full h-full transition-all duration-300 ease-in-out group-hover:transform group-hover:scale-110"
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute top-0 left-0 z-10 w-full h-full transition-all duration-300 ease-in-out group-hover:opacity-0 bg-primary bg-opacity-80"></div>
        <div className="z-20 group-hover:opacity-0 transform group-hover:translate-y-[20px] translate-y-0 flex flex-col md:gap-[30px] gap-[22px] transition-all duration-200 ease-in-out">
          <h6 className="z-20 text-white md:text-[21px] md:leading-[25px] text-[19px] leading-[23px] font-medium">
            {title}
          </h6>
          <span className="z-20 md:text-[16px] md:leading-[24px] text-[15px] leading-[22px] text-white block">
            {desc}
          </span>
        </div>
      </a>
    </>
  );
}
