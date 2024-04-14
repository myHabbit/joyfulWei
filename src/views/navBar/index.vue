<template>
  <div class="nav">
    <ul>
      <li><router-link to="/">前言</router-link></li>
      <li><router-link to="/notes">前端笔记</router-link></li>
      <li><router-link to="/wrongnote">错题日记</router-link></li>
      <li><router-link to="/interview">面试资料</router-link></li>
      <li><router-link to="/summary">难点总结</router-link></li>
      <li class="iconfont icon-zhankaicaidan"  style="font-size: 26px;"></li>
      <li class="iconfont icon-quanping" @click="btnCommonFunc"></li>
      <li
        style="font-size: 22px"
        class="iconfont icon-github"
        @click="goGitHub"
      ></li>
      <li
        style="font-size: 23px"
        class="iconfont"
        :class="data ? 'icon-baitian' : 'icon-heiye'"
        @click="toggleDark"
      ></li>
    </ul>
    <logo  style="float: left" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Logo from "@/views/logo/index.vue";
import useCounterStore from "@/stores/counter";
const store = useCounterStore();
function updateTheDOMSomehow(data) {
  // 根据传入的参数切换样式
  if (data) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// 定义数据
let lastClick = ref(null);
const data = ref();
watch(
  () => store.isDark,
  (newValue) => {
    data.value = newValue;
  },
  { immediate: true }
);

// 暗黑模式切换
const toggleDark = (event) => {
  store.isDark = !store.isDark;
  // 储存最后一次点击
  lastClick.value = event;
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data.value);
    return;
  }

  const x = lastClick.value?.clientX ?? innerWidth / 2;
  const y = lastClick.value?.clientY ?? innerHeight / 2;
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );

  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data.value);
  });

  const animation = document.documentElement;
  transition.ready.then(() => {
    // 切换clipPath的动画效果，根据isDark的值决定动画的起始和结束状态
    const clipPathStart = data.value
      ? `circle(${endRadius}px at ${x}px ${y}px)`
      : `circle(0 at ${x}px ${y}px)`;
    const clipPathEnd = data.value
      ? // ? `circle(${endRadius}px at ${x}px ${y}px)`
        // : `circle(0 at ${x}px ${y}px)`;
        `circle(0 at ${x}px ${y}px)`
      : `circle(${endRadius}px at ${x}px ${y}px)`;

    animation.animate(
      {
        clipPath: [clipPathStart, clipPathEnd],
      },

      {
        duration: 400,
        easing: "ease-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  });
};

// 全屏
const isFullscreen = ref(false);
// 切换全屏小屏
const btnCommonFunc = () => {
  const element = document.documentElement;
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      isFullscreen.value = false; // 切换为非全屏状态
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
      isFullscreen.value = false;
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      isFullscreen.value = false;
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
      isFullscreen.value = false;
    }
  } else {
    if (element.requestFullscreen) {
      element.requestFullscreen();
      isFullscreen.value = true; // 切换为全屏状态
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
      isFullscreen.value = true;
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
      isFullscreen.value = true;
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
      isFullscreen.value = true;
    }
  }
};
</script>

<style lang="less" >
@import url("../../css/dark.css");
.nav {
  width: 100vw;
  height: 90px;
  clear: both;
  line-height: 90px;
  display: flex;
  padding: 0px 30px 0px 40px;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  ul {
    display: grid;
    grid-gap: 10px;
    grid-auto-flow: column;
    justify-self: end;
    li {
      text-align: center;
      cursor: pointer;
      margin-right: 20px;
      color: #949393;

      a {
        font-size: 16px;
        padding: 0;
        color: #949393;
        &:hover {
          color: #374152;
        }
      }
    }
    .iconfont {
      font-size: 19px;
      color: #949393;
      &:hover {
        color: #374152;
      }
    }
  }
}
// 适配移动端
@media (max-width: 780px) {
  .nav li {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .nav ul li:nth-last-child(-n + 3) {
    font-size: 18px !important;
  }
  .nav ul li:nth-child(-n+5) {
    display: none;
  }

}
@media (max-width: 360px){
  .w-40{
    display: none !important;
  }
}
// 动画样式
::view-transition-image-pair(root) {
  isolation: auto;
  animation: colorTransition 1s ease-in-out infinite;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}
</style>