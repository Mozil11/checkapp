<template>
    <div class="main">
            <div class="card">
            <el-row class="aaa">
                <el-col :span="4" class="first">
                    <img src="../assets/prove.svg" alt="">
                </el-col>
                <el-col :span="10">
                    <div class="guanlian">凭证编号</div>
                    <div class="num">{{receivableId}}</div>
                </el-col>
                <el-col :span="10">
                    <div class="name">
                        应收账款
                    </div>
                </el-col>
            </el-row>
        </div>
        </div>
</template>
<script>
export default {
    props:['receivableId'],
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
