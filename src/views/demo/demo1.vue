<template>
  <div class="demo1-box">
      <span>绑定</span>
      <img alt="demo1" v-bind:src="imgSrc" class="img-test1 mb10">
      <button class="test-btn mb10" v-on:click="clickBtn1">点击按钮</button>
      <br>
      <span>条件渲染</span>
      <p v-if="true">v-if显示</p>
      <p v-else>隐藏</p>
      <p v-show="true">v-show显示</p>
      <button class="test-btn" @click="showImg">点击切换图片</button>
      <img v-if="showImg2" class="img-test2" src="http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20200211/996af97dd27644cfb8b454fc596f3cc3.webp" alt="">
      <img v-else class="img-test2" src="http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20200211/318354fd15654c629099ced374715227.jpeg" alt="">
      <!-- v-else 对应的是上面的 v-if -->
      <span>列表渲染</span>
      <ul class="list-test">
          <li>
              <span>姓名</span>
              <br>
              <span>年龄</span>
              <br>
              <span>性别</span>
          </li>
          <li v-for="(item, index) in arrTest" :key="index">
              <span>{{item.uname}}</span>
              <br>
              <span>{{item.uage}}</span>
              <br>
              <span>{{item.usex}}</span>
          </li>
      </ul>

      <span class="tips">
          不建议v-for和v-if同时使用
      </span>
  </div>
</template>

<script>
export default {
    data () {
        return {
            showImg2: true,
            imgSrc: 'https://element.eleme.cn/static/theme-index-blue.c38b733.png',
            arrTest: [
                {
                    uname: '张三',
                    uage: '18',
                    usex: '男'
                },
                {
                    uname: '张四',
                    uage: '19',
                    usex: '女'
                },
                {
                    uname: '张五',
                    uage: '20',
                    usex: '男'
                },
                {
                    uname: '张六',
                    uage: '21',
                    usex: '女'
                }
            ]
        }
    },
    methods: {
        clickBtn1 () {
            alert("点击事件")
        },
        showImg() {
            this.showImg2 = !this.showImg2
        }
    }
};
</script>

<style lang="scss">
.demo1-box{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.img-test1{
    width: 200px;
    height: 200px;
    border: 1px solid #000;
}
.img-test2{
    width: 100px;
    height: auto;
}
.list-test{
    display: flex;
    justify-content: center;
    align-items: center;
    li{
        width: 80px;
        border: 1px solid #000;
        list-style: none;
        span{
            display: inline-flex;
            width: 100%;
            border-bottom: 1px solid #000;
            margin-bottom: -1px;
        }
    }
}
</style>