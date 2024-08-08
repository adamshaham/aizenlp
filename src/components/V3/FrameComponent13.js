import SecondHeadline from "./SecondHeadline";
import Button from "./Button";
import PropTypes from "prop-types";

const contentData = {
  buttonLabel: "Try For Free",
};

const FrameComponent13 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13.3px] box-border max-w-full text-left text-33xl text-[#fff] font-body-base-regular ${className}`}
    >
      <div className="flex-1 bg-[#181818] overflow-hidden flex flex-col items-center justify-start py-[70.9px] px-5 box-border max-w-full mq725:pt-[46px] mq725:pb-[46px] mq725:box-border">
        <div className="w-[1440.8px] shadow-[0px_3.5px_27.49px_rgba(0,_0,_0,_0.15)] rounded-[29.26px] bg-[#343434] overflow-hidden flex flex-row items-center justify-start py-[2.7px] px-0 box-border gap-[76.3px] max-w-full shrink-0 gap-[38px] gap-[19px] mq1000:flex-wrap">
          <div className="w-[582.3px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[15.1px] pl-[83px] pr-0 box-border gap-[32.8px] min-w-[482.3px] max-w-full gap-4 mq725:pl-[41px] mq725:box-border mq725:min-w-full mq1000:flex-1">
            <SecondHeadline />
          </div>
          <div className="h-[322.7px] flex-1 overflow-hidden flex flex-row items-center justify-start py-0 px-px box-border min-w-[339px] max-w-full mq450:min-w-full">
            <img
              className="h-[402px] flex-1 relative max-w-full overflow-hidden object-cover"
              alt=""
              src="/line-chart-1-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;
