import { defineStore } from 'pinia'
// Vue 2 option API
// export const useCounterStore = defineStore('counter', {
//     state: () => ({ count: 0, name: 'Eduardo' }),
//     getters: {
//       doubleCount: (state) => state.count * 2,
//     },
//     actions: {
//       increment() {
//         this.count++
//       },
//     },
// })

// Vue 3 composition API
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const name = ref('Eduardo')
    // const doubleCount = computed(() => count.value * 2)
    // function increment() {
    //   count.value++
    // }
  
    return { count, name}
})