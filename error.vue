<script setup>
const props = defineProps({
  error: Object
})

const timer = ref(4);
let interval;
let timeout;
const redirectBack = () => clearError({ redirect: '/' })

onMounted(() => {
  interval = setInterval(() => {
    timer.value -= 1
  }, 1000);
  timeout =
    setTimeout(() => {
      redirectBack()
    }, 4000);
})

onUnmounted(() => {
  clearInterval(interval);
  clearTimeout(timeout);
})

</script>

<template>
  <main class="grid place-items-center h-screen">
    <div class="sm:flex items-center">
      <div class="text-center">
        <h1 class="text-6xl sm:text-8xl font-cardo font-bold mb-2">{{ error.statusCode }}</h1>
        <p class="sm:text-xl">{{ error.message }}</p>
        <p class="sm:text-xl">Redirect in {{ timer }}</p>
      </div>
      <div>
        <img src="~~/assets/image/cats.svg" alt="cats" class="w-[200px] sm:w-[300px] aspect-square object-cover">
      </div>
    </div>
  </main>
</template>