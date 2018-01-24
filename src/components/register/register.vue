<template>
            <div class="register">
                <h3 class="title">{{$t('account.title[1]')}}</h3>
                <el-input
                :placeholder="$t('account.lghint[2]')"
                v-model="mailbox"
                clearable
                autofocus
                @blur='mailVerify'
                id="mail"
                >
                </el-input>
                <el-input
                :placeholder="$t('account.lghint[1]')"
                v-model="pwd"
                clearable
                type="password"
                @blur='pwdVerify'
                id="pwd"
                >
                
                </el-input>
                <el-input
                :placeholder="$t('account.lghint[3]')"
                v-model="pwds"
                clearable
                type="password"
                @blur='pwdVerifys'
                >
                </el-input>
                <div style="margin-top:20px">
                    <el-radio v-model="radio" label="1">{{$t('account.btn[4]')}}
                        <router-link to="">{{$t('account.btn[5]')}}</router-link>
                    </el-radio>
                </div>
                <div class="btn">
                    <el-button @click="send" id="btn">
                        <i class="fa fa-user"></i>
                        {{$t('account.btn[3]')}}
                    </el-button>
                </div>
                
            </div>
</template>
<script>

import headTime from "../headTime.vue";
import comNav from "../comNav.vue";
export default {
  data() {
    return {
      mailbox: "",
      pwd: "",
      pwds: "",
      mailLock: false,
      pwdLock: false,
      pwdLocks: false,
      radio: "0",
      locale: ""
    };
  },
  mounted() {},
  methods: {
    mailVerify(event) {
      let myReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      //   console.log(this.mailbox)
      if (myReg.test(this.mailbox)) {
        this.mailLock = true;
        document.getElementById("mail").style.backgroundColor = "";
      } else {
        // alert("222");
        this.mailLock = false;
        this.locale = JSON.parse(localStorage.getItem("locale"));
        document.getElementById("mail").style.backgroundColor = "#FFC0CB";
        if (this.locale == "ch") {
          this.$message.error("请输入正确的邮箱地址");
        } else if (this.locale == "cf") {
          this.$message.error("請輸入正確的郵箱地址");
        } else if (this.locale == "en") {
          this.$message.error("Please enter the correct mailbox address");
        }
      }
    },
    pwdVerify() {
      let myReg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{8,24}$/;
      if (myReg.test(this.pwd)) {
        this.pwdLock = true;
        document.getElementById("pwd").style.backgroundColor = "";
      } else {
        this.pwdLock = false;
        this.locale = JSON.parse(localStorage.getItem("locale"));
        document.getElementById("pwd").style.backgroundColor = "#FFC0CB";
        if (this.locale == "ch") {
          this.$message.error("请输入正确的密码");
        } else if (this.locale == "cf") {
          this.$message.error("請輸入正確的密碼");
        } else if (this.locale == "en") {
          this.$message.error("Please enter the correct password");
        }
      }
    },
    pwdVerifys() {
      if (this.pwd == this.pwds) {
        this.pwdLocks = true;
      } else {
        this.pwdLocks = false;
        this.locale = JSON.parse(localStorage.getItem("locale"));
        if (this.locale == "ch") {
          this.$message.error("输入的密码与上次输入的不符合");
        } else if (this.locale == "cf") {
          this.$message.error("輸入的密碼與上次輸入的不符合");
        } else if (this.locale == "en") {
          this.$message.error(
            "The inputted password is incompatible with the last input"
          );
        }
      }
    },
    send() {
      if (
        this.mailLock == true &&
        this.pwdLock == true &&
        (this.radio == "1") & (this.pwdLocks == true)
      ) {
        alert("发送成功");
        this.mailLock = false;
        this.pwdLock = false;
        this.pwdLocks = false;
      } else if (this.radio != "1") {
        this.locale = JSON.parse(localStorage.getItem("locale"));
        if (this.locale == "ch") {
          this.$message.warning("请同意服务条款");
        } else if (this.locale == "cf") {
          this.$message.warning("請同意服務條款");
        } else if (this.locale == "en") {
          this.$message.warning(
            "Please agree with the terms of service"
          );
        }
        // console.log(this.$store.state.locale)
     
      }
    }
  },
  components: {
    headTime,
    comNav
  }
};
</script>
<style>
.register {
  width: 800px;
  height: 350px;
  border: 1px solid gray;
  box-shadow: 4px 2px 25px gray;
  margin: 0 auto;
  margin-top: 50px;
}
.el-input {
  width: 300px;
  height: 35px;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 20px;
}
.btn {
  margin-top: 10px;
}
.register .title {
  font-size: 30px;
}
</style>



