<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul style="position: relative">
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>JS运算符介绍</h3>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 40px 0px" data-animate>
            <span
              ><strong>什么是运算符：</strong> JavaScript
              中的运算符用于执行各种操作，例如算术运算、赋值、比较等。</span
            >
            <span>
              <ul class="unord-list">
                <li>
                  <strong
                    >算术运算符：
                    <ol>
                      <li>+：加法，用于将两个数相加</li>
                      <li>-：减法，用于将一个数减去另一个数</li>
                      <li>*：乘法，用于将两个数相乘</li>
                      <li>/：除法，用于将一个数除以另一个数</li>
                      <li>%：取模，返回除法的余数</li>
                      <li>++：递增，将操作数的值增加1</li>
                      <li>--：递减，将操作数的值减少1</li>
                    </ol>
                  </strong>
                </li>
                <li>
                  <strong
                    >赋值运算符：
                    <ol>
                      <li>=：赋值，将右侧的值赋给左侧的变量</li>
                      <li>+=：加法赋值，相当于 x = x + y</li>
                      <li>-=：减法赋值，相当于 x = x - y</li>
                      <li>*=：乘法赋值，相当于 x = x * y</li>
                      <li>/=：除法赋值，相当于 x = x / y</li>
                      <li>%=：取模赋值，相当于 x = x % y</li>
                    </ol>
                  </strong>
                </li>
                <li>
                  <strong
                    >比较运算符：
                    <ol>
                      <li>==：等于，检查两个操作数的值是否相等</li>
                      <li>===：全等，检查两个操作数的值和类型是否完全相等</li>
                      <li>!=：不等于，检查两个操作数的值是否不相等</li>
                      <li>
                        !==：不全等，检查两个操作数的值或类型是否不完全相等
                      </li>
                      <li>>：大于，检查左操作数是否大于右操作数</li>
                      <li>&lt;：小于，检查左操作数是否小于右操作数</li>
                      <li>>=：大于等于，检查左操作数是否大于或等于右操作数</li>
                      <li>
                        &lt;=：小于等于，检查左操作数是否小于或等于右操作数
                      </li>
                    </ol>
                  </strong>
                </li>
                <li>
                  <strong
                    >逻辑运算符：
                    <ol>
                      <li>&&：逻辑与，如果两个操作数都为 true，则返回 true</li>
                      <li>
                        ||：逻辑或，如果两个操作数中有一个为 true，则返回 true
                      </li>
                      <li>!：逻辑非，用于反转操作数的逻辑状态</li>
                    </ol>
                  </strong>
                </li>
              </ul>
            </span>
            <a href=""></a>
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