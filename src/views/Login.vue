<template>
  <div class="login-box">
    <h1>品类配置中心</h1>
    <el-row class="row-box">
      <el-col :span="24">
        <el-form label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="loginData.username" @keyup.enter.native="login" clearable></el-input> 
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="loginData.password" type="password" @keyup.enter.native="login" clearable></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="24" class="login-btn">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button>取消</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (
        this.loginData.username === "admin" &&
        this.loginData.password === "123456"
      ) {
        this.$router.push({ path: "/homepage" });
      } else {
         this.$message({
          message: '用户名或密码错误',
          type: 'warning'
        });
      }
    },
    login2() {

    }
  }
};
</script>

<style lang="scss">
.login-box {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  .row-box {
    width: 400px;
    height: 400px;
    border: 1px solid #f4f4f4;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #fff;
    .login-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>