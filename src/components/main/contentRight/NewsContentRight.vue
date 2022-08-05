<template>
  <h4>Tech News</h4>
  <div class="rightContent">
    <div v-for="article in articles" class="miniArticle">
      <img class="articleImage" v-bind:src="article.urlToImage">
      <p class="articleTitle">{{ article.title }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewsContentRight",
  data () {
    return {
      articles: null
    }
  },
  mounted() {
    axios
        .get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=a83555195f9544f495999c02f25586cd\n')
        .then(response => this.articles = response.data.articles)
        .catch(err => console.log(err))
  }
}
</script>

<style scoped>
  .rightContent {
    height: 200px;
  }
  .miniArticle {
    margin-top: 30px;
  }
  h4 {
    text-align: center;
    margin-bottom: 15px;
    color: #ffffff;
  }
  .articleImage {
    width: 15em;
    height: auto;
    border-radius: 10px;
  }
  p {
    color: #ffffff;
  }


</style>

<!--https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=a83555195f9544f495999c02f25586cd-->