import { defineStore } from "pinia";
// import { reactive,ref } from "vue";
const storeStyle = defineStore('style', {
    state: () => ({
        buttonText: "启动服务",
        buttonClolr: "#626aef",
        tagText: "未运行",
        tagColor: "warning",
    }),
    getters: {},
    actions: {}
})

export default storeStyle

/*

let buttonText = ref("启动服务");
let buttonClolr = ref("#626aef")
let tagText = ref("未运行");
let tagColor = ref("warning");


*/