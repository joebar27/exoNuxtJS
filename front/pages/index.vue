<template>
  <div>
    <h1>Bienvenue sur le blog 3BCI</h1>
    <Login />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Login from '~/components/Login.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { Login }
})
</script>
