<template>
  <div class="px-4 max-w-4xl mx-auto h-full mt-6 sm:mb-16 mb-8">
    <ContentDoc>
      <template v-slot="{ doc }">
        <div v-if="doc.thumbnail" class="mb-8">
          <img :src="doc.thumbnail" alt="thumbnail" class="w-full h-[350px] object-cover rounded-md" draggable="false">
        </div>
        <h1 class="text-5xl font-cardo mb-6">{{ doc.title }}</h1>
        <p class="text-xl dark:text-gray-300 text-slate-700 mb-4">{{ doc.date }}</p>
        <p class="text-xl dark:text-gray-300 text-slate-700 mb-8">{{ doc.description }}</p>
        <ContentRenderer :value="doc" />
      </template>
      <template #not-found>
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-12">
          <p class="text-xl">Maaf artikel yang anda minta tidak ditemukan.</p>
        </div>
      </template>
      <template #empty>
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-12">
          <p>Artikel ini kosong.</p>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>