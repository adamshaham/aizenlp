import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  const contentdata = {
    title: "Gardens of Distinction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis.",
    buttons: {
      getStarted: "Get Started",
      learnMore: "Learn More",
    },
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "10K+", label: "Product" },
      { value: "5K+", label: "Satisfied Clients" },
      { value: "87+", label: "Local Team Members" },
    ],
  };

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px] box-border max-w-full text-center text-[134.2px] text-[#fff] font-montserrat ${className}`}
    >
      <div className="w-[1031.5px] flex flex-col items-end justify-start gap-[100.5px] max-w-full gap-[50px] gap-[25px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[54.1px] max-w-full gap-[27px]">
          <div className="self-stretch flex flex-col items-end justify-start gap-[23.3px] max-w-full">
            <b className="self-stretch relative leading-[140px] z-[1] mq1050:text-[54px] mq1050:leading-[84px] mq450:text-[34px] mq450:leading-[56px]">
              {contentdata.title}
            </b>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-[15.6px] font-plus-jakarta-sans">
              <div className="w-[710.7px] relative leading-[23.33px] font-medium inline-block shrink-0 max-w-full z-[1]">
                {contentdata.description}
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[434.6px] flex flex-row flex-wrap items-start justify-start gap-[38.9px] max-w-full gap-[19px]">
              <button className="cursor-pointer [border:none] py-[31.1px] px-[38px] bg-[#2da884] rounded-[97.22px] overflow-hidden flex flex-row items-start justify-start shrink-0 whitespace-nowrap z-[1] hover:bg-[#47c29e]">
                <div className="relative text-[20px]-4 leading-[24px] font-semibold font-montserrat text-[#fff] text-center inline-block min-w-[121px]">
                  {contentdata.buttons.getStarted}
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-[31.1px] px-[38px] bg-[#fff] flex-1 rounded-[97.22px] overflow-hidden flex flex-row items-start justify-start box-border min-w-[128px] shrink-0 whitespace-nowrap z-[1] hover:bg-[#e6e6e6]">
                <div className="flex-1 relative text-[20px]-4 leading-[24px] font-semibold font-montserrat text-[#2da884] text-center inline-block min-w-[119.6px]">
                  {contentdata.buttons.learnMore}
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[37px] pr-[35px] box-border max-w-full text-[50px] text-[#232a42]">
          <div className="flex-1 rounded-[15.56px] bg-[#fff] overflow-hidden flex flex-row items-start justify-between py-[31.1px] px-[31px] box-border max-w-full gap-5 z-[1] mq1050:flex-wrap">
            {contentdata.stats.map((stat, index) => (
              <div
                key={index}
                className="w-[127px] flex flex-col items-start justify-start gap-[7.8px]"
              >
                <div className="self-stretch relative leading-[55px] font-semibold mq1050:text-[40px] mq1050:leading-[44px] mq450:text-[30px] mq450:leading-[33px]">
                  <span>{stat.value}</span>
                </div>
                <div className="relative text-[15.6px] tracking-[-0.01px] leading-[24px] font-medium font-plus-jakarta-sans text-[#525252] inline-block min-w-[127px]">
                  {stat.label}
                </div>
              </div>
            ))}
            <div className="h-[78.4px] flex flex-col items-start justify-start pt-[8.4px] px-0 pb-0 box-border">
              <img
                className="w-px flex-1 relative max-h-full"
                loading="lazy"
                alt=""
                src="/vector-13.svg"
              />
            </div>
            <div className="h-[78.4px] flex flex-col items-start justify-start pt-[8.4px] px-0 pb-0 box-border">
              <img
                className="w-px flex-1 relative max-h-full"
                loading="lazy"
                alt=""
                src="/vector-23.svg"
              />
            </div>
            <div className="h-[78.4px] flex flex-col items-start justify-start pt-[8.4px] px-0 pb-0 box-border">
              <img
                className="w-px flex-1 relative max-h-full"
                alt=""
                src="/vector-32.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
