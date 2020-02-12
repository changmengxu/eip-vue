<template>
    <div>
        <span>这里是test3</span>
        <br>
        <br>
        <button class="test-btn" @click="back">带参数返回刚才页面</button>
        <br>
        <br>
        <button class="test-btn" @click="backNoInfo">不带参数返回刚才页面</button>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        back () {
            this.$router.push({path: '/homepage/demo3', query: {info: 'hhhhhhhhhh'}})
        },
        backNoInfo (){
            this.$router.push({path: '/homepage/demo3'})
        }
    }
}
</script>

<style lang="scss">
    
</style>