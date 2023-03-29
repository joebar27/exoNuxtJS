<template>
  <div class="to-do-container">
    <div class="create-container">
        <label>Username</label>
      <input v-model="usernameOfNewUser" type="text" />
        <label>Password</label>
      <input v-model="passwordOfNewUser" type="text" />
        <label>Role</label>
      <input v-model="roleOfNewUser" type="text" />
      <button @click="create">Add</button>
    </div>
    <div class="to-do-list-container">
      <ListUserItem
        v-for="user in users"
        :key="user.username"
        :user="user"
        v-on:delete="deleteItem"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddUserComponent',
  props: {
    users: {
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
      roleOfNewUser: '',
    }
  },
  methods: {
    create() {
      this.users.push({
        username: this.usernameOfNewUser,
        password: this.passwordOfNewUser,
        role: this.roleOfNewUser,
      })
      this.usernameOfNewUser = ''
      this.passwordOfNewUser = ''
      this.roleOfNewUser = ''
    },
    deleteItem(item) {
      console.log(item)
      this.users.splice(this.user.indexOf(item), 1)
    },
  },
}
</script>
