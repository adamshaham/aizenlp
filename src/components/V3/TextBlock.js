import { useMemo } from "react";
import Paragraphe from "./Paragraphe";
import PropTypes from "prop-types";

const TextBlock = ({
  className = "",
  propWidth,
  propFlexDirection,
  propHeight,
  iconType,
  propWidth1,
  propHeight1,
  aSingleSource,
  ofTruth,
  everWonderedIfYoureTooRel,
  onAClientForWorkSlateHelp,
  youIdentify,
}) => {
  const icroundRestaurantMenuStyle = useMemo(() => {
    return {
      width: propWidth,
      flexDirection: propFlexDirection,
      height: propHeight,
    };
  }, [propWidth, propFlexDirection, propHeight]);

  const iconTypeStyle = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight1,
    };
  }, [propWidth1, propHeight1]);

  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start text-left text-[20px] text-[#fff] font-body-base-regular ${className}`}
    >
      <div className="overflow-hidden flex flex-row items-start justify-start">
        <div
          className="w-[27.9px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[16.9px] px-0.5 pb-[16.8px] box-border"
          style={icroundRestaurantMenuStyle}
        >
          <img
            className="w-[22.6px] h-[21px] relative"
            loading="lazy"
            alt=""
            src={iconType}
            style={iconTypeStyle}
          />
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start pt-[8.9px] px-2 pb-[8.8px]">
          <div className="relative tracking-[0.1px] leading-[30px] font-medium mq450:text-[16px] mq450:leading-[24px]">
            <p className="m-0">{aSingleSource}</p>
            <p className="m-0">{ofTruth}</p>
          </div>
        </div>
      </div>
      <Paragraphe
        propWidth="266.7px"
        propWidth1="unset"
        propColor="#fff"
        propTextAlign="left"
        propFlex="1"
        propMinHeight="96px"
        everWonderedIfYoureTooRel={everWonderedIfYoureTooRel}
        onAClientForWorkSlateHelp={onAClientForWorkSlateHelp}
        youIdentify={youIdentify}
      />
    </div>
  );
};

TextBlock.propTypes = {
  className: PropTypes.string,
  iconType: PropTypes.string,
  aSingleSource: PropTypes.string,
  ofTruth: PropTypes.string,
  everWonderedIfYoureTooRel: PropTypes.string,
  onAClientForWorkSlateHelp: PropTypes.string,
  youIdentify: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth1: PropTypes.any,
  propHeight1: PropTypes.any,
};

export default TextBlock;
