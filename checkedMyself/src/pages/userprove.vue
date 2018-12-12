<template>
    <div class="outside" style="margin-bottom:170px;">
        <div class="head">
            <back />用户凭证
        </div>
        <div class="asset">
            <img src="../assets/u19685.png" alt="" class="logo" v-if="logoPath==null">
                <img :src="logoPath" alt="" class="logo" v-else>
            <div class="write">
                <div>姓    名：{{name}}</div>
                <div>用户名：{{username}}</div>
                <div>用户编号：{{usernumber}}</div>
            </div>
        </div>
        <div class="main">
            <div class="title">* 身份证人像面扫描件 </div>
            <div class="pic">
                <img src="../assets/u19685.png" alt="" style="height:100%; float: left;" v-if="cardFront==null">
                <img :src="cardFront" alt="" v-else>

                <el-button type="primary" class="over" @click="updataprove('身份证人像面扫描件')">{{cardFront==null?'上传凭证':'重新上传'}}</el-button>
            </div>
        </div>
        <div class="main">
            <div class="title">*  身份证国徽面扫描件</div>
            <div class="pic">
                <img src="../assets/u19685.png" alt="" style="height:100%; float: left;" v-if="cardBack==null">
                <img :src="cardBack" alt="" v-else>
                <el-button type="primary" class="over" @click="updataprove('身份证国徽面扫描件')">{{cardBack==null?'上传凭证':'重新上传'}}</el-button>
            </div>
        </div>
        <div class="main">
            <div class="title">*  近期免冠照片</div>
            <div class="pic">
                <img src="../assets/u19685.png" alt="" style="height:100%; float: left;" v-if="userImage">
                <img :src="userImage" alt="" v-else>
                <el-button type="primary" class="over" @click="updataprove('近期免冠照片')">{{userImage==null?'上传凭证':'重新上传'}}</el-button>
            </div>
        </div>
        
        <div class="footer">
              <el-button type="primary" class="sub" >提交</el-button>
            <el-button type="primary" class="save" plain>暂存</el-button>
        </div>
    </div>
</template>
<script>
import back from '../components/back'
import {getUserByUserName,queryCompanyByUserId} from '../router/http.js'
export default {
    components:{
back
    },
    data(){
        return{
            name:'',
username:'',
usernumber:'',
cardFront:null,
cardBack:null,
userImage:null,
 userId:JSON.parse(localStorage.getItem('data')).userId,
  logoPath:null

        }
    },
    methods:{
        updataprove(a){
            localStorage.setItem('userprove',a)
            this.$router.push({
                path:'/userproveadd',
                
            })
        }
    },
    mounted(){
        this.name = this.$route.query.a;
        this.username = this.$route.query.b;
        this.usernumber = this.$route.query.c;
        localStorage.setItem('name',this.name)
        localStorage.setItem('username',this.username)
        localStorage.setItem('usernumber',this.usernumber)
        this.logoPath = localStorage.getItem('logoPath')
        getUserByUserName(this.username).then(res=>{
            console.log(res)
            this.cardFront = res.data.cardFront
            this.cardBack = res.data.cardFront
            this,userImage = res.data.userImage
        }).catch(err=>{
            console.log(err)
        })
    }
}
</script>
<style scoped>
.head{
    height: 40px;
    border-bottom: 1px solid #e0dfdf;
    line-height: 40px;
}
.asset{
    text-align: left;
    margin:20px 8px 20px 8px;
    height: 100px;
    position: relative;
  
    padding: 20px;
    border:1px solid #e0dfdf;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
}
.main{
     text-align: left;
     margin:20px 8px 20px 8px;
    position: relative;
   height: 170px;
    padding: 20px;
    border:1px solid #e0dfdf;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
}
.logo{
    float: left;
    width: 80px;
    margin-top: 10px;
}
.write{
    float: left;
    text-align: left;
    color: #666666;
    margin-top: 13px;
    margin-left: 30px;
    font-size: 15px;
}
.title{
    font-size: 14px;
}
.pic{
    margin-top: 10px;
}
.over{
    float: left;
    margin-top: 37px;
        margin-left: 60px;
}
.footer{
    padding:20px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: #fff;
    line-height: 100px;
}
.sub,.save{
    width: 100px;
    height: 40px;
}
</style>
