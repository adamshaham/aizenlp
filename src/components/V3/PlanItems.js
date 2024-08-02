import { useMemo } from "react";
import PropTypes from "prop-types";

const PlanItems = ({
  className = "",
  startUp,
  propWidth,
  propMinWidth,
  propAlignSelf,
  propDisplay,
  propMinWidth1,
  prop,
  propTextAlign,
  propTextAlign1,
  singalUserLicense,
  propMinWidth2,
  propTextAlign2,
}) => {
  const startUpStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const planDurationsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const moStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  const easyCustomizableStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const commerciaLicenseStyle = useMemo(() => {
    return {
      textAlign: propTextAlign1,
    };
  }, [propTextAlign1]);

  const singalUserLicenseStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const hotlineSupport247Style = useMemo(() => {
    return {
      textAlign: propTextAlign2,
    };
  }, [propTextAlign2]);

  return (
    <div
      className={`shadow-[0px_5.3px_43.75px_4.38px_rgba(6,_14,_26,_0.05)] rounded-[8.75px] bg-neutral-n0 flex flex-col items-start justify-start pt-[43.7px] px-[59px] pb-[44.5px] gap-[34.8px] text-center text-lgi-3 text-gray-200 font-body-base-regular gap-[17px] mq450:pt-7 mq450:px-5 mq450:pb-[29px] mq450:box-border ${className}`}
    >
      <div className="w-[315px] h-[420px] relative shadow-[0px_5.3px_43.75px_4.38px_rgba(6,_14,_26,_0.05)] rounded-[8.75px] bg-neutral-n0 hidden" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[19px] pr-[22px]">
        <div className="flex-1 flex flex-col items-end justify-start gap-[11.3px]">
          <div className="flex flex-row items-start justify-end py-0 pl-[39px] pr-[38px]">
            <div
              className="w-[78px] relative leading-[29px] font-medium inline-block min-w-[78px] z-[1]"
              style={startUpStyle}
            >
              {startUp}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[5.2px] text-19xl-5 text-black1">
            <div className="self-stretch h-[0.9px] relative border-black1 border-t-[0.9px] border-solid box-border z-[1]" />
            <div
              className="self-stretch flex flex-row items-start justify-end py-0 pl-[17px] pr-2"
              style={planDurationsStyle}
            >
              <div className="relative z-[1] mq450:text-3xl" style={moStyle}>
                <span className="leading-[130%] font-semibold">{prop}</span>
                <span className="text-9xl leading-[140%] font-medium">/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-7 pr-[31px] text-sm text-black1">
        <div className="flex-1 flex flex-col items-end justify-start gap-[8.8px] opacity-[0.7] z-[1]">
          <div className="flex flex-row items-start justify-end py-0 px-[5px]">
            <div
              className="relative leading-[160%] inline-block min-w-[126px]"
              style={easyCustomizableStyle}
            >
              Easy Customizable
            </div>
          </div>
          <div className="flex flex-row items-start justify-end py-0 pl-[5px] pr-1">
            <div
              className="relative leading-[23px] inline-block min-w-[127px]"
              style={commerciaLicenseStyle}
            >
              Commercia license
            </div>
          </div>
          <div className="flex flex-row items-start justify-end py-0 pl-[7px] pr-[5px]">
            <div
              className="relative leading-[23px] inline-block min-w-[125px]"
              style={singalUserLicenseStyle}
            >
              {singalUserLicense}
            </div>
          </div>
          <div
            className="relative leading-[160%]"
            style={hotlineSupport247Style}
          >
            Hotline support 24/7
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] pt-[13.2px] px-[25px] pb-[13.1px] bg-[transparent] rounded-[4.38px] [background:linear-gradient(90deg,_rgba(124,_29,_201,_0.1),_rgba(124,_29,_201,_0.1))] flex flex-row items-start justify-start whitespace-nowrap z-[1]">
        <div className="relative text-sm tracking-[0.05em] leading-[160%] font-medium font-body-base-regular text-first-text text-center">
          TRY THIS PACKAGE
        </div>
      </button>
    </div>
  );
};

PlanItems.propTypes = {
  className: PropTypes.string,
  startUp: PropTypes.string,
  prop: PropTypes.string,
  singalUserLicense: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propTextAlign: PropTypes.any,
  propTextAlign1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propTextAlign2: PropTypes.any,
};

export default PlanItems;
