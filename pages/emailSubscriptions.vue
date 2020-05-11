<template>
  <div class="email-subscriptions">
    <h1>Email Subscriptions</h1>
    <p>
      Do you like to have the knowledge flow through your inbox? Well that is
      possible. There are a lot of e-mail subscriptions.
    </p>

    <ul>
      <li v-for="subscription in subscriptions">
        <a :href="subscription.url" target="_blank" class="email-subscription">
          <h2>
            {{ subscription.title }}
          </h2>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    subscriptions() {
      return this.$store.state.emailSubscriptions.all
    }
  }
}
</script>
