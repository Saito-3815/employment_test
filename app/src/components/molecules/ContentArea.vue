<template>
  <div class="main-content">
    <Header />
    <MainContent />
  </div>
</template>

<script setup>
import Header from '../organisms/Header.vue';
import MainContent from '../organisms/MainContent.vue';
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  flex: 4;
  overflow: hidden;
}
</style>
