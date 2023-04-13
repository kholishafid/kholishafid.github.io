<script setup>
defineProps({
  label: String,
  level: String,
})
</script>

<template>
  <li
    class="md:text-xl text-slate-700 dark:text-gray-300 flex flex-col gap-2 md:gap-4 items-center w-full aspect-square hover:bg-black/10 dark:hover:bg-white/10 rounded justify-center p-2 md:p-4 text-center">
    <slot />
    <div>
      <p class="md:text-lg lg:text-xl dark:text-gray-300 text-slate-700">{{ label }}</p>
      <p class="md:text-lg lg:text-xl text-slate-700 dark:text-gray-200">
        {{ level }}
      </p>
    </div>
  </li>
</template>