<template>
    <div style="background: #409eff;">
        <div class="head">
            <img src="static/back.svg" alt="" @click="goback">
            进行安全自证</div>
        <div class="imgbox">
            <img src="static/u18498.png" alt="" class="u18498">
            <div class="bottom">
                <span class="bio">
                    <img src="static/unsure.png" alt="">
                    <div>
                        活体检测
                    </div>
                </span>
                <span class="face">
                    <img src="static/unsure.png" alt="">
                    <div>
                        人像对比
                    </div>
                </span>
               
            </div>
        </div>
        <div class="footer">
            <!-- <div style="padding-top:8%;margin-bottom:2%;">请朗读下方数字</div>
            <div>
                <span v-for="(i,v) in getCode" :key="v">{{v}}</span>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    props:['code'],
    computed:{
        getCode(){
            return this.code.split('')
        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.head{
    position: relative;
    height: 40px;
    background: #409eff;
    color: #fff;
    line-height: 40px;
}
.head img{
    position: absolute;
    width: 20px;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 10px;
}
.imgbox{
    position: relative;
}
.bottom{
    position: absolute;
    bottom: 38px;
    left: 0;
    right: 0;
    margin: auto;
        width: 90%
}
.bottom span{
    display: inline-block;
    width: 23%;
    color: #fff;
    font-size: 12px;
}
.u18498{
    width: 85%;
}
.bottom span img{
    width: 39%;
}
.footer{
    position: relative;
    background: #409eff;
    color: #fff;
    top: -27px;
 height: 400px;
}
.footer div span{
    display: inline-block;
    width: 35px;
    height: 35px;
    border: 3px solid #fff;
    line-height: 35px;
    margin: 5px;
}
</style>

