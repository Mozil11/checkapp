<template>
    <div class="main">
            <div class="card">
            <el-row class="aaa">
                <el-col :span="4" class="first">
                    <img src="../assets/prove.svg" alt="" v-if="logoPath">
                    <img :src="logoPath" alt="" v-else>
                </el-col>
                <el-col :span="20">
                    <div class="guanlian">企业名称：{{companyName}}</div>
                    <div class="num">企业编号：{{companyId}}</div>
                </el-col>
              
            </el-row>
        </div>
        </div>
</template>
<script>
export default {
   props:['companyId','companyName','logoPath'],
    data(){
        return{
        }
    },
    mounted(){
    }
}
</script>
<style scoped>
.guanlian{
    font-size: 13px;
    margin-top: 23px;
    margin-left: 15px;
}
.num{
    font-size: 15px;
     margin-left: 15px;
     word-wrap:break-word;
}
.name{
    width: 80%;
    height: 40px;
    line-height: 40px;
    background: #67c23a;
    text-align: center;
    color: #fff;
    margin-top: 23px;
      /* margin-left: 15px; */
      border-radius: 5px;
          float: right;
}
.card{
    margin:20px 8px 20px 8px;
    height: 100px;
   text-align: left;
    position: relative;
  font-size: 14px;
    padding: 20px;
    border:1px solid #e0dfdf;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
    
}
.aaa{
    height: 100%;
}
.first img{
    width: 90%;
    margin-top: 20px;
    text-align: center;
}

</style>
