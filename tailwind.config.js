/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'navtop':{
          50: '#60a5fa'
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mylight: {
          primary: "#60a5fa",
          secondary: "#8d939d",
          neutral: "#2e3034",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#d4d7dd",
        },
      },
      {
        mydark: {
          primary: "#60a5fa",
          secondary: "#8d939d",
          neutral: "#cccccc",
          "base-100": "#252526",
          "base-200": "#1e1e1e",
          "base-300": "#d4d7dd",
        },
      },
    ],
  },
}

          // accent: "#37cdbe",
          // info:'',
          // warning:'',
          // success:'',
          // error:'',

// module.exports = {
//   //...
//   daisyui: {
//     themes: [
//       {
//         mytheme: {
//           primary: "#a991f7",
//           secondary: "#f6d860",
//           accent: "#37cdbe",
//           neutral: "#3d4451",
//           "base-100": "#ffffff",

//           "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
//           "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
//           "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
//           "--animation-btn": "0.25s", // duration of animation when you click on button
//           "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
//           "--btn-text-case": "uppercase", // set default text transform for buttons
//           "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
//           "--border-btn": "1px", // border width of buttons
//           "--tab-border": "1px", // border width of tabs
//           "--tab-radius": "0.5rem", // border radius of tabs
//         },
//       },
//     ],
//   },
// }

// custom CSS

// module.exports = {
//   //...
//   daisyui: {
//     themes: [
//       {
//         light: {
//           ...require('daisyui/src/colors/themes')['[data-theme=light]'],
//           '.btn-twitter': {
//             'background-color': '#1EA1F1',
//             'border-color': '#1EA1F1',
//           },
//           '.btn-twitter:hover': {
//             'background-color': '#1C96E1',
//             'border-color': '#1C96E1',
//           },
//         },
//       },
//     ],
//   },
// }