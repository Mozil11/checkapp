<template>
    <div class="out">
        <el-row :gutter="10" class="files">
            <el-col :span="8" class="part"  v-for="(v,i) in list" :key="i">
                <div class="filesbox" @click="sliderup(i)">
                    <img :src="src[filetype(v)]" alt="">
                   
                    <div class="name">{{v.fileName}}</div>
                </div>
            </el-col>
            <el-col :span="8" class="part">
                <div class="addfiles" @click="gotoassets">
                    <img src="../assets/addfiles.svg" alt="">
                   
                    <div class="add">添加凭证</div>
                </div>
            </el-col>
            <!-- <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog> -->
        </el-row>
        <transition name="el-zoom-in-bottom">
            <div class="shadow" v-show="show">
                <div class="todo">
                    <div class="title">操 作</div>
                    <div style="margin-bottom:10px;">
                         <el-row :gutter="10" >
                             <el-col :span="8">
                                 <div class="lookit" @click="letLook">

                               预览
                                 </div>
                            </el-col>
                            <el-col :span="8">
                                 <div class="lookit" @click="looked">

                               查看信息
                                 </div>
                            </el-col>
                            <el-col :span="8">
                                 <div class="lookit">

                               更新
                                 </div>
                            </el-col>
                         </el-row>
                    </div>
                    <div class="cancel" @click="show = false">
                        取 消
                    </div>
                </div>
            </div>
        </transition>
        <div class="window" v-show='window' @click="hidewin">
            <img :src="fileslist.path" alt="" v-if="showindex==1">
            <pdfshow v-else-if="showindex==0"/>
            
            <iframe v-else-if="showindex==2||showindex==4||showindex==5" :src="'https://view.officeapps.live.com/op/view.aspx?src='+url" width='400' height='400' frameborder='1'>
</iframe>
        </div>
    </div>
</template>
<script>
import pdfshow from './pdfshow'
import pdf from '../assets/pdf.svg'
import jpg from '../assets/jpg.svg'
import ppt from '../assets/ppt.svg'
import vidoe from '../assets/vidoe.svg'
import word from '../assets/word.svg'
import excel from '../assets/excel.svg'
export default {
    props:['list'],
    components:{
pdfshow
    },
    data(){
        return{
            src:[pdf,jpg,ppt,vidoe,word,excel],
            show:false,
            index:0,
              dialogImageUrl: '',
        dialogVisible: false,
        window:false,
        fileslist:{path:''},
        showindex:0
        }
    },
    mounted(){
            console.log(this.url)
    },
    methods:{
        hidewin(){
            this.window = false;
        },
        letLook(){
             this.window = true
            let type =this.fileslist.fileName.split('.')[1]
            if(type=='png'||type=='jpg'){
              return this.showindex = 1
           
           }else if(type=='pdf'){
              return  this.showindex = 0
           }else if(type=='ppt'){
               return this.showindex = 2
           }else if(type=='vidoe'){
              return  this.showindex = 3
           }else if(type=='word'){
              return  this.showindex = 4
           }else if(type=='xls'){
              return  this.showindex = 5
           }
        },
        gotoassets(){
            this.$router.push({
                path:'/assetprove'
            })
        },
         handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
        sliderup(i){
            this.show = true;
            console.log(i)
            this.fileslist = this.list[i]
            localStorage.setItem('fileslist',JSON.stringify(this.list[i]))
        },
        filetype(v){
           let type = v.fileName.split('.')[1]
           if(type=='png'||type=='jpg'){
              return this.index = 1
           
           }else if(type=='pdf'){
              return  this.index = 0
           }else if(type=='ppt'){
               return this.index = 2
           }else if(type=='vidoe'){
              return  this.index = 3
           }else if(type=='word'){
              return  this.index = 4
           }else if(type=='xls'){
              return  this.index = 5
           }
        },
        looked(){
            this.$router.push({
                path:'lookprove'
            })
        }
    }
}
</script>
<style scoped>
.out{
   height: 100%;
   overflow-y: scroll;
   overflow-x: hidden;
}
.filesbox,.addfiles,.lookit{
     padding: 10px;
    border: 1px solid #d7d7d7;
    text-align: center;
    background: #f8f8f8;
    border-radius: 5px;
}
.addfiles img{
    width: 70%;
}
.addfiles{
    border: 1px solid rgb(0, 168, 232);
}
.filesbox img{
 width: 70%;
}
.name{
    margin: auto;
margin-top: 1px;
 white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
 
      
}
.filesbox:active,.addfiles:active{
    background: #f1f1f1;
}
.part{
    margin-top: 5px;
}
.add{
    color: rgb(0, 168, 232);
         font-size: 13px;
}
.shadow{
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.todo{
    /* height: 200px; */
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    padding: 0 20px 0 20px;
}
.title{
    height: 50px;
    line-height: 50px;
    font-size: 18px;
}
.cancel{
    height: 40px;
    line-height: 40px;
    color: #999;
}
.window{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}
.window img{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
}
</style>
