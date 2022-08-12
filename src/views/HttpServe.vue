<!-- eslint-disable @typescript-eslint/no-var-requires -->
<template>
  <el-row class="mb-4" style="margin-bottom: 55px">
    <el-col :span="24">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="控制台" name="1">
          <el-row>
            <span class="label">服务类型</span>
            <el-input prefix-icon="HelpFilled" class="opt" v-model="port" placeholder="开放的端口，默认8080" />
          </el-row>
          <el-row>
            <span class="label">端口</span>
            <el-input prefix-icon="HelpFilled" class="opt" v-model="port" placeholder="开放的端口，默认8080" />
          </el-row>
          <el-row>
            <span class="label">上下文地址</span>
            <el-input prefix-icon="HelpFilled" class="opt" v-model="context" placeholder="上下文地址" />
          </el-row>
          <el-row>
            <span class="label">返回数据</span>
            <el-input prefix-icon="HelpFilled" class="opt" v-model="port" placeholder="向后台返回的数据" />
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="网络" name="3">
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
        </el-collapse-item>
      </el-collapse>
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
import { ref, reactive, onUnmounted } from "vue";
import express from "express";
import bodyParser from "body-parser";
import RequestCard from '@/components/RequestCard.vue'
import { getDatetime } from "@/tools/datetime"
import { info } from "@/tools/recorder";

const activeNames = ref(["1"]);
const port = ref(8080);
const context = ref("/test");
const state = ref(false);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let requestList: any = reactive([]);
let buttonText = ref("启动服务");
let buttonClolr = ref("#626aef")
let tagText = ref("未运行");
let tagColor = ref("warning");

const app = express();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let serve: any;


onUnmounted(() => {
  if (state.value) {
    serve.close();
  }
});

const handleClick = async () => {
  if (state.value) {
    // app.removeAllListeners();
    serve.close();
    buttonText.value = "启动服务";
    buttonClolr.value = "#626aef";
    state.value = false;
    tagText.value = "已停止";
    tagColor.value = "danger";
  } else {
    buttonText.value = "停用服务";
    buttonClolr.value = "red";
    state.value = true;
    tagText.value = "已启动";
    tagColor.value = "success";
    if (!port.value) {
      port.value = 8377;
    }

    // const { ipcRenderer } = require('electron')

    // port.value = 8377;

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get(context.value, (req, res) => {
      // Get请求只能获取Query
      // 获取参数中的query
      // console.log();
      info("The Query is " + String(req.query))
      requestList.push({
        "datetime": getDatetime(),
        "method": "GET",
        "ip": req.ip,
      })
      // 返回
      res.send({ name: "Aine", age: 24 });
    });

    app.post(context.value, (req, res) => {
      // 获取参数中的body
      console.log("The Body is ", req.body);
      // 获取参数中的query
      console.log("The Query is ", req.query);
      requestList.push({
        "datetime": getDatetime(),
        "method": "Post",
        "ip": req.ip,
        // "param"
        "data": req.body
      })
      // 返回数据
      res.send({ name: "Aine", age: 24 });
    });

    serve = app.listen(port.value, () => {
      console.log(`listening on port ${port.value}`);
    });
  }
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