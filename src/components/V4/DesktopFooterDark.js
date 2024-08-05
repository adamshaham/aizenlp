import MailingInput from "./MailingInput";
import PropTypes from "prop-types";

const DesktopFooterDark = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-dark-background1 overflow-hidden flex flex-col items-center justify-start pt-[104.1px] px-5 pb-[104px] box-border max-w-full z-[2] text-left text-2xl-4 text-neutral-n0 font-button1 mq750:pt-[68px] mq750:pb-[68px] mq750:box-border ${className}`}
    >
      <div className="w-[1007.2px] overflow-hidden flex flex-row items-start justify-start gap-[77.8px] max-w-full mq1050:flex-wrap gap-[39px] gap-[19px]">
        <div className="flex-1 overflow-x-auto flex flex-row items-center justify-start gap-[19.4px] min-w-[397px] max-w-full mq750:min-w-full">
          <div className="overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 pb-[0.1px] pl-0 pr-[105px] gap-[14.6px]">
            <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-0">
              <b className="relative tracking-[0.1px] leading-[33px] inline-block min-w-[61px] mq450:text-mid mq450:leading-[26px]">
                Pages
              </b>
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[15.6px] text-mini-6">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <a className="[text-decoration:none] relative tracking-[0.19px] leading-[27px] text-[inherit] inline-block min-w-[41px]">
                  Home
                </a>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.19px] leading-[27px] inline-block min-w-[53px]">
                  Product
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <a className="[text-decoration:none] relative tracking-[0.19px] leading-[27px] text-[inherit] inline-block min-w-[47px]">
                  Pricing
                </a>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <a className="[text-decoration:none] relative tracking-[0.19px] leading-[27px] text-[inherit] inline-block min-w-[40px]">
                  About
                </a>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.19px] leading-[27px] inline-block min-w-[53px]">
                  Contact
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 pb-[0.1px] pl-0 pr-[68px] gap-[14.6px]">
            <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-0">
              <b className="relative tracking-[0.1px] leading-[33px] inline-block min-w-[85px] mq450:text-mid mq450:leading-[26px]">{`Tomothy `}</b>
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[15.6px] text-mini-6">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.19px] leading-[27px] inline-block min-w-[112px]">
                  Eleanor Edwards
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.19px] leading-[27px] inline-block min-w-[98px]">
                  Ted Robertson
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.19px] leading-[26.25px] inline-block min-w-[105px]">
                  Annette Russell
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.19px] leading-[27px] inline-block min-w-[112px]">
                  Jennie Mckinney
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.19px] leading-[27px] inline-block min-w-[102px]">
                  Gloria Richards
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 pb-[0.1px] pl-0 pr-[61px] gap-[14.6px]">
            <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-0">
              <b className="relative tracking-[0.1px] leading-[33px] inline-block min-w-[107px] mq450:text-mid mq450:leading-[26px]">
                Jane Black
              </b>
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[15.6px] text-mini-6">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.19px] leading-[27px] inline-block min-w-[82px]">
                  Philip Jones
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.19px] leading-[27px] inline-block min-w-[53px]">
                  Product
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.19px] leading-[27px] inline-block min-w-[102px]">
                  Colleen Russell
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.19px] leading-[27px] inline-block min-w-[107px]">
                  Marvin Hawkins
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.19px] leading-[27px] inline-block min-w-[119px]">
                  Bruce Simmmons
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[362.6px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[28.2px] min-w-[362.6px] max-w-full mq1050:flex-1 mq450:min-w-full">
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[23.3px]">
            <img
              className="h-[39.8px] w-[39.8px] relative overflow-hidden shrink-0 min-h-[40px]"
              alt=""
              src="/antdesigntwitteroutlined-1.svg"
            />
            <img
              className="h-[39.8px] w-[39.8px] relative overflow-hidden shrink-0 min-h-[40px]"
              alt=""
              src="/antdesignfacebookfilled-1.svg"
            />
            <img
              className="h-[39.8px] w-[39.8px] relative overflow-hidden shrink-0 min-h-[40px]"
              alt=""
              src="/antdesignlinkedinfilled-1.svg"
            />
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 px-[9px] pb-[0.1px] gap-[4.9px]">
            <div className="overflow-hidden flex flex-row items-center justify-start">
              <b className="relative tracking-[0.1px] leading-[33px] mq450:text-mid mq450:leading-[26px]">
                Subscribe to our Newsletter
              </b>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start text-mid-5">
              <div className="relative tracking-[0.19px] leading-[27px]">
                Available exclusivery on Figmaland
              </div>
            </div>
            <MailingInput />
          </div>
        </div>
      </div>
    </footer>
  );
};

DesktopFooterDark.propTypes = {
  className: PropTypes.string,
};

export default DesktopFooterDark;
