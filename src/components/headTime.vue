<template>
  <div class="headtime clearfix">
      <span title="server time in timezone : CHINA">{{time | data}}</span>
      <span title="Pool Hashrate">1.954 Eh/s</span>
      <span title="selected coin"><i class="fa fa-btc"></i>Bitcoin</span>
      <span title="The price of CNY">CNY: <strong>72582.91</strong> </span>
      <span title="The price of EUR">EUR: <strong>9255.15</strong></span>
      <span title="The price of GBP">GBP: <strong>8171.28</strong></span>
      <span title="The price of 8USD">8USD: <strong>11294.9</strong></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: Date.now(),
      num:1
    };
  },
  mounted(){
      this.$nextTick(function () {
          window.clearInterval(timer)
          var timer=window.setInterval(this.set,500)
      })
  },
  methods: {
    set() {
      if(this.num>=1){
          this.time=Date.now();
        //   
      }
    }
  },
  filters: {
    data: function(input) {
      let d = new Date(input);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate() < 10 ? "0" + d.getDate() : "" + d.getDate();
      let hour = d.getHours()<10?"0"+d.getHours():""+d.getHours();
      let minutes = d.getMinutes()<10?"0"+d.getMinutes():""+d.getMinutes();
      let seconds = d.getSeconds()<10?"0"+d.getSeconds():""+d.getSeconds();
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minutes +
        ":" +
        seconds
      );
    }
  }
};
</script>

<style>
.headtime {
  position: relative;
  top: 0;
  text-align: left;
}
.headtime span:nth-child(1){
    display: inline-block;
    border-right: 2px solid rgb(153, 169, 191);
    width: 150px;
    padding: 5px 5px;
}
.headtime span:nth-child(2){
    border-right: 2px solid rgb(153, 169, 191);
    padding: 5px 5px;
}
.headtime span:nth-child(3){
    border-right: 2px solid rgb(153, 169, 191);
    padding: 5px 5px;
}
</style>

