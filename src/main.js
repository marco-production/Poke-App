import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

import 'primevue/resources/primevue.min.css'            // Primevue core 
import 'primeicons/primeicons.css'                      // Primevue icons
import 'primevue/resources/themes/saga-blue/theme.css'  // Primevue theme
import "primeflex/primeflex.css"
import Badge from 'primevue/badge'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

// PrimeVue Components
app.component('badge-component', Badge) 


// Mount App
app.mount('#app')
