<template>
    <div  class='outside'>
        <div class="title">
            <back />
            区块链账号
            <span class="logout" @click="logout">退出</span>
        </div>
        <div class="main">
            <div class="welcome">你好，<span>{{data.username}} 用户  姓名 {{data.fullName}}，</span> </div>
            <div>请开始创建区块链账号以及公私钥，</div>
            <div>私钥由微分链区块链自证服务代为保管</div>
            <div class="setlink">
                <el-button type="primary" class="set"  @click="setlink">创建区块链账号</el-button>
            </div>
        </div>
        <div class="firstfooter">本服务由微分链自证体系提供</div>
    </div>
</template>
<script>
import{createLinkUser,logout}from '../router/http.js'
// import bus from '../router/bus.js'
import back from '../components/back'
export default {
    components:{
        back
    },
    data(){
        return{
            data:JSON.parse(localStorage.getItem('data')) 
        }
    },
    methods:{
        setlink(){
            createLinkUser().then(res=>{
                console.log(res)
                localStorage.setItem('link',res.data.data)
                this.$router.push({
                    path: '/setlink'
                })
            }).catch(err=>{
                console.log(err)
            })
        },
        logout(){
           logout().then(res=>{
                console.log(res)
                 localStorage.clear();
                this.$router.push({path: '/'
                });
            }).catch(err=>{
                console.log(err)
            })
        }
    },
    mounted(){
       console.log(this.data)
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
.logout{
position: absolute;
right: 0;
color: #409eff;
font-size: 14px;
}
.main{
    text-align: left;
    margin-top: 30px;
    padding: 0 20px;
}
.welcome span{
    color: #409eff;
}
.setlink{
    text-align: center;
    margin-top: 70px;
}
.set{
    width: 100%;
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

