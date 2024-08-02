import PropTypes from "prop-types";

const Subtitle = ({ className = "" }) => {
  return (
    <div
      className={`overflow-hidden flex flex-row items-center justify-start py-0 px-2 text-left text-base text-neutral-n0 font-body-base-regular ${className}`}
    >
      <div className="relative tracking-[0.1px] leading-[24px] font-medium inline-block min-w-[70px]">
        Designer
      </div>
    </div>
  );
};

Subtitle.propTypes = {
  className: PropTypes.string,
};

export default Subtitle;
