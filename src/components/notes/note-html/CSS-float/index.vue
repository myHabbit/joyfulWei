<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>CSS 浮动、伪元素介绍</h3>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 35px 0px" data-animate>
            <h3>CSS 浮动：</h3>
            <span>
              浮动是一种布局技术，用于改变元素在页面中的位置。通过将元素设置为浮动，可以使其向左或向右移动，使其脱离正常的文档流，并允许其他元素环绕它。
              通过定义元素的样式（例如颜色、字体、大小、布局等）来控制网页的显示效果。它提供了一种将样式应用于HTML文档的机制，使开发者可以将样式与内容分离，从而简化网页的维护和样式的重用。
              <br />
              浮动的属性值可以是 left（向左浮动）、right（向右浮动）或
              none（不浮动，默认值）。使用浮动属性的元素会被移动到其容器的左侧或右侧，并且其他元素会环绕它。要清除浮动效果，可以使用
              clear 属性。
            </span>
          </li>
          <li style="--stagger: 3; margin: 0px 0px 35px 0px" data-animate>
            <h3>CSS 清除浮动：</h3>
            <span>
              清除浮动是为了解决浮动元素对其后面的元素布局造成的影响。当一个元素浮动时，它会脱离正常的文档流，导致容器无法正确计算其高度，从而可能导致后续元素紧随其后或重叠在一起。
              <ul class="unord-list">
                <li>
                  清除浮动的伪元素： 在浮动元素的容器的末尾添加一个空的 ::after
                  伪元素，并设置其样式为 clear:
                  both;。这将在浮动元素的容器的末尾插入一个看不见的空元素，并清除浮动效果。
                </li>
                <li>
                  清除浮动的父元素： 在浮动元素的容器中插入一个空的 &lt;div&gt;
                  元素，并设置其样式为 clear:
                  both;。这个方法类似于使用伪元素，但需要在 HTML
                  中添加一个额外的元素。
                </li>
                <li>
                  overflow: hidden;： 将浮动元素的容器的 overflow 属性设置为
                  hidden，这会触发 BFC（块级格式化上下文）并清除浮动。
                </li>
                <li>
                  clearfix 类： 可以定义一个 .clearfix
                  类，并将其应用于浮动元素的容器。这个类的样式可以使用伪元素或其他清除浮动的方法。
                </li>
              </ul>
            </span>
          </li>
          <li style="--stagger: 4; margin: 0px 0px 35px 0px" data-animate>
            <h3>CSS 伪元素：</h3>
            <span>
              伪元素是 CSS
              提供的一种特殊选择器，允许在文档中的元素之前或之后插入额外的内容。它们以双冒号
              ::
              开头，并且可以用于选中元素的特定部分，例如选中元素的第一个字母、第一行文本或插入额外的装饰性内容。
              <ul class="unord-list">
                <li>::before：在元素内容之前插入内容。</li>
                <li>::after：在元素内容之后插入内容。</li>
                <li>::first-letter：选中元素的第一个字母。</li>
                <li>::first-line：选中元素的第一行文本。</li>
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