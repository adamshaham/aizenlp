import Social from "./Social";
import Input from "./Input";
import Button1 from "./Button1";
import PropTypes from "prop-types";

const DesktopContactLight = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-dark-background1 overflow-hidden flex flex-col items-center justify-start pt-[204.2px] px-5 pb-[96.3px] box-border gap-[58.3px] max-w-full z-[1] mt-[-0.1px] text-center text-25xl-7 text-neutral-n0 font-button1 lg:pt-[204.2px] lg:pb-[63px] lg:box-border mq1050:pb-[41px] mq1050:box-border gap-[29px] mq450:pb-[27px] mq450:box-border ${className}`}
    >
      <div className="w-[1400px] h-px relative hidden max-w-full" />
      <div className="w-[848px] flex flex-row items-start justify-center py-0 pl-0.5 pr-0 box-border max-w-full">
        <div className="w-[290px] flex flex-col items-start justify-start gap-[26.3px]">
          <div className="flex flex-row items-start justify-start py-0 px-[34px]">
            <div className="relative tracking-[0.19px] leading-[56px] mq1050:text-17xl mq1050:leading-[44px] mq450:text-8xl mq450:leading-[33px]">
              Contact Us
            </div>
          </div>
          <b className="self-stretch relative text-base-6 tracking-[0.19px] leading-[19.44px]">
            <p className="m-0">{`Most calendars are designed for teams. `}</p>
            <p className="m-0">Slate is designed for freelancers</p>
          </b>
        </div>
      </div>
      <div className="w-[848px] flex flex-row items-start justify-center py-0 pl-0.5 pr-0 box-border max-w-full">
        <Social />
      </div>
      <img
        className="w-[846.8px] relative rounded-[46.67px] max-h-full object-cover max-w-full"
        alt=""
        src="/-map-screen@2x.png"
      />
      <div className="w-[848px] flex flex-row items-start justify-end py-0 pl-[3px] pr-px box-border max-w-full text-xs-7">
        <div className="flex-1 flex flex-col items-end justify-start gap-[48.5px] max-w-full gap-6">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[533.5px] flex flex-row items-start justify-start max-w-full gap-[25px]">
              <div className="flex-1 overflow-hidden flex flex-row flex-wrap items-center justify-start gap-[14.6px] max-w-full">
                <div className="flex-1 overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[0.1px] box-border gap-[9.7px] min-w-[144px]">
                  <img
                    className="w-[25.3px] h-[31.1px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/bxbxmap2.svg"
                  />
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[9px]">
                    <b className="w-[203px] relative tracking-[0.1px] leading-[17.5px] inline-block">
                      <p className="m-0">{`6386 Spring St undefined Anchorage, `}</p>
                      <p className="m-0">Georgia 12473 United States</p>
                    </b>
                  </div>
                </div>
                <div className="w-[103.4px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[9.7px]">
                  <img
                    className="w-[20.4px] h-[33.1px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/icbaselinephoneandroid.svg"
                  />
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start">
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-2">
                      <b className="relative tracking-[0.1px] leading-[17.5px] inline-block min-w-[85px]">
                        (843) 555-0130
                      </b>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex flex-col items-center justify-start gap-[9.7px]">
                  <img
                    className="w-[26.3px] h-[21.4px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/antdesignmailoutlined.svg"
                  />
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-2">
                      <b className="relative tracking-[0.1px] leading-[18px] whitespace-nowrap">
                        willie.jennings@example.com
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_12.6px_18.47px_rgba(0,_0,_0,_0.07)] rounded-[19.44px] bg-neutral-n0 border-gainsboro-400 border-[1px] border-solid overflow-hidden flex flex-col items-start justify-start py-[49px] px-[47px] gap-[43.8px] text-left text-2xl-4 mq1050:pl-[23px] mq1050:pr-[23px] mq1050:box-border gap-[22px] mq750:pt-[204.2px] mq750:pb-8 mq750:box-border">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-0.5">
              <b className="relative tracking-[0.1px] leading-[33px] inline-block min-w-[107px] mq450:text-mid mq450:leading-[26px]">
                Contact Us
              </b>
            </div>
            <Input
              propAlignSelf="stretch"
              propBackgroundColor="#f5f5f5"
              propFlex="unset"
              propMinWidth="unset"
              propFlexDirection="row"
              yourEmailPlaceholder="Your Name"
              propWidth="73px"
            />
            <Input
              propAlignSelf="stretch"
              propBackgroundColor="#f5f5f5"
              propFlex="unset"
              propMinWidth="unset"
              propFlexDirection="row"
              yourEmailPlaceholder="Your Email"
              propWidth="71px"
            />
            <textarea
              className="border-gainsboro-100 border-[1px] border-solid bg-whitesmoke-100 h-[187.6px] w-auto [outline:none] self-stretch box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[22.4px] px-[19px] pb-[22px] font-button1 text-mini-6 text-background"
              placeholder="Your Message"
              rows={9}
              cols={37}
            />
            <Button1
              propBackgroundColor="#2091f9"
              propAlignSelf="unset"
              propBorder="none"
              propFlexDirection="row"
              propPadding="unset"
              subsribe="Send"
              propColor="#fff"
              propTextDecoration="unset"
              propMinWidth="37px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

DesktopContactLight.propTypes = {
  className: PropTypes.string,
};

export default DesktopContactLight;
