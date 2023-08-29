<script setup lang="ts">
defineProps<{
  level: 'Beginner' | 'Intermediate' | 'Advanced',
  label: string,
  iconUrl: string
}>()
</script>

<template>
  <div class="flex items-center gap-4 lg:w-full">
    <div class="not-prose">
      <div class="w-8 aspect-square" :style="`background: url(${iconUrl}) no-repeat center center / contain;`"></div>
    </div>
    <div class="flex flex-col justify-center">
      <span class="font-semibold">{{ label }}</span>
      <small>
        {{ level }}
      </small>
    </div>
  </div>
</template>
