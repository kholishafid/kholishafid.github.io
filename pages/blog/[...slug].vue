<script setup>
definePageMeta({
  layout: 'blog'
})
</script>
<template>
  <div>
    <ContentDoc>
      <template v-slot="{ doc }">
        <div class="prose-p:font-hind dark:prose-invert prose-headings:font-cardo">
          <nuxt-img
            v-if="doc.thumbnail"
            :src="doc.thumbnail" 
            alt="thumbnail" 
            class="w-full aspect-video lg:h-[400px] object-cover rounded-md" draggable="false" 
          />
          <h2>{{ doc.title }}</h2>
          <p>{{ doc.date }}</p>
          <Toc :toc="doc.body.toc.links" />
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