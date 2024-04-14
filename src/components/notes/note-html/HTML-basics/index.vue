<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>HTML介绍</h3>
            <span>
              HTML5: 全称: Hyper Text Markup Language，是一种超文本标记语言；<br />
              W3C 组织： 是万维网的主要国际标准组织，成立于 1994 年 负责制定 Web
              标准，主要是 HTMl+CSS
            </span>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 40px 0px" data-animate>
            <h3>HTML 骨架</h3>
            <span
              >第一行 DTD：&lt; !DOCTYPE html &gt; <br />第二行&lt;html/&gt;
              标签对中包含： &lt;header/&gt; 标签对是网页配置， &lt;body/&gt;
              标签对是 网页内容</span
            >
          </li>
          <li style="--stagger: 3; margin: 0px 0px 40px 0px" data-animate>
            <h3>转义字符</h3>
            <span>
              &amp;lt; 小于号 ; &amp;gt; 大于号 ; &amp;nbsp; 空格(不会被折叠) ;
              &amp;copy; 版权符号@
            </span>
          </li>
          <li style="--stagger: 4; margin: 0px 0px 40px 0px" data-animate>
            <h3>网页的字符集</h3>
            <span>
              UTF-8(一个文字占三个字节 文字很全) gb2312(gbk)(一个文字占两个字节
              文字不全)</span
            >
          </li>
          <li style="--stagger: 5; margin: 0px 0px 40px 0px" data-animate>
            <h3>SEO</h3>
            <span
              >搜索引擎优化 <br />
              遵守的规则有：书写好网页&lt;title/&gt;中两个&lt;meta&gt; 标签
              name="Keywords" name="Deacription"
              <meta name="Keywords" content="小魏医生,有责任心 ,踏实肯干" />
              <meta name="Deacription" content="内科,外科,口腔科,皮肤科"
            /></span>
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