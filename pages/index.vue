<script setup>
useHead({
  title: "kholishafid",
  meta: [
    { name: "description", content: "Hafid Nur Kholis personal website." },
  ],
});
</script>

<template>
  <div>
    <div class="flex flex-col-reverse sm:flex-row sm:gap-6 items-center sm:py-6 md:py-8">
      <hgroup class="w-full">
        <h1 class="font-cardo">
          Hello wellcome to my page
        </h1>
      </hgroup>
      <div class="box-border sm:max-w-[40%] lg:max-w-[35%]">
        <img src="~/assets/image/me-portait.svg" alt="portait" draggable="false" class="w-full h-full rounded" />
      </div>
    </div>

    <div>
      <h2 class="font-cardo">About</h2>
      <p>
          Saya hafid , web developer pemula. Suka ngerjain
          <code class="text-[#2965f1]">CSS</code> dan
          <code class="dark:text-[#f0db4f] bg-[#f0db4f] dark:bg-transparent text-black">JavaScript</code>.
      </p>
      <p>
        19 tahun, lulusan SMK jurusan Rekayasa Perangkat Lunak, saya suka
        mendengarkan musik , dan tentu saja coding. Saya punya
        <i>goals</i> untuk menjadi orang yang berguna dan bermanfaat bagi orang
        lain.
      </p>
      <p>
        Dalam membuat website saya menggunakan
        <code class="text-[#42b883]">Vue</code> dan
        <code class="text-[#41b883]">Nuxt</code> untuk menangani FrontEnd.
        Selain itu saya juga cukup pede dengan
        <code class="text-[#fb503b]">Laravel</code>. Namun tentu saja saya masih
        seorang pemula dan butuh banyak belajar.
      </p>
    </div>

    <div>
      <h2 class="font-cardo">Skills</h2>
      <div class="grid lg:grid-cols-2 gap-4 not-prose">
        <div>
          <h2 class="text-slate-800 dark:text-gray-200 text-lg md:text-2xl mb-4">
            Markup & Languange
          </h2>
          <SkillList>
            <SkillItem label="HTML & CSS" level="Advance">
              <img src="~/assets/image/html-css.svg" alt="html-css" class="w-12 sm:w-16 aspect-square rounded" />
            </SkillItem>
            <SkillItem label="JavaScript" level="Intermediate">
              <img src="~/assets/image/js-logo.svg" alt="javascript" class="w-12 sm:w-16 aspect-square rounded" />
            </SkillItem>
            <SkillItem label="PHP" level="Intermediate">
              <img src="~/assets/image/php-logo.svg" alt="php" class="w-12 sm:w-16 aspect-square rounded" />
            </SkillItem>
          </SkillList>
        </div>
        <div>
          <h2 class="text-slate-800 dark:text-gray-200 text-lg md:text-2xl mb-4">
            Technologies
          </h2>
          <SkillList>
            <SkillItem label="Vue & Nuxt" level="Intermediate">
              <img src="~/assets/image/vue-nuxt.svg" alt="vue-nuxt" class="w-12 sm:w-16 aspect-square rounded" />
            </SkillItem>
            <SkillItem label="Laravel" level="Beginner">
              <img src="~/assets/image/laravel-logo.svg" alt="laravel" class="w-12 sm:w-16 aspect-square rounded" />
            </SkillItem>
            <SkillItem label="Tailwind" level="Intermediate">
              <img src="~/assets/image/tailwind-logo.svg" alt="tailwind" class="w-12 sm:w-16 aspect-square rounded" />
            </SkillItem>
            <SkillItem label="Next.js" level="Beginner">
              <img src="~/assets/image/next-logo.svg" alt="next" class="w-12 sm:w-16 aspect-square rounded" />
            </SkillItem>
          </SkillList>
        </div>
        <div class="h-full flex flex-col">
          <h2 class="text-slate-800 dark:text-gray-200 text-lg md:text-2xl mb-4">
            Database
          </h2>
          <SkillList>
            <SkillItem label="MySQL" level="Intermediate">
              <img src="~/assets/image/mysql-logo.svg" alt="mysql" class="w-12 sm:w-16 aspect-square rounded" />
            </SkillItem>
            <SkillItem label="PostgreSQL" level="Beginner">
              <img src="~/assets/image/postgreesql.svg" alt="postgree" class="w-12 sm:w-16 aspect-square rounded" />
            </SkillItem>
          </SkillList>
        </div>
      </div>
    </div>

    <div>
      <h2 class="font-cardo">
        Get in Touch
      </h2>
      <p>
        Reach me via email at
        <a class="font-semibold" href="mailto:hafidnkholis@gmail.com">hafidnkholis@gmail.com</a>
        or on my social:
      </p>
      <div class="flex flex-col lg:flex-row gap-2 not-prose">
        <a href="https://github.com/kholishafid" target="_blank">
          <div
            class="flex items-center gap-4 hover:bg-[#d1d1c3]/60 dark:hover:bg-white/10 rounded-full px-0 pr-6 md:p-2 md:pr-5 cursor-pointer">
            <div class="dark:bg-slate-200 w-fit rounded-full p-2">
              <img src="~~/assets/icon/github.svg" class="w-4 h-4" alt="github" />
            </div>
            <p class="md:text-lg lg:text-xl text-slate-700 dark:text-gray-300">
              kholishafid
            </p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/hafid-nur-kholis-833195248/" target="_blank">
          <div
            class="flex items-center gap-4 hover:bg-[#d1d1c3]/60 dark:hover:bg-white/10 rounded-full px-0 pr-6 md:p-2 md:pr-5 cursor-pointer">
            <div class="dark:bg-slate-200 w-fit rounded-full p-2">
              <img src="~~/assets/icon/linkedin.svg" class="w-4 h-4" alt="github" />
            </div>
            <p class="md:text-lg lg:text-xl text-slate-700 dark:text-gray-300">
              Hafid Nur Kholis
            </p>
          </div>
        </a>
        <a href="https://twitter.com/kholis_hafid" target="_blank">
          <div
            class="flex items-center gap-4 hover:bg-[#d1d1c3]/60 dark:hover:bg-white/10 rounded-full px-0 pr-6 md:p-2 md:pr-5 cursor-pointer">
            <div class="dark:bg-slate-200 w-fit rounded-full p-2">
              <img src="~~/assets/icon/twitter.svg" class="w-4 h-4" alt="github" />
            </div>
            <p class="md:text-lg lg:text-xl text-slate-700 dark:text-gray-300">
              @kholis_hafid
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
