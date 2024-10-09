<template>
    <div class="min-vh-100 d-flex flex-column">
        <layout-header />

        <nuxt class="flex-grow-1 py-4 mb-5" />
        <layout-footer class="position-fixed bottom-0 vw-100" />

        <layout-side-menu />

        <ui-loading-overlay />
    </div>
</template>

<script>
import menuList from '~/assets/demo/menu-list.js'

export default {
    name: 'DefaultLayout',

    data() {
        return {
        }
    },

    mounted() {
        setTimeout(() => {
            this.$store.dispatch('setMenuList', menuList)
        }, 500)
        // console.log(this.$tw)
    },
}

</script>
