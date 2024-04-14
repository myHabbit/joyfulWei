<template>
  <div class="note-html">
    <ul>
      <div class="select-none">
        <span>2024</span>
      </div>
      <li style="--stagger: 1; margin: 30px 20px 0px" data-animate>
        <router-link to="/jsbasics"
          >JS 基础知识介绍<span>3月19日</span></router-link
        >
      </li>
      <li style="--stagger: 2; margin: 30px 20px 0px" data-animate>
        <router-link to="/notedatatype" style="--stagger: 2"
          >JS 变量以及数据类型<span>3月19日</span></router-link
        >
      </li>
      <li style="--stagger: 3; margin: 30px 20px 0px" data-animate>
        <router-link to="/noteoperator"
          >JS 运算符介绍<span>3月19日</span></router-link
        >
      </li>
      <li style="--stagger: 4; margin: 30px 20px 0px" data-animate>
        <router-link to="/noteloop"
          >JS 循环语句<span>3月19日</span></router-link
        >
      </li>
      <li style="--stagger: 5; margin: 30px 20px 0px" data-animate>
        <router-link to="/noteobject"
          >JS 数组函数对象<span>3月19日</span></router-link
        >
      </li>
      <li style="--stagger: 6; margin: 30px 20px 0px" data-animate>
        <router-link to="/noteapi">Web Api介绍<span>3月19日</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.note-html {
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