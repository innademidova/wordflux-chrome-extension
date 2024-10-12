// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// Определение __dirname для ESM модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Экспорт конфигурации Vite
export default defineConfig({
  base: './',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/manifest.json',
          dest: './',
        },
        {
          src: 'public/icons',
          dest: './',
        },
        {
          src: 'public/popup.html',
          dest: './',
        },
      ],
    }),
  ],
  build: {
    sourcemap: true,
    minify: false, 
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/components/Popup/Popup.tsx'),
        background: resolve(__dirname, 'src/background/background.ts'),
        content: resolve(__dirname, 'src/content/content.ts'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
