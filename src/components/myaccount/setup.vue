<template>
  <div class="setWrap">
      <h2>{{$t('myaccount.title')}}</h2>
      <div class="setmail">
          <h3>{{$t('myaccount.setmail.title')}}</h3>
          <div class="line"></div>
          <div class="change">
              <p>{{$t('myaccount.setmail.change[0]')}}</p>
              <p>{{$t('myaccount.setmail.change[1]')}}</p>
          </div>
          
          <label for="mailNow">
          <div class="clearfix mailNow">
              <div class="fl">
                  <span class="mailTitle">{{$t('myaccount.setmail.mail[0]')}}</span>
              </div>
              <div class="fr">
                  <span>
                      <input type="text" id="mailNow" readonly value="font_end_hzp@163.com">
                  </span>
              </div>
          </div>
          </label>
          <label for="mailNew">
          <div class="clearfix mailNew">
              <div class="fl">
                  <span class="mailTitle">{{$t('myaccount.setmail.mail[1]')}}</span>
              </div>
              <div class="fr">
                  <span>
                      <input type="text" id="mailNew" ref="mailInp" @keyup="mailVerify"  >
                  </span>
              </div>
          </div>
          </label>
          <div class="clearfix">
              <div class="btn">
                  <el-button class="fr" ref="mailZero" @click="mailZero()">{{$t('myaccount.btn[0]')}}</el-button>
                  <el-button class="fr" :disabled="disabled" >{{$t('myaccount.btn[1]')}}</el-button>
              </div>
          </div>
      </div>
       <div class="setpwd">
        <h3>{{$t('myaccount.setpwd.title')}}</h3> 
        <div class="line"></div>
        <label for="pwdNow">
            <div class="clearfix pwdNow">
                <div class="fl">
                    <span class="pwdTitle">{{$t('myaccount.setpwd.pwd[0]')}}</span>
                </div>
                <div class="fr">
                    <span>
                        <input type="password" id="pwdNow" readonly value="******">
                    </span>
                </div>
            </div>
            </label>
            <label for="pwdNew">
            <div class="clearfix pwdNew">
                <div class="fl">
                    <span class="pwdTitle">{{$t('myaccount.setpwd.pwd[1]')}}</span>
                </div>
                <div class="fr">
                    <span>
                        <input type="password" id="pwdNew" ref="pwdInp" @keyup="pwdVerify">
                    </span>
                </div>
            </div>
            </label>
            <label for="pwdNews">
            <div class="clearfix pwdNews">
                <div class="fl">
                    <span class="pwdTitle" >{{$t('myaccount.setpwd.pwd[2]')}}</span>
                </div>
                <div class="fr">
                    <span>
                        <input type="password" id="pwdNews" ref="pwdInps" @keyup="pwdAgain">
                    </span>
                </div>
            </div>
            </label>
            <div class="clearfix">
                <div class="btn">
                    <el-button class="fr" @click="pwdZero">{{$t('myaccount.btn[0]')}}</el-button>
                    <el-button class="fr" :disabled="disableds">{{$t('myaccount.btn[1]')}}</el-button>
                </div>
            </div>
       </div>
       <div class="telephone">
            <h3>{{$t('myaccount.telphone.title')}}</h3> 
            <div class="line"></div>
            <label for="telephone">
          <div class="clearfix telbox">
              <div class="fl ">
                  <span class="telTitle">{{$t('myaccount.telphone.telbox')}}</span>
              </div>
              <div class="fr ">
                  <span>
                      <input type="text" id="telephone"  >
                  </span>
              </div>
          </div>
          </label>
          <div class="clearfix">
                <mobile-dialog/>
            </div>
       </div>
  </div>
</template>
<script>
import { mailReg, pwdReg, telReg } from "@/regular/regular";
import mobileDialog from '@/components/dialog/mobileDialog'
export default {
  data() {
    return {
      newMail: "",
      newPwd: "",
      newPwds: "",
      
      disabled: false,
      disableds: false,
      mobile: false,
      
    };
  },
  components:{
      mobileDialog
  },
  mounted() {},
  methods: {
    mailVerify() {
      this.newMail = this.$refs.mailInp.value;
      //   console.log(this.$refs.mailInp.value)
      if (this.$refs.mailInp.value == "") {
        document.getElementById("mailNew").style.backgroundColor = "";
      } else {
        if (mailReg.test(this.newMail)) {
          document.getElementById("mailNew").style.backgroundColor = "";
          this.disabled = false;
        } else {
          document.getElementById("mailNew").style.backgroundColor = "#FFC0CB";
          this.disabled = true;
        }
      }
    },
    pwdVerify() {
      this.newPwd = this.$refs.pwdInp.value;
      if (pwdReg.test(this.newPwd)) {
        document.getElementById("pwdNew").style.backgroundColor = "";
        this.disableds = false;
      } else {
        document.getElementById("pwdNew").style.backgroundColor = "#FFC0CB";
        this.disableds = true;
      }
    },
    pwdAgain() {
      this.newPwds = this.$refs.pwdInps.value;
      if (this.newPwds != this.newPwd) {
        this.disableds = true;
        document.getElementById("pwdNews").style.backgroundColor = "#FFC0CB";
      } else {
        this.disableds = false;
        document.getElementById("pwdNews").style.backgroundColor = "";
      }
    },
    mailZero() {
      document.getElementById("mailNew").value = "";
      document.getElementById("mailNew").style.backgroundColor = "";
      document.getElementById("mailNew").focus();
    },
    pwdZero() {
      document.getElementById("pwdNew").value = "";
      document.getElementById("pwdNew").style.backgroundColor = "";
      document.getElementById("pwdNew").focus();
      document.getElementById("pwdNews").value = "";
      document.getElementById("pwdNews").style.backgroundColor = "";
    }
  }
};
</script>

<style>
.setWrap {
  border: 1px solid #e1e1e1;
}
.setWrap h2 {
  font-size: 30px;
}
.setmail,
.setpwd,
.telephone {
  text-align: left;
  padding: 5px 20px;
}
.line {
  border-bottom: 1px solid #e1e1e1;
}
.change {
  padding: 15px;
  color: #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
}
.change p {
  margin-top: 20px;
}
.telephone {
  line-height: 40px;
}
h3 {
  font-size: 16px;
  color: gray;
  font-weight: 600;
  padding: 5px;
  text-align: left;
}
.mailNow,
.mailNew,
.pwdNow,
.pwdNew,
.pwdNews,
.telbox {
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
  cursor: pointer;
}
.mailNow:hover {
  background-color: rgb(238, 232, 232);
}
.mailNow:hover input {
  background-color: rgb(238, 232, 232);
}
.telbox:hover {
  background-color: rgb(238, 232, 232);
}
.telbox:hover input {
  background-color: rgb(238, 232, 232);
}
.mailNew:hover {
  background-color: rgb(238, 232, 232);
}
.mailNew:hover input {
  background-color: rgb(238, 232, 232);
}
.pwdNow:hover {
  background-color: rgb(238, 232, 232);
}
.pwdNow:hover input {
  background-color: rgb(238, 232, 232);
}
.pwdNew:hover {
  background-color: rgb(238, 232, 232);
}
.pwdNew:hover input {
  background-color: rgb(238, 232, 232);
}
.pwdNews:hover {
  background-color: rgb(238, 232, 232);
}
.pwdNews:hover input {
  background-color: rgb(238, 232, 232);
}
.mailTitle,
.pwdTitle,
.telTitle {
  font-size: 20px;
  font-weight: 400;
}
input {
  border: none;
  width: 300px;
  height: 30px;
  font-size: 20px;
  outline: none;
}

</style>

