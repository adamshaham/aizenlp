import NimbusLogo from "./NimbusLogo";
import DividerInline from "./DividerInline";
import Wrapper from "./Wrapper";
import ButtonTextLink from "./ButtonTextLink";
import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  const contentData = {
    footerText: "©2023 NIMBUS · All rights reserved.",
    buttonTextLinks: [
      {
        text: "Term of use",
        lIcon: "/l-icon18@2x.png",
        rIcon: "/r-icon24@2x.png",
      },
      {
        text: "Privacy policy",
        lIcon: "/l-icon19@2x.png",
        rIcon: "/r-icon25@2x.png",
      },
      {
        text: "Security",
        lIcon: "/l-icon20@2x.png",
        rIcon: "/r-icon26@2x.png",
      },
    ],
    sections: [
      {
        titleText: "About Neuros",
        lIcons: [
          "/l-icon6@2x.png",
          "/l-icon7@2x.png",
          "/l-icon8@2x.png",
          "/l-icon9@2x.png",
        ],
        texts: ["Company Overview", "Careers", "Press & Media", "Testimonials"],
        rIcons: [
          "/r-icon8@2x.png",
          "/r-icon9@2x.png",
          "/r-icon10@2x.png",
          "/r-icon11@2x.png",
        ],
      },
      {
        titleText: "Resources",
        propFlex: "0.9521",
        propMinWidth: "80px",
        propDisplay: "inline-block",
        propAlignSelf: "stretch",
        lIcons: [
          "/l-icon10@2x.png",
          "/l-icon11@2x.png",
          "/l-icon12@2x.png",
          "/l-icon13@2x.png",
        ],
        texts: ["Blog", "Help Center", "Webinars & Events", "Case Studies"],
        rIcons: [
          "/r-icon12@2x.png",
          "/r-icon13@2x.png",
          "/r-icon14@2x.png",
          "/r-icon15@2x.png",
        ],
      },
      {
        titleText: "Support & Contact",
        lIcons: [
          "/l-icon14@2x.png",
          "/l-icon15@2x.png",
          "/l-icon16@2x.png",
          "/l-icon17@2x.png",
        ],
        texts: [
          "Contact Us",
          "Technical Support",
          "Feedback",
          "Community Forum",
        ],
        rIcons: [
          "/r-icon16@2x.png",
          "/r-icon17@2x.png",
          "/r-icon18@2x.png",
          "/r-icon19@2x.png",
        ],
      },
      {
        titleText: "Connect",
        propFlex: "0.9863",
        propMinWidth: "66px",
        propDisplay: "inline-block",
        lIcons: [
          "/l-icon-1.svg",
          "/l-icon-2@2x.png",
          "/l-icon-3.svg",
          "/l-icon-4.svg",
        ],
        texts: ["Instagram", "Facebook", "Twitter / X", "Linkedin"],
        rIcons: [
          "/r-icon20@2x.png",
          "/r-icon21@2x.png",
          "/r-icon22@2x.png",
          "/r-icon23@2x.png",
        ],
      },
    ],
  };

  return (
    <footer
      className={`self-stretch bg-[#fff] flex flex-row items-start justify-center pt-[77.8px] px-5 pb-[38.8px] box-border max-w-full text-left text-[15.6px] text-[#343844] font-dm-sans gap-[35px] mq750:pt-[51px] mq750:pb-[25px] mq750:box-border gap-[17px] ${className}`}
    >
      <div className="h-[392.1px] w-[1440.6px] flex flex-col items-start justify-start pt-0 px-0 pb-[58.9px] box-border max-w-[1440.6px] lg:max-w-full mq450:pb-[38px] mq450:box-border mq1050:h-auto">
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
            {contentData.sections.map((section, index) => (
              <Wrapper
                key={index}
                titleText={section.titleText}
                lIcon1={section.lIcons[0]}
                lIcon11={section.lIcons[1]}
                lIcon12={section.lIcons[2]}
                lIcon13={section.lIcons[3]}
                text={section.texts[0]}
                text1={section.texts[1]}
                text2={section.texts[2]}
                text3={section.texts[3]}
                rIcon1={section.rIcons[0]}
                rIcon11={section.rIcons[1]}
                rIcon12={section.rIcons[2]}
                rIcon13={section.rIcons[3]}
                rIcon={false}
                rIcon2={false}
                rIcon3={false}
                rIcon4={false}
                lIcon={false}
                lIcon2={false}
                lIcon3={false}
                lIcon4={false}
                propFlex={section.propFlex}
                propMinWidth={section.propMinWidth}
                propDisplay={section.propDisplay}
                propAlignSelf={section.propAlignSelf}
              />
            ))}
          </div>
        </div>
        <DividerInline />
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center pt-[19.4px] px-0 pb-[19.5px] box-border gap-x-[23.3px] gap-y-[21.3px] shrink-0 max-w-full text-[15.6px] text-[#626981] font-body-base-regular">
          <div className="flex-1 relative leading-[20px] inline-block min-w-[352px] max-w-full">
            {contentData.footerText}
          </div>
          <div className="flex flex-row items-center justify-center gap-[23.3px] text-center text--[#4b5162] font-dm-sans">
            {contentData.buttonTextLinks.map((link, index) => (
              <ButtonTextLink
                key={index}
                rIcon={false}
                text={link.text}
                lIcon={false}
                lIcon1={link.lIcon}
                propDisplay="inline-block"
                propMinWidth={index === 1 ? "90px" : "75px"}
                rIcon1={link.rIcon}
              />
            ))}
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
