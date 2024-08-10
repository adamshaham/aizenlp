import { useMemo } from "react";
import PropTypes from "prop-types";

const ButtonText = ({
  className = "",
  showRIcon = false,
  showLIcon = false,
  buttonText = "Watch video",
  propAlignSelf,
  propBorderRadius,
  propBorder,
  propBackgroundColor,
  propWidth,
  propBackdropFilter,
  propFlex,
  propPadding,
  propBackground,
  propHeight,
  lIcon,
  propHeight1,
  propWidth1,
  propMinHeight,
  propAlignSelf1,
  propHeight2,
  propFlex1,
  propAlignSelf2,
  propWidth2,
  propMinWidth,
  propColor,
  propDisplay,
  propHeight3,
  rIcon,
  propHeight4,
  propWidth3,
  propMinHeight1,
}) => {
  const buttonTextStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      borderRadius: propBorderRadius,
      border: propBorder,
      backgroundColor: propBackgroundColor,
      width: propWidth,
      backdropFilter: propBackdropFilter,
      flex: propFlex,
      padding: propPadding,
      background: propBackground,
      height: propHeight,
    };
  }, [
    propAlignSelf,
    propBorderRadius,
    propBorder,
    propBackgroundColor,
    propWidth,
    propBackdropFilter,
    propFlex,
    propPadding,
    propBackground,
    propHeight,
  ]);

  const lIconStyle = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth1,
      minHeight: propMinHeight,
    };
  }, [propHeight1, propWidth1, propMinHeight]);

  const textWrapperStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      height: propHeight2,
      flex: propFlex1,
    };
  }, [propAlignSelf1, propHeight2, propFlex1]);

  const textStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      width: propWidth2,
      minWidth: propMinWidth,
      color: propColor,
      display: propDisplay,
      height: propHeight3,
    };
  }, [
    propAlignSelf2,
    propWidth2,
    propMinWidth,
    propColor,
    propDisplay,
    propHeight3,
  ]);

  const rIconStyle = useMemo(() => {
    return {
      height: propHeight4,
      width: propWidth3,
      minHeight: propMinHeight1,
    };
  }, [propHeight4, propWidth3, propMinHeight1]);

  return (
    <button
      className={`cursor-pointer border-[#b6d1fb] border-[1px] border-solid py-[11.7px] px-[18px] bg-[#fff] self-stretch w-[124px] [backdrop-filter:blur(11.67px)] rounded-[11.6px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center ${className}`}
      style={buttonTextStyle}
    >
      {showLIcon && (
        <img
          className="h-[23.3px] w-[23.3px] relative min-h-[23px]"
          alt=""
          src={lIcon}
          style={lIconStyle}
        />
      )}
      <div
        className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-center pt-[2.1px] px-1.5 pb-[2.2px]"
        style={textWrapperStyle}
      >
        <b
          className="self-stretch w-[71px] relative text-[15.6px] leading-[122%] inline-block font-dm-sans text-[#387ff5] text-left"
          style={textStyle}
        >
          {buttonText}
        </b>
      </div>
      {showRIcon && (
        <img
          className="h-[23.3px] w-[23.3px] relative min-h-[23px]"
          alt=""
          src={rIcon}
          style={rIconStyle}
        />
      )}
    </button>
  );
};

ButtonText.propTypes = {
  className: PropTypes.string,
  showRIcon: PropTypes.bool,
  showLIcon: PropTypes.bool,
  buttonText: PropTypes.string,
  lIcon: PropTypes.string,
  rIcon: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propBorder: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propWidth: PropTypes.any,
  propBackdropFilter: PropTypes.any,
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propBackground: PropTypes.any,
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
  propWidth1: PropTypes.any,
  propMinHeight: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propHeight2: PropTypes.any,
  propFlex1: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propWidth2: PropTypes.any,
  propMinWidth: PropTypes.any,
  propColor: PropTypes.any,
  propDisplay: PropTypes.any,
  propHeight3: PropTypes.any,
  propHeight4: PropTypes.any,
  propWidth3: PropTypes.any,
  propMinHeight1: PropTypes.any,
};

export default ButtonText;
