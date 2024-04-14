<template>
  <NavBar />
  <Plum />
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 90ch;
      margin: 0 auto;
    "
  >
    <RouterView />
    <Goback v-show="isshow" />
  </div>
</template>
<script setup>
import NavBar from "@/views/navBar/index.vue";
import Plum from "@/views/plum/index.vue";
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import Goback from "./basic/goback.vue";
import router from "./router";
const route = useRoute();
const isshow = ref(true);
watch(
  () => route.path,
  (newVal) => {
    if (newVal === "/") {
      isshow.value = false;
    }else{
      isshow.value = true;
    }
  },
  { immediate: true }
);
router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    isshow.value = false;
  }
  next();
});
// 页面加载动画
const navRef = ref();
navRef.value = document.body;
const updateNavOnLoad = () => {
  if (!navRef.value.classList[0]) {
    navRef.value.classList.add("loaded");
    // 监听动画完成
    navRef.value.addEventListener(
      "transitionend",
      function (e) {
        if (e.target === this && e.propertyName === "width") {
          this.style.setProperty("--progress-opacity", "0");
          // 移除loaded类，没有过渡
          this.classList.remove("loaded");
          setTimeout(() => {
            this.style.setProperty("--progress-opacity", "1");
          }, 0);
        }
      },
      { once: true }
    ); // 保证事件监听器执行一次后移除
  } else {
    navRef.value.classList.remove("loaded");
    navRef.value.classList.add("loaded");
  }
};

onMounted(() => {
  // 将 load 事件的监听添加到 window 对象
  window.addEventListener("load", updateNavOnLoad);
});

// 监视路由变化 如何变化调用函数
watch(
  () => route.path,
  () => {
    updateNavOnLoad();
  }
);
</script>
<style lang="less" >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
input {
  outline: none;
}
body {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol,
    "Noto Color Emoji";
  transition: background-color 0.3s, color 0.3s; /* 这里可以根据需要添加更多需要平滑过渡的属性 */
  position: relative;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 20px; // 修改滚动条宽度
  }

  &::-webkit-scrollbar-track {
    background: #fff; // 滚动条背景色
  }
  &::-webkit-scrollbar-thumb {
    background: #eee; // 滚动条滑块颜色
    height: 10px; // 修改滚动条滑块高度
  }

  &::before {
    content: "";
    width: 0px;
    height: 2px;
    background: #ccc;
    position: absolute;
    top: 0;
    left: 0;
    opacity: var(--progress-opacity);
    transition: width 0.3s ease;
  }
}
body.loaded::before {
  width: 100%;
}
</style>
