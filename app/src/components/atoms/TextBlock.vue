<template>
  <p class="text-block">{{ text }}</p>
</template>

<script setup>
defineProps({
  text: String
});
</script>

<style scoped>
.text-block {
  text-align: center;
}
</style>