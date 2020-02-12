<template>
  <div>
      <span>{{queryInfo}}</span>
      <button class="test-btn" @click="toTest3">点击跳转到test3</button>
      <br>
      <br>
      <!-- <button class="test-btn" @click="toNothing">跳转到一个不存在的页面</button> -->
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
        },
        toNothing () {
            this.$router.push({path: '/wqer'})
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