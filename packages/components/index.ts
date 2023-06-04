import {App} from 'vue'
import JsxButton from './jsxButton'
import SfcButton from './sfcButton'

export {JsxButton,SfcButton}
export default{
  install(app:App){
    app.component(JsxButton.name, JsxButton)
    app.component(SfcButton.name, SfcButton)
  }
}