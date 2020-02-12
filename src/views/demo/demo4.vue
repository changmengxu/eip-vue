<template>
  <div>
      <my-test :dataList="testList" @getFChange="fn"></my-test>
  </div>
</template>

<script>
import myTest from '../../components/testComponents.vue';
export default {
  components: {
    myTest
  },
  data () {
    return {
      testList: [
        {
          uname: '张三',
          uage: '10',
          usex: '男'
        },
        {
          uname: '张四',
          uage: '10',
          usex: '男'
        },
        {
          uname: '张五',
          uage: '10',
          usex: '男'
        },
        {
          uname: '张六',
          uage: '10',
          usex: '男'
        },
        {
          uname: '张七',
          uage: '10',
          usex: '男'
        }
      ]
    }
  },
  methods: {
    fn (info) {
      alert(info)
    }
  }
};
</script>

<style lang="scss">
</style>