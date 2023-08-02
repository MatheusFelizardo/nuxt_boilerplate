import { defineStore } from 'pinia'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useDataStore = defineStore('data', {
  state: () => (
    {
      datas: [],
    }
  ),
  getters: {
  },
  actions: {
    // example of an action
    async getData() {
      const response = await $axios.get('/data')
      const data = response.data

      this.data = data;
      return data;
    },
   
    restartUserStates() {
      this.data = []
    }
  },
})