<template>
  <div class="p-4 md:p-8">
    <ContentDoc>
      <template v-slot="{ doc }">
        <div
          class="prose prose-p:font-open-sans dark:prose-invert max-w-full mx-auto prose-headings:font-lato prose-blue">
          <NuxtImg :src="doc.thumbnail" :alt="doc.title" class="w-full max-h-[350px] object-cover rounded"
            quality="100" />
          <h1>{{ doc.title }}</h1>
          <p>{{ doc.date }}</p>
          <p>{{ doc.description }}</p>
          <Toc :toc="doc.body.toc.links" />
          <ContentRenderer :value="doc" />
        </div>
        <CommentBlock />
      </template>
      <template #not-found>
        <p>Maaf artikel yang anda cari tidak ditemukan.</p>
      </template>
      <template #empty>
        <p>Artikel ini kosong.</p>
      </template>
    </ContentDoc>
  </div>
</template>
