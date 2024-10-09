<template>
    <div class="bg-primary text-white">
        <div class="p-2 text-center gradient-white-80-20 min-h-32px">
            <!-- <b-button @click="$store.dispatch('toggleMenu')">
                <b-icon :icon="$store.getters.showMenu ? 'x' : 'list'" scale="1.5" />
            </b-button> -->
            <b-button variant="primary" pill
                class="home-btn w-50px h-50px position-absolute left-50 translate-middle-x top-n75"
                @click="$router.push('/')">
                <b-icon icon="house-door" scale="1.5" />
            </b-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
        // console.log(window.Telegram.WebApp)
    },
}
</script>

<style lang="scss" scoped>
.home-btn {
    box-shadow: 0px -4px 8px gray;
}
</style>
