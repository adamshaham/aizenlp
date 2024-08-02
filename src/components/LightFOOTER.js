import Adress from "./Adress";
import PropTypes from "prop-types";

const LightFOOTER = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-dark-background overflow-hidden flex flex-col items-center justify-start pt-[94.9px] px-5 pb-[94.8px] box-border max-w-full text-left text-xl text-neutral-n0 font-body-base-regular mq450:pt-[62px] mq450:pb-[62px] mq450:box-border ${className}`}
    >
      <div className="w-[943.3px] overflow-hidden flex flex-row items-start justify-between max-w-full gap-5 mq1000:flex-wrap">
        <div className="w-[454.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start min-w-[454.8px] max-w-full gap-[25px] mq725:min-w-full mq1000:flex-1">
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
            <div className="w-[107.3px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[35.5px]">
              <div className="w-[99px] overflow-hidden flex flex-row items-center justify-start">
                <div className="flex-1 relative tracking-[0.1px] leading-[30px] font-medium mq450:text-base mq450:leading-[24px]">
                  Fingertipe
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pl-0 pr-8 gap-[16.8px] text-base">
                <div className="w-[47px] overflow-hidden flex flex-row items-center justify-start">
                  <div className="flex-1 relative tracking-[0.2px] leading-[24px] font-medium">
                    Home
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="relative tracking-[0.2px] leading-[24px] font-medium inline-block min-w-[75px]">
                    Examples
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="relative tracking-[0.2px] leading-[24px] font-medium inline-block min-w-[56px]">
                    Pricing
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="relative tracking-[0.2px] leading-[24px] font-medium inline-block min-w-[65px]">
                    Updates
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[107.3px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[35.5px]">
              <div className="w-[101px] overflow-hidden flex flex-row items-center justify-start">
                <div className="flex-1 relative tracking-[0.1px] leading-[30px] font-medium mq450:text-base mq450:leading-[24px]">
                  Resources
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pl-0 pr-8 gap-[16.8px] text-base">
                <div className="w-[47px] overflow-hidden flex flex-row items-center justify-start">
                  <div className="flex-1 relative tracking-[0.2px] leading-[24px] font-medium">
                    Home
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="relative tracking-[0.2px] leading-[24px] font-medium inline-block min-w-[75px]">
                    Examples
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="relative tracking-[0.2px] leading-[24px] font-medium inline-block min-w-[56px]">
                    Pricing
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="relative tracking-[0.2px] leading-[24px] font-medium inline-block min-w-[65px]">
                    Updates
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[107.3px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[35.5px]">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <a className="[text-decoration:none] relative tracking-[0.1px] leading-[30px] font-medium text-[inherit] inline-block min-w-[59px] mq450:text-base mq450:leading-[24px]">
                  About
                </a>
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pl-0 pr-8 gap-[16.8px] text-base">
                <div className="w-[47px] overflow-hidden flex flex-row items-center justify-start">
                  <div className="flex-1 relative tracking-[0.2px] leading-[24px] font-medium">
                    Home
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="relative tracking-[0.2px] leading-[24px] font-medium inline-block min-w-[75px]">
                    Examples
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="relative tracking-[0.2px] leading-[24px] font-medium inline-block min-w-[56px]">
                    Pricing
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="relative tracking-[0.2px] leading-[24px] font-medium inline-block min-w-[65px]">
                    Updates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[312px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[8.9px] min-w-[312px] text-base mq1000:flex-1">
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start">
            <img
              className="h-[40.8px] w-[40.8px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/bxbxmap.svg"
            />
            <Adress
              propAlignSelf="unset"
              propFlex="1"
              propPadding="0px 7px"
              propWidth="unset"
              placeholderLabel="7480 Mockingbird Hill undefined "
              propWidth1="unset"
              propTextAlign="left"
              propTextDecoration="unset"
              propMinWidth="unset"
              propDisplay="unset"
              propFlex1="1"
            />
          </div>
          <div className="w-[169.8px] h-[41.7px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
            <img
              className="h-[31px] w-[31px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/bxbxmap1.svg"
            />
            <Adress placeholderLabel="(239) 555-0108" />
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start pt-[17.7px] px-0 pb-[17.8px] gap-[21.3px]">
            <img
              className="h-[36.3px] w-[36.3px] relative overflow-hidden shrink-0 min-h-[36px]"
              loading="lazy"
              alt=""
              src="/antdesigntwitteroutlined.svg"
            />
            <img
              className="h-[36.3px] w-[36.3px] relative overflow-hidden shrink-0 min-h-[36px]"
              loading="lazy"
              alt=""
              src="/antdesignfacebookfilled.svg"
            />
            <img
              className="h-[36.3px] w-[36.3px] relative overflow-hidden shrink-0 min-h-[36px]"
              loading="lazy"
              alt=""
              src="/antdesignlinkedinfilled.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

LightFOOTER.propTypes = {
  className: PropTypes.string,
};

export default LightFOOTER;
