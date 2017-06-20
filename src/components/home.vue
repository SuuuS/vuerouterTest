<template lang="html">
  <div  class="home">
    <p>home</p>
    <h1>{{msg}}</h1>
    <router-link to="/list1">list1</router-link>
    <router-link to="/list2">list2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data (){
    return {
      msg: '电影列表'
    }
  }
}
</script>
<style scoped>
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li{
border-bottom: 1px solid #999;
padding: 10px 0;
}

.inl-block{
display: inline-block;
}

.m-img{

}
.m-content{
margin-left: 20px;
}
</style>
