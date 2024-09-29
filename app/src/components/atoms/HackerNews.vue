<template>
  <div>
    <h1>Hacker News - 最新の50件</h1>
    <ul>
      <li v-for="item in newsItems" :key="item.id">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const newsItems = ref(route.params.newsItems || []);
</script>