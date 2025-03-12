import { onBeforeMount, onMounted, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useEnvStore = defineStore('env', () => {
  const debug = ref(true)
  function toggle() {
    debug.value = !debug.value
  }

  return { debug, toggle }
})

export type UseTimeParams = {
  silent?: boolean
}

export type UseTimeReturn = {
  time: Ref<string>
}

export const userTime = (params: UseTimeParams): UseTimeReturn => {
  let timer: ReturnType<typeof setTimeout> | null = null
  const { silent = true } = params
  const time = ref(new Date().toLocaleString())

  onMounted(() => {
    if (!silent) {
      timer = setInterval(() => {
        time.value = new Date().toLocaleString()
      }, 1000)
    }
  })
  onBeforeMount(() => {
    if (!silent && timer) {
      console.log('userTime mounted')
      clearInterval(timer)
    }
  })
  return { time }
}
