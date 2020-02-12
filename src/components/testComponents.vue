<template>
  <div>
    <button @click="getChange" class="test-btn">点击向父组件传值</button>
    <ul class="test-list">
      <li>
        <div>姓名</div>
        <br />
        <div>年龄</div>
        <br />
        <div>性别</div>
        <br />
      </li>
      <li v-for="(item, index) in dataList" :key="index">
        <div style="color: red;"><b>{{item.uname}}</b></div>
        <br />
        <div>{{item.uage}}</div>
        <br />
        <div>{{item.usex}}</div>
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
      getChange(){
        //   在当前组件内部只是触发父组件事件
          let info = "这是传递的信息"
          this.$emit("getFChange", info)
      }
  }
};
</script>

<style lang="scss">
.test-list{
    display: flex;
    flex-direction: column;
    li{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 300px;
        div{
            width: 100px;
            padding: 10px 0;
            border: 1px solid #000;
            text-align: center;
        }
    }
}
</style>