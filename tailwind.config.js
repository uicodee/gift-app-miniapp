// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{html,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         "bg-primary": "var(--bg-primary)",
//         "text-primary": "var(--text-primary)",
//         white: "var(--white)",
//         black: "var(--black)",
//         primary: "var(--primary)",
//         "dark-green": {
//           DEFAULT: "var(--dark-green)",
//           20: "rgba(70, 209, 0, 0.2)",
//           0.6: "rgba(70, 209, 0, 0.06)",
//         },
//         red: {
//           DEFAULT: "var(--red)",
//           5: "rgba(255, 71, 71, 0.05)",
//           10: "rgba(255, 71, 71, 0.1)",
//           20: "rgba(255, 71, 71, 0.2)",
//           30: "rgba(255, 71, 71, 0.3)",
//           40: "rgba(255, 71, 71, 0.4)",
//           50: "rgba(255, 71, 71, 0.5)",
//         },
//         "accent-blue": {
//           DEFAULT: "var(--accent-blue)",
//           5: "rgba(0, 122, 255, 0.05)",
//           10: "rgba(0, 122, 255, 0.1)",
//           20: "rgba(0, 122, 255, 0.2)",
//           30: "rgba(0, 122, 255, 0.3)",
//           40: "rgba(0, 122, 255, 0.4)",
//           50: "rgba(0, 122, 255, 0.5)",
//         },
//         "accent-cyan": {
//           DEFAULT: "var(--accent-cyan)",
//           10: "rgba(90, 200, 250, 0.1)",
//           20: "rgba(90, 200, 250, 0.2)",
//           30: "rgba(90, 200, 250, 0.3)",
//           40: "rgba(90, 200, 250, 0.4)",
//           50: "rgba(90, 200, 250, 0.5)",
//         },
//         "accent-gold": {
//           DEFAULT: "var(--accent-gold)",
//           10: "rgba(241, 170, 5, 0.1)",
//           20: "rgba(241, 170, 5, 0.2)",
//           30: "rgba(241, 170, 5, 0.3)",
//           40: "rgba(241, 170, 5, 0.4)",
//           50: "rgba(241, 170, 5, 0.5)",
//         },
//         "accent-purple": {
//           DEFAULT: "var(--accent-purple)",
//           10: "rgba(175, 81, 222, 0.1)",
//           20: "rgba(175, 81, 222, 0.2)",
//           30: "rgba(175, 81, 222, 0.3)",
//           40: "rgba(175, 81, 222, 0.4)",
//           50: "rgba(175, 81, 222, 0.5)",
//         },
//         "accent-green": {
//           DEFAULT: "var(--accent-green)",
//           10: "rgba(53, 199, 89, 0.1)",
//           20: "rgba(53, 199, 89, 0.2)",
//           30: "rgba(53, 199, 89, 0.3)",
//           40: "rgba(53, 199, 89, 0.4)",
//           50: "rgba(53, 199, 89, 0.5)",
//         },
//         separator: {
//           DEFAULT: "var(--separator)",
//           10: "rgba(60, 60, 67, 0.1)",
//           20: "rgba(60, 60, 67, 0.2)",
//           30: "rgba(60, 60, 67, 0.3)",
//           40: "rgba(60, 60, 67, 0.4)",
//           50: "rgba(60, 60, 67, 0.5)",
//         },
//         "tabbar-icons": {
//           DEFAULT: "var(--tabbar-icons)",
//           10: "rgba(149, 149, 149, 0.1)",
//           20: "rgba(149, 149, 149, 0.2)",
//           30: "rgba(149, 149, 149, 0.3)",
//           40: "rgba(149, 149, 149, 0.4)",
//           50: "rgba(149, 149, 149, 0.5)",
//         },
//         "label-secondary": {
//           DEFAULT: "var(--label-secondary)",
//           10: "rgba(142, 142, 147, 0.1)",
//           20: "rgba(142, 142, 147, 0.2)",
//           30: "rgba(142, 142, 147, 0.3)",
//           40: "rgba(142, 142, 147, 0.4)",
//           50: "rgba(142, 142, 147, 0.5)",
//         },
//         "label-tabbar": {
//           DEFAULT: "var(--label-tabbar)",
//           10: "rgba(84, 84, 88, 0.1)",
//           20: "rgba(84, 84, 88, 0.2)",
//           30: "rgba(84, 84, 88, 0.3)",
//           40: "rgba(84, 84, 88, 0.4)",
//           50: "rgba(84, 84, 88, 0.5)",
//         },
//         "label-date": {
//           DEFAULT: "var(--label-date)",
//           10: "rgba(109, 109, 113, 0.1)",
//           20: "rgba(109, 109, 113, 0.2)",
//           30: "rgba(109, 109, 113, 0.3)",
//           40: "rgba(109, 109, 113, 0.4)",
//           50: "rgba(109, 109, 113, 0.5)",
//         },
//         secondary: {
//           DEFAULT: "var(--bg-secondary)",
//           10: "rgba(239, 239, 243, 0.1)",
//           20: "rgba(239, 239, 243, 0.2)",
//           30: "rgba(239, 239, 243, 0.3)",
//           40: "rgba(239, 239, 243, 0.4)",
//           50: "rgba(239, 239, 243, 0.5)",
//         },
//         notification: {
//           DEFAULT: "var(--bg-notification)",
//           10: "rgba(45, 45, 45, 0.1)",
//           20: "rgba(45, 45, 45, 0.2)",
//           30: "rgba(45, 45, 45, 0.3)",
//           40: "rgba(45, 45, 45, 0.4)",
//           50: "rgba(45, 45, 45, 0.5)",
//         },
//         tabbar: {
//           DEFAULT: "var(--bg-tabbar)",
//           10: "rgba(241, 241, 242, 0.1)",
//           20: "rgba(241, 241, 242, 0.2)",
//           30: "rgba(241, 241, 242, 0.3)",
//           40: "rgba(241, 241, 242, 0.4)",
//           50: "rgba(241, 241, 242, 0.5)",
//         },
//       },
//       fontWeight: {
//         590: "590",
//       },
//       letterSpacing: {
//         paragraph: "0.43px",
//       },
//       fontSize: {
//         xxs: "10px",
//         "pre-xxs": "11px",
//         "pre-sm": "15px",
//         "pre-xs": "13px",
//         "base-plus": "17px",
//       },
//       lineHeight: {
//         3.5: "14px",
//         4.5: "18px",
//         5.5: "22px",
//       },
//       size: {
//         5.5: "22px",
//         6.5: "26px",
//         25: "100px",
//       },
//       backdropBlur: {
//         half: "50px",
//         max: "100px",
//       },
//       maxWidth: {
//         xxs: "280px",
//       },
//       padding: {
//         6.25: "25px",
//       },
//       backgroundImage: {
//         pattern: "url('../assets/pattern-light.svg')",
//       },
//       borderWidth: {
//         0.3: "0.33px",
//       },
//     },
//   },
//   plugins: [],
// };
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{html,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         "bg-primary": "var(--color-bg-secondary)",
//         "text-primary": "var(--color-black)",
//         white: "var(--color-white)",
//         black: "var(--color-black)",
//         primary: "var(--color-primary)",
//         "accent-blue": {
//           DEFAULT: "var(--color-accent-blue)",
//           5: "rgba(0, 122, 255, 0.05)",
//           10: "rgba(0, 122, 255, 0.1)",
//           20: "rgba(0, 122, 255, 0.2)",
//           30: "rgba(0, 122, 255, 0.3)",
//           40: "rgba(0, 122, 255, 0.4)",
//           50: "rgba(0, 122, 255, 0.5)",
//         },
//         "accent-cyan": {
//           DEFAULT: "var(--color-accent-cyan)",
//           10: "rgba(90, 200, 250, 0.1)",
//           20: "rgba(90, 200, 250, 0.2)",
//           30: "rgba(90, 200, 250, 0.3)",
//           40: "rgba(90, 200, 250, 0.4)",
//           50: "rgba(90, 200, 250, 0.5)",
//         },
//         "accent-gold": {
//           DEFAULT: "var(--color-accent-gold)",
//           10: "rgba(241, 170, 5, 0.1)",
//           20: "rgba(241, 170, 5, 0.2)",
//           30: "rgba(241, 170, 5, 0.3)",
//           40: "rgba(241, 170, 5, 0.4)",
//           50: "rgba(241, 170, 5, 0.5)",
//         },
//         "accent-purple": {
//           DEFAULT: "var(--color-accent-purple)",
//           10: "rgba(175, 81, 222, 0.1)",
//           20: "rgba(175, 81, 222, 0.2)",
//           30: "rgba(175, 81, 222, 0.3)",
//           40: "rgba(175, 81, 222, 0.4)",
//           50: "rgba(175, 81, 222, 0.5)",
//         },
//         "accent-green": {
//           DEFAULT: "var(--color-accent-green)",
//           10: "rgba(53, 199, 89, 0.1)",
//           20: "rgba(53, 199, 89, 0.2)",
//           30: "rgba(53, 199, 89, 0.3)",
//           40: "rgba(53, 199, 89, 0.4)",
//           50: "rgba(53, 199, 89, 0.5)",
//         },
//         separator: {
//           DEFAULT: "var(--color-separator)",
//           10: "rgba(60, 60, 67, 0.1)",
//           20: "rgba(60, 60, 67, 0.2)",
//           30: "rgba(60, 60, 67, 0.3)",
//           40: "rgba(60, 60, 67, 0.4)",
//           50: "rgba(60, 60, 67, 0.5)",
//         },
//         "tabbar-icons": "var(--color-icon-tabbar)",
//         "label-secondary": "var(--color-text-secondary)",
//         "label-tabbar": {
//           DEFAULT: "var(--color-text-tabbar)",
//           10: "rgba(84, 84, 88, 0.1)",
//           20: "rgba(84, 84, 88, 0.2)",
//           30: "rgba(84, 84, 88, 0.3)",
//           40: "rgba(84, 84, 88, 0.4)",
//           50: "rgba(84, 84, 88, 0.5)",
//         },
//         "label-date": {
//           DEFAULT: "var(--color-text-date)",
//           10: "rgba(109, 109, 113, 0.1)",
//           20: "rgba(109, 109, 113, 0.2)",
//           30: "rgba(109, 109, 113, 0.3)",
//           40: "rgba(109, 109, 113, 0.4)",
//           50: "rgba(109, 109, 113, 0.5)",
//         },
//         "bg-secondary": "var(--color-bg-secondary)",
//         "bg-notification": {
//           DEFAULT: "var(--color-bg-notification)",
//           10: "rgba(45, 45, 45, 0.1)",
//           20: "rgba(45, 45, 45, 0.2)",
//           30: "rgba(45, 45, 45, 0.3)",
//           40: "rgba(45, 45, 45, 0.4)",
//           50: "rgba(45, 45, 45, 0.5)",
//         },
//         "bg-tabbar": {
//           DEFAULT: "var(--color-bg-tabbar)",
//           10: "rgba(241, 241, 242, 0.1)",
//           20: "rgba(241, 241, 242, 0.2)",
//           30: "rgba(241, 241, 242, 0.3)",
//           40: "rgba(241, 241, 242, 0.4)",
//           50: "rgba(241, 241, 242, 0.5)",
//         },
//         "card-bg-success": "var(--color-card-bg-success)",
//         "card-bg-warning": "var(--color-card-bg-warning)",
//       },
//       fontWeight: {
//         590: "590",
//       },
//       letterSpacing: {
//         paragraph: "0.43px",
//       },
//       fontSize: {
//         xxs: "10px",
//         "pre-xxs": "11px",
//         "pre-sm": "15px",
//         "pre-xs": "13px",
//         "base-plus": "17px",
//       },
//       lineHeight: {
//         3.5: "14px",
//         4.5: "18px",
//         5.5: "22px",
//       },
//       size: {
//         5.5: "22px",
//         6.5: "26px",
//         25: "100px",
//       },
//       backdropBlur: {
//         half: "50px",
//         max: "100px",
//       },
//       maxWidth: {
//         xxs: "280px",
//       },
//       padding: {
//         6.25: "25px",
//       },
//       backgroundImage: {
//         pattern: "url('../assets/pattern-light.svg')",
//       },
//       borderWidth: {
//         0.3: "0.33px",
//       },
//     },
//   },
//   plugins: [],
// };
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
    },
  },
  plugins: [],
};
