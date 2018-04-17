<template>
  <div>
    <h3>广告创意</h3>
    <p>落地页</p>
    <el-row justify="center">
      <el-col :span='15'>
       <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
        <el-form-item label="着陆页地址">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
         </el-form>
      </el-col>
      <el-col style='margin-left:10px'>
        <h4 style='margin-bottom:10px'>上传创意</h4>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="创意一" name="first"></el-tab-pane>
            <el-tab-pane label="创意二" name="second"></el-tab-pane>
            <el-tab-pane label="+添加创意" name="three"></el-tab-pane>
         </el-tabs>
        <div>
         <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
      </el-col>
      <el-col :span='15'>
           <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
             <el-form-item label="广告文案">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </el-form>
      </el-col>
      <el-col :span='15'>
            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
             <el-form-item label="监控链接">
                 <el-input v-model="formLabelAlign.type"></el-input>
             </el-form-item>
        </el-form>
      </el-col>
      <el-col :offset="1" style="margin-top:10px">
         <el-button type="info" size="medium">提交</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'creationCreativity',
  data() {
    return {
      labelPosition: 'right',
        activeName: 'second',
       formLabelAlign: {
          name: '',
          region: '',
          type: ''
      },
        dialogImageUrl: '',
        dialogVisible: false,
         imageUrl: ''
    }
  },
  methods: {
       handleClick(tab, event) {
        console.log(tab, event);
      },
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }

  }
}

</script>
<style lang='scss' scoped>
h3 {
  font-family: MicrosoftYaHei;
  font-size: 34px;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 0;
  width: 206px;
  height: 45px;
  margin-top: 30px;
  margin-left: 10px;
}
.el-button{
  width: 166px;
  height: 52px;
}
p {
  margin-top: 20px;
  margin-left: 10px;
  font-size: 18px;
  margin-bottom: 20px;
}

.bg {
  font-size: 14px;
  color: #2873FF;
  letter-spacing: 0;
}
.el-upload {
   border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
 .avatar-uploader{
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 178px;
    height: 178px;
    margin-bottom: 10px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
