<template>
  <div id="loginForm">
    <el-form ref="form" :model="form" label-width="60px" class="login-table">
      <el-form-item label="用户名">
        <el-col :span="24">
          <el-input v-model="form.username"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="密码">
        <el-col :span="24">
          <el-input type="password" v-model="form.password"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      // 处理登录逻辑
      // 导航到目标路由
      this.$router.push("/home");
    },
  },
};
</script>

<style>
#loginForm {
  background-image: url("https://images.669pic.com/element2/3a7d1b455aecf600c52ec9e9fdf41a5f.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-table {
  background-color: lightblue;
  width: 400px;
  padding: 20px;
  border-radius: 5px;
}

.login-table .el-form-item {
  margin-bottom: 20px;
}

.login-table .el-button {
  width: 100%;
}
</style>