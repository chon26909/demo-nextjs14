import type { Config } from 'tailwindcss';

const config: Config = {
    // 'tailwindCSS.experimental.classRegex': [['classnames\\(([^)]*)\\)', "'([^']*)'"]],
    //'tailwindCSS.classAttributes': ['class', 'className', 'ngClass', 'extra', 'someOtherAttribute'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        fontFamily: {
            prompt: ['Prompt', 'Helvetica', 'arial', 'sans-serif']
        },
        extend: {
            backgroundImage: {
                'gradient-sidebar': 'var(--sidebar-background-gradient)',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)'
            },
            gridTemplateColumns: {
                fluid: 'repeat(auto-fit, minmax(250px, 1fr))'
            }
        }
    },
    plugins: []
};
export default config;
