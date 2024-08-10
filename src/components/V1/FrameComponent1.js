import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  const contentData = {
    titlePart1: "Our ",
    titlePart2: "Gallery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis.",
    images: [
      "/image-placeholder-3@2x.png",
      "/image-placeholder-4@2x.png",
      "/image-placeholder-5@2x.png",
      "/image-placeholder-6@2x.png",
      "/image-placeholder-7@2x.png",
    ],
  };

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[82.5px] box-border max-w-full text-center text-[65px] text-[#232a42] font-montserrat mq1050:pb-[54px] mq1050:box-border mq450:pb-[35px] mq450:box-border ${className}`}
    >
      <div className="w-[1440.4px] flex flex-col items-start justify-start gap-[77.5px] max-w-full gap-[19px] gap-[39px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px] box-border max-w-full">
          <div className="w-[708.8px] flex flex-col items-start justify-start gap-[23.3px] max-w-full">
            <div className="self-stretch relative leading-[70px] font-semibold mq1050:text-[52px] mq1050:leading-[56px] mq450:text-[40px] mq450:leading-[42px]">
              <span>{contentData.titlePart1}</span>
              <span className="text-[#2da884]">{contentData.titlePart2}</span>
            </div>
            <div className="self-stretch relative text-[15.6px] leading-[23.33px] font-medium font-plus-jakarta-sans text-[#525252]">
              {contentData.description}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[38.9px] max-w-full gap-[19px]">
          <img
            className="h-[491.9px] flex-1 relative rounded-[15.56px] max-w-full overflow-hidden object-cover min-w-[283px] min-h-[492px]"
            loading="lazy"
            alt=""
            src={contentData.images[0]}
          />
          <div className="w-[367.5px] flex flex-col items-start justify-start gap-[38.8px] max-w-full gap-[19px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[38.9px] mq450:flex-wrap gap-[19px]">
              <img
                className="self-stretch flex-1 relative rounded-[15.56px] max-w-full overflow-hidden max-h-full object-cover min-w-[107px] min-h-[231px]"
                loading="lazy"
                alt=""
                src={contentData.images[1]}
              />
              <img
                className="self-stretch flex-1 relative rounded-[15.56px] max-w-full overflow-hidden max-h-full object-cover min-w-[107px] min-h-[231px]"
                loading="lazy"
                alt=""
                src={contentData.images[2]}
              />
            </div>
            <img
              className="self-stretch h-[221.7px] relative rounded-[15.56px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src={contentData.images[3]}
            />
          </div>
          <img
            className="w-[327.6px] relative rounded-[15.56px] max-h-full overflow-hidden shrink-0 object-cover min-h-[492px] max-w-full"
            loading="lazy"
            alt=""
            src={contentData.images[4]}
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
