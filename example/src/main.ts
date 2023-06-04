import {createApp} from 'vue'
import App from './App.vue'
import JediUI from '@jedi-space/components'
import {JsxButton,SfcButton} from '@jedi-space/components'
console.log({JsxButton,SfcButton},'🏀')
const app = createApp(App)
app.use(JediUI)
app.mount('#app')