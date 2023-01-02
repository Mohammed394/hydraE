<template>
  <body class="login-background">
    <canvas
      style="width: -webkit-fill-available; height: -webkit-fill-available"
    ></canvas>
  </body>
  <div class="login-box">
    <img class="center" src="../assets/images/hydra.png" alt="Mono" />
    <h2>Hydra</h2>
    <form>
      <div class="user-box">
        <input
          type="text"
          name=""
          required=""
          placeholder="Email"
          v-model="formData.email"
        />
        <label>Email</label>
      </div>
      <div class="user-box">
        <input
          type="password"
          name=""
          required=""
          placeholder="Password"
          v-model="formData.password"
        />
        <label for="">Password</label>
      </div>
      <div class="user-box">
        <input
          type="text"
          name=""
          required=""
          placeholder="Environment"
          v-model="environment"
        />
        <label>Environment</label>
      </div>
      <div class="user-checkbox">
        <input type="checkbox" name="" required="" />
        <label for="" style="padding-left: 0.8em">Save Credentails</label>
      </div>
      <a v-on:click="loginFunc">
        <span></span>
        <span></span>
        <span></span>
        Login
      </a>
    </form>
  </div>
</template>
<script>
import "../script";
// import { login } from "../APIs/BaseAPI";
//import { emailStr } from "../utilities/TestData";
export default {
  name: "LoginView",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      environment: "",
    };
  },
  methods: {
    async loginFunc() {
      // let result = await login(this.formData, this.environment);
      // if (result == true) {
      //   this.$router.push({ name: "main" });
      // }
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/extraBody.css";
</style>
