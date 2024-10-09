export default (context, inject) => {
    const tgWeb = window.Telegram?.WebApp || null
    inject('tw', tgWeb)
}
