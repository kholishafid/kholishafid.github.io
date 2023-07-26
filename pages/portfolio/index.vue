<script setup>
import { PortfolioList } from '@/store/portfolio';

useHead({
  title: "kholishafid | portfolio",
});
</script>

<template>
  <div class="md:p-4">

    <section class="grid md:grid-cols-3">
      <PortfolioCard
        v-for="portfolio in PortfolioList"
        :key="portfolio.title"
        :article="portfolio"
      />
    </section>
  </div>
</template>
