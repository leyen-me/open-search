<template>
  <router-view :class="theme"></router-view>
</template>

<script lang="ts" setup>
import useTheme from "@/hooks/useTheme";
const theme = useTheme();
console.log(`
  ____ ___ _____ _____ _____ _____ _____ _____ _____ 
 |  _ \_ _|  ___|  ___|  ___|  ___|  ___|  ___|_   _|
 | | | | || |_  | |_  | |_  | |_  | |_  | |_    | |  
 | |_| | ||  _| |  _| |  _| |  _| |  _| |  _|   | |  
 |____/___|_|   |_|   |_|   |_|   |_|   |_|     |_|  
                                                     
`);
</script>

<style lang="scss">
.dark {
  --el-bg-color: #000000;
  --el-text-color-primary: #ffffff;

  --el-dialog-bg-color: #101010;
  --el-dialog-nav-bg-color: #202020;
  --el-dialog-nav-tag-bg-color: #333333;
  --el-dialog-nav-text-primary-color: #b0b0b0;
  --el-dialog-nav-text-primary-color2: #717171;

  --el-border-color: #222222;

  --el-hover-bg-1: rgb(37, 37, 37);
}

.light {
  --el-bg-color: #ffffff;
  --el-text-color-primary: #101010;

  --el-dialog-bg-color: #f2f2f2;
  --el-dialog-nav-bg-color: #ffffff;
  --el-dialog-nav-tag-bg-color: #cccccc;
  --el-dialog-nav-text-primary-color: #333333;
  --el-dialog-nav-text-primary-color2: #666666;

  --el-border-color: #ddd;
}
</style>
