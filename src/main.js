import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

console.log($('body'))
Vue.use(VueRouter)

Vue.directive('demo', {
  bind: function () {
    console.log('directive demo bind')
  },
  update: function (value) {
    console.log('directive demo update', this.el)
    this.el.innerHTML =
      'name - '       + this.name + '<br>' +
      'expression - ' + this.expression + '<br>' +
      'argument - '   + this.arg + '<br>' +
      'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +
      'value - '      + value
  }
})

new Vue({
  el: 'body',
  components: {
    App
  }
})

// var vm = new Vue({
//   el: '#demo',
//   data: {
//     msg: 'hello'
//   }
// })

// Vue.filter('concatString', function (value, input) {
//   return value + input
// })

// new Vue({
//   el: '#d2',
//   data: {
//     msg: 'msg: ',
//     userInput: 'inputHere'
//   }
// })

