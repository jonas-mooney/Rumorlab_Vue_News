<template>
  <div class="main">
    <SideNav />
<!--    <NewsContentMiddle />-->
    <ContentRight />
  </div>
</template>

<script>
import SideNav from "./SideNav.vue";
import NewsContentMiddle from "./contentMiddle/NewsContentMiddle.vue";
import NewsContentRight from "./contentRight/NewsContentRight.vue";
import ContentRight from "./contentRight/ContentRight.vue";

export default {
  name: "Main",
  components: {ContentRight, NewsContentRight, NewsContentMiddle, SideNav}
}
</script>

<style scoped>
  .main {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    background-color: #213522;
    background-color: #f9f7f3;
    background-color: #1A1D1E;
    margin-top: 8em;
  }

</style>