<template>
    <div>
        <div class="head">
            <back/>
            用户凭证</div>
        <div class="img">
            <img src="static/success.svg" alt="">
        </div>
        <div class="suc">凭证材料-上传成功</div>
        <div class="imgprove">
            <img :src="data.certificateFile.path" alt="">
        </div>
        <div class="text">
            <div class="one">姓    名：{{name}}</div>
            <div class="one">用 户 名：{{username}}</div>
            <div class="one"><span>用户编号：{{usernumber}}</span></div>
            <div class="one"><span>凭证编号:</span><span>{{data.certificateFile.certificateId}}</span></div>
            <div class="one"><span>凭证类型：</span><span>{{type}}</span></div>

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
            data:JSON.parse(localStorage.getItem('updatafile')),
            type:localStorage.getItem('userprove'),
            name:localStorage.getItem('userprovename'),
            usernumber:localStorage.getItem('userproveusernumber'),
            username:localStorage.getItem('userproveusername')
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
