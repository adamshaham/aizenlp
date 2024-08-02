import Input from "./Input";
import Button1 from "./Button1";
import PropTypes from "prop-types";

const MailingInput = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start pt-[23.4px] px-0 pb-[23.2px] gap-[11.7px] ${className}`}
    >
      <Input yourEmailPlaceholder="Your Email" />
      <Button1 subsribe="Subsribe" />
    </div>
  );
};

MailingInput.propTypes = {
  className: PropTypes.string,
};

export default MailingInput;
