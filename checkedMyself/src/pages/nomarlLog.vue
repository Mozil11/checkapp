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
        <div class="footer">
            <div>
                <el-button type="primary" class="checkcode" @click="gotoscan"><img src="static/code.svg" alt=""> 扫描二维码</el-button>
            </div>
            <div>
                <el-button type="primary" class="proveupdate" @click="gotoupdataprove"><img src="static/prove.svg" alt=""> 凭证上传</el-button>
            </div>
            <div>
                <el-button type="primary" class="proveupdate"><img src="static/link.svg" alt=""> 区块链账号</el-button>
            </div>
        </div>
       
    </div>
</template>
<script>

import bus from '../router/bus.js'

export default {
    
    data(){
        return {
            data:{
                companyName: "北京微分格",
                flag: false,
                fullName: "易流平",
                // token: "9994dcce37a8499a8cafed9ecf4a6ce5",
                username: "Yeelp"
            }
        }
    },
    methods:{
      
        gotoscan(){
            
            this.$router.push({
                path:'/scan'
            })
        },
        gotoupdataprove(){
            this.$router.push({
                path:'/updateprove'
            })
        }
    },
    mounted(){
        // localStorage.setItem('token','"9994dcce37a8499a8cafed9ecf4a6ce5"')
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
    height: 200px;
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
    padding-right: 20px;
}
.hello .user{
    color: #409eff;
}
.footer{
    position: absolute;
    top: 265px;
    left: 0;
    right: 0;
    margin:  auto 8px;
}
.footer .checkcode,.footer .proveupdate{
    width: 100%;
    height: 60px;
   
}
.checkcode img,.proveupdate img{
    width: 20px;
    vertical-align: middle;
    margin-right: 5px;
}
.proveupdate{
    margin-top: 20px;
}
</style>
