import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import ViteFonts from 'unplugin-fonts/vite';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  clearScreen: false,
  server: {
    host: true,
    port: 1337,
    watch: {
      ignored: ['.eslintrc-auto-import.json'],
    },
  },
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src/styles', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '~/main';`,
      },
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    Components({
      version: 3,
      directoryAsNamespace: true,
      dts: 'src/types/generated/components.d.ts',
      dirs: ['src/components', 'src/modules'],
    }),
    AutoImport({
      dts: 'src/types/generated/auto-imports.d.ts',
      dirs: ['src/composables/**', 'src/stores/**', 'src/utils/**'],
      imports: ['vue', 'pinia', '@vueuse/core'],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Oswald',
            styles: 'wght@100;300;400;500;700;900',
          },
        ],
      },
    }),
  ],
});
