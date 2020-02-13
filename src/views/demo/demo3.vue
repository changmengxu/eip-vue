<template>
  <div>
      <span>{{queryInfo}}</span>
      <button class="test-btn" @click="toTest3">点击跳转到test3</button>
      <br>
      <br>
  </div>
</template>

<script>
export default {
    data() {
        return{
            queryInfo: ''
        }
    },
    methods: {
        toTest3 () {
            this.queryInfo = ''
            this.$router.push({path: '/test3'})
        }
    },
    created() {
        console.log(this.$route.query.info)
        if(this.$route.query.info) {
            this.queryInfo = this.$route.query.info
        } else {
            this.queryInfo = ''
        }
    }
};
</script>

<style lang="scss">
</style>