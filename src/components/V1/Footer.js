import PropTypes from "prop-types";

const contentData = {
  title: "EcoSculpt",
  description: [
    "Lorem ipsum dolor sit amet, conse",
    "ctetur adipiscing elit. Vivamus hes",
    "ndrerit suscipit egestas."
  ],
  quickLinksTitle: "Quick Links",
  quickLinks: ["About Us", "Service", "Pricing", "Blog"],
  contactUsTitle: "Contact Us",
  contactDetails: {
    email: "hello@website.com",
    address: "Riverside Building, County Hall, London SE1 7PB, United Kingdom",
    phone: "+02 5421234560"
  },
  followUsTitle: "Follow Us",
  socialMediaIcons: ["/tw.svg", "/ig.svg", "/fb.svg", "/yt.svg"]
};

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-[#2da884] overflow-hidden flex flex-row items-center justify-between pt-[95.6px] px-[95px] pb-[95.5px] gap-5 text-left text-xl-4 text-[#fff] font-montserrat lg:flex-wrap lg:justify-center lg:pl-[47px] lg:pr-[47px] lg:box-border mq450:pt-[62px] mq450:pb-[62px] mq450:box-border mq750:pl-[23px] mq750:pr-[23px] mq750:box-border ${className}`}
    >
      <div className="w-[263.5px] flex flex-col items-start justify-start gap-[38.9px] text-17xl-9 gap-[19px]">
        <div className="self-stretch relative leading-[47px] font-semibold mq1050:text-11xl mq1050:leading-[37px] mq450:text-3xl mq450:leading-[28px]">
          {contentData.title}
        </div>
        <div className="relative text-base-6 leading-[23.33px] font-medium font-plus-jakarta-sans">
          {contentData.description.map((line, index) => (
            <p className="m-0" key={index}>
              {line}
            </p>
          ))}
        </div>
      </div>
      <div className="w-[123px] flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[38.9px]">
        <div className="relative leading-[24px] font-semibold inline-block min-w-[123px] mq450:text-base mq450:leading-[19px]">
          {contentData.quickLinksTitle}
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[15.6px] text-base-6 font-plus-jakarta-sans">
          {contentData.quickLinks.map((link, index) => (
            <a
              key={index}
              className="[text-decoration:none] self-stretch relative leading-[24px] font-medium text-[inherit]"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="w-[284.9px] flex flex-col items-start justify-start gap-[38.9px] gap-[19px]">
        <div className="self-stretch relative leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
          {contentData.contactUsTitle}
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-base-6 font-plus-jakarta-sans">
          <div className="self-stretch flex flex-col items-start justify-start gap-[15.6px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[7.8px]">
              <img
                className="h-[15.6px] w-[15.6px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon-24.svg"
              />
              <div className="flex-1 relative leading-[24px] font-medium whitespace-nowrap">
                {contentData.contactDetails.email}
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[7.8px]">
              <div className="flex flex-row items-start justify-start pt-[3.9px] px-0 pb-0">
                <img
                  className="h-[15.6px] w-[15.6px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/location-on.svg"
                />
              </div>
              <div className="flex-1 relative leading-[23.33px] font-medium">
                {contentData.contactDetails.address}
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[7.8px]">
              <img
                className="h-[15.6px] w-[15.6px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon-25.svg"
              />
              <div className="flex-1 relative leading-[24px] font-medium whitespace-nowrap">
                {contentData.contactDetails.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[248.9px] flex flex-col items-start justify-start gap-[38.9px]">
        <div className="self-stretch relative leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
          {contentData.followUsTitle}
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          {contentData.socialMediaIcons.map((icon, index) => (
            <div
              key={index}
              className="w-[38.9px] rounded-[7.78px] bg-[#fff] flex flex-row items-start justify-start py-[7.8px] px-[7px] box-border"
            >
              <img
                className="h-[23.3px] w-[23.3px] relative"
                alt=""
                src={icon}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
