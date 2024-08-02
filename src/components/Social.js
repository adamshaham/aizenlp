import SocialMedia from "./SocialMedia";
import PropTypes from "prop-types";

const Social = ({ className = "" }) => {
  return (
    <div
      className={`w-[185.7px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[9.7px] px-[9px] pb-[9.8px] box-border ${className}`}
    >
      <SocialMedia />
    </div>
  );
};

Social.propTypes = {
  className: PropTypes.string,
};

export default Social;
