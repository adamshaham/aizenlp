import PropTypes from "prop-types";

const H = ({ className = "" }) => {
  return (
    <div
      className={`overflow-hidden flex flex-row items-center justify-start text-left text-3xl text-[#fff] font-button1 ${className}`}
    >
      <h3 className="m-0 h-[33px] relative text-inherit tracking-[0.1px] leading-[33px] font-bold font-[inherit] inline-block mq450:text-lg mq450:leading-[26px]">
        Subscribe to our Newsletter
      </h3>
    </div>
  );
};

H.propTypes = {
  className: PropTypes.string,
};

export default H;
