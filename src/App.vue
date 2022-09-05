<template class="temp">
  <div class="q-md">
    <q-layout view="hHh Lpr lff"  style="height: 1000px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-blue">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
<!--          <q-toolbar-title>Header</q-toolbar-title>-->
          <Logo style="margin: auto; padding: .4em; position: relative; right: 1.6em" />
        </q-toolbar>
      </q-header>

      <q-drawer
          v-model="drawer"
          show-if-above

          :mini="miniState"
          @mouseover="miniState = false"
          @mouseout="miniState = true"
          mini-to-overlay

          :width="200"
          :breakpoint="500"
          bordered
          class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item class="navItem" clickable v-ripple>
              <router-link class="navLink" style="text-decoration: none; color: rgba(0, 0, 0, 0.87);" to="/">
                <q-item-section avatar>
                  <q-icon name="home"></q-icon>
                </q-item-section>
                <q-item-section>
                  Home
                </q-item-section>
              </router-link>
            </q-item>

            <q-item class="navItem" clickable v-ripple>
              <router-link class="navLink" style="text-decoration: none; color: rgba(0, 0, 0, 0.87);" to="/search">
                <q-item-section avatar>
                  <q-icon name="search"></q-icon>
                </q-item-section>
                <q-item-section>
                  Search
                </q-item-section>
              </router-link>
            </q-item>

            <q-item class="navItem" clickable v-ripple>
              <router-link class="navLink" style="text-decoration: none; color: rgba(0, 0, 0, 0.87);" to="/categories">
                <q-item-section avatar>
                  <q-icon name="category"></q-icon>
                </q-item-section>
                <q-item-section>
                  Category
                </q-item-section>
              </router-link>
            </q-item>

            <q-separator></q-separator>

            <q-item class="navItem" clickable v-ripple>
              <router-link class="navLink" style="text-decoration: none; color: rgba(0, 0, 0, 0.87);"  to="/login">
                <q-item-section avatar>
                  <q-icon name="login"></q-icon>
                </q-item-section>
                <q-item-section>
                  Login
                </q-item-section>
              </router-link>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
<!------------------------------------------>
      <q-page-container class="main">
        <router-view />
        <content-right />
      </q-page-container>
<!------------------------------------------>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'
import Main from "./components/main/Main.vue";
import ContentRight from "./components/main/contentRight/ContentRight.vue";
import Logo from "./components/header/Logo.vue";


export default {
  components: {Logo, ContentRight, Main},
  setup () {
    return {
      drawer: ref(false),
      miniState: ref(true)
    }
  },
  methods: {
    handleCategoryClick(bool) {
      this.$store.commit('selectCategoryPage', bool)
    }
  }
}
</script>

<style scoped>
q-page-container {
  height: 100vh;
}
.main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #213522;
  background-color: #f9f7f3;
  background-color: #1A1D1E;
  margin: 3em;
}
.navLink {
  display: flex;
}
  @media only screen and (max-width: 776px) {
    .main> {
      margin-left: 5em;
      background-color: blue;
    }
  }

</style>