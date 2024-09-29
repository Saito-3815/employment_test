<template>
  <aside class="aside">
    <p>サイドメニュー</p>
    <ProfileImage :src="logo" />
    <TextBlock :text="name" class="name" />
    <nav>
    <ul>
      <li @click="showAbout">About</li>
      <li @click="showNews">Hacker News</li>
      <!-- 他のメニュー項目 -->
    </ul>
  </nav>
  </aside>
</template>

<script setup>
import ProfileImage from '../atoms/ProfileImage.vue';
import TextBlock from '../atoms/TextBlock.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


defineProps({
  logo: String,
  name: String,
  jobname: String
});

const router = useRouter();

const showAbout = () => {
  router.push({ name: 'About' });
};

const showNews = () => {
  router.push({ name: 'HackerNews' });
};
</script>

<style scoped>
.aside {
  border: var(--border);
  padding: 10px;
  margin: 10px;
  background-color: var(--body-background);
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  border-radius: 10px;
}

.aside ul {
  list-style: none;
  padding: 0;
}

.aside li {
  cursor: pointer;
}

.name {
  font-weight: normal;
  font-size: 1.2em;
}
</style>  