<template>
    <div>
        <h3>index page</h3>
        <img src="~/assets/images/c60.jpg" alt="">
        <!-- assets chỉ có thể truy cập qua thẻ img -->
        <!-- /public khởi tạo ở server có thể truy cập qua url. Nếu đặt hết ảnh ở /public có thể gây lộ thông tin -->
    </div>
</template>

<script setup lang='js'>
    definePageMeta({
        middleware: ["auth"]
    })
    const route = useRoute();
    console.log(route)
    console.log('useNuxtApp', useNuxtApp());
    
    const {$sayHello} = useNuxtApp();
    $sayHello('nguyen huu an')
   
</script>