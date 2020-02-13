<template>
  <div>
      <span>VUEX</span>
      <span>{{$store.state.testData}}</span>
      <button class="test-btn" @click="changeData2">点击修改state</button>
  </div>
</template>

<script>
// import store from '../../store/index'
import {mapGetters, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      'dataInfo': 'getData'
    })
  },
  created () {
    // this.changeDatas();
  },
  methods: {
    ...mapMutations({
      'changeDataInfo': 'changeData'
    }),
    changeData2 () {
      this.changeDataInfo('123213123')
    }
  }
};
</script>

<style lang="scss">
</style>