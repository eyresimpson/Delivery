<template>
  <nav>
    <router-link to="/serve">监听</router-link> |
    <router-link to="/about">请求</router-link> |
    <router-link to="/">工具</router-link> |
    <router-link to="/">配置</router-link>
  </nav>
  <router-view />
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
onMounted(() => {
  // console.log("初始化开始");
  // console.log("初始化结束");
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #9fb942;
}
</style>
