<template>
  <div class="anchor" @mouseenter="isShow = true" @mouseleave="isShow = false">
    <span class="iconfont icon-caidan"> </span>
    <Transition>
      <div class="item" v-show="isShow">
        <el-anchor :offset="70" direction="horizontal">
          <el-anchor-link :href="`#${locale['JS-Dom']}`">
            {{ locale["JS-Dom"] }}
          </el-anchor-link>
          <el-anchor-link :href="`#${locale['JS-Bom']}`">
            {{ locale["JS-Bom"] }}
          </el-anchor-link>
          <el-anchor-link :href="`#${locale['JSON']}`">
            {{ locale["JSON"] }}
          </el-anchor-link>
          <el-anchor-link :href="`#${locale['Storage']}`">
            {{ locale["Storage"] }}
          </el-anchor-link>
          <el-anchor-link :href="`#${locale['JS-Event']}`">
            {{ locale["JS-Event"] }}
          </el-anchor-link>
          <el-anchor-link :href="`#${locale['JS-Es6']}`">
            {{ locale["JS-Es6"] }}
          </el-anchor-link>
          <el-anchor-link :href="`#${locale['JS-Promise']}`">
            {{ locale["JS-Promise"] }}
          </el-anchor-link>
          <el-anchor-link :href="`#${locale['JS-Throttling']}`">
            {{ locale["JS-Throttling"] }}
          </el-anchor-link>
          <el-anchor-link :href="`#${locale['JS-Copy']}`">
            {{ locale["JS-Copy"] }}
          </el-anchor-link>
        </el-anchor>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import anchorLocale from "../webapi/anchor.json";
import { useLang } from "../anchor/lang.js";
const lang = useLang();
const locale = computed(() => anchorLocale[lang.value]);
const isShow = ref(false);
</script>

<style lang="less" scoped>
.anchor {
  position: fixed;
  left: 30px;
  margin-left: 10px;
  top: 140px;
  .iconfont {
    color: rgb(199, 199, 199);
    font-size: 26px;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
  // 移入移出动画
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.9s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  .item {
    position: absolute;
    /deep/ .el-anchor.el-anchor--horizontal .el-anchor__marker {
      display: none;
    }
    /deep/ .el-anchor.el-anchor--horizontal .el-anchor__list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 0px 0px 6px;
    }
    /deep/ .el-anchor.el-anchor--horizontal .el-anchor__list .el-anchor__item {
      padding-left: 0;
      margin-top: 4px;
    }
    /deep/ .el-anchor .el-anchor__list .el-anchor__item a {
      font-size: 14px;
      color: #374151;
      opacity: 0.75;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>