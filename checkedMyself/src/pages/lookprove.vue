<template>
    <div>
        <div class="head"><back/>查看信息</div>
        <div class="filename">{{fileslist.certificateId}}</div>
        <div class="main">
            <table>
                <tr>
                    <td>凭证编号</td>
                    <td>{{fileslist.certificateId}}（保存后生成）</td>
                </tr>
                <tr>
                    <td>* 凭证名称</td>
                    <td>
                        <el-input v-model="inputValue.name" placeholder="请输入名称" :readonly='nowrite'></el-input>
                    </td>
                </tr>
                <tr>
                    <td>备注信息</td>
                    <td><el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入备注信息"
                    v-model="inputValue.textarea" :readonly='nowrite'>
                    </el-input></td>
                </tr>
                <tr>
                    <td>上传时间</td>
                    <td>{{fileslist.createTime}}</td>
                </tr>
                <tr>
                    <td>上传版本号</td>
                    <td>{{fileslist.fileVersion}}</td>
                </tr>
                <tr>
                    <td>当前有效性</td>
                    <td>
                         <el-radio :disabled='isdisabled'  v-model="inputValue.radio" label="有效" >有效</el-radio>
                            <el-radio :disabled='isdisabled'  v-model="inputValue.radio" label="无效">无效</el-radio>
                    </td>
                </tr>
            </table>
        </div>
        <div class="footer">
            <button class="do" @click="todo" v-if='!todothis'>编辑</button>
            <button class="do" @click="save" v-else>保存</button>
            <button class="cancel" @click="cancel">取消</button>
        </div>
    </div>
</template>
<script>
import back from '../components/back'
import {updataMaterial} from '../router/http.js'
export default {
    components:{
back
    },
    data(){
        return{
            inputValue:{
                name:'项目一期应收账款发票',
                textarea:'项目一期应收账款发票',
                radio:'无效'
            },
            nowrite:true,
            isdisabled:true,
            todothis:false,
            fileslist:{}
        }
    },
    methods:{
        todo(){
            this.todothis = true;
            this.nowrite = false;
            this.isdisabled = false;
        },
        save(){
           this.fileslist.fileName = this.inputValue.name
            this.fileslist.remarks = this.inputValue.textarea
           this.fileslist.fileState = this.inputValue.radio
updataMaterial(this.fileslist).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
             this.todothis = false;
              this.nowrite = true;
            this.isdisabled = true;
        },
        cancel(){
            this.$router.go(-1)
        }
    },
    mounted(){
        this.fileslist = JSON.parse(localStorage.getItem('fileslist'))
        this.inputValue.name = this.fileslist.fileName
        this.inputValue.textarea = this.fileslist.remarks
        this.inputValue.radio = this.fileslist.fileState
    }
}
</script>
<style scoped>
.head{
    position: relative;
    height: 40px;
    line-height: 40px;
    margin: 0 8px;
    border-bottom: 1px solid #d7d7d7;
}
 table,table tr th, table tr td { border:1px solid #d7d7d7; }
  table tr td{
      padding: 10px ;
      font-size: 14px;
  }
table{
    width: 100%;
     border-collapse: collapse;

}
.main{
    padding: 20px;
}
.filename{
    text-align: left;
    padding-left: 20px;
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
}
.footer button{
    background: none;
    border: none;
}
.footer .do{
    width: 20%;
    border: 1px solid rgb(0, 168, 232);
    color: rgb(0, 168, 232);
    padding: 5px;
    border-radius: 5px;
}
.footer .cancel{
    width: 20%;
    border: 1px solid #f56c6c;
    color: #f56c6c;
    padding: 5px;
    border-radius: 5px;
}
.footer .do:active{
    background: #ddf1f8;
}
.footer .cancel:active{
    background: #f8dddd;
}
</style>
