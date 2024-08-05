import Input from "./Input";
import Button1 from "./Button1";
import PropTypes from "prop-types";

const MailingInput1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start pt-[33px] px-0 pb-[33.2px] gap-[11.7px] mq450:flex-wrap ${className}`}
    >
      <Input
        propAlignSelf="unset"
        propBackgroundColor="#f4f4f4"
        propFlex="1"
        propMinWidth="172px"
        propFlexDirection="column"
        yourEmailPlaceholder="Your Email"
        propWidth="66px"
      />
      <Button1
        propBackgroundColor="#2091f9"
        propAlignSelf="unset"
        propBorder="none"
        propFlexDirection="column"
        propPadding="unset"
        subsribe="Subscribe"
        propColor="#fff"
        propTextDecoration="unset"
        propMinWidth="74px"
      />
    </div>
  );
};

MailingInput1.propTypes = {
  className: PropTypes.string,
};

export default MailingInput1;
