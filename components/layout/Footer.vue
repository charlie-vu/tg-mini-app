<template>
    <div class="bg-dark text-white">
        <div class="p-2 text-center gradient-white-80-20">
            <b-button @click="$store.dispatch('toggleMenu')">
                <b-icon :icon="$store.getters.showMenu ? 'x' : 'list'" scale="1.5" />
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
