import Vue, { VNode } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import moment from 'moment';
import "./App.scss"
import VueAWN from "vue-awesome-notifications"
import { DirectiveBinding } from 'vue/types/options';

Vue.config.productionTip = false

// Set global options
let globalOptions = {}
Vue.use(VueAWN, globalOptions);

//== ProtoType mods

Vue.prototype.$toast = {
  success(msg: string) {
    Vue.prototype.$awn.success(msg, {})
  },
  error(msg: string) {
    Vue.prototype.$awn.alert(msg, {})
  },
  info(msg: string) {
    Vue.prototype.$awn.info(msg, {})
  },
  confirm(msg: string) {
    Vue.prototype.$awn.confirm(msg, {})
  }
}

declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    $toast: {
      success: (msg: String) => void,
      error: (msg: String) => void,
      info: (msg: String) => void,
      confirm: (msg: String) => void
    },
  }
}

//=== Startup
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
