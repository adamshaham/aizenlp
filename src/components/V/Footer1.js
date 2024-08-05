import NimbusLogo from "./NimbusLogo";
import DividerInline from "./DividerInline";
import Wrapper from "./Wrapper";
import ButtonTextLink from "./ButtonTextLink";
import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-[#fff] flex flex-row items-start justify-center pt-[77.8px] px-5 pb-[38.8px] box-border max-w-full text-left text-base-6 text-[#343844] font-dm-sans gap-[35px] mq750:pt-[51px] mq750:pb-[25px] mq750:box-border gap-[17px] ${className}`}
    >
      <div className="h-[392.1px] w-[1170.6px] flex flex-col items-start justify-start pt-0 px-0 pb-[58.9px] box-border max-w-[1170.6px] lg:max-w-full mq450:pb-[38px] mq450:box-border mq1050:h-auto">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[108.9px] box-border gap-[58.3px] shrink-0 max-w-full gap-[29px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[19.5px] max-w-full">
            <NimbusLogo
              neuros="/neuros-1.svg"
              nimbusSymbol="/nimbus-symbol-1.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border min-w-[676px] max-w-full mq750:min-w-full">
              <DividerInline propBorderTop="1px solid #eceef4" />
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-[5px] gap-x-[31.1px] gap-y-[29.8px]">
            <Wrapper
              titleText="About Neuros"
              lIcon1="/l-icon6@2x.png"
              lIcon11="/l-icon7@2x.png"
              lIcon12="/l-icon8@2x.png"
              lIcon13="/l-icon9@2x.png"
              text="Company Overview"
              text1="Careers"
              text2={`Press & Media`}
              text3="Testimonials"
              rIcon1="/r-icon8@2x.png"
              rIcon11="/r-icon9@2x.png"
              rIcon12="/r-icon10@2x.png"
              rIcon13="/r-icon11@2x.png"
              rIcon={false}
              rIcon2={false}
              rIcon3={false}
              rIcon4={false}
              lIcon={false}
              lIcon2={false}
              lIcon3={false}
              lIcon4={false}
            />
            <Wrapper
              propFlex="0.9521"
              titleText="Resources"
              propMinWidth="80px"
              propDisplay="inline-block"
              propAlignSelf="stretch"
              lIcon1="/l-icon10@2x.png"
              lIcon11="/l-icon11@2x.png"
              lIcon12="/l-icon12@2x.png"
              lIcon13="/l-icon13@2x.png"
              text="Blog"
              text1="Help Center"
              text2={`Webinars & Events`}
              text3="Case Studies"
              rIcon1="/r-icon12@2x.png"
              rIcon11="/r-icon13@2x.png"
              rIcon12="/r-icon14@2x.png"
              rIcon13="/r-icon15@2x.png"
              rIcon={false}
              rIcon2={false}
              rIcon3={false}
              rIcon4={false}
              lIcon={false}
              lIcon2={false}
              lIcon3={false}
              lIcon4={false}
            />
            <Wrapper
              propFlex="1"
              titleText={`Support & Contact`}
              propMinWidth="unset"
              propDisplay="unset"
              propAlignSelf="unset"
              lIcon1="/l-icon14@2x.png"
              lIcon11="/l-icon15@2x.png"
              lIcon12="/l-icon16@2x.png"
              lIcon13="/l-icon17@2x.png"
              text="Contact Us"
              text1="Technical Support"
              text2="Feedback"
              text3="Community Forum"
              rIcon1="/r-icon16@2x.png"
              rIcon11="/r-icon17@2x.png"
              rIcon12="/r-icon18@2x.png"
              rIcon13="/r-icon19@2x.png"
              rIcon={false}
              rIcon2={false}
              rIcon3={false}
              rIcon4={false}
              lIcon={false}
              lIcon2={false}
              lIcon3={false}
              lIcon4={false}
            />
            <Wrapper
              propFlex="0.9863"
              titleText="Connect"
              propMinWidth="66px"
              propDisplay="inline-block"
              propAlignSelf="unset"
              lIcon1="/l-icon-1.svg"
              lIcon11="/l-icon-2@2x.png"
              lIcon12="/l-icon-3.svg"
              lIcon13="/l-icon-4.svg"
              text="Instagram"
              text1="Facebook"
              text2="Twitter / X"
              text3="Linkedin"
              rIcon1="/r-icon20@2x.png"
              rIcon11="/r-icon21@2x.png"
              rIcon12="/r-icon22@2x.png"
              rIcon13="/r-icon23@2x.png"
              rIcon={false}
              rIcon2={false}
              rIcon3={false}
              rIcon4={false}
              lIcon
              lIcon2
              lIcon3
              lIcon4
            />
          </div>
        </div>
        <DividerInline />
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center pt-[19.4px] px-0 pb-[19.5px] box-border gap-x-[23.3px] gap-y-[21.3px] shrink-0 max-w-full text-sm-6 text-[#626981] font-body-base-regular">
          <div className="flex-1 relative leading-[20px] inline-block min-w-[352px] max-w-full">
            ©2023 NIMBUS · All rights reserved.
          </div>
          <div className="flex flex-row items-center justify-center gap-[23.3px] text-center text--[#4b5162] font-dm-sans">
            <ButtonTextLink
              rIcon={false}
              text="Term of use"
              lIcon={false}
              lIcon1="/l-icon18@2x.png"
              propDisplay="inline-block"
              propMinWidth="75px"
              rIcon1="/r-icon24@2x.png"
            />
            <ButtonTextLink
              rIcon={false}
              text="Privacy policy"
              lIcon={false}
              lIcon1="/l-icon19@2x.png"
              propDisplay="inline-block"
              propMinWidth="90px"
              rIcon1="/r-icon25@2x.png"
            />
            <ButtonTextLink
              rIcon
              text="Security"
              lIcon
              lIcon1="/l-icon20@2x.png"
              rIcon1="/r-icon26@2x.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
