import { createRouter, createWebHistory } from 'vue-router'
import NewsContentMiddle from '../components/main/contentMiddle/NewsContentMiddle.vue'
import Search from '../components/main/contentMiddle/Search.vue'
import SelectedSearch from "../components/main/contentMiddle/SelectedSearch.vue";
import SingleArticle from "../components/main/contentMiddle/SingleArticle.vue";

const routes = [
    { path: '/', component: NewsContentMiddle },
    { path: '/search', component: Search },
    { path: '/article', component: SingleArticle },
    // { path: '/categories',  component: CategorySelect },
    // { path: '/login', component: Login }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

function newArticleRoute(routeId) {
    router.addRoute('search', { path: `${routeId}`, component: NewsContentMiddle })
}

export default router

//If you are using Vite, use import.meta.env instead, process.env is removed.