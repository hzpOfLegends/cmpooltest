<template>
  <div class="btn">
    <el-button class="fr" @click="mobile = true">修改</el-button>
    <el-dialog :visible.sync="mobile">
        区号：
        <el-select v-model="value" placeholder="请选择" size="large" style="width:100px ; " >
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <br>
            手机号:
        <el-input v-model="mobileInput" id="mobileInput" placeholder="请输入手机" style="width:200px;margin-top:20px;"></el-input>
        <input type="button" id="btnCode" @click="sendCode"   value="获取验证码">
        
        <br>
            验证码:
        <el-input v-model="mobileCode" placeholder="请输入验证码" style="width:200px;margin-top:20px;" id="mobileCode" ></el-input>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="submit">提 交</el-button>
        </div>
    </el-dialog>
  </div>
</template>
<script>
import { telReg } from "@/regular/regular";
export default {
  data() {
    return {
      mobile: false,
      mobileInput: "",
      disabled: false,
      mobileCode: "",
      codeTimeout: "",
      codeBtn: "",
      count: 119,
      curcount: "",
      options: [
        {
          value: "1",
          label: "CN +86"
        },
        {
          value: "2",
          label: "BA +387"
        },
        {
          value: "3",
          label: "BW +267"
        },
        {
          value: "4",
          label: "BR +55"
        },
        {
          value: "5",
          label: "CL +56"
        }
      ],
      value: ""
    };
  },
  methods: {
    sendCode() {
      this.curcount = this.count;
      if (telReg.test(this.mobileInput)) {
        document.getElementById("btnCode").value = this.curcount + "s";
        this.codeTimeout = window.setInterval(this.codeTime, 1000);
        document.getElementById("mobileInput").style.backgroundColor = "";
      } else {
        document.getElementById("mobileInput").style.backgroundColor = "#FFC0CB";
        this.$message.error("请输入正确手机号");
      }
    },
    codeTime() {
      
        if (this.curcount == 0) {
          window.clearInterval(this.codeTimeout);
          document.getElementById("btnCode").value = "重新获取验证码";
        } else {
          this.curcount--;
          document.getElementById("btnCode").value = this.curcount + "s";
        }
      
    },
    cancel() {
      this.mobile = false;
      window.clearInterval(this.codeTimeout);
      document.getElementById("btnCode").value = "获取验证码";
      this.mobileInput = "";
      this.mobileCode = "";
    },
    submit() {
      if (this.mobileInput == "") {
        document.getElementById("mobileInput").style.backgroundColor = "#FFC0CB";
        this.$message.error("请输入手机号");
      } else if (this.mobileCode == "") {
        document.getElementById("mobileCode").style.backgroundColor = "#FFC0CB";
        this.$message.error("请输入验证码");
      } else {
        this.mobile = false;
        window.clearInterval(this.codeTimeout);
        document.getElementById("btnCode").value = "获取验证码";
        this.mobileInput = "";
        this.mobileCode = "";
      }
    }
  }
};
</script>
<style>
.btn {
  padding: 20px 0 60px 0;
}

.btn .el-button {
  margin-right: 20px;
}
#btnCode {
  cursor: pointer;
  width: 100px;
  background-color: white;
  border: 1px solid #e1e1e1;
  font-size: 16px;
}
#btnCode:hover {
  background-color: #e1e1e1;
}
</style>

