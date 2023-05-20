<script setup>
defineProps({
  label: String,
  level: String,
})
</script>

<template>
  <li class="flex gap-4 lg:w-full">
    <slot />
    <div class="sm:flex flex-col justify-center">
      <p class="md:text-lg lg:text-xl dark:text-gray-300 text-slate-700">{{ label }}</p>
      <p class="text-sm md:text-lg lg:text-xl text-slate-700 dark:text-gray-200">
        {{ level }}
      </p>
    </div>
  </li>
</template>