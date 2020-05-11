<template>
  <nav>
    <nuxt-link :to="{ name: 'index' }">Link to home</nuxt-link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  border: 1px solid red;
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
