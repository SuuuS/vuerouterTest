<template>
  <div id="app">
    <!-- <div class="nav">
      <ul>
        <li><router-link to='/home'>Home</router-link></li>
        <li><router-link to='/about'>About</router-link></li>
      </ul>
    </div>
    <div class="main"> -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <!-- <router-view></router-view>
    </div>
    <h1>mint-ui-example</h1> -->
      <mt-button
        type="primary"
        @click=" sheetVisible = true">
        选择操作
      </mt-button>
      <mt-actionsheet
        cancel-text=""
        :actions="actions"
        :visible.sync="sheetVisible">
      </mt-actionsheet>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
        sheetVisible: false,
        actions: [{
          name: '展示 Toast',
          method: this.showToast
        }, {
          name: '展示 Message Box',
          method: this.showMsgbox
        }]
      };
    },

    methods: {
      showToast() {
        Toast('这是一个 Toast');
      },

      showMsgbox() {
        MessageBox('提示', '这是一个 Message Box');
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
