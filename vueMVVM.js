// 前端的MVVM和后端的MVC不同
// View 视图 代表DOM
// Model 数据 代表JavaScript对象
// ViewModel 通讯 视图和数据的中间件 观察者
// 当数据发生变化 ViewModel会通知视图发生对应的更新
// 当视图发生变化，ViewModel也会通知数据作出对应的更新


// 刷新
// 对页面进行刷新时 虽然有些资源会被缓存
// 但是页面的DOM CSS JS 都会被重新解析一遍
// 因此 移动端通常会被做成SPA单页应用

// vue.js
// 它是一个轻量级 MVVM 框架
// 数据驱动 + 组件化的前端开发
// 组件化是 vue 的核心思想

// 这里提到了gzip 压缩

// View 2 Model
// 在普通的view 和 Model 交互中
// 是通过Ajax去改变的 需要手动触发DOM改变

// Directives

// Vue.js 只需要改变 Model
// Vue Model改变时 通过Directives 对view进行响应改变
// Vue 通过Directives对DOM做相关的封装

//DOM Listeners

// DOM Listeners 会对View作出监听 当view改变时 Vue 对Model作出相应的更新

// Vue指令是对DOM的封装

// 创建Vue对象
// 我们有一份数据a.b 在Vue对象实例化的过程中
// 会给a.b这份数据 通过ES5的object.defineProperty属性添加一个getter和setter
// 同时 vue会对模版做编译 解析生成一个指令对象 Directive 如v.text指令 v-text='a.b'
// 每一个指令对象都会关联一个 Watcher
// 当我们对指令对应的表达式做求值时 就会被触发getter
// 这时候我们就会把依赖收集到watcher里面
// 当我们再次改变a.b的时候 就会触发setter 会通知到对应关联的watcher
// 然后watcher就会再次对a.b求值 计算对比新旧值
// 当发现watcher值改变了 watcher又回通知到指令 到指令的update方法
// 由于指令是对原生DOM的封装 所以他会调用原生DOM的方法去更新视图



// 组件化
// 扩展HTML元素，封装可重用的代码
// 在vue.js中 每个组建都对应一个vuemodel

// 组建设计原则
// 页面上每个独立的可视／可交互区域视为一个组件
// 每个组件对应一个工程目录，组件所需要的各种资源在这个目录下就近维护
// 页面不过是组件的容器，组件可以嵌套自由组合形成完整的页面
