<template>
    <div class="">
        <div class="head">
            <back/>
            资产凭证</div>
       <proveNumber :receivableId='receivableId'/>
       <div class="main1">
           <div class="box">
               <img src="../assets/u19685.png" alt="">
           </div>
           <div class="provetype">
上传凭证类型：运输单
           </div>
           <div class="adi">编辑凭证材料基本信息</div>
           <el-row class="provename">
               <el-col :span="6" class="name1">
                <span>凭证名称</span>
               </el-col>
               <el-col :span="18">
                <el-input v-model="name" placeholder="请输入名称" class="inname"></el-input>
               </el-col>
           </el-row>
           <el-row class="provename">
               <el-col :span="6" class="name1">
                <span>凭证描述</span>
               </el-col>
               <el-col :span="18">
                <el-input v-model="name" placeholder="请输入描述" class="inname"></el-input>
               </el-col>
           </el-row>
       </div>
       <div class="footer">
           <button class="pic">重新拍摄识别</button>
           <button class="up" @click="gotosuccess">上传</button>
       </div>
    </div>
</template>
<script>
import back from '../components/back'
import proveNumber from '../components/proveNumber';

export default {
    components:{
        back,proveNumber
    },
    data(){
        return{
            name:'',
            receivableId: localStorage.getItem('receivableId'),
        }
    },
    methods:{
        gotosuccess(){
            this.$router.push({
                path:'/addsuccess'
            })
        }
    },
    mounted(){

    }
}
</script>
<style scoped>
.head{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #d7d7d7;
}
.main1{
    margin:20px 8px 20px 8px;
    position: relative;
  font-size: 14px;
    padding: 20px;
    border:1px solid #e0dfdf;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
}
.box{
    margin-top: 20px;
}
.provetype{
    margin-top: 10px;
}
.adi{
    margin-top: 20px;
    text-align: left;
}
.inname{
    /* width: 50%; */
    /* margin-left: 10px; */
}
.provename{
    text-align: left;
    margin-top: 10px;
}
.name1{
   margin-top: 10px;
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
