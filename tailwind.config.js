/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#18171d",
      },

      spacing: {
        "inline-xs": "3.8888888359069824px",
        "section-spacing-lg": "58.33333206176758px",
        "stack-lg": "15.55555534362793px",
        "stack-sm": "7.777777671813965px",
        "section-spacing-md": "46.66666412353515px",
        "stack-[21px]": "23.333332061767575px",
        "inline-xl": "19.44444465637207px",
        "stack-xl": "19.44444465637207px",
        "stack-lg1": "15.55555534362793px",
        "stack-md": "11.666666030883787px",
        "inline-3xl1": "31.11111068725586px",
        "stack-3xl": "31.11111068725586px",
        "inset-6xl": "58.33333206176758px",
        "stack-[23px]": "38.88888931274414px",
        "stack-sm1": "7.777777671813965px",
        "inline-sm": "7.777777671813965px",
        "inline-xs1": "3.8888888359069824px",
      },
      fontFamily: {
        "dm-sans": "'DM Sans'",
        "body-base-regular": "Inter",
        button1: "Roboto",
        poppins: "Poppins",
        montserrat: "Montserrat",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "11xs-9": "1.9px",
        "xs-7": "11.7px",

        "13xl": "32px",

        "base-6": "15.6px",

        "19xl-9": "38.9px",
        "4xl-3": "23.3px",
        "27xl-7": "46.7px",
        "58xl-8": "77.8px",
        "10xl-3": "29.3px",
        "4xs-9": "8.9px",
        "2xs-6": "10.6px",
        "smi-4": "12.4px",
        "8xs-4": "4.4px",
        "4xs-8": "8.8px",
        "mid-5": "17.5px",
        "5xs-8": "7.8px",
        "78xl-2": "97.2px",
        "15xl": "34px",
        "18xl-9": "37.9px",
        "lgi-4": "19.4px",
        "3xs-7": "9.7px",
        "10xl-2": "29.2px",
        xl: "20px",
        lg: "11.666666030883787px",
      },
    },
    fontSize: {
      "sm-6": "13.6px",
      "base-6": "15.6px",
      "lgi-4": "19.4px",
      "18xl-9": "37.9px",
      "4xl": "23px",

      "11xl": "30px",
      "27xl-7": "46.7px",
      "9xl": "28px",
      "18xl": "37px",
      base: "16px",
      xl: "20px",
      mid: "17px",
      "33xl": "52px",
      "12xl": "31px",
      "23xl": "42px",
      "base-1": "15.1px",
      "61xl": "80px",
      "5xl": "24px",
      "21xl": "40px",
      "base-8": "15.8px",

      sm: "14px",
      "lgi-3": "19.3px",
      "2xl": "21px",
      "3xl": "22px",
      lg: "18px",

      "7xl-3": "26.3px",

      "mini-6": "14.6px",
      "25xl-7": "44.7px",
      "17xl": "36px",
      "8xl": "27px",
      "34xl-5": "53.5px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
