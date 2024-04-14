<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>表格标签 table</h3>
            <span
              >&lt;table&gt; 是 HTML
              中用于创建表格的标签。它是表格的容器，用于包含和组织表格中的数据。</span
            >
          </li>
          <li style="--stagger: 2; margin: 0px 0px 35px 0px" data-animate>
            <span>
              <strong style="color: #000; font-size: 20px">
                &lt;table&gt; 标签主要由以下几个子标签组成：
              </strong>
              <br />
              <ul class="unord-list">
                <li>&lt;caption&gt;：可选标签，用于为表格提供标题。</li>
                <li>&lt;thead&gt;：可选标签，用于定义表格的表头部分。</li>
                <li>&lt;tbody&gt;：可选标签，用于定义表格的主体部分。</li>
                <li>&lt;tfoot&gt;：可选标签，用于定义表格的页脚部分。</li>
                <li>
                  &lt;tr&gt;：用于定义表格中的行，作为
                  &lt;table&gt;、&lt;thead&gt;、&lt;tbody&gt; 或 &lt;tfoot&gt;
                  的子标签。
                </li>
                <li>&lt;th&gt;：用于定义表头单元格。在表头行中使用。</li>
                <li>
                  &lt;td&gt;：用于定义数据单元格。在主体和页脚部分的行中使用。
                </li>
                <strong
                  style="
                    color: #000;
                    display: inline-block;
                    margin: 20px 0px;
                    font-size: 20px;
                  "
                >
                  &lt;table&gt; 标签主要由以下几个属性：
                </strong>
                <li>border 属性：用于指定表格的边框宽度。默认为 0。</li>
                <li>
                  cellpadding 属性：用于指定单元格内容与边框之间的空白距离。
                </li>
                <li>cellspacing 属性：用于指定单元格之间的空白距离。</li>
                <li>width 属性：用于指定表格的宽度。</li>
                <li>height 属性：用于指定表格的高度。</li>
                <li>
                  align 属性：用于指定表格在页面中的水平对齐方式。可选值有
                  left、center、right。
                </li>
                <li>
                  valign 属性：用于指定表格在页面中的垂直对齐方式。可选值有
                  top、middle、bottom。
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