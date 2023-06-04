import {defineComponent} from 'vue'

export default defineComponent({
  name:'JsxButton',
  setup(props,context){
    return ()=><button>
      {context.slots.default?.()}
    </button>
  }
})