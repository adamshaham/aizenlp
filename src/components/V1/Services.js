import Misi from "./Misi";
import PropTypes from "prop-types";

const contentdata = {
  title: {
    part1: "Our landscaping work and ",
    highlighted: "services",
  },
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis.",
  services: [
    {
      icon: "/icon2.svg",
      title: "Lawn Care",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante.",
    },
    {
      icon: "/icon3.svg",
      our: "Tree and",
      mission: " Shrub Care",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante.",
    },
    {
      icon: "/icon4.svg",
      our: "Free ",
      mission: "Consultations ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante.",
    },
    {
      icon: "/icon5.svg",
      our: "Garden ",
      mission: "Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante.",
    },
    {
      icon: "/icon6.svg",
      our: "Water ",
      mission: "Features",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante.",
    },
    {
      icon: "/icon7.svg",
      our: "Irrigation ",
      mission: "Systems",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante.",
    },
  ],
};

const Services = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[81.5px] box-border max-w-full text-left text-46xl-1 text-[#232a42] font-montserrat mq1050:pb-[53px] mq1050:box-border mq750:pb-[34px] mq750:box-border ${className}`}
    >
      <div className="w-[1440.4px] flex flex-row items-center justify-center gap-[77.5px] max-w-full gap-[19px] gap-[39px]">
        <div className="w-[1440.8px] flex flex-col items-start justify-start gap-[23.3px] max-w-full">
          <div className="self-stretch relative leading-[70px] font-semibold mq1050:text-33xl mq1050:leading-[56px] mq450:text-20xl mq450:leading-[42px]">
            <span>{contentdata.title.part1}</span>
            <span className="text-[#2da884]">{contentdata.title.highlighted}</span>
          </div>
          <div className="self-stretch relative text-base-6 leading-[23.33px] font-medium font-plus-jakarta-sans text-[#525252]">
            {contentdata.description}
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-x-[38px] gap-y-[36.9px] min-h-[600px] max-w-full text-8xl-2 text-[#fff] gap-[18px]">
          {contentdata.services.map((service, index) => (
            <div key={index} className="w-[377px] shadow-[17.5px_14.6px_34.03px_rgba(0,_0,_0,_0.09)] rounded-[15.56px] bg-[#2da884] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[38.9px] px-[23px] box-border gap-[15.5px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[23.4px]">
                <img
                  className="w-[62.2px] h-[62.2px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={service.icon}
                />
                <div className="self-stretch relative leading-[32px] font-semibold shrink-0 mq450:text-3xl mq450:leading-[25px]">
                  {service.title || `${service.our}${service.mission}`}
                </div>
              </div>
              <div className="self-stretch relative text-base-6 leading-[23.33px] font-medium font-plus-jakarta-sans">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Services.propTypes = {
  className: PropTypes.string,
};

export default Services;