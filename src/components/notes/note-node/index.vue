<template>
  <div class="note-css">
    <ul>
      <div class="select-none">
        <span>2024</span>
      </div>
      <li style="--stagger: 1; margin: 30px 20px 0px" data-animate>
        <router-link to="/cssbasics"
          >CSS 基础知识介绍<span>1月30日</span></router-link
        >
      </li>
      <li style="--stagger: 2; margin: 30px 20px 0px" data-animate>
        <router-link to="/noteselect" style="--stagger: 2"
          >CSS 选择器介绍<span>1月30日</span></router-link
        >
      </li>
      <li style="--stagger: 3; margin: 30px 20px 0px" data-animate>
        <router-link to="/notetextbac"
          >CSS 文本背景等基础属性介绍<span>1月30日</span></router-link
        >
      </li>
      <li style="--stagger: 4; margin: 30px 20px 0px" data-animate>
        <router-link to="/notebox"
          >CSS 盒子模型（布局）<span>1月30日</span></router-link
        >
      </li>
      <li style="--stagger: 5; margin: 30px 20px 0px" data-animate>
        <router-link to="/notefloat"
          >CSS 浮动、伪元素介绍<span>1月30日</span></router-link
        >
      </li>
      <li style="--stagger: 6; margin: 30px 20px 0px" data-animate>
        <router-link to="/noteposition"
          >CSS 定位<span>1月30日</span></router-link
        >
      </li>
      <li style="--stagger: 7; margin: 30px 20px 0px" data-animate>
        <router-link to="/noteflex"
          >CSS flex布局<span>1月30日</span></router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.note-css {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  .select-none {
    width: 100%;
    height: 60px;
    position: relative;
    span {
      font-size: 120px;
      font-weight: 800;
      color: transparent;
      -webkit-text-stroke-width: 1px; /* 文字边框宽度 */
      -webkit-text-stroke-color: #686868; /* 文字边框颜色 */
      position: absolute;
      top: 10px;
      left: -46px;
      opacity: 0.1;
      z-index: -999;
    }
  }
  ul {
    li {
      a {
        color: rgb(102, 102, 102);
        font-size: 18px;
        letter-spacing: 3px;
        &:hover {
          color: #000;
          span {
            opacity: 1;
            color: #686868;
          }
        }

        span {
          margin-left: 30px;
          font-size: 14px;
          color: rgba(102, 102, 102, 0.5);
        }
      }
    }
  }
}

// 动画
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