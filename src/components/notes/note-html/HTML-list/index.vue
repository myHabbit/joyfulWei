<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>HTML列表</h3>
            <span>
              HTML 中，列表是一种用于展示项目或信息的常见结构。<br />
              HTML提供了三种基本类型的列表：无序列表（&lt;ul&gt;）、有序列表（&lt;ol&gt;）和定义列表（&lt;dl&gt;）。
            </span>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 40px 0px" data-animate>
            <h3>无序列表</h3>
            <span>
              无序列表用于表示一组项目，这些项目之间没有特定的顺序或排列。<br />
              每个项目通常由一个项目符号（通常是圆点、方块或其他符号）表示。在
              HTML
              中，无序列表使用&lt;ul&gt;元素来定义，每个列表项使用&lt;li&gt;
              元素来表示。
            </span>
            <p style="margin: 20px 0px">
              <span>注：</span>ul 的子标签只能是 li 绝对不能出现其他任何标签；li
              标签内部可以放任何其他标签
            </p>
          </li>
          <li style="--stagger: 3; margin: 0px 0px 40px 0px" data-animate>
            <h3>有序列表</h3>
            <span>
              有序列表用于表示一组按特定顺序或排列的项目。<br />
              每个项目通常由一个数字或字母表示。在 HTML
              中，有序列表使用&lt;ol&gt;元素来定义，每个列表项使用&lt;li&gt;元素来表示。
              <br />
              <ul class="unord-list">
                <li>
                  无序列表的 type 属性 可以定义前导符号的样式 disc 默认值 空心圆
                  circle 空心圆 square 实心方块
                </li>
                <li>
                  无序列表的 type 属性 a 表示小写英文字母编号 A 表示
                  大写英文字母编号 i 表示小写罗马数字编号 I 表示大写罗马数字编号
                  1 表示数字编号
                </li>
                <li>
                  无序列表的 start 属性 必须为阿拉伯数字 必须是整数
                  指定了列表编号的起始值
                </li>
                <li>
                  无序列表的 reversed 的属性不需要值
                  指定列表中的条目是否是倒序排列的
                </li>
              </ul>
              <p style="margin: 20px 0px 0px 0px">
                <span style="margin: 0px">注：</span>ol 的子标签只能是 li
                绝对不能出现其他任何标签；li 标签内部可以放任何其他标签
              </p>
            </span>
          </li>
          <li style="--stagger: 4; margin: 0px 0px 40px 0px" data-animate>
            <h3>定义列表</h3>
            <span>
              定义列表用于表示一组名称与其对应的定义。<br />
              在 HTML中，定义列表使用 &lt;dl&gt; 元素来定义，每个术语使用 &lt;dt&gt;
              元素表示，每个描述使用 &lt;dd&gt;元素表示
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