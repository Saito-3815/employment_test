<template>
  <main class="main">
    <p>メイン</p>
    <div class="content" v-html="content"></div>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { marked } from 'marked';
import { useRoute } from 'vue-router';

const content = ref('');
const route = useRoute();

marked.setOptions({
  gfm: true,
  breaks: true,
  sanitize: true,
});

const loadMarkdown = async () => {
  const response = await fetch('/markdown/about.md');
  const markdown = await response.text();
  content.value = marked(markdown);
};

onMounted(() => {
  loadMarkdown();
});

watch(route, (newRoute) => {
  if (newRoute && newRoute.name === 'About') {
    loadMarkdown();
  }
});
</script>

<style scoped>
.main {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: calc(100% - 22px);
  background-color: white;
  border-radius: 10px;
  height: 100%;
  box-sizing: border-box;
  overflow: auto; 
}

.content {
  max-height: 100%; 
  overflow: auto; 
}
</style>