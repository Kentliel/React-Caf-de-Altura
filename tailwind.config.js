/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green':'#2A5B45',
        'custom-gray' : '#515051',
        'custom-black':'#242424',
        'copyright-color':'#2B2A2B',
        'custom-graylighter':'#E9E9E9'
      }
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js, jsx, ts, tsx}"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         navBg : '#2c2b2c',
//         white: '#ffffff',
//         navHover: '#f7f5f31a',
//         logButt: '#515051',
//         greenHero: '#2a5b45',
//         black0: '#000',
//         textHero: '#111827',
//         buttHero: '#1F1815',
//         borderMejCond: '#f7f5f3',

//       },

//       fontFamily: {
//         outfit: ['Outfit', 'sans-serif']
//       },

//       fontSize: {
//         titleOfCoffe: '23.4628px',
//         s1Rem: '1.5rem',
//         s12: '12px',
//         s13: '13px',
//         s14: '14px',
//         s15: '15px',
//         s16: '16px',
//         s18: '18px',
//         s24: '24px',
//         s40: '40px',
//         sInherit: 'inherit',

//       },

//       flex: {
//         '2': '2 2 2 2'
//       }
//     },
//   },
//   plugins: [],
// }

