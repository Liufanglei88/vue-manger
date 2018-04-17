<template>
   <div id='app'>
         <el-container style="height: 100%;">
     <el-col :span='24'>
     	<el-aside :class="{showSidebar:!collapsed}">
    <el-menu :default-openeds="['2']" router :collapse="collapsed" >
      <el-menu-item index="/NewAdvertisement" class="ment">新建广告</el-menu-item>
      <el-menu-item index="/home" class="ment1">首页概览</el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>广告管理</template>
        <el-menu-item-group>
           <el-menu-item index="/plan">广告计划</el-menu-item>
           <el-menu-item index="/unit">广告单元</el-menu-item>
           <el-menu-item index="/originality">广告创意</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-menu-item index="/administration" class="ment1">数据中心</el-menu-item>
       <el-menu-item index="/setup" class="ment1">工具箱</el-menu-item>
    </el-menu>
  </el-aside>
  </el-col>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
        <div class="menu-toggle" @click.prevent="collapse" style='position:absolute;left:260px'>
          <i class="iconfont icon-menufold" v-show="!collapsed"></i>
          <i class="iconfont icon-menuunfold" v-show="collapsed"></i>
        </div>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{username}}</span>
    </el-header>
    
    <el-main>
       <router-view/>
    </el-main>
  </el-container>
  </el-container>
      
   </div>
   
</template>
<script>
import {mapState} from 'vuex'
export default {
	name:'app',
  data() {
    return {
    	 collapsed: false
    };
  },
  computed:{
    ...mapState(['username'])
  },
  methods:{
       collapse: function () {
        this.collapsed = !this.collapsed;
      }
  }

};
</script>
<style lang='scss'>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.ment{
    background-image: linear-gradient(-90deg, #095DE1 0%, #081A6C 94%)!important;
}
#app {
  width: 100%;
  height: 100%;
}
.el-header {
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  line-height: 60px;
}
.showSidebar {
 width:200px;
 height: 100%!important; 
 background:#022050;
 border:0;

}
.el-aside {
  color: #333;
  width:260px!important;
  background: #022050;
      background: #333744;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);

}
.el-menu-item {
  background: #1c2941;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  text-indent: 20px;
  color: rgba(255, 255, 255, 0.65);
  &:hover {
    background: #2873ff;
    color: #ffffff;
  }
}
.el-submenu {
  background: #2873ff;
  color: #fff;
}
.el-menu-item-group {
  background: #022050;
}
.el-submenu__title{
  background: #022050;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
  &:hover {
    background: none;
    color: #fff;
  }
}
.ment1{
background: #022050!important;
  font-family: MicrosoftYaHei!important;
  font-size: 14px!important;
  color: rgba(255, 255, 255, 0.65)!important;
  &:hover {
   background: #2873ff!important;
    color: #ffffff!important;
  }
}
.container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;

    .topbar-wrap {
      height: 50px;
      line-height: 50px;
      background: #373d41;
      padding: 0px;

      .topbar-btn {
        color: #fff;
      }
      /*.topbar-btn:hover {*/
      /*background-color: #4A5064;*/
      /*}*/
      .topbar-logo {
        float: left;
        width: 59px;
        line-height: 26px;
      }
      .topbar-logos {
        float: left;
        width: 120px;
        line-height: 26px;
      }
      .topbar-logo img, .topbar-logos img {
        height: 40px;
        margin-top: 5px;
        margin-left: 2px;
      }
      .topbar-title {
        float: left;
        text-align: left;
        width: 200px;
        padding-left: 10px;
        border-left: 1px solid #000;
      }
      .topbar-account {
        float: right;
        padding-right: 12px;
      }
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        padding-left: 10px;
      }
    }
    .main {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: absolute;
      top: 50px;
      bottom: 0px;
      overflow: hidden;
    }

    aside {
      min-width: 100px;
      background: #333744;
      &::-webkit-scrollbar {
        display: none;
      }

      &.showSidebar {
        width: 100px;
      }

      .el-menu {
        height: 100%; /*写给不支持calc()的浏览器*/
        height: -moz-calc(100% - 80px);
        height: -webkit-calc(100% - 80px);
        height: calc(100% - 80px);
        border-radius: 0px;
        background-color: #333744;
        border-right: 0px;
      }

      .el-submenu .el-menu-item {
        min-width: 60px;
      }
      .el-menu {
        width: 180px;
      }
      .el-menu--collapse {
        width: 60px;
      }

      .el-menu .el-menu-item, .el-submenu .el-submenu__title {
        height: 46px;
        line-height: 46px;
      }

      .el-menu-item:hover, .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
        background-color: #7ed2df;
      }
    }

    .menu-toggle {
      background: #4A5064;
      text-align: center;
      color: white;
      height: 26px;
      line-height: 30px;
    }

    .content-container {
      background: #fff;
      flex: 1;
      overflow-y: auto;
      padding: 10px;
      padding-bottom: 1px;

      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
</style>