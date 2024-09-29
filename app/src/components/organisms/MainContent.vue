<template>
  <main class="main">
    <p>メイン</p>
    <div v-if="route && route.name === 'About'" v-html="content"></div>
    <div v-else-if="route && route.name === 'HackerNews'">
      <h1>Hacker News - 最新の50件</h1>
      <ul class="hacker-news-list">
        <li v-for="item in newsItems" :key="item.id">
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div v-else v-html="content"></div>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { marked } from 'marked'
import { useRoute } from 'vue-router'
import axios from 'axios'
import 'process/browser'

const content = ref('')
const newsItems = ref([])
const route = useRoute()

marked.setOptions({
  gfm: true,
  breaks: true,
  sanitize: true
})

const loadMarkdown = async () => {
  const response = await fetch('/markdown/about.md')
  const markdown = await response.text()
  content.value = marked(markdown)
}

const fetchHackerNews = async () => {
  try {
    const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
    const top50Ids = response.data.slice(0, 50)
    const newsPromises = top50Ids.map((id) =>
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    )
    const newsResponses = await Promise.all(newsPromises)
    newsItems.value = newsResponses.map((res) => res.data)
  } catch (error) {
    console.error('Error fetching Hacker News:', error)
  }
}

onMounted(() => {
  loadMarkdown()
})

watch(route, (newRoute) => {
  if (newRoute && newRoute.name === 'About') {
    loadMarkdown()
  } else if (newRoute && newRoute.name === 'HackerNews') {
    fetchHackerNews()
  }
})
</script>

<style scoped>
.main {
  border: var(--border);
  padding: 10px;
  margin: 10px;
  width: calc(100% - 22px);
  background-color: var(--body-background);
  border-radius: 10px;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.content {
  max-height: 100%;
  overflow: auto;
}

.hacker-news-list {
  padding-left: 20px;
}
</style>
