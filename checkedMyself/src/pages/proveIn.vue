<template>
    <div class='outside'>
        <div class="head"><back/>资产凭证</div>
        <div class="text">请选择资产，添加凭证</div>
        <div v-if="list.length==0" style="padding-top:80px;">暂无资产凭证</div>
        <div v-else>
            <div v-for="(v,i) in list" :key="i">
                <card :receivableId='v.receivableId' :approveStatus='v.approveStatus' :receivableRemain='v.receivableRemain' :receivableEndTime='v.receivableEndTime' :supplierName='v.supplierName' :coreCompanyName='v.coreCompanyName'/>
            </div>
        </div>
    </div>
</template>
<script>
import back from '../components/back'

import card from '../components/proveCard'
import {inquireReceivableList}from '../router/http.js'
export default {
    components:{
        card,back
    },
    data(){
        return {
            list:[]
        }
    },
    methods:{
        getInquireReceivableList(){
            inquireReceivableList().then(res=>{
                console.log(res)
                this.list = res.data.rows
            }).catch(err=>{
                console.log(err)
            })
        }
    },
    mounted(){
        this.getInquireReceivableList()
    }
}
</script>
<style scoped>
.head{
    height: 40px;
    border-bottom: 1px solid #e0dfdf;
    line-height: 40px;
}
.text{
    font-size: 14px;
    color: #999999;
    margin-top: 20px;
}
</style>
