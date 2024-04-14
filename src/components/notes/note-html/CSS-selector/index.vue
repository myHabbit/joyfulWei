<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>CSS 选择器介绍</h3>
            <span>
              CSS 选择器用于选择要应用样式的 HTML
              元素。选择器基于元素的标签名、类名、ID、属性等特征进行匹配，从而选择要样式化的元素。
            </span>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 35px 0px" data-animate>
            <h3 style="margin-bottom: 0px">CSS 选择器分类：</h3>
            <span>
              <ul class="unord-list">
                <li>
                  元素选择器：
                  使用元素的标签名作为选择器，选择匹配该标签名的所有元素。
                </li>
                <li>
                  类选择器： 使用类名作为选择器，选择具有该类名的元素。类名以 .
                  开头。
                </li>
                <li>
                  ID 选择器： 使用元素的 ID 属性作为选择器，选择具有该 ID
                  的元素。ID 以 # 开头。请注意，每个页面中的 ID 应该是唯一的。
                </li>
                <li>
                  属性选择器：
                  使用元素的属性值作为选择器，选择具有匹配属性值的元素。
                </li>
                <li>
                  后代选择器：
                  使用空格分隔的多个选择器，选择指定元素的后代元素。
                </li>
                <li>
                  子元素选择器： 使用大于号 >
                  分隔的多个选择器，选择指定元素的直接子元素。
                </li>
                <li>
                  伪类选择器：
                  伪类选择器用于选择元素的特定状态或位置。它们以冒号 : 开头。
                </li>
                <li>
                  伪元素选择器：
                  伪元素选择器用于选择元素的特定部分或生成的内容。它们以双冒号
                  :: 开头。
                </li>
                <li>
                  相邻兄弟选择器：
                  相邻兄弟选择器选择紧接在指定元素之后的兄弟元素。
                </li>
                <li>通用选择器： 通用选择器选择所有元素，它以星号 * 表示。</li>
                <li>伪选择器： 伪选择器根据元素在其父元素中的位置选择元素。</li>
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