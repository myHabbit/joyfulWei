<template>
  <div class="basic-head">
    <div class="basic-swiper">
      <div class="basic">
        <Anchor />
        <ul>
          <li
            style="--stagger: 1; margin: 0px 0px 40px 0px"
            data-animate
            id="JS对象"
          >
            <h3>JS 对象数组函数介绍</h3>
          </li>
          <li
            style="--stagger: 2; margin: 0px 0px 35px 0px"
            data-animate
            id="JS-Object"
          >
            <h3>JS对象（Object）</h3>
            <span>
              JavaScript
              中的对象是一种复合数据类型，它允许你将多个值组合在一起并按照键值对的方式进行存储。对象可以包含各种数据类型的值，包括字符串、数字、布尔值、函数、甚至其他对象。
              <br />
            </span>
            <span>
              对象是由花括号 {} 包围的一组键值对。键是字符串（或在 ES6 中可以是
              Symbol），值可以是任何有效的 JavaScript
              数据类型。键值对之间使用逗号分隔。
            </span>
            <span>
              <ul class="unord-list">
                <li>
                  <strong
                    >创建对象方式：
                    <ol>
                      <li>
                        使用字面量创建对象：let person = { name: 'John', age:
                        30, city: 'New York' };
                      </li>
                      <li>
                        使用构造函数创建数组：使用构造函数创建对象 function
                        Person(name, age) { this.name = name; this.age = age; }
                        <br />
                        let person = new Person('Alice', 25);
                      </li>
                    </ol>
                  </strong>
                </li>
                <li>
                  <strong
                    >访问和修改对象属性：
                    <ol>
                      <li>输出：console.log(person.name);</li>
                      <li>修改：person.age = 35;</li>
                    </ol>
                  </strong>
                </li>
                <li>
                  <strong
                    >对象中的方法：
                    <ol>
                      <li>Object.keys(): 返回对象的所有属性名组成的数组。</li>
                      <li>Object.values(): 返回对象的所有属性值组成的数组。</li>
                      <li>
                        Object.entries(): 返回对象的所有键值对组成的数组。
                      </li>
                      <li>hasOwnProperty(): 检查对象是否具有指定属性。</li>
                      <li>
                        Object.assign():
                        将一个或多个源对象的属性复制到目标对象。
                      </li>
                    </ol>
                  </strong>
                </li>
              </ul>
            </span>
          </li>
          <li
            style="--stagger: 3; margin: 0px 0px 40px 0px"
            data-animate
            id="JS数组"
          >
            <h3>JS数组（Array）</h3>
            <span>
              JavaScript中的数组是用于存储多个值的有序集合，可以包含不同数据类型的元素。
            </span>
            <span>
              <ul class="unord-list">
                <li>
                  <strong
                    >创建数组方式：
                    <ol>
                      <li>使用字面量创建数组：let arr = [1,2,3]</li>
                      <li>
                        使用构造函数创建数组：let arr = new Array('1','2','3')
                      </li>
                    </ol>
                  </strong>
                </li>
                <li>
                  <strong
                    >访问和修改数组元素：
                    <ol>
                      <li>输出：console.log(arr[0]);</li>
                      <li>修改：arr[1] = 'A';</li>
                      <li>输出数组长度：console.log(fruits.length);</li>
                    </ol>
                  </strong>
                </li>
                <li>
                  <strong
                    >数组中的方法：
                    <ol>
                      <li>
                        push(): 向数组末尾添加元素并返回修改后的数组的新长度。
                      </li>
                      <li>
                        unshift():
                        向数组开头添加元素并返回修改后的数组的新长度。
                      </li>
                      <li>pop(): 删除数组最后一个元素。</li>
                      <li>shift(): 删除数组第一个元素。</li>
                      <li>concat(): 将两个或多个数组合并成一个新数组。</li>
                      <li>
                        slice():
                        截取数组的一部分，返回截取后的新数组。注意：左边包括，右边不包括，右边不包括该索引对应的元素。
                      </li>
                      <li>
                        join():
                        将数组中的所有元素以指定的分隔符连接成一个字符串。
                      </li>
                      <li>
                        map():
                        根据原数组的每个元素，生成一个新数组，新数组的元素由回调函数的返回值决定。方法返回一个新数组。
                      </li>
                      <li>
                        forEach():
                        遍历数组的每个元素，并对每个元素执行指定的操作。方法没有返回值，它只是遍历数组并对每个元素执行指定的操作。
                      </li>
                      <li>sort(): 对数组进行排序，可以指定排序函数。</li>
                      <li>reverse(): 将数组中的元素顺序颠倒。</li>
                      <li>
                        indexOf():
                        从数组开头查询元素，如果查询到返回数组下标，查询不到返回-1。
                      </li>
                      <li>
                        lastIndexOf():
                        从数组末尾开始查询元素，如果查询到返回数组下标，查询不到返回-1。
                      </li>
                      <li>
                        find(): 传递一个回调函数，接收一个参数 item
                        为数组每一项，返回值为符合条件的哪一项。
                      </li>
                      <li>
                        findIndex(): 传递一个回调函数，接收一个参数 item
                        为数组每一项，返回值为符合条件的哪一项的索引。
                      </li>
                      <li>
                        every(): 传递一个回调函数，接收一个参数 item
                        为数组每一项，当所有的元素中的某一项的值为true时，才会返回true。
                      </li>
                      <li>
                        reduce():
                        用于做累加，方法接收两个参数：一个回调函数和一个可选的初始值。回调函数接收两个参数，第一项为每次处理后的值，第二项为数组每一项。返回值为最终累计之后的结果。例如：arr.reduce((a,
                        c) => { return a + c.count * c.price;} , 0)。
                      </li>
                      <li>
                        filter(): 过滤器，该方法传递一个回调函数，接收一个参数
                        item
                        为数组每一项。filter方法不会修改原始数组，而是返回一个新的数组，该数组为符合条件的元素。
                      </li>
                      <li>
                        includes(): 判断数组是否包含一个特定的值，返回布尔值。
                      </li>
                      <li>
                        findLast():
                        返回数组中满足提供的测试函数的最后一个元素的值。
                      </li>
                      <li>
                        findLastIndex():
                        返回数组中满足提供的测试函数的最后一个元素的索引。
                      </li>
                      <li>
                        flat():
                        按照指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
                      </li>
                      <li>
                        flatMap():
                        先应用一个函数映射每个元素，然后将结果压平成一个新数组。
                      </li>
                      <li>
                        keys(): 返回一个包含数组中每个索引键的Array
                        Iterator对象。
                      </li>
                      <li>
                        values(): 返回一个新的Array
                        Iterator对象，该对象包含数组每个索引的值。
                      </li>
                      <li>
                        entries(): 返回一个新的Array
                        Iterator对象，该对象包含数组中每个索引的键/值对。
                      </li>
                      <li>
                        some():
                        测试数组中是不是至少有1个元素通过了被提供的函数测试。返回布尔值。
                      </li>
                      <li>
                        copyWithin():
                        浅复制数组的一部分到同一数组中的另一个位置，并返回它，不改变其大小。
                      </li>
                      <li>
                        fill():
                        用一个固定值填充数组的全部或部分，返回修改后的数组。
                      </li>
                      <li>
                        toLocaleString():
                        返回一个表示数组元素的字符串，这些字符串使用各自元素的toLocaleString方法转换成字符串。
                      </li>
                      <li>toString(): 返回一个表示数组及其元素的字符串。</li>
                      <li>
                        from(): 从类数组或可迭代对象创建一个新的数组实例。
                      </li>
                      <li>isArray(): 判断传递的值是否是一个数组。</li>
                      <li>
                        of():
                        根据一组参数来创建一个新的数组实例，支持任意的参数数量和类型。
                      </li>
                    </ol>
                  </strong>
                </li>
              </ul>
            </span>
          </li>
          <li
            id="JS函数"
            style="--stagger: 5; margin: 0px 0px 35px 0px"
            data-animate
          >
            <h3>JS函数（Function）</h3>
            <span>
              <ul class="unord-list">
                <span style="margin-bottom: 20px">
                  JavaScript中的函数是可重复使用的代码块，用于执行特定任务或计算结果。
                </span>
                <span>
                  <li>
                    <strong
                      >定义函数：
                      <ol>
                        <li>
                          具名函数： function greet(name) { return 'Hello, ' +
                          name + '!'; }
                        </li>
                        <li>
                          匿名函数： let greet = function(name) { return 'Hello,
                          ' + name + '!'; };
                        </li>
                        <li>
                          立即执行函数： (function(){ console.log(1); })()
                        </li>
                      </ol>
                    </strong>
                  </li>
                </span>
                <span>
                  <li>
                    <strong
                      >函数参数返回值以及调用函数：
                      <ol>
                        <li>调用函数： console.log(greet('Alice'));</li>
                        <li>
                          函数参数和返回值：function add(a, b) { return a + b; }
                          <br />
                          let result = add(3, 5); console.log(result);
                        </li>
                      </ol>
                    </strong>
                  </li>
                </span>
                <span>
                  <li>
                    <strong
                      >高阶函数和回调函数：
                      <ol>
                        <li>
                          回调函数：将一个函数作为参数传递给另一个函数，并在某个时机被调用的函数。
                        </li>
                        <li>
                          高阶函数：JavaScript中的函数可以作为参数传递给其他函数，也可以作为其他函数的返回值。这样的函数就叫做高阶函数。
                        </li>
                      </ol>
                    </strong>
                  </li>
                </span>
                <span>
                  <li>
                    <strong
                      >箭头函数：
                      <ol>
                        <li>
                          ES6引入了箭头函数，它提供了一种更简洁的函数定义方式，并且具有词法绑定的特性。
                        </li>
                        <li>
                          let add = (a, b) => a + b; 
                          <br/>console.log(add(2, 3));
                        </li>
                      </ol>
                    </strong>
                  </li>
                </span>
              </ul>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import Anchor from "@/basic/anchor/anchor.vue";
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
                margin: 6px 0px 0px 30px;
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