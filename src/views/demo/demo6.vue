<template>
  <div>
    <span>axios</span>
    <button class="test-btn" @click="getMethods">点击发送请求</button>
  </div>
</template>
<script>
import api from '../../api/index';
export default {
  methods: {
    getMethods () {
      let params = {
        data: 'hhhh'
      }
      api.getMethods(params).then(res => {
        console.log(res)
      })
    }
  }
};
</script>
<style lang="scss">
</style>