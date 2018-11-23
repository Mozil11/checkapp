<template>
    <div class="">
        <div class="head">
            <back/>
            资产凭证</div>
       <proveNumber :receivableId='receivableId'/>
        
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
            files:JSON.parse(localStorage.getItem('newfile')),
            images:localStorage.getItem('images')
        }
    },
    methods:{
        gotosuccess(){
            unOcrUpdate(this.files).then(res=>{
                console.log(res)
                 this.$router.push({
                    path:'/addsuccess'
                })
            }).catch(err=>{
                console.log(err)
            })
           
        },
        goback(){
            this.$router.go(-1)
        }
    },
    mounted(){
       localStorage.getItem()
    }
}
</script>
<style scoped>
.head{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #d7d7d7;
}

</style>
