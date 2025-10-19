import { defineConfig } from 'vite';
import { plugin as markdown, Mode } from 'vite-plugin-markdown';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '',
  plugins: [
    markdown({ mode: [Mode.HTML] }),
    react()
  ],
});
