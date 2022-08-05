<template>
  <div id="q-app" style="min-height: 100vh;">
    <q-btn flat @click="drawer = !drawer" round dense icon="menu"></q-btn>

    <div>
      <q-layout view="hHh Lpr lff" >

        <q-drawer
            v-model="drawer"
            show-if-above
            style="position: relative; top: 8em"

            :mini="miniState"
            @mouseover="miniState = false"
            @mouseout="miniState = true"
            mini-to-overlay

            :width="200"
            :breakpoint="500"
            bordered
            class="bg-grey-3 drawer q-drawer"
        >

          <q-list padding>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="home"></q-icon>
                </q-item-section>
                <q-item-section>
                  <router-link to="/">Home</router-link>
                </q-item-section>
              </q-item>

              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="search"></q-icon>
                </q-item-section>

                <q-item-section>
                  <router-link to="/search">Search</router-link>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="category"></q-icon>
                </q-item-section>

                <q-item-section>
                  Categories
                </q-item-section>
              </q-item>

              <q-separator></q-separator>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="login"></q-icon>
                </q-item-section>

                <q-item-section>
                  Login
                </q-item-section>
              </q-item>
            </q-list>
        </q-drawer>
<!-- Main content container below -->
        <q-page-container class="pageContainer">
          <router-view></router-view>
        </q-page-container>

      </q-layout>
    </div>
  </div>
</template>

<!--/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\️-->

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      drawer: ref(false),
      miniState: ref(true),
    }
  }
}
</script>

<!--/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\️-->

<style scoped>
  .q-drawer {
    /*top: 8em !important;*/
    z-index: 0 !important;
  }
  .drawer {
    /*top: 8em !important;*/
    z-index: 0;
  }
  .q-drawer--on-top {
    z-index: 0 !important;
  }
  .helpMe {
    z-index: 0;
    top: 8em;
    background-color: blue;
  }

  .pageContainer {
    /*width: 70vw;*/
    margin-left: 50px;
  }
</style>
