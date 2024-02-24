# Reas 轻量级服务端渲染框架
<img src="https://github.com/Magicalboys/Reas/assets/98963572/564f7d38-4b3e-455c-8100-3459c94d99f5" alt="image" width="300" height="300" center>

基于 React 和 Express 的轻量级服务端渲染框架

## 项目启动

```
pnpm install
pnpm run dev:client
pnpm run dev:server
pnpm run dev:start
```
## 项目亮点
* 借助 `react-helmet` 对 `SEO 效果`进一步优化。
* 借助 前端工具链 的配合模拟了 SSR 服务的`热更新`优化开发体验。
* 基于 `isomorphic-style-loader` 实现 CSS 样式直出，解决 `CSS闪屏问题`。
* 基于 `react-router` 提供路由支持,路由配置模式重构实现了路由组件异步数据的服务端染。
* 基于 `redux-toolkit` 解决了客户端代码对 `异步数据的复用问题`，实现首屏 `异步数据的服务端渲染`。

## SSR 渲染流程
![image](https://github.com/Magicalboys/Reas/assets/98963572/457c5847-4c83-414a-a760-8bdddf05533a)


