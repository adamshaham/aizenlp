import PropTypes from "prop-types";

const NimbusLogo = ({ className = "", neuros, nimbusSymbol }) => {
  return (
    <div
      className={`flex flex-row items-end justify-start pt-[3.1px] px-0 pb-[7.1px] gap-[5.9px] shrink-0 ${className}`}
    >
      <img
        className="h-[20.8px] w-[90.2px] relative shrink-0"
        alt=""
        src={neuros}
      />
      <img
        className="h-[16.3px] w-[15.1px] relative shrink-0"
        alt=""
        src={nimbusSymbol}
      />
    </div>
  );
};

NimbusLogo.propTypes = {
  className: PropTypes.string,
  neuros: PropTypes.string,
  nimbusSymbol: PropTypes.string,
};

export default NimbusLogo;
