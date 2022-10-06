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
            }
        }
    },
    plugins: [],
}
