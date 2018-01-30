<template>
  <el-header>
      <el-menu  class="el-menu-demo" mode="horizontal" @select="handleSelect" style="text-align:left">
        <el-submenu index="1" >
            <template slot="title">{{$t("message.nav_title[0]")}}</template>
            <router-link to="/">
                <el-menu-item index="1-1">
                <i class="fa fa-home fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.nav_homepage[0]")}}</strong> 
            </el-menu-item>
            </router-link>
            <el-menu-item index="1-2">
                <i class="fa fa-lightbulb-o fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.nav_homepage[1]")}}</strong>
            </el-menu-item>
            <el-menu-item index="1-3">
                <i class="fa fa-address-book fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.nav_homepage[2]")}}</strong>
            </el-menu-item>
            <el-menu-item index="1-4">
                <i class="fa fa-medium fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.nav_homepage[3]")}}</strong> 
            </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">{{$t("message.nav_title[1]")}}</template>
            <el-menu-item index="2-1">
                <i class="fa fa-bar-chart fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.min_sta[0]")}}</strong> 
            </el-menu-item>
            <el-menu-item index="2-2">
                <i class="fa fa-balance-scale fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.min_sta[1]")}}</strong> 
                
            </el-menu-item>
            <el-menu-item index="2-3">
                <i class="fa fa-history fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.min_sta[2]")}}</strong>
                
            </el-menu-item>
            <el-menu-item index="2-4">
                <i class="fa fa-trophy fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.min_sta[3]")}}</strong> 
            </el-menu-item>
            <el-menu-item index="2-4">
                <i class="fa fa-bar-chart fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.min_sta[4]")}}</strong> 
                
            </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">{{$t("message.nav_title[2]")}}</template>
            <router-link to="text">
                <el-menu-item index="3-1">
                <i class="fa fa-life-ring fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.help_center[0]")}}</strong> 
            </el-menu-item>
            </router-link>
            <el-menu-item index="3-2">
                <i class="fa fa-code fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.help_center[1]")}}</strong>
                
            </el-menu-item>
            <el-menu-item index="3-3">
                <i class="fa fa-gavel fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.help_center[2]")}}</strong>
                
            </el-menu-item>    
        </el-submenu>
        <el-submenu index="4">
            
            <template slot="title">
                <router-link to="/myaccount" style="color:#909399;">
                {{$t("message.nav_title[3]")}}
                </router-link>
                </template>
            
            <router-link to="text">
                <el-menu-item index="4-1">
                <i class="fa fa-th-large fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.account[0]")}}</strong> 
            </el-menu-item>
            </router-link>
            <el-menu-item index="4-2">
                <i class="fa fa-cogs fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.account[1]")}}</strong>
                
            </el-menu-item>
            <el-menu-item index="4-3">
                <i class="fa fa-line-chart fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.account[2]")}}</strong>
            </el-menu-item>   
            <el-menu-item index="4-4">
                <i class="fa fa-btc fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.account[3]")}}</strong>
            </el-menu-item>  
            <el-menu-item index="4-5">
                <i class="fa fa-usd fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.account[4]")}}</strong>
            </el-menu-item>  
            <el-menu-item index="4-6">
                <i class="fa fa-book fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.account[5]")}}</strong>
                
            </el-menu-item>  
            <router-link to="myaccount/accountSet">
            <el-menu-item index="4-7">
                <i class="fa fa-cog fa-fw"></i>
                &nbsp;&nbsp;
                <strong>{{$t("message.account[6]")}}</strong>
            </el-menu-item>   
            </router-link>
        </el-submenu>
        <el-dropdown style="float:right;line-height:60px"  @command="register">
        <span><i class="el-icon-setting" style="margin-right: 15px"></i>
        <strong id="log">登录</strong>
        </span>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/account/login">
          <el-dropdown-item command="logIn">{{$t('message.register[0]')}}</el-dropdown-item>
          </router-link>
          <router-link to="/account/register">
          <el-dropdown-item command="signUp">{{$t('message.register[1]')}}</el-dropdown-item>
          </router-link>
          <el-dropdown-item command="logOut" >{{$t('message.register[2]')}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown style="float:right;margin-right:60px;line-height:60px" @command="handleCommand">
        <span><i class="el-icon-setting" style="margin-right: 15px"></i>
        <strong>{{$t('message.language')}}</strong>
        </span>
        <el-dropdown-menu slot="dropdown" id="langSlect">
          <el-dropdown-item command="en">EN</el-dropdown-item>
          <el-dropdown-item command="ch">CN</el-dropdown-item>
          <el-dropdown-item command="cf">HK</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
        </el-menu>
        
  </el-header>
</template>
<script>
export default {
  data() {
    return {
      locale: "ch"
    };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    }
  },
  mounted() {
    var locales = JSON.parse(localStorage.getItem("locale"));
    if (locales != null) {
      this.locale = locales;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command) {
      //   this.$message(command);
      this.$i18n.locale = command;
      localStorage.setItem("locale", JSON.stringify(command));
    },
    register(command) {
      if (command == "logOut") {
        localStorage.setItem("login", "no");
        this.$router.push({ name: "homePage" });
      }
      // if(this.locale && )
    }
    
  }
};
</script>

<style>
.el-dropdown {
  float: right;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
</style>
