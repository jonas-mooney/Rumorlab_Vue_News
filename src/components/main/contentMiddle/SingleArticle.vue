<template>
    <span>
      <img class="articleImage" v-bind:src="articleData.urlToImage">
      <p class="authorName">{{ articleData.author }}</p>
      <h5 class="articleTitle">{{ articleData.title }}</h5>
      <p>{{ articleContent }}</p>
    </span>
</template>

<script>
export default {
  name: "SingleArticle",
  computed: {
    articleData () {
      return this.$store.state.selectedArticle
    },
    articleContent () {
      return this.$store.state.articleContent
    }
  }
}
</script>

<style scoped>
.headlineTitle {
  margin: 0 0 30px;
}
.middleContent {
  width: 60vw;
}
.articleImage {
  width: 60vw;
  height: auto;
  border-radius: 5px;
  cursor: pointer;
}
.authorName {
  margin-bottom: 0;
  cursor: pointer;
  color: #ffffff;
}
.articleTitle {
  margin-top: 0;
  cursor: pointer;
  color: #ffffff;
}

</style>