<script setup lang="ts">
const props = defineProps<{ variant: "primary" | "secondary" | "success" }>();
const buttonStyle = computed(() => {
  if (props.variant === "primary") {
    return "bg-light-primary text-white dark:bg-dark-primary";
  }
  if (props.variant === "secondary") {
    return "bg-gray-300 text-light-primary";
  }
  if (props.variant === "success") {
    return "bg-light-secondary text-white dark:bg-dark-secondary";
  }
});
</script>

<template>
  <button
    class="px-3 py-1 rounded-md font-medium text-xs"
    :class="buttonStyle"
    @click="$emit('buttonClicked')"
  >
    <slot />
  </button>
</template>
