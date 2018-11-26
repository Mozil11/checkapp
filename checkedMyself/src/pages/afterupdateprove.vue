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
            <div><span class="a">发票代码</span><span class="o">{{data.data.vat_invoice_daima}}</span></div>
            <div><span class="a">发票号码</span><span class="o">{{data.data.vat_invoice_haoma}}</span></div>
            <div><span class="a">开票日期</span><span class="o">{{data.data.vat_invoice_issue_date}}</span></div>
            <div><span class="a">校验码</span><span class="o">{{data.data.vat_invoice_correct_code}}</span></div>
            <div><span class="a">名称</span><span class="o">{{data.data.vat_invoice_payer_name}}</span></div>
            <div><span class="a">纳税人识别号</span><span class="o">{{data.data.vat_invoice_rate_payer_id}}</span></div>
            <div><span class="a">地址/电话</span><span class="o">{{data.data.vat_invoice_payer_addr_tell}}</span></div>
            <div><span class="a">开户行及账号</span><span class="o">{{data.data.vat_invoice_payer_bank_account}}</span></div>

        </div>
        <div class="footer">
           <button class="pic" @click="goback">重新拍摄识别</button>
           <button class="up" @click="gotosuccess">上传</button>
       </div>
    </div>
</template>
<script>
import back from '../components/back'
import {uploadRecognition} from '../router/http.js'

export default {
    components:{
back
    },
    data(){
        return{
            data:JSON.parse(localStorage.getItem('invoice')),
            file:'',
            receivableId: localStorage.getItem('receivableId'),
            imgname:localStorage.getItem('imgname')
        }
},
    methods:{
        goback(){
            this.$router.go(-1)
        },
         gotosuccess(){
             uploadRecognition(this.file,this.receivableId).then(res=>{
                 console.log(res)
                 localStorage.clear('img')
                   localStorage.setItem('updatafile',JSON.stringify(res))
                    this.$router.push({
                        path:'/addsuccess'
                    })
             }).catch(err=>{
                  console.log(err)
             })
            
        }
    },
    mounted(){
        
         var blob = this.dataURLtoBlob(localStorage.getItem('img'));
        //BLOB对象转换为FILE对象 
        this.file=new File([blob],this.imgname);
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
