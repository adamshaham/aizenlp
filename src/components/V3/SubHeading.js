import { useMemo } from "react";
import PropTypes from "prop-types";

const SubHeading = ({
  className = "",
  propPadding,
  propWidth,
  propHeight,
  weFocusOnErgonomicsAndMee,
  itsOnlyAKeystrokeAway,
}) => {
  const subHeadingStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const weFocusOnContainerStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div
      className={`overflow-hidden flex flex-row items-center justify-start pt-[8.8px] px-2 pb-[8.9px] text-center text-xl text-[#fff] font-body-base-regular ${className}`}
      style={subHeadingStyle}
    >
      <div
        className="w-[571px] relative tracking-[0.2px] leading-[30px] inline-block mq450:text-base mq450:leading-[24px]"
        style={weFocusOnContainerStyle}
      >
        <p className="m-0">{weFocusOnErgonomicsAndMee}</p>
        <p className="m-0">{itsOnlyAKeystrokeAway}</p>
      </div>
    </div>
  );
};

SubHeading.propTypes = {
  className: PropTypes.string,
  weFocusOnErgonomicsAndMee: PropTypes.string,
  itsOnlyAKeystrokeAway: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
};

export default SubHeading;
