<template>
    <div style="height:100%;overflow:hidden;">
        <Assay :code="code"/>
        <!-- <div class="button" @click="getImage">拍照</div> -->
		<div class="button" @click="getVideo">去拍照</div>
         <tips :show='show' :errormsg='errormsg' />
    </div>
</template>
<script>
import Assay from "../components/assayPage";
import axios from "axios";
import {faceCheck,getbaidutoken}from '../router/http.js'
import tips from '../components/tips'
export default {
  components: {
    Assay,tips
  },
  data(){
      return{
          access_token:'24.27f701c8c1ec86b6743c58da74311cb0.2592000.1544183778.282335-14690377',
          server:'https://120.92.9.222:8006/app/xfWsd',
          session_id:null,
         code:'0101',
          show:false,
      errormsg:'',
      }
  },
  methods: {
    onPlusReady() {
           console.log("plusready");
        
    },
   
    // 录像
    getVideo() {
     
       
        var cmr = plus.camera.getCamera();
        // var res = cmr.supportedVideoResolutions[9];
        //  alert( res );
        // var fmt = cmr.supportedVideoFormats[0];
        // alert( fmt );
        var reader = null;
        var newfile =null
        // //录像人脸检测
        // cmr.startVideoCapture( ( path )=>{
        //             alert( "Capture video success: " + path );
        //             console.log( "Camera supperted image resolutions: " + cmr.supportedImageResolutions );
        //             // this.upload(path) 
        //             plus.io.resolveLocalFileSystemURL(path, (entry)=>{
        //                 entry.file((file)=>{
        //                     console.log(file.type);
        //                     reader = new plus.io.FileReader();

        //                     reader.onloadend =  ( e )=> {
        //                         console.log('read success');
        //                         // console.log( e.target.result );
        //                         //读取文件内容 dataurl 转化为BLOB对象
        //                         var blob = this.dataURLtoBlob(e.target.result);
        //                         //BLOB对象转换为FILE对象 
        //                         newfile=new File([blob],file.name);
        //                         // console.log( newfile );
        //                         // this.file = newfile
        //                            var data = new FormData();
        //                            //-----xunfei
        //                         //    data.append('file',newfile)
        //                            //----end
        //                            //-----baidu
        //                             data.append('session_id',this.session_id)
        //                             data.append('video_base64',e.target.result.split(',')[1])
        //                             this.getVerify(data)
        //                     }
        //                     reader.readAsDataURL( file );
        //                 })
        //             }, function(e){
        //                 outLine('读取录像文件错误：'+e.message);
        //             } ); 
        //         },
        //         function( error ) {
        //             alert( "Capture video failed: " + error.message );
        //         },
        //         {resolution:res,format:fmt}
        //     );

        // // 拍摄10s后自动完成 
        // setTimeout( ()=>{cmr.stopVideoCapture()}, 10000 );
        
        //拍照人脸对比
        // cmr.captureImage(successCB, errorCB, options);
        var res = cmr.supportedImageResolutions[0];
        var fmt = cmr.supportedImageFormats[0];
        console.log("Resolution: "+res+", Format: "+fmt);
        cmr.captureImage( ( path )=>{
                // alert( "Capture image success: " + path ); 
                plus.io.resolveLocalFileSystemURL(path,(entry)=>{
                    entry.file((file)=>{
                        reader = new plus.io.FileReader();
                        reader.onloadend = (e)=>{
                             
                            //   data.append('image',e.target.result.split(',')[1])
                            //   data.append('image_type','BASE64')
                            //   data.append('face_type','LIVE')
                            //   data.append('quality_control','LOW')
                            //   data.append('liveness_control','HIGH')
                             //读取文件内容 dataurl 转化为BLOB对象
                                var blob = this.dataURLtoBlob(e.target.result);
                                //BLOB对象转换为FILE对象 
                                newfile=new File([blob],file.name);
                                // console.log( newfile );
                                // this.file = newfile
                                   var data = new FormData();
                                   var userId =JSON.parse(localStorage.getItem('data')).userId
                                   //-----xunfei
                                   data.append('image',newfile)
                                    data.append('userId',userId)
                                    this.faceCheck(data)
                        }
                         reader.readAsDataURL( file );
                    })
                })
            },
            function( error ) {
                // alert( "Capture image failed: " + error.message );
                console.log(error)
            },
            {resolution:res,format:fmt}
        );
    },
   //转换为BLOB对象
    dataURLtoBlob(dataurl) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
        u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type:mime});
    },
    // 上传文件
    upload(path) {
     
        var wt = plus.nativeUI.showWaiting();
        var task = plus.uploader.createUpload('https://aip.baidubce.com/rest/2.0/face/v1/faceliveness/verify?access_token='+this.access_token, 
            { method:"POST" },
            function ( t, status ) {
                // 上传完成
                if ( status == 200 ) { 
                    alert( "Upload success: " + t.url );
                    console.log(t)
                    console.log(status)
                    wt.close();
                } else {
                    console.log(t)
                    alert( "Upload failed: " + status );
                     wt.close();
                }
            }
        );
        task.addFile( path, {key:"video_base64"} );
        task.addData( "session_id", this.session_id );
        //task.addEventListener( "statechanged", onStateChanged, false );
        task.start();
    },
    // 获取access_token
    getAccesstoken(){
        console.log('getAccess_token')
        getbaidutoken().then(res=>{
           console.log(res)
           this.access_token = res.data.data
        //    this.getSession_id()
       }).catch((err)=>{
            console.log(err)
       })
    },
    //获取session_id
    getSession_id(){
        axios.get('https://aip.baidubce.com/rest/2.0/face/v1/faceliveness/sessioncode?access_token='+this.access_token,{headers:{"Content-Type":'application/x-www-form-urlencoded'}}).then(res=>{
            console.log(res)
            this.session_id = res.data.result.session_id
            this.code = res.data.result.code;
        }).catch(err=>{
            console.log(err)
        })
    },
    //活体检测
    getVerify(blob){
        var wt = plus.nativeUI.showWaiting();
        // console.log(blob.split(',')[1])
        axios({
            url:'https://aip.baidubce.com/rest/2.0/face/v1/faceliveness/verify?access_token='+this.access_token,
            // params:{access_token:this.access_token},
            data:blob,
            headers:{"Content-Type":'application/x-www-form-urlencoded'},
            method:'POST'
            }).then(res=>{
            console.log(res)
            wt.close()
        }).catch(err=>{
            console.log(err)
           wt.close()
        })
    },
    
    //活体检测keda
    // getVerify(blob){
    //     var wt = plus.nativeUI.showWaiting();
    //     console.log(blob)
    //    axios({
    //         url:'https://120.92.9.222:8006/app/xfWsd',
    //         data:blob,
    //         // params:{session_id:this.session_id,video_base64:blob},
    //         headers:{"Content-Type":'application/x-www-form-urlencoded'},
    //         method:'POST'
    //         }).then(res=>{
    //             console.log(res)
    //             wt.close()
    //         }).catch(err=>{
    //             console.log(err)
    //         wt.close()
    //     })
        
    // }
    //人脸对比
    faceCheck(data){
        console.log('faceCheck')
        var wt = plus.nativeUI.showWaiting();
       faceCheck(data).then(res=>{
           console.log(res)
            wt.close()
            if(res.data.code!=200){
                console.log(JSON.parse(res.data.data))
                this.errmsg(JSON.parse(res.data.data).error_msg)
            }else{
               this.$router.push({
                    path:'/nomarlLog'
                     ,query :{index:1,current:0}
                })
            }
       }).catch(err=>{
           console.log(err)
            wt.close()
       })
        // axios({
        //     url:'https://aip.baidubce.com/rest/2.0/face/v3/match?access_token='+this.access_token,
        //     data:data,
        //     // headers:{"Content-Type":'application/json'},
        //     method:'POST',
        //     }).then(res=>{
        //         console.log(res)
        //         arr = []
        //          wt.close()
        //     }).catch(err=>{
        //         console.log(err)
        //         arr = []
        //          wt.close()
        //     })
    },
    errmsg(data){
       this.errormsg = data
        this.show = true;
        setTimeout(()=>{
          this.show = false
        },1000)
    }
  },
  created(){
      
  },
  mounted() {
      
      // 扩展API加载完毕后调用onPlusReady回调函数 
        document.addEventListener( "plusready", this.onPlusReady, false );
        var r = null; 
        // 扩展API加载完毕，现在可以正常调用扩展API 
      this.getAccesstoken()
    
  }
};
</script>
<style scoped>
.button{
    position: absolute;
    top: 73%;
    background: #409eff;
    left: 0;
    right: 0;
    margin: auto;
    height: 45px;
    line-height: 45px;
    font-size: 15px;
    color: #fff;
    width: 85%;
    border: 1px solid #fff;
    border-radius: 5px;
}
</style>

