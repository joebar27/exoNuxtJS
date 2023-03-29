<template>
  <div class="to-do-container">
    <!--<nuxt-link to="/articles/addArticle">Add Article</nuxt-link>-->
    <div v-if="!loggedIn" class="create-container">
      <label>Username</label>
      <input v-model="usernameOfNewUser" type="text" />
      <label>Password</label>
      <input v-model="passwordOfNewUser" type="text" />
      <button @click="login">Connection</button>
    </div>

    <div v-else class="create-container">
      <p>welcome, {{ loggedIn.username }}!</p>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  props: {
    user: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      usernameOfNewUser: '',
      passwordOfNewUser: '',
      loggedIn: false,
    }
  },
  methods: {
    async login() {
      const response = await fetch('http://localhost:4000/user/login', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.usernameOfNewUser,
          password: this.passwordOfNewUser,
        }),
      })
      console.log(response)
      if (response.ok) {
        const user = await response.json()
        this.loggedIn = true
        this.$emit('login', user)
        this.$router.push('/articles/addArticle')
      } else {
        alert('Invalid username or password!')
      }
    },
    logout() {
      this.loggedIn = false
      this.$emit('logout')
    },
  },
}
</script>
