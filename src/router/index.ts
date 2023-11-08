import {createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw} from "vue-router";
import routes from "~pages";

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
