<template>
  <div class="email-subscriptions">
    <h1>Email Subscriptions</h1>
    <p>
      Do you like to have the knowledge flow through your inbox? Well that is
      possible. There are a lot of e-mail subscriptions.
    </p>
    <ul>
      <li v-for="subscription in subscriptions">
        <div class="subscription">
          <h2>{{ subscription.title }}</h2>
          <p>{{ subscription.description }}</p>
          <a :href="subscription.url" target="_blank"
            >Subscribe to {{ subscription.title }}</a
          >
          <div v-if="votesEnabled" class="actions">
            <button class="vote-up">Vote up</button>
            <div class="votes">{{ subscription.votes }}</div>
            <button class="vote-down">Vote down</button>
          </div>
        </div>
      </li>
    </ul>
    <div v-if="additionEnabled" class="actions">
      <button class="add">Add email subscription provider</button>
      <div class="form-add"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    subscriptions() {
      return this.$store.state.emailSubscriptions.all
    },
    votesEnabled() {
      return this.$store.state.emailSubscriptions.votesEnabled
    },
    additionEnabled() {
      return this.$store.state.emailSubscriptions.additionEnabled
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li + li {
  margin-top: 12px;
}

.subscription {
  padding: 24px;
  position: relative;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.5);
  width: 320px;
  .actions {
    position: absolute;
    right: -24px;
    top: 50%;
    transform: translate3d(100%, -50%, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
