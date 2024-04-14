<template>
  <div class="foreword">
    <div class="foreword-content">
      <div class="foreword-head">
        <h1 class="head-h1">Joyful Wei</h1>
      </div>
      <div class="self-introduction">
        <p style="--stagger: 1; margin: 10px 0px 30px 0px" data-animate>
          嗨，我是Joyful Wei，一个狂热的开发者。
        </p>
        <p style="--stagger: 2; margin: 30px 0px" data-animate>
          我热衷于探索创新的Web技术和设计，以打造出令人愉悦和富有创意的用户体验。
        </p>
        <p style="--stagger: 3; margin: 30px 0px" data-animate>
          我拥有丰富的前端开发经验，熟悉HTML、CSS和JavaScript等技术，并且善于使用流行的前端框架和库，如React和Vue。
        </p>
        <p style="--stagger: 4; margin: 30px 0px" data-animate>
          我喜欢通过编码来解决问题，并且享受与团队合作共同构建出优质的Web应用程序的过程。我对用户界面设计和用户体验也有着浓厚的兴趣，努力确保我的应用程序既具有美观性，又具有良好的可用性和易用性。
        </p>
        <p style="--stagger: 5; margin: 30px 0px" data-animate>
          通过我的博客，我希望能够与大家分享我的技术见解、经验和最佳实践。我将探讨前端开发的各个方面，包括新的技术趋势、实用的开发技巧和解决常见问题的方法。
        </p>
        <p style="--stagger: 6; margin: 30px 0px" data-animate>
          无论你是初学者还是有经验的开发者，我都希望我的博客能够为你提供有价值的内容和灵感。
        </p>
        <p style="--stagger: 7; margin: 30px 0px" data-animate>
          编程之余，我喜欢摄影和旅游。我的一些照片可以在抖音上找到。如果你碰巧和我住在同一个城市(目前在西安)，也许我们可以一起出去玩，拍一些照片或者一起写代码。
        </p>
        <p style="--stagger: 8; margin: 30px 0px" data-animate>
          欢迎来到我的博客，让我们一起探索前端开发的无限可能！
        </p>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
</script>
  
  <style lang="less" scoped>
.foreword {
  width: 100%;
  height: 100%;
  padding: 30px;
  .foreword-content {
    height: 100%;
    width: 100%;
    max-width: 90ch;
    margin: 0 auto;
    .foreword-head {
      height: 40px;
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      h1 {
        color: #000;
        width: 780px;
        font-size: 38px;
      }
    }
    .self-introduction {
      height: 100%;
      width: 100%;
      p {
        padding-right: 53px;
        color: #555;
        font-size: 16px;
        line-height: 26px;
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