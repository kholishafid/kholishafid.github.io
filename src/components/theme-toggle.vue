<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import Moon from "./icons/moon.vue";
import Sun from "./icons/sun.vue";

const darkTheme = ref<boolean>(false);

watchEffect(() => {
  if (darkTheme.value) {
    document.documentElement.setAttribute("class", "dark");
  }
  if (!darkTheme.value) {
    document.documentElement.setAttribute("class", "light");
  }
});

function setDarkTheme(theme: boolean) {
  darkTheme.value = theme;
  if (theme === true) {
    localStorage.setItem("kholishafid-site-theme", "dark");
  }
  if (theme === false) {
    localStorage.setItem("kholishafid-site-theme", "light");
  }
}

onMounted(() => {
  const theme = localStorage.getItem("kholishafid-site-theme");
  if (!theme) {
    localStorage.setItem("kholishafid-site-theme", "light");
  }
  darkTheme.value = theme === "light" ? false : true;
});
</script>

<template>
  <button
    class="size-10 grid place-items-center rounded-full relative overflow-hidden hover:bg-light-2 dark:hover:bg-dark-8 transition-colors cursor-pointer"
    :class="{ darkTheme }"
    @click="() => setDarkTheme(!darkTheme)"
    id="theme-toggle"
    aria-label="Toggle Theme"
  >
    <Moon class="absolute theme-icon moon" />
    <Sun class="absolute theme-icon sun" />
  </button>
</template>

<style scoped>
#theme-toggle.darkTheme .moon {
  opacity: 0;
  top: 36px;
  scale: 0.4;
}
#theme-toggle:not(.darkTheme) .moon {
  top: 50%;
  transform: translateY(-50%);
  scale: 1;
}
#theme-toggle:not(.darkTheme) .sun {
  opacity: 0;
  bottom: 36px;
  scale: 0.4;
}
#theme-toggle.darkTheme .sun {
  bottom: 50%;
  transform: translateY(50%);
  scale: 1;
}

.theme-icon {
  transition: all 300ms linear;
}
</style>
