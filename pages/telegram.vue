<template>
    <div class="container mt-5">
        <b-card>
            <b-button variant="primary" @click="sendMessage">Send Hello to Telegram</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    mounted() {
    },
    methods: {
        sendMessage() {
            if (this.$tw) {
                this.$tw.sendData("Hello from Nuxt!")
            }
        }
    }
}
</script>
