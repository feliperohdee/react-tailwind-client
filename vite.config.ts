import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	build: { minify: true },
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': __dirname
		}
	}
});
