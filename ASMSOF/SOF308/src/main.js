import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
<<<<<<< HEAD

import { Ckeditor } from '@ckeditor/ckeditor5-vue'

=======
>>>>>>> 0db80a3172bfdd541e85b9279753c6b8270b7688
const app = createApp(App)
app.use(router)
app.component('Ckeditor', Ckeditor)
app.mount('#app')
