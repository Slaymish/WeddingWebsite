import router from './router'

import { createApp } from 'vue'
import { auth } from './firebase'
import App from './App.vue'

import 'vuetify/dist/vuetify.min.css'
import '@/assets/main.css'

// Import Vuetify
import { createVuetify } from 'vuetify'

// Vuetify styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.min.css'

// Vuetify plugins
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

let app: any

auth.onAuthStateChanged(() => {
  if (!app) {
    // Create a Vuetify instance
    const vuetify = createVuetify({
      components,
      directives,
      theme: {
        defaultTheme: 'light'
        //
      }
    })

    // Create and mount the root instance.
    app = createApp(App).use(router).use(vuetify).mount('#app')
  }
})
