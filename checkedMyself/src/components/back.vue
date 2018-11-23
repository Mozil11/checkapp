<template>
    <div class="back" @click="goback">
        <img src="static/backtop.svg" alt="">
    </div>
</template>
<script>
export default {
    methods:{
        goback(){
             this.$router.go(-1);//返回上一层
        }
    }
}
</script>
<style scoped>
.back{
   float: left;
    width: 20px;
      position: absolute;
    height: 40px;
}
.back img{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
</style>
