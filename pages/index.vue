<template>
  <div class="home">
    <h1>World of Frontend</h1>
    <p>
      Welcome to the world of Frontend! In this dynamic world I missed a central
      point. This is what Ill try to create.
    </p>
    <h2>Most visited (to do)</h2>
    <p>
      A presentation of most popular pages on this website. Maybe this is what
      you are searching for as well?!
    </p>
    <h2>Recent activities (to do)</h2>
    <p>
      A brief overview of recent activities like discussions, additions, changes
      e.g.
    </p>
    <h2>Search (to do)</h2>
    <p>
      Search for what you a looking for. I hope you can find it! If not?.. let
      me know
    </p>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A lot of front-end fun!'
        }
      ]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
