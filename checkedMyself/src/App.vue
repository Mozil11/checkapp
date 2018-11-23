<template>
  <div id="app">
    <router-view/>
    <Nav/>
  </div>
</template>

<script>
import Nav from './components/mynav.vue'
export default {
  components:{
        Nav
    },
    data(){
      return{
        isshow:false
      }
    },
  mounted(){
    
    // this.$router.beforeEach((to, from, next) => {
    //   console.log(to)
    //   if(to.name!='Login'){
    //     this.isshow = true;
      
    //   }else{
    //     this.isshow = false;
      
    //   }
    //     next()
    //   // ...
    // })
  }
}
</script>

<style>
html{
  height: 100%;
}
body{
    margin: 0;
    height: 100%;
}
ul,li{ padding:0;margin:0;list-style:none}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.telephone .el-input__inner,.password .el-input__inner{
  padding-left: 30px;
}
.outside{
  margin: 8px;
}
</style>
