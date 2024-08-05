import Input from "./Input";
import Button1 from "./Button1";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[38.9px] box-border gap-[36.9px] max-w-full gap-[18px] ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1208px]"
        loading="lazy"
        alt=""
      />
      <div className="w-[1380.3px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1118px] flex flex-row flex-wrap items-end justify-start gap-[10.2px] max-w-full">
          <div className="overflow-hidden flex flex-col items-center justify-start py-0 px-[19px]">
            <div className="overflow-hidden flex flex-row items-start justify-start">
              <div className="overflow-hidden flex flex-row items-start justify-start py-[9.7px] px-[9px]">
                <img
                  className="h-[56.4px] w-[180.8px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-41@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[7.7px] box-border min-w-[565px] max-w-full mq750:min-w-full">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[42.8px] max-w-full gap-[21px] mq750:flex-wrap">
              <nav className="m-0 flex-1 overflow-hidden flex flex-row items-center justify-start gap-[20.4px] min-w-[268px] max-w-full whitespace-nowrap text-center text-mini-6 text-[#fff] font-button1 mq450:flex-wrap">
                <div className="w-[59.4px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[9.7px] px-2 box-border">
                  <a className="[text-decoration:none] relative tracking-[0.19px] leading-[27px] text-[inherit] inline-block min-w-[41px]">
                    Home
                  </a>
                </div>
                <div className="flex-1 overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[9px] box-border min-w-[47px]">
                  <a className="[text-decoration:none] relative tracking-[0.19px] leading-[27px] text-[inherit] inline-block min-w-[53px]">
                    Product
                  </a>
                </div>
                <div className="flex-1 overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[9px] box-border min-w-[43px]">
                  <a className="[text-decoration:none] relative tracking-[0.19px] leading-[27px] text-[inherit] inline-block min-w-[47px]">
                    Pricing
                  </a>
                </div>
                <div className="w-[59.4px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[9.7px] px-[9px] box-border">
                  <a className="[text-decoration:none] relative tracking-[0.19px] leading-[27px] text-[inherit] inline-block min-w-[40px]">
                    About
                  </a>
                </div>
                <div className="flex-1 overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[9px] box-border min-w-[47px]">
                  <a className="[text-decoration:none] relative tracking-[0.19px] leading-[27px] text-[inherit] inline-block min-w-[53px]">
                    Contact
                  </a>
                </div>
              </nav>
              <div className="flex-1 flex flex-row items-center justify-start py-[3.7px] px-0 box-border min-w-[269px] max-w-full">
                <div className="flex-1 flex flex-row items-center justify-start gap-[11.7px] max-w-full mq450:flex-wrap">
                  <Input
                    propAlignSelf="unset"
                    propBackgroundColor="#efefef"
                    propFlex="1"
                    propMinWidth="172px"
                    propFlexDirection="column"
                    yourEmailPlaceholder="Your Email"
                    propWidth="66px"
                  />
                  <Button1
                    propBackgroundColor="#fff"
                    propAlignSelf="unset"
                    propBorder="none"
                    propFlexDirection="column"
                    propPadding="unset"
                    subsribe="Subsribe"
                    propColor="#2091f9"
                    propTextDecoration="none"
                    propMinWidth="65px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
