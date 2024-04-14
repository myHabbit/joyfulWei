<template>
  <div class="note-vue">
    <h1>Vue.js</h1>
    <div class="content" data-animate style="--enter-stage: 1">
      <h4>基本用法</h4>
      <div class="item">
        <ul>
          <li>
            <span class="iconfont icon-mobanyufa"></span>
            <div style="display: flex; flex-direction: column">
              <router-link to="/jsbasics">Vue3知识介绍</router-link>
              <strong>Vue 3 框架基础知识及特性概述</strong>
            </div>
          </li>
          <li>
            <span class="iconfont icon-mobanyufa"></span>
            <div style="display: flex; flex-direction: column">
              <router-link to="/jsbasics">Vue3基本语法</router-link>
              <strong>Vue 3 框架基本语法及指令概述</strong>
            </div>
          </li>
          <li>
            <span class="iconfont icon-mobanyufa"></span>
            <div style="display: flex; flex-direction: column">
              <router-link to="/jsbasics">Vue生命周期</router-link>
              <strong>Vue 3 框架生命周期钩子函数概述</strong>
            </div>
          </li>
          <li>
            <span class="iconfont icon-mobanyufa"></span>
            <div style="display: flex; flex-direction: column">
              <router-link to="/jsbasics">Vue组件选项</router-link>
              <strong>Vue 3 框架组件选项概述</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="content"
      data-animate
      style="
        --enter-stage: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
      "
    >
      <h4 style="height: 30px; text-align: center">vue状态管理库介绍</h4>
      <div class="item">
        <ul>
          <li>
            <span class="iconfont icon-zhuangtaiguanli"></span>
            <div style="display: flex; flex-direction: column">
              <router-link to="/jsbasics">Vuex介绍</router-link>
              <strong>Vuex状态管理库的基本介绍与使用</strong>
            </div>
          </li>
          <li>
            <span class="iconfont icon-zhuangtaiguanli"></span>
            <div style="display: flex; flex-direction: column">
              <router-link to="/jsbasics">Pinia介绍</router-link>
              <strong>Pinia状态管理库的基本介绍与使用</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="content"
      data-animate
      style="
        --enter-stage: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
      "
    >
      <h4 style="height: 30px; text-align: center">vue-router路由介绍</h4>
      <div class="item">
        <ul>
          <li>
            <span class="iconfont icon-dongtailuyou"></span>
            <div style="display: flex; flex-direction: column">
              <router-link to="/jsbasics">spa单页面应用介绍</router-link>
              <strong>Vue 3 框架单页面应用概述</strong>
            </div>
          </li>
          <li>
            <span class="iconfont icon-dongtailuyou"></span>
            <div style="display: flex; flex-direction: column">
              <router-link to="/jsbasics">vue-router路由介绍</router-link>
              <strong>vue-router路由基本介绍与使用</strong>
            </div>
          </li>
          <li>
            <span class="iconfont icon-dongtailuyou"></span>
            <div style="display: flex; flex-direction: column">
              <router-link to="/jsbasics">vue-router路由传参</router-link>
              <strong>vue-router路由路由传参及动态路由概述</strong>
            </div>
          </li>
          <li>
            <span class="iconfont icon-dongtailuyou"></span>
            <div style="display: flex; flex-direction: column">
              <router-link to="/jsbasics">路由守卫</router-link>
              <strong>vue-router路由守卫概述</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>

<style lang="less" scoped>
.note-vue {
  width: 100%;
  height: 100%;

  h1 {
    text-align: center;
    font-size: 40px;
  }

  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    h4 {
      color: #949393;
      font-weight: 600;
      margin: 24px 0px 8px 0px;
      line-height: 30px;
    }

    .item {
      min-width: 70%;
      max-width: 100%;
      cursor: pointer;
      transition: all 0.2s ease-out;

      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        padding: 8px 0px;

        li {
          width: 350px;
          max-width: 100%;
          display: flex;
          align-items: center;
          margin: 25px 0px 0px 20px;
          height: 72px;

          &:hover {
            span,
            a,
            strong {
              opacity: 1;
            }

            &::before {
              content: "";
              width: 320px;
              height: 48px;
              padding: 8px;
              max-width: 100%;
              position: absolute;
              border-radius: 6px;
              background: rgb(247, 247, 247);
              opacity: 0.6;
              z-index: -99;
            }
          }
        }
      }

      span {
        color: #000000;
        opacity: 0.4;
        margin-right: 4px;
        font-size: 27px;
        margin-right: 16px;
      }

      a {
        color: #000000;
        font-size: 18px;
        letter-spacing: 3px;
        opacity: 0.6;
      }

      strong {
        font-weight: 400;
        font-size: 14px;
        margin-top: 4px;
        letter-spacing: 3px;
        opacity: 0.5;
        color: #000000;
      }
    }
  }
}

@media (max-width: 540px) {
}

@keyframes enter {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

[data-animate] {
  --stagger: 0;
  --delay: 110ms;
  --start: 0ms;
}

@media (prefers-reduced-motion: no-preference) {
  [data-animate] {
    animation: enter 0.6s both;
    animation-delay: calc(var(--stagger) * var(--delay) + var(--start));
  }
}

[data-animation-controller="false"] [data-animate] {
  animation: none;
}

.slide-enter-content {
  counter-reset: enter-count;
}

.slide-enter-content > p {
  --stagger: 0;
  --delay: 150ms;
  --start: 0ms;
  animation: slide-enter 1s both 1;
  animation-delay: calc(var(--start) + var(--stagger) * var(--delay));
}

.slide-enter-content > p {
  counter-increment: enter-count;
  --stagger: counter(enter-count);
}
</style>