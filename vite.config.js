import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    base: '/sancha-chirashi-pwa/',
    build: {
        outDir: 'dist',
        sourcemap: false,
    },
});
