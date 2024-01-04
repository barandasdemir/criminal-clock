<template>
  <div class="clock-wrapper">
    <svg :width="width" :height="height">
      <g id="inner">
        <circle
          v-for="(_, i) in 60"
          :key="`inner-${i}`"
          :cx="width / 2 + radius * Math.cos(i * 6 * (Math.PI / 180))"
          :cy="height / 2 + radius * Math.sin(i * 6 * (Math.PI / 180))"
          :r="dotRadius"
          :class="{ active: time.second >= i }"
        />
      </g>

      <circle
        v-for="i in 12"
        :key="`outer-${i}`"
        :cx="width / 2 + radius * 1.1 * Math.cos(i * 30 * (Math.PI / 180))"
        :cy="height / 2 + radius * 1.1 * Math.sin(i * 30 * (Math.PI / 180))"
        :r="dotRadius"
        class="outer"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
const { width, height } = useWindowSize();

const radius = computed(() => (width.value > height.value ? height.value : width.value) / 2.3);
const dotRadius = computed(() => radius.value / 64);
const now = useDateFormat(useNow(), 'HHmmssSSS');
const time = computed(() => ({
  second: Number(now.value.slice(4, 6)),
  millis: Number(now.value.slice(-3)),
}));
</script>

<style lang="scss" scoped>
.clock-wrapper {
  position: relative;
}

circle {
  fill: rgba(color(primary), 0.1);

  &.outer {
    fill: color(primary);
  }
}

#inner {
  transform: rotate(270deg);
  transform-origin: center center;
}
.active {
  fill: color(primary);

  &::before,
  &::after {
    background-color: color(primary);
  }
}
</style>
