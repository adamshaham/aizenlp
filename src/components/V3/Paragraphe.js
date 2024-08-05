import { useMemo } from "react";
import PropTypes from "prop-types";

const Paragraphe = ({
  className = "",
  propWidth,
  propWidth1,
  propColor,
  propTextAlign,
  propFlex,
  propMinHeight,
  everWonderedIfYoureTooRel,
  onAClientForWorkSlateHelp,
  youIdentify,
}) => {
  const paragrapheStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const everWonderedIfContainerStyle = useMemo(() => {
    return {
      width: propWidth1,
      color: propColor,
      textAlign: propTextAlign,
      flex: propFlex,
      minHeight: propMinHeight,
    };
  }, [propWidth1, propColor, propTextAlign, propFlex, propMinHeight]);

  return (
    <div
      className={`overflow-hidden flex flex-row items-center justify-start pt-[8.8px] px-2 pb-[8.9px] text-center text-base text-[#5d5d5d] font-body-base-regular ${className}`}
      style={paragrapheStyle}
    >
      <div
        className="w-[268px] relative tracking-[0.2px] leading-[24px] inline-block"
        style={everWonderedIfContainerStyle}
      >
        <p className="m-0">{everWonderedIfYoureTooRel}</p>
        <p className="m-0">{onAClientForWorkSlateHelp}</p>
        <p className="m-0">{youIdentify}</p>
      </div>
    </div>
  );
};

Paragraphe.propTypes = {
  className: PropTypes.string,
  everWonderedIfYoureTooRel: PropTypes.string,
  onAClientForWorkSlateHelp: PropTypes.string,
  youIdentify: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propColor: PropTypes.any,
  propTextAlign: PropTypes.any,
  propFlex: PropTypes.any,
  propMinHeight: PropTypes.any,
};

export default Paragraphe;
