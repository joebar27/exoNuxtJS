<template>
    <div>
      <span>{{user.username}}</span>
      <span>{{user.password}}</span>
      <span>{{user.role}}</span>
      <div>
        <button @click="deleteItem"> Supprime l'utilisateur</button>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: {
      user : {
        type: Object,
        default () {
          return {};
        }
      }
    },
    methods:  {
      deleteItem () {
        console.log(this.user);
        this.$emit('delete',this.user);
      }
    }
  }
  </script>
  <style>
  
  </style>
  