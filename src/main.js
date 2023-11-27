import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

import 'primevue/resources/primevue.min.css'            // Primevue core 
import 'primeicons/primeicons.css'                      // Primevue icons
import 'primevue/resources/themes/saga-blue/theme.css'  // Primevue theme
import "primeflex/primeflex.css"
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import Paginator from 'primevue/paginator'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

// PrimeVue Components
app.component('Card', Card) 
app.component('Button', Button) 
app.component('Menubar', Menubar) 
app.component('InputText', InputText)
app.component('Paginator', Paginator)  


// Mount App
app.mount('#app')
