<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

useHead({
  title: "kholishafid | blog",
});

const query: QueryBuilderParams = { path: '/blog', sort: [{ contentIndex: -1 }] }

const handleRead = (path: string) => {
  navigateTo(path)
}
</script>

<template>
  <div class="md:p-4">
    <ContentList :query="query">
      <template v-slot="{ list }">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div v-for="article in list" :key="article._path">
            <div class="flex flex-col-reverse gap-3 hover:bg-black/5 p-4 dark:hover:bg-white/5"
              @click="handleRead(article._path)">
              <div class="flex flex-col justify-center">
                <h2 class="font-semibold dark:text-white mb-1">
                  {{ article.title }}
                </h2>
                <p class="text-xs dark:text-gray-200 mb-1">
                  {{ article.date }}
                </p>
                <p class="dark:text-gray-300 text-xs w-full truncate">
                  {{ article.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #not-found>
        <p>Belum ada artikel dipublikasikan.</p>
      </template>
    </ContentList>
  </div>
</template>

