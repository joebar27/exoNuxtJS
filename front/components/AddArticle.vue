<template>
  <div class="to-do-container">
    <div class="create-container">
      <label>Titre</label>
      <input v-model="titleOfNewArticle" type="text" />
      <label>Auteur</label>
      <input v-model="authorOfNewArticle" type="text" />
      <label>Contenue</label>
      <input v-model="contentOfNewArticle" type="text" />
      <button @click="create">Add</button>
    </div>
    <div class="to-do-list-container">
        <ListArticleItem
          v-for="article in articles"
          :key="article.title"
          :article="article"
          v-on:delete="deleteItem"
        />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddUserComponent',
  props: {
    articles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      titleOfNewArticle: '',
      authorOfNewArticle: '',
      contentOfNewArticle: '',
    }
  },
  methods: {
    create() {
      this.articles.push({
        title: this.titleOfNewArticle,
        author: this.authorOfNewArticle,
        content: this.contentOfNewArticle,
      })
      this.titleOfNewArticle = ''
      this.authorOfNewArticle = ''
      this.contentOfNewArticle = ''
    },
    deleteItem(item) {
      console.log(item)
      this.articles.splice(this.article.indexOf(item), 1)
    },
  },
}
</script>
