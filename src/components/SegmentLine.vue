<template>
  <g v-if="props.direction === 'horizontal'">
    <circle v-for="i in 4" :key="i" :cx="`${props.x + i * 15}%`" :cy="`${y}%`" :r="props.size" :class="{ active }" />
  </g>

  <g v-else>
    <circle
      v-for="i in 4"
      :key="i"
      :cx="`${props.x - i * 1.5}%`"
      :cy="`${props.y + i * 10}%`"
      :r="props.size"
      :class="{ active }"
    />
  </g>
</template>

<script setup lang="ts">
interface SegmentLineProps {
  size: number;
  x: number;
  y: number;
  direction: 'vertical' | 'horizontal';
  active: boolean;
}
const props = defineProps<SegmentLineProps>();
</script>

<style lang="scss" scoped>
circle {
  fill: rgba(color(primary), 0.1);

  &.active {
    fill: color(primary);
  }
}
</style>
