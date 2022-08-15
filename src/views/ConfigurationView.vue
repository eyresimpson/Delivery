<template>
  <el-row class="mb-4" style="margin-bottom: 55px">
    <el-col :span="24">
      <el-row>
        <span class="label">服务类型</span>
        <el-input prefix-icon="HelpFilled" class="opt" v-model="httpPort" placeholder="开放的端口，默认8080" />
      </el-row>
      <el-row>
        <span class="label">端口</span>
        <el-input prefix-icon="HelpFilled" class="opt" v-model="httpPort" placeholder="开放的端口，默认8080" />
      </el-row>
      <el-row>
        <span class="label">上下文地址</span>
        <el-input prefix-icon="HelpFilled" class="opt" v-model="context" placeholder="上下文地址" />
      </el-row>
      <el-row>
        <span class="label">返回数据</span>
        <el-input prefix-icon="HelpFilled" class="opt" v-model="httpPort" placeholder="向后台返回的数据" />
      </el-row>
    </el-col>
  </el-row>
  <div>
    <div style="position: fixed; left: 40%; bottom: 25px">
      <el-tag class="ml-2" :type="tagColor" style="margin-right: 10px">{{
          tagText
      }}</el-tag>
      <el-button icon="Orange" :round="true" :color="buttonClolr" @click="handleClick">{{ buttonText }}</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {  onUnmounted, onMounted } from "vue";
import storeService from "@/store/service";
import storeStyle from "@/store/style";
import { storeToRefs } from "pinia";
import httpService from "@/tools/service"

const serviceStore = storeService()
const styleStore = storeStyle()

const { context, httpPort } = storeToRefs(serviceStore)
const { buttonText, buttonClolr, tagText, tagColor } = storeToRefs(styleStore)


onMounted(() => {
  if (serviceStore.httpServiceState == "running") {
    styleStore.buttonText = "停用服务";
    styleStore.buttonClolr = "red";
    styleStore.tagText = "已启动";
    styleStore.tagColor = "success";
  } else {
    styleStore.buttonText = "启动服务";
    styleStore.buttonClolr = "#626aef";
    styleStore.tagText = "已停止";
    styleStore.tagColor = "danger";
  }
})

onUnmounted(() => {
  if (serviceStore.httpServiceState == "running") {
    // serveObject.close();
    // httpService.destroyHttpServer();
  }
});

const handleClick = async () => {
  httpService.createHttpServer()
};
</script>

<style>
.label {
  margin-left: 5px;
  text-align: left;
}

.el-row {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>