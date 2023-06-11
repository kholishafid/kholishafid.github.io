<script setup>
const props = defineProps({
  error: Object,
});

const timer = ref(4);
let interval;
let timeout;
const redirectBack = () => clearError({ redirect: "/" });

onMounted(() => {
  interval = setInterval(() => {
    timer.value -= 1;
  }, 1000);
  timeout = setTimeout(() => {
    redirectBack();
  }, 4000);
});

onUnmounted(() => {
  clearInterval(interval);
  clearTimeout(timeout);
});
</script>

<template>
  <main class="grid place-items-center h-screen bg-black/10">
    <div class="bg-light-background rounded-lg">
      <div class="text-center pb-6 px-8">
        <img
          src="~~/assets/image/cats.svg"
          alt="cats"
          class="w-[250px] aspect-square object-cover mx-auto"
        />
        <h1 class="text-light-accent font-bold text-2xl">
          {{ error.statusCode }}
        </h1>
        <p>{{ error.message }}</p>
      </div>
      <div class="border-t py-2 text-center text-light-primary">
        <p>Redirect in {{ timer }}</p>
      </div>
    </div>
  </main>
</template>
