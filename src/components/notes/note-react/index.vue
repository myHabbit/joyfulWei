<template>
  <div class="note-vue">
    <h1>React.js</h1>
    <p>React知识点汇总</p>
    <div class="content" data-animate style="--enter-stage: 1;">
      <ul>
        <li data-animate style="--enter-stage: 1;">
          <span class="iconfont icon-mobanyufa"></span>
          <div style="display: flex;flex-direction: column;">
            <router-link to="/jsbasics">Vue3知识介绍</router-link>
            <strong>Vue 3 框架基础知识及特性概述</strong>
          </div>
        </li>
        <li v-for="item in 7" :key="item" data-animate style="--enter-stage: 2;">
          <span class="iconfont icon-mobanyufa"></span>
          <div style="display: flex;flex-direction: column;">
            <router-link to="/jsbasics">Vue3知识介绍</router-link>
            <strong>Vue 3 框架基础知识及特性概述</strong>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.note-vue {
  width: 100%;
  height: auto;

  h1 {
    font-size: 40px;
    padding-left: 72px;
  }

  p {
    color: #555555;
    padding: 10px 0px 0px 74px;
    opacity: .8;
  }

  .content {
    width: 100%;
    height: 100%;

    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
      padding-left: 26px;

      li {
        width: 350px;
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 25px 0px 0px 20px;
        height: 90px;
        cursor: pointer;

        span {
          color: #000000;
          opacity: .4;
          margin-right: 4px;
          font-size: 27px;
          margin-right: 16px;
        }

        a {
          color: #000000;
          font-size: 18px;
          letter-spacing: 3px;
          opacity: .6;

        }

        strong {
          font-weight: 400;
          font-size: 14px;
          margin-top: 4px;
          letter-spacing: 3px;
          opacity: .5;
          color: #000000;
        }

        &:hover {

          span,
          a,
          strong {
            opacity: 1;
          }

          &::before {
            content: '';
            width: 320px;
            height: 80px;
            padding: 8px;
            max-width: 100%;
            position: absolute;
            border-radius: 6px;
            background: rgb(247, 247, 247);
            opacity: .6;
            z-index: -99;
          }
        }
      }
    }
  }
}

@media (max-width: 540px) {}

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

.slide-enter-content>p {
  --stagger: 0;
  --delay: 150ms;
  --start: 0ms;
  animation: slide-enter 1s both 1;
  animation-delay: calc(var(--start) + var(--stagger) * var(--delay));
}

.slide-enter-content>p {
  counter-increment: enter-count;
  --stagger: counter(enter-count);
}
</style>