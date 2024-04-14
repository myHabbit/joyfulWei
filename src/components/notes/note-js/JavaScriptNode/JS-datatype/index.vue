<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>JS 变量、数据类型介绍</h3>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 35px 0px" data-animate>
            <h3>JS变量介绍</h3>
            <span>
              白话：变量就是一个装东西的盒子
              <br />
              通俗：变量是用于存储数据值的容器。变量可以是数字、字符串、布尔值、对象等任何数据类型的值。在
              JavaScript中，变量是动态类型的，这意味着您可以在程序的不同阶段使用不同的数据类型
              <br />
            </span>
          </li>
          <li style="--stagger: 3; margin: 0px 0px 40px 0px" data-animate>
            <h3>变量的声明、赋值</h3>
            <span>
              变量命名规则：变量名可以包含字母、数字、下划线和美元符号（$），但必须以字母、下划线或美元符号开头。变量名区分大小写。
              <br />
              在 JavaScript 中，您可以使用关键字 var, let, 或 const 来声明变量
              <ul class="unord-list" style="padding-top: 5px">
                <li>
                  var：在 ES5 中引入，用于声明变量，它存在变量提升和函数作用域。
                </li>
                <li>
                  let：在 ES6 中引入，用于声明块级作用域的变量，不具备变量提升。
                </li>
                <li>
                  const：也在 ES6 中引入，用于声明常量，其值不能被重新分配。
                </li>
              </ul>
              <strong style="color: red">！！！！</strong> 相同变量只能声明一次
              <br />
              赋值和重新赋值：在 JavaScript
              中，您可以使用赋值操作符（=）来为变量分配值。变量的值可以随时更改，这称为重新赋值。
              <br />
            </span>
          </li>
          <li style="--stagger: 4; margin: 0px 0px 40px 0px" data-animate>
            <h3>Js数据类型</h3>
            <span>
              <ul class="unord-list">
                <li>
                  <strong>什么是数据类型：</strong> 在 JavaScript
                  中，数据类型指的是变量可以存储的值的类型。JavaScript
                  中的数据类型可以分为两大类：原始数据类型和引用数据类型。
                </li>
                <li>
                  <strong
                    >原始数据类型：
                    <ol>
                      <li>
                        数字（Number）：用于表示数值。可以是整数或浮点数。
                      </li>
                      <li>
                        字符串（String）：用于表示文本数据。字符串可以包含在单引号、双引号或反引号中。
                      </li>
                      <li>
                        布尔值（Boolean）：用于表示逻辑值。可以是 true 或
                        false。
                      </li>
                      <li>空值（Null）：表示一个空值或不存在的值。</li>
                      <li>未定义（Undefined）：表示一个未定义的值或变量。</li>
                      <li>符号（Symbol）：在 ES6 中新增，表示唯一的标识符。</li>
                      <li>
                        大整数（bigint）：在ES10中新增，与普通数字类型相比，大整数可以安全地表示和处理非常大的整数值，而不会丢失精度或溢出。
                      </li>
                    </ol>
                  </strong>
                </li>
                <li>
                  <strong
                    >引用数据类型：
                    <ol>
                      <li>
                        对象（Object）：用于存储复杂的数据结构，可以包含多个键值对。
                      </li>
                      <li>
                        字符串（String）：用于表示文本数据。字符串可以包含在单引号、双引号或反引号中。
                      </li>
                      <li>
                        布尔值（Boolean）：用于表示逻辑值。可以是 true 或
                        false。
                      </li>
                      <li>空值（Null）：表示一个空值或不存在的值。</li>
                      <li>未定义（Undefined）：表示一个未定义的值或变量。</li>
                      <li>符号（Symbol）：在 ES6 中新增，表示唯一的标识符。</li>
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