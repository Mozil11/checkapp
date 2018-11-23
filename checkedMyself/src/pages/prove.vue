<template>
    <div class='outside'>
        <div class="asset" @click="gotoprove">
            <img src="static/file.svg" alt="" class="icon-file">
            <span class="name">资产凭证</span>
        </div>
        <div class="asset">
            <img src="static/file.svg" alt="" class="icon-file">
            <span class="name">智能合约</span>
        </div>
    
    </div>
</template>
<script>

export default {
    methods:{
        gotoprove(){
            this.$router.push({
                path:'/updateprove'
            })
        }
    }
}
</script>
<style scoped>
.asset{
    margin:20px 8px 20px 8px;
    height: 100px;
    line-height: 90px;
    position: relative;
  
    padding: 20px;
    border:1px solid #e0dfdf;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
}
.asset:active{
    background: #e0dfdf;
}
.icon-file{
   vertical-align: middle;
    width: 50px;
    margin-right: 20px;
}
.name{
    font-size: 20px;
}
</style>
