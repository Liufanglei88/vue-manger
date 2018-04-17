<template>
  <div class="wrap-area">
    <div class="left-area">
      <div>
        <p><a href="#">建立广告计划</a></p>
        <ul>
          <li><router-link :to="{path:'/NewAdvertisement/createionCreativity'}">选择计划</router-link></li>
        </ul>
      </div>
      <div>
        <p><a href="#">广告单元</a></p>
        <ul>
          <li>基本信息</li>
          <li>定向</li>
          <li>广告位</li>
          <li>出价</li>
        </ul>
      </div>
      <div>
        <p><a href="#">建立广告计划</a></p>
        <ul>
          <li>基本信息</li>
          <li>定向</li>
          <li>广告位</li>
          <li>出价</li>
        </ul>
      </div>
    </div>
    <div class="right-area">
        <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewAdvertisement',
  data() {
    return {}
  }
}

</script>
<style lang='scss'>
.el-main {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.wrap-area {
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  p{
  	font-weight: 700;
  	a{
  		text-decoration: none;
        color: #000;
  	}
  }
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.left-area {
  width: 144px;
  height: 100%;
  overflow: auto;
  background: #F5F5F5;
  font-size: 14px;
  div {
  	margin: 30px 0 30px 0;
    ul {
      text-indent: 20px;
      margin-top: 16px;
      li{
      	margin: 8px 0;
      }
    }
  }
}
.right-area{
	flex: 1;
	height: 100%;
	overflow: auto;
}
</style>
