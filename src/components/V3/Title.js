import { useMemo } from "react";
import PropTypes from "prop-types";

const Title = ({
  className = "",
  propWidth,
  propFlex,
  designWithRealData,
  propColor,
  propTextAlign,
  propFlex1,
  propWidth1,
  propDisplay,
  propMinWidth,
}) => {
  const titleStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  const designWithRealStyle = useMemo(() => {
    return {
      color: propColor,
      textAlign: propTextAlign,
      flex: propFlex1,
      width: propWidth1,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [
    propColor,
    propTextAlign,
    propFlex1,
    propWidth1,
    propDisplay,
    propMinWidth,
  ]);

  return (
    <div
      className={`w-[219.7px] overflow-hidden flex flex-row items-center justify-start pt-[8.8px] px-2 pb-[8.9px] box-border text-center text-[20px] text-[#000] font-body-base-regular ${className}`}
      style={titleStyle}
    >
      <div
        className="flex-1 relative tracking-[0.1px] leading-[30px] font-medium mq450:text-[16px] mq450:leading-[24px]"
        style={designWithRealStyle}
      >
        {designWithRealData}
      </div>
    </div>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  designWithRealData: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propColor: PropTypes.any,
  propTextAlign: PropTypes.any,
  propFlex1: PropTypes.any,
  propWidth1: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Title;
