# vue-day06  

##  1、webpack-cli 项目文件说明   

+ dist 打包上线的文件

+ build 、config   webpack配置    

+ src  源码   

  assets 静态文件件  

  components 存放子组件的文件夹 可以自己命名  

  router 存放路由的文件夹   

  App.vue 实例的子组件  

    root -- App --- login、register  

  main.js 项目的入口文件 大多文件引入都是在这里使用   vue  

+ static 静态资源文件夹  

+ .babelrc js高级语法转换为低级语法  

+ index.html 视图的入口文件  

+ package.json 记录所有的项目依赖包   


## 2、webpack中组件的使用步骤  

1. 在components 下面以.vue 文件定义组件  

  + template 

  + script 

  + style  style 可以使用lang定义less 使用scoped 使用样式只能在当前组件使用   

2. 在App.vue 的script 区域使用import 引入子组件      

  import Login from './components/Login'

3. 在App.vue 的 components 属性下注册组件

  components: {
    Login  
  }
4. 在template 上渲染子组件   

  ```
    <template>
      <div>
        <login></login>
      </div>
    </template>
  ```
## 3、文件关系     

1. main.js 是实例化new Vue 

2. App.vue 是实例化的子组件

3. 在main.js中使用render 方法把 App.vue 替换  index.html 的视图  

4. components 下面定义的组件作为App.vue 组件的子组件   

  + 在App.vue 中使用import Login from './components/Login'  

  + 使用components注册子组件    

  + 在App.vue的template的模板中渲染   


## 在webpack-cli 的组件中使用(css预编译语言选其中一个即可)less 、sass 、stylus 

1. less 

  + yarn add less less-loader -D   (这些包需要自己装)

  + <style lang="less"></style>

2. sass  

  + yarn add node-sass sass-loader -D 

  + <style lang="sass"></style>

3. stylus 

  + yarn add stylus stylus-loader -D  

  + <style lang="stylus"></style>

