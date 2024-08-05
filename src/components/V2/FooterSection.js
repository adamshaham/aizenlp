import PropTypes from "prop-types";

const FooterSection = ({ className = "" }) => {
  return (
    <div
      className={`w-[267.8px] flex flex-col items-start justify-start gap-[24.9px] text-left text-sm text-darkoverlayelement-do70 font-body-base-regular ${className}`}
    >
      <div className="w-[103px] relative text-lgi-3 leading-[140%] font-medium font-poppins text-[#fff] inline-block z-[1]">
        Newsletter
      </div>
      <div className="w-[210.9px] relative leading-[160%] inline-block z-[1]">
        Sign up and receive the lastest news via email.
      </div>
      <div className="self-stretch h-[48.3px] rounded-[4.38px] border-gray-300 border-[0.9px] border-solid box-border flex flex-row items-start justify-between pt-0 pb-[13.2px] pl-[26px] pr-0 gap-5 z-[1] text-center">
        <div className="flex flex-col items-start justify-start pt-[13.1px] px-0 pb-0">
          <div className="relative leading-[160%] inline-block min-w-[93px]">
            Email address
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[13.1px] px-[26px] pb-[13.9px] bg-blueviolet-200 rounded-tl-none rounded-tr-[4.38px] rounded-br-[4.38px] rounded-bl-none flex flex-row items-start justify-start z-[2] hover:bg-blueviolet-100">
          <div className="relative text-sm leading-[160%] font-medium font-body-base-regular text-[#fff] text-center inline-block min-w-[35px]">
            Send
          </div>
        </button>
      </div>
    </div>
  );
};

FooterSection.propTypes = {
  className: PropTypes.string,
};

export default FooterSection;
