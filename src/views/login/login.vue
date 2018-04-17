<template>
  <div class="login">
    <el-row type='flex' justify='center'>
      <el-col :span='8'>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm2.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type='password' v-model="ruleForm2.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-col :span='18' style='margin-left: 100px'>
            <el-button type="primary" @click.native='login'>提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-col>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { login } from './../../utils/request';
export default {
  name: 'Login',
  data() {
    return {
      ruleForm2: {
        username: '',
        password: ''
      },
      rules2: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { type: "email" }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      this.$refs.ruleForm2.validate((isvalid, options) => {
        if (isvalid) {
          this.$store.dispatch('getToken',{
              username:this.ruleForm2.username,
              password:this.ruleForm2.password,
			  notify:this.$notify,
			  router:this.$router
          })
        } else{
            this.$notify({
              title:'错误',
              message:'请填写正确的信息',
              type:'warning'
            })
        }
      })

    }
  }
}

</script>
<style lang='scss'>
.login {
  background: url('../../assets/images/login.jpg');
  width: 100%;
  height: 100%;
  background-size: cover;
}

.el-main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.el-form {
  margin-top: 40%;
}

</style>
