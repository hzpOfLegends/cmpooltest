<template>
    <div class="login">
        <h1 class="title">{{$t('account.title[0]')}}</h1>
        <el-input
            :placeholder="$t('account.lghint[0]')"
            v-model="account"
            clearable>
        </el-input>
        <el-input
            :placeholder="$t('account.lghint[1]')"
            v-model="pwd"
            type="password"
            clearable>
        </el-input>
        <div class="btn">
            <el-button >{{$t('account.btn[0]')}}</el-button>
        </div>
        
        <div class="help">
            <router-link to="register" class="help_account">{{$t('account.btn[1]')}}</router-link>
            <router-link to="" class="help_pwd">{{$t('account.btn[2]')}}</router-link>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return {
          account: '',
          pwd:''
      }
  }
};
</script>

<style>
.login {
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
  margin-top: 20px;
  font-size: 20px;
}
.btn{
    margin-top: 20px;
}
.help{
    text-align: right;
    margin-right: 5px;
    font-size: 14px;
}
.help .help_account,help_pwd{
    border-right: 1px solid rgb(144, 147, 153);
    padding-right: 10px;
    
}
.login .title{
    font-size: 30px;
}

</style>
