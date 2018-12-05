<template>
    <div class='provecard' @click="gotoProveDetails">
        <el-row>
            <el-col :span="4" >
                <img src="../assets/u19685.png" alt="" class="logo">
            </el-col>
            <el-col :span="20" >
                <div class="rol">姓名：{{name}}</div>
                <div class="rol">用户名：{{username}}</div>
                <div class="rol">用户编号：{{usernumber}}</div>
            </el-col>
        </el-row>
       
    </div>
</template>
<script>
export default {
    props:['name','username','usernumber'],
    data(){
        return{

        }
    },
    methods:{
        gotoProveDetails(){
            this.$router.push({
                path:'/userprove'
            })
        }
    },
    mounted(){
       
localStorage.setItem('userprovename',this.name)
localStorage.setItem('userproveusername',this.username)
localStorage.setItem('userproveusernumber',this.usernumber)


    }
}
</script>
<style scoped>
.provecard{
    margin:20px 8px 20px 8px;
    height: 70px;
   text-align: left;
    position: relative;
  font-size: 14px;
    padding: 20px;
    border:1px solid #e0dfdf;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
}

.logo{
    width: 100%;
    margin-top: 8px;
}
.rol{
    margin-left: 20px;
    margin-top: 2px;
}
</style>
