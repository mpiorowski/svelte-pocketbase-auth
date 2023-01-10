import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
    server: {
        port: 3000,
        host: true
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src')
        }
    }
};

export default config;
