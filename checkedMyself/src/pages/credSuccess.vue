<template>
    <div>
        <div class="head">
            <back/>
            资产凭证</div>
        <div class="img">
            <img src="static/success.svg" alt="">
        </div>
        <div class="suc">凭证材料-上传成功</div>
        <div class="imgprove">
            <img :src="data.certificateFile.path" alt="">
        </div>
        <div class="text">
            <div class="one">产品名称：齐鲁银行应收账款融资</div>
            <div class="one">资方名称：齐鲁银行</div>
            <div class="one">合作平台：微分格平台</div>
            <div class="one">授信编号：sx001</div>
            <div class="one"><span>凭证编号</span><span>{{data.certificateFile.certificateId}}</span></div>
            <!-- <div class="one"><span>类凭证型：</span><span>运输单</span></div> -->
            <!-- <div class="one"><span>凭证名称：</span><span>{{data.certificateFile.fileName}}</span></div> -->
            <!-- <div class="one"><span>凭证描述：</span><span>{{data.certificateFile.remarks}}</span></div> -->

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
            data:JSON.parse(localStorage.getItem('updatafile')) 
        }
    }
}
</script>
<style scoped>
.head{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #d7d7d7;
}
.img{
    margin-top: 40px;
}
.img img{
    width: 60px;
}
.suc{
    font-size: 20px;
    margin-top: 20px;
}
.imgprove{
    margin-top: 20px;
}
.imgprove img{
width: 50%;
}
.text{
    text-align: left;
    padding: 40px;
    font-size: 15px;
}
.one{
    margin-top: 10px;
}
</style>
