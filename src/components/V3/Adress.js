import { useMemo } from "react";
import PropTypes from "prop-types";

const Adress = ({
  className = "",
  propAlignSelf,
  propFlex,
  propPadding,
  propWidth,
  placeholderLabel,
  propWidth1,
  propTextAlign,
  propTextDecoration,
  propMinWidth,
  propDisplay,
  propFlex1,
}) => {
  const adressStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propFlex, propPadding, propWidth]);

  const placeholderLabelStyle = useMemo(() => {
    return {
      width: propWidth1,
      textAlign: propTextAlign,
      textDecoration: propTextDecoration,
      minWidth: propMinWidth,
      display: propDisplay,
      flex: propFlex1,
    };
  }, [
    propWidth1,
    propTextAlign,
    propTextDecoration,
    propMinWidth,
    propDisplay,
    propFlex1,
  ]);

  return (
    <div
      className={`self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start py-0 px-[7px] z-[1] text-left text-base text-[#fff] font-body-base-regular ${className}`}
      style={adressStyle}
    >
      <div
        className="w-[121px] relative tracking-[0.2px] leading-[24px] font-medium inline-block"
        style={placeholderLabelStyle}
      >
        {placeholderLabel}
      </div>
    </div>
  );
};

Adress.propTypes = {
  className: PropTypes.string,
  placeholderLabel: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propTextAlign: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propFlex1: PropTypes.any,
};

export default Adress;
