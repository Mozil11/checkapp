<template>
    <div class='outside'>
        <div class="head"><back/>用户凭证</div>
        <div class="text">请选择企业用户</div>
        <div v-if="list.length==0" style="padding-top:80px;">暂无用户</div>
        <div v-else>
            <div v-for="(v,i) in list" :key="i">
                <card :fullName='v.fullName' :userName='v.userName' :userId='v.userId' :logoPath='logoPath'/>
            </div>
        </div>
    </div>
</template>
<script>
import back from '../components/back'

import card from '../components/usercard'
import {getCompanyUserList,queryCompanyByUserId}from '../router/http.js'
export default {
    components:{
        card,back
    },
    data(){
        return {
            list:[{
                fullName:'aaa',
                userName:'aaa',
 userId:JSON.parse(localStorage.getItem('data')).userId,
            }],
 logoPath:null
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
        // this.getInquireReceivableList()
        queryCompanyByUserId(this.userId).then(res=>{
           
                        localStorage.setItem('logoPath',res.data.logoPath)
                        localStorage.setItem('companyId',res.data.companyId)

        }).catch(err=>{
            console.log(err)
        })
        getCompanyUserList().then(res=>{
            console.log(res)
             this.logoPath = localStorage.getItem('logoPath')
            this.list = res.data.rows
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
.text{
    font-size: 14px;
    color: #999999;
    margin-top: 20px;
}
</style>
