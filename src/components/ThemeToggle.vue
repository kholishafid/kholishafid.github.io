<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";

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
    class="hover:bg-slate-800/5 dark:hover:bg-black h-10 w-10 grid place-items-center rounded-full relative overflow-hidden"
    :class="{ darkTheme }"
    @click="() => setDarkTheme(!darkTheme)"
    id="theme-toggle"
  >
    <i
      class="ph-duotone ph-moon text-2xl inline-block text-slate-800 dark:text-text absolute theme-icon"
    ></i>
    <i
      class="ph-duotone ph-sun text-2xl inline-block text-slate-800 dark:text-text absolute theme-icon"
    ></i>
  </button>
</template>

<style scoped>
#theme-toggle.darkTheme .ph-moon {
  opacity: 0;
  top: 36px;
  scale: 0.4;
}
#theme-toggle:not(.darkTheme) .ph-moon {
  top: 50%;
  transform: translateY(-50%);
  scale: 1;
}
#theme-toggle:not(.darkTheme) .ph-sun {
  opacity: 0;
  bottom: 36px;
  scale: 0.4;
}
#theme-toggle.darkTheme .ph-sun {
  bottom: 50%;
  transform: translateY(50%);
  scale: 1;
}

.theme-icon {
  transition: all 300ms linear;
}
</style>
