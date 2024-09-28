<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="social-icon">
    <slot></slot>
  </a>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.social-icon {
  display: inline-block;
  margin: 0 5px;
  width: 24px;
  height: 24px;
}
</style>