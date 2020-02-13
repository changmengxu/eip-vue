 <template>
  <el-container>
    <el-header>
        <div>
            VUE技术分享DEMO
        </div>
        <div class="icon-btn">
            <img src="../assets/img/admin.png" alt="">
            <span>管理员</span>
        </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
          <el-menu :router=true>
              <el-submenu index="1" title="导航1">
                  <template slot="title">
                      <span>VUE基础</span>
                  </template>
                  <el-menu-item index="/homepage/demo1">指令</el-menu-item>
                  <el-menu-item index="/homepage/demo2">生命周期</el-menu-item>
                  <el-menu-item index="/homepage/demo3">路由</el-menu-item>
                  <el-menu-item index="/homepage/demo4">组件</el-menu-item>
                  <el-menu-item index="/homepage/demo5">VUEX</el-menu-item>
                  <el-menu-item index="/homepage/demo6">axios</el-menu-item>
              </el-submenu>
              <el-submenu index="2" title="导航1">
                  <template slot="title">
                      <span>导航2</span>
                  </template>
                  <el-menu-item>选项1</el-menu-item>
                  <el-menu-item>选项2</el-menu-item>
              </el-submenu>
          </el-menu>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {};
</script>
<style lang="scss">
.el-header, .el-footer{
    line-height: 60px;
}
.el-header{
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon-btn{
        display: flex;
        align-items: center;justify-content: center;
        color: #333;
        img{
            width: 30px;
            height: 30px;
            border: 1px solid #ccc;
            border-radius: 40px;
            margin-right: 10px;
        }
    }
}
.el-aside{
    height: calc(100vh - 60px);
    .el-menu{
        height: 100%;
    }
}
</style>