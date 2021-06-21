import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'

import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
  // The color of the progress bar.
  color: '#2fa',

  // Whether the NProgress spinner will be shown.
  showSpinner: false,
})


Vue.use(plugin)

const el = document.getElementById('app')

new Vue({
  render: h => h(App, {
    props: {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: name => require(`./Pages/${name}`).default,
    },
  }),
}).$mount(el)