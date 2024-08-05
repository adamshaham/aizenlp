import SmallEyebrowTagLabelStyle from "./SmallEyebrowTagLabelStyle";
import ButtonText from "./ButtonText";
import PropTypes from "prop-types";

const HeroBanner = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-[#fff] flex flex-row items-start justify-center pt-[108.9px] px-5 pb-[77.8px] box-border max-w-full text-center text-27xl-7 text-[#1c1f25] font-dm-sans mq750:pt-[46px] mq750:pb-[33px] mq750:box-border mq1050:pt-[71px] mq1050:pb-[51px] mq1050:box-border ${className}`}
    >
      <div className="w-[1170.6px] flex flex-col items-start justify-start gap-[58.3px] max-w-[1170.6px] lg:max-w-full gap-[29px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[836.1px] flex flex-col items-center justify-start gap-[38.9px] max-w-[836.11px] shrink-0 gap-[19px] mq1050:max-w-full">
            <div className="self-stretch flex flex-col items-center justify-start gap-[19.4px] max-w-full">
              <SmallEyebrowTagLabelStyle
                content="Generative Business Intelligence for Analysts"
                icon
                propWidth="unset"
                iconAI="/iconai@2x.png"
                propDisplay="unset"
                propMinWidth="unset"
              />
              <b className="self-stretch relative leading-[116%] shrink-0 mq450:text-9xl mq450:leading-[33px] mq1050:text-18xl mq1050:leading-[43px]">
                Revolutionizing Business Decisions with AI-Powered Analytics
              </b>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[77px] box-border max-w-full shrink-0 text-base-6 text-dimgray-200 font-body-base-regular mq1050:pl-[38px] mq1050:pr-[38px] mq1050:box-border">
                <div className="flex-1 relative leading-[160%] inline-block max-w-full">
                  Harnesses the power of artificial intelligence to transform
                  your business data into actionable insights, propelling you to
                  new heights of success
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-stack-md max-w-full mq450:flex-wrap">
              <ButtonText
                showRIcon={false}
                showLIcon={false}
                buttonText="Start your free trial"
                propAlignSelf="unset"
                propBorderRadius="12px"
                propBorder="none"
                propBackgroundColor="#387ff5"
                propWidth="unset"
                propBackdropFilter="unset"
                propFlex="unset"
                propPadding="11.7px 19px"
                propBackground="unset"
                propHeight="unset"
                lIcon="/l-icon2.svg"
                propHeight1="23.3px"
                propWidth1="23.3px"
                propMinHeight="23px"
                propAlignSelf1="unset"
                propHeight2="unset"
                propFlex1="unset"
                propAlignSelf2="unset"
                propWidth2="unset"
                propMinWidth="unset"
                propColor="#fff"
                propDisplay="unset"
                propHeight3="unset"
                rIcon="/r-icon2.svg"
                propHeight4="23.3px"
                propWidth3="23.3px"
                propMinHeight1="23px"
              />
              <ButtonText
                showRIcon={false}
                showLIcon
                buttonText="Watch video"
                propAlignSelf="unset"
                propBorderRadius="12px"
                propBorder="1px solid #b6bcce"
                propBackgroundColor="rgba(255, 255, 255, 0.1)"
                propWidth="172.8px"
                propBackdropFilter="blur(11.67px)"
                propFlex="unset"
                propPadding="10px 18px"
                propBackground="unset"
                propHeight="unset"
                lIcon="/l-icon3.svg"
                propHeight1="23.3px"
                propWidth1="23.3px"
                propMinHeight="23px"
                propAlignSelf1="unset"
                propHeight2="unset"
                propFlex1="1"
                propAlignSelf2="unset"
                propWidth2="unset"
                propMinWidth="96px"
                propColor="-[#4b5162]"
                propDisplay="inline-block"
                propHeight3="unset"
                rIcon="/r-icon3.svg"
                propHeight4="23.3px"
                propWidth3="23.3px"
                propMinHeight1="23px"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-[466.7px] relative rounded-[23.33px] bg-[#387ff5] border-[#d2d5e2] border-[1px] border-solid box-border overflow-hidden shrink-0 text-left text-lgi-4 font-body-base-regular">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-[#6099f7] overflow-hidden">
            <img
              className="relative w-[2080.4px] h-[1113.5px]"
              alt=""
              src="/grid.svg"
            />
            <img
              className="absolute top-[calc(50%_-_89.45px)] left-[calc(50%_-_130.3px)] w-[180.4px] h-[180.4px] z-[1]"
              alt=""
              src="/group.svg"
            />
            <img
              className="absolute top-[calc(50%_-_139.95px)] left-[calc(50%_+_36px)] w-[53.5px] h-[53.5px] z-[2]"
              alt=""
              src="/group-1.svg"
            />
            <img
              className="absolute top-[calc(50%_+_91.45px)] left-[calc(50%_-_209px)] w-[125.4px] h-[125.4px] z-[1]"
              alt=""
              src="/group-2.svg"
            />
            <img
              className="absolute top-[calc(50%_-_357.75px)] left-[calc(50%_-_705.8px)] w-[342.2px] h-[342.2px] z-[1]"
              alt=""
              src="/group-3.svg"
            />
            <img
              className="absolute top-[calc(50%_+_3.95px)] left-[calc(50%_+_318.9px)] w-[458.9px] h-[458.9px] z-[1]"
              alt=""
              src="/group-4.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-primaryalpha-pra10 mix-blend-color-burn z-[3]" />
            <div className="absolute top-[calc(50%_-_40.85px)] left-[calc(50%_-_81.7px)] rounded-[77.78px] bg-darkoverlayelement-do20 w-[287.8px] h-[80.7px] hidden" />
            <div className="absolute top-[calc(50%_-_27.25px)] left-[calc(50%_-_65.5px)] rounded-[46.67px] bg-[#fff] hidden flex-row items-center justify-start py-[11.7px] px-[17px] gap-[7.8px] whitespace-nowrap">
              <img
                className="h-[23.3px] w-[23.3px] relative"
                alt=""
                src="/iconplay.svg"
              />
              <div className="self-stretch relative leading-[158%] font-medium">
                Play video
              </div>
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_40.85px)] left-[calc(50%_-_159px)] [backdrop-filter:blur(11.67px)] rounded-[46.67px] bg-[#fff] border-lightsteelblue border-[11.7px] border-solid box-border w-[340.3px] h-[105px] flex flex-row items-end justify-start py-[11.7px] px-[11px] gap-[11.7px] z-[4]">
            <img
              className="h-[58.3px] w-[58.3px] relative overflow-hidden shrink-0"
              alt=""
              src="/button.svg"
            />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.1px]">
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[31px] font-semibold">
                  Watch introduce video
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.8px] text-base-6 text-dimgray-200">
                  <div className="relative leading-[25px] inline-block min-w-[49px]">
                    5 mins
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
                    <div className="w-[3.9px] h-[3.9px] relative rounded-[50%] bg-neutralalphainvert-ni20" />
                  </div>
                  <div className="relative leading-[25px] font-medium text-[#387ff5] inline-block min-w-[77px]">
                    Play video
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroBanner.propTypes = {
  className: PropTypes.string,
};

export default HeroBanner;
