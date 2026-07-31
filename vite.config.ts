import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// VWDS — component library build (framework-agnostic React + TS).
// Not tied to Next.js; outputs plain ESM consumable by any React host.
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'vwds',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
});
