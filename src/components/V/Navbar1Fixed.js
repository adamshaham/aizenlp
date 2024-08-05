import TextLinkMenu from "./TextLinkMenu";
import NimbusLogo from "./NimbusLogo";
import ButtonText from "./ButtonText";
import PropTypes from "prop-types";

const Navbar1Fixed = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-[#fff] flex flex-row items-start justify-center py-0 px-5 box-border top-[0] z-[99] sticky max-w-full gap-[81px] gap-[41px] gap-5 ${className}`}
    >
      <div className="w-[1170.6px] border-[#d2d5e2] border-b-[1px] border-solid box-border flex flex-col items-start justify-start max-w-[1170.6px] lg:max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between pt-[19.4px] px-0 pb-0 gap-5">
          <div className="flex flex-row items-start justify-start gap-inline-xl">
            <TextLinkMenu
              label="English"
              rIcon
              propPadding="0px 0px 0px 0px"
              propColor="#79829f"
              propMinWidth="46px"
              propWidth="unset"
              icon="/icon.svg"
            />
            <TextLinkMenu
              label="Support"
              rIcon={false}
              propPadding="unset"
              propColor="#79829f"
              propMinWidth="53px"
              propWidth="unset"
              icon="/icon1.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-inline-xl">
            <TextLinkMenu
              label="Blog"
              rIcon={false}
              propPadding="unset"
              propColor="#79829f"
              propMinWidth="28px"
              propWidth="unset"
              icon="/icon1.svg"
            />
            <TextLinkMenu
              label="About us"
              rIcon
              propPadding="0px 0px 0px 0px"
              propColor="#79829f"
              propMinWidth="59px"
              propWidth="59px"
              icon="/icon.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between pt-[19.5px] px-0 pb-[19.4px] box-border max-w-full gap-5">
          <div className="w-[589.8px] flex flex-row items-end justify-start pt-[5.8px] px-0 pb-[5.9px] box-border gap-[38.9px] max-w-full gap-[19px]">
            <NimbusLogo
              neuros="/neuros.svg"
              nimbusSymbol="/nimbus-symbol.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border max-w-full">
              <nav className="m-0 self-stretch flex flex-row items-center justify-start py-0 px-0 gap-[30.8px] shrink-0 text-center text-base-6 text--[#4b5162] font-dm-sans lg:hidden gap-[15px]">
                <TextLinkMenu
                  label="Features"
                  rIcon
                  propPadding="unset"
                  propColor="-[#4b5162]"
                  propMinWidth="64px"
                  propWidth="unset"
                  icon="/icon-2.svg"
                />
                <TextLinkMenu
                  label="Case Studies"
                  rIcon
                  propPadding="unset"
                  propColor="-[#4b5162]"
                  propMinWidth="97px"
                  propWidth="unset"
                  icon="/icon-2.svg"
                />
                <TextLinkMenu
                  label="Pricing"
                  rIcon={false}
                  propPadding="unset"
                  propColor="-[#4b5162]"
                  propMinWidth="51px"
                  propWidth="unset"
                  icon="/icon2.svg"
                />
                <TextLinkMenu label="Applications" rIcon icon="/icon2.svg" />
              </nav>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-inline-sm">
            <ButtonText
              showRIcon={false}
              showLIcon={false}
              buttonText="Get a demo"
              propAlignSelf="unset"
              propBorderRadius="8px"
              propBorder="1px solid #b6d1fb"
              propBackgroundColor="#fff"
              propWidth="123.7px"
              propBackdropFilter="blur(11.67px)"
              propFlex="unset"
              propPadding="10px 15px"
              propBackground="unset"
              propHeight="unset"
              lIcon="/l-icon.svg"
              propHeight1="19.4px"
              propWidth1="19.4px"
              propMinHeight="19px"
              propAlignSelf1="unset"
              propHeight2="19.4px"
              propFlex1="1"
              propAlignSelf2="unset"
              propWidth2="unset"
              propMinWidth="78px"
              propColor="#387ff5"
              propDisplay="inline-block"
              propHeight3="unset"
              rIcon="/r-icon.svg"
              propHeight4="19.4px"
              propWidth3="19.4px"
              propMinHeight1="19px"
            />
            <ButtonText
              showRIcon={false}
              showLIcon={false}
              buttonText="Start your free trial"
              propAlignSelf="unset"
              propBorderRadius="8px"
              propBorder="none"
              propBackgroundColor="#387ff5"
              propWidth="unset"
              propBackdropFilter="unset"
              propFlex="unset"
              propPadding="11.7px 16px"
              propBackground="unset"
              propHeight="unset"
              lIcon="/l-icon1.svg"
              propHeight1="19.4px"
              propWidth1="19.4px"
              propMinHeight="19px"
              propAlignSelf1="unset"
              propHeight2="19.4px"
              propFlex1="unset"
              propAlignSelf2="unset"
              propWidth2="unset"
              propMinWidth="127px"
              propColor="#fff"
              propDisplay="inline-block"
              propHeight3="unset"
              rIcon="/r-icon1.svg"
              propHeight4="19.4px"
              propWidth3="19.4px"
              propMinHeight1="19px"
            />
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
