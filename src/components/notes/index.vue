<template>
  <div class="notes-head">
    <div class="note-content">
      <div class="note">
        <div class="note-nav" v-if="isShow">
          <ul>
            <li><router-link to="/notes/notehtml">HTML&CSS</router-link></li>
            <li><router-link to="/notes/notejs">JavaScript</router-link></li>
            <li><router-link to="/notes/notevue">Vue</router-link></li>
            <li><router-link to="/notes/notereact">React</router-link></li>
            <li><router-link to="/notes/notenode">Node</router-link></li>
          </ul>
        </div>
        <div class="Notebook">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { watch, ref } from "vue";
const route = useRoute();
const router = useRouter();
const isShow = ref(true);
isShow.value = route.path;
watch(
  () => route.path,
  (newVal) => {
    if (newVal === "/notes/notevue" || newVal === "/notes/notereact") {
      isShow.value = false;
    }
  },
  { immediate: true }
);

router.beforeEach((to, from, next) => {
  if (to.path === "/notes/notevue") {
    isShow.value = false;
  } else {
    isShow.value = true;
  }
  next();
});
</script>

<style lang="less" scoped>
.notes-head {
  width: 100%;
  height: 100%;
  padding: 22px;

  .note-content {
    width: 100%;
    height: 100%;
    padding-top: 24px;

    .note {
      height: 100%;
      margin: 0 auto;
      max-width: 90ch;

      .note-nav {
        width: 100%;
        height: 50px;
        line-height: 50px;

        ul {
          display: flex;

          li {
            text-align: center;

            a {
              color: rgb(0, 0, 0);
              opacity: 0.2;
              font-size: 28px;
              font-weight: inherit;
              margin-left: 20px;

              &:hover {
                opacity: 1;
                color: #949393;
              }
            }
          }
        }
      }

      .Notebook {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.router-link-active {
  opacity: 1 !important;
}

// 适配移动端
@media (max-width: 700px) {
  .notes-head .note-content .note .note-nav ul li a {
    font-size: 26px;
    /* 调整字体大小 */
  }
}

@media (max-width: 640px) {
  .notes-head .note-content .note .note-nav[data-v-9adfbd4a] {
    height: 160px;
    line-height: 32px;
    display: flex;
  }

  .notes-head .note-content .note .note-nav ul[data-v-9adfbd4a] {
    flex-direction: column;
  }

  .notes-head .note-content .note .note-nav ul li[data-v-9adfbd4a] {
    text-align: left;
  }
}
</style>