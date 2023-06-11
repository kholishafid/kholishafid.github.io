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
  <div
    external="true"
    :href="article.link"
    target="_blank"
    class="flex flex-col justify-between h-full hover:bg-black/5 p-4 dark:hover:bg-white/5"
  >
    <div class="mb-4">
      <h2 class="font-semibold dark:text-white mb-2">
        {{ article.title }}
      </h2>
      <p class="dark:text-gray-300 text-sm">
        {{ article.description }}
      </p>
    </div>
    <div
      class="bg-black/20 place-items-center"
      :class="{ 'grid fixed inset-0 ': show === true }"
      @click="show = false"
    >
      <NuxtImg
        :src="`/portfolio/${article.thumbnail}`"
        format="webp"
        class="aspect-video rounded object-cover"
        :class="{
          'md:hidden': show === false,
          'w-1/2 aspect-video': show === true,
        }"
      />
    </div>
    <div class="hidden gap-1 md:flex">
      <TheButton :variant="'primary'" @buttonClicked="show = true"
        >Show</TheButton
      >
      <TheButton :variant="'success'">
        <NuxtLink :href="article.link" :external="true" target="_blank">
          Live Preview
        </NuxtLink>
      </TheButton>
    </div>
  </div>
</template>
