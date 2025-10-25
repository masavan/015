module.exports = {
    content: ['./index.html', './example-@container.html'],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/container-queries'),
    ],
}
