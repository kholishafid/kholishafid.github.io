<script setup>
defineProps({
  label: String,
  level: String,
  icon: String
})
</script>

<template>
  <div class="flex items-center gap-4 lg:w-full">
    <div class="not-prose">
      <img
        :src="icon"
        :alt="label"
        class="w-8 aspect-square"
      >
    </div>
    <div class="flex flex-col justify-center">
      <span class="font-semibold">{{ label }}</span>
      <small>
        {{ level }}
      </small>
    </div>
  </div>
</template>