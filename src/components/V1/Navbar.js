import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  const contentdata = {
    brandName: "EcoSculpt",
    menuItems: ["Home", "About Us", "Pages"],
    loginText: "Login",
    signupText: "Sign up",
  };

  return (
    <header
      className={`self-stretch border-[#fff] border-b-[1px] border-solid box-border flex flex-row items-center justify-between pt-[23.3px] px-[95px] pb-[22px] top-[0] z-[99] sticky gap-5 text-left text-[40px] text-[#fff] font-montserrat mq1050:pl-[47px] mq1050:pr-[47px] mq1050:box-border mq750:pl-[23px] mq750:pr-[23px] mq750:box-border ${className}`}
    >
      <a className="[text-decoration:none] relative leading-[47px] font-semibold text-[inherit] whitespace-nowrap">
        {contentdata.brandName}
      </a>
      <div className="w-[540.9px] flex flex-row items-center justify-between max-w-full text-[15.6px] mq1050:hidden">
        {contentdata.menuItems.map((item, index) => (
          <a
            key={index}
            className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[49px]"
          >
            {item}
          </a>
        ))}
        <div className="flex flex-row items-center justify-start gap-[7.8px]">
          <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[50px]">
            {contentdata.menuItems[2]}
          </a>
          <img
            className="h-[23.3px] w-[23.3px] relative"
            alt=""
            src="/group-13.svg"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[31.1px] max-w-full mq450:hidden gap-4">
        <button className="cursor-pointer [border:none] pt-[15.6px] pb-[15.5px] pl-[38px] pr-[39px] bg-[#2da884] rounded-[97.22px] overflow-hidden flex flex-row items-center justify-center hover:bg-[#47c29e]">
          <a className="[text-decoration:none] relative text-[20px]-4 leading-[24px] font-semibold font-montserrat text-[#fff] text-center inline-block min-w-[60px] whitespace-nowrap">
            {contentdata.loginText}
          </a>
        </button>
        <button className="cursor-pointer [border:none] pt-[15.6px] px-[38px] pb-[15.5px] bg-[#fff] rounded-[97.22px] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-[#e6e6e6]">
          <a className="[text-decoration:none] relative text-[20px]-4 leading-[24px] font-semibold font-montserrat text-[#2da884] text-center inline-block min-w-[81px] whitespace-nowrap">
            {contentdata.signupText}
          </a>
        </button>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
