import router from '/src/router/index.ts'
import { createApp } from '/node_modules/.vite/deps/vue.js?v=b3085206'
import { auth } from '/src/firebase.ts'
import App from '/src/App.vue'
import '/node_modules/vuetify/dist/vuetify.min.css'
import '/src/assets/main.css'
import { createVuetify } from '/node_modules/.vite/deps/vuetify.js?v=b3085206'
import '/node_modules/vuetify/lib/styles/main.css'
import '/node_modules/@mdi/font/css/materialdesignicons.min.css'
import * as components from '/node_modules/.vite/deps/vuetify_components.js?v=b3085206'
import * as directives from '/node_modules/.vite/deps/vuetify_directives.js?v=b3085206'
let app
auth.onAuthStateChanged(() => {
  if (!app) {
    const vuetify = createVuetify({
      components,
      directives,
      theme: {
        defaultTheme: 'light'
        //
      }
    })
    app = createApp(App).use(router).use(vuetify).mount('#app')
  }
})

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcidcblxuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4vZmlyZWJhc2UnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcblxuaW1wb3J0ICd2dWV0aWZ5L2Rpc3QvdnVldGlmeS5taW4uY3NzJ1xuaW1wb3J0ICdAL2Fzc2V0cy9tYWluLmNzcydcblxuLy8gSW1wb3J0IFZ1ZXRpZnlcbmltcG9ydCB7IGNyZWF0ZVZ1ZXRpZnkgfSBmcm9tICd2dWV0aWZ5J1xuXG4vLyBWdWV0aWZ5IHN0eWxlc1xuaW1wb3J0ICd2dWV0aWZ5L3N0eWxlcydcbmltcG9ydCAnQG1kaS9mb250L2Nzcy9tYXRlcmlhbGRlc2lnbmljb25zLm1pbi5jc3MnXG5cbi8vIFZ1ZXRpZnkgcGx1Z2luc1xuaW1wb3J0ICogYXMgY29tcG9uZW50cyBmcm9tICd2dWV0aWZ5L2NvbXBvbmVudHMnXG5pbXBvcnQgKiBhcyBkaXJlY3RpdmVzIGZyb20gJ3Z1ZXRpZnkvZGlyZWN0aXZlcydcblxubGV0IGFwcDogYW55XG5cbmF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCgpID0+IHtcbiAgaWYgKCFhcHApIHtcbiAgICAvLyBDcmVhdGUgYSBWdWV0aWZ5IGluc3RhbmNlXG4gICAgY29uc3QgdnVldGlmeSA9IGNyZWF0ZVZ1ZXRpZnkoe1xuICAgICAgY29tcG9uZW50cyxcbiAgICAgIGRpcmVjdGl2ZXMsXG4gICAgICB0aGVtZToge1xuICAgICAgICBkZWZhdWx0VGhlbWU6ICdsaWdodCdcbiAgICAgICAgLy9cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gQ3JlYXRlIGFuZCBtb3VudCB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICBhcHAgPSBjcmVhdGVBcHAoQXBwKS51c2Uocm91dGVyKS51c2UodnVldGlmeSkubW91bnQoJyNhcHAnKVxuICB9XG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVk7QUFFbkIsU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyxZQUFZO0FBQ3JCLE9BQU8sU0FBUztBQUVoQixPQUFPO0FBQ1AsT0FBTztBQUdQLFNBQVMscUJBQXFCO0FBRzlCLE9BQU87QUFDUCxPQUFPO0FBR1AsWUFBWSxnQkFBZ0I7QUFDNUIsWUFBWSxnQkFBZ0I7QUFFNUIsSUFBSTtBQUVKLEtBQUssbUJBQW1CLE1BQU07QUFDNUIsTUFBSSxDQUFDLEtBQUs7QUFFUixVQUFNLFVBQVUsY0FBYztBQUFBLE1BQzVCO0FBQUEsTUFDQTtBQUFBLE1BQ0EsT0FBTztBQUFBLFFBQ0wsY0FBYztBQUFBO0FBQUEsTUFFaEI7QUFBQSxJQUNGLENBQUM7QUFHRCxVQUFNLFVBQVUsR0FBRyxFQUFFLElBQUksTUFBTSxFQUFFLElBQUksT0FBTyxFQUFFLE1BQU0sTUFBTTtBQUFBLEVBQzVEO0FBQ0YsQ0FBQzsiLCJuYW1lcyI6W119
