<script setup>
useHead({
  title: "kholishafid | blog",
});
const query = await queryContent("blog").find();
</script>

<template>
  <div class="md:p-4">
    <ContentList :query="query" path="/blog">
      <template v-slot="{ list }">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div v-for="article in list" :key="article._path" class="">
            <NuxtLink
              :to="article._path"
              class="flex flex-col-reverse gap-3 hover:bg-black/5 p-4 dark:hover:bg-white/5"
            >
              <div class="flex flex-col justify-center">
                <h2 class="font-semibold dark:text-white">
                  {{ article.title }}
                </h2>
                <p class="text-xs dark:text-gray-200 mb-2">
                  {{ article.date }}
                </p>
                <p class="dark:text-gray-300 text-xs w-full truncate">
                  {{ article.description }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </template>
      <template #not-found>
        <p>Belum ada artikel dipublikasikan.</p>
      </template>
    </ContentList>
  </div>
</template>
