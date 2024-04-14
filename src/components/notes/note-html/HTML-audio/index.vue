<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>图片 音频 与视频标签</h3>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 35px 0px" data-animate>
            <h3>音频&lt;audio&gt;标签</h3>
            <span>
              &lt;audio src="音频地址"&gt; 您的浏览器不支持 audio 标签
              请升级浏览器&lt;/audio &gt;<br />
              <ul class="unord-list">
                <li>controls 属性： 显示播放控件。</li>
                <li>autoplay 属性： 音频会自动播放。</li>
                <li>loop 属性： 会循环播放。</li>
              </ul>
            </span>
          </li>
          <li style="--stagger: 3; margin: 0px 0px 40px 0px" data-animate>
            <h3>视频&lt;video&gt;标签</h3>
            <span>
              &lt;video src="视频地址"&gt; 您的浏览器不支持 video 标签
              请升级浏览器&lt;/audio &gt;<br />
              <ul class="unord-list">
                <li>controls 属性： 显示播放控件。</li>
                <li>autoplay 属性： 视频会自动播放。</li>
                <li>loop 属性： 会循环播放。</li>
                <li>width 属性： 定义播放器的宽度。</li>
                <li>height 属性：定义播放器的高度。</li>
              </ul>
            </span>
          </li>
          <li style="--stagger: 4; margin: 0px 0px 40px 0px" data-animate>
            <h3>图片&lt;img&gt;标签</h3>
            <span>
              &lt;video src="图片地址"&gt;图片显示区域&lt;/audio &gt;<br />
              <ul class="unord-list">
                <li>src 属性： 用于指定图像文件的 URL。</li>
                <li>
                  alt 属性：
                  用于为图像提供替代文本。如果图像由于某种原因无法显示，这段文本将作为替代内容显示出来。
                </li>
                <li>
                  title 可选属性：
                  用于提供图像的标题。当鼠标悬停在图像上时，浏览器会显示这个标题文本。
                </li>
                <li>width 属性： 指定图像的宽度，以像素为单位。</li>
                <li>height 属性： 指定图像的高度，以像素为单位。</li>
                <li>
                  loading 属性： 指定图像的加载方式，可以设置为
                  lazy（延迟加载）、 eager（立即加载）或
                  auto（由浏览器决定默认值）。
                </li>
                <li>
                  srcset 属性：
                  允许您为图像指定多个不同尺寸或分辨率的来源，以便根据不同的屏幕尺寸或分辨率加载合适的图像。
                </li>
                <li>
                  sizes 属性：
                  指定图像在不同显示尺寸下应该显示的尺寸。这通常与响应式网页设计和
                  srcset 属性一起使用。
                </li>
              </ul>
            </span>
            <a href=""></a>
          </li>
          <li style="--stagger: 5; margin: 0px 0px 35px 0px" data-animate>
            <h3>超链接&lt;a&gt;标签</h3>
            <span>
              &lt;a href="网页地址"&gt; 跳转到xxx &lt;/a &gt;<br />
              <ul class="unord-list">
                <li>
                  href 属性：定义播放器的高度。 用于指定链接的目标URL。
                </li>
                <li>
                  target 属性：指定链接如何在浏览器中打开，常见的取值包括
                  _blank（在新窗口中打开）、_self（在当前窗口中打开，这是默认值）。
                </li>
                <li>
                  title 属性：
                  提供链接的标题，通常在鼠标悬停在链接上时显示。
                </li>
                <li>
                  download 属性：
                  指示浏览器下载链接目标而不是导航到它。设置这个属性会让浏览器提示用户下载目标链接而不是导航到它。
                </li>
                <li>
                  rel 属性：
                  定义当前文档与被链接文档之间的关系。常见取值包括
                  nofollow（告诉搜索引擎不要跟踪此链接）和
                  noopener（阻止新打开页面的 JavaScript 访问 opener 页面）。
                </li>
              </ul>
            </span>
          </li>
          <li style="--stagger: 6; margin: 0px 0px 35px 0px" data-animate>
            <h3>文字加粗倾斜下划线标签</h3>
            <span>
              <ul class="unord-list" style="padding-top: 0">
                <li>&lt;b &gt;标签：被加粗的文字。</li>
                <li>&lt;u &gt;标签：加下划线的文字。</li>
                <li>&lt;i &gt;标签：倾斜的文字。</li>
                <li>&lt;br &gt;标签：换行。</li>
                <li>&lt;hr &gt;标签：下划线 。</li>
                <li>&lt;strong &gt;标签：加粗的文字。</li>
                <li>&lt;em &gt;标签：强调文字。</li>
                <li>&lt;mark &gt;标签：代表一段需要被高亮的文字。</li>
                <li>
                  &lt;figure &gt;标签：代表一段独立的内容 与说明
                  &lt;figcaption&gt;配合使用。
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