<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>CSS 盒模型介绍</h3>
            <span>
              CSS 盒模型是用于描述 HTML
              元素布局和渲染的模型。它将每个元素看作是一个矩形的盒子，这个盒子由四个部分组成：内容区域、内边距、边框和外边距。这些部分的组合形成了元素的总宽度和总高度。
            </span>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 35px 0px" data-animate>
            <h3 style="margin-bottom: 0px">CSS 盒模型的四个部分：</h3>
            <span>
              <ul class="unord-list">
                <li>
                  内容区域：
                  内容区域是元素实际显示内容的区域，它的大小由元素的宽度（width）和高度（height）属性决定。默认情况下，元素的宽度和高度指的是内容区域的大小。
                </li>
                <li>
                  内边距：
                  内边距是内容区域与边框之间的空白区域，可以通过设置元素的
                  padding 属性来控制。内边距的大小会增加元素的宽度和高度。
                </li>
                <li>
                  边框：
                  边框是围绕内容区域和内边距的线条或样式，可以通过设置元素的
                  border 属性来定义。边框的大小和样式会增加元素的宽度和高度。
                </li>
                <li>
                  外边距：
                  外边距是元素与其他元素之间的空白区域，可以通过设置元素的
                  margin
                  属性来控制。外边距的大小不会影响元素的宽度和高度，但会影响元素在页面中的布局。
                </li>
              </ul>
            </span>
            <p style="margin: 20px 0px">
              <span>注：</span>在 CSS 中，可以通过设置元素的 box-sizing
              属性来控制盒模型的计算方式。默认情况下，box-sizing 的值是
              content-box，表示元素的宽度和高度只包括内容区域。如果将 box-sizing
              的值设置为
              border-box，则元素的宽度和高度会包括内容区域、内边距和边框。
            </p>
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