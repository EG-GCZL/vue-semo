<template>
  <div id="app">
    <!-- <router-view/> -->

    <!-- 我是用App 替换了 #app的内容区域 -->

    <!-- 4.0 渲染 -->
    <!-- <login :msg="msg"></login>
    <register></register> -->
    <!-- <router-link to="/login">login</router-link>
    <router-link to="/register">register</router-link>
    <router-view></router-view> -->
    <!-- 头部 -->
   

  <!-- 底部 -->
  <!-- <mt-tab-container v-model="selected">
  <mt-tab-container-item id="one">
        one
  </mt-tab-container-item>
  <mt-tab-container-item id="two">
     two
  </mt-tab-container-item>
  <mt-tab-container-item id="three">
    three
  </mt-tab-container-item>
  <mt-tab-container-item id="four">
    four
  </mt-tab-container-item>
</mt-tab-container> -->
<!-- nav -->
<van-nav-bar
  title="ilive"
  left-text="return"
  right-text="menu"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
  class="sty"
  fixed
/>
 <!-- button -->
<van-tabbar v-model="active" >
  <van-tabbar-item icon="van-icon van-icon-wap-home" to="/Home">home</van-tabbar-item>
  <van-tabbar-item icon="van-icon van-icon-card" dot to="/Chat">Vip</van-tabbar-item>
  <van-tabbar-item icon="van-icon van-icon-cart" info="5" to="/Like">shopping</van-tabbar-item>
  <van-tabbar-item icon="van-icon van-icon-search" info="20" to="/Contact">contact</van-tabbar-item>
</van-tabbar>
 <router-view></router-view> 
  </div>
</template>

<script>
// 引入的组件名字尽量是大写的   .vue 可以省略
// 2.0 引入

// es5
// const Login = require('./components/Login')
// es6 
import Login from "./components/Login";
import Register from "./components/Register";


//1.引入路由
//import VueRouter from 'vue-router'
//2.手动注册路由
//Vue.use(VueRouter)

//3.0 4.0 手动注册路由
//5.实例化
//6.路由配置
export default {
  components: {
    // 3.0 注册
    Login,
    Register,
   
  },
  //es6  
  data(){
    return {
      active:0
    }
  },

  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  }
  // data: ()=>({

  // })
};
</script>

<style>
.van-nav-bar {
  background:orange;
  
}
.van-nav-bar__text,
.van-icon.van-nav-bar__arrow,
.van-nav-bar__title
{color:white;
font-size:16px}
</style>
