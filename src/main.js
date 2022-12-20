import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueAxios from "vue-axios";
import axios from "axios";
import vSelect from "vue-select"


//import './assets/main.css'

const app = createApp(App)

app.component("v-select",vSelect)


app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
