import Theme from 'vitepress/theme'
import JediUI from '@jedi-space/components'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

export default {
 ...Theme,
  enhanceApp: async ({ app}) => {
    app.use(JediUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}
