import { defineStore } from "pinia";
import { reactive,ref } from "vue";
import * as http from 'http';
const storeService = defineStore('service', {
    state: () => ({
        // Http服务维持对象
        httpServiceObject: {} as  http.Server,
        // Tcp服务维持对象
        tcpServiceObject: null,
        // Http服务状态
        httpServiceState: ref("stopped"),
        // Tcp服务状态
        TcpServiceState: ref("stopped"),
        // Http监听端口
        httpPort: ref(8787),
        // Tcp监听端口
        tcpPort: ref(7878),
        // Http上下文
        context: ref("/tests"),
        // defaultEcho:
        requestList: reactive([]) as any,
    }),
    getters: {},
    actions: {}
})

export default storeService