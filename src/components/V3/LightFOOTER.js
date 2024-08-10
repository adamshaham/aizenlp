import Adress from "./Adress";
import PropTypes from "prop-types";

const contentData = {
  footer: {
    brand: "Fingertipe",
    sections: [
      {
        title: "Home",
        links: ["Home", "Examples", "Pricing", "Updates"],
      },
      {
        title: "Resources",
        links: ["Home", "Examples", "Pricing", "Updates"],
      },
      {
        title: "About",
        links: ["Home", "Examples", "Pricing", "Updates"],
      },
    ],
    contact: {
      address: "7480 Mockingbird Hill undefined",
      phone: "(239) 555-0108",
    },
    socialMedia: [
      "/antdesigntwitteroutlined.svg",
      "/antdesignfacebookfilled.svg",
      "/antdesignlinkedinfilled.svg",
    ],
  },
};

const LightFOOTER = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-[#181818] overflow-hidden flex flex-col items-center justify-start pt-[94.9px] px-5 pb-[94.8px] box-border max-w-full text-left text-[20px] text-[#fff] font-body-base-regular mq450:pt-[62px] mq450:pb-[62px] mq450:box-border ${className}`}
    >
      <div className="w-[1440px] overflow-hidden flex flex-row items-start justify-between max-w-full gap-5 mq1000:flex-wrap">
        <div className="w-[454.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start min-w-[454.8px] max-w-full gap-[25px] mq725:min-w-full mq1000:flex-1">
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
            {contentData.footer.sections.map((section, index) => (
              <div
                key={index}
                className="w-[107.3px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[35.5px]"
              >
                <div className="w-[99px] overflow-hidden flex flex-row items-center justify-start">
                  <div className="flex-1 relative tracking-[0.1px] leading-[30px] font-medium mq450:text-[16px] mq450:leading-[24px]">
                    {section.title}
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pl-0 pr-8 gap-[16.8px] text-[16px]">
                  {section.links.map((link, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden flex flex-row items-center justify-start"
                    >
                      <div className="relative tracking-[0.2px] leading-[24px] font-medium inline-block">
                        {link}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[312px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[8.9px] min-w-[312px] text-[16px] mq1000:flex-1">
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start">
            <img
              className="h-[40.8px] w-[40.8px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/bxbxmap.svg"
            />
            <Adress
              propAlignSelf="unset"
              propFlex="1"
              propPadding="0px 7px"
              propWidth="unset"
              placeholderLabel={contentData.footer.contact.address}
              propWidth1="unset"
              propTextAlign="left"
              propTextDecoration="unset"
              propMinWidth="unset"
              propDisplay="unset"
              propFlex1="1"
            />
          </div>
          <div className="w-[169.8px] h-[41.7px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
            <img
              className="h-[31px] w-[31px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/bxbxmap1.svg"
            />
            <Adress placeholderLabel={contentData.footer.contact.phone} />
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start pt-[17.7px] px-0 pb-[17.8px] gap-[21.3px]">
            {contentData.footer.socialMedia.map((icon, idx) => (
              <img
                key={idx}
                className="h-[36.3px] w-[36.3px] relative overflow-hidden shrink-0 min-h-[36px]"
                loading="lazy"
                alt=""
                src={icon}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

LightFOOTER.propTypes = {
  className: PropTypes.string,
};

export default LightFOOTER;
