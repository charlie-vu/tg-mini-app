export default ({ $axios, $config, store, app, route, redirect }) => {
    $axios.defaults.timeout = 10000
    $axios.defaults.baseURL = 'https://api.telegram.org/bot7530718240:AAGo3MQsDmqN77UOzUislKuP8uZag-Yo1hQ'
    $axios.defaults.withCredentials = false

    $axios.onRequest((config) => {

    })
    $axios.onResponse((res) => {

    })
    // Global catch
    $axios.onError((err) => {
        console.log(err)
        app.$mvModal.msgBoxOk(err.message).then(() => {
            redirect({ name: 'error' })
        })
    })
}
