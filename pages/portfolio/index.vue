<script setup>
useHead({
  title: "kholishafid | portfolio",
});
</script>

<template>
  <div class="md:p-4">
    <ContentList path="/portfolio">
      <template v-slot="{ list }">
        <section class="grid md:grid-cols-3">
          <PortfolioCard
            v-for="article in list"
            :key="article._path"
            :article="article"
          />
        </section>
      </template>
      <template #not-found>
        <p>Belum ada portofolio terbaru.</p>
      </template>
    </ContentList>
  </div>
</template>
