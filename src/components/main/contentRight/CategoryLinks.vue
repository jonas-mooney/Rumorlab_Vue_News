<template>
<div class="categoryLinks">
  <q-chip style="padding-left: 1.7em" clickable class="chip" square icon="laptop" color="blue" >
    <h6>Tech</h6>
  </q-chip>
  <q-chip clickable class="chip" square icon="business" color="blue" >
    <h6>Business</h6>
  </q-chip>
  <q-chip clickable class="chip" square icon="handshake" color="blue" >
    <h6>Politics</h6>
  </q-chip>
  <q-chip style="padding-left: 1.7em" clickable class="chip" square icon="sports_soccer" color="blue" >
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
<!--  <q-chip clickable class="chip" square icon="school" color="blue" >-->
<!--    <h6>Education</h6>-->
<!--  </q-chip>-->
<!--  <q-chip clickable class="chip" square icon="biotech" color="blue" >-->
<!--    <h6>Science</h6>-->
<!--  </q-chip>-->
</div>
</template>

<script>
export default {
  name: "CategoryLinks"
}
</script>

<style scoped>
.categoryLinks {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 35vw;
  max-width: 528.5px;
  height: auto;
  /*background-color: #ffffff;*/
  margin-top: 3.5em;
}
.chip {
  width: 7em;
  height: 5em;
  display: flex;
}
h6 {
  margin: 0;
  padding: 0;
  font-size: small;
}

@media screen and (max-width: 604px) {
  .categoryLinks {
    display: none;
  }
}


</style>
