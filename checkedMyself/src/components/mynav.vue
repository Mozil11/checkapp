<template>
    <div class="main" v-if="isshow">
        <div class="nav">
            <ul>
                <li v-for="(v,i) in navlist" :key="i" @click="addclass(i)" :class="{'act':i==current}">
                    {{v}}
                </li>
              
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
    data(){
        return{
            current:0,
            navlist:[
                '首页','发现','我的'
            ],
            isshow:false
        }
    },
    methods:{
        addclass(i){
             this.current=i;
             if(i==0){
                    this.$router.push({path:'/nomarlLog',query :{index:1}})
             }else if(i==1){
                    this.$router.push({path:'/prove',query :{index:1}})
             }else{
                    this.$router.push({path:'/mine',query :{index:1}})
             }
        }
    },
    watch: {
        $route (to, from) {
        // 对路由变化作出响应...
        console.log(to)
            if(to.query.current&&to.name=='NomarlLog'){
                this.current = to.query.current
            }
        }
  },
    mounted(){
        
        console.log(this.$route.query.index)
         if(this.$route.query.index == 1){
                this.isshow = true
            }else{
                this.isshow = false
            }
        this.$router.beforeEach((to, from, next) => {
            
           if(to.query.index == 1){
                this.isshow = true
            }else{
                this.isshow = false
            }
            next()
        // ...
        })
    }
}
</script>
<style scoped>
.main{
   
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
.nav{
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #409eff;
}
.nav ul li{
    float: left;
    width: 33.33%;
    color: #409eff;
}
.nav ul .act{
    background: #409eff;
    color: #fff;
}
</style>
