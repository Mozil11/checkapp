<template>
    <div class='provecard' @click="gotoProveDetails">
        <div class="shouldget">应收账款</div>
        <div style="margin-top:15px;">应收账款编号：{{receivableId}}</div>
        <!-- <div style="margin-top:3px;">状态：{{approveStatus}}</div>
        <div style="margin-top:3px;">资产余额（元）：{{receivableRemain}}</div>
        <div style="margin-top:3px;">资产到期日：{{receivableEndTime}}</div> -->
    </div>
</template>
<script>
export default {
    props:['receivableId','approveStatus','receivableRemain','receivableEndTime','supplierName','coreCompanyName'],
    data(){
        return{

        }
    },
    methods:{
        gotoProveDetails(){
            this.$router.push({
                path:'/proveDetails'
            })
        }
    },
    mounted(){
        localStorage.setItem('receivableId',this.receivableId)
        localStorage.setItem('approveStatus',this.approveStatus)
        localStorage.setItem('receivableRemain',this.receivableRemain)
        localStorage.setItem('receivableEndTime',this.receivableEndTime)
        localStorage.setItem('supplierName',this.supplierName)
        localStorage.setItem('coreCompanyName',this.coreCompanyName)


    }
}
</script>
<style scoped>
.provecard{
    margin:20px 8px 20px 8px;
    height: 50px;
   text-align: left;
    position: relative;
  font-size: 14px;
    padding: 20px;
    border:1px solid #e0dfdf;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
}
.shouldget{
    position: absolute;
    width: 100px;
    top: 0;
    right: 10px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: #67c23a;
    color: #fff;
    border-radius: 0 0 5px 5px;
}
</style>
