import { useMemo } from "react";
import Adress from "./Adress";
import Subtitle from "./Subtitle";
import PropTypes from "prop-types";

const contentData = {
  testimonialLines: [
    "you need to work to reach your financial ",
    "goal for the month and year. Slate helps ",
    "you see how many more days ",
    "you need to work to reach your financial ",
    "goal for the month and year."
  ]
};

const Card = ({
  className = "",
  propWidth,
  avatar,
  propFlex,
  placeholderLabel,
}) => {
  const clientStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const textContentStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`self-stretch rounded-[8.87px] bg-[#181818] border-[#dedede] border-[0.9px] border-solid flex flex-col items-start justify-start py-[34px] pl-[35px] pr-[25px] gap-[26.6px] text-left text-base text-[#fff] font-body-base-regular ${className}`}
    >
      <div
        className="overflow-hidden flex flex-row items-center justify-start gap-[11.5px]"
        style={clientStyle}
      >
        <img
          className="h-[44.3px] w-[44.3px] relative object-cover"
          alt=""
          src={avatar}
        />
        <div
          className="overflow-hidden flex flex-col items-start justify-start"
          style={textContentStyle}
        >
          <Adress
            propAlignSelf="unset"
            propFlex="unset"
            propPadding="0px 8px"
            propWidth="unset"
            placeholderLabel={placeholderLabel}
            propWidth1="unset"
            propTextAlign="left"
            propTextDecoration="unset"
            propMinWidth="96px"
            propDisplay="inline-block"
            propFlex1="unset"
          />
          <Subtitle />
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start">
        <div className="relative tracking-[0.2px] leading-[24px]">
          {contentData.testimonialLines.map((line, index) => (
            <p key={index} className="m-0">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  avatar: PropTypes.string,
  placeholderLabel: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Card;
