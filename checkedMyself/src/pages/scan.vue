<template>
    <div  style="height:100%;background:black;">
        <div class="head">
            <img src="static/back.svg" alt=""  @click="back" class="back">
            扫码
             <img src="static/pic.svg" alt=""  @click="scanPicture" class="pic">
        </div>
        <div id="bcid">
			
		</div>
		<div class="footer">
            <img :src="!flashshow?'static/lightclose.svg':'static/lightopen.svg'" alt="" @click="setFlash" class="flash">
        </div>
    </div>
</template>
<script>
import {scanCode,makesureQrlogin} from '../router/http.js'

export default {
    data(){
        return {
            ws:null,
            wo:null,
            scan:null,
            domready:false,
            flashshow:false
        }
    },
    methods:{
        onPlusReady() {
            console.log('plusready')
            this.getcode()
        },
        getcode(){
            // 获取窗口对象
            // this.ws=plus.webview.currentWebview();
            // this.wo=this.ws.opener();
            // 开始扫描
            // this.ws.addEventListener('show', ()=>{
               
            // }, false);
             this.scan=new plus.barcode.Barcode('bcid');
                this.scan.onmarked=this.onmarked;
                this.scan.start({conserve:false,filename:'_doc/barcode/'});
            // 显示页面并关闭等待框
            // this.ws.show('pop-in');
            // this.wo.evalJS('closeWaiting()');
            // this.$router.push({
            //     path:'/makesureLogin'
            // })
        },
        // 二维码扫描成功
        onmarked(type, result, file){
            switch(type){
                case plus.barcode.QR:
                type = 'QR';
                break;
                case plus.barcode.EAN13:
                type = 'EAN13';
                break;
                case plus.barcode.EAN8:
                type = 'EAN8';
                break;
                default:
                type = '其它'+type;
                break;
            }
            result = result.replace(/\r\n/g, '');
           console.log(result)
           if(result == 'your content'){
                this.$router.push({
                    path:'/assetprove'
                })
           }
           var qrdata = eval('(' + result + ')'); 
           console.log(qrdata)
           localStorage.setItem('platform',qrdata.platform)
           localStorage.setItem('qrToken',qrdata.qrToken)
            scanCode(qrdata.qrToken).then(res=>{
                console.log(res)
                 this.scan.close();
                this.$router.push({
                    path:'/makesureLogin'
                })
            }).catch(err=>{
                 this.scan.close();
                console.log(err)
                
            })
           
           
        },
        // 从相册中选择二维码图片 
        scanPicture(){
            plus.gallery.pick(function(path){
                plus.barcode.scan(path,this.onmarked,function(error){
                    plus.nativeUI.alert('无法识别此图片');
                });
            }, function(err){
                console.log('Failed: '+err.message);
            });
        },
        back(){
            // this.cancelScan()
            //    this.ws.close()
            this.scan.close();
           this.$router.push({
                path:'/nomarlLog'
                 ,query :{index:1,current:0}
            })
        },
        //开启闪光灯
        setFlash() {
            this.flashshow = !this.flashshow
            this.scan.setFlash(this.flashshow);
        },
        //取消扫码
        cancelScan() {
            this.scan.cancel();
        }
    },
    mounted(){
      // 扩展API加载完毕后调用onPlusReady回调函数 
        if(window.plus){
            this.onPlusReady();
        }else{
            document.addEventListener('plusready', this.onPlusReady, false);
        }
        // 监听DOMContentLoaded事件
        document.addEventListener('DOMContentLoaded', ()=>{
            this.domready=true;
            this.onPlusReady();
        }, false);
    }
}
</script>
<style scoped>
.head{
    color: #FFF;
    text-align: center;
    height: 40px;
    line-height: 40px;
}
#bcid {
	width: 100%;
    /* height: 100%; */
	position: absolute;
	top: 40px;
	bottom: 150px;
	text-align: center;
}
.tip {
	color: #FFFFFF;
	font-weight: bold;
	text-shadow: 0px -1px #103E5C;
}
.footer {
	width: 100%;
	height: 150px;
	position: absolute;
	bottom: 0px;
	
	text-align: center;
	color: #FFF;
}
.footer img{
    margin-top: 20px;
}
.back,.pic{
    width: 20px;
     margin-top: 10px;
}
.back{
    float:left;
    margin-left: 10px;
   
}
.pic{
    float:right;
    margin-right: 10px;
}
.flash{
    width: 80px;
}
</style>
