<script setup>
useHead({
  title: 'kholishafid - Portfolio',
  meta: [
    { name: 'description', content: 'kholishafid Portfolio.' }
  ],
});
</script>

<template>
  <main class="px-4 mb-20 mt-6">
    <ContentList path="/portfolio">
      <template v-slot="{ list }">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-lg">
          <div v-for="article in list" :key="article._path" class="bg-black/10 dark:bg-white/5 p-4 rounded">
            <div v-if="article.thumbnail" class="mb-4">
              <a :href="article.link" target="_blank">
                <img :src="`/portfolio/${article.thumbnail}`" alt="thumbnail"
                  class="w-full aspect-[16/9] object-cover rounded">
              </a>
            </div>
            <h2 class="text-2xl font-bold mb-2">{{ article.title }}</h2>
            <p class="dark:text-gray-300 text-slate-700 text-xl">{{ article.description }}</p>
          </div>
        </div>
      </template>
      <template #not-found>
        <p>Belum ada portofolio terbaru.</p>
      </template>
    </ContentList>
  </main>
</template>