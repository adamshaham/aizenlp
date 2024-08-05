import { useMemo } from "react";
import SmallEyebrowTagLabelStyle from "./SmallEyebrowTagLabelStyle";
import ButtonGroupMoreInfo from "./ButtonGroupMoreInfo";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  propWidth,
  headline,
  description,
  iconAI,
  content,
  icon,
  showLIcon1,
  showRIcon1,
}) => {
  const secitonHeadlingLevel11Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-center text-18xl-9 text-[#1c1f25] font-dm-sans ${className}`}
    >
      <div
        className="w-[505.6px] flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-stack-3xl max-w-[505.56px] gap-stack-3xl mq750:max-w-full"
        style={secitonHeadlingLevel11Style}
      >
        <div className="self-stretch flex flex-col items-center justify-start gap-stack-lg1 max-w-full shrink-0">
          <SmallEyebrowTagLabelStyle
            content={content}
            icon={icon}
            propWidth="unset"
            iconAI={iconAI}
            propDisplay="inline-block"
            propMinWidth="106px"
          />
          <div className="self-stretch flex flex-row items-center justify-start max-w-full shrink-0">
            <b className="flex-1 relative leading-[116%] inline-block max-w-full mq450:text-4xl mq450:leading-[26px] mq1050:text-11xl mq1050:leading-[35px]">
              {headline}
            </b>
          </div>
          <div className="w-full flex flex-row items-center justify-start py-0 px-[19px] box-border max-w-[797.22px] shrink-0 text-base-6 text-dimgray-200 font-body-base-regular mq1050:max-w-full">
            <div className="flex-1 relative leading-[160%] inline-block max-w-full">
              {description}
            </div>
          </div>
        </div>
        <ButtonGroupMoreInfo
          lIcon="/l-icon2.svg"
          lIcon1="/l-icon3.svg"
          buttonText="Get a demo"
          buttonText1="Research"
          rIcon="/r-icon2.svg"
          rIcon1="/r-icon4.svg"
          showRIcon={false}
          showRIcon1={false}
          showLIcon={false}
          showLIcon1={false}
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  headline: PropTypes.string,
  description: PropTypes.string,
  iconAI: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.bool,
  showLIcon1: PropTypes.bool,
  showRIcon1: PropTypes.bool,

  /** Style props */
  propWidth: PropTypes.any,
};

export default FrameComponent;
