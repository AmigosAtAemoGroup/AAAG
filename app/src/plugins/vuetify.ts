import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg"
  },
  theme: {
    themes: {
      light: {
        primary: '#702F73',
        info: '#777DA7',
        error: '#DB3259',
        success: '#C7E8AE'
      },
    },
  }
});
