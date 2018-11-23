<template>
    <transition name="el-fade-in-linear">
        <div v-show="show">
            <div class="tips">{{errormsg}}</div>
        </div>
    </transition>
</template>
<script>
export default {
    props:['show','errormsg'],
    data(){
        return{
           
        }
    },
   
}
</script>
<style scoped>
.tips{
    width: 70%;
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    top: -100px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    color: #fff;
    font-size: 14px;
    z-index: 10;
}
</style>
