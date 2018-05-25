<template>
    <div class="login-container fullscreen">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="particle fullscreen"
      >
      </vue-particles>
      <div class="login-box">
          <span :style="{height:'60px',lineHeight:'60px',fontSize:'18px',color:'#fff'}">技术栈：vue/vue-cli/webpack/node/sass/mock/element-ui</span>
          <div class="login-contain">
              <div class="login-logo">
                  <p></p>
                  <p>vue后台管理框架基础模板-标签版</p>
              </div>
              <div class="login-form">
                  <el-input
                    placeholder="请输入用户名称"
                    prefix-icon="icon-yonghu iconfont"
                    v-model="username">
                  </el-input>
                  <el-input
                    placeholder="请输入登录密码"
                    prefix-icon="icon-mima iconfont"
                    type="password"
                    v-model="password">
                  </el-input>
                  <el-button :style="{width:'100%',fontSize:'16px'}" class="login" @click="gohome"><span :class="{'hidden':ishidden}">登录</span></el-button>
                  <!-- <p class="go-register"><router-link tag="span" :to="{path:'/register'}">没有账号,去注册</router-link></p> -->
              </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                username:'',
                password:'',
                ishidden:false,
            }
        },
        methods:{
          gohome(){
            if(!this.username){
              this.$message({
                message: '请输入用户名！',
                type: 'warning'
              });
              return;
            }
            if(!this.password){
              this.$message({
                message: '请输入密码',
                type: 'warning'
              });
              return;
            }

            //登录请求
            this.ishidden=true;
            const loading = this.$loading({
               lock: true,
               text: '',
               spinner: 'el-icon-loading',
               background: 'transparent',
               target:document.querySelector(".login span")
            });

            // this.$ajax({
            //   method:'post',
            //   url:'/api/Login.html',
            //   noloading:true,
            //   data:{
            //     name:this.username,
            //     pwd:this.password
            //   },
            //   success:function(res){
                loading.close();
                localStorage.setItem('msk_hasLogin',true);
                // localStorage.setItem('userinfo',JSON.stringify(res.obj));
                this.$router.push({path:'/home'});
              // }.bind(this),
              // error:function(err){
              //   this.ishidden=false;
              //   loading.close();
              //   this.$message({
              //     showClose: true,
              //     message: '登陆失败！',
              //     type: 'warning'
              //   });
              // }.bind(this)
            // })
          }
        },
        computed:{

        },
        mounted(){

        }
    }
</script>
<style scoped>
       .login-container {
          background:#3498DB;
          overflow: hidden;
       }
      .fullscreen {
         position: absolute;
         top: 0;
         right: 0;
         left: 0;
         bottom: 0;
      }
     .login-contain {
        width: 300px;
        height:350px;
        position:absolute;
        top: 50%;
        left: 50%;
        margin-top:-200px;
        margin-left:-175px;
     }
     .hidden {
      visibility:hidden;
     }

     .login-logo {
        height:160px;
     }
     .login-logo>p:nth-of-type(1){
        width: 105px;
        height:80px;
        background:url('../images/login.png') no-repeat center;
        margin:0 auto;
     }
     .login-logo>p:nth-of-type(2){
        color:#fff;
        font-size:16px;
        margin-top:20px;
        font-weight:bold;
     }
     .el-input__icon {
        font-size:20px;
     }
     .login-form>div {
        margin-bottom:20px;
        border-radius:4px;
        font-size:14px;
     }
     .login-form input {
        text-indent:10px;
     }
     .go-register {
      margin-top:20px;
      color:#fff;
      cursor:pointer;
      text-align:right;
      padding-right:20px;
     }
</style>
<style type="text/css">
  .el-icon-loading {
      margin-top: 14px;
  }
</style>