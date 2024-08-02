import Misi from "./Misi";
import PropTypes from "prop-types";

const Expertise = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[81.6px] box-border max-w-full text-left text-46xl-1 text-heading font-montserrat mq1050:pb-[53px] mq1050:box-border mq750:pb-[34px] mq750:box-border ${className}`}
    >
      <div className="w-[1209.4px] flex flex-col items-start justify-start gap-[77.4px] max-w-full gap-[19px] gap-[39px]">
        <div className="w-[800.1px] flex flex-col items-start justify-start gap-[23.4px] max-w-full">
          <div className="self-stretch relative leading-[70px] font-semibold mq1050:text-33xl mq1050:leading-[56px] mq450:text-20xl mq450:leading-[42px]">
            <span>{`Caring For Your `}</span>
            <span className="text-accent-1">Private Plants</span>
            <span>, Our Expertise</span>
          </div>
          <div className="self-stretch relative text-base-6 leading-[23.33px] font-medium font-plus-jakarta-sans text-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
            et ex volutpat tincidunt eget at felis.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[93.3px] max-w-full text-8xl-2 mq1050:flex-wrap gap-[23px] gap-[47px]">
          <div className="w-[536.7px] flex flex-col items-start justify-start gap-[38px] min-w-[536.7px] shrink-0 max-w-full mq1050:flex-1 gap-[19px] mq750:min-w-full">
            <Misi
              icon="/icon.svg"
              our="Our "
              mission="Mission"
              loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis."
            />
            <Misi
              propAlignSelf="stretch"
              propWidth="unset"
              icon="/icon1.svg"
              propOverflow="unset"
              our="Our "
              mission="Vision"
              loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis."
            />
          </div>
          <img
            className="h-[598.9px] flex-1 relative rounded-[15.56px] max-w-full overflow-hidden object-cover min-w-[376px] shrink-0 mq450:min-w-full"
            loading="lazy"
            alt=""
            src="/image-placeholder-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Expertise.propTypes = {
  className: PropTypes.string,
};

export default Expertise;
