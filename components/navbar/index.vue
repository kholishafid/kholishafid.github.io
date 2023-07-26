<script setup lang="ts">
const darkTheme = ref<boolean>(false);
const colorMode = useColorMode();
const down = ref<boolean>(false);
const time = ref<string>(
  `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
);

const getTime = () => {
  return `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
};

function downDisabled() {
  down.value = true;
  setTimeout(() => {
    down.value = false;
  }, 500);
}

const changeTheme = (theme: string) => {
  downDisabled();
  colorMode.preference = theme;
  theme === "dark" ? (darkTheme.value = true) : (darkTheme.value = false);
  localStorage.setItem("theme", theme);
};

let timeInterval: NodeJS.Timer;

onMounted(() => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    theme === "dark" ? changeTheme("dark") : changeTheme("light");
  } else {
    changeTheme("light");
  }
  timeInterval = setInterval(() => {
    time.value = getTime();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timeInterval);
});
</script>

<template>
  <nav class="mt-4 max-w-4xl mx-auto flex justify-between bg-light-background dark:bg-dark-background relative">
    <ul>
      <li>
        <NuxtLink
          to="/"
          class="px-2 py-2 md:px-4 md:py-3 rounded-t-lg block"
        >
          <strong class="font-medium">kholishafid</strong>
        </NuxtLink>
      </li>
    </ul>
    <div class="hidden md:block text-sm absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-medium">
      {{ time }}
    </div>
    <ul class="flex flex-row items-center">
      <li>
        <NuxtLink
          to="/portfolio"
          class="px-2 py-2 md:px-4 md:py-3 rounded-t-lg block"
        >Portfolio</NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/blog"
          class="px-2 py-2 md:px-4 md:py-3 rounded-t-lg block"
        >Blog</NuxtLink>
      </li>
      <li>
        <div
          v-if="!darkTheme"
          @click="changeTheme('dark')"
        >
          <img
            src="~/assets/icon/sun-outline.svg"
            alt="dark-theme"
            class="w-6 sm:w-6 p-2 mx-1 box-content cursor-pointer"
          />
        </div>
        <div
          v-if="darkTheme"
          @click="changeTheme('light')"
        >
          <img
            src="~/assets/icon/moon-outline.svg"
            alt="dark-theme"
            class="w-6 sm:w-6 p-2 mx-1 box-content cursor-pointer"
          />
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
html[class="dark"] .router-link-active {
  background-color: #282829;
}

.router-link-active {
  background-color: rgb(229 231 235);
}
</style>
