<script setup>
import logo from './assets/images/avatar.png';
</script>

<template>
  <div class="layout">
    <div class="sublayout">
      <aside class="aside">
        <p>サイドメニュー</p>
        <img :src="logo" alt="Profile Image" class="profile-image" />
        <h3 class="name">Your Name</h3>
        <p class="jobname">役職名</p>
      </aside>
      <div class="main-content">
        <header class="header">
          <p>ヘッダー</p>
        </header>
        <main class="main">
          <p>メイン</p>
        </main>
      </div>
    </div>
    <footer class="footer">
      <p>フッター</p>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  background-color: white;
  color: black;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.sublayout {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}

.header {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: calc(100% - 22px);
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
}

.main {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: calc(100% - 22px);
  background-color: white;
  border-radius: 10px;
  height: 100%;
  box-sizing: border-box;
}

.footer {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: calc(100% - 22px);
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
}

.aside {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  border-radius: 10px;
}

.profile-image {
  display: block;
  margin: 10px auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.name {
  font-weight: normal;
  font-size: 1.2em;
  text-align: center;
}

.jobname {
  text-align: center;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex: 4;
  overflow: hidden;
}
</style>
