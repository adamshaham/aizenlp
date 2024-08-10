import TextLinkMenu from "./TextLinkMenu";
import NimbusLogo from "./NimbusLogo";
import ButtonText from "./ButtonText";
import PropTypes from "prop-types";

const Navbar1Fixed = ({ className = "" }) => {
  const contentData = {
    headerClass:
      "self-stretch bg-[#fff] flex flex-row items-start justify-center py-0 px-5 box-border top-[0] z-[99] sticky max-w-full gap-[81px] gap-[41px] gap-5",
    containerClass:
      "w-[1440.6px] border-[#d2d5e2] border-b-[1px] border-solid box-border flex flex-col items-start justify-start max-w-[1440.6px] lg:max-w-full",
    topRowClass:
      "self-stretch flex flex-row items-center justify-between pt-[19.4px] px-0 pb-0 gap-5",
    bottomRowClass:
      "self-stretch flex flex-row items-start justify-between pt-[19.5px] px-0 pb-[19.4px] box-border max-w-full gap-5",
    leftNavClass:
      "w-[589.8px] flex flex-row items-end justify-start pt-[5.8px] px-0 pb-[5.9px] box-border gap-[38.9px] max-w-full gap-[19px]",
    rightNavClass: "flex flex-row items-center justify-end gap-inline-[14px]",
    links: [
      {
        label: "English",
        rIcon: true,
        propPadding: "0px 0px 0px 0px",
        propColor: "#79829f",
        propMinWidth: "46px",
        propWidth: "unset",
        icon: "/icon.svg",
      },
      {
        label: "Support",
        rIcon: false,
        propPadding: "unset",
        propColor: "#79829f",
        propMinWidth: "53px",
        propWidth: "unset",
        icon: "/icon1.svg",
      },
      {
        label: "Blog",
        rIcon: false,
        propPadding: "unset",
        propColor: "#79829f",
        propMinWidth: "28px",
        propWidth: "unset",
        icon: "/icon1.svg",
      },
      {
        label: "About us",
        rIcon: true,
        propPadding: "0px 0px 0px 0px",
        propColor: "#79829f",
        propMinWidth: "59px",
        propWidth: "59px",
        icon: "/icon.svg",
      },
      {
        label: "Features",
        rIcon: true,
        propPadding: "unset",
        propColor: "#4b5162",
        propMinWidth: "64px",
        propWidth: "unset",
        icon: "/icon-2.svg",
      },
      {
        label: "Case Studies",
        rIcon: true,
        propPadding: "unset",
        propColor: "#4b5162",
        propMinWidth: "97px",
        propWidth: "unset",
        icon: "/icon-2.svg",
      },
      {
        label: "Pricing",
        rIcon: false,
        propPadding: "unset",
        propColor: "#4b5162",
        propMinWidth: "51px",
        propWidth: "unset",
        icon: "/icon2.svg",
      },
      {
        label: "Applications",
        rIcon: true,
        propPadding: "unset",
        propColor: "#4b5162",
        propMinWidth: "unset",
        propWidth: "unset",
        icon: "/icon2.svg",
      },
    ],
    buttons: [
      {
        showRIcon: false,
        showLIcon: false,
        buttonText: "Get a demo",
        propAlignSelf: "unset",
        propBorderRadius: "8px",
        propBorder: "1px solid #b6d1fb",
        propBackgroundColor: "#fff",
        propWidth: "123.7px",
        propBackdropFilter: "blur(11.67px)",
        propFlex: "unset",
        propPadding: "10px 15px",
        propBackground: "unset",
        propHeight: "unset",
        lIcon: "/l-icon.svg",
        propHeight1: "19.4px",
        propWidth1: "19.4px",
        propMinHeight: "19px",
        propAlignSelf1: "unset",
        propHeight2: "19.4px",
        propFlex1: "1",
        propAlignSelf2: "unset",
        propWidth2: "unset",
        propMinWidth: "78px",
        propColor: "#387ff5",
        propDisplay: "inline-block",
        propHeight3: "unset",
        rIcon: "/r-icon.svg",
        propHeight4: "19.4px",
        propWidth3: "19.4px",
        propMinHeight1: "19px",
      },
      {
        showRIcon: false,
        showLIcon: false,
        buttonText: "Start your free trial",
        propAlignSelf: "unset",
        propBorderRadius: "8px",
        propBorder: "none",
        propBackgroundColor: "#387ff5",
        propWidth: "unset",
        propBackdropFilter: "unset",
        propFlex: "unset",
        propPadding: "11.7px 16px",
        propBackground: "unset",
        propHeight: "unset",
        lIcon: "/l-icon1.svg",
        propHeight1: "19.4px",
        propWidth1: "19.4px",
        propMinHeight: "19px",
        propAlignSelf1: "unset",
        propHeight2: "19.4px",
        propFlex1: "unset",
        propAlignSelf2: "unset",
        propWidth2: "unset",
        propMinWidth: "127px",
        propColor: "#fff",
        propDisplay: "inline-block",
        propHeight3: "unset",
        rIcon: "/r-icon1.svg",
        propHeight4: "19.4px",
        propWidth3: "19.4px",
        propMinHeight1: "19px",
      },
    ],
  };

  return (
    <header className={`${contentData.headerClass} ${className}`}>
      <div className={contentData.containerClass}>
        <div className={contentData.topRowClass}>
          <div className="flex flex-row items-start justify-start gap-inline-[20px]">
            {contentData.links.slice(0, 2).map((link, index) => (
              <TextLinkMenu
                key={index}
                label={link.label}
                rIcon={link.rIcon}
                propPadding={link.propPadding}
                propColor={link.propColor}
                propMinWidth={link.propMinWidth}
                propWidth={link.propWidth}
                icon={link.icon}
              />
            ))}
          </div>
          <div className="flex flex-row items-start justify-start gap-inline-[20px]">
            {contentData.links.slice(2, 4).map((link, index) => (
              <TextLinkMenu
                key={index}
                label={link.label}
                rIcon={link.rIcon}
                propPadding={link.propPadding}
                propColor={link.propColor}
                propMinWidth={link.propMinWidth}
                propWidth={link.propWidth}
                icon={link.icon}
              />
            ))}
          </div>
        </div>
        <div className={contentData.bottomRowClass}>
          <div className={contentData.leftNavClass}>
            <NimbusLogo
              neuros="/neuros.svg"
              nimbusSymbol="/nimbus-symbol.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border max-w-full">
              <nav className="m-0 self-stretch flex flex-row items-center justify-start py-0 px-0 gap-[30.8px] shrink-0 text-center text-[15.6px] text--[#4b5162] font-dm-sans lg:hidden gap-[15px]">
                {contentData.links.slice(4).map((link, index) => (
                  <TextLinkMenu
                    key={index}
                    label={link.label}
                    rIcon={link.rIcon}
                    propPadding={link.propPadding}
                    propColor={link.propColor}
                    propMinWidth={link.propMinWidth}
                    propWidth={link.propWidth}
                    icon={link.icon}
                  />
                ))}
              </nav>
            </div>
          </div>
          <div className={contentData.rightNavClass}>
            {contentData.buttons.map((button, index) => (
              <ButtonText
                key={index}
                showRIcon={button.showRIcon}
                showLIcon={button.showLIcon}
                buttonText={button.buttonText}
                propAlignSelf={button.propAlignSelf}
                propBorderRadius={button.propBorderRadius}
                propBorder={button.propBorder}
                propBackgroundColor={button.propBackgroundColor}
                propWidth={button.propWidth}
                propBackdropFilter={button.propBackdropFilter}
                propFlex={button.propFlex}
                propPadding={button.propPadding}
                propBackground={button.propBackground}
                propHeight={button.propHeight}
                lIcon={button.lIcon}
                propHeight1={button.propHeight1}
                propWidth1={button.propWidth1}
                propMinHeight={button.propMinHeight}
                propAlignSelf1={button.propAlignSelf1}
                propHeight2={button.propHeight2}
                propFlex1={button.propFlex1}
                propAlignSelf2={button.propAlignSelf2}
                propWidth2={button.propWidth2}
                propMinWidth={button.propMinWidth}
                propColor={button.propColor}
                propDisplay={button.propDisplay}
                propHeight3={button.propHeight3}
                rIcon={button.rIcon}
                propHeight4={button.propHeight4}
                propWidth3={button.propWidth3}
                propMinHeight1={button.propMinHeight1}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

Navbar1Fixed.propTypes = {
  className: PropTypes.string,
};

export default Navbar1Fixed;
