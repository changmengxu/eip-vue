<template>
  <div class="img-box">
    <span id="name">{{name}}</span>
    <span>控制台可见created和mounted不同之处</span>
    <div>
      <img @click="toInfo" src="../../assets/img/life.png" alt="" class="img">
      <span>点击图片查看详情</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      age: '',
      city: ''
    }
  },
  methods: {
    toInfo() {
      window.open("https://upload-images.jianshu.io/upload_images/6812658-6c92ae93a94c3fee")
    }
  },
  created () {
    this.name = '张三'
    this.age = '12'
    this.city = '武汉'
    console.log(document.getElementById("name"))
  },
  mounted () {
    console.log(document.getElementById("name"))
  }
}
</script>

<style lang="scss">
.img-box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  .img {
    width: 300px;
    // height: auto;
    // border: 1px solid #000;
  }
}
</style>