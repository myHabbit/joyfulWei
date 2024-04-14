<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>CSS 文本背景等基础属性介绍</h3>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 35px 0px" data-animate>
            <h3 style="margin-bottom: 0px">CSS 文本属性：</h3>
            <span>
              <ul class="unord-list">
                <li>color：用于设置文本的颜色。</li>
                <li>font-family：用于设置文本的字体系列。</li>
                <li>font-size：用于设置文本的字体大小。</li>
                <li>font-weight：用于设置文本的粗细程度（如粗体、正常）。</li>
                <li>line-height:设置行高（即行间距）。</li>
                <li>
                  text-align:设置对齐方式，常用的取值为left、right以及
                  center，justify(两端对齐)。
                </li>
                <li>letter-spacing:设置字符间距。</li>
                <li>
                  text-decoration:设置文本修饰，常用的取值为：加下划线(underline)、中划线等(line-through)、none(去掉下划线)。
                </li>
              </ul>
            </span>
          </li>
          <li style="--stagger: 3; margin: 0px 0px 35px 0px" data-animate>
            <h3 style="margin-bottom: 0px">CSS 背景属性：</h3>
            <span>
              <ul class="unord-list">
                <li>background-color:设置元素的背景颜色。</li>
                <li>
                  background-repeat:设置元素的背景图片平铺方式：repeat-x（x轴平铺），repeat-y（y轴平铺）,no-repeat（不平铺）。
                </li>
                <li>background-position:设置元素背景图片位置。</li>
                <li>background-size:设置元素背景图片大小。</li>
                <li>
                  background-attachment:设置元素的背景图片是否跟随元素的移动而移动，取值可为fixed(固定图片)。
                </li>
              </ul>
            </span>
          </li>
          <li style="--stagger: 4; margin: 0px 0px 35px 0px" data-animate>
            <h3 style="margin-bottom: 0px">CSS 边框属性：</h3>
            <span>
              <ul class="unord-list">
                <li>border-width:边框粗细。</li>
                <li>border-color:边框颜色。</li>
                <li>border-style:边框的样式。</li>
                <li>border:none (表示为去掉块标签自带的边框线)。</li>
                <li>
                  border-radius:设置块标签或者按钮的圆角样式,取值为具体的数值。
                </li>
                <li>outline:none(去掉按钮点击时的外边框)。</li>
              </ul>
            </span>
          </li>
          <li style="--stagger: 5; margin: 0px 0px 35px 0px" data-animate>
            <h3 style="margin-bottom: 0px">CSS 列表属性：</h3>
            <span>
              <ul class="unord-list">
                <li>
                  list-style-type:用于设定表项的符号，取值：none(无)、disc(实心圆)、circle(空心圆)、square(实心方块)。
                </li>
                <li>
                  list-style-image:用于设定图像作为列表项目符号，其值为图像对应的url。
                </li>
                <li>
                  list-style-position:用于设定项目符号在列表项的位置，取值为：inside、outside。
                </li>
                <li>
                  list-style:将三个统一设定，其顺序必须按照1、2、3，不得乱序。
                </li>
              </ul>
            </span>
          </li>
          <li style="--stagger: 6; margin: 0px 0px 35px 0px" data-animate>
            <h3 style="margin-bottom: 0px">CSS 阴影属性：</h3>
            <span>
              <ul class="unord-list">
                <li>
                  box-shadow
                  属性用于在元素周围创建一个或多个阴影效果。它可以设置阴影的颜色、偏移量、模糊半径和扩展半径
                </li>
                <li>
                  h-shadow：水平阴影的偏移量，可以是正值（向右偏移）或负值（向左偏移）。
                </li>
                <li>
                  v-shadow：垂直阴影的偏移量，可以是正值（向下偏移）或负值（向上偏移）
                </li>
                <li>blur：可选，阴影的模糊半径。值越大，阴影越模糊。</li>
                <li>
                  spread：可选，阴影的扩展半径。正值会扩展阴影，负值会收缩阴影。
                </li>
                <li>color：阴影的颜色。</li>
                <li>
                  text-shadow 属性用于在文本周围创建阴影效果。它的语法与
                  box-shadow 类似，但只能用于文本。
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