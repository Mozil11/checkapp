<template>
    <div class="">
        <div class="head">
            <back />资产凭证
        </div>
        <div class="image">
            <img src="../assets/u19685.png" alt="">
        </div>
        <div class="name">
            <div>凭证名称: <span>项目一期应收账款发票</span> </div>
            <div>凭证描述: <span>XX描述XXX</span> </div>
        </div>
        <div class="main">
            <div><span class="a">发票代码</span><span class="o">012001800111</span></div>
            <div><span class="a">发票号码</span><span class="o">39810656</span></div>
            <div><span class="a">开票日期</span><span class="o">2018年08月23日</span></div>
            <div><span class="a">校验码</span><span class="o">006035050058102724</span></div>
            <div><span class="a">名称</span><span class="o">北京微分格科技有限公司</span></div>
            <div><span class="a">纳税人识别号</span><span class="o">91110102MA01DCJ536</span></div>
            <div><span class="a">地址/电话</span><span class="o">北京市西城区阜成门外大街2号12层</span></div>
            <div><span class="a">开户行及账号</span><span class="o">110934388010102</span></div>

        </div>
        <div class="footer">
           <button class="pic">重新拍摄识别</button>
           <button class="up" @click="gotosuccess">上传</button>
       </div>
    </div>
</template>
<script>
import back from '../components/back'
export default {
    components:{
back
    },
    methods:{
         gotosuccess(){
            this.$router.push({
                path:'/addsuccess'
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
.image{
    margin-top: 20px;
}
.name{
    text-align: left;
    width: 90%;
    margin: 20px auto 20px;
    
     border:1px solid #e0dfdf;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
}
.name div{
    padding: 10px;
}
.name div span{
     margin-left: 10px;
    color: #a1a0a0;
}
.main{
     width: 90%;
     margin: auto ;
    text-align: left;
     border:1px solid #e0dfdf;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
}
.main div{
     padding: 10px;
     font-size: 15px;
}
.main div .a{
display: inline-block;
width: 100px;
}
.main div .o{
    margin-left: 10px;
    color: #a1a0a0;
}
.pic{
    background: #fff;
    border: 1px solid #409EFF;
    color: #409EFF;
    padding: 10px;
    border-radius: 5px;
    width: 130px;
}
.pic:active{
    background: rgb(183, 216, 250);
}
.up{
    background: #409EFF;
    border: none;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    width: 130px;
}
.up:active{
    background: rgb(44, 142, 240);
}
.footer{
    margin-top: 40px;
}
</style>
