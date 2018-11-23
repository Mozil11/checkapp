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

                    <el-button type="primary" class="takesub" >拍照上传</el-button>
                    </div>
                    <div>

                    <el-button type="primary" class="sub">从相册上传</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import proveNumber from '../components/proveNumber';
import back from '../components/back'

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
