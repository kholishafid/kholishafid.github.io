<script setup>
const colorMode = useColorMode();
</script>

<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden">
    <NuxtLoadingIndicator
      :height="5"
      :color="colorMode.preference == 'light' ? '#22222c' : '#e9e4ce'"
    />
    <Navbar />
    <main class="container mx-auto flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
