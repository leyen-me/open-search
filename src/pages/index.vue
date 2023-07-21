<template>
  <div class="home">
    <Header></Header>
    <el-drawer v-model="drawer" :show-close="false" :withHeader="false">
      <div v-for="(v, k) in data.list" :key="k" class="nav-box-item">
        <h4 class="nav-box-title">{{ v.title }}</h4>
        <div class="nav-box">
          <div
            class="nav-item hvr-wobble-vertical"
            @click="open(j.link)"
            v-for="(j, i) in v.list"
            :key="'nav_item' + i"
          >
            <img :src="j.icon" />
            <h4>{{ j.title }}</h4>
            <p>{{ j.desc }}</p>
            <div class="vpn" v-if="j.vpn">vpn</div>
          </div>
        </div>
      </div>
    </el-drawer>
    <div class="search-box">
      <h1 class="logo" @click="handleDrawerClick">
        <img :src="logo" alt="DIFFFFFFT" />
      </h1>
      <div class="search">
        <div class="search-input-box">
          <img
            class="platform-icon"
            :src="searchEngineList.list[searchDefaultEngine].icon"
            @click="handleSelectEngine"
          />
          <input
            v-model="searchStr"
            type="text"
            autocomplete="off"
            autofocus
            @input="searchChange"
            @focus="focus"
            @blur="blur"
          />
          <img
            v-show="showDelete"
            class="delete-icon"
            src="@/assets/icon_delete.png"
            @click="delClick"
          />
          <img
            class="search-icon"
            src="@/assets/icon_search.png"
            @click="search(searchStr)"
          />
        </div>

        <ul v-show="sugs.list.length != 0 && blurFlag">
          <li
            v-for="(v, k) in sugs.list"
            :key="'sug' + k"
            :class="{ 'sug-select': sugsIndex == k }"
            @mousedown="sugClick(v.q as string)"
          >
            {{ v.q }}
          </li>
        </ul>
      </div>
      <div class="center" v-if="sugs.list.length == 0 || !blurFlag">
        <a @click="handleDeveloperClick"> Developer </a>
        <a @click="handleDesignerClick"> Designer </a>
      </div>
    </div>
    <Footer v-show="footerIsShow"></Footer>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import useKeyboard from "@/hooks/useKeyboard";
import $ from "jquery";
import { Debounce } from "@/utils/debounce";
import { ElNotification } from "element-plus";

import DarkLogoImage from "@/assets/logo_dark.png";
import LightLogoImage from "@/assets/logo_light.png";

import BaiduPng from "@/assets/search_engine/baidu.png";
import GoogleEnginePng from "@/assets/search_engine/google.png";
import ZhihuEnginePng from "@/assets/search_engine/zhihu.png";

import meNavData from "@/data/me";
import developmentNavData from "@/data/development";
import designNavData from "@/data/design";
import useTheme, { THEME } from "@/hooks/useTheme";
import { useRouter } from "vue-router";

let theme = useTheme();
let logo = theme === THEME.DARK ? LightLogoImage : DarkLogoImage;
let router = useRouter();
let searchDefaultEngine = ref(0);
let searchEngineList = reactive({
  list: [
    {
      name: "百度",
      url: "https://www.baidu.com/s?wd=",
      icon: BaiduPng,
    },
    {
      name: "谷歌",
      url: "https://www.google.com/search?q=",
      icon: GoogleEnginePng,
    },
    {
      name: "知乎",
      url: "https://www.zhihu.com/search?type=content&q=",
      icon: ZhihuEnginePng,
    },
  ],
});

let showDelete = ref(false);
let drawer = ref(false);
let searchStr = ref("");
let sugsIndex = ref(-1);
let blurFlag = ref(false);
let sugs = reactive({
  list: <any>[],
});
let { footerIsShow } = useKeyboard();
let data = reactive({
  list: <any>[],
});

document.onkeydown = (event) => {
  let e = event || window.event;
  if (e && e.keyCode == 13) {
    if (sugsIndex.value == -1) {
      search(searchStr.value);
    } else {
      search(sugs.list[sugsIndex.value].q);
    }
  }
  if (e && e.keyCode == 38) {
    sugsIndex.value--;
    if (sugsIndex.value < 0) {
      sugsIndex.value = sugs.list.length - 1;
    }
  }
  if (e && e.keyCode == 40) {
    sugsIndex.value++;
    if (sugsIndex.value > sugs.list.length - 1) {
      sugsIndex.value = -1;
    }
  }
};
const focus = function () {
  blurFlag.value = true;
};
const blur = function () {
  blurFlag.value = false;
};
const search = function (str: string) {
  window.open(searchEngineList.list[searchDefaultEngine.value].url + str);
};
const startSug = function (str: string) {
  if (str != searchStr.value) {
    return;
  }
  let url = "https://www.baidu.com/sugrec";
  $.ajax({
    async: false,
    url,
    type: "GET",
    dataType: "jsonp",
    data: {
      wd: str,
      json: 1,
      prod: "pc",
    },
    success: (res: any) => {
      if (res.g) {
        sugs.list = res.g;
        sugsIndex.value = -1;
      }
    },
    error: (err: any) => {
      console.log(err);
    },
  });
};
const searchChange = function (e: any) {
  if (e.target.value === "") {
    sugs.list = [];
    if (!showDelete.value) {
      return;
    }
    showDelete.value = false;
  } else {
    Debounce(startSug, e.target.value);
    if (showDelete.value) {
      return;
    }
    showDelete.value = true;
  }
};
const sugClick = function (str: string) {
  search(str);
};
const delClick = function () {
  searchStr.value = "";
  sugs.list = [];
  showDelete.value = false;
};
const isHttpOrHttpsLink = function (link: string) {
  return link.startsWith("http://") || link.startsWith("https://");
};

const open = function (link: string) {
  if (isHttpOrHttpsLink(link)) {
    window.open(link);
  } else {
    let url = router.resolve({
      path: link,
    });
    window.open(url.href);
  }
};
const handleDrawerClick = function () {
  data.list = meNavData;
  drawer.value = !drawer.value;
};
const handleDeveloperClick = function () {
  data.list = developmentNavData;
  drawer.value = !drawer.value;
};
const handleDesignerClick = function () {
  data.list = designNavData;
  drawer.value = !drawer.value;
};
const handleSelectEngine = function () {
  if (searchDefaultEngine.value + 1 == searchEngineList.list.length) {
    searchDefaultEngine.value = 0;
  } else {
    searchDefaultEngine.value++;
  }
};
</script>

<style lang="scss" scoped>
$def-header-height: 70px;
$def-footer-height: 70px;

::v-deep(.el-drawer__body::-webkit-scrollbar) {
  display: none;
}

.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: var(--el-bg-color);
  overflow: hidden;

  ::v-deep(.el-drawer) {
    width: inherit !important;
  }

  .nav-box-item {
    margin-bottom: 40px;

    .nav-box-title {
      font-weight: 900;
      margin-bottom: 12px;
      color: var(--el-text-color-primary);
    }
  }

  .nav-box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 12px;
    position: relative;

    .nav-item {
      overflow: hidden;
      width: 136px;
      padding: 16px 0;
      cursor: pointer;
      animation-fill-mode: forwards;
      background-color: var(--el-dialog-nav-bg-color);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 4px;

      img {
        height: 36px;
        border-radius: 999px;
        background-color: var(--el-dialog-nav-bg-color);
        padding: 2px;
      }

      h4 {
        width: 80%;
        line-height: 1;
        height: 14px;
        font-size: 14px;
        color: var(--el-dialog-nav-text-primary-color);
        margin-top: 8px;
      }

      p {
        margin-top: 4px;
        line-height: 1;
        height: 12px;
        font-size: 12px;
        width: 80%;
        text-align: center;
        color: var(--el-dialog-nav-text-primary-color2);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .vpn {
      position: absolute;
      top: 0;
      right: 0;
      border-bottom-left-radius: 6px;
      padding: 2px 6px;
      font-size: 12px;
      letter-spacing: 0.5px;
      background-color: var(--el-dialog-nav-tag-bg-color);
      color: var(--el-dialog-nav-text-primary-color);
    }

    .nav-item:hover {
      transition: all 0.4s;
    }
  }

  .search-box {
    width: 92%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 14vh;

    .logo {
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      img {
        height: 100%;
      }
    }

    $search-height: 46px;

    .search {
      max-width: 580px;
      width: 100%;
      min-height: $search-height;
      border-radius: 23px;

      margin-top: 60px;
      display: flex;
      border: 1px solid #000;
      border-color: var(--el-border-color);
      flex-direction: column;
      max-height: 60%;

      .search-input-box {
        display: flex;
        align-items: center;

        .search-icon,
        .delete-icon,
        .platform-icon {
          width: $search-height;
          height: $search-height;
          padding: 15px;
          cursor: pointer;
          object-fit: cover;
        }

        input {
          width: 100%;
          min-height: $search-height;
          padding: 0 0;
          font-size: 16px;
          letter-spacing: 1px;
          color: var(--el-text-color-primary);
        }
      }

      ul {
        padding: 8px 0;
        overflow-y: auto;
        z-index: 1;
        background-color: var(--el-bg-color);
        border-radius: 23px;

        li {
          text-align: left;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          padding: 0 $search-height;
          color: var(--el-dialog-nav-text-primary-color);
          cursor: pointer;
          transition: all 0.35s linear;
        }

        li:hover {
          text-decoration: underline;
          color: var(--el-color-primary);
        }

        .sug-select {
          text-decoration: underline;
          color: var(--el-color-primary);
        }
      }

      ul::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .center {
    display: flex;
    margin-top: 24px;

    a {
      color: var(--el-dialog-nav-text-primary-color);
      background-color: var(--el-dialog-bg-color);
      border-radius: 4px;
      font-size: 14px;
      margin: 0 6px;
      padding: 0 16px;
      line-height: 36px;
      height: 36px;
      min-width: 54px;
      text-align: center;
      cursor: pointer;
      user-select: none;
      text-decoration: none;
    }

    a:link {
      text-decoration: none;
    }

    a:visited {
      text-decoration: none;
    }

    a:hover {
      text-decoration: none;
    }

    a:active {
      text-decoration: none;
    }
  }
}

@media all and (orientation: portrait) {
  .nav-box {
    grid-template-columns: 1fr 1fr !important;
  }
}
</style>
