<template>
  <div>
    <h1>Ajouter un nouvel article</h1>
      <AddArticle :articles="articles" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AddArticlePage',
  data() {
    return {
      articles: Array,
    }
  },
  async asyncData(ctx) {
    // const data = await ctx.app.$services.posts.findAll()
    // console.log(data)

    return {
      articles: [
        {
          title: 'Article 1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nisl nisl',
          author: 'John Doe',
        },
        {
          title: 'Article 2',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nisl nisl',
          author: 'John Doe',
        },
      ],
    }
  },
})
</script>
<style>

.addArticle-enter {
  background: red;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.addArticle-enter-active,
.addArticle-leave-active {
  transition-delay: 1000ms;
  background: purple;
}

.addArticle-enter-to {
}
.addArticle-leave {
}

.addArticle-leave-to {
}
</style>
