export default defineNuxtPlugin(nuxtApp => {
    console.log('nuxtApp', nuxtApp)
    return {
        provide: {
            sayHello: (msg) => console.log(`Hello ${msg}`),
        }
    }
})