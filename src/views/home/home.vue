<template>
   <div>
     <el-row :gutter="20">
        <el-col :span="6">
          <el-card shadow="always">
            <dl>
                <dt>图片</dt>
                <dd>
                   <p>￥113213123</p>
                </dd>
            </dl>
          </el-card>
       </el-col>
        <el-col :span="6">
          <el-card shadow="always">
           <dl>
                <dt>图片</dt>
                <dd>
                   <p>￥113213123</p>
                </dd>
            </dl>
          </el-card>
       </el-col>       
        <el-col :span="6">
          <el-card shadow="always">
            <dl>
                <dt>图片</dt>
                <dd>
                   <p>￥113213123</p>
                </dd>
            </dl>
          </el-card>
       </el-col> 
        <el-col :span="6">
          <el-card shadow="always">
           <dl>
                <dt>图片</dt>
                <dd>
                   <p>￥113213123</p>
                </dd>
            </dl>
          </el-card>
       </el-col> 
     </el-row>
    <el-row :gutter="20" class="section">
    <el-col :span="10"><div class="grid-content bg-purple">整体情况</div></el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple">
         <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first"></el-tab-pane>
          <el-tab-pane label="配置管理" name="second"></el-tab-pane>
       </el-tabs>
      </div>
      </el-col>
         
      <el-col :span="4">
            <el-date-picker
          v-model="value7"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2">
        </el-date-picker>
      </el-col>
  </el-row>
  <el-row :gutter="20">
        <el-col :span="6">
          <el-card shadow="always" style="height:79px" class='pop'>
            <p><span>点击量</span><span>1111</span></p>
          </el-card>
       </el-col>
        <el-col :span="6">
          <el-card shadow="always" style="height:79px" class='pop'>
               <p><span>点击量</span><span>1111</span></p>
          </el-card>
       </el-col>       
        <el-col :span="6">
          <el-card shadow="always" style="height:79px" class='pop'>
                <p><span>点击量</span><span>1111</span></p>
          </el-card>
       </el-col> 
        <el-col :span="6">
          <el-card shadow="always" style="height:79px" class='pop'>
               <p><span>点击量</span><span>1111</span></p>
          </el-card>
       </el-col> 
       <el-col :span="12" class="selet1">
            <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
            </el-select>
       </el-col>
        <el-col :span="12" class="selet">
            <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
            </el-select>
       </el-col>
     </el-row>
     <el-row >
         <div ref="eartcharts" class="graph"></div>
     </el-row>
   </div>
</template>
<script>
import echarts,{init} from 'echarts'
 export default {
     name:'home',
      data(){
        return {
          activeName: 'second',
          echarts:'',
       pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: '',
              option: {
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
        },
            options: [{
            value: '选项1',
            label: '黄金糕'
              }, {
                value: '选项2',
                label: '双皮奶'
              }, {
                value: '选项3',
                label: '蚵仔煎'
              }, {
                value: '选项4',
                label: '龙须面'
              }, {
                value: '选项5',
                label: '北京烤鸭'
              }],
                value: ''
          }; 
       
      },
    
      methods: {
        handleClick(tab, event) {
        console.log(tab, event);
         },
         initDate () {
        let startY = new Date(this.value7[0]).getFullYear(),
            startM = new Date(this.value7[0]).getMonth() + 1,
            endY = new Date(this.value7[1]).getFullYear(),
            endM = new Date(this.value7[1]).getMonth() + 1;
        let mArr = [];
        if (startY == endY) {
          for (let i = startM;i <= endM;i++) {
            mArr.push(startY + '/' + i);
          }
        } else {
            for (let i = 0; i <= endY - startY; i++) {
              if (i == 0) {
                for (let j = startM; j <= 12; j++) {
                  mArr.push(startY + i + '/' + j);
                }
              } else {
                for (let j = 1; j <= 12; j++) {
                  mArr.push(startY + i + '/' + j);
                }
              }
            }
        }
        this.option.xAxis.data = mArr;
        this.echarts.setOption(this.option)
      }
    },
    watch: {
      value7() {
        this.value7 && this.initDate();
      }
    },
    created() {

    },
    mounted() {
      this.echarts = echarts.init(this.$refs.graph);
      this.echarts.setOption(this.option);
      window.onresize = () => {
        this.echarts.resize();
      }
    }
  }
</script>
<style scoped="scoped" lang="scss">
.graph{
  width:100%;
  height:285px;
}
.section{
   vertical-align: middle;
   height: 40px!important;
   line-height: 40px!important;
   margin-top: 3px;
}
.selet{
text-align: right;
margin-top: 10px;
}
.selet1{
  margin-top: 10px;
  text-align: left;
  
}
  .el-card{
    height: 111px;
  }
  .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner {
    width: 263px;
}
  .el-card dl{
    margin: 0;padding: 0;
    float: left;
    dt{
      float: left;
    }
    dd{
      float: left;
    }
  }
.pop{
  position: relative;
  p{
    position: absolute;
    top:0;
    &:span{
      display: block;
      float: left;
    }
  }
}
</style>
