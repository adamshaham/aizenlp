import Adress from "./Adress";
import Button from "./Button";
import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[14.1px] pl-7 pr-5 box-border max-w-full ${className}`}
    >
      <header className="w-[927.2px] flex flex-row items-start justify-between gap-5 max-w-full mq725:w-[492.8px]">
        <div className="overflow-hidden flex flex-row items-start justify-start py-[8.9px] px-2">
          <img
            className="h-[51.4px] w-[164.9px] relative object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-4@2x.png"
          />
        </div>
        <nav className="m-0 w-[434.4px] flex flex-col items-start justify-start pt-[9.7px] px-0 pb-0 box-border max-w-full mq725:hidden">
          <nav className="m-0 w-[373.4px] overflow-hidden flex flex-row items-center justify-start max-w-full">
            <nav className="m-0 flex-1 overflow-hidden flex flex-row items-center justify-between max-w-full gap-5">
              <Adress
                propAlignSelf="unset"
                propFlex="unset"
                propPadding="8.9px 8px 8.8px"
                propWidth="64.7px"
                placeholderLabel="Home"
                propWidth1="47px"
                propTextAlign="center"
                propTextDecoration="none"
                propMinWidth="unset"
                propDisplay="inline-block"
                propFlex1="unset"
              />
              <Adress
                propAlignSelf="unset"
                propFlex="unset"
                propPadding="8.9px 8px 8.8px"
                propWidth="79.7px"
                placeholderLabel="Product"
                propWidth1="62px"
                propTextAlign="center"
                propTextDecoration="none"
                propMinWidth="62px"
                propDisplay="inline-block"
                propFlex1="unset"
              />
              <Adress
                propAlignSelf="unset"
                propFlex="unset"
                propPadding="8.9px 8px 8.8px"
                propWidth="65.7px"
                placeholderLabel="About"
                propWidth1="48px"
                propTextAlign="center"
                propTextDecoration="none"
                propMinWidth="unset"
                propDisplay="inline-block"
                propFlex1="unset"
              />
              <Adress
                propAlignSelf="unset"
                propFlex="unset"
                propPadding="8.9px 8px 8.8px"
                propWidth="80.7px"
                placeholderLabel="Contact"
                propWidth1="63px"
                propTextAlign="center"
                propTextDecoration="none"
                propMinWidth="63px"
                propDisplay="inline-block"
                propFlex1="unset"
              />
            </nav>
          </nav>
        </nav>
        <div className="w-[128.6px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
          <Button
            propBorder="0.9px solid #fff"
            propBackgroundColor="transparent"
            propAlignSelf="stretch"
            propPadding="0px 31px"
            propWidth="unset"
            tryForFree="Login"
          />
        </div>
      </header>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
