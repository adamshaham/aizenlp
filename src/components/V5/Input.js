import { useMemo } from "react";
import PropTypes from "prop-types";

const Input = ({
  className = "",
  propAlignSelf,
  propBackgroundColor,
  propFlex,
  propMinWidth,
  propFlexDirection,
  yourEmailPlaceholder,
  propWidth,
}) => {
  const inputStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      backgroundColor: propBackgroundColor,
      flex: propFlex,
      minWidth: propMinWidth,
      flexDirection: propFlexDirection,
    };
  }, [
    propAlignSelf,
    propBackgroundColor,
    propFlex,
    propMinWidth,
    propFlexDirection,
  ]);

  const yourEmailStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`self-stretch rounded-[37.92px] bg-whitesmoke-200 border-gainsboro-100 border-[1px] border-solid overflow-hidden flex flex-col items-start justify-start py-[17px] px-[34px] ${className}`}
      style={inputStyle}
    >
      <input
        className="w-[66px] [border:none] [outline:none] font-button1 text-sm-6 bg-[transparent] h-4 relative tracking-[0.1px] leading-[15.56px] text-background text-left inline-block p-0"
        placeholder={yourEmailPlaceholder}
        type="text"
        style={yourEmailStyle}
      />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  yourEmailPlaceholder: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Input;
