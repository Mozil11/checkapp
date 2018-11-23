<template>
    <div class='outside'>
        <div class="head"><back/>资产详情</div>
        <div class="main">
            <proveNumber :receivableId='receivableId'/>
            
            <div class="name">凭证材料</div>
            <div class="asset">
                <files :list='list'/>
                
            </div>
        </div>
        <div class="footer">
              <el-button type="primary" class="sub" @click="gotoassetprove">提交</el-button>
            <el-button type="primary" class="save" plain>暂存</el-button>
        </div>
    </div>
</template>
<script>
import back from '../components/back'
import files from '../components/fileShow'
import proveNumber from '../components/proveNumber'
import {inquireReceivableByReceivableId} from '../router/http.js'
export default {
    components:{
back,
files,proveNumber
    },
    data(){
        return{
            receivableId: localStorage.getItem('receivableId'),
            approveStatus: localStorage.getItem('approveStatus'),
            receivableRemain: localStorage.getItem('receivableRemain'), 
            receivableEndTime: localStorage.getItem('receivableEndTime'),
        supplierName:localStorage.getItem('supplierName'),
            coreCompanyName:localStorage.getItem('coreCompanyName'),
            list:[]


        }
    },
    methods:{
        gotoassetprove(){
            this.$router.push({
                path:'/assetprove'
            })
        }
    },
    mounted(){
        //  localStorage.getItem('receivableId')
        // localStorage.getItem('approveStatus')
        // localStorage.getItem('receivableRemain')
        // localStorage.getItem('receivableEndTime')
        // localStorage.getItem('supplierName')
        // localStorage.getItem('coreCompanyName')
        inquireReceivableByReceivableId(this.receivableId).then(res=>{
            console.log(res)
            this.list = res.data.list
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
    margin:20px 8px 20px 8px;
    height: 150px;
   text-align: left;
    position: relative;
    font-size: 14px;
    padding: 20px;
    border:1px solid #e0dfdf;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
}
.mt{
    margin-top: 3px;
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
.name{
    font-size: 16px;
    color: #a1a0a0;
    text-align: left;
    padding:10px;
}
.footer{
    padding:20px;
}
.sub,.save{
    width: 100px;
    height: 40px;
}
.el-button--primary.is-plain:focus, .el-button--primary.is-plain:hover {
    background: #ecf5ff;
    border-color: #b3d8ff;
    color: #409EFF;
}
</style>
