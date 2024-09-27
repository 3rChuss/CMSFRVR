/* eslint-disable @typescript-eslint/no-require-imports */
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    extend: {
      colors: {
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: 'transparent',
            emphasis: colors.gray[700]
          },
          border: {
            DEFAULT: colors.gray[200]
          },
          ring: {
            DEFAULT: colors.gray[200]
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white
          }
        }
      }
    }
  },

  plugins: [require('@headlessui/tailwindcss')]
}
