<template>
  <div >
      {{locale}}
  </div>
</template>
<script>
import store from "@/store/store";
import { mapState,mapMutations } from 'vuex';
export default {
  computed: mapState(["locale"]),
  methods:mapMutations([
    // 'locale'
  ]),
  store
};
</script>

