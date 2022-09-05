<template>
  <div class="categoryLinks">
    <q-chip style="padding-left: 1.7em" clickable class="chip" square icon="laptop" color="blue" >
      <router-link style="text-decoration: none; color: rgba(0, 0, 0, 0.87);" @click="handleCategoryClick(true, 'tech')" to="/selectedCategory">
        <h6>Tech</h6>
      </router-link>
    </q-chip>
    <q-chip clickable class="chip" square icon="business" color="blue" >
      <router-link style="text-decoration: none; color: rgba(0, 0, 0, 0.87);" @click="handleCategoryClick(true, 'business')" to="/selectedCategory">
        <h6>Business</h6>
      </router-link>
    </q-chip>
    <q-chip clickable class="chip" square icon="handshake" color="blue" >
      <h6>Politics</h6>
    </q-chip>
    <q-chip style="padding-left: 1.5em" clickable class="chip" square icon="sports_soccer" color="blue" >
      <h6>Sports</h6>
    </q-chip>
    <q-chip clickable class="chip" square icon="air" color="blue" >
      <h6>Weather</h6>
    </q-chip>
    <q-chip style="padding-left: 1.3em" clickable class="chip" square icon="thumb_up" color="blue" >
      <h6>Media</h6>
    </q-chip>
    <q-chip style="padding-left: 1.3em" clickable class="chip" square icon="health_and_safety" color="blue" >
      <h6>Health</h6>
    </q-chip>
    <q-chip clickable class="chip" square icon="fitness_center" color="blue" >
      <h6>Fitness</h6>
    </q-chip>
    <q-chip style="padding-left: 1.4em" clickable class="chip" square icon="flight" color="blue" >
      <h6>Travel</h6>
    </q-chip>
    <q-chip clickable class="chip" square icon="theaters" color="blue" >
      <h6>Movies</h6>
    </q-chip>
    <q-chip style="padding-left: 1.9em" clickable class="chip" square icon="gavel" color="blue" >
      <h6>Law</h6>
    </q-chip>
    <q-chip clickable class="chip" square icon="work" color="blue" >
      <h6>Careers</h6>
    </q-chip>
    <q-chip clickable class="chip" square icon="school" color="blue" >
      <h6>Education</h6>
    </q-chip>
    <q-chip clickable class="chip" square icon="biotech" color="blue" >
      <h6>Science</h6>
    </q-chip>
    <q-chip clickable class="chip" square icon="videogame_asset" color="blue" >
      <h6>Gaming</h6>
    </q-chip>
    <q-chip clickable class="chip" square icon="price_change" color="blue" >
      <h6>Stocks</h6>
    </q-chip>
    <q-chip clickable class="chip" square icon="rocket_launch" color="blue" >
      <h6>Space</h6>
    </q-chip>
    <q-chip clickable class="chip" square icon="public" color="blue" >
      <h6>World</h6>
    </q-chip>
  </div>
</template>

<script>
export default {
  name: "CategorySelect",
  beforeMount() {
    this.$store.commit('selectCategoryPage', true)
  }
}
</script>

<style scoped>
.categoryLinks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80vw;
  /*max-width: 528.5px;*/
  height: auto;
  /*background-color: #ffffff;*/
  margin-top: 3.5em;
}
.chip {
  width: 9em;
  height: 7em;
  display: flex;
}
h6 {
  margin: 0;
  padding: 0;
  font-size: medium;
  text-decoration: none;
}

</style>