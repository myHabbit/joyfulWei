<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <Anchor />
        <ul>
          <li
            style="--stagger: 1; margin: 0px 0px 40px 0px"
            data-animate
            id="DOM"
          >
            <h3 style="font-size: 34px">JS 高级介绍</h3>
          </li>
          <li
            style="--stagger: 2; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>DOM（Document Object Model）</h3>
            <span>
              文档对象模型，相当于JS和HTML、CSS之间的桥梁。通过浏览器提供的DOM
              API可以对元素及其内容做任何事情。
            </span>
            <span> </span>
          </li>
          <li
            style="--stagger: 3; margin: 0px 0px 35px 0px"
            data-animate
            id="Document-Object"
          >
            <h3>document对象</h3>
            <span>
              Document节点表示的整个载入的网页，它的实例是全局的document对象。对DOM的所有操作都是从
              document
              对象开始的；它是DOM的入口点，可以从document开始去访问任何节点元素。
            </span>
            <span>
              <ul class="unord-list">
                <strong
                  >对于最顶层的html、head、body元素，我们可以直接在document对象中获取到：
                  <ol>
                    <li>html元素：<code>document.documentElement</code></li>
                    <li>body元素：<code>document.body</code></li>
                    <li>head元素：<code>document.head</code></li>
                    <li>文档声明：<code>document.doctype</code></li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 4; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>节点间的导航</h3>
            <span>
              <ul class="unord-list">
                <strong>节点之间的导航：</strong>
                <ol>
                  <li>父节点： <code>parentNode</code></li>
                  <li>前兄弟节点： <code>previousSibling</code></li>
                  <li>后兄弟节点： <code>nextSibling</code></li>
                  <li>子节点： <code>childNodes</code></li>
                  <li>第一个子节点： <code>firstChild</code></li>
                  <li>最后一个子节点： <code>lastChild</code></li>
                </ol>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 5; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>元素间的导航</h3>
            <span>
              <ul class="unord-list">
                <strong>元素之间的导航：</strong>
                <ol>
                  <li>父元素： <code>parentElement</code></li>
                  <li>前兄弟元素： <code>previousElementSibling</code></li>
                  <li>后兄弟元素： <code>nextElementSibling</code></li>
                  <li>子元素： <code>children</code></li>
                  <li>第一个子元素： <code>firstElementChild</code></li>
                  <li>最后一个子元素： <code>lastElementChild</code></li>
                </ol>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 5; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>表格元素的导航</h3>
            <span>
              <ul class="unord-list">
                <strong>表格元素的导航：</strong>
                <ol>
                  <li>table.rows — <code>&lt;tr&gt;</code> 元素的集合</li>
                  <li>
                    table.caption/tHead/tFoot — 引用元素
                    <code>&lt;caption&gt;</code
                    >，<code>&lt;thead&gt;</code>，<code>&lt;tfoot&gt;</code>
                  </li>
                  <li>table.tBodies — <code>&lt;tbody&gt;</code> 元素的集合</li>
                </ol>
              </ul>
            </span>
            <span>
              <ul class="unord-list">
                <strong
                  >&lt;thead&gt;，&lt;tfoot&gt;，&lt;tbody&gt; 元素提供了 rows
                  属性：</strong
                >
                <ol>
                  <li>
                    tbody.rows — 表格内部 <code>&lt;tr&gt;</code> 元素的集合
                  </li>
                </ol>
              </ul>
            </span>
            <span>
              <ul class="unord-list">
                <strong>&lt;tr&gt; 元素：</strong>
                <ol>
                  <li>
                    tr.cells — 在给定 <code>&lt;tr&gt;</code> 中的
                    <code>&lt;td&gt;</code> 和
                    <code>&lt;th&gt;</code> 单元格的集合
                  </li>
                  <li>
                    tr.sectionRowIndex — 给定的 <code>&lt;tr&gt;</code> 在封闭的
                    <code>&lt;thead&gt;</code>/<code>&lt;tbody&gt;</code>/<code
                      >&lt;tfoot&gt;</code
                    >
                    中的位置（索引）
                  </li>
                  <li>
                    tr.rowIndex — 在整个表格中
                    <code>&lt;tr&gt;</code> 的编号（包括表格的所有行）
                  </li>
                </ol>
              </ul>
            </span>
            <span>
              <ul class="unord-list">
                <strong>&lt;td&gt; 和 &lt;th&gt; 元素：</strong>
                <ol>
                  <li>
                    td.cellIndex — 在封闭的
                    <code>&lt;tr&gt;</code> 中单元格的编号
                  </li>
                </ol>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 6; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>节点间的导航</h3>
            <span>
              <ul class="unord-list">
                <strong>节点之间的导航：</strong>
                <ol>
                  <li>父节点： <code>parentNode</code></li>
                  <li>前兄弟节点： <code>previousSibling</code></li>
                  <li>后兄弟节点： <code>nextSibling</code></li>
                  <li>子节点： <code>childNodes</code></li>
                  <li>第一个子节点： <code>firstChild</code></li>
                  <li>最后一个子节点： <code>lastChild</code></li>
                </ol>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 7; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>节点的属性</h3>
            <span>
              <ul class="unord-list">
                <strong>节点之间属性：</strong>
                <ol>
                  <li>nodeName： 获取node节点的名字</li>
                  <li>tagName： <code>获取元素的标签名词</code></li>
                </ol>
              </ul>
              <ul class="unord-list">
                <strong>innerHTML：</strong>
                <ol>
                  <li>将元素中的 HTML 获取为字符串形式</li>
                  <li>设置元素中的内容</li>
                </ol>
              </ul>
              <ul class="unord-list">
                <strong>outerHTML：</strong>
                <ol>
                  <li>包含了元素的完整 HTML</li>
                  <li>innerHTML 加上元素本身一样</li>
                </ol>
              </ul>
              <ul class="unord-list">
                <strong>textContent：</strong>
                <ol>
                  <li></li>
                  <li>仅仅获取元素中的文本内容</li>
                </ol>
              </ul>
              <ul class="unord-list">
                <strong>innerHTML和textContent的区别：</strong>
                <ol>
                  <li>
                    使用 innerHTML，我们将其“作为 HTML”插入，带有所有 HTML 标签
                  </li>
                  <li>
                    使用
                    textContent，我们将其“作为文本”插入，所有符号（symbol）均按字面意义处理
                  </li>
                </ol>
              </ul>
              <ul class="unord-list">
                <strong>nodeValue/data</strong>
                <ol>
                  <li>用于获取非元素节点的文本内容</li>
                </ol>
              </ul>

              <ul class="unord-list">
                <strong>hidden</strong>
                <ol>
                  <li>也是一个全局属性，可以用于设置元素隐藏</li>
                </ol>
              </ul>

              <ul class="unord-list">
                <strong>value</strong>
                <ol>
                  <li>
                    &lt;input&gt;，&lt;select&gt; 和
                    &lt;textarea&gt;（HTMLInputElement，HTMLSelectElement……）的
                    value
                  </li>
                </ol>
              </ul>

              <ul class="unord-list">
                <strong>href</strong>
                <ol>
                  <li>&lt;a href="..."&gt;（HTMLAnchorElement）的 href</li>
                </ol>
              </ul>

              <ul class="unord-list">
                <strong>id</strong>
                <ol>
                  <li>
                    也是一个全局属性，所有元素（HTMLElement）的 “id”
                    特性（attribute）的值
                  </li>
                </ol>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 8; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>元素的属性</h3>
            <span
              >浏览器在解析HTML元素时，会将对应的attribute也创建出来放到对应的元素对象上</span
            >
            <span>
              <ul class="unord-list">
                <strong>属性attribute的分类：</strong>
                <ol>
                  <li>
                    标准的attribute：某些attribute属性是标准的，比如id、class、href、type、value等
                  </li>
                  <li>
                    非标准的attribute：某些attribute属性是自定义的，比如abc、age、height等
                  </li>
                </ol>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 8; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>attribute的操作</h3>
            <span>
              <ul class="unord-list">
                <strong>对于所有的attribute访问都支持如下的方法：</strong>
                <ol>
                  <li>elem.hasAttribute(name) — 检查特性是否存在。</li>
                  <li>elem.getAttribute(name) — 获取这个特性值。</li>
                  <li>elem.setAttribute(name, value) — 设置这个特性值。</li>
                  <li>elem.removeAttribute(name) — 移除这个特性。</li>
                  <li>attributes：attr对象的集合，具有name、value属性。</li>
                </ol>
              </ul>
              <ul class="unord-list">
                <strong>attribute具备以下特征：</strong>
                <ol>
                  <li>它们的名字是大小写不敏感的（id 与 ID 相同）</li>
                  <li>它们的值总是字符串类型的</li>
                </ol>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 9; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>自定义属性</h3>
            <span>
              <ul class="unord-list">
                <strong>基本语法</strong>
                <ol>
                  <li>elem.hasAttribute(name) — 检查特性是否存在。</li>
                  <li>elem.getAttribute(name) — 获取这个特性值。</li>
                  <li>elem.setAttribute(name, value) — 设置这个特性值。</li>
                  <li>elem.removeAttribute(name) — 移除这个特性。</li>
                  <li>attributes：attr对象的集合，具有name、value属性。</li>
                </ol>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>JS动态修改样式</h3>
            <h3 style="margin-top: 26px; font-size: 18px">
              元素的className和classList
            </h3>
            <span>
              <ul class="unord-list">
                <strong
                  >元素的class
                  attribute，对应的property并非叫class，而是className：</strong
                >
                <ol>
                  <li>
                    这是因为JavaScript早期是不允许使用class这种关键字来作为对象的属性，所以DOM规范使用了className
                  </li>
                  <li>
                    虽然现在JavaScript已经没有这样的限制，但是并不推荐，并且依然在使用className这个名称
                  </li>
                </ol>
              </ul>
            </span>
            <span>
              <ul class="unord-list">
                <strong>elem.classList 是一个特殊的对象：</strong>
                <ol>
                  <li>elem.classList.add (class) ：添加一个类</li>
                  <li>elem.classList.remove(class)：添加/移除类</li>
                  <li>
                    elem.classList.toggle(class)
                    ：如果类不存在就添加类，存在就移除它
                  </li>
                  <li>
                    elem.classList.contains(class)：检查给定类，返回 true/false
                  </li>
                </ol>
              </ul>
            </span>
            <p style="margin-top: 10px">
              <span>注:</span>
              classList是可迭代对象，可以通过for of进行遍历
            </p>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>创建元素</h3>
            <span>
              <ul class="unord-list">
                <strong
                  >前面我们使用过 document.write 方法写入一个元素：</strong
                >
                <ol>
                  <li>
                    这种方式写起来非常便捷，但是对于复杂的内容、元素关系拼接并不方便
                  </li>
                  <li>
                    它是在早期没有DOM的时候使用的方案，目前依然被保留了下来
                  </li>
                </ol>
              </ul>
            </span>
            <span>
              <ul class="unord-list">
                <strong
                  >那么目前我们想要插入一个元素，通常会按照如下步骤：</strong
                >
                <ol>
                  <li>步骤一：创建一个元素</li>
                  <li>步骤二：插入元素到DOM的某一个位置</li>
                </ol>
              </ul>
            </span>
            <span>
              <ul class="unord-list">
                <strong>创建元素：document.createElement(tag)：</strong>
                <ol>
                  <li>
                    <code>
                      var h2El=document.createElement("h2")
                      <br />
                      h2El.innerHTML="我是标题"
                      <br />
                      h2El.classList.add("title")
                      <br />
                      boxEl.append(h2El)
                    </code>
                  </li>
                </ol>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>插入元素</h3>
            <span>
              <ul class="unord-list">
                <strong>
                  插入元素的方式如下：
                  <ol>
                    <li>
                      node.append(...nodes or strings) —— 在 node 末尾
                      插入节点或字符串
                    </li>
                    <li>
                      node.prepend(...nodes or strings) —— 在 node 开头
                      插入节点或字符串
                    </li>
                    <li>
                      node.before(...nodes or strings) —— 在 node 前面
                      插入节点或字符串
                    </li>
                    <li>
                      node.after(...nodes or strings) —— 在 node 后面
                      插入节点或字符串
                    </li>
                    <li>
                      node.replaceWith(...nodes or strings) —— 将 node
                      替换为给定的节点或字符串
                    </li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>移除和克隆元素</h3>
            <span>
              <ul class="unord-list">
                <strong>
                  移除元素我们可以调用元素本身的remove方法：
                  <ol>
                    <li>
                      <code>h2El.remove()</code>
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong>
                  如果我们想要复制一个现有的元素，可以通过cloneNode方法：
                  <ol>
                    <li>
                      可以传入一个**Boolean类型的值**，来决定是否是**深度克隆**
                    </li>
                    <li>深度克隆会克隆对应元素的子元素，否则不会</li>
                    <li>
                      <code
                        >var cloneBoxEl=boxEl.cloneNode(true)
                        <br />
                        document.body.append(cloneBoxEl)</code
                      >
                    </li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>旧的元素操作方法</h3>
            <span>
              <ul class="unord-list">
                <strong>
                  在很多地方我们也会看到一些旧的操作方法：
                  <ol>
                    <li>
                      <code style="font-size: 16px"
                        >parentElem.appendChild(node)：</code
                      >
                      在parentElem的父元素最后位置添加一个子元素
                    </li>
                    <li>
                      <code style="font-size: 16px"
                        >parentElem.insertBefore(node, nextSibling)：</code
                      >
                      在parentElem的nextSibling前面插入一个子元素
                    </li>
                    <li>
                      <code style="font-size: 16px"
                        >parentElem.replaceChild(node, oldChild)：</code
                      >
                      在parentElem中，新元素替换之前的oldChild元素
                    </li>
                    <li>
                      <code style="font-size: 16px"
                        >parentElem.removeChild(node)：</code
                      >

                      > 在parentElem中，移除某一个元素
                    </li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>元素的大小、滚动</h3>
            <span>
              <ul class="unord-list">
                <ol>
                  <li>clientWidth：contentWith+padding（不包含滚动条）</li>
                  <li>clientHeight：contentHeight+padding</li>
                  <li>clientTop：border-top的宽度</li>
                  <li>clientLeft：border-left的宽度</li>
                  <li>offsetWidth：元素完整的宽度</li>
                  <li>offsetHeight：元素完整的高度</li>
                  <li>offsetLeft：距离父元素的x</li>
                  <li>offsetHeight：距离父元素的y</li>
                  <li>scrollHeight：整个可滚动的区域高度</li>
                  <li>scrollTop：滚动部分的高度</li>
                </ol>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="DOM"
          >
            <h3>window的大小、滚动</h3>
            <span>
              <ul class="unord-list">
                <strong>window的width和height：</strong>
                <ol>
                  <li>
                    innerWidth、innerHeight：获取window窗口的宽度和高度（包含滚动条）
                  </li>
                  <li>
                    outerWidth、outerHeight：获取window窗口的整个宽度和高度（包括调试工具、工具栏）
                  </li>
                  <li>
                    documentElement.clientHeight、documentElement.clientWidth：获取html的宽度和高度（不包含滚动条）
                  </li>
                </ol>
              </ul>
            </span>
            <span>
              <ul class="unord-list">
                <strong>window的滚动位置：</strong>
                <ol>
                  <li>scrollX：X轴滚动的位置（别名pageXOffset）</li>
                  <li>scrollY：Y轴滚动的位置（别名pageYOffset）</li>
                </ol>
              </ul>
            </span>
            <span>
              <ul class="unord-list">
                <strong>也有提供对应的滚动方法：</strong>
                <ol>
                  <li>
                    方法 scrollBy(x,y) ：将页面滚动至 相对于当前位置的 (x, y)
                    位置
                  </li>
                  <li>方法 scrollTo(pageX,pageY) 将页面滚动至 绝对坐标</li>
                </ol>
              </ul>
            </span>
          </li>
        </ul>

        <!-- BOM -->
        <ul>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="BOM"
          >
            <h3>BOM（Browser Object Model）</h3>
            <span>
              <ul class="unord-list">
                <strong>
                  <ol>
                    <li>
                      简称
                      BOM，由浏览器提供的用于处理文档（document）之外的所有内容的其他对象
                    </li>
                    <li>比如navigator、location、history等对象</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong>
                  JavaScript有一个非常重要的运行环境就是浏览器：
                  <ol>
                    <li>
                      而且浏览器本身又作为一个应用程序需要对其本身进行操作
                    </li>
                    <li>
                      所以通常浏览器会有对应的对象模型（BOM，Browser Object
                      Model）
                    </li>
                    <li>
                      我们可以将BOM看成是连接JavaScript脚本与浏览器窗口的桥梁
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong>
                  BOM主要包括一下的对象模型
                  <ol>
                    <li>
                      window：包括全局属性、方法，控制浏览器窗口相关的属性、方法
                    </li>
                    <li>location：浏览器连接到的对象的位置（URL）</li>
                    <li>history：操作浏览器的历史</li>
                    <li>
                      navigator：用户代理（浏览器）的状态和标识（很少用到）
                    </li>
                    <li>screen：屏幕窗口信息（很少用到）</li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="BOM"
          >
            <h3>window对象</h3>
            <span>
              <ul class="unord-list">
                <strong>
                  window对象在浏览器中可以从两个视角来看待：
                  <ol>
                    <li>
                      我们知道ECMAScript其实是有一个全局对象的，这个全局对象在Node中是global，在浏览器中就是window对象
                    </li>
                    <li>作为浏览器窗口时，提供了对浏览器操作的相关的API</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong>
                  这两个视角存在大量重叠的地方，所以不需要刻意去区分它们：
                  <ol>
                    <li>
                      事实上对于浏览器和Node中全局对象名称不一样的情况，目前已经指定了对应的标准，称之为globalThis，并且大多数现代浏览器都支持它
                    </li>
                    <li>放在window对象上的所有属性都可以被访问</li>
                    <li>使用var定义的变量会被添加到window对象中</li>
                    <li>
                      window默认给我们提供了全局的函数和类：setTimeout、Math、Date、Object等
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong>
                  BOM主要包括一下的对象模型:
                  <ol>
                    <li>
                      window：包括全局属性、方法，控制浏览器窗口相关的属性、方法
                    </li>
                    <li>location：浏览器连接到的对象的位置（URL）</li>
                    <li>history：操作浏览器的历史</li>
                    <li>
                      navigator：用户代理（浏览器）的状态和标识（很少用到）
                    </li>
                    <li>screen：屏幕窗口信息（很少用到）</li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="BOM"
          >
            <h3>作用</h3>
            <span>
              <ul class="unord-list">
                <strong>
                  事实上window对象上肩负的重担是非常大的:
                  <ol>
                    <li>
                      第一：包含大量的属性，localStorage、console、location、history、screenX、scrollX等等（大概60+个属性）
                    </li>
                    <li>
                      第二：包含大量的方法，alert、close、scrollTo、open等等（大概40+个方法）
                    </li>
                    <li>
                      第三：包含大量的事件，focus、blur、load、hashchange等等（大概30+个事件）
                    </li>
                    <li>
                      第四：包含从EventTarget继承过来的方法，addEventListener、removeEventListener、dispatchEvent方法
                    </li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="BOM"
          >
            <h3>Location对象</h3>
            <span>location对象用于表示window上当前链接到的URL信息</span>
            <span>
              <ul class="unord-list">
                <strong>
                  属性:
                  <ol>
                    <li>href: 当前 window 对应的超链接 URL, 整个 URL；</li>
                    <li>protocol: 当前的协议；</li>
                    <li>host: 主机地址；</li>
                    <li>hostname: 主机地址(不带端口)；</li>
                    <li>port: 端口；</li>
                    <li>pathname: 路径；</li>
                    <li>search: 查询字符串；</li>
                    <li>hash: 哈希值；</li>
                    <li>username: URL 中的 username（很多浏览器已经禁用）；</li>
                    <li>password: URL 中的 password（很多浏览器已经禁用）；</li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="BOM"
          >
            <h3>方法</h3>
            <span>我们会发现location其实是URL的一个抽象实现</span>
            <span>
              <ul class="unord-list">
                <strong>
                  location有如下常用的方法：
                  <ol>
                    <li>assign：赋值一个新的URL，并且跳转到该URL中</li>
                    <li>
                      replace：打开一个新的URL，并且跳转到该URL中（不同的是不会在浏览记录中留下之前的记录）
                    </li>
                    <li>reload：重新加载页面，可以传入一个Boolean类型</li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="BOM"
          >
            <h3>URLSearchParams</h3>
            <span>
              <ul class="unord-list">
                <strong>
                  URLSearchParams 定义了一些实用的方法来处理 URL 的查询字符串：
                  <ol>
                    <li>可以将一个字符串转化成URLSearchParams类型</li>
                    <li>也可以将一个URLSearchParams类型转成字符串</li>
                    <li>
                      <code
                        >var urlsearch=new
                        URLSearchParams("name=why&age=18&height=1.8")
                        <br />
                        console.log(urlsearch.get("name")) //why
                        <br />
                        console.log(urlsearch.toString())
                        //name=why&age=18&height=1.8</code
                      >
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong>
                  URLSearchParams常见的方法有如下：
                  <ol>
                    <li>get：获取搜索参数的值</li>
                    <li>set：设置一个搜索参数和值</li>
                    <li>append：追加一个搜索参数和值</li>
                    <li>has：判断是否有某个搜索参数</li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="BOM"
          >
            <h3>history对象</h3>
            <span>history对象允许我们访问浏览器曾经的会话历史记录</span>
            <span>
              <ul class="unord-list">
                <strong>
                  有两个属性：
                  <ol>
                    <li>length：会话中的记录条数</li>
                    <li>state：当前保留的状态值</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong>
                  有五个方法：
                  <ol>
                    <li>back(): 返回上一页，等价于 history.go(-1)；</li>
                    <li>forward(): 前进下一页，等价于 history.go(1)；</li>
                    <li>go(): 加载历史中的某一页；</li>
                    <li>pushState(): 打开一个指定的地址；</li>
                    <li>
                      replaceState(): 打开一个新的地址，并且使用 replace；
                    </li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="JSON"
          >
            <h3>JSON</h3>
            <span
              >JSON的全称是JavaScript Object
              Notation，在目前的开发中，JSON是一种非常重要的数据格式，它并不是编程语言，而是一种可以在服务器和客户端之间传输的数据格式。</span
            >
            <span>
              <ul class="unord-list">
                <strong>
                  JSON基本介绍
                  <ol>
                    <li>
                      JSON是由Douglas
                      Crockford构想和设计的一种轻量级资料交换格式，算是JavaScript的一个子集
                    </li>
                    <li>
                      但是虽然JSON被提出来的时候是主要应用JavaScript中，但是目前已经独立于编程语言，可以在各个编程语言中使用
                    </li>
                    <li>很多编程语言都实现了将JSON转成对应模型的方式</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong>
                  其他的传输格式：
                  <ol>
                    <li>
                      XML：在早期的网络传输中主要是使用XML来进行数据交换的，但是这种格式在解析、传输等各方面都弱于JSON，所以目前已经很少在被使用了
                    </li>
                    <li>
                      Protobuf：另外一个在网络传输中目前已经越来越多使用的传输格式是protobuf，但是直到2021年的3.x版本才支持JavaScript，所以目前在前端使用的较少
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong>
                  JSON使用的场景：
                  <ol>
                    <li>网络数据的传输JSON数据</li>
                    <li>项目的某些配置文件</li>
                    <li>非关系型数据库（NoSQL）将json作为存储格式</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong>
                  基本语法：
                  <ol>
                    <li>
                      简单值：数字（Number）、字符串（String，不支持单引号）、布尔类型（Boolean）、null类型
                    </li>
                    <li>
                      对象值：由key、value组成，key是字符串类型，并且必须添加双引号，值可以是简单值、对象值、数组值
                    </li>
                    <li>数组值：数组的值可以是简单值、对象值、数组值</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong>
                  序列化：
                  <ol>
                    <li>比如我们希望将一个对象保存到localStorage中</li>
                    <li>
                      但是如果我们直接存放一个对象，这个对象会被转化成 [object
                      Object] 格式的字符串，并不是我们想要的结果
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong>
                  JSON常用方法：
                  <ol>
                    <li>
                      JSON.stringify方法：将JavaScript类型转成对应的JSON字符串
                    </li>
                    <li>
                      JSON.parse方法：解析JSON字符串，转回对应的JavaScript类型
                    </li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="Storage"
          >
            <h3>Storage</h3>
            <span>
              WebStorage主要提供了一种机制，可以让浏览器提供一种比cookie更直观的key、value存储方式
            </span>
            <span>
              <ul class="unord-list">
                <strong
                  >WebStorage分为两种：
                  <ol>
                    <li>
                      localStorage：本地存储，提供的是一种永久性的存储方法，在关闭掉网页重新打开时，存储的内容依然保留
                    </li>
                    <li>
                      sessionStorage：会话存储，提供的是本次会话的存储，在关闭掉会话时，存储的内容会被清除>
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >localStorage和sessionStorage的区别:
                  <ol>
                    <li>
                      验证一：关闭网页后重新打开，localStorage会保留，而sessionStorage会被删除
                    </li>
                    <li>
                      验证二：在页面内实现跳转，localStorage会保留，sessionStorage也会保留
                    </li>
                    <li>
                      验证三：在页面内实现跳转，然后关闭浏览器，localStorage会保留，而sessionStorage会被删除
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >属性：
                  <ol>
                    <li>
                      Storage.length：只读属性，返回一个整数，表示存储在Storage对象中的数据项数量
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >方法：
                  <ol>
                    <li>
                      Storage.key()：该方法接受一个数值n作为参数，返回存储中的第n个key名称
                    </li>
                    <li>
                      Storage.getItem()：该方法接受一个key作为参数，并且返回key对应的value
                    </li>
                    <li>
                      Storage.setItem()：该方法接受一个key和value，并且将会把key和value添加到存储中
                    </li>
                    <li>如果key存储，则更新其对应的值</li>
                    <li>
                      Storage.removeItem()：该方法接受一个key作为参数，并把该key从存储中删除
                    </li>
                    <li>Storage.clear()：该方法的作用是清空存储中的所有key</li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="事件"
          >
            <h3>事件</h3>
            <span>
              JavaScript
              中的事件是指在网页中发生的各种交互动作，如鼠标点击、键盘按下、页面加载等。事件可以触发事件处理函数，以执行特定的操作或逻辑。
            </span>
            <span>
              <ul class="unord-list">
                <strong
                  >事件监听方式：
                  <ol>
                    <li>事件监听方式一：在script中直接监听（很少使用）</li>
                    <li>事件监听方式二：DOM属性，通过元素的on来监听事件</li>
                    <li>
                      事件监听方式三：通过EventTarget中的addEventListener来监听
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >常见的事件列表：
                  <ol>
                    <li>
                      click —— 当鼠标点击一个元素时（触摸屏设备会在点击时生成）
                    </li>
                    <li>
                      mouseover / mouseout —— 当鼠标指针移入/离开一个元素时
                    </li>
                    <li>
                      mousedown / mouseup —— 当在元素上按下/释放鼠标按钮时
                    </li>
                    <li>mousemove —— 当鼠标移动时</li>
                    <li>keydown 和 keyup —— 当按下和松开一个按键时</li>
                    <li>submit —— 当访问者提交了一个 form 时</li>
                    <li>
                      focus —— 当访问者聚焦于一个元素时，例如聚焦于一个 input
                    </li>
                    <li>
                      DOMContentLoaded —— 当 HTML 的加载和处理均完成，DOM
                      被完全构建完成时
                    </li>
                    <li>transitionend —— 当一个 CSS 动画完成时</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >事件冒泡和事件捕获：
                  <ol>
                    <li>
                      我们会发现默认情况下事件是从最内层的span向外依次传递的顺序**，这个顺序我们称之为事件冒泡（Event
                      Bubble）
                    </li>
                    <li>
                      事实上，还有另外一种监听事件流的方式就是从外层到内层（body
                      -> span），这种称之为事件捕获（Event Capture）
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >执行顺序为：
                  <ol>
                    <li>捕获阶段：事件（从 Window）向下走近元素</li>
                    <li>目标阶段：事件到达目标元素</li>
                    <li>冒泡阶段： 事件从元素上开始冒泡</li>
                    <li>我们可以通过event对象来获取当前的阶段</li>
                    <li>开发中通常会使用事件冒泡，所以事件捕获了解即可</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >事件对象：
                  <ol>
                    <li>当一个事件发生时，就会有和这个事件相关的很多信息</li>
                    <li>
                      比如事件的类型是什么，你点击的是哪一个元素，点击的位置是哪里等等相关的信息
                    </li>
                    <li>
                      那么这些信息会被封装到一个Event对象中，这个对象由浏览器创建，称之为event对象
                    </li>
                    <li>
                      该对象给我们提供了想要的一些属性，以及可以通过该对象进行某些操作
                    </li>
                    <li>
                      event对象会在传入的事件处理（event
                      handler）函数回调时，被系统传入
                    </li>
                    <li>我们可以在回调函数中拿到这个event对象</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >event常见的属性：
                  <ol>
                    <li>type：事件的类型</li>
                    <li>target：当前事件发生的元素（会保持不变）</li>
                    <li>
                      currentTarget：当前处理事件的元素（事件绑定的元素，this指向它）
                    </li>
                    <li>eventPhase：事件所处的阶段</li>
                    <li>offsetX、offsetY：事件发生在元素内的位置</li>
                    <li>clientX、clientY：事件发生在客户端内的位置</li>
                    <li>pageX、pageY：事件发生在客户端相对于document的位置</li>
                    <li>screenX、screenY：事件发生相对于屏幕的位置</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >event常见的方法：
                  <ol>
                    <li>preventDefault：取消事件的默认行为</li>
                    <li>
                      stopPropagation：阻止事件的进一步传递（冒泡或者捕获都可以阻止）
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >事件处理中的this：
                  <ol>
                    <li>在函数中，我们也可以通过this来获取当前的发生元素</li>
                    <li>
                      this关键字：在事件处理程序中，this通常是指当前正在处理该事件的元素，即事件的currentTarget属性值。例如，在一个按钮的点击事件处理程序中，this指向该按钮元素本身
                    </li>
                    <li>
                      target属性：事件的target属性指向最初触发该事件的那个元素。例如，在一个按钮的点击事件处理程序中，event.target指向被点击的按钮元素本身
                    </li>
                    <li>
                      currentTarget属性：事件的currentTarget属性指向当前正在处理该事件的元素，即事件流经过的当前元素。例如，在一个按钮的点击事件处理程序中，event.currentTarget指向包含该按钮的父元素（如果有的话）
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >EventTarget类：
                  <ol>
                    <li>
                      EventTarget 是一个接口，它是 DOM
                      中的基础类型之一。它定义了可以接收和处理事件的对象所需实现的方法和属性。在浏览器中，几乎所有的
                      DOM 节点都实现了 EventTarget 接口，包括 window 和 document
                      对象
                    </li>
                    <li>addEventListener：注册某个事件类型以及事件处理函数</li>
                    <li>
                      removeEventListener：移除某个事件类型以及事件处理函数
                    </li>
                    <li>dispatchEvent**：派发某个事件类型到EventTarget上</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >事件委托：
                  <ol>
                    <li>
                      事件冒泡在某种情况下可以帮助我们实现强大的事件处理模式 –
                      事件委托模式（也是一种设计模式）
                    </li>
                    <li>
                      因为当子元素被点击时，父元素可以通过冒泡可以监听到子元素的点击
                    </li>
                    <li>并且可以通过event.target获取到当前监听的元素</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >常见的鼠标事件：
                  <ol>
                    <li>click：当用户点击某个对象时调用的事件句柄</li>
                    <li>contextmenu：在用户点击鼠标右键打开上下文菜单时触发</li>
                    <li>dblclick：当用户双击某个对象时调用的事件句柄</li>
                    <li>mousedown：鼠标按钮被按下</li>
                    <li>mouseup：鼠标按键被松开</li>
                    <li>mouseover：鼠标移到某元素之上。(支持冒泡)</li>
                    <li>mouseout：鼠标从某元素移开。(支持冒泡)</li>
                    <li>
                      mouseenter：当鼠标指针移动到元素上时触发。(不支持冒泡)
                    </li>
                    <li>mouseleave：当鼠标指针移出元素时触发。(不支持冒泡)</li>
                    <li>mousemove：鼠标被移动</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >常见的键盘事件：
                  <ol>
                    <li>onkeydown：某个键盘按键被按下</li>
                    <li>onkeypress：某个键盘按键被按下</li>
                    <li>onkeyup：某个键盘按键被松开</li>
                    <li>
                      code：“按键代码”（"KeyA"，"ArrowLeft"
                      等），特定于键盘上按键的物理位置
                    </li>
                    <li>
                      key：字符（"A"，"a"
                      等），对于非字符（non-character）的按键，通常具有与 code
                      相同的值。）
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >常见的表单事件：
                  <ol>
                    <li>onchange：该事件在表单元素的内容改变时触发</li>
                    <li>oninput：元素获取用户输入时触发</li>
                    <li>onfocus：元素获取焦点时触发</li>
                    <li>onblur：元素失去焦点时触发</li>
                    <li>onreset：表单重置时触发</li>
                    <li>onsubmit：表单提交时触发/li></li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >文档加载事件：
                  <ol>
                    <li>
                      DOMContentLoaded：浏览器已完全加载 HTML，并构建了 DOM
                      树，但像 img 和样式表之类的外部资源可能尚未加载完成
                    </li>
                    <li>
                      load：浏览器不仅加载完成了
                      HTML，还加载完成了所有外部资源：图片，样式等
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >window定时器方法：
                  <ol>
                    <li>
                      setTimeout 允许我们将函数推迟到一段时间间隔之后再执行
                    </li>
                    <li>
                      setInterval
                      允许我们重复运行一个函数，从一段时间间隔之后开始运行，之后以该时间间隔连续重复运行该函数
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >关闭定时器方法：
                  <ol>
                    <li>clearTimeout：取消setTimeout的定时器</li>
                    <li>clearInterval： 取消setInterval的定时器</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >setTimeout：
                  <ol>
                    <li>
                      <code
                        >let timerId =
                        setTimeout(func|code,[delay],[arg1],[arg2],...)</code
                      >
                    </li>
                    <li>
                      func|code：想要执行的函数或代码字符串，
                      一般传入的都是函数，由于某些历史原因，支持传入代码字符串，但是不建议这样做
                    </li>
                    <li>
                      delay：执行前的延时，以毫秒为单位（1000 毫秒 = 1
                      秒），默认值是 0
                    </li>
                    <li>
                      arg1，arg2…：要传入被执行函数（或代码字符串）的参数列表
                    </li>
                    <li>
                      setTimeout 在调用时会返回一个“定时器标识符（timer
                      identifier）”，我们可以使用它来取消执行
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >setInterval：
                  <ol>
                    <li>setInterval方法和setTimeout的语法相同</li>
                    <li>
                      <code
                        >let timerId =
                        setInterval(func|code,[delay],[arg1],[arg2],...)</code
                      >
                    </li>
                    <li>所有参数的意义也是相同的</li>
                    <li>
                      不过与 setTimeout 只执行一次不同，setInterval
                      是每间隔给定的时间周期性执行
                    </li>
                    <li>
                      setInterval也会返回一个“定时器标识符（timer
                      identifier）”，我们可以通过clearInterval来取消这个定时器
                    </li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="Es6语法"
          >
            <h3>Es6语法</h3>
            <span>
              <ul class="unord-list">
                <strong
                  >字面量的增强
                  <ol>
                    <li>
                      属性增强：<code>let obj = { name, //同name:name}</code>
                    </li>
                    <li>
                      属性增强：<code
                        >let obj = { running(){console.log("running~")
                        //同running:function(){...} }, }</code
                      >
                    </li>
                    <li>
                      计算属性：<code
                        >[key]:"广州" //同"addresscity":"广州"</code
                      >
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >数组解构
                  <ol>
                    <li>
                      基本用法： <code>let [name1,name2,name3] = names</code>
                    </li>
                    <li>
                      顺序问题，严格依照顺序，中间跳过也要留空：<code
                        >let [name1, ,name3] = names</code
                      >
                    </li>
                    <li>
                      剩余解构为数组：<code
                        >let [name1,name2,...newNames]=names</code
                      >
                    </li>
                    <li>
                      解构的默认值：<code
                        >let [name1,name2,name3="default"]=names</code
                      >
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >对象解构
                  <ol>
                    <li>基本用法： <code>let {name,age,height}=obj</code></li>
                    <li>
                      顺序问题，没有顺序，依照key解构：<code
                        >let {height,name,age} = obj</code
                      >
                    </li>
                    <li>
                      对变量进行重命名：<code
                        >let {height:wHeight,name:wNAme,age:wAge} = obj</code
                      >
                    </li>
                    <li>
                      默认值：<code
                        >let
                        {height:wHeight,name:wNAme,age:wAge,address:wAddress="中国"}
                        = obj</code
                      >
                    </li>
                    <li>
                      剩余的解构为对象：<code
                        >let {name,age,...newObj} = obj</code
                      >
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >新的ECMA代码执行描述
                  <ol>
                    <li>
                      执行上下文栈 (Execution Context
                      Stack)：用于执行上下文的栈结构。
                    </li>
                    <li>
                      执行上下文 (Execution
                      Context)：代码在执行之前会先创建对应的执行上下文
                    </li>
                    <li>
                      变量对象 (Variable
                      Object)：上下文关联的VO对象，用于记录函数和变量声明
                    </li>
                    <li>
                      全局对象 (Global Object)：全局执行上下文关联的VO对象
                    </li>
                    <li>
                      激活对象 (Activation Object)：函数执行上下文关联的VO对象
                    </li>
                    <li>
                      作用域链 (Scope Chain)：用于关联指向上下文的变量查找
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >箭头函数
                  <ol>
                    <li>
                      箭头函数是 ES6（ECMAScript
                      2015）中引入的一种新的函数声明方式，它提供了一种简洁而清晰的语法来定义函数
                    </li>
                    <li>
                      基本写法：<code
                        >const fun = (args) => { console.log(1) }</code
                      >
                    </li>
                    <li>
                      如果只有一个参数，可以省略参数括号：<code
                        >const fun = args => { return args + 1 }</code
                      >
                    </li>
                    <li>
                      如果函数体只有一条语句，可以省略大括号和 return
                      关键字：<code>const fun = () => '这是返回值' ;</code>
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >箭头函数特点
                  <ol>
                    <li>
                      通常情况下，箭头函数是匿名的，但可以将其赋值给一个变量，从而创建一个具名函数
                    </li>
                    <li>
                      箭头函数不会创建自己的 this，它会继承父作用域中的 this
                      值。这使得箭头函数在回调函数或嵌套函数中的行为更加直观和易于理解
                    </li>
                    <li>
                      箭头函数通常比传统函数更简洁，特别是在回调函数和短小的函数中
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >箭头函数适用场景
                  <ol>
                    <li>箭头函数在回调函数中使用时，可以让代码更加简洁易读</li>
                    <li>
                      由于箭头函数不会创建自己的
                      this，因此在需要绑定父作用域中的 this
                      时，箭头函数是一个很好的选择
                    </li>
                    <li>
                      在需要固定函数内部的 this 指向时，通常会使用 bind()
                      方法，但是箭头函数可以避免这种额外的绑定过程
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >注意事项
                  <ol>
                    <li>
                      箭头函数不能用作构造函数，不能使用 new
                      关键字调用它们，并且不能设置它们自己的 this 值
                    </li>
                    <li>
                      箭头函数没有自己的 arguments 对象，但可以访问父作用域中的
                      arguments 对象
                    </li>
                    <li>
                      由于箭头函数绑定了父作用域中的
                      this，因此不适合用作对象的方法，因为它们无法访问对象的
                      this
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >let/const
                  <ol>
                    <li>
                      从直观的角度来说，let和var是没有太大的区别的，都是用于声明一个变量
                    </li>
                    <li>
                      const关键字是constant的单词的缩写，表示常量、衡量的意思
                    </li>
                    <li>它表示保存的数据一旦被赋值，就不能被修改</li>
                    <li>
                      但是如果赋值的是引用类型，那么可以通过引用找到对应的对象，修改对象的内容；比如可以修改其属性（如果它是一个对象）或元素（如果它是一个数组）
                    </li>
                    <li>
                      <span style="color: red">注：</span
                      >let、const不允许重复声明变量
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >let const 和 var区别
                  <ol>
                    <li>
                      var有变量提升 let const 没有 所谓变量提升就是
                      在js代码执行的时候 会把var声明的变量
                      提到当前作用域的最前端 然后只提升变量声明 不提升变量赋值
                    </li>
                    <li>let const声明的变量 会生成块级作用域</li>
                    <li>var可以重复声明 let const 不可以</li>
                    <li>Let 声明的是变量 可修改 const 声明的是常量不可修改</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >块级作用域
                  <ol>
                    <li>ES5时，只有两个作用域：全局作用域和函数作用域</li>
                    <li>
                      ES6中新增了块级作用域，并且通过let、const、function、class声明的标识符是具备块级作用域的限制的
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >模板字符串
                  <ol>
                    <li>
                      ES6允许我们使用字符串模板来嵌入JS的变量或者表达式来进行拼接
                    </li>
                    <li>
                      首先，我们会使用 **``** 符号来编写字符串，称之为模板字符串
                    </li>
                    <li>
                      其次，在模板字符串中，我们可以通过 **${expression}**
                      来嵌入动态的内容
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >函数的默认参数
                  <ol>
                    <li>在ES6中，我们允许给函数一个默认值</li>
                    <li>
                      <code
                        >function foo(x=20,y=30){<br />
                        console.log(x,y) <br />
                        } <br />
                        foo(50,100) //50 100 <br />
                        foo() //20 30</code
                      >
                    </li>
                    <li>
                      默认值也可以和解构一起来使用:
                      <code
                        ><br />
                        function foo({name,age}={ name:"why",age:18}){ <br />
                        console.log(name,age) <br />
                        }
                      </code>
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >函数的剩余参数
                  <ol>
                    <li>
                      ES6中引用了rest
                      parameter，可以将不定数量的参数放入到一个数组中
                    </li>
                    <li>
                      如果最后一个参数是 ...
                      为前缀的，那么它会将剩余的参数放到该参数中，并且作为一个数组
                    </li>
                    <li>剩余参数和arguments是有区别的</li>
                    <li>
                      剩余参数只包含那些没有对应形参的实参，而 arguments
                      对象包含了传给函数的所有实参
                    </li>
                    <li>
                      arguments对象不是一个真正的数组，而rest参数是一个真正的数组，可以进行数组的所有操作
                    </li>
                    <li>
                      arguments是早期的ECMAScript中为了方便去获取所有的参数提供的一个数据结构，而rest参数是ES6中提供并且希望以此来替代arguments的
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >展开运算符
                  <ol>
                    <li>展开运算符其实是一种浅拷贝</li>
                    <li>在字符串使用</li>
                    <li>在函数调用时使用</li>
                    <li>在数组构造时使用</li>
                    <li>
                      在构建对象字面量时（不是任何对象都可以，因为对象默认不可迭代【可迭代对象：数组/String/arguments】）
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >Symbol
                  <ol>
                    <li>Symbol是ES6中新增的一个基本数据类型，翻译为符号</li>
                    <li>
                      Symbol就是为了解决对象属性名冲突，用来生成一个独一无二的值
                    </li>
                    <li>
                      Symbol值是通过Symbol函数来生成的，生成后可以作为属性名
                    </li>
                    <li>
                      也就是在ES6中，==对象的属性名可以使用字符串，也可以使用Symbol值；==（用其他也会先转成字符串再当属性名）
                    </li>
                    <li>
                      Symbol即使多次创建值，它们也是不同的：Symbol函数执行后每次创建出来的值都是独一无二的
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >Set
                  <ol>
                    <li>
                      Set是一个新增的数据结构，可以用来保存数据，类似于数组，但是和数组的区别是元素不能重复
                    </li>
                    <li>
                      创建Set我们需要通过Set构造函数（暂时没有字面量创建的方式）
                    </li>
                    <li>
                      我们可以发现Set中存放的元素是不会重复的，那么Set有一个非常常用的功能就是给数组去重
                    </li>
                    <li>
                      也就是在ES6中，==对象的属性名可以使用**字符串**，也可以使用**Symbol值**；==（用其他也会先转成字符串再当属性名）
                    </li>
                    <li>
                      Symbol即使多次创建值，它们也是不同的：**Symbol函数执行后每次创建出来的值都是独一无二的
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >Set常见方法、属性
                  <ol>
                    <li>属性： size：返回Set中元素的个数</li>
                    <li>add(value)：添加某个元素，返回Set对象本身</li>
                    <li>
                      delete(value)：从set中删除和这个值相等的元素，返回boolean类型
                    </li>
                    <li>clear()：清空set中所有的元素，没有返回值</li>
                    <li>
                      has(value)：判断set中是否存在某个元素，返回boolean类型
                    </li>
                    <li>forEach(callback, [, thisArg])：通过forEach遍历set</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >Map
                  <ol>
                    <li>另外一个新增的数据结构是Map，用于存储映射关系</li>
                    <li>之前使用对象来存储映射关系，他们是有区别的</li>
                    <li>
                      事实上我们对象存储映射关系只能用字符串（ES6新增了Symbol）作为属性名（key）
                    </li>
                    <li>
                      某些情况下我们可能希望通过其他类型作为key，比如对象，这个时候会自动将对象转成字符串来作为key
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >Map的常用方法、属性
                  <ol>
                    <li>属性：size：返回Map中元素的个数</li>
                    <li>
                      set(key,
                      value)：在Map中添加key、value，并且返回整个Map对象
                    </li>
                    <li>get(key)：根据key获取Map中的value</li>
                    <li>has(key)：判断是否包括某一个key，返回Boolean类型</li>
                    <li>delete(key)：根据key删除一个键值对，返回Boolean类型</li>
                    <li>clear()：清空所有的元素</li>
                    <li>forEach(callback, [, thisArg])：通过forEach遍历Map</li>
                    <li>Map也可以通过for of进行遍历</li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="Promise"
          >
            <h3>Promise介绍</h3>
            <span>
              Promise是一个类，可以翻译成 承诺、许诺
              、期约。当我们需要的时候，给予调用者一个承诺：待会儿我会给你回调数据时，就可以创建一个Promise的对象
            </span>
            <span>
              <ul class="unord-list">
                <strong>
                  <ol>
                    <li>
                      通过new创建Promise对象时，我们需要传入一个回调函数，我们称之为executor
                    </li>
                    <li>
                      这个回调函数会被立即执行，并且给传入另外两个回调函数resolve、reject
                    </li>
                    <li>
                      当我们调用resolve回调函数时，会执行Promise对象的then方法传入的回调函数
                    </li>
                    <li>
                      当我们调用reject回调函数时，会执行Promise对象的catch方法传入的回调函数
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >可以将它划分成三个状态：
                  <ol>
                    <li>
                      待定（pending）: 初始状态，既没有被兑现，也没有被拒绝
                    </li>
                    <li>已兑现（fulfilled）: 意味着操作成功完成</li>
                    <li>已拒绝（rejected）: 意味着操作失败</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >Executor：
                  <ol>
                    <li>
                      Executor是在创建Promise时需要传入的一个回调函数，这个回调函数会被立即执行，并且传入两个参数，通常我们会在Executor中确定我们的Promise状态
                    </li>
                    <li>
                      通过resolve，可以兑现（fulfilled）Promise的状态，我们也可以称之为已决议（resolved）
                    </li>
                    <li>通过reject，可以拒绝（reject）Promise的状态</li>
                    <li>
                      这里需要注意：一旦状态被确定下来，Promise的状态会被
                      锁死，该Promise的状态是不可更改的
                    </li>
                    <li>
                      在我们调用resolve的时候，如果resolve传入的值本身不是一个Promise，那么会将该Promise的状态变成
                      兑现（fulfilled）
                    </li>
                    <li>
                      在之后我们去调用reject时，已经不会有任何的响应了（并不是这行代码不会执行，而是无法改变Promise状态）
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >resolve不同值的区别：
                  <ol>
                    <li>
                      情况一：如果resolve传入一个普通的值或者对象，那么这个值会作为then回调的参数
                    </li>
                    <li>
                      情况二：如果resolve中传入的是另外一个Promise，那么这个新Promise会决定原Promise的状态
                    </li>
                    <li>
                      情况三（避免）：如果resolve中传入的是一个对象，并且这个对象有实现then方法，那么会执行该then方法，并且根据then方法的结果来决定Promise的状态
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >Promise的实例方法：
                  <ol>
                    <li>
                      then方法，接受两个参数：fulfilled的回调函数：当状态变成fulfilled时会回调的函数；reject的回调函数：当状态变成reject时会回调的函数
                    </li>
                    <li>
                      一个Promise的then方法是可以被多次调用的，每次调用我们都可以传入对应的fulfilled回调，当Promise的状态变成fulfilled的时候，这些回调函数都会被执行
                    </li>
                    <li>
                      then方法本身是有返回值的，它的返回值是一个Promise，所以我们可以进行如下的链式调用
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >Promise有三种状态，那么这个Promise处于什么状态：
                  <ol>
                    <li>
                      当then方法中的回调函数本身在执行的时候，那么它处于pending状态
                    </li>
                    <li>
                      当then方法中的回调函数返回一个结果时：情况一：返回一个普通的值，那么它处于fulfilled状态，并且会将结果作为resolve的参数；情况二：返回一个Promise，情况三：返回一个thenable值
                    </li>
                    <li>当then方法抛出一个异常时，那么它处于reject状态</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >catch方法：
                  <ol>
                    <li>catch方法也是Promise对象上的一个方法（实例方法）</li>
                    <li>
                      一个Promise的catch方法是可以被多次调用的，每次调用我们都可以传入对应的reject回调，当Promise的状态变成reject的时候，这些回调函数都会被执行
                    </li>
                    <li>当then方法抛出一个异常时，那么它处于reject状态</li>
                    <li>
                      事实上catch方法也是会返回一个Promise对象的，所以catch方法后面我们可以继续调用then方法或者catch方法,那么如果我们希望后续继续执行catch，那么需要抛出一个异常
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >finally方法：
                  <ol>
                    <li>
                      finally是在ES9（ES2018）中新增的一个特性：表示无论Promise对象无论变成fulfilled还是rejected状态，最终都会被执行的代码
                    </li>
                    <li>
                      finally方法是==不接收参数的==，因为无论前面是fulfilled状态，还是rejected状态，它都会执行
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >all方法:
                  <ol>
                    <li>
                      它的作用是将多个Promise包裹在一起形成一个新的Promise,新的Promise状态由包裹的所有Promise共同决定
                    </li>
                    <li>
                      当所有的Promise状态变成fulfilled状态时，新的Promise状态为fulfilled，并且会将所有Promise的返回值组成一个数组（所有Promise实例都解决后再执行回调函数）
                    </li>
                    <li>
                      当有一个Promise状态为reject时，新的Promise状态为reject，并且会将第一个reject的返回值作为参数
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >allSettled方法:
                  <ol>
                    <li>
                      all方法有一个缺陷：当有其中一个Promise变成reject状态时，新Promise就会立即变成对应的reject状态
                    </li>
                    <li>
                      在ES11（ES2020）中，添加了新的API Promise.allSettled
                    </li>
                    <li>
                      该方法会在所有的Promise都有结果（settled），无论是fulfilled，还是rejected时，才会有最终的状态;并且这个Promise的结果一定是fulfilled的
                    </li>
                    <li>
                      allSettled的结果是一个数组，数组中存放着每一个Promise的结果，并且是对应一个对象的，这个对象中包含status状态，以及对应的value值
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >race方法:
                  <ol>
                    <li>
                      如果有一个Promise有了结果，我们就希望决定最终新Promise的状态，那么可以使用race方法
                    </li>
                    <li>
                      race是竞技、竞赛的意思，表示多个Promise相互竞争，谁先有结果，那么就使用谁的结果
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >any方法:
                  <ol>
                    <li>any方法是ES12中新增的方法，和race方法是类似的</li>
                    <li>
                      any方法会等到一个fulfilled状态，才会决定新Promise的状态（有一个解决就解决），如果所有的Promise都是reject的，那么也会等到所有的Promise都变rejected状态（都拒绝就报错）
                    </li>
                    <li>
                      如果所有的Promise都是reject的，那么会报一个AggregateError的错误
                    </li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="防抖节流"
          >
            <h3>防抖</h3>
            <span>
              <ul class="unord-list">
                <strong>
                  <ol>
                    <li>
                      当事件触发时，相应的函数并不会立即触发，而是会等待一定的时间
                    </li>
                    <li>当事件密集触发时，函数的触发会被频繁的推迟</li>
                    <li>
                      只有等待了一段时间也没有事件触发，才会真正的执行响应函数
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >防抖的应用场景：
                  <ol>
                    <li>输入框中频繁的输入内容，搜索或者提交信息</li>
                    <li>频繁的点击按钮，触发某个事件</li>
                    <li>监听浏览器滚动事件，完成某些特定操作</li>
                    <li>用户缩放浏览器的resize事件</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >案例-想要搜索MacBook：
                  <ol>
                    <li>
                      当我输入m时，为了更好的用户体验，通常会出现对应的联想内容，这些联想内容通常是保存在服务器的，所以需要一次网络请求
                    </li>
                    <li>当继续输入ma时，再次发送网络请求</li>
                    <li>那么macbook一共需要发送7次网络请求</li>
                    <li>
                      这大大损耗我们整个系统的性能，无论是前端的事件处理，还是对于服务器的压力
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >我们不需要这么多次的网络请求
                  <ol>
                    <li>
                      不需要，正确的做法应该是在合适的情况下再发送网络请求
                    </li>
                    <li>
                      比如如果用户快速的输入一个macbook，那么只是发送一次网络请求
                    </li>
                    <li>
                      比如如果用户是输入一个m想了一会儿，这个时候m确实应该发送一次网络请求
                    </li>
                    <li>
                      也就是我们应该监听用户在某个时间，比如500ms内，没有再次触发时间时，再发送网络请求
                    </li>
                    <li>
                      这就是防抖的操作：只有在某个时间内，没有再次触发某个函数时，才真正的调用这个函数
                    </li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 10; margin: 0px 0px 35px 0px"
            data-animate
            id="防抖节流"
          >
            <h3>节流</h3>
            <span>
              <ul class="unord-list">
                <strong>
                  <ol>
                    <li>当事件触发时，会执行这个事件的响应函数</li>
                    <li>
                      如果这个事件会被频繁触发，那么节流函数会按照一定的频率来执行函数
                    </li>
                    <li>
                      不管在这个中间有多少次触发这个事件，执行函数的频繁总是固定的
                    </li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >节流的应用场景：
                  <ol>
                    <li>监听页面的滚动事件</li>
                    <li>鼠标移动事件</li>
                    <li>用户频繁点击按钮操作</li>
                    <li>游戏中的一些设计</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >案例
                  <ol>
                    <li>在飞机大战的游戏中，我们按下空格会发射一个子弹</li>
                    <li>
                      很多飞机大战的游戏中会有这样的设定，即使按下的频率非常快，子弹也会保持一定的频率来发射
                    </li>
                    <li>
                      比如1秒钟只能发射一次，即使用户在这1秒钟按下了10次，子弹会保持发射一颗的频率来发射
                    </li>
                    <li>但是事件是触发了10次的，响应的函数只触发了一次</li>
                  </ol>
                </strong>
              </ul>
              <ul class="unord-list">
                <strong
                  >我们不需要这么多次的网络请求
                  <ol>
                    <li>
                      不需要，正确的做法应该是在合适的情况下再发送网络请求
                    </li>
                    <li>
                      比如如果用户快速的输入一个macbook，那么只是发送一次网络请求
                    </li>
                    <li>
                      比如如果用户是输入一个m想了一会儿，这个时候m确实应该发送一次网络请求
                    </li>
                    <li>
                      也就是我们应该监听用户在某个时间，比如500ms内，没有再次触发时间时，再发送网络请求
                    </li>
                    <li>
                      这就是防抖的操作：只有在某个时间内，没有再次触发某个函数时，才真正的调用这个函数
                    </li>
                  </ol>
                </strong>
              </ul>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import Anchor from "@/basic/webapi/anchor.vue";
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
      flex-direction: column;
      ul {
        height: 100%;
        width: 100%;
        max-width: 70ch;
        margin: 0 auto;
        padding-top: 20px;
        li {
          margin-bottom: 40px;
          h3 {
            font-size: 30px;
            margin-bottom: 20px;
          }
          span {
            font-size: 16px;
            color: #555;
            display: inline-block;
            line-height: 36px;
            .unord-list {
              width: 100%;
              strong {
                font-size: 22px;
              }
              li {
                position: relative;
                margin: 6px 0px 0px 30px;
                font-size: 16px;
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