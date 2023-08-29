<script setup lang="ts">
useHead({
  title: "kholishafid",
  meta: [
    { name: "description", content: "Hafid Nur Kholis personal website." },
  ],
});
</script>

<template>
  <div class="prose prose-p:font-open-sans prose-headings:font-lato max-w-full dark:prose-invert pt-20 pb-6 px-4 md:px-8">
    <article>
      <h1>Hai 🙋‍♂️</h1>
      <p>I'm Hafid, Junior FrontEnd Developer.</p>
      <p>
        🌱 Currently learning React and TypeScript, I'm having fun with Vue and love playing with new frontend
        frameworks like Solid.js.
      </p>
    </article>

    <article>
      <h3>Skillset</h3>
      <div>
        <p>Markup & Languange</p>
        <SkillList>
          <SkillItem label="HTML & CSS" level="Advanced" icon-url="https://api.iconify.design/logos/html-5.svg" />
          <SkillItem label="Javascript" level="Intermediate" icon-url="https://api.iconify.design/logos/javascript.svg" />
          <SkillItem label="Typescript" level="Beginner"
            icon-url="https://api.iconify.design/logos/typescript-icon.svg" />
        </SkillList>
      </div>
      <div>
        <p>Technologies</p>
        <SkillList>
          <SkillItem label="Nuxt.js" level="Beginner" icon-url="https://api.iconify.design/logos/nuxt-icon.svg" />
          <SkillItem label="Next.js" level="Beginner" icon-url="https://api.iconify.design/logos/nextjs-icon.svg" />
          <SkillItem label="Tailwind" level="Intermediate"
            icon-url="https://api.iconify.design/logos/tailwindcss-icon.svg" />
          <SkillItem label="Vue" level="Intermediate" icon-url="https://api.iconify.design/logos/vue.svg" />
          <SkillItem label="React" level="Beginner" icon-url="https://api.iconify.design/logos/react.svg" />
        </SkillList>
      </div>
    </article>

    <article>
      <h3>Get in Touch</h3>
      <p>
        Reach me via email at
        <a class="font-semibold" href="mailto:hafidnkholis@gmail.com">hafidnkholis@gmail.com</a>
        or on my social:
      </p>
      <ul class="prose-li:list-decimal prose-blue">
        <li>
          Github :
          <a href="https://github.com/kholishafid" target="_blank">
            kholishafid
          </a>
        </li>
        <li>
          Linkedin :
          <a href="https://www.linkedin.com/in/hafid-nur-kholis-833195248/" target="_blank">
            Hafid Nur Kholis
          </a>
        </li>
        <li>
          Twitter :
          <a href="https://twitter.com/kholis_hafid" target="_blank">
            @kholis_hafid
          </a>
        </li>
      </ul>
    </article>
  </div>
</template>
