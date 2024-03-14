import { defineConfig } from 'vite';
import azothPlugin from 'azoth/vite-plugin';

export default defineConfig({
  plugins: [azothPlugin()],
  esbuild: {
    jsx: 'preserve',
  },
});
