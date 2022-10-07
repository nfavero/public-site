/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            backgroundImage: {
                'img-hero': "url('/public/images/bg-image.jpg')"
            },
            keyframes: {
                shake: {
                    '0%': { transform: 'rotate(0deg)' },
                    '80%': { transform: 'rotate(0deg)' },
                    '85%': { transform: 'rotate(5deg)' },
                    '90%': { transform: 'rotate(0deg)' },
                    '95%': { transform: 'rotate(-5deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                  }
            },
            animation: {
                shake: 'shake 2000ms ease-in-out 4'
            }
        }
    },
    plugins: [],
}
