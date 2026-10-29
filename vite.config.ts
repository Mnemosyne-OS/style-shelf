import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Style Shelf (doc 186). Outside the pnpm workspace like Lab 3D: it runs in a
// plain browser too, so its dependencies are installed with npm in this folder.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '127.0.0.1',
    port: 5245,
    strictPort: true,
    cors: true,
  },
  build: { outDir: 'dist', assetsDir: 'assets', emptyOutDir: true },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    // vitest turns every .css into an empty module, `?raw` included: the
    // catalogue's element.css files must reach the tests as the text they are.
    css: { include: [/[\\/]catalog[\\/]/] },
  },
} as UserConfig & { test: Record<string, unknown> });
