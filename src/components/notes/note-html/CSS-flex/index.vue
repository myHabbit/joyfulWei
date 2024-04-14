<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>CSS flex布局</h3>
            <span>
              Flex布局是一种用于创建灵活的、自适应的网页布局的CSS技术。它使用了flex容器（flex
              container）和 flex项目（flex items）的概念来实现布局。<br />
              要使用Flex布局，需要在容器上应用display: flex;或display:
              inline-flex;属性。这将使容器成为一个flex容器，并启用Flex布局。然后，可以使用一些属性来控制容器和项目的行为和样式。
            </span>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 35px 0px" data-animate>
            <h3 style="margin-bottom: 0px">CSS flex布局属性介绍：</h3>
            <span>
              <ul class="unord-list">
                <li>
                  flex-direction：指定项目的排列方向。可以是row（水平方向，默认值）、column（垂直方向）、row-reverse（水平方向，反向排列）或column-reverse（垂直方向，反向排列）。
                </li>
                <li>
                  flex-wrap：指定项目是否换行。可以是nowrap（不换行，默认值）、wrap（换行）或wrap-reverse（反向换行）。
                </li>
                <li>
                  justify-content：指定项目在主轴上的对齐方式。可以是flex-start（默认值，左对齐）、flex-end（右对齐）、center（居中对齐）、space-between（两端对齐，项目之间间隔相等）、space-around（每个项目两侧间隔相等）或space-evenly（每个项目两侧和项目之间的间隔相等）。
                </li>
                <li>
                  align-items：指定项目在交叉轴上的对齐方式。可以是flex-start（上对齐）、flex-end（下对齐）、center（居中对齐）、baseline（基线对齐）或stretch（默认值，拉伸填充）。
                </li>
                <li>
                  align-content：指定多行项目在交叉轴上的对齐方式。可以是flex-start（上对齐）、flex-end（下对齐）、center（居中对齐）、space-between（两端对齐，行之间间隔相等）、space-around（每行两侧间隔相等）或stretch（默认值，拉伸填充）。
                </li>
                <li>
                  flex-grow：指定项目的放大比例，默认为0，即不放大。如果所有项目的flex-grow都为1，则它们将等分剩余空间。
                </li>
                <li>
                  flex-shrink：指定项目的缩小比例，默认为1，即可以缩小。如果所有项目的flex-shrink都为0，则它们不会缩小，而是根据flex-grow来分配剩余空间。
                </li>
                <li>
                  flex-basis：指定项目在主轴上的初始大小。可以是一个长度值（如px、rem等）或关键字auto。
                </li>
              </ul>
            </span>
          </li>
          <li style="--stagger: 3; margin: 0px 0px 35px 0px" data-animate>
            <h3 style="margin-bottom: 0px">CSS flex:1介绍：</h3>
            <span
              >flex: 1; 是一个常用的Flex布局属性，用于指定项目的伸缩比例。</span
            >
            <span>
              <ul class="unord-list">
                <li>
                  在Flex布局中，flex:1 属性是 flex-grow、flex-shrink 和
                  flex-basis
                  这三个属性的简写形式。这三个属性分别控制项目在可用空间内的放大、缩小和初始大小。
                </li>
                <li>
                  当将 flex 属性设置为 1 时，它等同于设置 flex-grow: 1;
                  flex-shrink: 1; flex-basis:
                  0%;。这意味着项目将根据可用空间进行放大和缩小，初始大小为0%。
                </li>
                <li>
                  具体来说，当容器的空间有剩余时，具有 flex: 1;
                  属性的项目会按照比例分配剩余空间。如果所有具有 flex: 1;
                  的项目的比例相同，它们将平均分配剩余空间。如果某个项目的 flex
                  属性为 2，而其他项目的 flex 属性为
                  1，那么前者将获得的空间是后者的两倍。
                </li>
                <li>
                  另外，flex: 1; 还可以用于创建自适应的网页布局。通过将具有
                  flex: 1;
                  属性的项目放置在容器中，这些项目将自动填充可用空间，使布局具有弹性和适应性。
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