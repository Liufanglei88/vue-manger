<template>
   <div id='app'>
         <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="240px">
    <el-menu :default-openeds="['2']" router>
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
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
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
    return {};
  },
  computed:{
    ...mapState(['username'])
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

.el-aside {
  color: #333;
  background: #022050;
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

</style>