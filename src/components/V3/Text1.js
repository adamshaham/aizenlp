import { useMemo } from "react";
import PropTypes from "prop-types";

const Text1 = ({
  className = "",
  propFlex,
  tryForFree,
  propMinWidth,
  propTextDecoration,
  propHeight,
  propDisplay,
  propFlex1,
}) => {
  const text2Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const tryForFreeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      textDecoration: propTextDecoration,
      height: propHeight,
      display: propDisplay,
      flex: propFlex1,
    };
  }, [propMinWidth, propTextDecoration, propHeight, propDisplay, propFlex1]);

  return (
    <div
      className={`overflow-hidden flex flex-row items-center justify-start pt-[8.9px] px-[27px] pb-[8.8px] text-left text-mid text-neutral-n0 font-body-base-regular ${className}`}
      style={text2Style}
    >
      <div
        className="relative tracking-[0.2px] leading-[25px] font-medium inline-block min-w-[98px]"
        style={tryForFreeStyle}
      >
        {tryForFree}
      </div>
    </div>
  );
};

Text1.propTypes = {
  className: PropTypes.string,
  tryForFree: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propFlex1: PropTypes.any,
};

export default Text1;
