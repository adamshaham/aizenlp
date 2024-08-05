import FrameComponent from "./FrameComponent";
import UserCard from "./UserCard";
import PropTypes from "prop-types";

const TestimonialSection = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-[#fff] overflow-hidden flex flex-row items-start justify-center pt-[124.5px] px-5 pb-[108.8px] box-border shrink-0 max-w-full z-[2] text-center text-lgi-4 text-[#1c1f25] font-body-base-regular gap-section-spacing-md mq450:pb-[46px] mq450:box-border mq1050:pb-[71px] mq1050:box-border ${className}`}
    >
      <div className="w-[1170.6px] flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[46.6px] max-w-[1170.6px] lg:max-w-full gap-[23px]">
        <FrameComponent
          propWidth="777.8px"
          headline="The Neuros Experience"
          description="At Neuros, we pride ourselves on delivering top-notch AI-driven business analytics. But don't just take our word for it. Hear what our satisfied users have to say."
          showLIcon1={false}
          showRIcon1={false}
        />
        <div className="w-[1170.6px] overflow-x-auto flex flex-row items-start justify-start py-0 px-[390px] box-border gap-[23.3px] max-w-full lg:pl-[195px] lg:pr-[195px] lg:box-border mq750:pl-[97px] mq750:pr-[97px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="ml-[-1648.9px] w-[388.9px] [backdrop-filter:blur(77.78px)] rounded-xl bg-[#fff] border-[#b6bcce] border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-start py-[30px] px-[38px] max-w-full mq750:pt-[124.5px] mq750:pb-5 mq750:box-border">
            <div className="h-[447.2px] flex-1 flex flex-col items-start justify-start pt-[66.1px] px-0 pb-[116.1px] box-border gap-[19.5px] mq750:pt-[124.5px] mq750:pb-[75px] mq750:box-border">
              <div className="w-[157px] h-[46.7px] overflow-hidden shrink-0 hidden" />
              <div className="self-stretch h-[265px] relative leading-[158%] font-medium flex items-center justify-center shrink-0">
                In healthcare, data accuracy is paramount. Neuros ensures we
                have real-time analytics, leading to improved patient care.
              </div>
              <div className="self-stretch h-[96.7px] flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border shrink-0">
                <UserCard
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propWidth="122px"
                  propWidth1="unset"
                  imgLibAvaCartoon="/img-libavacartoon@2x.png"
                  propFlex1="1"
                  propAlignSelf1="stretch"
                  propAlignSelf2="stretch"
                  propFlex2="1"
                  propWidth2="unset"
                  name1="Aiden Z. Lee"
                  propAlignSelf3="stretch"
                  propWidth3="unset"
                  propHeight="unset"
                  propDisplay="unset"
                  propFlex3="1"
                  position="Operations Lead"
                  propWidth4="unset"
                  propAlignSelf4="stretch"
                  propHeight1="25px"
                  propDisplay1="inline-block"
                  propMinWidth="unset"
                />
              </div>
            </div>
          </div>
          <div className="ml-[-1648.9px] w-[388.9px] [backdrop-filter:blur(77.78px)] rounded-xl bg-[#fff] border-[#b6bcce] border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-start py-[30px] px-[38px] max-w-full mq750:pt-[124.5px] mq750:pb-5 mq750:box-border">
            <div className="h-[447.2px] flex-1 flex flex-col items-start justify-start pt-[66.1px] px-0 pb-[116.1px] box-border gap-[19.5px] mq750:pt-[124.5px] mq750:pb-[75px] mq750:box-border">
              <div className="w-[157px] h-[46.7px] overflow-hidden shrink-0 hidden" />
              <div className="self-stretch h-[265px] relative leading-[158%] font-medium flex items-center justify-center shrink-0">
                From the intuitive interface to top-tier customer support,
                Neuros has exceeded all our expectations.
              </div>
              <div className="w-[237px] h-[96.7px] flex flex-row items-start justify-start py-0 pl-[94px] pr-0 box-border shrink-0">
                <UserCard
                  propAlignSelf="stretch"
                  propFlex="1"
                  propWidth="unset"
                  propWidth1="unset"
                  imgLibAvaCartoon="/img-libavacartoon-1@2x.png"
                  propFlex1="1"
                  propAlignSelf1="stretch"
                  propAlignSelf2="unset"
                  propFlex2="1"
                  propWidth2="73px"
                  name1="Linda F."
                  propAlignSelf3="stretch"
                  propWidth3="unset"
                  propHeight="unset"
                  propDisplay="unset"
                  propFlex3="1"
                  position="Marketing Manager"
                  propWidth4="unset"
                  propAlignSelf4="stretch"
                  propHeight1="25px"
                  propDisplay1="inline-block"
                  propMinWidth="unset"
                />
              </div>
            </div>
          </div>
          <div className="ml-[-1648.9px] w-[388.9px] [backdrop-filter:blur(77.78px)] rounded-xl bg-[#fff] border-[#b6bcce] border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-start py-[30px] px-[38px] max-w-full mq750:pt-[124.5px] mq750:pb-5 mq750:box-border">
            <div className="h-[447.2px] flex-1 flex flex-col items-start justify-start pt-[66.1px] px-0 pb-[116.1px] box-border gap-[19.5px] mq750:pt-[124.5px] mq750:pb-[75px] mq750:box-border">
              <div className="w-[157px] h-[46.7px] overflow-hidden shrink-0 hidden" />
              <div className="self-stretch h-[265px] relative leading-[158%] font-medium flex items-center justify-center shrink-0">
                The seamless integrations and customizable dashboards make
                Neuros an indispensable tool for our business operations.
              </div>
              <div className="w-[205px] flex flex-row items-start justify-start py-0 pl-[94px] pr-0 box-border">
                <UserCard
                  propAlignSelf="unset"
                  propFlex="1"
                  propWidth="unset"
                  propWidth1="76.1px"
                  imgLibAvaCartoon="/img-libavacartoon-2@2x.png"
                  propFlex1="unset"
                  propAlignSelf1="stretch"
                  propAlignSelf2="stretch"
                  propFlex2="unset"
                  propWidth2="unset"
                  name1="Rajesh K. Patel"
                  propAlignSelf3="unset"
                  propWidth3="112px"
                  propHeight="25px"
                  propDisplay="inline-block"
                  propFlex3="unset"
                  position="CTO"
                  propWidth4="33px"
                  propAlignSelf4="unset"
                  propHeight1="25px"
                  propDisplay1="inline-block"
                  propMinWidth="unset"
                />
              </div>
            </div>
          </div>
          <div className="ml-[-1648.9px] w-[388.9px] [backdrop-filter:blur(77.78px)] rounded-xl bg-[#fff] border-[#b6bcce] border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-start py-[30px] px-[38px] max-w-full mq750:pt-[124.5px] mq750:pb-5 mq750:box-border">
            <div className="h-[447.2px] flex-1 flex flex-col items-start justify-start pt-[66.1px] px-0 pb-[116.1px] box-border gap-[19.5px] mq750:pt-[124.5px] mq750:pb-[75px] mq750:box-border">
              <div className="w-[157px] h-[46.7px] overflow-hidden shrink-0 hidden" />
              <div className="self-stretch h-[265px] relative leading-[158%] font-medium flex items-center justify-center shrink-0">
                Project management is smoother with Neuros. Its dashboards
                provide a clear view of progress and areas of improvement.
              </div>
              <div className="w-[200px] flex flex-row items-start justify-start py-0 pl-[94px] pr-0 box-border">
                <UserCard
                  propAlignSelf="unset"
                  propFlex="1"
                  propWidth="unset"
                  propWidth1="76.1px"
                  imgLibAvaCartoon="/img-libavacartoon-3@2x.png"
                  propFlex1="unset"
                  propAlignSelf1="stretch"
                  propAlignSelf2="stretch"
                  propFlex2="unset"
                  propWidth2="unset"
                  name1="Nathan D. Hall"
                  propAlignSelf3="unset"
                  propWidth3="107px"
                  propHeight="unset"
                  propDisplay="inline-block"
                  propFlex3="unset"
                  position="Project Lead"
                  propWidth4="unset"
                  propAlignSelf4="unset"
                  propHeight1="unset"
                  propDisplay1="inline-block"
                  propMinWidth="93px"
                />
              </div>
            </div>
          </div>
          <div className="ml-[-1648.9px] w-[388.9px] [backdrop-filter:blur(77.78px)] rounded-xl bg-[#fff] border-[#b6bcce] border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-start py-[30px] px-[38px] max-w-full mq750:pt-[124.5px] mq750:pb-5 mq750:box-border">
            <div className="h-[447.2px] flex-1 flex flex-col items-start justify-start pt-[66.1px] px-0 pb-[116.1px] box-border gap-[19.5px] mq750:pt-[124.5px] mq750:pb-[75px] mq750:box-border">
              <div className="w-[157px] h-[46.7px] overflow-hidden shrink-0 hidden" />
              <div className="self-stretch h-[265px] relative leading-[158%] font-medium flex items-center justify-center shrink-0">
                Neuros's real-time data has been crucial in refining our
                products. Its collaborative features ensure our team is always
                aligned.
              </div>
              <div className="w-[230px] flex flex-row items-start justify-start py-0 pl-[94px] pr-0 box-border">
                <UserCard
                  propAlignSelf="unset"
                  propFlex="1"
                  propWidth="unset"
                  propWidth1="76.1px"
                  imgLibAvaCartoon="/img-libavacartoon-4@2x.png"
                  propFlex1="unset"
                  propAlignSelf1="stretch"
                  propAlignSelf2="stretch"
                  propFlex2="unset"
                  propWidth2="unset"
                  name1="Naomi K. Johnson"
                  propAlignSelf3="unset"
                  propWidth3="138px"
                  propHeight="unset"
                  propDisplay="inline-block"
                  propFlex3="unset"
                  position="Product Manager"
                  propWidth4="unset"
                  propAlignSelf4="unset"
                  propHeight1="unset"
                  propDisplay1="inline-block"
                  propMinWidth="128px"
                />
              </div>
            </div>
          </div>
          <div className="ml-[-1648.9px] w-[388.9px] [backdrop-filter:blur(77.78px)] rounded-xl bg-[#fff] border-[#b6bcce] border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-start py-[30px] px-[38px] max-w-full mq750:pt-[124.5px] mq750:pb-5 mq750:box-border">
            <div className="h-[447.2px] flex-1 flex flex-col items-start justify-start pt-[66.1px] px-0 pb-[116.1px] box-border gap-[19.5px] mq750:pt-[124.5px] mq750:pb-[75px] mq750:box-border">
              <div className="w-[157px] h-[46.7px] overflow-hidden shrink-0 hidden" />
              <div className="self-stretch h-[265px] relative leading-[158%] font-medium flex items-center justify-center shrink-0">
                Real-time data processing with Neuros has changed how we make
                decisions. It's a must-have tool for modern businesses.
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-[94px] pr-0">
                <UserCard
                  propAlignSelf="unset"
                  propFlex="unset"
                  propWidth="unset"
                  propWidth1="76.1px"
                  imgLibAvaCartoon="/img-libavacartoon-5@2x.png"
                  propFlex1="unset"
                  propAlignSelf1="unset"
                  propAlignSelf2="unset"
                  propFlex2="unset"
                  propWidth2="unset"
                  name1="Michael O. Lopez"
                  propAlignSelf3="unset"
                  propWidth3="unset"
                  propHeight="unset"
                  propDisplay="unset"
                  propFlex3="unset"
                  position="Operations Director"
                  propWidth4="unset"
                  propAlignSelf4="unset"
                  propHeight1="unset"
                  propDisplay1="unset"
                  propMinWidth="unset"
                />
              </div>
            </div>
          </div>
          <div className="ml-[-1648.9px] w-[388.9px] [backdrop-filter:blur(77.78px)] rounded-xl bg-[#fff] border-[#b6bcce] border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-start py-[30px] px-[38px] max-w-full mq750:pt-[124.5px] mq750:pb-5 mq750:box-border">
            <div className="h-[447.2px] flex-1 flex flex-col items-start justify-start pt-[66.1px] px-0 pb-[116.1px] box-border gap-[19.5px] mq750:pt-[124.5px] mq750:pb-[75px] mq750:box-border">
              <div className="w-[157px] h-[46.7px] overflow-hidden shrink-0 hidden" />
              <div className="self-stretch h-[265px] relative leading-[158%] font-medium flex items-center justify-center shrink-0">
                The seamless integrations and customizable dashboards make
                Neuros an indispensable tool for our business operations.
              </div>
              <div className="w-[205px] flex flex-row items-start justify-start py-0 pl-[94px] pr-0 box-border">
                <UserCard
                  propAlignSelf="unset"
                  propFlex="1"
                  propWidth="unset"
                  propWidth1="76.1px"
                  imgLibAvaCartoon="/img-libavacartoon-6@2x.png"
                  propFlex1="unset"
                  propAlignSelf1="stretch"
                  propAlignSelf2="stretch"
                  propFlex2="unset"
                  propWidth2="unset"
                  name1="Rajesh K. Patel"
                  propAlignSelf3="unset"
                  propWidth3="112px"
                  propHeight="25px"
                  propDisplay="inline-block"
                  propFlex3="unset"
                  position="CTO"
                  propWidth4="33px"
                  propAlignSelf4="unset"
                  propHeight1="25px"
                  propDisplay1="inline-block"
                  propMinWidth="unset"
                />
              </div>
            </div>
          </div>
          <div className="ml-[-1648.9px] w-[388.9px] [backdrop-filter:blur(77.78px)] rounded-xl bg-[#fff] border-[#b6bcce] border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-start py-[30px] px-[38px] max-w-full mq750:pt-[124.5px] mq750:pb-5 mq750:box-border">
            <div className="h-[447.2px] flex-1 flex flex-col items-start justify-start pt-[66.1px] px-0 pb-[116.1px] box-border gap-[19.5px] mq750:pt-[124.5px] mq750:pb-[75px] mq750:box-border">
              <div className="w-[157px] h-[46.7px] overflow-hidden shrink-0 hidden" />
              <div className="self-stretch h-[265px] relative leading-[158%] font-medium flex items-center justify-center shrink-0">
                Financial forecasting is complex, but Neuros has simplified it
                for us. Its predictive analytics are second to none.
              </div>
              <div className="w-[257px] flex flex-row items-start justify-start py-0 pl-[94px] pr-0 box-border mq450:pl-5 mq450:box-border">
                <UserCard
                  propAlignSelf="unset"
                  propFlex="1"
                  propWidth="unset"
                  propWidth1="76.1px"
                  imgLibAvaCartoon="/img-libavacartoon-7@2x.png"
                  propFlex1="unset"
                  propAlignSelf1="stretch"
                  propAlignSelf2="unset"
                  propFlex2="unset"
                  propWidth2="103px"
                  name1="Isaac L. Kim"
                  propAlignSelf3="unset"
                  propWidth3="91px"
                  propHeight="25px"
                  propDisplay="inline-block"
                  propFlex3="unset"
                  position="Chief Financial Officer"
                  propWidth4="unset"
                  propAlignSelf4="stretch"
                  propHeight1="25px"
                  propDisplay1="inline-block"
                  propMinWidth="unset"
                />
              </div>
            </div>
          </div>
          <div className="ml-[-1648.9px] w-[388.9px] [backdrop-filter:blur(77.78px)] rounded-xl bg-[#fff] border-[#b6bcce] border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-start py-[30px] px-[38px] max-w-full mq750:pt-[124.5px] mq750:pb-5 mq750:box-border">
            <div className="h-[447.2px] flex-1 flex flex-col items-start justify-start pt-[66.1px] px-0 pb-[116.1px] box-border gap-[19.5px] mq750:pt-[124.5px] mq750:pb-[75px] mq750:box-border">
              <div className="w-[157px] h-[46.7px] overflow-hidden shrink-0 hidden" />
              <div className="self-stretch h-[265px] relative leading-[158%] font-medium flex items-center justify-center shrink-0">
                The seamless integrations and customizable dashboards make
                Neuros an indispensable tool for our business.
              </div>
              <div className="w-[137px] h-[96.7px] flex flex-row items-start justify-start py-0 pl-[94px] pr-0 box-border shrink-0 text-base-6 text-[#343844]">
                <UserCard
                  imgLibAvaCartoon="/img-libavacartoon-8@2x.png"
                  name1="Raj K."
                  position="CTO"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialSection.propTypes = {
  className: PropTypes.string,
};

export default TestimonialSection;
