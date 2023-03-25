<script setup>
const darkTheme = ref(false)
const colorMode = useColorMode();

const changeTheme = (theme) => {
  colorMode.preference = theme
  theme === 'dark' ? darkTheme.value = true : darkTheme.value = false
  localStorage.setItem('theme', theme)
}

onMounted(() => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    theme === 'dark' ? changeTheme('dark') : changeTheme('light')
  } else {
    changeTheme('light')
  }
})
</script>

<template>
  <nav
    class="container mx-auto p-4 sm:py-6 flex justify-between items-center sticky top-0 bg-[#e9e4ce]/80 dark:bg-[#22222c]/80 backdrop-blur-sm">
    <ul>
      <li>
        <NuxtLink to="/"><strong class="text-2xl font-medium">kholishafid</strong></NuxtLink>
      </li>
    </ul>
    <ul class="flex gap-6 flex-row items-center text-xl">
      <li>
        <NuxtLink to="/portfolio">Portfolio</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </li>
      <li>
        <div class="w-10 h-10 bg-[#e9e4ce] grid place-items-center" v-if="darkTheme" @click="changeTheme('light')">
          <img src="~~/assets/icon/sun-outline.svg" alt="light-theme" class="h-6 w-6">
        </div>
        <div class="w-10 h-10 bg-[#22222c] grid place-items-center" v-if="!darkTheme" @click="changeTheme('dark')">
          <img src="~~/assets/icon/moon-outline.svg" alt="dark-theme" class="h-6 w-6">
        </div>
      </li>
    </ul>
  </nav>
</template>