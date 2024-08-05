import PropTypes from "prop-types";

const ImgLibIlustrationGraphIco = ({ className = "" }) => {
  return (
    <div
      className={`h-[466.7px] flex-1 bg-[#6099f7] overflow-hidden flex flex-col items-end justify-start pt-[134.2px] px-[431px] pb-[134px] box-border relative gap-[7.8px] max-w-full text-left text-lgi-4 text-[#1c1f25] font-body-base-regular lg:pl-[215px] lg:pr-[215px] lg:box-border mq750:pl-[107px] mq750:pr-[107px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <img
        className="w-[1484.8px] h-[644.5px] absolute !m-[0] top-[-102.1px] right-[-253.3px]"
        alt=""
        src="/group-5.svg"
      />
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-[#4452fe]alpha-pra10 mix-blend-color-burn z-[1]" />
      <div className="w-[250.1px] flex flex-row items-start justify-start relative">
        <div className="h-[80.7px] w-[280px] absolute !m-[0] top-[-13.7px] right-[-15px] rounded-[77.78px] bg-darkoverlayelement-do20 z-[2]" />
        <div className="h-[54.3px] flex-1 rounded-[46.67px] bg-[#fff] flex flex-row items-center justify-start py-[7.8px] px-[11px] box-border gap-[6.8px] whitespace-nowrap">
          <img
            className="h-[23.3px] w-[23.3px] relative object-cover"
            alt=""
            src="/iconai-2@2x.png"
          />
          <div className="relative leading-[158%] font-medium">
            AI-Driven Forecasts
          </div>
        </div>
      </div>
    </div>
  );
};

ImgLibIlustrationGraphIco.propTypes = {
  className: PropTypes.string,
};

export default ImgLibIlustrationGraphIco;
