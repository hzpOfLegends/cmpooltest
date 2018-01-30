<template>
  <el-container>
      <el-header>
          <com-nav/>
      </el-header>
      <el-main>
          <head-time/>
          <router-view></router-view>
      </el-main>
  </el-container>
</template>
<script>

import headTime from "../headTime.vue";
import comNav from "../comNav.vue";

export default {
  components:{
      headTime,
      comNav
  }
}
</script>

<style>
.foot {
  background-color: rgb(211, 220, 230);
  line-height: 60px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.foot{
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
}
</style>
