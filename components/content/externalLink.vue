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
  <a :href="href" :target="target">
    link.
  </a>
</template>