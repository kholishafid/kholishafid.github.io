<script setup>
import NuxtIcon from "@/assets/icon/nuxt.svg";
import NextIcon from "@/assets/icon/next.svg";
import HTMLIcon from "@/assets/icon/html.svg";
import JavaScriptIcon from "@/assets/icon/javascript.svg";
import LaravelIcon from "@/assets/icon/laravel.svg";
import MySQLIcon from "@/assets/icon/mysql.svg";
import PHPIcon from "@/assets/icon/php.svg";
import PostgreSQL from "@/assets/icon/postgresql.svg";
import TailwindCSSIcon from "@/assets/icon/tailwind.svg";

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
      <p>Aku Hafid, Junior FrontEnd Developer.</p>
      <p>19 tahun, Lulusan SMK Rekayasa Perangkat Lunak.</p>
      <p>
        Aku suka menerjemahkan desain ke UI, aku enjoy mengerjakanya dengan
        Javascript.
      </p>
      <p>
        🌱 I'm currently learning React and TypeScript, I'm having fun with Vue and love playing with new frontend
        frameworks like Solid.js.
      </p>
    </article>

    <article>
      <h3>Skills</h3>
      <div>
        <p>Markup & Languange</p>
        <SkillList>
          <SkillItem label="HTML & CSS" level="Advance" :icon="HTMLIcon" />
          <SkillItem label="JavaScript" level="Intermediate" :icon="JavaScriptIcon" />
          <SkillItem label="PHP" level="Intermediate" :icon="PHPIcon" />
        </SkillList>
      </div>
      <div>
        <p>Technologies</p>
        <SkillList>
          <SkillItem label="Nuxt.js" level="Intermediate" :icon="NuxtIcon" />
          <SkillItem label="Laravel" level="Beginner" :icon="LaravelIcon" />
          <SkillItem label="Tailwind" level="Intermediate" :icon="TailwindCSSIcon" />
          <SkillItem label="Next.js" level="Beginner" :icon="NextIcon" />
        </SkillList>
      </div>
      <div>
        <p>Database</p>
        <SkillList>
          <SkillItem label="MySQL" level="Intermediate" :icon="MySQLIcon" />
          <SkillItem label="PostgreSQL" level="Beginner" :icon="PostgreSQL" />
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
