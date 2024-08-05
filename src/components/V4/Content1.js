import FeatureStyle from "./FeatureStyle";
import PropTypes from "prop-types";

const Content1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start py-[92.4px] px-[71px] box-border gap-[68.1px] max-w-full text-center text-2xl-4 text-[#fff] font-button1 mq1050:pt-[60px] mq1050:pb-[60px] mq1050:box-border gap-[17px] gap-[34px] mq750:py-[39px] mq750:px-[35px] mq750:box-border ${className}`}
    >
      <div className="overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[0.1px] gap-[6.8px] shrink-0">
        <div className="overflow-hidden flex flex-row items-center justify-start">
          <b className="relative tracking-[0.1px] leading-[33px] mq450:text-mid mq450:leading-[26px]">
            At your fingertips
          </b>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[9px] text-25xl-7">
          <div className="relative tracking-[0.19px] leading-[56px] mq1050:text-17xl mq1050:leading-[44px] mq450:text-8xl mq450:leading-[33px]">
            Features
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start pt-[9.8px] px-[9px] pb-[9.6px] text-base-6">
          <b className="w-[290px] relative tracking-[0.19px] leading-[19.44px] inline-block">
            <p className="m-0">{`Most calendars are designed for teams. `}</p>
            <p className="m-0">Slate is designed for freelancers</p>
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[97.2px] max-w-full shrink-0 text-left gap-6 gap-[49px]">
        <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[81.8px] box-border max-w-full mq1050:min-w-full mq750:pb-[53px] mq750:box-border">
          <div className="h-[548px] w-[912.6px] flex flex-col items-center justify-start py-4 px-0 box-border max-w-full gap-[23px]">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/-browser.svg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start py-[17.5px] px-0 gap-[72.9px]">
          <FeatureStyle />
          <FeatureStyle />
        </div>
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
