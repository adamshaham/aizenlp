import DesktopNewsletter from "./DesktopNewsletter";
import PropTypes from "prop-types";

const DesktopLightCTA = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-dark-background1 overflow-hidden flex flex-row items-end justify-start pt-[157.9px] pb-[106px] pl-[115px] pr-12 box-border gap-[48.6px] max-w-full z-[1] text-left text-2xl-4 text-[#fff] font-button1 lg:flex-wrap mq1050:pb-[69px] mq1050:box-border mq450:pl-5 mq450:pb-[45px] mq450:box-border gap-6 mq750:pl-[57px] mq750:pr-6 mq750:box-border ${className}`}
    >
      <div className="h-px w-[1400px] relative hidden max-w-full" />
      <img
        className="h-[499.7px] flex-1 relative max-w-full overflow-hidden min-w-[428px] mq750:min-w-full"
        loading="lazy"
        alt=""
        src="/undraw-newsletter-vovu.svg"
      />
      <div className="w-[528.9px] flex flex-col items-start justify-start pt-0 px-0 pb-[51px] box-border min-w-[528.9px] min-h-[552px] max-w-full lg:flex-1 mq750:pb-[33px] mq750:box-border mq750:min-w-full">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 pb-[0.1px] pl-[61px] pr-[25px] box-border gap-[14.5px] max-w-full mq750:pl-[30px] mq750:box-border">
          <div className="ml-[-62.3px] w-[530.8px] h-[103.1px] relative max-w-[120%] shrink-0" />
          <b className="relative tracking-[0.1px] leading-[33px] mq450:text-mid mq450:leading-[26px]">
            At your fingertips
          </b>
          <div className="w-72 flex flex-row items-start justify-start pt-0 px-0 pb-[9.8px] box-border text-25xl-7">
            <div className="flex-1 relative tracking-[0.19px] leading-[55.42px] mq1050:text-17xl mq1050:leading-[44px] mq450:text-8xl mq450:leading-[33px]">
              <p className="m-0">{`Lightning fast `}</p>
              <p className="m-0">{`prototyping `}</p>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-3xl">
            <DesktopNewsletter />
          </div>
        </div>
      </div>
    </div>
  );
};

DesktopLightCTA.propTypes = {
  className: PropTypes.string,
};

export default DesktopLightCTA;
