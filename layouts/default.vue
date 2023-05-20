<script setup>
const colorMode = useColorMode();
</script>

<template>
  <NuxtLoadingIndicator :height="5" :color="colorMode.preference == 'light' ? '#22222c' : '#e9e4ce'" />
  <div class="min-h-screen flex flex-col container mx-auto">
    <Navbar />
    <main class="max-w-full mx-auto px-4 sm:px-6 flex-1 prose lg:prose-xl dark:prose-invert overflow-x-hidden">
      <slot />
    </main>
    <Footer />
  </div>
</template>
