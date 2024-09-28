<template>
  <div class="layout">
    <div class="sublayout">
      <SideMenu :logo="logo" name="Your Name" jobname="役職名"/>
      <ContentArea />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import SideMenu from '../components/molecules/SideMenu.vue';
import ContentArea from '../components/molecules/ContentArea.vue';
import Footer from '../components/organisms/Footer.vue';
import logo from '../assets/images/avatar.png'
</script>

<style scoped>
.layout {
  display: flex;
  background-color: var(--body-background);
  color: var(--main-text);
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.sublayout {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}
</style>