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
    var tokenobj = JSON.parse(token).data

    var data = new FormData();
    data.append('qrToken',qrToken)
    return axios.post('/app/qrScan',data,{headers:{'Authorization':tokenobj}})


}
//确认登陆
function makesureQrlogin(qrToken){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data

    var data = new FormData();
    data.append('qrToken',qrToken)
    return axios.post('/app/qrlogin',data,{headers:{'Authorization':tokenobj}})
}
//创建区块链账户（组织用户）
function createLinkUser(){
    var token =localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data

    return axios.post('/app/createChainUser',{a:'a'},{headers:{'Authorization':tokenobj}})
}
//	资产列表
function inquireReceivableList(){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data

    console.log(token)
    return axios.post('/allReceivableInformation/inquireReceivableList',{offset:0,limit:10},{headers:{'Authorization':tokenobj}})
}
//	资产详情
function inquireReceivableByReceivableId(receivableId){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data

    var data = new FormData();
    data.append('receivableId',receivableId)
    return axios.post('/allReceivableInformation/inquireReceivableByReceivableId',data,{headers:{'Authorization':tokenobj}})
}
//凭证材料信息的修改
function updataMaterial(fileslist){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data

    var data = new FormData();
    data.append('fileId',fileslist.fileId)
    data.append('fileName',fileslist.fileName)
    data.append('remarks',fileslist.remarks)
    data.append('createTime',fileslist.createTime)
    data.append('fileVersion',fileslist.fileVersion)
    data.append('fileState',fileslist.fileState)
    return axios.post('/allReceivableInformation/updataMaterial',data,{headers:{'Authorization':tokenobj}})

}
//凭证材料非ocr上传
function unOcrUpdate(file,start,sign,receivableId,fileName,remarks){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data

    var data = new FormData();
    data.append('file',file)
    data.append('start',start)
    data.append('sign',sign)
    data.append('receivableId',receivableId)
    data.append('fileName',fileName)
    data.append('remarks',remarks)
    return axios.post('/AppFileUpload/fileUpload',data,{headers:{'Authorization':tokenobj}})
}
//ocr上传
function uploadRecognition (file,receivableId){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data

    var data = new FormData();
    data.append('file',file)
    data.append('start',0)
    data.append('sign',1)
    data.append('receivableId',receivableId)
    return axios.post('/allReceivableInformation/uploadRecognition',data,{headers:{'Authorization':tokenobj}})


}
//人脸比对-百度

function faceCheck(data){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data

    return axios.post('/app/baiduAIFaceMatch',data,{headers:{'Authorization':tokenobj}})
}
//增值税发票识别
function xfOcrInvoice(image){
    
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data

    var data = new FormData();
    data.append('image',image)
    return axios.post('/app/xfOcrInvoice',data,{headers:{'Authorization':tokenobj}})

}
//选择一个角色
function chooseRole(roleId){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data

    var data = new FormData();
    data.append('roleId',roleId)
    return axios.post('/setRoleId',data,{headers:{'Authorization':tokenobj}})
}
//获取baidu access_token
function getbaidutoken(){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data
    return axios.post('/app/baiduAIToken',{a:'a'},{headers:{'Authorization':tokenobj}})
}
//退出
function logout(){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data

    return axios.post('/app/logout',{a:'a'},{headers:{'Authorization':tokenobj}})

}

//获取用户列表
function getCompanyUserList(){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data
    return axios.post('/companyUser/getCompanyUserList',{a:'a'},{headers:{'Authorization':tokenobj}})

}
//根据id获取用户信息
function getUserByUserName (userName){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data
    var data = new FormData();
    data.append('id',userName)    
    return axios.post('/companyUser/getUserByUserName',data,{headers:{'Authorization':tokenobj}})
}
//企业凭证上传接口
function uploadMaterial(start,companyId,file){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data
    var data = new FormData();
    data.append('file',file)
    data.append('start',start)
    data.append('companyId',companyId)
    return axios.post('/companyInformation/uploadMaterial',data,{headers:{'Authorization':tokenobj}})


}
//企业用户凭证材料上传
function uploadInfo(file,companyId,userId,companyUserType){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data
    var data = new FormData();
    data.append('file',file)
    data.append('companyId',companyId)
    data.append('userId',userId)
    data.append('companyUserType',companyUserType)
    return axios.post('/trialUserInfo/saveTrialUserInfo',data,{headers:{'Authorization':tokenobj}})

}
//通过用户编号查询企业信息
function queryCompanyByUserId(userId){
    var token = localStorage.getItem('token')
    var tokenobj = JSON.parse(token).data
    var data = new FormData();
    data.append('userId',userId)
    return axios.post('/companyInformation/queryCompanyByUserId',data,{headers:{'Authorization':tokenobj}})

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
    unOcrUpdate,
    xfOcrInvoice,
    uploadRecognition,
    getCompanyUserList,
    getUserByUserName,
    uploadMaterial,
    uploadInfo,
    queryCompanyByUserId
    
}
