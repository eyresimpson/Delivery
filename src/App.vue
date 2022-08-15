<template>
  <nav>
    <router-link to="/">开始</router-link> |
    <router-link to="/serve">网络</router-link> |
    <router-link to="/conf">配置</router-link> |
    <router-link to="/about">关于</router-link>
  </nav>
  <keep-alive>
    <router-view />
  </keep-alive>
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
