import { useMemo } from "react";
import PropTypes from "prop-types";

const FullName = ({
  className = "",
  propPadding,
  fullName,
  enterYourFullNamePlacehol,
}) => {
  const fullNameStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[15.6px] max-w-full shrink-0 text-left text-xl-4 text-neutral-n0 font-montserrat ${className}`}
      style={fullNameStyle}
    >
      <div className="self-stretch relative leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
        {fullName}
      </div>
      <div className="self-stretch rounded-[38.89px] border-neutral-n0 border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-start py-3.5 pl-[15px] pr-3.5 max-w-full">
        <input
          className="w-full [border:none] [outline:none] font-medium font-plus-jakarta-sans text-base-6 bg-[transparent] h-6 flex-1 relative leading-[23.33px] text-neutral-n0 text-left inline-block min-w-[250px] max-w-full p-0"
          placeholder={enterYourFullNamePlacehol}
          type="text"
        />
      </div>
    </div>
  );
};

FullName.propTypes = {
  className: PropTypes.string,
  fullName: PropTypes.string,
  enterYourFullNamePlacehol: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default FullName;
