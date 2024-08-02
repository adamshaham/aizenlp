import PropTypes from "prop-types";

const TextParagraphe = ({ className = "" }) => {
  return (
    <div
      className={`overflow-hidden flex flex-row items-center justify-start text-left text-lg text-neutral-n0 font-button1 ${className}`}
    >
      <div className="h-[27px] relative tracking-[0.2px] leading-[27px] inline-block">
        Available exclusivery on Figmaland
      </div>
    </div>
  );
};

TextParagraphe.propTypes = {
  className: PropTypes.string,
};

export default TextParagraphe;
