<script setup lang="ts">
const show = ref<boolean>(false);

defineProps<{
  article: {
    link: string;
    title: string;
    description: string;
    thumbnail: string;
  };
}>();
</script>

<template>
  <div class="h-full p-4 hover:bg-black/5 dark:hover:bg-white/5 flex flex-col justify-between ">
    <NuxtLink :external="true" :href="article.link" target="_blank" class="md:pointer-events-none">
      <div class="mb-4">
        <h2 class="font-semibold dark:text-white mb-2">
          {{ article.title }}
        </h2>
        <p class="dark:text-gray-300 text-sm">
          {{ article.description }}
        </p>
      </div>
    </NuxtLink>
    <div class="bg-black/20 place-items-center pointer-events-auto" :class="{ 'grid fixed inset-0 ': show === true }"
      @click="show = false">
      <NuxtImg :src="`/portfolio/${article.thumbnail}`" format="webp" class="aspect-video rounded object-cover" :class="{
        'md:hidden': show === false,
        'w-1/2 aspect-video': show === true,
      }" />
    </div>
    <div class="hidden gap-1 md:flex h-fit">
      <TheButton :variant="'primary'" @buttonClicked="show = true">Show</TheButton>
      <TheButton :variant="'success'">
        <NuxtLink :href="article.link" :external="true" target="_blank">
          Live Preview
        </NuxtLink>
      </TheButton>
    </div>
  </div>
</template>
