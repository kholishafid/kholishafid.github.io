<script setup>
const { toc } = useContent()
</script>

<template>
  <details class="cursor-pointer">
    <summary>Table of contents: </summary>
    <ol v-if="toc && toc.links" class="text-base m-0">
      <li v-for="link in toc.links" :key="link.text">
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ol>
  </details>
</template>