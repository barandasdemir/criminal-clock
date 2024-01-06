import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

import 'vuetify/styles';

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#030203',
          surface: '#030203',
          primary: '#ed0104',
          success: '#55aa71',
          warning: '#dc6504',
          info: '#98c6dd',
          error: '#f36868',

          // custom colors
          dark: '#030203',
          light: '#ffffff',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    VBtn: {
      color: 'primary',
    },
    VSwitch: {
      color: 'primary',
      inset: true,
    },
    VTextField: {
      color: 'primary',
    },
    VTooltip: {
      color: 'primary',
      location: 'bottom',
    },
  },
});
