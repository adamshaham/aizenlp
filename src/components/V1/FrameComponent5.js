import FullName from "./FullName";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-46xl-1 text-[#2da884] font-montserrat ${className}`}
    >
      <div className="w-[1209.4px] flex flex-col items-end justify-start gap-[77.4px] max-w-full gap-[19px] gap-[39px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full">
          <div className="w-[806px] flex flex-col items-start justify-start gap-[23.3px] max-w-full">
            <div className="self-stretch relative leading-[70px] font-semibold mq1050:text-33xl mq1050:leading-[56px] mq450:text-20xl mq450:leading-[42px]">
              <span>{`Contact `}</span>
              <span className="text-[#232a42]">Us</span>
            </div>
            <div className="self-stretch relative text-base-6 leading-[23.33px] font-medium font-plus-jakarta-sans text-[#525252] whitespace-pre-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut
              sapien et ex volutpat tincidunt at felis nunc eget congue ante.
              Vivamus ut sapien.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center [row-gap:20px] max-w-full mq1050:flex-wrap">
          <img
            className="w-[513.3px] relative rounded-tl-[15.56px] rounded-tr-none rounded-br-none rounded-bl-[15.56px] max-h-full overflow-hidden shrink-0 object-cover min-h-[534px] max-w-full mq1050:flex-1"
            loading="lazy"
            alt=""
            src="/image-placeholder-15@2x.png"
          />
          <form className="m-0 flex-1 rounded-tl-none rounded-tr-[15.56px] rounded-br-[15.56px] rounded-bl-none bg-[#2da884] overflow-hidden flex flex-col items-start justify-start pt-[54.5px] px-[46px] pb-[54.4px] box-border gap-[38.9px] min-w-[452px] max-w-full gap-[19px] mq750:py-[35px] mq750:px-[23px] mq750:box-border mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15.6px] max-w-full">
              <FullName
                fullName="Full name"
                enterYourFullNamePlacehol="Enter your full name"
              />
              <FullName
                propPadding="unset"
                fullName="Email"
                enterYourFullNamePlacehol="Enter your email"
              />
              <FullName
                propPadding="unset"
                fullName="Message"
                enterYourFullNamePlacehol="Enter your message"
              />
            </div>
            <button className="cursor-pointer [border:none] pt-[23.3px] px-5 pb-[23.4px] bg-[#fff] self-stretch rounded-[97.22px] overflow-hidden flex flex-row items-center justify-center hover:bg-[#e6e6e6]">
              <div className="w-[299.4px] relative text-xl-4 leading-[24px] font-semibold font-montserrat text-[#2da884] text-center inline-block shrink-0 mq450:text-base mq450:leading-[19px]">
                Read More
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
