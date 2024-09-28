<template>
  <header class="header">
    <p>ヘッダー</p>
    <div class="right-content">
      <div class="social-icons">
        <SocialIcon url="https://github.com/Saito-3815">
          <GitHubIcon />
        </SocialIcon>
        <SocialIcon url="https://x.com/">
          <XIcon />
        </SocialIcon>
        <SocialIcon url="https://www.linkedin.com/">
          <LinkedInIcon />
        </SocialIcon>
        <SocialIcon url="https://www.facebook.com/">
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon url="https://line.me/ja/">
          <LineIcon />
        </SocialIcon>
        <SocialIcon url="https://mixi.jp/">
          <MixiIcon />
        </SocialIcon>
      </div>
      <ToggleButton />
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import SocialIcon from '../atoms/SocialIcon.vue'
import GitHubIcon from '../atoms/icons/GitHubIcon.vue'
import XIcon from '../atoms/icons/XIcon.vue'
import LinkedInIcon from '../atoms/icons/LinkedInIcon.vue'
import FacebookIcon from '../atoms/icons/FacebookIcon.vue'
import LineIcon from '../atoms/icons/LineIcon.vue'
import MixiIcon from '../atoms/icons/MixiIcon.vue'
import ToggleButton from '../atoms/ToggleButton.vue'
</script>

<style scoped>
.header {
  border: var(--border);
  padding: 10px;
  margin: 10px;
  width: calc(100% - 22px);
  background-color: var(--body-background);
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right-content {
  display: flex;
  align-items: center;
  gap: 20px; 
}

.social-icons {
  display: flex;
  gap: 10px;
}
</style>
