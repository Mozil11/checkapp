<template>
    <div class='outside'>
        <div class="head">
            <back/>
            确认<span>[登录信息]</span>
        </div>
        <div class="main"  v-loading="fullscreenLoading"  element-loading-text="信息上链中">
            <table>
                <tr>
                    <td class="lab">确认类型</td>
                    <td class="text">登录信息</td>
                </tr>
                <tr>
                    <td class="lab">端口名称</td>
                    <td class="text">{{platform}}</td>
                </tr>
                <tr>
                    <td class="lab">设备类型</td>
                    <td class="text">Mac</td>
                </tr>
                <tr>
                    <td class="lab">时间</td>
                    <td class="text">{{time}}</td>
                </tr>
                <tr>
                    <td class="lab">操作方</td>
                    <td class="text">
                        <div>{{data.username}}   （用户名）</div>
                        <div>{{data.fullName}}       （姓名）</div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="footer" v-if="footershow">
            <el-button type="danger" plain class="dag" @click="gotonomarl">
                <div>
                    <img src="static/close1.svg" alt="" class="close-icon">
                </div>
                取消</el-button>
            <el-button type="primary" class="pri" @click="makesureLog">
                <div>

                    <img src="static/u18584.png" alt="" class="sure-icon">
                </div>
                确认登陆</el-button>
        </div>
        <transition name="fade">
            <div class="setLinkwindow" v-if="setlink">
                <div class="linkbox" v-if="linkresult == 0">
                    <div class="title">
                        <img src="static/success.svg" alt="" class="success-icon">
                        上链成功
                    </div>
                    <div>
                        <div class="numb">上链编号：</div>
                        <div>{{uplink.chainNo}}</div>
                        <div class="placenum">所在区块号：{{uplink.blockId}}</div>
                        <div class="node">共识节点：{{uplink.consensus}}</div>
                    </div>
                </div>
                <div class="linkbox1" v-else>
                    <div class="title">
                        <img src="static/fail.svg" alt="" class="success-icon">
                        上链失败
                    </div>
                    <div class="agin">请重新确认并上链</div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import back from '../components/back'
import {makesureQrlogin} from '../router/http.js'

export default {
    components:{
back
    },
    data(){
        return{
            fullscreenLoading:false,
            footershow:true,
            linkresult:1,
            setlink:false,
            platform:'',
            data:{},
            time:this.getdate(),
            qrToken:'',
            uplink:{}
        }
    },
    methods:{
        makesureLog(){
            this.fullscreenLoading = !this.fullscreenLoading;
            
            makesureQrlogin(this.qrToken).then(res=>{
                console.log(res)
                this.setlink = true
                this.fullscreenLoading = false
                this.footershow = false
                if(res.data.code!=200){
                    this.linkresult = 1
                    setTimeout(() => {
                        
                        this.$router.go(-1)
                    }, 2000);
                }else{
                    this.linkresult = 0
                    this.uplink = res.data.data
                    setTimeout(()=>{
                        this.$router.push({path: '/nomarlLog'
                                ,query :{index:1,current:0}
                        });
                    },3000)
                }
                console.log(res)
            }).catch(err=>{
                console.log(res)
            })
            // setTimeout(()=>{
            //     this.setlink = true
            //      this.fullscreenLoading = false
            //      this.footershow = false
            // },2000)
        },
        getdate() {
            var now = new Date(),
                y = now.getFullYear(),
                m = now.getMonth() + 1,
                d = now.getDate();
            return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
        },
        gotonomarl(){
            this.$router.push({path: '/nomarlLog'
                               ,query :{index:1,current:0}
                        });
        }
    },
    mounted(){
        this.platform = localStorage.getItem('platform')
        this.data = JSON.parse(localStorage.getItem('data'))
        this.qrToken =  localStorage.getItem('qrToken')
    }
}
</script>
<style scoped>
.head{
    height: 40px;
    line-height: 35px;
    border-bottom: 1px solid #e0dfdf;
    font-size: 15px;
}
.head span{
    color: #409eff;
}
.main{
     position: relative;
    height: 200px;
    padding: 20px;
    border:1px solid #e0dfdf;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
    margin-top: 40px;
}
table{
    width: 100%;
    font-size: 14px;
    height: 100%;
}
.lab{
    text-align: right;
    padding-right: 10px;
}
.text{
    text-align: left;
}
.footer{
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    margin:auto;
}
.sure-icon,.close-icon{
    width: 50px;
}
.dag,.pri{
    width: 100px;
}
.el-button--danger.is-plain:focus, .el-button--danger.is-plain:hover {
    /* background: #fae6e6; */

    border-color: #f56c6c;
    color: #f56c6c;
}
.el-button--danger.is-plain:focus, .el-button--danger.is-plain:hover {
    background: #fef0f0;
    border-color: #f56c6c;
    color: #f56c6c;
}
.setLinkwindow{
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    height: 100%;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 1;
}
.linkbox,.linkbox1{
    position: absolute;
    width: 80%;
    height: 246px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 10px;
    word-wrap:break-word ;
   
    padding: 20px 10px 20px 10px;
    text-align: left;
    font-size: 15px;
}
.linkbox1{
    height: 126px;
}
.success-icon{
    width: 30px;
        vertical-align: bottom;
}
.title{
    height: 30px;
    text-align: center;
    line-height: 30px;
}
.numb{
    margin-top: 20px;
}
.placenum{
    margin-top: 20px;
}
.node{
    margin-top: 20px;
}
.agin{
    text-align: center;
    margin-top: 40px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

