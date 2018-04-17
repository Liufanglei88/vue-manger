<template>
    <div class="upload">
        <el-row>
            <el-col class="upload-title">
                <h1>广告创意</h1>
            </el-col>
            <el-col class="upload-landing">
                <h5>落地页</h5>
            </el-col>
            <el-col>
                <el-form>
                    <el-form-item label="着陆页地址：" prop="address">
                        <el-input 
                            v-model="address" 
                            auto-complete="off" 
                            placeholder="请设置广告名称"
                        ></el-input>
                        <el-button disabled>预定</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
             <el-col class="upload-landing">
                <h4 style="margin:0">上传创意</h4>
                <a href="#" @click="show" v-if='landFile'>+添加创意</a>
                <div v-else>
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="创意1" name="first">
                      <el-upload
                        action="http://localhost:9000/dsp-creative/creative/upload"
                        list-type="picture-card"
                        :success="handleAvatarSuccess">
                        <i class="el-icon-plus"></i>
                      </el-upload>
                      <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                      </el-dialog>
                      <div class="el-upload__text">640*240像素<p>点击上传</p></div>
                      <div class="el-upload__tip" slot="tip">只能上传jpg/jpeg文件，且不超过500kb</div>
                      <el-col class="choose-plan-to-promote">
                          <span>广告文案:</span>
                          <el-input type="text" placeholder="请设置广告名称" style="width:432px;height:32px;" class="choose-plan-input"></el-input>
                            <span style="font-size:14px;line-height:19px;color:rgba(0,0,0,.65)">0/18<i class="el-icon-question"></i></span>
                      </el-col>
                      <el-col class="choose-plan-to-promote">
                          <span>监控链接:</span>
                          <el-input type="text" placeholder="请设置广告名称" style="width:432px;height:32px;" class="choose-plan-input"></el-input>
                      </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="创意2" name="second">创意2</el-tab-pane>
                    <el-tab-pane label="添加创意" name="third">+添加创意</el-tab-pane>
                  </el-tabs>
                </div>
            </el-col>
            <el-col style="margin-top:80px;" class="upload-button">
                 <el-button type="info">预定</el-button>
            </el-col>
           
              <el-col v-if="showORHide" class="upload-model" :span="10">
                  <div>
                       <span @click="ClickImage">单图</span>
                       <span @click="ClickImage">多图</span>
                  </div>
              </el-col>


        </el-row>
    </div>
</template>

<script>
export default {
  name: "creationCreativity",
  data() {
    return {
      address: "",
      showORHide: false,
      landFile: true,
      dialogImageUrl: "",
      dialogVisible: false,
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    show() {
      this.showORHide = !this.showORHide;
    },
    ClickImage() {
      this.landFile = !this.landFile;
      this.showORHide = !this.showORHide;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = "http://localhost:9000/" + res.data.value;
      this.$message = {
        message: '添加成功',
        type: 'success'
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
     const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
     if (!isLt2M) {
         this.$message.error("上传头像图片大小不能超过 2MB!");
       }
      return isJPG&& isLt2M;
    }
  }
};
</script>

<style scoped>
.upload-title h1 {
  font-size: 34px;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 0;
  margin-bottom: 32px;
  font-weight: normal;
}
.upload-landing h5 {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 0;
  margin-bottom: 22px;
}
.el-input {
  width: 432px;
  height: 32px;
}
.el-input .el-input__inner {
  height: 100%;
}
.upload-button .el-button {
  width: 166px;
  height: 52px;
}
.upload-mark {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
}
.upload-model {
  width: 439px;
  height: 282px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.upload-model h5 {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 0;
  margin-top: 24px;
  margin-left: 24px;
  margin-bottom: 33px;
}
.upload-model div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 24px;
}
.upload-model div img {
  width: 180px;
  height: 147px;
}
.choose-plan-to-promote {
  margin-top: 24px;
}
</style>