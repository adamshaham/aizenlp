import PropTypes from "prop-types";

const Testimonials = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[63px] box-border max-w-full text-left text-[65px] text-[#232a42] font-montserrat mq750:pb-[41px] mq750:box-border ${className}`}
    >
      <div className="w-[1440px] flex flex-row items-start justify-center py-0 px-0 box-border gap-[93.3px] max-w-full mq1050:flex-wrap gap-[23px] gap-[47px]">
        <img
          className="w-[523.1px] relative rounded-[15.56px] max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1050:flex-1"
          loading="lazy"
          alt=""
          src="/image-placeholder-2@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[38.9px] min-w-[385px] max-w-full mq450:min-w-full gap-[19px]">
          <div className="self-stretch flex flex-col items-start justify-center gap-[23.3px]">
            <div className="self-stretch relative leading-[70px] font-semibold mq1050:text-[52px] mq1050:leading-[56px] mq450:text-[40px] mq450:leading-[42px]">
              <span>{`They `}</span>
              <span className="text-[#2da884]">Choose Us</span>
            </div>
            <div className=" w-[700px] self-stretch relative text-[15.6px] leading-[23.33px] font-medium font-plus-jakarta-sans text-[#525252] whitespace-pre-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut
              sapien et ex volutpat tincidunt eget at felis nunc eget congue
              ante. Vivamus ut sapien .
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-[23px] box-border gap-[38.9px] max-w-full text-[27.2px] gap-[19px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[23.3px] max-w-full shrink-0 mq750:flex-wrap">
              <img
                className="h-[46.7px] w-[46.7px] relative rounded-[15.56px] overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon-21.svg"
              />
              <div className="flex-1 relative leading-[32px] font-semibold inline-block min-w-[102px] max-w-full mq450:text-[22px] mq450:leading-[25px]">
                Expertise
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[23.3px] max-w-full shrink-0 mq750:flex-wrap">
              <img
                className="h-[46.7px] w-[46.7px] relative rounded-[15.56px] overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon-21.svg"
              />
              <div className="flex-1 relative leading-[32px] font-semibold inline-block min-w-[119px] max-w-full mq450:text-[22px] mq450:leading-[25px]">
                Timeliness
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[23.3px] max-w-full shrink-0 mq750:flex-wrap">
              <img
                className="h-[46.7px] w-[46.7px] relative rounded-[15.56px] overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon-21.svg"
              />
              <div className="flex-1 relative leading-[32px] font-semibold inline-block min-w-[160px] max-w-full mq450:text-[22px] mq450:leading-[25px]">
                Customization
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[23.3px] max-w-full shrink-0 mq750:flex-wrap">
              <img
                className="h-[46.7px] w-[46.7px] relative rounded-[15.56px] overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon-21.svg"
              />
              <div className="flex-1 relative leading-[32px] font-semibold inline-block min-w-[244px] max-w-full mq450:text-[22px] mq450:leading-[25px]">
                Quality Workmanship
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
