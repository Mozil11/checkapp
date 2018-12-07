<template>
  <div class='' style="position: relative;height: 100%;">
      <div>
        <img src="../assets/u19685.png" alt="" class="logo">
        <div class="appName">自证服务</div>
        <div class="english">SELF CERTIFICATION SERVICE</div>
      </div>
      <div class="login-part">
        <div class="username">
            <img src="static/phone.svg" alt="" class="icon-phone">
            <el-input  placeholder="请输入手机号" type='tel' class="telephone" v-model="value" ></el-input>
            <button class="code" @click="sendmsg" v-if="codeinnerhtml=='发送验证码'" :disabled='touch'>{{codeinnerhtml}}</button>
             <button class="code" @click="sendmsg" v-else>{{codeinnerhtml+'('+number+')'}}</button>
        </div>
        <div class="paw">
            <img src="static/paw.svg" alt="" class="icon-paw">
            <el-input  placeholder="请输入验证码" type='tel' v-model="code" class="password"></el-input>
        </div>
        <div class="logobtn">
           <el-button type="primary" class="log" @click="login">登 陆</el-button>
        </div>
      </div>
      <div class="logfoot">微分链   MICRO CHAIN</div>
      <tips :show='show' :errormsg='errormsg' />
      <transition name="el-fade-in-linear">
        <div class="window" v-show="winShow">
          <div class="box">
            <div class="boxin">
              <img src="static/close.svg" alt="" class="close" @click="winShow=false">
              <div class="title">请选择角色</div>
              <div v-if="role.length!=0">
                <div v-for="(v,i) in role" :key="i">
                  <div class="role" @click="choose(v)">{{v.roleName}}</div>
                </div>
              </div>
              <div v-else style='color:#999999;font-size:14px;text-algin:center;'>
                暂无角色
              </div>
            </div>
          </div>
        </div>
      </transition>
  </div>
</template>

<script>
import {sendmsgCode,loginbycode,chooseRole} from '../router/http.js'
import tips from '../components/tips'
import {set,get} from '../router/dataSave.js'
// import store from '../router/dataSave.js'
export default {
  components:{
      tips
  },
  name: 'Login',
  data () {
    return {
      codeinnerhtml:'发送验证码',
      number:60,
      value:'',
      show:false,
      errormsg:'',
      code:'',
      // token:store.fetch(),
      touch:false,
      // flag:false
      winShow:false,
      role:[{roleDesc: "fundenterprise",
          roleId: 10,
          roleName: "资金方普通用户",
          roleRemarks: "资金方",
          roleSign: "fund_normal"
          },
          {roleDesc: "fundenterprise",
          roleId: 1,
          roleName: "资金方普通用户",
          roleRemarks: "资金方",
          roleSign: "fund_normal"
          }]
    }
  },
  // watch:{
  //   token:{
  //     handler: function (token) {
  //       console.log(token)
  //         store.save(token)
  //       },
  //       deep: true
  //   }
  // },
  methods:{
    login(){
     
      if(this.code != '' && this.value !=''){
        loginbycode(this.value,this.code).then(res=>{
          console.log(res)
          if(res.data.code==200){
              set('token',res.data.data.token)
              localStorage.setItem('data',JSON.stringify(res.data.data))
              this.role = res.data.data.roleList
              this.winShow = true;
              if(this.role.length==0){
                setTimeout(()=>{
                   this.$router.push({path: '/nomarlLog'
                      ,query :{index:1,current:0}
                    });
                },3000)
              }
          }else{
             this.errmsg(res.data.message)
          }
        }).catch(err=>{
          console.log(err)
        })
      }
    },
    sendmsg(){
      // this.token = this.value
      // console.log(store.fetch())
      if(this.value==undefined || this.value == ''){
        this.errmsg('请输入手机号')
        
      }else{
        sendmsgCode(this.value).then(res=>{
          console.log(res)
         
          if(res.data.code!=200){
            this.errmsg(res.data.message)
            
          }else{
            this.touch = true
             let time = setInterval(()=>{
            this.number--
           if(this.number<=0){
             this.touch = false
             this.number = 60
             clearInterval(time)
            }
          },1000)
          this.codeinnerhtml = '重新发送'
          }
        }).catch(err=>{
          console.log(err)
        })
      }
      
    },
    errmsg(data){
       this.errormsg = data
        this.show = true;
        setTimeout(()=>{
          this.show = false
        },1000)
    },
    choose(a){
      console.log(a)
      chooseRole(a.userId).then(res=>{
        console.log(res)
        this.winShow = false
        if(JSON.parse(localStorage.getItem('data')).flag){
          this.$router.push({
                path:'/firstlogin',
                
            })
        }else{
          this.$router.push({
                path:'/bioAssay',
                // query:{index:1}
            })
        }
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  mounted(){
    console.log(get('token'))
    if(get('token')==false){
      localStorage.clear();
      this.$router.push({
                path:'/',
                // query:{index:1}
            })
    }
    // console.log(JSON.parse(localStorage.getItem('data')))
    if(localStorage.getItem('data')!=null){
      var flag = JSON.parse(localStorage.getItem('data')).flag
    }
    
    if(get('token')){
      if(localStorage.getItem('checkface')){
        if(flag==true){
           this.$router.push({path: '/firstlogin'});
        }
        if(flag == false){
          this.$router.push({path: '/nomarlLog'
                  ,query :{index:1,current:0}
          });
        }
      }else{
        this.$router.push({
                path:'/bioAssay',
                // query:{index:1}
            })
      }
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.code{
      background: none;
    border: none;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.logo{
  width: 100px;
  /* border: 1px solid #42b983; */
  border-radius: 50%;
  margin-top: 85px;
}
.english{
  color: #cccccc;
}
.appName{
  font-size: 25px;
  margin-top: 30px;
  color: #333333;
  font-weight: 100;
}
.login-part{
  width: 80%;
  margin: auto;
  margin-top: 40px;
}
.username{
  position: relative;
}
.paw{
  position: relative;
  margin-top: 10px;
}
.icon-phone,.icon-paw{
  position: absolute;
  z-index: 1;
  width: 25px;
  top: 0;
  bottom: 0;
  margin: auto;
}
.log{
  width: 100%;
}
.logobtn{
  margin-top: 20px;
}
.code{
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  font-size: 13px;
  color: #a8a4a4;
  height: 100%;
  line-height: 41px;
  padding:0 10px;
  border-left: 1px solid #dcdfe6;
}
.code:active{
  background: #cccccc;
  border-radius: 0 5px 5px 0;
}
.logfoot{
  font-size: 12px;
  color: #cccccc;
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  text-align:center;
}
.window{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.box{
  background: #fff;
  width: 250px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 20px;
}
.boxin{
  height: 100%;
  position: relative;
}
.close{
  width: 20px;
  position: absolute;
  right: 5px;
  top: 5px;
}
.title{
  font-size: 13px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.role{
  margin-top: 10px;
  border:1px solid #409eff;
  padding: 10px;
  width: 80%;
  margin: auto;
  border-radius: 5px;
  color: #409eff;
  margin-bottom: 5px;
}
.role:active{
  background: #409eff;
  color: #fff;
}
</style>
