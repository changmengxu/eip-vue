 <template>
  <el-container>
    <el-header>
      demo管理中心
    </el-header>
    <el-container>
      <el-aside width="200px">
          <el-menu :router=true>
              <el-submenu index="1" title="导航1">
                  <template slot="title">
                      <span>demo管理</span>
                  </template>
                  <el-menu-item index="/homepage/demo1">demo1</el-menu-item>
                  <el-menu-item index="/homepage/demo2">demo2</el-menu-item>
                  <el-menu-item index="/homepage/demo3">demo3</el-menu-item>
                  <el-menu-item index="/homepage/demo4">demo4</el-menu-item>
                  <el-menu-item index="/homepage/demo5">demo5</el-menu-item>
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
}
.el-aside{
    height: calc(100vh - 60px);
    .el-menu{
        height: 100%;
    }
}
</style>