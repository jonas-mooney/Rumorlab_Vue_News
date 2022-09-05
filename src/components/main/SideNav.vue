<template>
  <div id="q-app" style="min-height: 100vh;">
    <q-btn
        flat
        @click="drawer = !drawer"
        round
        dense
        color="white"
        icon="menu"
    ></q-btn>

    <div>
      <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">

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
            class="bg-grey-3"
        >

          <q-list>

              <q-item class="navItem" clickable v-ripple>
                <router-link class="navLink" style="text-decoration: none; color: rgba(0, 0, 0, 0.87);" @click="handleCategoryClick(false)" to="/">
                  <q-item-section avatar>
                    <q-icon name="home"></q-icon>
                  </q-item-section>
                  <q-item-section>
                    Home
                  </q-item-section>
                </router-link>
              </q-item>

            <q-item class="navItem" clickable v-ripple>
              <router-link class="navLink" style="text-decoration: none; color: rgba(0, 0, 0, 0.87);" @click="handleCategoryClick(false)" to="/search">
                <q-item-section avatar>
                  <q-icon name="search"></q-icon>
                </q-item-section>
                <q-item-section>
                  Search
                </q-item-section>
              </router-link>
            </q-item>

            <q-item class="navItem" clickable v-ripple>
              <router-link class="navLink" style="text-decoration: none; color: rgba(0, 0, 0, 0.87);" @click="handleCategoryClick(true)" to="/categories">
                <q-item-section avatar>
                  <q-icon name="category"></q-icon>
                </q-item-section>
                <q-item-section>
                  Categories
                </q-item-section>
              </router-link>
            </q-item>

              <q-separator></q-separator>

            <q-item class="navItem" clickable v-ripple>
              <router-link class="navLink" style="text-decoration: none; color: rgba(0, 0, 0, 0.87);" @click="handleCategoryClick(false)" to="/">
                <q-item-section avatar>
                  <q-icon name="login"></q-icon>
                </q-item-section>
                <q-item-section>
                  Login
                </q-item-section>
              </router-link>
            </q-item>
            </q-list>
        </q-drawer>
<!-- Main content container below -->
        <q-page-container class="pageContainer">
          <router-view />
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
  },
  methods: {
    handleCategoryClick(bool) {
      this.$store.commit('selectCategoryPage', bool)
    }
  }
}
</script>

<!--/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\️-->

<style scoped>
  .navLink {
    display: flex;
  }
  .navItem:hover {
    background-color: #009688;
  }
  .q-drawer {
    /*top: 8em !important;*/
    z-index: 0 !important;
  }
  .drawer {
    /*top: 8em !important;*/
    z-index: 0;
  }

  .pageContainer {
    /*width: 70vw;*/
    margin-left: 50px;
  }
</style>
