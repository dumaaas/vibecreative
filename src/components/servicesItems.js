import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServicesItems({ type }) {
  const serviceItems = [
    {
      icon: "user",
      title: "Social Media Management",
      description:
        "Quality content for your social media pages on a daily basis with advertising according to your needs.",
    },
    {
      icon: "laptop",
      title: "Web Design",
      description: "Modern and functional websites, equally beautiful on both desktop and mobile devices.",
    },
    {
      icon: "paint-brush",
      title: "Graphic Design",
      description: "Whether it’s for print or for digital use, we design everything and enjoy it.",
    },
    {
      icon: "briefcase",
      title: "Business Registration",
      description: "Do you need help starting a company? You are in the right place!",
    },
    {
      icon: "at",
      title: "Email Marketing",
      description:
        "With our email campaigns your newsletter will reach thousands of people.",
    },
    {
      icon: "camera",
      title: "Photography",
      description: "Photography is one of our greatest passions. Let us share it with you!",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap items-center justify-between gap-[50px]">
      {serviceItems.map((item) => {
        return (
          <div
            key={item.title}
            className="lg:flex-[30%] flex-[46%] flex flex-col gap-[20px] items-center text-center"
          >
            <FontAwesomeIcon
              className="flex items-center justify-center rounded-full bg-primary w-[75px] h-[75px] p-[15px]"
              color="white"
              icon={item.icon}
            />
            <h3 className=" font-bold text-[16px] leading-[26px] lg:text-[20px] lg:leading-[32px]">
              {item.title}
            </h3>
            {type === "big" && (
              <p className="w-[80%] lg:text-[16px] lg:leading-[30px] text-[15px] leading-[27px]">{item.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
