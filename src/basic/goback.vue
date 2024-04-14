<template>
  <div class="goback" @click="goback">
    <span class="iconfont icon-icon"></span>
    <a href="#">cd ..</a>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goback = () => {
  router.go(-1);
};
</script>

<style lang="less" scoped>
.goback {
  height: 30px;
  margin: 40px 0px 70px 0px;
  line-height: 30px;
  padding-left: 10px;
  cursor: pointer;
  color: #000000;
  opacity: 0.5;
  .icon-icon,
  a {
    color: #000000;
    opacity: 0.5;
  }
  &:hover {
    opacity: 1;
  }
}
</style>