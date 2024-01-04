export default {
  '**/*.vue': ['eslint --cache --fix', () => 'vue-tsc --noEmit'],
  '**/*.{ts,js}': ['eslint --cache --fix', () => 'tsc --noEmit'],
};
