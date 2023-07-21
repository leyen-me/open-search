/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "jquery";

type ThemeConfig = "light" | "dark";

interface Theme {
  //背景颜色
  bg_color: string;
  //字体颜色
  font_color: string;

  //搜索框边框色
  search_border_color: string;
  //搜索框内容颜色
  search_font_color: string;
  //sug选择颜色
  search_sug_select_color: string;

  //快捷按钮颜色
  quick_btn_bg_color: string;
  //快捷按钮字体颜色
  quick_btn_font_color: string;

  menu_btn_hover_color: string;
  //菜单hover背景
  menu_hover_color: string;

  //抽屉背景
  drawer_bg_color: string;
  //抽屉盒子背景
  drawer_nav_bg_color: string;
  //抽屉导航标题文字颜色
  drawer_nav_title_color: string;
  //抽屉导航描述文字颜色
  drawer_nav_desc_color: string;

  //vpn背景颜色
  drawer_nav_vpn_bg_color: string;
  //vpn字体颜色
  drawer_nav_vpn_font_color: string;

  popper_bg_color: string;
  popper_border_color: string;
  popper_font_color: string;

  // footer字体颜色
  footer_a_color: string;
}
