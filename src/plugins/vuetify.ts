import { createVuetify } from 'vuetify';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

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
  defaults: {
    VBtn: {
      color: 'primary',
    },
    VProgressCircular: {
      color: 'primary',
    },
    VSlider: {
      color: 'primary',
      thumbLabel: true,
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
