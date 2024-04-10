export default defineNuxtRouteMiddleware((to, from) => {
    console.log('from', from);
    console.log('to', to);
    const isLoggedIn = true;

    // if (isLoggedIn && to.path !== '/') {
        // bắt buộc phải check to.path để tranh lỗi vòng lặp vô hạn
    //     return navigateTo('/')
    // } else if(!isLoggedIn) {
    //     // redirect to the login page
    //     return navigateTo('/login')
    // }

    if(!isLoggedIn){
        return navigateTo('/login')
    }
    return
  })
   