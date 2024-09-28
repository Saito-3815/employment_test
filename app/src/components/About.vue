<template>
  <div v-html="content"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { marked } from 'marked';

const content = ref('');

onMounted(async () => {
  const response = await fetch('/src/assets/markdown/about.md');
  const markdown = await response.text();
  content.value = marked(markdown);
});
</script>

<style scoped>
</style>