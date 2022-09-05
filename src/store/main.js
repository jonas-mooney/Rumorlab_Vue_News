import { createApp } from 'vue'
import { createStore } from 'vuex'
import { Quasar } from 'quasar'
import axios from 'axios'


import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from '../App.vue'
import router from '../router/index.js'

const myApp = createApp(App).use(router)

export const store = createStore({
    state () {
        return {
            selectedArticle: '',
            articleContent: '',
            categoryLinkClicked: '',
            categoryPageSelected: false,
        }
    },
    getters: {
      getCategoryLink(state) {
          return state.categoryLinkClicked
      },
      isCategoryPageSelected(state) {
          return state.categoryPageSelected
      }
    },
    mutations: {
        modifySelectedArticle: (state, articleData) => {
            state.selectedArticle = articleData
        },
        selectCategoryPage: (state, bool) => {
            if (!bool) {
                state.categoryPageSelected = false
            }
            else {
                state.categoryPageSelected = true
            }
        },
        setCategoryLink: (state, category) => {
            state.categoryLinkClicked = category
        },
        retrieveArticleContent: (state, url) => {
            const { JSDOM } = require('jsdom');
            const { Readability } = require('@mozilla/readability');
            axios.get(url).then(function(r1) {

                // At this point we will have some search results from the API. Take the first search result...
                let firstResult = r1.data.articles[0];

                // ...and download the HTML for it, again with axios
                axios.get(firstResult.url).then(function(r2) {

                    // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
                    let dom = new JSDOM(r2.data, {
                        url: firstResult.url
                    });

                    // now pass the DOM document into readability to parse
                    let article = new Readability(dom.window.document).parse();

                    // Done! The article content is in the textContent property
                    state.articleContent = article.textContent
                })
            })
        }
    }
})

myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})

myApp.use(store)

myApp.mount('#app')












// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css
