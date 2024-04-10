<template>
    <div
        :class="color"
        class="footer bg-orange-200 text-sm p-4"
    >
        Design by Nguyen Huu An
    </div>
</template>

<script setup>
const props = defineProps({
  color: String
})
</script>

<style lang="scss">
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
</style>