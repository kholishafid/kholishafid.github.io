<script setup>
useHead({
  title: "kholishafid - Blog",
  meta: [{ name: "description", content: "kholishafid blog." }],
});
const query = await queryContent("blog").find();
</script>

<template>
  <div class="not-prose">
    <ContentList :query="query" path="/blog">
      <template v-slot="{ list }">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 rounded-lg sm:my-6">
          <div
            v-for="article in list"
            :key="article._path"
            class="bg-black/5 dark:bg-white/5 p-3 sm:p-4 rounded hover:scale-105 transition-all"
          >
            <NuxtLink :to="article._path" class="flex flex-col-reverse gap-3">
                <nuxt-img
                  v-if="article.thumbnail"
                  :src="article.thumbnail"
                  alt="thumbnail"
                  format="webp"
                  placeholder
                  class="w-full aspect-[16/9] object-cover sm:w-full sm:aspect-video rounded"
                  draggable="false"
                />
              <div class="flex flex-col justify-center">
                <h2 class="font-hind font-semibold dark:text-white text-[#111827]">
                  {{ article.title }}
                </h2>
                <p class="text-xs dark:text-gray-200 text-slate-700 font-hind mb-1">
                  {{ article.date }}
                </p>
                <p
                  class="dark:text-gray-300 text-slate-700 text-lg md:text-xl font-hind hidden"
                >
                  {{ article.description }}
                </p>
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
  </div>
</template>
