<template>
  <div class="wrap">
      <ul>
          <li>
              <router-link to="/myaccount/accountSet" class="skip">
                  <i class="fa fa-user fa-2x"></i>
                  <strong>账户</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/myaccount/instrument" class="skip" >
                  <i class="fa fa-globe fa-2x"></i>
                  <strong>仪表盘</strong>
              </router-link>
          </li>
          
      </ul>
  </div>
</template>
<script>

</script>
<style>
.wrap {
  background-color: #e1e1e1;
  height: 600px;
  text-align: left;
}
.wrap ul li {
  padding: 10px 20px;
  border-bottom: 1px solid rgb(128, 128, 128);
}
.wrap ul li .skip {
  width: 100%;
  color: rgb(128, 128, 128);
  display: inline-block;
}
.wrap ul li:hover {
  background-color: #fff;
}
</style>

