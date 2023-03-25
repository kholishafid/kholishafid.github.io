<script setup>
useHead({
  title: 'kholishafid',
  meta: [
    { name: 'description', content: 'kholis hafid website.' }
  ],
});
</script>

<template>
  <main>
    <div class="flex flex-col-reverse sm:flex gap-4 sm:flex-row items-center mb-6 sm:my-6 ">
      <hgroup class="flex-1 p-4">
        <h1 class="text-3xl sm:text-5xl mb-8 font-cardo font-bold">Hello wellcome to my page.</h1>
        <h3 class="text-lg sm:text-2xl text-slate-700 dark:text-gray-300">Aku hafid , web developer pemula. Suka ngerjain
          <code class="text-[#2965f1]">CSS</code> dan <code
            class="dark:text-[#f0db4f] bg-[#f0db4f] dark:bg-transparent text-black">JavaScript</code>.
        </h3>
      </hgroup>
      <div class="p-4 box-border max-w-[500px]">
        <img src="~/assets/image/me-portait.svg" alt="portait">
      </div>
    </div>
    <div class="my-6 sm:my-20 p-4">
      <h1 class="text-2xl sm:text-4xl mb-4 font-cardo font-bold">About</h1>
      <p class="sm:text-xl leading-8 text-slate-700 dark:text-gray-300 mb-3">Aku siswa kelas 3 jurusan RPL di <a
          href="https://web.smkn2kra.sch.id/" class="hover:text-[#10C350] hover:underline hover:underline-offset-2"
          target="_blank">SMKN 2
          Karanganyar</a>, aku suka mendengarkan musik , game dan tentu saja coding. Aku punya <i>goals</i> untuk
        menjadi
        orang yang berguna dan bermanfaat bagi orang lain.</p>
      <p class="sm:text-xl leading-8 mb-3 text-slate-700 dark:text-gray-300">Dalam membuat website aku menggunakan <code
          class="text-[#42b883]">Vue</code>
        dan <code class="text-[#41b883]">Nuxt</code> untuk menangani FrontEnd. Selain itu aku juga punya pengalaman
        menggunakan <code class="text-[#fb503b]">Laravel</code>.
        Namun tentu saja aku masih seorang
        pemula dan butuh banyak belajar.</p>
    </div>
    <div class="my-6 sm:my-20 p-4">
      <h1 class="text-2xl sm:text-4xl mb-4 font-cardo font-bold">Skills</h1>
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
        <div>
          <h5 class="text-slate-800 dark:text-gray-200 text-2xl mb-4">Markup & Languange</h5>
          <ul class="grid grid-cols-2 gap-2 bg-black/5 dark:bg-white/5 p-4">
            <li
              class="sm:text-xl text-slate-700 dark:text-gray-300 flex flex-col gap-2 sm:gap-4 items-center w-full aspect-square hover:bg-black/10 dark:hover:bg-white/10 rounded justify-center p-2 sm:p-4 text-center">
              <img src="~/assets/image/html-css.svg" alt="html-css" class="w-12 sm:w-16 rounded">
              <div>
                <p class="sm:text-xl dark:text-gray-300 text-slate-700">HTML & CSS</p>
                <p class="text-slate-700 dark:text-gray-200">
                  Advance
                </p>
              </div>
            </li>
            <li
              class="sm:text-xl text-gray-300 flex flex-col gap-2 sm:gap-4 items-center w-full aspect-square hover:bg-black/10 dark:hover:bg-white/10 rounded justify-center p-2 sm:p-4 text-center">
              <img src="~/assets/image/js-logo.svg" alt="javascript" class="w-12 sm:w-16 rounded">
              <div class="w-full">
                <p class="sm:text-xl dark:text-gray-300 text-slate-700">JavaScript</p>
                <p class="text-slate-700 dark:text-gray-200">Intermediate</p>
              </div>
            </li>
            <li
              class="sm:text-xl text-gray-300 flex flex-col gap-2 sm:gap-4 items-center w-full aspect-square hover:bg-black/10 dark:hover:bg-white/10 rounded justify-center p-2 sm:p-4 text-center">
              <img src="~/assets/image/php-logo.svg" alt="javascript" class="w-12 sm:w-16 rounded">
              <div class="w-full">
                <p class="sm:text-xl dark:text-gray-300 text-slate-700">PHP</p>
                <p class="text-slate-700 dark:text-gray-200">Intermediate</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h5 class="text-slate-800 dark:text-gray-200 text-2xl mb-4">Technologies</h5>
          <ul class="grid grid-cols-2 gap-2 bg-black/5 dark:bg-white/5 p-4">
            <li
              class="sm:text-xl text-gray-300 flex flex-col gap-2 sm:gap-4 items-center w-full aspect-square hover:bg-black/10 dark:hover:bg-white/10 rounded justify-center p-2 sm:p-4 text-center">
              <img src="~/assets/image/vue-nuxt.svg" alt="vue-nuxt" class="w-12 sm:w-16 rounded">
              <div class="w-full">
                <p class="sm:text-xl dark:text-gray-300 text-slate-700">Vue & Nuxt</p>
                <p class="text-slate-700 dark:text-gray-200">Intermediate</p>
              </div>
            </li>
            <li
              class="sm:text-xl text-gray-300 flex flex-col gap-2 sm:gap-4 items-center w-full aspect-square hover:bg-black/10 dark:hover:bg-white/10 rounded justify-center p-2 sm:p-4 text-center">
              <img src="~/assets/image/laravel-logo.svg" alt="laravel" class="w-12 sm:w-16 rounded">
              <div class="w-full">
                <p class="sm:text-xl dark:text-gray-300 text-slate-700">Laravel</p>
                <p class="text-slate-700 dark:text-gray-200">Begginer</p>
              </div>
            </li>
            <li
              class="sm:text-xl text-gray-300 flex flex-col gap-2 sm:gap-4 items-center w-full aspect-square hover:bg-black/10 dark:hover:bg-white/10 rounded justify-center p-2 sm:p-4 text-center">
              <img src="~/assets/image/tailwind-logo.svg" alt="tailwind" class="w-12 sm:w-16 rounded">
              <div class="w-full">
                <p class="sm:text-xl dark:text-gray-300 text-slate-700">Tailwind</p>
                <p class="text-slate-700 dark:text-gray-200">Intermediate</p>
              </div>
            </li>
            <li
              class="sm:text-xl text-gray-300 flex flex-col gap-2 sm:gap-4 items-center w-full aspect-square hover:bg-black/10 dark:hover:bg-white/10 rounded justify-center p-2 sm:p-4 text-center">
              <img src="~/assets/image/next-logo.svg" alt="next" class="w-12 sm:w-16 rounded">
              <div class="w-full">
                <p class="sm:text-xl dark:text-gray-300 text-slate-700">Next</p>
                <p class="text-slate-700 dark:text-gray-200">Begginer</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="h-full flex flex-col">
          <h5 class="text-slate-800 dark:text-gray-200 text-2xl mb-4">Database & BaaS</h5>
          <ul class="grid grid-cols-2 gap-2 bg-black/5 dark:bg-white/5 p-4 flex-1">
            <li
              class="sm:text-xl text-gray-300 flex flex-col gap-2 sm:gap-4 items-center w-full aspect-square hover:bg-black/10 dark:hover:bg-white/10 rounded justify-center p-2 sm:p-4 text-center">
              <img src="~/assets/image/mysql-logo.svg" alt="mysql" class="w-12 sm:w-16 rounded">
              <div class="w-full">
                <p class="sm:text-xl dark:text-gray-300 text-slate-700">Mysql</p>
                <p class="text-slate-700 dark:text-gray-200">Intermediate</p>
              </div>
            </li>
            <li
              class="sm:text-xl text-gray-300 flex flex-col gap-2 sm:gap-4 items-center w-full aspect-square hover:bg-black/10 dark:hover:bg-white/10 rounded justify-center p-2 sm:p-4 text-center">
              <img src="~/assets/image/postgreesql.svg" alt="postgree" class="w-12 sm:w-16 rounded">
              <div class="w-full">
                <p class="sm:text-xl dark:text-gray-300 text-slate-700">PostgreeSQL</p>
                <p class="text-slate-700 dark:text-gray-200">Begginer</p>
              </div>
            </li>
            <li
              class="sm:text-xl text-gray-300 flex flex-col gap-2 sm:gap-4 items-center w-full aspect-square hover:bg-black/10 dark:hover:bg-white/10 rounded justify-center p-2 sm:p-4 text-center">
              <img src="~/assets/image/supabase.svg" alt="supabase" class="w-12 sm:w-16 rounded">
              <div class="w-full">
                <p class="sm:text-xl dark:text-gray-300 text-slate-700">Supabase</p>
                <p class="text-slate-700 dark:text-gray-200">Begginer</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="my-6 sm:my-20 p-4">
      <h1 class="text-2xl sm:text-4xl mb-4 font-cardo font-bold">Get in Touch</h1>
      <p class="mb-4 text-xl text-slate-800 dark:text-gray-200">Reach me via email at <a class="font-semibold"
          href="mailto:itsmaehere@gmail.com">itsmaehere@gmail.com</a> or on my social: </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="https://github.com/kholishafid" target="_blank">
          <div
            class="flex items-center gap-4 hover:bg-[#d1d1c3]/60 dark:hover:bg-white/10 rounded-full pr-6 cursor-pointer">
            <div class="dark:bg-slate-200 w-fit rounded-full p-2">
              <img src="~~/assets/icon/github.svg" class="w-6 h-6" alt="github">
            </div>
            <p class="sm:text-xl text-slate-700 dark:text-gray-300">kholishafid</p>
          </div>
        </a>
        <a href="https://www.instagram.com/ka_canhisme" target="_blank">
          <div
            class="flex items-center gap-4 hover:bg-[#d1d1c3]/60 dark:hover:bg-white/10 rounded-full pr-6 cursor-pointer">
            <div class="dark:bg-slate-200 w-fit rounded-full p-2">
              <img src="~~/assets/icon/instagram.svg" class="w-6 h-6" alt="github">
            </div>
            <p class="sm:text-xl text-slate-700 dark:text-gray-300">@ka_canhisme</p>
          </div>
        </a>
        <a href="https://twitter.com/kholis_hafid" target="_blank">
          <div
            class="flex items-center gap-4 hover:bg-[#d1d1c3]/60 dark:hover:bg-white/10 rounded-full pr-6 cursor-pointer">
            <div class="dark:bg-slate-200 w-fit rounded-full p-2">
              <img src="~~/assets/icon/twitter.svg" class="w-6 h-6" alt="github">
            </div>
            <p class="sm:text-xl text-slate-700 dark:text-gray-300">@kholis_hafid</p>
          </div>
        </a>
      </div>
    </div>
  </main>
</template>