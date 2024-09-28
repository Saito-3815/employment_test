<template>
  <div class="toggle-container">
    <v-switch v-model="isDarkMode" color="success"></v-switch>
  </div>
</template>

<script setup>
import { VSwitch } from 'vuetify/components'
import { ref, onMounted, watch } from 'vue'
import { useTheme } from 'vuetify'

/// ダークモードの状態を管理するリアクティブ変数
const isDarkMode = ref(false)
const theme = useTheme()

// ダークモードの状態を適用する関数
const applyDarkMode = (value) => {
  console.log('applyDarkMode called with value:', value)
  document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light')
  localStorage.setItem('darkMode', value)
}

// コンポーネントがマウントされたときに実行される処理
onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode')
  if (savedDarkMode !== null) {
    isDarkMode.value = savedDarkMode === 'true'
  } else {
    // システムのデフォルト設定を適用
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  console.log('onMounted: isDarkMode.value =', isDarkMode.value) // デバッグ用ログ
  applyDarkMode(isDarkMode.value)
})

// ダークモードの状態が変わったときに実行される処理
watch(isDarkMode, (newValue) => {
  console.log('watch: newValue =', newValue)
  applyDarkMode(newValue)
})
</script>

<style scoped>
.toggle-container {
  display: flex;
  padding-top: 18px;
}

.toggle-button {
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.toggle-button:hover {
  background-color: #0056b3;
}
</style>

<style>
/* ダークモードのスタイル */
:root.dark-mode {
  --background-color: #121212;
  --text-color: #ffffff;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}
</style>