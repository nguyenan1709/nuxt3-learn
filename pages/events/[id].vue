<template>
    <div>
        event id: {{ $route.params.id }}
    </div>
</template>

<script setup>
const route = useRoute()
console.log('route', route);
const nuxt = useNuxtApp()
console.log('nuxt', nuxt);
</script>