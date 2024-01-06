<template>
  <v-app>
    <v-main ref="mainEl">
      <Clock />
      <Drawer :show="inFocus" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const mainEl = ref<HTMLElement>();
const inFocus = useElementHover(mainEl);

const theme = useTheme();
const color = useStorage('cc-color', '#ED0104', localStorage, { mergeDefaults: true });

onMounted(() => {
  theme.themes.value.dark.colors.primary = color.value;
  theme.themes.value.light.colors.primary = color.value;
});
</script>

<style lang="scss">
* {
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  ::-webkit-scrollbar-track {
    background: color(dark);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(color(primary), 0.7);
    border: 4px solid transparent;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: color(primary);
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    margin: 0;
    appearance: none;
    -webkit-appearance: none;
  }
}

html,
body {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

html,
body,
#app {
  background: transparent;
}
</style>
