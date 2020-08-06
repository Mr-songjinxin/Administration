<template>
  <div>
    <!-- 侧边 -->
    <div id="box-left">
      <b class="wena">HAPPY</b>
      <b class="wenb">MMALL</b>
      <!-- ------------- -->
      <el-row class="tac">
        <el-col :span="30">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-order    "></i>
                <span>首页</span>
              </template>
              <el-menu-item-group>
                <template slot="title"></template>
                <router-link to="/shouye"><el-menu-item index="1-1">Home</el-menu-item></router-link>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-s-custom"></i>
              <span slot="title">用户</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
      <!-- ------------ --->
    </div>
    <!-- 头部 -->
    <div id="box-head">
      <Headd></Headd>
    </div>
    <!-- 内容区 -->
    <div class="conent">
      <Conent></Conent>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Headd from "@/components/home/Headd";
import Conent from '@/components/home/Conent'
export default {
  name: "Home",
  components: {
    Headd,
    Conent
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
#box-left {
  width: 260px;
  height: 1007px;
  background: #32323a;
}
.wena {
  font-size: 30px;
  color: #2dafcb;
  position: absolute;
  left: 15px;
  top: 5px;
}
.wenb {
  font-size: 30px;
  // color: #2dafcb;
  position: absolute;
  left: 125px;
  color: white;
  top: 5px;
}
.el-col {
  width: 260px;
  // background: red;
  position: absolute;
  top: 60px;
}
// 头部样式如下:
#box-head {
  width: 79%;
  height: 60px;
  background: rgb(243, 236, 236);
  position: absolute;
  right: 0px;
  top: 0px;
}
.conent {
  width: 79.05%;
  height: 947px;
  background: #807e7e;
  position: absolute;
  right: 0;
  top: 60px;
}
</style>
