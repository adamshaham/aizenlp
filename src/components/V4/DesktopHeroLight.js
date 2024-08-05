import Button1 from "./Button1";
import PropTypes from "prop-types";

const DesktopHeroLight = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-dark-background1 overflow-hidden flex flex-col items-center justify-start py-[77.8px] px-5 box-border gap-[38.9px] max-w-full text-center text-2xl-4 text-[#fff] font-button1 gap-[19px] mq750:pt-[51px] mq750:pb-[51px] mq750:box-border ${className}`}
    >
      <div className="overflow-hidden flex flex-col items-center justify-start pt-[19.4px] px-[19px] pb-[19.5px] box-border max-w-full shrink-0">
        <div className="overflow-hidden flex flex-col items-center justify-start gap-[6.8px]">
          <div className="overflow-hidden flex flex-row items-center justify-start">
            <b className="relative tracking-[0.1px] leading-[33px] mq450:text-mid mq450:leading-[26px]">
              At your fingertips
            </b>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[9px] text-25xl-7">
            <div className="w-[517px] relative tracking-[0.19px] leading-[56px] inline-block mq1050:text-17xl mq1050:leading-[44px] mq450:text-8xl mq450:leading-[33px]">{`Lightning fast prototyping `}</div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[9px] text-base-6">
            <b className="w-[290px] relative tracking-[0.19px] leading-[19.44px] inline-block">
              <p className="m-0">{`Most calendars are designed for teams. `}</p>
              <p className="m-0">Slate is designed for freelancers</p>
            </b>
          </div>
        </div>
      </div>
      <div className="overflow-hidden flex flex-col items-center justify-start pt-[19.5px] px-[19px] pb-[19.4px] box-border max-w-full">
        <div className="flex flex-col items-start justify-start">
          <div className="w-[304.3px] overflow-x-auto flex flex-row items-center justify-start gap-[15.6px]">
            <Button1
              propBackgroundColor="#fff"
              propAlignSelf="unset"
              propBorder="none"
              propFlexDirection="column"
              propPadding="unset"
              subsribe="Buy now"
              propColor="#2091f9"
              propTextDecoration="unset"
              propMinWidth="63px"
            />
            <Button1
              propBackgroundColor="transparent"
              propAlignSelf="unset"
              propBorder="1px solid #fff"
              propFlexDirection="column"
              propPadding="unset"
              subsribe="Try for free"
              propColor="#fff"
              propTextDecoration="unset"
              propMinWidth="82px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

DesktopHeroLight.propTypes = {
  className: PropTypes.string,
};

export default DesktopHeroLight;
