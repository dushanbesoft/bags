/* eslint-disable no-undef */
// const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const flowbite = require('flowbite-react/tailwind');

module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        ,
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
            sora: ['Sora-Regular'],
        },

        colors: {
            transparent: 'transparent',
            'nft-border': 'rgba(21,75,249,.6)',
            'btn-primary': '#154BF9',
            body: '#0f0f0f',
            primary: '#06F28D',
            'primary-gray': '#525F5D',
            'border-primary': '#414242',
            secondary: '#151515',
            text_primary: '#00FF7F',
            border_line: '#00FF7F1F',
            bg_transparent: '#00FF7F14',
        },
        screens: {
            md: '678px',
            sm: '840px',
            m: '1157px',
            l: '1386px',
            ll: '1347px',
            xll: '1207px',
        },
        extend: {
            width: {
                'fit-content': 'fit-content',
                'fit-inherit': 'inherit',
            },
            fontSize: {
                'title-xxl': ['44px', '55px'],
            },
            spacing: {
                4.5: '1.125rem',
            },
            maxWidth: {
                2.5: '0.625rem',
            },
            maxHeight: {
                35: '8.75rem',
            },
            minWidth: {
                22.5: '5.625rem',
                42.5: '10.625rem',
                47.5: '11.875rem',
                75: '18.75rem',
            },
            zIndex: {
                999999: '999999',
                99999: '99999',
                9999: '9999',
                999: '999',
                99: '99',
                9: '9',
                1: '1',
            },
            opacity: {
                10: '0.1',
                20: '0.2',
                95: '0.95',
                8: '0.8',
            },
            borderOpacity: {
                10: '0.1',
                10: '0.1',
                20: '0.2',
                95: '0.95',
            },
            backgroundImage: {
                'bg-card': "url('/bg-card.png')",
                'bg-green_gradient': "url('/bg_green_gradient.svg')",
                'primary-radial':
                    'radial-gradient(circle, rgba(0,255,146,1) -65%, rgba(15,15,15,1) 75%, rgba(15,15,15,1) 60%)',

                'secondary-gradient':
                    'linear-gradient(180deg, #151515 0%, #090909 100%)',
                'btn-gradient':
                    'linear-gradient(90deg, #11BE74 0%, #00EF89 100%)',
                'border-button-bg':
                    'linear-gradient(90deg, rgba(40, 91, 253, 0.6) 0%, rgba(0, 191, 249, 0.6) 100%)',

                primary_black:
                    'linear-gradient(180deg, #151515 0%, #090909 100%)',
                border_gradient:
                    'linear-gradient(90deg, #00FF7F 0%, #363636 100%)',
                primary_black2:
                    'linear-gradient(180deg, #1C1C1C 0%, #1C1C1C 100%)',
                btn_max:
                    'linear-gradient(90deg, rgba(17, 190, 116, 0.16) 0%, rgba(0, 239, 137, 0.16) 100%)',
                modal_bg: 'linear-gradient(180deg, #1C1C1C 0%, #1C1C1C 100%)',

                btn_connect_hover:
                    'linear-gradient(90deg, #008149 0%, #33BA80 100%)',
                btn_add_liq:
                    'linear-gradient(90deg, rgba(0, 129, 73, 0.08) 0%, rgba(51, 186, 128, 0.08) 100%)',

                // modal_bg_2: 'linear-gradient(180deg, #1C1C1C 0%, #1C1C1C 100%)',
            },

            boxShadow: {
                'nft-card-shadow':
                    '0 -10px 200px -120px #0b84fcb3,0 100px 200px -120px #0b84fc',
                default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
                card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
                'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
                switcher:
                    '0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
                'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
                1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
                2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
                3: '0px 1px 5px rgba(0, 0, 0, 0.14)',
                4: '0px 4px 10px rgba(0, 0, 0, 0.12)',
                5: '0px 1px 1px rgba(0, 0, 0, 0.15)',
                6: '0px 3px 15px rgba(0, 0, 0, 0.1)',
                7: '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
                8: '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',

                primarybox: '0px 0px 12px 0px #00FF7F40',
                content_animation: '2px 6px 12px 0px #26203D',
            },
            dropShadow: {
                1: '0px 1px 0px #E2E8F0',
                2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
            },
            keyframes: {
                linspin: {
                    '100%': { transform: 'rotate(360deg)' },
                },
                easespin: {
                    '12.5%': { transform: 'rotate(135deg)' },
                    '25%': { transform: 'rotate(270deg)' },
                    '37.5%': { transform: 'rotate(405deg)' },
                    '50%': { transform: 'rotate(540deg)' },
                    '62.5%': { transform: 'rotate(675deg)' },
                    '75%': { transform: 'rotate(810deg)' },
                    '87.5%': { transform: 'rotate(945deg)' },
                    '100%': { transform: 'rotate(1080deg)' },
                },
            },
            animation: {
                linspin: 'linspin 1568.2353ms linear infinite',
                easespin:
                    'easespin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
                'left-spin':
                    'left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
                'right-spin':
                    'right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
                'ping-once': 'ping 5s cubic-bezier(0, 0, 0.2, 1)',
            },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [require('tailwindcss-font-inter'), require('flowbite/plugin')],
};
