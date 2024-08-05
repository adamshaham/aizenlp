import SubHeading from "./SubHeading";
import Title from "./Title";
import Paragraphe from "./Paragraphe";
import Button from "./Button";
import Text1 from "./Text1";
import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13.3px] box-border max-w-full text-left text-33xl text-[#fff] font-body-base-regular ${className}`}
    >
      <div className="flex-1 bg-dark-background overflow-hidden flex flex-col items-center justify-start py-[44.3px] px-5 box-border max-w-full gap-4 mq450:pt-5 mq450:pb-5 mq450:box-border mq1000:pt-[29px] mq1000:pb-[29px] mq1000:box-border">
        <div className="w-[873.3px] flex flex-col items-center justify-start gap-[39px] max-w-full gap-5">
          <div className="overflow-hidden flex flex-col items-center justify-start max-w-full shrink-0">
            <div className="w-[242.7px] overflow-hidden flex flex-row items-center justify-start pt-[8.9px] px-2 pb-[8.8px] box-border">
              <h1 className="m-0 flex-1 relative text-inherit tracking-[0.2px] leading-[62px] font-normal font-[inherit] mq450:text-12xl mq450:leading-[37px] mq1000:text-23xl mq1000:leading-[50px]">
                Contents
              </h1>
            </div>
            <SubHeading
              propPadding="8.8px 8px 8.9px"
              propWidth="571px"
              propHeight="unset"
              weFocusOnErgonomicsAndMee="We focus on ergonomics and meeting you where you work. "
              itsOnlyAKeystrokeAway="It's only a keystroke away."
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[29.3px] max-w-full shrink-0 text-center text-xl text-first-text">
            <div className="flex-1 shadow-[0px_3.5px_27.49px_rgba(0,_0,_0,_0.15)] rounded-[8.87px] bg-[#fff] border-lightgray border-[0.9px] border-solid box-border flex flex-col items-center justify-start py-[34px] pl-[31px] pr-[30px] gap-[50.5px] min-w-[274px] max-w-full gap-[25px] mq725:pt-[22px] mq725:pb-[22px] mq725:box-border">
              <div className="overflow-hidden flex flex-col items-center justify-start gap-[8.9px]">
                <Title
                  propWidth="67.7px"
                  propFlex="unset"
                  designWithRealData="Work"
                  propColor="#000"
                  propTextAlign="center"
                  propFlex1="unset"
                  propWidth1="50px"
                  propDisplay="inline-block"
                  propMinWidth="50px"
                />
                <Paragraphe
                  propWidth="unset"
                  propWidth1="268px"
                  propColor="#5d5d5d"
                  propTextAlign="center"
                  propFlex="unset"
                  propMinHeight="unset"
                  everWonderedIfYoureTooRel="Ever wondered if you're too reliant "
                  onAClientForWorkSlateHelp="on a client for work? Slate helps "
                  youIdentify="you identify ."
                />
              </div>
              <Button
                propBorder="none"
                propBackgroundColor="#4452fe"
                propAlignSelf="unset"
                propPadding="1.7px 32px 1.7px 31px"
                propWidth="146.6px"
                tryForFree="Sign Up"
              />
              <div className="w-[147px] h-[46.1px] shadow-[0px_3.5px_27.49px_rgba(0,_0,_0,_0.15)] bg-primary overflow-hidden shrink-0 hidden flex-row items-center justify-start py-[17.7px] px-[25px] box-border">
                <Text1
                  propFlex="unset"
                  tryForFree="Try For Free"
                  propMinWidth="unset"
                  propTextDecoration="unset"
                  propHeight="22px"
                  propDisplay="inline-block"
                  propFlex1="unset"
                />
              </div>
              <img
                className="self-stretch h-[200.8px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/macbook-pro.svg"
              />
            </div>
            <div className="flex-1 shadow-[0px_3.5px_27.49px_rgba(0,_0,_0,_0.15)] rounded-[8.87px] bg-[#fff] border-lightgray border-[0.9px] border-solid box-border flex flex-col items-center justify-start py-[34px] px-[31px] gap-[26.6px] min-w-[274px] max-w-full mq725:pt-[22px] mq725:pb-[22px] mq725:box-border">
              <div className="overflow-hidden flex flex-col items-center justify-start gap-[8.9px]">
                <Title designWithRealData="Design with real data" />
                <Paragraphe
                  everWonderedIfYoureTooRel="Ever wondered if you're too reliant "
                  onAClientForWorkSlateHelp="on a client for work? Slate helps "
                  youIdentify="you identify ."
                />
              </div>
              <Button
                propBorder="none"
                propBackgroundColor="#4452fe"
                propAlignSelf="unset"
                propPadding="1.7px 32px 1.7px 31px"
                propWidth="unset"
                tryForFree="Try For Free"
              />
              <div className="w-[147px] h-[46.1px] shadow-[0px_3.5px_27.49px_rgba(0,_0,_0,_0.15)] bg-primary overflow-hidden shrink-0 hidden flex-row items-center justify-start py-[17.7px] px-[25px] box-border">
                <Text1
                  propFlex="unset"
                  tryForFree="Try For Free"
                  propMinWidth="unset"
                  propTextDecoration="unset"
                  propHeight="22px"
                  propDisplay="inline-block"
                  propFlex1="unset"
                />
              </div>
              <img
                className="w-[336px] h-[244.7px] relative rounded-[12.41px] max-w-full"
                loading="lazy"
                alt=""
                src="/macbook-pro1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
