<template>
    <div style="margin-bottom:170px;">
        <div class="head">
            <back />企业凭证
        </div>
        <div class="asset">
            <img src="../assets/u19685.png" alt="" class="logo" v-if="logoPath==null">
            <img :src="logoPath" alt="" class="logo" v-else>
            <div class="write">
                <div>企业名称：{{companyName}}</div>
                <div>企业编号：{{companyId}}</div>
                <div>状态：{{authState}}</div>
            </div>
        </div>
        <div class="main">
            <div class="title">*  营业执照扫描件</div>
            <div class="pic">
                <img src="../assets/u19685.png" alt="" style="height:100%; float: left;" v-if="businessLicense==null">
                <img :src="businessLicense" alt="" style="height:100%; float: left;" v-else>


                <el-button type="primary" class="over" @click="updataprove('营业执照扫描件')">{{businessLicense==null?'上传凭证':'重新上传'}}</el-button>
            </div>
        </div>
        <div class="main">
            <div class="title">*  企业法人证件国徽面（正面）扫描件</div>
            <div class="pic">
                <img src="../assets/u19685.png" alt="" style="height:100%; float: left;" v-if="ownerCardFront==null">
                <img :src="ownerCardFront" alt="" style="height:100%; float: left;" v-else>

                <el-button type="primary" class="over" @click="updataprove('企业法人证件国徽面（正面）扫描件')">{{ownerCardFront==null?'上传凭证':'重新上传'}}</el-button>
            </div>
        </div>
        <div class="main">
            <div class="title">*  企业法人证件人像面（反面）扫描件</div>
            <div class="pic">
                <img src="../assets/u19685.png" alt="" style="height:100%; float: left;" v-if="ownerCardBack==null">
                <img :src="ownerCardBack" alt="" style="height:100%; float: left;" v-else>

                <el-button type="primary" class="over" @click="updataprove('企业法人证件人像面（反面）扫描件')">{{ownerCardBack==null?'上传凭证':'重新上传'}}</el-button>
            </div>
        </div>
        <div class="main">
            <div class="title">企业LOGO图片</div>
            <div class="pic">
                <img src="../assets/u19685.png" alt="" style="height:100%; float: left;" v-if="logoPath==null">
                <img :src="logoPath" alt="" style="height:100%; float: left;" v-else>

                <el-button type="primary" class="over" @click="updataprove('企业LOGO图片')">{{logoPath==null?'上传凭证':'重新上传'}}</el-button>
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
import {queryCompanyByUserId} from'../router/http.js'
export default {
    components:{
back
    },
    data(){
        return{
            userId:JSON.parse(localStorage.getItem('data')).userId,
            companyId:'',
            companyName:'',
            authState:'',
            logoPath:null,
            businessLicense:null,
            ownerCardFront:null,
            ownerCardBack:null
        }
    },
    methods:{
        updataprove(a){
            localStorage.setItem('runprove',a)
            this.$router.push({
                path:'/companyadd',
                
            })
        }
    },
    mounted(){
        queryCompanyByUserId(this.userId).then(res=>{
            console.log(res)
            this.companyId = res.data.companyId
            localStorage.setItem('companyId',this.companyId)
            this.companyName = res.data.companyName
            localStorage.setItem('companyName',this.companyName)

            this.authState = res.data.authState
            this.logoPath = res.data.logoPath
            localStorage.setItem('logoPath',this.logoPath)

            this.businessLicense = res.data.businessLicense
            this.ownerCardFront = res.data.ownerCardFront
            this.ownerCardBack = res.data.ownerCardBack
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
