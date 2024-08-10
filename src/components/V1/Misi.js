import { useMemo } from "react";
import PropTypes from "prop-types";

const Misi = ({
  className = "",
  propAlignSelf,
  propWidth,
  icon,
  propOverflow,
  our,
  mission,
  loremIpsumDolorSitAmetCon,
}) => {
  const misiStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const iconStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div
      className={`self-stretch shadow-[17.5px_14.6px_34.03px_rgba(0,_0,_0,_0.09)] rounded-[15.56px] bg-[#fff] overflow-hidden flex flex-col items-start justify-start py-[38.9px] px-[23px] gap-[15.5px] text-left text-[27.2px] text-[#232a42] font-montserrat ${className}`}
      style={misiStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[23.4px]">
        <img
          className="w-[62.2px] h-[62.2px] relative shrink-0"
          loading="lazy"
          alt=""
          src={icon}
          style={iconStyle}
        />
        <div className="self-stretch relative leading-[32px] font-semibold shrink-0 mq450:text-[22px] mq450:leading-[25px]">
          <span>{our}</span>
          <span className="text-[#2da884]">{mission}</span>
        </div>
      </div>
      <div className="self-stretch relative text-[15.6px] leading-[23.33px] font-medium font-plus-jakarta-sans text-[#525252]">
        {loremIpsumDolorSitAmetCon}
      </div>
    </div>
  );
};

Misi.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  our: PropTypes.string,
  mission: PropTypes.string,
  loremIpsumDolorSitAmetCon: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propOverflow: PropTypes.any,
};

export default Misi;
