import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
    // Base public path when served in development or production.
    base: './',
    plugins: [
        basicSsl()
    ],
    server: {
        // Expose the server to the network (0.0.0.0)
        host: true,
        https: true, // Explicitly enable https (though plugin does it too)
    },
    build: {
        outDir: 'dist',
    }
});
