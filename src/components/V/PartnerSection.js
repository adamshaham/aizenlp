import PropTypes from "prop-types";

const contentData = {
  header: "160,000+ customers in over 120 countries grow their businesses with Neuros",
  partnerLogos: [
    { src: "/vector.svg", alt: "" },
    { src: "/vector-1.svg", alt: "" },
    { src: "/vector-2.svg", alt: "" },
    { src: "/vector-3.svg", alt: "" },
    { src: "/vector-4.svg", alt: "" },
    { src: "/vector-5.svg", alt: "" },
    { src: "/vector-6.svg", alt: "" },
    { src: "/vector-7.svg", alt: "" },
    { src: "/vector-8.svg", alt: "" },
    { src: "/vector-9.svg", alt: "" },
  ]
};

const PartnerSection = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-[#fff] flex flex-col items-center justify-start pt-[38.9px] px-5 pb-[58px] box-border min-h-[314px] shrink-0 max-w-full text-center text-base text-[#4b5162cc] font-body-base-regular ${className}`}
    >
      <div className="w-[1440.6px] flex flex-col items-center justify-start pt-0 px-0 pb-[0.1px] box-border gap-[19.4px] max-w-[1440.56px] lg:max-w-full">
        <div className="self-stretch relative leading-[160%]">
          {contentData.header}
        </div>
        <div className="w-full h-[172.2px] overflow-x-auto shrink-0 flex flex-row flex-wrap items-center justify-center pt-[19.5px] pb-[19.4px] pl-[53px] pr-[52px] box-border gap-x-stack-4xl gap-y-stack-4xl min-w-[972.22px] max-w-[1170.56px] lg:pl-[26px] lg:pr-[26px] lg:box-border lg:max-w-full gap-stack-4xl">
          {contentData.partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[6.2px] px-[18px] pb-[6.4px] box-border min-w-[181px]"
            >
              <img
                className="h-[34.1px] w-[144.4px] relative"
                loading="lazy"
                alt={logo.alt}
                src={logo.src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

PartnerSection.propTypes = {
  className: PropTypes.string,
};

export default PartnerSection;
