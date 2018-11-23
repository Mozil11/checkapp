import axios from "axios";
// import store from './dataSave.js'

axios.defaults.baseURL = 'https://dev.microger.com';
// axios.defaults.headers.common['Authorization']  = '9994dcce37a8499a8cafed9ecf4a6ce5'
//发送短信验证码
function sendmsgCode(number){
    var data = new FormData();
    data.append('phone',number)
    return axios.post('/app/sendMsg',data)
}
//登陆
function loginbycode(number,code){
    var data = new FormData();
    data.append('phone',number)
    data.append('code',code)
    return axios.post('/app/loginBySMS',data)
}
//扫码
function scanCode(qrToken){
    var token = localStorage.getItem('token')
    var data = new FormData();
    data.append('qrToken',qrToken)
    return axios.post('/app/qrScan',data,{headers:{'Authorization':token}})


}
//确认登陆
function makesureQrlogin(qrToken){
    var token = localStorage.getItem('token')
    var data = new FormData();
    data.append('qrToken',qrToken)
    return axios.post('/app/qrlogin',data,{headers:{'Authorization':token}})
}
//创建区块链账户（组织用户）
function createLinkUser(){
    var token =localStorage.getItem('token')
    return axios.post('/app/createChainUser',{a:'a'},{headers:{'Authorization':token}})
}
//	资产列表
function inquireReceivableList(){
    var token = localStorage.getItem('token')
    console.log(token)
    return axios.post('/allReceivableInformation/inquireReceivableList',{offset:0,limit:10},{headers:{'Authorization':token}})
}
//	资产详情
function inquireReceivableByReceivableId(receivableId){
    var token = localStorage.getItem('token')
    var data = new FormData();
    data.append('receivableId',receivableId)
    return axios.post('/allReceivableInformation/inquireReceivableByReceivableId',data,{headers:{'Authorization':token}})
}
//凭证材料信息的修改
function updataMaterial(fileslist){
    var token = localStorage.getItem('token')
    var data = new FormData();
    data.append('fileId',fileslist.fileId)
    data.append('fileName',fileslist.fileName)
    data.append('remarks',fileslist.remarks)
    data.append('createTime',fileslist.createTime)
    data.append('fileVersion',fileslist.fileVersion)
    data.append('fileState',fileslist.fileState)
    return axios.post('/allReceivableInformation/updataMaterial',data,{headers:{'Authorization':token}})

}
//凭证材料非ocr上传
function unOcrUpdate(file){
    var token = localStorage.getItem('token')
    var data = new FormData();
    data.append('file',file)
    data.append('start','3')
    return axios.post('/common/sysFile/uploadFile',data,{headers:{'Authorization':token}})
}
//人脸比对-百度

function faceCheck(data){
    var token = localStorage.getItem('token')
    return axios.post('/app/baiduAIFaceMatch',data,{headers:{'Authorization':token}})
}
//选择一个角色
function chooseRole(roleId){
    var token = localStorage.getItem('token')
    var data = new FormData();
    data.append('roleId',roleId)
    return axios.post('/setRoleId',data,{headers:{'Authorization':token}})
}
//获取baidu access_token
function getbaidutoken(){
    var token = localStorage.getItem('token')
    return axios.post('/app/baiduAIToken',{a:'a'},{headers:{'Authorization':token}})
}
//退出
function logout(){
    var token = localStorage.getItem('token')
    return axios.post('/app/logout',{a:'a'},{headers:{'Authorization':token}})

}
export {
    sendmsgCode,
    loginbycode,
    scanCode,
    createLinkUser,
    inquireReceivableList,
    faceCheck,
    chooseRole,
    getbaidutoken,
    logout,
    makesureQrlogin,
    inquireReceivableByReceivableId,
    updataMaterial,
    unOcrUpdate
}