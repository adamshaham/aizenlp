import PropTypes from "prop-types";

const contentData = {
  title: "It’s helpful for operating system",
  features: [
    {
      title: "Ultra fast & Secure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit proin justo, elementum siIn morbi.",
      icon: "/vector-12.svg"
    },
    {
      title: "Allows customization",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit proin justo, elementum siIn morbi.",
      icon: "/vector-22.svg"
    },
    {
      title: "Smart contract",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit proin justo, elementum siIn morbi.",
      icon: "/vector-31.svg"
    }
  ],
  mainImage: "/group@2x.png",
  backgroundShape: "/feature-shape.svg"
};

const Features = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-end justify-start pt-0 pb-[107.5px] pl-[798px] pr-[157px] box-border gap-[116.4px] max-w-full shrink-0 text-left text-19xl-5 text-[#051114] font-body-base-regular gap-[29px] mq450:pl-5 mq450:box-border gap-[58px] mq800:pl-[199px] mq800:pr-[39px] mq800:pb-[70px] mq800:box-border mq1350:flex-wrap mq1350:pl-[399px] mq1350:pr-[78px] mq1350:box-border ${className}`}
    >
      <div className="ml-[-880.3px] h-[546.9px] w-[763.9px] flex flex-row items-start justify-start relative min-w-[763.9px] shrink-0 max-w-[172%] mq450:min-w-full mq800:min-w-full mq1125:min-w-full mq1350:flex-1 mq1350:min-w-full">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src={contentData.backgroundShape}
          />
          <img
            className="absolute top-[91.8px] left-[184.4px] w-[526px] h-[412.3px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src={contentData.mainImage}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[28.3px] box-border min-w-[444.5px] max-w-full mq450:min-w-full mq800:min-w-full mq1125:min-w-full mq1350:flex-1 mq1350:min-w-full">
        <div className="flex flex-col items-start justify-start gap-[43.7px] shrink-0 max-w-full gap-[22px]">
          <div className="relative leading-[130%] font-semibold mq450:text-4xl mq450:leading-[30px] mq800:text-12xl mq800:leading-[40px]">
            <p className="m-0"></p>
            <p className="m-0"></p>
          </div>
          <div className="flex flex-row items-start justify-start gap-[21.9px] max-w-full text-2xl-9">
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-[87.4px]">
                {contentData.features.map((feature, index) => (
                  <img
                    key={index}
                    className="w-[21px] h-[19.3px] relative"
                    alt=""
                    src={feature.icon}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[24.8px] max-w-[calc(100%_-_43px)]">
              {contentData.features.map((feature, index) => (
                <div key={index} className="flex flex-col items-start justify-start gap-[9px]">
                  <div className="relative leading-[33px] font-medium mq450:text-lg mq450:leading-[26px]"></div>
                  <div className="relative text-smi-3 leading-[160%] text-[#051114b3]">
                    <p className="m-0"></p>
                    <p className="m-0"></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
