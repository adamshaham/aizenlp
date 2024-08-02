import PropTypes from "prop-types";

const TextButton = ({ className = "" }) => {
  return (
    <div
      className={`overflow-hidden flex flex-row items-center justify-start text-left text-3xl text-neutral-n0 font-button1 ${className}`}
    >
      <b className="relative tracking-[0.1px] leading-[33px] whitespace-nowrap mq450:text-lg mq450:leading-[26px]">
        More Testimonials
      </b>
    </div>
  );
};

TextButton.propTypes = {
  className: PropTypes.string,
};

export default TextButton;
