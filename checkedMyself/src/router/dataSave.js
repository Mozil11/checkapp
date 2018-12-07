 //封装过期控制代码
 function set(key,value){
  var curTime = new Date().getTime();
  localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
}
function get(key){
  var data = localStorage.getItem(key);
  var dataObj = JSON.parse(data);
  if (new Date().getTime() - dataObj.time>0.5*60*60*1000) {
      console.log('信息已过期');
      return false
      //alert("信息已过期")
  }else{
      //console.log("data="+dataObj.data);
      //console.log(JSON.parse(dataObj.data));
      var dataObjDatatoJson = dataObj.data
      return dataObjDatatoJson;
  }
}

export {
  set,get
}