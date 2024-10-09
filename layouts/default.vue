<template>
    <div class="min-vh-100 d-flex flex-column">
        <layout-header />
        <nuxt class="flex-grow-1 py-4 mb-5" />
        <layout-footer />

        <layout-side-menu />

        <ui-loading-overlay />
    </div>
</template>

<script>
import menuList from '~/assets/demo/menu-list.js'

export default {
    name: 'DefaultLayout',

    mounted() {
        setTimeout(() => {
            this.$store.dispatch('setMenuList', menuList)
        }, 500)

        console.log(this.$tw)
        if (this.$tw) {
            // Initializing the Telegram WebApp SDK
            this.$tw.expand()
            this.$tw.MainButton.setText("Send Hello").show()
        }
    },
}

</script>
