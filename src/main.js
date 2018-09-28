// es5
// const Vue  = require('vue')
// es6
import Vue from 'vue'
import App from './App.vue'
import router from './router'


//mint-ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

// Vue.use(MintUI)



// import Vant from 'vant';
// import 'vant/lib/vant-css/index.css';

// Vue.use(Vant);

// import { Tabbar, TabbarItem } from 'vant';

// Vue.use(Tabbar).use(TabbarItem);

// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);

import {NavBar,Button,Tabbar,TabbarItem} from 'vant';
Vue
  .use(NavBar)
  .use(Button)
  .use(Tabbar)
  .use(TabbarItem)
// 底层的性能优化
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
