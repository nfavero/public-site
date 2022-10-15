const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            backgroundImage: {
                'img-hero': "url('/public/images/bg-image.webp')"
            },
            keyframes: {
                shake: {
                    '0%': { transform: 'rotate(0deg)' },
                    '80%': { transform: 'rotate(0deg)' },
                    '85%': { transform: 'rotate(5deg)' },
                    '90%': { transform: 'rotate(0deg)' },
                    '95%': { transform: 'rotate(-5deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                  },
                  slideUp: {
                    '0%': { height: '0px' },
                    '50%': { height: '0px' },
                    '100%': { height: '80px' }
                  },
                  loader: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                  }
            },
            animation: {
                shake: 'shake 1500ms ease-in-out 3',
                slideUp: 'slideUp 200ms forwards ease-in-out',
                loader: 'loader 1s linear infinite'
            },
            fontFamily: {
                sans: ['Poppins', 'Arial', 'sans-serif'],
            }
        }
    },
    plugins: [
        plugin(({ addComponents }) => {
            addComponents({
                '.loading': {
                    border: '4px solid #f3f3f3',
                    borderRadius: '50%',
                    borderTop: '4px solid #3498db',
                    width: '24px',
                    height: '24px'
                }
            })
        })
    ],
}
