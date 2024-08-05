import Button1 from "./Button1";
import PropTypes from "prop-types";

const DesktopPricingLight = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-dark-background1 overflow-hidden flex flex-col items-center justify-start pt-[97.2px] px-5 pb-[97.3px] box-border max-w-full text-left text-34xl-5 text-[#fff] font-button1 mq450:pt-[63px] mq450:pb-[63px] mq450:box-border ${className}`}
    >
      <div className="w-[851.8px] flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
        <div className="overflow-hidden flex flex-col items-start justify-start py-0 pl-0 pr-[110px] box-border gap-[5.8px] min-w-[461.8px] max-w-full mq750:flex-1 mq750:pr-0 mq750:box-border mq750:min-w-full">
          <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-0">
            <div className="relative tracking-[0.19px] leading-[64px] font-black mq1050:text-24xl mq1050:leading-[51px] mq450:text-13xl mq450:leading-[38px]">
              Pricing
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[9px] text-mid-5">
            <div className="relative tracking-[0.19px] leading-[26.25px]">
              <p className="m-0">{`Slate helps you see how many more days `}</p>
              <p className="m-0">{`you need to work to reach your financial `}</p>
              <p className="m-0">goal for the month and year.</p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[8.8px] min-w-[234.4px] text-base-6 mq750:flex-1">
          <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-0">
            <b className="relative tracking-[0.19px] leading-[20px]">
              30 - DAY FREE TRIAL.
            </b>
          </div>
          <div className="h-[59.3px] overflow-hidden shrink-0 flex flex-row items-center justify-start text-34xl-5">
            <div className="overflow-hidden flex flex-row items-center justify-start">
              <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-0">
                <div className="relative tracking-[0.19px] leading-[64px] font-black inline-block min-w-[94px] whitespace-nowrap mq1050:text-24xl mq1050:leading-[51px] mq450:text-13xl mq450:leading-[38px]">
                  $10
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex flex-col items-center justify-start py-0 px-2 text-base-6">
              <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-px">
                <b className="relative tracking-[0.19px] leading-[19.44px] inline-block min-w-[122px]">
                  / Month per User
                </b>
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-0">
            <b className="relative tracking-[0.19px] leading-[19.44px] inline-block min-h-[59px]">
              <p className="m-0">{`Most calendars are designed `}</p>
              <p className="m-0">{`for teams. `}</p>
            </b>
          </div>
          <Button1
            propBackgroundColor="#2091f9"
            propAlignSelf="unset"
            propBorder="none"
            propFlexDirection="column"
            propPadding="0px 2px 0px 0px"
            subsribe="Get started"
            propColor="#fff"
            propTextDecoration="unset"
            propMinWidth="83px"
          />
        </div>
      </div>
    </div>
  );
};

DesktopPricingLight.propTypes = {
  className: PropTypes.string,
};

export default DesktopPricingLight;
