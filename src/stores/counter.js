import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter',  {
  state: () => {
    return {
      isdark: false
    }
  },
  getters:{},
  actions:{}
})

export default useCounterStore