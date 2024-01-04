<template>
  <v-slide-y-reverse-transition>
    <div v-if="props.show" class="drawer-toggle">
      <v-btn variant="plain" @click.stop="visible = !visible">About</v-btn>
    </div>
  </v-slide-y-reverse-transition>

  <v-navigation-drawer v-model="visible" location="right" class="pa-5" width="350" temporary>
    <div class="d-flex flex-column justify-center w-100 h-100">
      <v-spacer />

      <div class="mb-10">
        <v-img src="/android-chrome-192x192.png" />
      </div>

      <p class="title text-overline mb-10">Criminal Clock</p>

      <p class="text-center font-weight-light">Inspired by the show</p>
      <strong class="text-center text-subtitle-1 mb-10">Criminal UK/Germany/Spain/France</strong>

      <v-spacer />

      <p class="d-flex align-center justify-center text-center mb-1">
        Made with
        <Heart />
      </p>

      <div class="credits">
        <p>Baran D.</p>
        <span>|</span>
        <a
          href="https://fledra.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="text-decoration-none text-primary font-weight-bold"
        >
          fledra.dev
        </a>
      </div>

      <v-btn variant="tonal" @click="hide">Close</v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const props = defineProps<{ show: boolean }>();

const visible = ref(false);

function hide() {
  visible.value = false;
}

whenever(() => !props.show, hide);
</script>

<style lang="scss" scoped>
.drawer-toggle {
  display: inline-flex;
  align-items: center;
  position: absolute;
  bottom: 1.5rem;
  right: 1rem;
}

.title {
  text-align: center;
  font-size: 1.5rem !important;
}

.credits {
  display: inline-flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
</style>
