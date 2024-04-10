<template>
  <div>
    <div ref="target" class="p-4">
      Events page
    </div>
    <IconsAccount v-if="isOutSide" font-size="30px"/>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom',
})

const target = ref(null)
let isOutSide = ref(true)

onClickOutside(target, event => {
  isOutSide.value = false
})
</script>

