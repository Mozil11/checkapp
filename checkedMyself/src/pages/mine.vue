<template>
    <div class='outside'>
        <div class="head">
            <div class="left-part">
                <img src="../assets/u19685.png" alt="">
            </div>
            <div class="right-part">
                <div class="hello">你好，<span class="user">{{data.username}}用户，</span> </div>
                <div class="company">[ {{data.companyName}} ]</div>
            </div>
        </div>
        <div class="main">
            <ul>
                <li class="first" @click="myuserNumber">我的区块链账号</li>
                <li>我的数字资产</li>
                <li>我的现金账户</li>
                <li>我的交易记录</li>
            </ul>
        </div>
    
        <div class="footer">
            <el-button type="danger" class="out"  @click="islogout = !islogout">退 出</el-button>
        </div>

         <transition name="fade" >
            <div class="msgbox" v-if="show">
                <div class="massage">
                    <img src="static/close.svg" alt="" class="close" @click="closeMsg">
                    <div class="usernumber">区块链账号</div>
                    <div>{{link.username}}</div>
                    <div class="userpaw">区块链密码 </div>
                    <div>{{link.password}}</div>
                    <div class="shuoming">说明：请妥善保管账号信息，切勿泄露</div>
                </div>
            </div>
        </transition>
         <transition name="fade" >
             <div class="logout" v-if="islogout">
                 <div class="logoutAlert">
                    
                     <div style="margin-top:40px;">
                          是否确认退出？
                     </div>
                     <div class="todo">
                         <ul>
                             <li class="cancel" @click="islogout = !islogout">取消</li>
                             <li class="makesure" @click="logout">确认</li>
                         </ul>
                     </div>
                 </div>
             </div>
         </transition>
    </div>
</template>
<script>
import {logout} from '../router/http.js'

export default {
    data(){
        return{
            show:false,
            islogout:false,
            data:{},
            link:JSON.parse(localStorage.getItem('link'))
        }
    },
    methods:{
        myuserNumber(){
            this.show = true
        },
        closeMsg(){
            this.show = false;
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
        this.data = JSON.parse(localStorage.getItem('data'))
    }
}
</script>
<style scoped>
.right-part,.left-part{
   position: absolute;
}
.left-part{
    height: 100px;
    width: 100px;
  top: 0;
    bottom: 0;
    margin:auto;
}
.left-part img{
    width: 100%;
  
}
.head{
    position: relative;
    height: 130px;
    padding: 20px;
    border:1px solid #e0dfdf;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
}
.right-part{
    height: 100px;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 140px;
    text-align: left;
    font-size: 14px;
}
.hello .user{
    color: #409eff;
}
.main{
    text-align: left;
}
.main ul li{
    height: 50px;
    line-height: 50px;
    border-bottom:1px solid #e0dfdf;
    padding-left: 20px;
}
.main ul li:active{
    background: #f0efef;
}
.first{
    margin-top: 20px;

}
.footer{
    position: absolute;
    bottom: 90px;
    left: 0;
    right: 0;
    margin: auto 8px;
}
.footer .out{
    width: 100%;
}
.msgbox,.logout{
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    height: 100%;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 1;
   

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


.massage{
    position: absolute;
    width: 80%;
    height: 246px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 10px;
    word-wrap:break-word ;
   
    padding: 20px 10px 20px 10px;
    text-align: left;
    font-size: 15px;
}
.logoutAlert{
     word-wrap:break-word ;
     position: absolute;
    width: 80%;
    height: 122px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 10px;
    padding: 20px 10px 20px 10px;
    font-size: 15px;
}
.shuoming{
font-size: 13px;
color: #a1a0a0;
margin-top: 50px;
}
.usernumber{
    margin-top: 20px;
}
.userpaw{
    margin-top: 20px;
}
.close{
    position: absolute;
    top: 10px;
   
    margin: auto;
    right: 10px;
    width: 30px;
}
.todo{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-top: 1px solid #e0dfdf;
}
.todo ul li{
box-sizing: border-box;
float: left;
width: 50%;
height: 40px;
line-height: 40px;

}
.todo ul li:active{
    background: #e0dfdf;
}
.cancel{
    border-right:1px solid #e0dfdf;
    border-radius: 0 0 0 10px;
}
.makesure{
     border-radius: 0 0 10px 0;
}
</style>
