<template>
  <el-container class="container">
        <el-header>
            <com-nav/>
        </el-header>
        <el-container >
            <el-aside width="380px" style="margin:0 20px;margin-top:20px;">
                <asided/>
            </el-aside>
                <el-main>
                    <router-view></router-view>
                    
                </el-main>
        </el-container>  
            <footers/>
    </el-container>
  
</template>
<script>
import comNav from "@/components/comNav";
import Asided from "@/components/aside";
import footers from "@/components/footer";
export default {
  data() {
    return {
      loginJudge: true,
      message: "",
      title: "",
      confirm: "",
      cancel: "",
      locale: ""
    };
  },
  beforeMount() {
    this.messageBox();
    this.judgeLogin();
  },
  mounted() {
    
  },
  methods: {
    judge() {
      this.$confirm(this.message, this.title, {
        confirmButtonText: this.confirm,
        cancelButtonText: this.cancel,
        type: "warning",
        center: true
      })
        .then((action, instance) => {
          if (action == "confirm") {
            this.$router.push({ name: "login" });
          }
        })
        .catch(action => {
          if (action == "cancel") {
            this.$router.push({ name: "homePage" });
          }
        });
    },
    messageBox() {
      this.locale = JSON.parse(localStorage.getItem("locale"));
      if (this.locale == "ch") {
        this.message = "请先登录或者注册账户";
        this.title = "提示";
        this.confirm = "确定";
        this.cancel = "取消";
      } else if (this.locale == "en") {
        this.message = "Please login or register first";
        this.title = "Prompt";
        this.confirm = "Confirm";
        this.cancel = "cancel";
      } else if (this.locale == "cf") {
        this.message = "請先登錄或者注册帳戶";
        this.title = "提示";
        this.confirm = "確定";
        this.cancel = "取消";
      }
    },
    judgeLogin(){
      if(localStorage.getItem('login')!=="ok"){
        this.judge();
      }
    }
  },
  components: {
    comNav,
    Asided,
    footers
  }
};
</script>
<style>
.container{
  height: 100%;
}
</style>
