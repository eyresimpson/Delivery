<template>
  <el-row class="mb-4" style="margin-bottom: 55px">
    <el-col :span="24">
      <el-row>
        <span class="label">Http监听端口</span>
        <el-input prefix-icon="Sunrise" class="opt" v-model="httpPort" placeholder="Http开放的端口，默认8787" />
      </el-row>
      <el-row>
        <span class="label">Http上下文地址</span>
        <el-input prefix-icon="Sunny" class="opt" v-model="context" placeholder="上下文地址" />
      </el-row>
      <el-row>
        <span class="label">Tcp监听端口</span>
        <el-input prefix-icon="PartlyCloudy" class="opt" v-model="httpPort" placeholder="Tcp开放的端口，默认7878" />
      </el-row>
      <el-row>
        <span class="label">启用日志</span>
        <el-radio-group v-model="logType">
          <el-radio :label="3">单文件日志</el-radio>
          <el-radio :label="6">时间日志</el-radio>
          <el-radio :label="9">大小日志</el-radio>
        </el-radio-group>
      </el-row>
    </el-col>
  </el-row>
  <div>
    <div style="position: fixed; right: 10%; bottom: 25px">
      <el-tag class="ml-2" :type="tagColor" style="margin-right: 10px">{{
          tagText
      }}</el-tag>
      <el-button icon="Orange" :round="true" :color="buttonClolr" @click="handleClick">{{ buttonText }}</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, onMounted, ref } from "vue";
import storeService from "@/store/service";
import storeStyle from "@/store/style";
import { storeToRefs } from "pinia";
import httpService from "@/tools/service"

const serviceStore = storeService()
const styleStore = storeStyle()

const { context, httpPort } = storeToRefs(serviceStore)
const { buttonText, buttonClolr, tagText, tagColor } = storeToRefs(styleStore)

let logType = ref("true");

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