<script setup>
useHead({
  title: 'kholishafid - Blog',
  meta: [
    { name: 'description', content: 'kholishafid blog.' }
  ],
});
</script>

<template>
  <main class="px-4 max-w-4xl mx-auto">
    <ContentList path="/blog">
      <template v-slot="{ list }">
        <div class="flex flex-col gap-4 rounded-lg my-6 ">
          <div v-for="article in list" :key="article._path" class="bg-black/5 dark:bg-white/5 p-4 rounded">
            <NuxtLink :to="article._path" class="sm:flex gap-8">
              <div v-if="article.thumbnail">
                <img :src="article.thumbnail" alt="thumbnail"
                  class="w-full mb-4 sm:mb-0 sm:h-36 aspect-video object-cover rounded">
              </div>
              <div class="flex flex-col justify-center">
                <h2 class="text-xl md:text-2xl font-hind font-bold mb-2">{{ article.title }}</h2>
                <p class="dark:text-gray-200 text-slate-700 font-hind mb-1">{{ article.date }}</p>
                <p class="dark:text-gray-300 text-slate-700 text-lg md:text-xl font-hind">{{ article.description }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </template>
      <template #not-found>
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-12">
          <p>Belum ada artikel dipublikasikan.</p>
        </div>
      </template>
    </ContentList>
  </main>
</template>