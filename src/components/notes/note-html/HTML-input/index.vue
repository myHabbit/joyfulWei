<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <ul>
          <li style="--stagger: 1; margin: 0px 0px 40px 0px" data-animate>
            <h3>表单、文本域、按钮标签</h3>
          </li>
          <li style="--stagger: 2; margin: 0px 0px 35px 0px" data-animate>
            <h3>表单&lt;form&gt;标签</h3>
            <span>
              &lt;form&gt;是 HTML
              中用于创建表单的标签。它用于接收用户输入的数据，常用于提交用户信息、搜索、上传文件等场景。<br />
              <ul class="unord-list">
                <li>action 属性：用于指定表单数据提交的目标 URL。</li>
                <li>
                  method 属性：用于指定表单数据提交的方式，常用的取值有 "get" 和
                  "post"。
                </li>
                <li>
                  enctype
                  属性：用于指定在发送表单数据之前如何对其进行编码，通常用于上传文件时指定为
                  "multipart/form-data"。
                </li>
                <li>
                  target
                  属性：用于指定表单提交后服务器响应的展示方式，比如在当前窗口展示还是新开窗口展示等。常用取值有
                  "_blank"（在新窗口打开）和 "_self"（在当前窗口打开）。
                </li>
              </ul>
            </span>
          </li>
          <li style="--stagger: 3; margin: 0px 0px 35px 0px" data-animate>
            <h3>文本框&lt;input&gt;标签</h3>
            <span>
              &lt;input&gt;是 HTML
              中用于创建输入字段的标签。它通常用于表单中，可以用来接收用户的输入。<br />
              <ul class="unord-list">
                <li>
                  type
                  属性：用于指定输入字段的类型，例如文本、密码、数字、复选框等。
                </li>
                <li>
                  name
                  属性：用于指定输入字段的名称，用于表单提交时标识该输入字段的值。
                </li>
                <li>
                  placeholder
                  属性：用于指定输入字段的占位符文本，显示在输入字段为空时。
                </li>
                <li>value 属性：用于指定输入字段的默认值或提交的值。</li>
                <li>
                  min 属性：用于指定输入字段的最小值（仅适用于 type="number"）。
                </li>
                <li>
                  max 属性：用于指定输入字段的最大值（仅适用于 type="number"）。
                </li>
              </ul>
            </span>
          </li>
          <li style="--stagger: 4; margin: 0px 0px 35px 0px" data-animate>
            <h3>按钮&lt;button&gt;标签</h3>
            <span>
              &lt;button&gt;是 HTML
              中用于创建按钮的标签。它通常用于在表单中触发某些操作，也可以单独使用来创建一个点击按钮。<br />
              <ul class="unord-list">
                <li>
                  type 属性：用于指定按钮的类型，常用取值有 "button"、"submit"
                  和 "reset"。
                </li>
                <li>
                  name 属性：用于指定按钮的名称，用于表单提交时标识该按钮的值。
                </li>
                <li>
                  value 属性：用于指定按钮的值，用于表单提交时提交该按钮的值。
                </li>
                <li>
                  disabled 属性：设置为 "disabled"
                  时，按钮会被禁用，用户无法点击。
                </li>
              </ul>
            </span>
          </li>
          <li style="--stagger: 5; margin: 0px 0px 35px 0px" data-animate>
            <h3>文本域&lt;textarea&gt;标签</h3>
            <span>
              &lt;textarea&gt;是 HTML
              中用于创建文本域的标签。它提供了一个多行文本输入框，用于用户输入大段的文本内容。<br />
              <ul class="unord-list">
                <li>rows 属性：用于指定文本域的显示行数。</li>
                <li>cols 属性：用于指定文本域的显示列数。</li>
                <li>
                  name
                  属性：用于指定文本域的名称，用于表单提交时标识该文本域的值。
                </li>
                <li>
                  placeholder
                  属性：用于指定文本域的占位符文本，显示在文本域为空时。
                </li>
                <li>maxlength 属性：用于指定文本域可输入的最大字符数。</li>
                <li>
                  readonly 属性：用于指定文本域为只读，用户无法编辑其中的文本。
                </li>
                <li>
                  disabled 属性：设置为 "disabled"
                  时，文本域会被禁用，用户无法输入。
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