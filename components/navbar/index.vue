<script setup>
const darkTheme = ref(false);
const colorMode = useColorMode();
const down = ref(false);

function downDisabled() {
  down.value = true;
  setTimeout(() => {
    down.value = false;
  }, 500);
}

const changeTheme = (theme) => {
  downDisabled();
  colorMode.preference = theme;
  theme === "dark" ? (darkTheme.value = true) : (darkTheme.value = false);
  localStorage.setItem("theme", theme);
};

onMounted(() => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    theme === "dark" ? changeTheme("dark") : changeTheme("light");
  } else {
    changeTheme("light");
  }
});
</script>

<template>
  <nav class="container-base py-4 sticky top-0 bg-[#e9e4ce]/80 dark:bg-[#22222c]/80 backdrop-blur-sm z-50">
    <div class="container px-4 mx-auto flex justify-between items-center">
      <ul>
        <li>
          <NuxtLink to="/">
            <strong class="text-xl md:text-2xl font-medium">kholishafid</strong>
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex sm:gap-6 gap-3 flex-row items-center sm:text-xl">
        <li>
          <NuxtLink to="/portfolio">Portfolio</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
        <li>
          <div class="w-8 sm:w-10 h-8 sm:h-10 bg-[#e9e4ce] grid place-items-center cursor-pointer rounded"
            v-if="darkTheme" @click="changeTheme('light')">
            <img src="~/assets/icon/sun-outline.svg" alt="dark-theme" class="w-5 sm:w-6" :class="{ changeAnim: down }" />
          </div>
          <div class="w-8 sm:w-10 h-8 sm:h-10 bg-[#22222c] grid place-items-center cursor-pointer rounded"
            v-if="!darkTheme" @click="changeTheme('dark')">
            <img src="~/assets/icon/moon-outline.svg" alt="dark-theme" class="w-5 sm:w-6" :class="{ changeAnim: down }" />
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.changeAnim {
  animation: changeAnim 0.5s cubic-bezier(0.56, 0.36, 0.47, 0.83);
  transform: translate3d(0, 0, 0);
}

@keyframes changeAnim {
  0% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
