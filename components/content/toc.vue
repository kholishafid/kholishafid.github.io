<script setup>
const props = defineProps({
  toc: Array,
});
</script>

<template>
  <details class="cursor-pointer" open>
    <summary>Table of contents:</summary>
    <ol v-if="toc" class="text-base m-0">
      <li v-for="link in toc" :key="link.text">
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ol>
  </details>
</template>
