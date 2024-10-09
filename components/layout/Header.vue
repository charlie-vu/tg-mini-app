<template>
  <div class="bg-primary gradient-white-30-20 text-white p-2 sticky-top min-h-56px d-flex flex-center">
    <h4>Telegram Mini App</h4>
    <b-button v-if="$route.path !== '/'" class="position-absolute left-0 top-50 translate-middle-y mx-2" @click="$router.go(-1)">
      <b-icon icon="arrow-left-circle" scale="1.5" />
    </b-button>
    <b-button class="position-absolute right-0 top-50 translate-middle-y mx-2" @click="$store.dispatch('toggleMenu')">
      <b-icon :icon="$store.getters.showMenu ? 'x' : 'list'" scale="1.5" />
    </b-button>

    <!-- <div class="d-flex w-fit mx-auto">
      <nuxt-link v-for="item in menuList" :key="item.name" :to="item.path" class="px-4 py-3"
        exact-active-class="bg-white text-dark fw-700">
        {{ item.name }}
      </nuxt-link>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    menuList() { return this.$store.getters.menuList }
  },
}
</script>
