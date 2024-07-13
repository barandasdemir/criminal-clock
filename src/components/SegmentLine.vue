<template>
  <circle
    v-for="(_, i) in 4"
    :key="i"
    :cx="props.x + i * (props.direction === 'horizontal' ? radius * 2.75 : -1)"
    :cy="props.y + i * (props.direction === 'horizontal' ? 0 : radius * 2.75)"
    :r="props.radius"
    :class="{ active }"
  />
</template>

<script setup lang="ts">
interface SegmentLineProps {
  x: number;
  y: number;
  radius: number;
  active: boolean;
  direction: 'vertical' | 'horizontal';
}

const props = defineProps<SegmentLineProps>();
</script>
