<script setup lang="ts">
const props = defineProps<{
  article: {
    link: string;
    title: string;
    description: string;
    thumbnail: string;
  };
}>();

const handlePreview = () => {
  navigateTo(props.article.link, { external: true })
}
</script>

<template>
  <div class="h-full p-4 hover:bg-black/5 dark:hover:bg-white/5 flex flex-col justify-between cursor-pointer"
    @click="handlePreview">
    <h2 class="font-semibold dark:text-white mb-2">
      {{ article.title }}
    </h2>
    <p class="dark:text-gray-300 text-sm mb-2">
      {{ article.description }}
    </p>
    <div class="hidden gap-1 md:flex h-fit">
      <NuxtLink :href="article.link" :external="true" target="_blank" class="text-dark-primary text-sm hover:underline">
        Live Preview
      </NuxtLink>
    </div>
  </div>
</template>
