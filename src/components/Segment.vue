<template>
  <svg :width="radius * 14" :height="radius * 18">
    <SegmentLine :size="segmentSize" :active="segments.a" direction="horizontal" :x="15" :y="5" />
    <SegmentLine :size="segmentSize" :active="segments.b" direction="vertical" :x="87.5" :y="2" />
    <SegmentLine :size="segmentSize" :active="segments.c" direction="vertical" :x="82" :y="47" />
    <SegmentLine :size="segmentSize" :active="segments.d" direction="horizontal" :x="5" :y="95" />
    <SegmentLine :size="segmentSize" :active="segments.e" direction="vertical" :x="14" :y="47" />
    <SegmentLine :size="segmentSize" :active="segments.f" direction="vertical" :x="20" :y="2" />
    <SegmentLine :size="segmentSize" :active="segments.g" direction="horizontal" :x="9" :y="50" />
  </svg>
</template>

<script setup lang="ts">
import type { Digit } from '@/types';

const props = defineProps<{ radius: number; value: Digit }>();
const { value, radius } = toRefs(props);

const segmentSize = computed(() => props.radius / 1.35);

const segmentMap = {
  0: { a: true, b: true, c: true, d: true, e: true, f: true, g: false },
  1: { a: false, b: true, c: true, d: false, e: false, f: false, g: false },
  2: { a: true, b: true, c: false, d: true, e: true, f: false, g: true },
  3: { a: true, b: true, c: true, d: true, e: false, f: false, g: true },
  4: { a: false, b: true, c: true, d: false, e: false, f: true, g: true },
  5: { a: true, b: false, c: true, d: true, e: false, f: true, g: true },
  6: { a: true, b: false, c: true, d: true, e: true, f: true, g: true },
  7: { a: true, b: true, c: true, d: false, e: false, f: false, g: false },
  8: { a: true, b: true, c: true, d: true, e: true, f: true, g: true },
  9: { a: true, b: true, c: true, d: true, e: false, f: true, g: true },
};

const segments = computed(() => segmentMap[value.value]);
</script>

<style lang="scss" scoped>
circle {
  fill: color(primary);
}
</style>
