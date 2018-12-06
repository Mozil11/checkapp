<template>
    <div class='outside'>
        <div class="head"><back/>上传凭证</div>
        <div class="main">
            <span class="companyProve"  @click="gotocompanyprove">
                <img src="static/company.svg" alt="">
                <div>企业凭证</div>
            </span>
            <span class="creditprove" @click="gotosacn">
                <img src="static/creditprove.svg" alt="" >
                <div>授信凭证</div>
            </span>
            <span class="userprove" @click="gotouserprove">
                <img src="static/user.svg" alt="" >
                <div>用户凭证</div>
            </span>
            <span class="assetprove" @click="gotoprove">
                <img src="static/money.svg" alt="">
                <div>资产凭证</div>
            </span>
        </div>
        <div class="shadow" v-show="shadowshow">
            <div class="box">
                
                <div class="in">请在电脑端申请授信时，选择【从手机上传】按钮，进行扫码上传</div>
                <div class="san" @click="gotosao">马上扫码上传</div>
                <div class="cancel" @click="cancel">取  消</div>
            </div>
        </div>
    </div>
</template>
<script>
import back from '../components/back'

export default {
     components:{
        back
    },
    data(){
        return{
shadowshow:false
        }
    },
    methods:{
        gotoprove(){
            this.$router.push({
                path:'/proveIn'
            })
        },
        gotocompanyprove(){
            this.$router.push({
                path:'/companyprove',
               
            })
        },
        gotouserprove(){
            this.$router.push({
                path:'/userlist',
               
            })
        },
        gotosacn(){
            this.shadowshow = true;
        },
        cancel(){
            this.shadowshow = false;
        },
        gotosao(){
            this.$router.push({
                path:'/scan'
            })
        }
    }
}
</script>
<style scoped>
.head{
    height: 40px;
    border-bottom: 1px solid #e0dfdf;
    line-height: 40px;
}
.main{
    text-align: center;
    
}
.companyProve,.creditprove,.userprove,.assetprove{
    display: inline-block;
    width: 120px;
    height: 120px;
     border:1px solid #409eff;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
    color: #409eff;
    font-size: 14px;
    
}
.companyProve:active,.creditprove:active,.userprove:active,.assetprove:active{
background: #e3f1ff;
}
.companyProve{
    margin-right: 10px;
    margin-bottom: 20px;
    /* margin-top: 40px; */
}
.companyProve img{
    width: 50px;
    margin-top: 20px;
}
.creditprove{
     margin-bottom: 20px;
    margin-top: 40px;
    margin-left: 10px;
}
.creditprove img{
     width: 50px;
    margin-top: 20px;
}
.userprove{
    margin-right: 10px;
}
.userprove img{
    width: 50px;
    margin-top: 20px;
}
.assetprove{
    margin-left: 10px;
}
.assetprove img{
    width: 50px;
    margin-top: 20px;
}
.shadow{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: rgba(0, 0, 0, 0.3);
}
.box{
    position: absolute;
    top: 50%;
    
    left: 50%;
    width: 80%;
    margin: auto;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 5px;
    
}
.in{
    padding: 10px;
    margin-top: 25px;
    margin-bottom: 25px;
}

.san,.cancel{
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #999999;
}
.san:active,.cancel:active{
    background: #e0dfdf;
}
</style>
