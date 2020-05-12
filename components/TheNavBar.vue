<template>
  <nav>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'email-subscriptions' }"
          >Email subscriptions</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  color: white;
  background-color: black;
  padding: 48px;
  width: 320px;
  height: 100vh;
}

li + li {
  margin-top: 6px;
}

a {
  color: white;
}
</style>

<script>
export default {
  name: 'TheNavBar',
  components: {},
  props: {},
  data: function() {
    return {}
  },
  computed: {
    computedValue() {
      return true
    }
  },
  beforeMount() {}
}
</script>
