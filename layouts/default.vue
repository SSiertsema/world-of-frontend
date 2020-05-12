<template>
  <div class="app">
    <TheNavBar></TheNavBar>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import TheNavBar from '../components/TheNavBar.vue'
export default {
  name: 'default',
  components: {
    TheNavBar
  },
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

<style>
.app {
  padding-left: 320px;
}
main {
  padding: 48px;
}
</style>
