<template>
    <div>
      <span>{{article.title}}</span>
      <span>{{article.author}}</span>
      <span>{{article.content}}</span>
      <div>
        <button @click="deleteItem"> Supprime l'utilisateur</button>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: {
      article : {
        type: Object,
        default () {
          return {};
        }
      }
    },
    methods:  {
      deleteItem () {
        console.log(this.article);
        this.$emit('delete',this.article);
      }
    }
  }
  </script>
  <style>
  
  </style>
  