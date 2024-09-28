<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :class="className"
    :style="style"
    :title="title"
    :loading="loading"
    :referrerpolicy="referrerpolicy"
    :sizes="sizes"
    :srcset="srcset"
  />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Profile Image'
  },
  width: {
    type: [String, Number],
    default: null
  },
  height: {
    type: [String, Number],
    default: null
  },
  className: {
    type: String,
    default: 'profile-image'
  },
  style: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: String,
    default: ''
  },
  loading: {
    type: String,
    default: 'auto'
  },
  referrerpolicy: {
    type: String,
    default: ''
  },
  sizes: {
    type: String,
    default: ''
  },
  srcset: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.profile-image {
  display: block;
  margin: 10px auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}
</style>