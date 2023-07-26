<script setup lang="ts">
const commentBlock = ref<HTMLDivElement | null>(null)

const { preference } = useColorMode()

const giscusConfig = {
  src: "https://giscus.app/client.js",
  "data-repo": "kholishafid/kholishafid.github.io",
  "data-repo-id": "R_kgDOJOCoGw",
  "data-category": "Comment",
  "data-category-id": "DIC_kwDOJOCoG84CYE2B",
  "data-mapping": "pathname",
  "data-strict": "0",
  "data-reactions-enabled": "1",
  "data-emit-metadata": "0",
  "data-input-position": "top",
  "data-theme": "noborder_dark",
  "data-lang": "en",
  "data-loading": "lazy",
  crossorigin: "anonymous",
  async: "true",
};

function remove_utterances() {
  const comment = document.querySelector('.utterances')
  if (comment) comment.remove()

  const script = document.querySelector("script[src='https://utteranc.es/client.js']");
  if (script) script.remove()
}

function add_utterances() {
  const script = document.createElement("script");
  Object.entries(giscusConfig).forEach(([attr, value]) => {
    if (attr === "data-theme" && preference === "light") {
      script.setAttribute(attr, 'noborder_light');
    }
    else {
      script.setAttribute(attr, value);
    }
  });
  if (commentBlock.value) commentBlock.value.appendChild(script)
}

onMounted(() => {
  add_utterances()
})

onBeforeUnmount(() => {
  remove_utterances();
})

</script>


<template>
  <div class="w-full rounded-md flex" id="comment-block" ref="commentBlock">
  </div>
</template>
