<template>
   <div 
      class="header text-sm p-4"
      :class="color"
   >Header</div>
</template>

<script setup>
const props = defineProps({
  color: String
})
</script>

