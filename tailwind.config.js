/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "var(--bg-color)",
        "secondary-bg-color": "var(--secondary-bg-color)",
        "accent-text-color": "var(--accent-text-color)",
        "secondary-text-color": "var(--secondary-text-color)",
        "label-tabbar": "var(--color-tabbar-label)",
        input: "var(--input)",
        placeholder: "var(--placeholder)",
        section: "var(--section-bg-color)",
        white: "var(--color-white)",
        black: {
          DEFAULT: "var(--color-black)",
          40: "var(--color-black-40)",
        },
        primary: "var(--color-primary)",

        "accent-blue": {
          DEFAULT: "var(--color-accent-blue)",
          5: "var(--color-accent-blue-5)",
          12: "var(--color-accent-blue-12)",
          20: "var(--color-accent-blue-20)",
        },

        "accent-cyan": "var(--color-accent-cyan)",

        "accent-gold": {
          DEFAULT: "var(--color-accent-gold)",
          10: "var(--color-accent-gold-10)",
          20: "var(--color-accent-gold-20)",
        },

        "accent-purple": "var(--color-accent-purple)",
        "accent-green": "var(--color-accent-green)",

        separator: "var(--color-separator)",

        "icon-tabbar": "var(--color-icon-tabbar)",
        "text-secondary": "var(--color-text-secondary)",

        "text-tabbar": "var(--color-tabbar-label)",
        "tabbar-icons": "var(--color-tabbar-icons)",
        "label-secondary": {
          DEFAULT: "var(--color-label-secondary)",
          10: "var(--color-label-secondary-10)",
          20: "var(--color-label-secondary-20)",
        },

        "text-date": "var(--color-text-date)",

        notification: "var(--color-bg-notification)",
        "bg-tabbar": "var(--color-bg-tabbar)",

        green: {
          DEFAULT: "var(--color-green)",
          20: "var(--color-green-20)",
          0.6: "var(--color-green-06)",
        },

        red: {
          DEFAULT: "var(--color-red)",
          20: "var(--color-red-20)",
          5: "var(--color-red-5)",
        },
      },
      fontWeight: {
        590: "590",
      },
      letterSpacing: {
        paragraph: "0.43px",
      },
      fontSize: {
        xxs: "10px",
        "pre-xxs": "11px",
        "pre-xs": "13px",
        "pre-sm": "15px",
        "base-plus": "17px",
      },
      size: {
        37.5: "150px",
        7.5: "30px",
      },
      lineHeight: {
        3.5: "14px",
        4.5: "18px",
        5.5: "22px",
      },
      spacing: {
        5.5: "22px",
        6.25: "25px",
        6.5: "26px",
        25: "100px",
      },
      backdropBlur: {
        half: "50px",
        max: "100px",
      },
      padding: {
        0.75: "3px",
      },
      maxWidth: {
        xxs: "280px",
      },
      backgroundImage: {
        pattern: 'url("../assets/pattern-light.svg")',
      },
      borderWidth: {
        0.3: "0.33px",
      },
      borderRadius: {
        "pre-xl": "10px",
      },
      boxShadow: {
        "custom-light": "0px 3px 1px 0px rgba(0, 0, 0, 0.04)",
        "custom-medium": "0px 3px 8px 0px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
