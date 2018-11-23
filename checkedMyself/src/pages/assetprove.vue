<template>
    <div class='outside'>
        <div class="head"><back/>资产凭证</div>
        <div>
            <proveNumber :receivableId='receivableId'/>
            <div class="todo">
                <div>
                    <span>上传凭证类型：</span>
                    <el-select v-model="value" placeholder="请选择" class="sel">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
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
        </div>
    </div>
</template>
<script>
import proveNumber from '../components/proveNumber';
import back from '../components/back'
import {unOcrUpdate} from '../router/http.js'
export default {
    components:{
proveNumber,back
    },
    data(){
        return{
            options: [{
          value: '选项1',
          label: '发票'
        }, {
          value: '选项2',
          label: '贸易合同'
        }, {
          value: '选项3',
          label: '发货单'
        }, {
          value: '选项4',
          label: '其他'
        }],
        value: '',
         receivableId: localStorage.getItem('receivableId'),
        }
    },
    methods:{
        onPlusReady() {
            console.log("plusready");
            
        },
        //拍照
        takephoto(){
             var cmr = plus.camera.getCamera();
        
            var reader = null;
            var newfile =null
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
                                   
                                    unOcrUpdate(newfile).then(res=>{
                                        console.log(res)
                                    }).catch(err=>{
                                        console.log(err)
                                    })
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
            // 从相册中选择图片
            console.log("从相册中选择图片:");
            plus.gallery.pick(path=>{
                console.log(path);
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
                                   
                                    unOcrUpdate(newfile).then(res=>{
                                        console.log(res)
                                    }).catch(err=>{
                                        console.log(err)
                                    })
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
</style>
