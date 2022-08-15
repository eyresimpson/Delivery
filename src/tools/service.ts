import storeService from "@/store/service";
import storeStyle from "@/store/style";
import express from "express";
import bodyParser from "body-parser";
import { getDatetime } from "@/tools/datetime"
import { info } from "@/tools/recorder";
import { storeToRefs } from "pinia";
import { toRaw } from '@vue/reactivity';

const app = express();

const createHttpServer = async () => {
    const serviceStore = storeService()
    const styleStore = storeStyle()
    const { httpServiceObject } = storeToRefs(serviceStore)

    if (serviceStore.httpServiceState == "running") {
        toRaw(serviceStore.httpServiceObject).close();
        styleStore.buttonText = "启动服务";
        styleStore.buttonClolr = "#626aef";
        styleStore.tagText = "已停止";
        styleStore.tagColor = "danger";
        serviceStore.httpServiceState = "stopped";
    } else {
        styleStore.buttonText = "停用服务";
        styleStore.buttonClolr = "red";
        serviceStore.httpServiceState = "running";
        styleStore.tagText = "已启动";
        styleStore.tagColor = "success";

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        app.get(serviceStore.context, (req, res) => {
            // Get请求只能获取Query
            // 获取参数中的query
            // console.log();
            info("The Query is " + String(req.query))
            serviceStore.requestList.push({
                "datetime": getDatetime(),
                "method": "GET",
                "ip": req.ip,
            })
            // 返回
            res.send({ name: "Aine", age: 24 });
        });

        app.post(serviceStore.context, (req, res) => {
            // 获取参数中的body
            console.log("The Body is ", req.body);
            // 获取参数中的query
            console.log("The Query is ", req.query);
            serviceStore.requestList.push({
                "datetime": getDatetime(),
                "method": "Post",
                "ip": req.ip,
                // "param"
                "data": req.body
            })
            // 返回数据
            res.send({ name: "Aine", age: 24 });
        });
        serviceStore.httpServiceObject = await app.listen(serviceStore.httpPort, () => {
            console.log(`listening on port ${serviceStore.httpPort}`);
        });
    }
}

const destroyHttpServer = () => {
    const serviceStore = storeService()
    toRaw(serviceStore.httpServiceObject).close();
}

export default {
    createHttpServer, destroyHttpServer
}