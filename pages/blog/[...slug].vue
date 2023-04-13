<template>
  <div class="px-4 max-w-4xl mx-auto h-full mt-6 mb-8">
    <ContentDoc>
      <template v-slot="{ doc }">
        <div class="prose sm:prose-xl max-w-none prose-p:font-hind dark:prose-invert prose-headings:font-cardo">
          <div v-if="doc.thumbnail" class="mb-8">
            <img :src="doc.thumbnail" alt="thumbnail" class="w-full h-[350px] object-cover rounded-md" draggable="false">
          </div>
          <h1>{{ doc.title }}</h1>
          <p>{{ doc.date }}</p>
          <Toc />
          <p>{{ doc.description }}</p>
          <ContentRenderer :value="doc" />
        </div>
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