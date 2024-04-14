<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>JS 基础知识介绍</h3>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 35px 0px" data-animate>
            <h3>JS的概念</h3>
            <span>
              JS是指JavaScript，一种广泛应用于Web开发的编程语言。它可以在网页中用于增强互动性、动态效果、表单验证等功能，并且也可用于服务器端开发。JavaScript与HTML和CSS一样是前端开发技术的重要组成部分，可以说是现代Web开发不可或缺的技术之一
              <br />
            </span>
          </li>
          <li style="--stagger: 3; margin: 0px 0px 40px 0px" data-animate>
            <h3>Javascript的组成（有什么）</h3>
            <span>
              ECMAScript（javascript语言基础）：规定了js基础语法核心知识。
              比如：变量、分支语句、循环语句、对象等等
              <br />
              Web APIs 包含DOM（页面文档对象模型）BOM（浏览器对象模型）：DOM
              操作文档 比如对页面元素进行移动 大小 添加删除等操作； BOM
              操作浏览器 比如浏览器弹窗 检测窗口宽度 储存数据到浏览器等等
              <br />
            </span>
          </li>
          <li style="--stagger: 4; margin: 0px 0px 40px 0px" data-animate>
            <h3>Js输入输出语法</h3>
            <span>
              <ul class="unord-list">
                <li>
                  <strong>什么是语法：</strong> 人和计算机打交道的规则约定
                  我们按照这个规则去写 比如:你吃了吗 我们程序员需要操控计算机
                  需要计算机能看懂
                </li>
                <li>
                  <strong>输入输出语法：</strong>
                  输出和输入也可理解为人和计算机的交互
                  用户通过键盘、鼠标等向计算机输入信息
                  计算机处理后在展示结果给用户，这便是一次输入输出的过程
                </li>
                <li>
                  <strong
                    >输出语法：
                    <ol>
                      <li>语法1：Document.write（'要出的内容’）</li>
                      <li>语法2：alert（'要出的内容’）</li>
                      <li>语法3：console.log（'控制台打印’）</li>
                    </ol>
                  </strong>
                </li>
                <li><strong>输入语法：</strong>Prompt（'请输入你的姓名:’）</li>
                <li>
                  <strong>Js代码执行顺序：</strong> 按HTML文档流自上往下执行
                  Prompt alert优先 因为这两个是页面警示框
                </li>
              </ul>
            </span>
            <a href=""></a>
          </li>
          <li style="--stagger: 5; margin: 0px 0px 35px 0px" data-animate>
            <h3>JS书写位置</h3>
            <span>
              <ul class="unord-list">
                <li>
                  <strong>行内js：</strong> 直接写在html中 用script包住 规范
                  script 标签写在body上面 <br />
                  拓展:alert（’你好 js’）页面弹出警告对话框
                </li>
                <li>
                  <strong>外部javascript：</strong> 通过script标签
                  引入到html页面中
                </li>
                <li><strong>内联javascript：</strong> 代码写在标签内部</li>
              </ul>
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