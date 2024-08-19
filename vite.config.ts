import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import swc from 'vite-plugin-swc';

export default defineConfig({
  plugins: [
    react(),
    swc({
      swcOptions: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true,
            dynamicImport: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    }),
  ],
});
