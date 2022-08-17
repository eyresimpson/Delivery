// 系统初始化（会初始化log和conf文件夹）

import { info } from "@/tools/recorder"
const init = () => {
    info("检查项目目录结构...")
    info("检查conf...")
    info("初始化完成...")
}

export{
    init
}