<template>
<div v-show="!isCategoryPageSelected" class="contentRight">
<!--  <NewsContentRight />-->
<!--  <AdContentRight />-->
  <CategoryLinks />
  <Survey />
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsContentRight from "./NewsContentRight.vue";
import AdContentRight from "./AdContentRight.vue";
import CategoryLinks from "./CategoryLinks.vue";
import Survey from "./Survey.vue";
export default {
  name: "ContentRight",
  components: {Survey, CategoryLinks, AdContentRight, NewsContentRight},
  computed: {
    ...mapGetters(['isCategoryPageSelected'])
  },
  methods: {
    handleCategoryClick(bool) {
      this.$store.commit('selectCategoryPage', bool)
    }
  }
}
</script>

<style scoped>
  .contentRight {
    margin-right: 4em;
    margin-top: 1.2em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

</style>