<template>
  <SegmentLine :radius="radius" :active="segments.a" :x="props.x + 12" :y="props.y + 2" direction="horizontal" />
  <SegmentLine :radius="radius" :active="segments.b" :x="props.x + 50" :y="props.y + 7" direction="vertical" />
  <SegmentLine :radius="radius" :active="segments.c" :x="props.x + 46" :y="props.y + 48" direction="vertical" />
  <SegmentLine :radius="radius" :active="segments.d" :x="props.x + 5" :y="props.y + 82.5" direction="horizontal" />
  <SegmentLine :radius="radius" :active="segments.e" :x="props.x" :y="props.y + 48" direction="vertical" />
  <SegmentLine :radius="radius" :active="segments.f" :x="props.x + 4" :y="props.y + 7" direction="vertical" />
  <SegmentLine :radius="radius" :active="segments.g" :x="props.x + 9" :y="props.y + 42" direction="horizontal" />
</template>

<script setup lang="ts">
import type { Digit } from '@/types';

interface SegmentProps {
  x: number;
  y: number;
  radius: number;
  value: Digit;
}

const props = defineProps<SegmentProps>();

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

const radius = computed(() => props.radius);
const segments = computed(() => segmentMap[props.value]);
</script>
