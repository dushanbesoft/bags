/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            app: `${path.resolve(__dirname, './src/')}`,
        },
    },
});
