<template>
  <q-input
      class="searchBar"
      label-color="black"
      outlined
      bg-color="white"
      color="teal"
      v-model="searchInputValue"
      label="Search"
      @keyup.enter="handleSubmit"
      clearable
  />
    <div v-for="article in articles" class="middleContent">
      <router-link class="routerWrapper" to="/article">
    <span @click="articleToStore(article)">
      <img class="articleImage" v-bind:src="article.urlToImage">
      <p class="authorName">{{ article.author }}</p>
      <h5 class="articleTitle">{{ article.title }}</h5>
    </span>
      </router-link>
  </div>

</template>

<!--/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\️-->
<script>
import axios from 'axios'
export default {
  name: "Search",
  data () {
    return {
      articles: null,
      searchInputValue: "",
      date: formatDate(new Date())
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
        axios
            .get(`https://newsapi.org/v2/everything?q=${this.searchInputValue}&from=${this.date}&sortBy=popularity&apiKey=a83555195f9544f495999c02f25586cd\n`)
            .then(response => this.articles = response.data.articles)
            .catch(err => console.log(err))
    },
    handleSelectedArticle(article) {
      console.log(article)
    }
  }
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}

</script>

<!--/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\️-->
<style scoped>
.searchBar {
  margin-bottom: 30px;
  z-index: -2;
  background-color: #eeeeee;
  border-radius: 5px;
}
.headlineTitle {
  width: 30vw;
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
  text-decoration: none;
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

</style>