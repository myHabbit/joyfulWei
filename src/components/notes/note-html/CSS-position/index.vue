<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>CSS 定位</h3>
            <span>
              CSS 中的定位（positioning）用于控制元素在页面中的位置。CSS
              提供了几种定位方式，包括相对定位（relative
              positioning）、绝对定位（absolute positioning）、固定定位（fixed
              positioning）和粘性定位（sticky positioning）。
            </span>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 35px 0px" data-animate>
            <h3 style="margin-bottom: 0px">CSS 四种定位介绍：</h3>
            <span>
              <ul class="unord-list">
                <li>
                  相对定位：
                  相对定位是相对于元素在正常文档流中的位置进行定位。通过设置
                  position: relative;，可以使用 top、right、bottom 和 left
                  属性来相对于元素原本的位置进行微调。
                </li>
                <li>
                  绝对定位：
                  绝对定位是相对于最近的已定位祖先元素或根元素进行定位。通过设置
                  position: absolute;，可以使用 top、right、bottom 和 left
                  属性来指定元素的精确位置。
                </li>
                <li>
                  固定定位：
                  固定定位是相对于视口（viewport）进行定位，即元素的位置在页面滚动时保持不变。通过设置
                  position: fixed;，可以使用 top、right、bottom 和 left
                  属性来指定元素的位置。
                </li>
                <li>
                  粘性定位：
                  粘性定位是相对于父元素或视口进行定位，具有相对定位和固定定位的特性。元素在滚动到指定位置时变为固定定位，否则保持相对定位。通过设置
                  position: sticky;，可以使用 top、right、bottom 和 left
                  属性来指定元素的位置。
                </li>
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