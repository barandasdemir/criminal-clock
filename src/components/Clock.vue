<template>
  <div class="clock-wrapper">
    <svg width="100dvw" height="100dvh" viewBox="0 0 512 512">
      <g id="inner">
        <circle
          v-for="(point, i) in clock.inner"
          :key="`inner-${i}`"
          :cx="point.x"
          :cy="point.y"
          :r="radius"
          :class="{ active: time.second >= i }"
        />
      </g>

      <g id="outer">
        <circle
          v-for="(point, i) in clock.outer"
          :key="`inner-${i}`"
          :cx="point.x"
          :cy="point.y"
          :r="radius"
          class="active"
        />
      </g>

      <g id="segments">
        <Segment
          v-for="(seg, i) in time.hour"
          :key="`hour-${i}`"
          :value="seg"
          :radius="radius * 0.8"
          :x="100 + 75 * i"
          :y="212.5"
        />

        <g id="seperator" :class="{ active: time.millis <= 500 }">
          <circle cx="256" cy="241" :r="radius"></circle>
          <circle cx="256" cy="271" :r="radius"></circle>
        </g>

        <Segment
          v-for="(seg, i) in time.minute"
          :key="`min-${i}`"
          :value="seg"
          :radius="radius * 0.8"
          :x="290 + 75 * i"
          :y="212.5"
        />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import type { Digit } from '@/types';

function generatePoints(r: number, amount: number, scale = 1) {
  return Array.from({ length: amount }, (_, i) => {
    const angle = ((Math.PI * 2) / amount) * i;
    return {
      x: r + r * scale * Math.cos(angle),
      y: r + r * scale * Math.sin(angle),
    };
  });
}

const radius = 4.5;
const clock = {
  inner: generatePoints(256, 60, 0.85),
  outer: generatePoints(256, 12, 0.91),
};

const now = useNow();
const titleTime = useDateFormat(now, 'HH:mm:ss');
const clockTime = useDateFormat(now, 'HHmmssSSS');

const time = computed(() => ({
  hour: clockTime.value.slice(0, 2).split('') as Digit[],
  minute: clockTime.value.slice(2, 4).split('') as Digit[],
  second: Number(clockTime.value.slice(4, 6)),
  millis: Number(clockTime.value.slice(-3)),
}));

useTitle(titleTime, { titleTemplate: '%s | Criminal Clock' });
</script>

<style lang="scss">
.clock-wrapper {
  position: relative;
}

#inner,
#outer {
  transform: rotate(270deg);
  transform-origin: center center;
}

g {
  fill: rgba(var(--v-theme-primary), 0.05);

  &.active,
  circle.active {
    fill: rgb(var(--v-theme-primary));
  }
}
</style>
