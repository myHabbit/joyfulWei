<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>JS循环</h3>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 35px 0px" data-animate>
            <h3 style="font-size: 20px">基本介绍</h3>
            <span>
              JavaScript中的循环是一种重复执行代码块的结构。常见的循环类型包括for循环、while循环和do…while循环。<br />
            </span>
          </li>
          <li style="--stagger: 3; margin: 0px 0px 40px 0px" data-animate>
            <h3 style="font-size: 20px">for循环</h3>
            <span>
              这是最常见的循环类型，它包含三个主要部分：初始化（通常是一个变量），条件（循环继续的条件）和迭代（每次循环后执行的操作）。<br />
            </span>
          </li>
          <li style="--stagger: 4; margin: 0px 0px 40px 0px" data-animate>
            <h3 style="font-size: 20px">while循环</h3>
            <span>
              这种类型的循环只有一个条件，只要该条件为真，循环就会继续。如果条件从未为真，那么循环体内的代码将不会执行。<br />
            </span>
            <a href=""></a>
          </li>
          <li style="--stagger: 5; margin: 0px 0px 35px 0px" data-animate>
            <h3>do...while循环</h3>
            <span>
              这是一种变体的while循环，它至少执行一次循环体，然后再检查条件。如果条件为真，循环将继续；否则，循环将结束。<br />
            </span>
          </li>
          <li style="--stagger: 6; margin: 0px 0px 35px 0px" data-animate>
            <h3>for...in循环</h3>
            <span>
              这种循环用于遍历对象的属性。在每次迭代中，它将遍历对象的一个属性。
            </span>
          </li>
          <li style="--stagger: 7; margin: 0px 0px 35px 0px" data-animate>
            <h3>for...of循环</h3>
            <span>
              这种循环用于遍历可迭代对象（如数组、字符串、Set、Map等）的元素。在每次迭代中，它将遍历对象的一个元素。
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.basic-head {
  width: 100%;
  height: calc(100% - 90px);
  padding: 20px 20px 10px 20px;
  .basic-swiper {
    width: 100%;
    height: 100%;
    padding: 20px 0px 0px 0px;
    .basic {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      ul {
        height: 100%;
        width: 100%;
        max-width: 70ch;
        margin: 0 auto;
        padding-top: 20px;
        li {
          margin-bottom: 40px;
          h3 {
            font-size: 28px;
            margin-bottom: 20px;
          }
          span {
            font-size: 16px;
            color: #555;
            display: inline-block;
            line-height: 36px;
            .unord-list {
              width: 100%;
              li {
                position: relative;
                margin: 0px 0px 0px 30px;
                &::before {
                  content: "●";
                  position: absolute;
                  left: -20px;
                }
              }
            }
          }
          p {
            span {
              color: red;
            }
          }
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
  --delay: 130ms;
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