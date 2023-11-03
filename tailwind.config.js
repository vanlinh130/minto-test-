/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: ['./**/*.html', './**/*.{js,jsx,ts,tsx,vue}'],
    content: ['./node_modules/flowbite/**/*.js'],
    theme: {
        extend: {
            animation: {
                marquee: 'marquee 80s linear infinite',
                marquee2: 'marquee2 80s linear infinite',
                marquee3: 'marquee 95s linear infinite',
                marquee4: 'marquee2 95s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
            colors: {
                whites: '#FFFFFF',
                aquas: '#34CEBC',
                darkBlue: '#02052E',
            },
            lineHeight: {
                78: '78.02px',
                33: '33.6px',
            },
            fontSize: {
                64: '64px',
                32: '32px',
            },
            width: {
                1140: '1140px',
            },
            height: {
                514: '514px',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
