<script setup>
useHead({
  meta: [
    { name: "googlebot", content: "notranslate" }
  ]
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="container mx-auto flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>