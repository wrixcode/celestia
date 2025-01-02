import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dynamicImport from 'vite-plugin-dynamic-import'; // Import the plugin

export default defineConfig({
  plugins: [
    react(),
    dynamicImport(), // Add the plugin here
  ],
});
