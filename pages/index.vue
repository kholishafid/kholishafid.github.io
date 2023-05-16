<script setup>
useHead({
  title: "kholishafid",
  meta: [
    { name: "description", content: "Hafid Nur Kholis personal website." },
  ],
});
</script>

<template>
  <main>
    <div
      class="flex flex-col-reverse sm:flex gap-4 sm:flex-row items-center mb-6 sm:my-6"
    >
      <hgroup class="flex-1 p-4">
        <h1 class="text-3xl sm:text-4xl md:text-5xl mb-8 font-cardo font-bold">
          Hello wellcome to my page.
        </h1>
        <h2 class="text-lg md:text-2xl text-slate-700 dark:text-gray-300">
          Saya hafid , web developer pemula. Suka ngerjain
          <code class="text-[#2965f1]">CSS</code> dan
          <code
            class="dark:text-[#f0db4f] bg-[#f0db4f] dark:bg-transparent text-black"
          >
            JavaScript </code
          >.
        </h2>
      </hgroup>
      <div class="p-4 pr-0 box-border sm:max-w-[350px] lg:max-w-[500px]">
        <img
          src="~/assets/image/me-portait.svg"
          alt="portait"
          draggable="false"
          class="w-full h-full rounded"
        />
      </div>
    </div>
    <div class="my-6 sm:my-20 p-4">
      <h1 class="text-2xl md:text-4xl mb-4 font-cardo font-bold">About</h1>
      <p
        class="text-lg md:text-xl leading-8 text-slate-700 dark:text-gray-300 mb-3"
      >
        19 tahun, lulusan SMK jurusan Rekayasa Perangkat Lunak, saya suka
        mendengarkan musik , dan tentu saja coding. Saya punya
        <i>goals</i> untuk menjadi orang yang berguna dan bermanfaat bagi orang
        lain.
      </p>
      <p class="md:text-xl leading-8 mb-3 text-slate-700 dark:text-gray-300">
        Dalam membuat website saya menggunakan
        <code class="text-[#42b883]">Vue</code> dan
        <code class="text-[#41b883]">Nuxt</code> untuk menangani FrontEnd.
        Selain itu saya juga cukup pede dengan
        <code class="text-[#fb503b]">Laravel</code>. Namun tentu saja saya masih
        seorang pemula dan butuh banyak belajar.
      </p>
    </div>
    <div class="my-6 sm:my-20 p-4">
      <h1 class="text-2xl md:text-4xl mb-4 font-cardo font-bold">Skills</h1>
      <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <div>
          <h2
            class="text-slate-800 dark:text-gray-200 text-xl md:text-2xl mb-4"
          >
            Markup & Languange
          </h2>
          <SkillList>
            <SkillItem label="HTML & CSS" level="Advance">
              <img
                src="~/assets/image/html-css.svg"
                alt="html-css"
                class="w-12 sm:w-16 aspect-square rounded"
              />
            </SkillItem>
            <SkillItem label="JavaScript" level="Intermediate">
              <img
                src="~/assets/image/js-logo.svg"
                alt="javascript"
                class="w-12 sm:w-16 aspect-square rounded"
              />
            </SkillItem>
            <SkillItem label="PHP" level="Intermediate">
              <img
                src="~/assets/image/php-logo.svg"
                alt="php"
                class="w-12 sm:w-16 aspect-square rounded"
              />
            </SkillItem>
          </SkillList>
        </div>
        <div>
          <h2
            class="text-slate-800 dark:text-gray-200 text-xl md:text-2xl mb-4"
          >
            Technologies
          </h2>
          <SkillList>
            <SkillItem label="Vue & Nuxt" level="Intermediate">
              <img
                src="~/assets/image/vue-nuxt.svg"
                alt="vue-nuxt"
                class="w-12 sm:w-16 aspect-square rounded"
              />
            </SkillItem>
            <SkillItem label="Laravel" level="Beginner">
              <img
                src="~/assets/image/laravel-logo.svg"
                alt="laravel"
                class="w-12 sm:w-16 aspect-square rounded"
              />
            </SkillItem>
            <SkillItem label="Tailwind" level="Intermediate">
              <img
                src="~/assets/image/tailwind-logo.svg"
                alt="tailwind"
                class="w-12 sm:w-16 aspect-square rounded"
              />
            </SkillItem>
            <SkillItem label="Next.js" level="Beginner">
              <img
                src="~/assets/image/next-logo.svg"
                alt="next"
                class="w-12 sm:w-16 aspect-square rounded"
              />
            </SkillItem>
          </SkillList>
        </div>
        <div class="h-full flex flex-col">
          <h2
            class="text-slate-800 dark:text-gray-200 text-xl md:text-2xl mb-4"
          >
            Database
          </h2>
          <SkillList>
            <SkillItem label="MySQL" level="Intermediate">
              <img
                src="~/assets/image/mysql-logo.svg"
                alt="mysql"
                class="w-12 sm:w-16 aspect-square rounded"
              />
            </SkillItem>
            <SkillItem label="PostgreSQL" level="Beginner">
              <img
                src="~/assets/image/postgreesql.svg"
                alt="postgree"
                class="w-12 sm:w-16 aspect-square rounded"
              />
            </SkillItem>
          </SkillList>
        </div>
      </div>
    </div>
    <div class="my-6 sm:my-20 p-4">
      <h1 class="text-2xl md:text-4xl mb-4 font-cardo font-bold">
        Get in Touch
      </h1>
      <p class="mb-4 text-lg md:text-xl text-slate-800 dark:text-gray-200">
        Reach me via email at
        <a class="font-semibold" href="mailto:hafidnkholis@gmail.com"
          >hafidnkholis@gmail.com</a
        >
        or on my social:
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="https://github.com/kholishafid" target="_blank">
          <div
            class="flex items-center gap-4 hover:bg-[#d1d1c3]/60 dark:hover:bg-white/10 rounded-full p-2 pr-6 cursor-pointer"
          >
            <div class="dark:bg-slate-200 w-fit rounded-full p-2">
              <img
                src="~~/assets/icon/github.svg"
                class="w-6 h-6"
                alt="github"
              />
            </div>
            <p class="text-lg md:text-xl text-slate-700 dark:text-gray-300">
              kholishafid
            </p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/hafid-nur-kholis-833195248/"
          target="_blank"
        >
          <div
            class="flex items-center gap-4 hover:bg-[#d1d1c3]/60 dark:hover:bg-white/10 rounded-full p-2 pr-6 cursor-pointer"
          >
            <div class="dark:bg-slate-200 w-fit rounded-full p-2">
              <img
                src="~~/assets/icon/linkedin.svg"
                class="w-6 h-6"
                alt="github"
              />
            </div>
            <p class="text-lg md:text-xl text-slate-700 dark:text-gray-300">
              Hafid Nur Kholis
            </p>
          </div>
        </a>
        <a href="https://twitter.com/kholis_hafid" target="_blank">
          <div
            class="flex items-center gap-4 hover:bg-[#d1d1c3]/60 dark:hover:bg-white/10 rounded-full p-2 pr-6 cursor-pointer"
          >
            <div class="dark:bg-slate-200 w-fit rounded-full p-2">
              <img
                src="~~/assets/icon/twitter.svg"
                class="w-6 h-6"
                alt="github"
              />
            </div>
            <p class="text-lg md:text-xl text-slate-700 dark:text-gray-300">
              @kholis_hafid
            </p>
          </div>
        </a>
      </div>
    </div>
  </main>
</template>
