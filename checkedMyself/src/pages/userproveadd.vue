<template>
    <div class='outside'>
        <div class="head"><back/>用户凭证</div>
        <div>
            <userInfo />
            <div class="todo" v-if="todoshow">
                <div>
                    <span>上传凭证类型：</span>
                    <span>{{userprove}}</span>
                </div>
                <div>
                    <div>

                    <el-button type="primary" class="takesub" @click="takephoto">拍照上传</el-button>
                    </div>
                    <div>

                    <el-button type="primary" class="sub" @click="galleryImg">从相册上传</el-button>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="main1">
           <div class="box">
               <img :src="images" alt="" style="width: 100%;">
           </div>
           <div class="provetype">
                上传凭证类型：{{userprove}}
           </div>
           
           
       </div>
       <div class="footer">
           <button class="pic" @click="goback">重新拍摄识别</button>
           <button class="up" @click="gotosuccess">上传</button>
       </div>
            </div>
        </div>
    </div>
</template>
<script>
import userInfo from '../components/userInfo';
import back from '../components/back'
import {unOcrUpdate,xfOcrInvoice} from '../router/http.js'

export default {
    components:{
userInfo,back
    },
    data(){
        return{
            options: [{
          value: 0,
          label: '发票'
        }, {
          value: 1,
          label: '贸易合同'
        }, {
          value: 2,
          label: '发货单'
        }, {
          value: 3,
          label: '其他'
        }],
        value: '',
         receivableId: localStorage.getItem('receivableId'),
         files:{'a':'a'},
         todoshow:true,
         images:'',
         filename:'',
         marks:'',
         sign2:1,
         sign3:1,
         userprove: localStorage.getItem('userprove')
        }
    },
    methods:{
        goback(){
            this.todoshow = true;
        },
        gotosuccess(){
            if(this.value==2){

                unOcrUpdate(this.files,this.value,this.sign2,this.receivableId,this.filename,this.marks).then(res=>{
                    console.log(res)
                    localStorage.setItem('updatafile',JSON.stringify(res))
                    this.$router.push({
                        path:'/userproveSuccess'
                    })
                }).catch(err=>{
                    console.log(err)
                })
                this.sign2++
            }else if(this.value==3){
                unOcrUpdate(this.files,this.value,this.sign3,this.receivableId,this.filename,this.marks).then(res=>{
                    console.log(res)
                                        localStorage.setItem('updatafile',JSON.stringify(res))

                    this.$router.push({
                        path:'/userproveSuccess'
                    })
                }).catch(err=>{
                    console.log(err)
                })
                this.sign3++
            }else{
                unOcrUpdate(this.files,this.value,1,this.receivableId,this.filename,this.marks).then(res=>{
                    console.log(res)
                                        localStorage.setItem('updatafile',JSON.stringify(res))

                    this.$router.push({
                        path:'/userproveSuccess'
                    })
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
        onPlusReady() {
            console.log("plusready");
            
        },
        //拍照
        takephoto(){
            //  this.todoshow = false
             var cmr = plus.camera.getCamera();
        
            var reader = null;
            var newfile =null
            var res = cmr.supportedImageResolutions[2];
            var fmt = cmr.supportedImageFormats[0];
            console.log("Resolution: "+res+", Format: "+fmt);
            cmr.captureImage( ( path )=>{
                    // alert( "Capture image success: " + path ); 
                    plus.io.resolveLocalFileSystemURL(path,(entry)=>{
                        this.images = entry.toLocalURL()
                        entry.file((file)=>{
                            reader = new plus.io.FileReader();
                            reader.onloadend = (e)=>{
                                
                                //   data.append('image',e.target.result.split(',')[1])
                                //   data.append('image_type','BASE64')
                                //   data.append('face_type','LIVE')
                                //   data.append('quality_control','LOW')
                                //   data.append('liveness_control','HIGH')
                                //读取文件内容 dataurl 转化为BLOB对象
                                        var wt = plus.nativeUI.showWaiting();

                                    var blob = this.dataURLtoBlob(e.target.result);
                                    //BLOB对象转换为FILE对象 
                                    newfile=new File([blob],file.name);
                                    localStorage.setItem('img',e.target.result)
                                    localStorage.setItem('imgname',file.name)
                                    this.filename = file.name.split('.')[0]
                                    this.files = newfile
                                     this.todoshow = false
                                   
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
        //相册
        galleryImg(){
             var reader = null;
            var newfile =null
            // 从相册中选择图片
            console.log("从相册中选择图片:");
            plus.gallery.pick(path=>{
                console.log(path);

                plus.io.resolveLocalFileSystemURL(path,(entry)=>{
                        this.images = entry.toLocalURL()

                        entry.file((file)=>{
                            reader = new plus.io.FileReader();
                            reader.onloadend = (e)=>{
                                
                                //   data.append('image',e.target.result.split(',')[1])
                                //   data.append('image_type','BASE64')
                                //   data.append('face_type','LIVE')
                                //   data.append('quality_control','LOW')
                                //   data.append('liveness_control','HIGH')
                                  var wt = plus.nativeUI.showWaiting();
                                //读取文件内容 dataurl 转化为BLOB对象
                                    var blob = this.dataURLtoBlob(e.target.result);
                                    //BLOB对象转换为FILE对象 
                                    newfile=new File([blob],file.name);
                                    this.filename = file.name.split('.')[0]
                                    localStorage.setItem('imgname',file.name)
                                    localStorage.setItem('img',e.target.result)
                                    // console.log( newfile );
                                    this.files = newfile
                                     this.todoshow = false

                                   
                                   
                            }
                            reader.readAsDataURL( file );
                        })
                    })
            }, function ( e ) {
                console.log( "取消选择图片" );
            }, {filter:"image"} )
        }
    },
    mounted() {
      
      // 扩展API加载完毕后调用onPlusReady回调函数 
        document.addEventListener( "plusready", this.onPlusReady, false );
        var r = null; 
        // 扩展API加载完毕，现在可以正常调用扩展API 
    //   this.getAccesstoken()
  }
}
</script>
<style scoped>
.head{
    height: 40px;
    border-bottom: 1px solid #e0dfdf;
    line-height: 40px;
}
.todo{
    margin:20px 8px 20px 8px;
    height: 250px;
   text-align: left;
    position: relative;
    font-size: 14px;
    padding: 20px;
    border:1px solid #e0dfdf;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
}

.takesub,.sub{
    width: 100%;
    height: 50px;
    margin-top: 20px;
}
.takesub{
     margin-top: 80px;
}
.sel{
    width: 45%;
}
.main1{
    margin:20px 8px 20px 8px;
    position: relative;
  font-size: 14px;
    padding: 20px;
    border:1px solid #e0dfdf;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #a1a0a0;
}
.box{
    margin-top: 20px;
}
.provetype{
    margin-top: 10px;
}
.adi{
    margin-top: 20px;
    text-align: left;
}

.provename{
    text-align: left;
    margin-top: 10px;
}
.name1{
   margin-top: 10px;
}
.pic{
    background: #fff;
    border: 1px solid #409EFF;
    color: #409EFF;
    padding: 10px;
    border-radius: 5px;
    width: 130px;
}
.pic:active{
    background: rgb(183, 216, 250);
}
.up{
    background: #409EFF;
    border: none;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    width: 130px;
}
.up:active{
    background: rgb(44, 142, 240);
}
.footer{
    margin-top: 40px;
}
</style>
