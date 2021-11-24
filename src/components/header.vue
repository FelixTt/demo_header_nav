<template>
  <div>
    <el-menu
      :default-active="activePath"
      class="el-menu-vertical-demo"
      mode="horizontal"
    >
      <template v-for="item in indexItem">
        <el-menu-item
          :index="item.index"
          :key="item.index"
          @click="itemClick(item.title)"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import menuList from "../config.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      index: [],
      subItem: [],
      activePath: ""
    };
  },
  computed: {
    ...mapState(["indexItem", "addIndex"]),
  },
  mounted() {
    menuList.forEach((item) => {
      this.index.push(item);
    });
    // 存储所有的一级菜单
    this.$store.commit("addIndex", this.index);
    this.activePath = this.index[0].index
    // 默认存储第一个二级菜单
    this.$store.commit("addSubItem", this.index[0].subs);

  },
  methods: {
    itemClick(title) {
      // 将对应的二级菜单存储起来
      this.indexItem.forEach((item) => {
        if (item.title === title) {
          this.subItem = item.subs;
        }
      });
      this.$store.commit("addSubItem", this.subItem);
    },
  },
};
</script>

<style scoped>
</style>