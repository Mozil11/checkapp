// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select, Input,InputNumber, Loading, Option,OptionGroup, Row,Col,Radio,RadioGroup, RadioButton,Upload,Dialog} from 'element-ui';

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Loading)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Upload)
Vue.use(Dialog)

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  console.log(to);
  const role = localStorage.getItem('data');

  if(!role && to.path !== '/'){
      next('/');
  }else{
          next();
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
