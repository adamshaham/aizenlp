import H from "./H";
import TextParagraphe from "./TextParagraphe";
import MailingInput1 from "./MailingInput1";
import PropTypes from "prop-types";

const DesktopNewsletter = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start pt-[9.8px] px-[9px] pb-[9.6px] text-left text-3xl text-neutral-n0 font-button1 ${className}`}
    >
      <H />
      <TextParagraphe />
      <MailingInput1 />
    </div>
  );
};

DesktopNewsletter.propTypes = {
  className: PropTypes.string,
};

export default DesktopNewsletter;
