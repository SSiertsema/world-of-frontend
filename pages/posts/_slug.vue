<template>
  <div>
    <h1>{{ post.title }}</h1>
    <aside>
      <ul>
        <li v-for="post in relatedPosts">
          <nuxt-link :to="post.slug">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    post() {
      return this.$store.state.posts.all.find(post => post.slug === this.slug)
    },
    relatedPosts() {
      return this.$store.state.posts.all.filter(post => post.slug !== this.slug)
    }
  }
}
</script>

<style lang="scss" scoped></style>
