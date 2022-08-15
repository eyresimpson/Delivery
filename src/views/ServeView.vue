<!-- eslint-disable @typescript-eslint/no-var-requires -->
<template>
  <el-row class="mb-4" style="margin-bottom: 55px">
    <el-col :span="24">
          <div style="margin-right: 15px">
            <el-result v-if="requestList.length == 0" title="空状态">
              <template #icon>
                <el-icon size="65px" color="#626aef">
                  <Lollipop />
                </el-icon>
              </template>
              <template #sub-title>
                <p>暂无请求记录</p>
              </template>
            </el-result>
            <el-timeline>
              <el-timeline-item v-for="(item, index) in requestList" :key="index" :center="true" color="green"
                icon="SuccessFilled" :timestamp="item.datetime" placement="top">
                <RequestCard :method="item.method" :ip="item.ip" :param="item.param" :data="item.data"></RequestCard>
              </el-timeline-item>
            </el-timeline>
          </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import RequestCard from '@/components/RequestCard.vue'
import storeService from "@/store/service";
import { storeToRefs } from "pinia";

const store = storeService()

 const { requestList } = storeToRefs(store)

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