<template>
  <div class="header">
    <el-button class="menu">
      <img class="menu-img" src="@/assets/icon_menu.svg" />
    </el-button>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
$def-header-height: 70px;
$def-footer-height: 70px;

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: $def-header-height;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 4%;

  .menu {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--el-bg-color);
    .menu-img {
      width: 16px;
      height: 16px;
    }
  }

  .menu:active {
    border: 0;
  }

  .menu:hover {
    border: 0;
  }

  .nav-item {
    margin-right: 24px;
  }
}
</style>
