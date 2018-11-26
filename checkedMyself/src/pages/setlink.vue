<template>
    <div class='outside'>
        <div class="title">
            <back/>
             区块链账号
        </div>
        <div class="main">
            <div class="linkuser">区块链账号:<span>{{data.username}}</span>   </div>
            <div class="linkpaw"><div>区块链密码:</div><span>{{data.password}}</span></div>
            <div>
                 <el-button type="primary" class="over" @click="gotonomarl">完成</el-button>
            </div>
            <div class="text">
                说明：请妥善保管好您的私钥，切勿泄露
            </div>
        </div>
         <div class="firstfooter">本服务由微分链自证体系提供</div>
    </div>
</template>
<script>
import back from '../components/back'
// import {} from '../router/http.js'
export default {
    components:{
        back
    },
    data(){
        return{
            data:JSON.parse(localStorage.getItem('link')) 
        }
    },
    methods:{
        gotonomarl(){
             this.$router.push({
                path:'/nomarlLog'
                 ,query :{index:1,current:0}
            })
        }
    }
}
</script>
<style scoped>
.title{
    position: relative;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #cccccc;
    color: #333333;
}
.main{
    padding: 0 20px;
    text-align: left;
    margin-top: 50px;
     word-wrap:break-word ;
}
.linkuser,.linkpaw{
    font-size: 15px;
    
    border-bottom: 1px solid #cccccc;
    
}
.linkuser span,.linkpaw span{
    color: #409eff;
}
.linkpaw{
    margin-top: 20px;
}
.over{
    width: 100%;
    margin-top: 50px;
}
.text{
    color: #cccccc;
    font-size: 13px;
    text-align: center;
    margin-top: 30px;
}
.firstfooter{
    position: absolute;
    bottom: 20px;
    text-align: center;
    left: 0;
    right: 0;
    margin: auto;
    color: #cccccc;
    font-size: 13px;
}
</style>
