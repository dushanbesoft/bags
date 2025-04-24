/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import path from 'path';
// https://vite.dev/config/
const allowedHosts = ['localhost', '127.0.0.1', 'youdomain.com'];

// export default defineConfig({
//     css: {
//         postcss: {
//             plugins: [tailwindcss()],
//         },
//     },
//     plugins: [react()],
//     resolve: {
//         alias: {
//             app: `${path.resolve(__dirname, './src/')}`,
//         },
//     },
// });

export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    plugins: [react()],
    build: {
        outDir: 'dist',
        target: 'esnext',
    },
    preview: {
        port: 3000,
        strictPort: true,
        host: '0.0.0.0',
        allowedHosts: true,
    },
    server: {
        allowedHosts: true,
    },
    resolve: {
        alias: {
            app: `${path.resolve(__dirname, './src/')}`,
        },
    },
});
