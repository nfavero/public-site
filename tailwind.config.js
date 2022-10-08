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
                  }
            },
            animation: {
                shake: 'shake 1500ms ease-in-out 3',
                slideUp: 'slideUp 200ms forwards ease-in-out'
            },
            fontFamily: {
                sans: ['Fira', 'Arial', 'sans-serif'],
            }
        }
    },
    plugins: [],
}
