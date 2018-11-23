<template>
    <div>
        <Assay/>
        <!-- <div class="button" @click="getImage">拍照</div> -->
			<div class="button" @click="getVideo">录像</div>
    </div>
</template>
<script>
import Assay from "../components/assayPage";
import axios from "axios";
 
export default {
  components: {
    Assay
  },
  data(){
      return{
          access_token:'24.852b644274560d03a8364d8b37b3431d.2592000.1544173751.282335-11731249',
          server:'https://120.92.9.222:8006/app/xfWsd',
          session_id:null,
          wt:null
      }
  },
  methods: {
    onPlusReady() {
           console.log("plusready");
        
    },
   
    // 录像
    getVideo() {
     
       
        var cmr = plus.camera.getCamera();
        var res = cmr.supportedVideoResolutions[9];
         alert( res );
        var fmt = cmr.supportedVideoFormats[0];
        alert( fmt );
        var reader = null;
        var newfile =null
        
        cmr.startVideoCapture( ( path )=>{
                    alert( "Capture video success: " + path );
                    console.log( "Camera supperted image resolutions: " + cmr.supportedImageResolutions );
                    // this.upload(path) 
                    plus.io.resolveLocalFileSystemURL(path, (entry)=>{
                        entry.file((file)=>{
                            console.log(file.type);
                            reader = new plus.io.FileReader();

                            reader.onloadend =  ( e )=> {
                                console.log('read success');
                                // console.log( e.target.result );
                                //读取文件内容 dataurl 转化为BLOB对象
                                var blob = this.dataURLtoBlob(e.target.result);
                                //BLOB对象转换为FILE对象 
                                newfile=new File([blob],file.name);
                                console.log( newfile );
                              
                                this.getVerify(newfile)
                            }
                            reader.readAsDataURL( file );
                        })
                    }, function(e){
                        outLine('读取录像文件错误：'+e.message);
                    } ); 
                },
                function( error ) {
                    alert( "Capture video failed: " + error.message );
                },
                {resolution:res,format:fmt}
            );
        // 拍摄10s后自动完成 
	    setTimeout( ()=>{cmr.stopVideoCapture()}, 10000 );
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
    getAccess_token(){
       axios.get('http://192.168.5.117:3000/token').then((res)=>{
           console.log(res.data.access_token)
           this.access_token = res.data.access_token
           this.getSession_id()
       }).catch((err)=>{
            console.log(err)
       })
    },
    //获取session_id
    getSession_id(){
        axios.get('https://aip.baidubce.com/rest/2.0/face/v1/faceliveness/sessioncode?access_token='+this.access_token,{headers:{"Content-Type":'application/x-www-form-urlencoded'}}).then(res=>{
            console.log(res)
            this.session_id = res.data.result.session_id
        }).catch(err=>{
            console.log(err)
        })
    },
    //活体检测
    getVerify(blob){
        var wt = plus.nativeUI.showWaiting();
        // console.log(blob)
        axios({
            url:'https://120.92.9.222:8006/app/xfWsd',
            data:{file:blob},
            // params:{session_id:this.session_id,video_base64:blob},
            headers:{"Content-Type":'application/x-www-form-urlencoded'},
            method:'POST'
            }).then(res=>{
            console.log(res)
            wt.close()
        }).catch(err=>{
            console.log(err)
           wt.close()
        })
    }
  },
  created(){
      
  },
  mounted() {
      
      // 扩展API加载完毕后调用onPlusReady回调函数 
        document.addEventListener( "plusready", this.onPlusReady, false );
        var r = null; 
        // 扩展API加载完毕，现在可以正常调用扩展API 
      this.getSession_id()
    
  }
};
</script>
<style scoped>
</style>

