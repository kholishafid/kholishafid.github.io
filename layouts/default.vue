<script setup>
const colorMode = useColorMode();
</script>

<template>
  <NuxtLoadingIndicator :height="5" :color="'#007AFF'" />
  <main
    class="max-w-4xl mx-4 md:mx-4 lg:mx-auto bg-gray-200 dark:bg-white/5 rounded-b-lg"
  >
    <Navbar />
    <slot />
  </main>
  <Footer />
</template>
