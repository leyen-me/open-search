import {defineConfig, loadEnv} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Pages from "vite-plugin-pages";

export default defineConfig(({command, mode, ssrBuild}) => {
    const env = loadEnv(mode, process.cwd());
    const {VITE_APP_ENV} = env;
    return {
        base: VITE_APP_ENV === "production" ? "./" : "/",
        plugins: [
            vue(),
            Pages({
                dirs: "src/pages",
                exclude: ["**/components/*.vue"],
            }),
        ],
        resolve: {
            alias: {
                "~": path.resolve(__dirname, "./"),
                "@": path.resolve(__dirname, "./src"),
            },
            extensions: [
                ".mjs",
                ".js",
                ".ts",
                ".jsx",
                ".tsx",
                ".json",
                ".vue",
                ".css",
                ".scss",
            ],
        },
        server: {
            port: 3000,
            host: "0.0.0.0",
            open: true,
        },
    };
});
