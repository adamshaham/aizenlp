import { useMemo } from "react";
import PropTypes from "prop-types";

const UserCard = ({
  className = "",
  propAlignSelf,
  propFlex,
  propWidth,
  propWidth1,
  imgLibAvaCartoon,
  propFlex1,
  propAlignSelf1,
  propAlignSelf2,
  propFlex2,
  propWidth2,
  name1,
  propAlignSelf3,
  propWidth3,
  propHeight,
  propDisplay,
  propFlex3,
  position,
  propWidth4,
  propAlignSelf4,
  propHeight1,
  propDisplay1,
  propMinWidth,
}) => {
  const userCard2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      width: propWidth,
    };
  }, [propAlignSelf, propFlex, propWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const nameWrapperStyle = useMemo(() => {
    return {
      flex: propFlex1,
      alignSelf: propAlignSelf1,
    };
  }, [propFlex1, propAlignSelf1]);

  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      flex: propFlex2,
      width: propWidth2,
    };
  }, [propAlignSelf2, propFlex2, propWidth2]);

  const nameStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf3,
      width: propWidth3,
      height: propHeight,
      display: propDisplay,
      flex: propFlex3,
    };
  }, [propAlignSelf3, propWidth3, propHeight, propDisplay, propFlex3]);

  const positionStyle = useMemo(() => {
    return {
      width: propWidth4,
      alignSelf: propAlignSelf4,
      height: propHeight1,
      display: propDisplay1,
      minWidth: propMinWidth,
    };
  }, [propWidth4, propAlignSelf4, propHeight1, propDisplay1, propMinWidth]);

  return (
    <div
      className={`self-stretch flex-1 flex flex-col items-end justify-start pt-0 px-0 pb-[0.1px] gap-[15.5px] text-center text-base-6 text-[#343844] font-body-base-regular ${className}`}
      style={userCard2Style}
    >
      <div
        className="w-[43px] flex flex-row items-start justify-end py-0 pl-3 pr-[45px] box-border"
        style={frameDivStyle}
      >
        <div className="h-[31.1px] w-[31.1px] relative rounded-[38.89px] border-neutralalpha-na60 border-[1px] border-solid box-border overflow-hidden shrink-0">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={imgLibAvaCartoon}
          />
        </div>
      </div>
      <div
        className="self-stretch flex-1 flex flex-col items-start justify-start"
        style={nameWrapperStyle}
      >
        <div
          className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-[13px] pr-0"
          style={frameDiv1Style}
        >
          <div
            className="self-stretch w-11 relative leading-[160%] font-semibold inline-block shrink-0"
            style={nameStyle}
          >
            {name1}
          </div>
        </div>
        <div
          className="w-[33px] h-[25px] relative leading-[160%] text--[#4b5162] inline-block"
          style={positionStyle}
        >
          {position}
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  className: PropTypes.string,
  imgLibAvaCartoon: PropTypes.string,
  name1: PropTypes.string,
  position: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propFlex1: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propFlex2: PropTypes.any,
  propWidth2: PropTypes.any,
  propAlignSelf3: PropTypes.any,
  propWidth3: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propFlex3: PropTypes.any,
  propWidth4: PropTypes.any,
  propAlignSelf4: PropTypes.any,
  propHeight1: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default UserCard;
