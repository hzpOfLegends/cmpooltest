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
              <router-link to="/dash/Dashboard" class="skip" >
                  <img src="/static/img/dash.png" alt="">
                  <strong>Dash</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/dgb-groestl/dashboard" class="skip" >
                  <img src="/static/img/digibyte.png" alt="">
                  <strong>DigiByte(Myriad Groest)</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/dgb-qubit/dashboard" class="skip" >
                  <img src="/static/img/digibyte.png" alt="">
                  <strong>DigiByte(Qubit)</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/dgb-scrypt/dashboard" class="skip" >
                  <img src="/static/img/digibyte.png" alt="">
                  <strong>DigiByte(Scrypt)</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/dgb-sha256d/dashboard" class="skip" >
                  <img src="/static/img/digibyte.png" alt="">
                  <strong>DigiByte(Sha256d)</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/dgb-skein/dashboard" class="skip" >
                  <img src="/static/img/digibyte.png" alt="">
                  <strong>DigiByte(Skein)</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/max/dashboard" class="skip" >
                  <img src="/static/img/maxcoin.png" alt="">
                  <strong>MaxCoin</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/start/dashboard" class="skip" >
                  <img src="/static/img/monero.png" alt="">
                  <strong>StartCoin</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/xmr/dashboard" class="skip" >
                  <img src="/static/img/startcoin.png" alt="">
                  <strong>Monero</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/zcash/dashboard" class="skip" >
                  <img src="/static/img/zcash.png" alt="" style="">
                  <strong>Zcash</strong>
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
  /* vertical-align: middle; */
}
.wrap ul li .skip {
  width: 100%;
  color: rgb(128, 128, 128);
  display: inline-block;
}
.wrap ul li:hover {
  background-color: #fff;
}
img{
    width: 25px;
    vertical-align:middle
}
</style>

