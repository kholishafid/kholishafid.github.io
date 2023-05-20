<script setup>
useHead({
  title: "kholishafid | Portfolio",
  meta: [{ name: "description", content: "kholishafid Portfolio." }],
});
</script>

<template>
  <div class="not-prose">
    <ContentList path="/portfolio">
      <template v-slot="{ list }">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 rounded-lg sm:my-6"
        >
          <div
            v-for="article in list"
            :key="article._path"
            class="bg-black/10 dark:bg-white/5 p-3 sm:p-4 rounded hover:scale-105 transition-all"
          >
            <NuxtLink external="true" :href="article.link" target="_blank" class="flex flex-col justify-between h-full">
              <div class="mb-4">
                <h2 class="font-semibold dark:text-white text-[#111827]">
                  {{ article.title }}
                </h2>
                <p class="dark:text-gray-300 text-slate-700 text-sm">
                  {{ article.description }}
                </p>
              </div>
               <div v-if="article.thumbnail">
                <nuxt-img
                  :src="`/portfolio/${article.thumbnail}`"
                  class="w-full aspect-[16/9] object-cover rounded"
                  placeholder
                  format="webp"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
      </template>
      <template #not-found>
        <p>Belum ada portofolio terbaru.</p>
      </template>
    </ContentList>
  </div>
</template>
