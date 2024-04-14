import { ref } from 'vue'

export function useLang() {
  const lang = ref('en') // 默认语言设置为英语
  // 可以添加其他语言切换逻辑
  return lang
}