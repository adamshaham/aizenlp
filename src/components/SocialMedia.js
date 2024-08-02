import PropTypes from "prop-types";

const SocialMedia = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 overflow-hidden flex flex-row items-start justify-between gap-5 ${className}`}
    >
      <img
        className="h-[39.8px] w-[39.8px] relative overflow-hidden shrink-0 min-h-[40px]"
        loading="lazy"
        alt=""
        src="/antdesigntwitteroutlined1.svg"
      />
      <img
        className="h-[39.8px] w-[39.8px] relative overflow-hidden shrink-0 min-h-[40px]"
        loading="lazy"
        alt=""
        src="/antdesignfacebookfilled1.svg"
      />
      <img
        className="h-[39.8px] w-[39.8px] relative overflow-hidden shrink-0 min-h-[40px]"
        loading="lazy"
        alt=""
        src="/antdesignlinkedinfilled1.svg"
      />
    </div>
  );
};

SocialMedia.propTypes = {
  className: PropTypes.string,
};

export default SocialMedia;
