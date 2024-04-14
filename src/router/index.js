import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '主页',
      },
      component: Home,
    },
    {
      path: '/notes',
      name: 'notes',
      redirect: '/notes/notehtml',
      component: () => import('@/components/notes/index.vue'),
      children: [
        {
          path: 'notehtml',
          name: 'notehtml',
          meta: {
            title: 'HTML',
          },
          component: () => import('@/components/notes/note-html/index.vue'),
        },
        {
          path: 'notenode',
          name: 'notenode',
          meta: {
            title: 'Node',
          },
          component: () => import('@/components/notes/note-node/index.vue')
        },
        {
          path: 'notejs',
          name: 'notejs',
          meta: {
            title: 'JS',
          },
          component: () => import('@/components/notes/note-js/index.vue')
        },
        {
          path: 'notevue',
          name: 'notevue',
          meta: {
            title: 'Vue',
          },
          component: () => import('@/components/notes/note-vue/index.vue')
        },
        {
          path: 'notereact',
          name: 'notereact',
          meta: {
            title: 'React',
          },
          component: () => import('@/components/notes/note-react/index.vue')
        },
      ]
    },
    // 前端笔记HTML
    {
      path: '/htmlbasics',
      name: 'htmlbasics',
      meta: {
        title: 'HTML基础知识'
      },
      component: () => import('@/components/notes/note-html/HTML-basics/index.vue')
    },
    {
      path: '/notelist',
      name: 'list',
      meta: {
        title: 'HTML列表'
      },
      component: () => import('@/components/notes/note-html/HTML-list/index.vue')
    },
    {
      path: '/noteaudio',
      name: 'audio',
      meta: {
        title: 'HTML音视频'
      },
      component: () => import('@/components/notes/note-html/HTML-audio/index.vue')
    },
    {
      path: '/notetable',
      name: 'table',
      meta: {
        title: 'HTML表格'
      },
      component: () => import('@/components/notes/note-html/HTML-table/index.vue')
    },
    {
      path: '/noteinput',
      name: 'input',
      meta: {
        title: 'HTML表单文本域'
      },
      component: () => import('@/components/notes/note-html/HTML-input/index.vue')
    },
    {
      path: '/noteselect',
      name: 'select',
      meta: {
        title: 'HTML下拉框'
      },
      component: () => import('@/components/notes/note-html/HTML-select/index.vue')
    },
    // 前端笔记CSS部分
    {
      path: '/cssbasics',
      name: 'cssbasics',
      meta: {
        title: 'CSS基础知识'
      },
      component: () => import('@/components/notes/note-html/CSS-basics/index.vue')
    },
    {
      path: '/noteselect',
      name: 'selector',
      meta: {
        title: 'CSS选择器'
      },
      component: () => import('@/components/notes/note-html/CSS-selector/index.vue')
    },
    {
      path: '/notetextbac',
      name: 'textbac',
      meta: {
        title: 'CSS文本背景'
      },
      component: () => import('@/components/notes/note-html/CSS-textbac/index.vue')
    },
    {
      path: '/notebox',
      name: 'box',
      meta: {
        title: 'CSS盒模型'
      },
      component: () => import('@/components/notes/note-html/CSS-box/index.vue')
    },
    {
      path: '/notefloat',
      name: 'float',
      meta: {
        title: 'CSS浮动'
      },
      component: () => import('@/components/notes/note-html/CSS-float/index.vue')
    },
    {
      path: '/noteposition',
      name: 'position',
      meta: {
        title: 'CSS定位'
      },
      component: () => import('@/components/notes/note-html/CSS-position/index.vue')
    },
    {
      path: '/noteflex',
      name: 'flex',
      meta: {
        title: 'CSSflex布局'
      },
      component: () => import('@/components/notes/note-html/CSS-flex/index.vue')
    },
    // 前端笔记JS部分
    {
      path: '/jsbasics',
      name: 'jsbasics',
      meta: {
        title: 'JS基础知识'
      },
      component: () => import('@/components/notes/note-js/JavaScriptNode/JS-basics/index.vue')
    },
    {
      path: '/notedatatype',
      name: 'datatype',
      meta: {
        title: 'JS变量数据类型'
      },
      component: () => import('@/components/notes/note-js/JavaScriptNode/JS-datatype/index.vue')
    },
    {
      path: '/noteoperator',
      name: 'operator',
      meta: {
        title: 'JS运算符'
      },
      component: () => import('@/components/notes/note-js/JavaScriptNode/JS-operator/index.vue')
    },
    {
      path: '/noteloop',
      name: 'loop',
      meta: {
        title: 'JS循环'
      },
      component: () => import('@/components/notes/note-js/JavaScriptNode/JS-loop/index.vue')
    },
    {
      path: '/noteobject',
      name: 'arrfun',
      meta: {
        title: 'JS对象'
      },
      component: () => import('@/components/notes/note-js/JavaScriptNode/JS-object/index.vue'),
    },
    {
      path: '/noteapi',
      name: 'webapi',
      meta: {
        title: 'JSApi'
      },
      component: () => import('@/components/notes/note-js/JavaScriptNode/JS-api/index.vue')
    },



    // 一级路由
    {
      path: '/wrongnote',
      name: 'wrongnote',
      meta: {
        title: '错题日记',
      },
      component: () => import('@/components/wrongnote/index.vue')
    },
    {
      path: '/interview',
      name: 'interview',
      meta: {
        title: '面试资料',
      },
      component: () => import('@/components/interview/index.vue')
    },
    {
      path: '/interview',
      name: 'interview',
      meta: {
        title: '难点总结',
      },
      component: () => import('@/components/summary/index.vue')
    },
  ]
})

export default router
