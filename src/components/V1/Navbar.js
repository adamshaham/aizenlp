import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch border-neutral-n0 border-b-[1px] border-solid box-border flex flex-row items-center justify-between pt-[23.3px] px-[95px] pb-[22px] top-[0] z-[99] sticky max-w-full gap-5 text-left text-17xl-9 text-neutral-n0 font-montserrat mq1050:pl-[47px] mq1050:pr-[47px] mq1050:box-border mq750:pl-[23px] mq750:pr-[23px] mq750:box-border ${className}`}
    >
      <a className="[text-decoration:none] relative leading-[47px] font-semibold text-[inherit] whitespace-nowrap">
        EcoSculpt
      </a>
      <div className="w-[354.9px] flex flex-row items-center justify-between max-w-full text-base-6 mq1050:hidden">
        <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[49px]">
          Home
        </a>
        <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[75px] whitespace-nowrap">
          About Us
        </a>
        <div className="flex flex-row items-center justify-start gap-[7.8px]">
          <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[50px]">
            Pages
          </a>
          <img
            className="h-[23.3px] w-[23.3px] relative"
            alt=""
            src="/group-13.svg"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[31.1px] max-w-full mq450:hidden gap-4">
        <button className="cursor-pointer [border:none] pt-[15.6px] pb-[15.5px] pl-[38px] pr-[39px] bg-accent-1 rounded-[97.22px] overflow-hidden flex flex-row items-center justify-center hover:bg-mediumaquamarine">
          <a className="[text-decoration:none] relative text-xl-4 leading-[24px] font-semibold font-montserrat text-neutral-n0 text-center inline-block min-w-[60px] whitespace-nowrap">
            Login
          </a>
        </button>
        <button className="cursor-pointer [border:none] pt-[15.6px] px-[38px] pb-[15.5px] bg-neutral-n0 rounded-[97.22px] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-200">
          <a className="[text-decoration:none] relative text-xl-4 leading-[24px] font-semibold font-montserrat text-accent-1 text-center inline-block min-w-[81px] whitespace-nowrap">
            Sign up
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
