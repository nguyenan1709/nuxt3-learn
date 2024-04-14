<script setup lang="js">
import {useCounterStore} from '~/stores/myStore'
// Share state in composables folder
// useState() dùng cho các app nhỏ ko có nhiều state
// Pinia dùng cho các app lớn vơi nhiều state
const color = useColor() 
const store = useCounterStore()

console.log('store', store.name)
</script>

<template>
  <p>Current color: {{ color }}</p>
</template>



