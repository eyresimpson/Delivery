<template>
  <div>
    <el-card>
      <span style="font-size: 20px">{{method}}</span>
      <p style="text-align: left">源主机地址: {{ip}}</p>
      <p v-if="param" style="text-align: left">请求参数</p>
      <p v-if="data" style="text-align: left">请求数据:{{data}}</p>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  method: String,
  ip: String,
  param:Array,
  data:String
});
</script>

<style>
</style>