import { createApp } from "vue";
import { pinia } from "@/plugins/pinia.plugin";

// 第三方组件库样式
import "element-plus/dist/index.css";

// ElementPlus框架
import ElementPlus from "element-plus";
// ElementPlusIcon和自定义的全局图标
import AppIcon from "@/plugins/icon.plugin";
// ElementPlus中文语言包
import locale from "element-plus/lib/locale/lang/zh-cn";

// 全局样式
import "@/styles/hover";
import "@/styles";

import App from "./App.vue";
import router from "@/router";

// 创建App
const app = createApp(App);

// 使用pinia作为全局状态管理
app.use(pinia);

// 使用路由
app.use(router);

// ElementPlus的图标
app.use(AppIcon);

// 使用ElementPlus
app.use(ElementPlus, { locale: locale });

// 挂载到页面
app.mount("#app");
