<template>
  <div class="wrapper">
    <h4 class="headlineTitle">USA Headlines</h4>
    <div v-for="article in articles" class="middleContent">
  <!--    <p>{{ article }}</p>-->
      <router-link class="routerWrapper" to="/article">
      <span @click="articleToStore(article)">
        <img class="articleImage" v-bind:src="article.urlToImage">
        <p class="authorName">{{ article.author }}</p>
        <h5 class="articleTitle">{{ article.title }}</h5>
      </span>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "newsContentMiddle",
  beforeCreate() {
    axios
        .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a83555195f9544f495999c02f25586cd\n')
        .then(response => this.articles = response.data.articles)
        .catch(err => console.log(err))
  },
  beforeMount() {
    this.$store.commit('selectCategoryPage', false)
  },
  data () {
    return {
      articles: null
    }
  },
  methods: {
    articleToStore(data) {
      this.$store.commit('modifySelectedArticle', data),
      this.$store.commit('retrieveArticleContent', data.url)
    }
  }
}
</script>

<style scoped>
  .headlineTitle {
    width: 9em;
    padding: 0;
    margin: 0 0 30px;
    color: #ffffff;
  }
  .middleContent {
    display: flex;
    flex-direction: row;
    /*width: 50vw;*/
    max-width: 510px;
    margin-right: 0;
  }
  .routerWrapper {
    text-decoration: none;
    margin-right: 0;
    padding: 0;
    width: 50vw;
  }
  .articleImage {
    width: 50vw;
    height: auto;
    border-radius: 5px;
    cursor: pointer;
    max-width: 510px;
  }
  .authorName {
    margin-bottom: 0;
    cursor: pointer;
    text-underline: none;
    color: #ffffff;
  }
  .articleTitle {
    margin-top: 0;
    cursor: pointer;
    color: #ffffff;
    max-width: 510px;
  }
  .articleTitle:hover {
    text-decoration: underline;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    /*margin-left: 4em;*/
  }

</style>

<!--a83555195f9544f495999c02f25586cd-->

<!--ZlmnOpse665T3rtD0PwZZNdxTMsK6fz87tK4J_lDMZg-->