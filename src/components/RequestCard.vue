<template>
  <div>
    <el-card>
      <span style="font-size: 20px">{{method}}</span>
      <p >源主机地址: {{ipFilter(ip as string)}}</p>
      <p v-if="param" >请求参数</p>
      <p v-if="data" >请求数据:{{data}}</p>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import {ipFilter} from "@/tools/ip"

defineProps({
  method: String,
  ip: String,
  param:Array,
  data:String
});
</script>

<style>
</style>