## 介绍

Delivery 是一种用于测试的服务器/客户端软件，依赖于 `Electronic` 技术，实现了桌面端软件的应用，可以创建Http/Https/Socket(Tcp)服务器，也可发送Tcp/Http(Get/Post/Put/Delete等)请求，未来计划允许运行Python或Shell的脚本，以便于更好的测试开发体验

### 主要功能点
- 服务端：允许用户创建各种类型的服务器
- 客户端：运行发送多种不同的网络请求

## 主要技术与框架
- 基础：Vue3 + Electron + Typescript
- 前端状态存储：Pinia
- 前端路由：vue-router
- 日志：winston
- 日期时间处理：silly-datetime
- 前端图形化组件：ElementUI Plus
- 服务端：Express
- 客户端：Axios

## 开发

### 安装依赖

```shell
npm install
```

### 运行测试

```shell
npm run start
```
