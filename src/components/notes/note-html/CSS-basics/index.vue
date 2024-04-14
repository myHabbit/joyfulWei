<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>CSS介绍</h3>
            <span>
              CSS 是层叠样式表（Cascading Style
              Sheets）的缩写，是一种用于定义网页外观样式的标记语言。<br />
              CSS
              通过定义元素的样式（例如颜色、字体、大小、布局等）来控制网页的显示效果。它提供了一种将样式应用于HTML文档的机制，使开发者可以将样式与内容分离，从而简化网页的维护和样式的重用。
            </span>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 35px 0px" data-animate>
            <h3 style="margin-bottom: 0px">CSS 特点：</h3>
            <span>
              <ul class="unord-list">
                <li>
                  分离内容和样式：CSS使得网页的样式可以独立于HTML内容进行修改和管理，这样可以提高网页的可维护性和灵活性。
                </li>
                <li>
                  层叠和继承：CSS允许按照一定的规则层叠多个样式，且具有继承性，从而使得样式的调整更加灵活和高效。
                </li>
                <li>
                  选择器和属性：CSS通过选择器来选中HTML元素，然后为这些元素指定样式属性，如颜色、大小、边距等。
                </li>
                <li>
                  响应式设计：CSS可以用于创建响应式网页，以适应不同设备和屏幕尺寸，提供更好的用户体验。
                </li>
              </ul>
            </span>
          </li>
          <li style="--stagger: 3; margin: 0px 0px 35px 0px" data-animate>
            <h3 style="margin-bottom: 0px">CSS 样式应用方式：</h3>
            <span>
              <ul class="unord-list">
                <li>
                  内联样式： 内联样式是直接应用于 HTML 元素的样式，通过在元素的
                  style 属性中指定 CSS 属性和值来实现。
                </li>
                <li>
                  嵌入样式： 嵌入样式是将 CSS 样式直接嵌入到 HTML 文档的
                  &lt;style&gt; 标签中。这种方式将 CSS 样式与特定的 HTML
                  文档关联起来。
                </li>
                <li>
                  外部样式表： 外部样式表是将 CSS 样式定义在一个独立的 .css
                  文件中，并在 HTML 文档中通过 &lt;link&gt;
                  标签引入。这种方式可以在多个 HTML 文档中重复使用相同的样式表。
                </li>
              </ul>
            </span>
          </li>
        </ul>
      </div>
      <!-- <Goback /> -->
    </div>
  </div>
</template>

<script setup>
// import Goback from "@/basic/goback.vue";
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
      flex-direction: column;
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