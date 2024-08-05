import FAQSection from "./FAQSection";
import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[58.4px] box-border max-w-full text-left text-lgi-4 text-[#1c1f25] font-dm-sans mq750:pb-[25px] mq750:box-border mq1050:pb-[38px] mq1050:box-border ${className}`}
    >
      <FAQSection />
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
