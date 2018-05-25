<template>
  <el-container>
    <el-header>
      <h1>vue后台管理框架基础模板-标签版</h1>
      <div class="person-center">
          <span class="head-img"><i></i>{{name}}</span>
          <a href="javascript:void(0);" class="login-out" @click="loginOut">退出</a>
      </div>
    </el-header>
    <el-container>
      <el-aside width="240px">
        <el-menu default-active="0-0-t" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <!-- 一级 -->
          <el-submenu v-for="(nav1,index1) in menus" :index="getIndex(index1)" :key="nav1.id">

            <template slot="title">
              <i :class="nav1.entity.icon"></i>
              <span slot="title">{{nav1.entity.alias}}</span>
            </template>

            <!-- 二级 -->
            <div v-for="(nav2,index2) in nav1.childs" :key="nav2.id">
              <!--含有三级的二级 -->
              <el-submenu v-if="nav2.childs" :index="getIndex(index1,index2,'o')" :key="nav2.id">
                <template slot="title">
                  <span slot="title">{{nav2.entity.alias}}</span>
                </template>

                <!-- 三级 -->
                <el-menu-item-group v-for="(nav3,index3) in nav2.childs" :key="nav3.id">
                  <el-menu-item :class="setonlyClass(nav3.entity.id)" :index="getIndex(index1,index2,index3)" @click="changeTitle(nav3.entity.menu,nav3.entity.id,nav1.entity.alias,nav2.entity.alias,nav3.entity.alias)">{{nav3.entity.alias}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <!--不含三级的二级-->
              <el-menu-item-group v-else>
                <el-menu-item :class="setonlyClass(nav2.entity.id)" :index="getIndex(index1,index2,'t')" @click="changeTitle(nav2.entity.menu,nav2.entity.id,nav1.entity.alias,nav2.entity.alias)">{{nav2.entity.alias}}</el-menu-item>
              </el-menu-item-group>

            </div>

          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main>
        <div class="main-head-container">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-if="!!t1">{{t1}}</el-breadcrumb-item>
            <el-breadcrumb-item v-if="!!t2">{{t2}}</el-breadcrumb-item>
            <el-breadcrumb-item v-if="!!t3">{{t3}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="main-page">
          <transition>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  let menu=require('../../menu.js');

  export default {
    name: 'home',
    data () {
        return {
          name:'',
          menus:menu.childs,
          isCollapse:false,
          showArray:['0'], //展开的index
          t1:'',
          t1:'',
          t3:'',
        }
    },
    components:{

    },
    methods:{
      loginOut(){
        //退出登录
        this.$confirm('您将退出登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // localStorage.removeItem('msk_hasLogin');
          this.$router.replace({path:'/login'});
        }).catch(() => {

        })
      },
      getIndex(index1,index2,index3){
        //赋予index唯一的标志
        let index='';
        if(index3){
          index = index1+'-'+index2+'-'+index3;
        }else if(index2){
          index = index1+'-'+index2;
        }else{
          index = index1;
        }
        index=index.toString();
        return index;
      },
      changeTitle(url,id,t1,t2,t3){
        //将当期菜单和他的父级菜单生成面包屑
        if(t1){
          this.t1=t1;
        }
        if(t2){
          this.t2=t2;
        }
        if(t3){
          this.t3=t3;
        }
        /*
          //
          /home标签页面跳转,添加标签页面步骤：
          //------1，在menu.js中需要存在带menu属性含有值路径的值；
          //------2,添加标签页面的vue文件；
          //------3，在router中添加路径；
        */
        this.$router.push({path:'/home'+url});
      },
      setonlyClass(id){
        //动态设置类名，便于通过该类名找到某菜单，从而被点击
        return 'menu'+id;
      }
    },
    mounted(){
      document.querySelector('.is-active').click(); //点击第一个菜单，应用标题
    },
    beforeMount(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    body > .el-container {
      margin-bottom: 40px;
    }
    .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
    }
    .el-header{
       color: #333;
       background: #fff;
       border-bottom: 1px solid #e0e4e9;
       box-shadow: 6px 1px 10px rgba(0,0,0,.17);
       height: 60px;
       line-height:60px;
       position: fixed;
       top: 0;
       z-index: 999;
       width:100%;
          h1 {
           font-size:18px;
           font-weight:bold;
          }
          .person-center {
             height: 30px;
             line-height: 30px;
             position: absolute;
             right:30px;
             top: 16px;
             font-size:14px;
          }
          .head-img>i {
             display:inline-block;
             width:30px;
             height: 30px;
             margin-bottom:-10px;
             margin-right:6px;
             background:url('../images/head.png') no-repeat center;
             background-size:contain;
          }
          .login-out {
            margin-left:30px;
            color:gray;
            outline: none;
          }
          .login-out:hover {
            border-bottom:solid 1px gray;
          }
     }

    .el-aside,.el-main {
      color: #333;
      position:absolute;
      top: 0;
      bottom:0;
      padding-top: 60px;
    }
    .el-aside {
      left:0;
      text-align:left;
      z-index:11;
      background-color: #545c64;
      .el-menu {
        border:none;
      }
    }
    .el-main {
      background-color: #fff;
      padding-left:240px;
      width:100%;
      text-align:left;
      z-index:10;
      .main-head-container,.el-breadcrumb {
        height:60px;
        line-height:60px;
        padding-left:5px;
      }
    }

    .main-page {
      padding:10px;
    }
</style>
