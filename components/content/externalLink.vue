<script setup>
defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: '_blank',
    required: false
  }
})
</script>

<template>
  <NuxtLink :external="true" :to="href" :target="target">
    link.
  </NuxtLink>
</template>