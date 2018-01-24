<template>
<el-container>
  <com-nav/>
  <el-main style="position: relative;">
      <head-time/>
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
    <el-row class="coin_btn">
        <el-col>
            <el-col :span="12">
                <router-link to="">
                    <div class="bitcoin">
                        <i class="fa fa-fw fa-btc fa-3x"></i>
                        <span>
                            {{$t('message.bitcoin_btn')}}
                        </span>
                    </div>
                </router-link>
            </el-col>
            <el-col :span="12">
                <router-link to="">
                    <div class="zcash">
                        <i class="fa fa-cny fa-3x"></i>
                        <span>
                            {{$t('message.zcash_btn')}}
                        </span>
                    </div>
                </router-link>
            </el-col>
        </el-col>
    </el-row>
    <el-row class="intro">
        <el-col :span="8">
            <div class="">
                <div class="text_center">
                    <i class="fa fa-users fa-4x"></i>
                    <h3>{{$t('introduce.title[0]')}}</h3>
                </div>
                <div class="text_left int_cont">
                    <ul>
                        <li>{{$t('introduce.one[0]')}}</li>
                        <li>{{$t('introduce.one[1]')}}</li>
                        <li>{{$t('introduce.one[2]')}}</li>
                        <li>{{$t('introduce.one[3]')}}</li>
                    </ul>
                </div>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="text_center">
                    <i class="fa fa-keyboard-o fa-4x"></i>
                    <h3>{{$t('introduce.title[1]')}}</h3>
            </div>
            <div class="text_left int_cont">
                <ul>
                    <li>{{$t('introduce.two[0]')}}</li>
                    <li>{{$t('introduce.two[1]')}}</li>
                    <li>{{$t('introduce.two[2]')}}</li>
                </ul>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="text_center">
                    <i class="fa fa-bitcoin fa-4x"></i>
                    <h3>{{$t('introduce.title[2]')}}</h3>
            </div>
            <div class="text_left int_cont">
                <p>{{$t('introduce.three')}}</p>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="8">
            <div class="text_center">
                    <i class="fa fa-globe fa-4x"></i>
                    <h3>{{$t('introduce.title[3]')}}</h3>
            </div>
            <div class="text_left int_cont">
                <p>{{$t('introduce.four')}}</p>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="text_center">
                    <i class="fa fa-shield fa-4x"></i>
                    <h3>{{$t('introduce.title[4]')}}</h3>
            </div>
            <div class="text_left int_cont">
                <p>{{$t('introduce.five')}}</p>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="text_center">
                    <i class="fa fa-comments-o fa-4x"></i>
                    <h3>{{$t('introduce.title[5]')}}</h3>
            </div>
            <div class="text_left int_cont">
                <p>{{$t('introduce.six')}}</p>
            </div>
        </el-col>
    </el-row>
  </el-main>
    <el-footer class="foot">
        <footers/>
    </el-footer>
</el-container>   
</template>
<script>
import headTime from "./components/headTime.vue";
import comNav from "./components/comNav.vue";
import footers from "./components/footer.vue";
export default {
  components: {
    headTime,
    comNav,
    footers
  }
};
</script>
<style>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.coin_btn {
  margin-top: 50px;
}
.coin_btn .bitcoin,
.zcash {
  width: 250px;
  height: 100px;
  border: 1px solid rgb(153, 169, 191);
  text-align: center;
  line-height: 100px;
  border-radius: 5px;
  margin: 0 auto;
  font-size: 16px;
}

.coin_btn i {
  position: relative;
  top: 50%;
  transform: translateY(-80%);
}
.int_cont {
  padding-left: 150px;
  padding-right: 100px;
}
.intro {
  margin-top: 50px;
}
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
    