<template>
  <div>
    <el-menu
      :default-active="activePath"
      class="el-menu-vertical-demo"
      :router="true"
    >
      <!-- 第一层 -->
      <template v-for="item in this.subItem">
        <!-- 如果第一层有子菜单，则继续循环 -->
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <!-- 第二层 -->
            <template v-for="subItem in item.subs">
              <!-- 如果第二层有子菜单，则继续循环 -->
              <template v-if="subItem.subs">
                <el-submenu :index="subItem.index" :key="subItem.index">
                  <template slot="title">
                    <i :class="subItem.icon"></i>
                    <span slot="title">{{ subItem.title }}</span>
                  </template>
                </el-submenu>
              </template>
              <!-- 如果第二层没有子菜单 -->
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                <i :class="subItem.icon"></i>
                <span slot="title">{{ subItem.title }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 如果第一层没有子菜单 -->
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
       activePath: ""
    };
  },
  computed: {
    ...mapState(["subItem"]),
  },
  mounted() {
    console.log("this.subItem", this.subItem)
    // this.activePath = this.subItem[0].index
  },
};
</script>

<style scoped>
</style>