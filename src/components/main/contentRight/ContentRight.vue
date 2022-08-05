<template>
<div class="contentRight">
<!--  <NewsContentRight />-->
<!--  <AdContentRight />-->
  <CategoryLinks />
  <Survey />
</div>
</template>

<script>
import NewsContentRight from "./NewsContentRight.vue";
import AdContentRight from "./AdContentRight.vue";
import CategoryLinks from "./CategoryLinks.vue";
import Survey from "./Survey.vue";
export default {
  name: "ContentRight",
  components: {Survey, CategoryLinks, AdContentRight, NewsContentRight}
}
</script>

<style scoped>
  .contentRight {
    /*width: 100px;*/
    margin-right: 30px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

</style>