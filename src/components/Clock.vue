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

    <div class="segments">
      <Segment v-for="(seg, i) in time.hour" :key="`hour-${i}`" :value="seg" :radius="dotRadius" />

      <div class="seperator" :class="{ active: time.millis <= 500 }"></div>

      <Segment v-for="(seg, i) in time.minute" :key="`min-${i}`" :value="seg" :radius="dotRadius" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Digit } from '@/types';

const { width, height } = useWindowSize();

const radius = computed(() => (width.value > height.value ? height.value : width.value) / 2.3);
const dotRadius = computed(() => radius.value / 64);
const dotSize = computed(() => `${dotRadius.value * 2}px`);

const now = useDateFormat(useNow(), 'HHmmssSSS');
const time = computed(() => ({
  hour: now.value.slice(0, 2).split('') as Digit[],
  minute: now.value.slice(2, 4).split('') as Digit[],
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

.segments {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.seperator {
  @include flex-center;
  @include margin-x(calc(v-bind(dotSize) * 5));

  flex-direction: column;
  width: v-bind(dotSize);
  gap: 25%;

  &::before,
  &::after {
    content: '';
    display: block;
    width: v-bind(dotSize);
    height: v-bind(dotSize);
    background-color: rgba(color(primary), 0.1);
    border-radius: 50%;
  }
}

.active {
  fill: color(primary);

  &::before,
  &::after {
    background-color: color(primary);
  }
}
</style>
