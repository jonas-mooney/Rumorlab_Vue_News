<template>
  <div class="header">
    <span class="wrap1">
      <Logo />
    </span>
    <span class="wrap2">
      <Timer />
    </span>
  </div>


</template>

<script>
import Logo from './Logo.vue'
import Timer from './Timer.vue'

export default {
  name: "Header",
  components: {Logo, Timer}
}
</script>

<style scoped>
  .header {
    display: flex;
    width: 100vw;
    height: 8em;
    align-items: center;
    background-color: #009688;
    position: fixed;
    top: 0;
    z-index: 5;
  }
  .wrap1 {
    width: 55vw;
    display: flex;
    justify-content: flex-end;
  }
  .wrap2 {
    width: 40vw;
    display: flex;
    justify-content: flex-end;
  }


</style>