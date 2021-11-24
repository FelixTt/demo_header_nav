<template>
  <!-- <h3>通用后台管理系统</h3> -->
  <el-menu
    class="sidebar-el-menu"
    :collapse="collapse"
    background-color="#324157"
    text-color="#bfcbd9"
    active-text-color="#20a0ff"
    unique-opened
    router
  >
    <!-- 第一层 -->
    <template v-for="item in items">
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
                <!-- 第三层 -->
                <template v-for="subItem2 in subItem.subs">
                  <el-menu-item :index="subItem2.index" :key="subItem2.index">
                    <i :class="subItem2.icon"></i>
                    <span slot="title">{{ subItem2.title }}</span>
                  </el-menu-item>
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
</template>

<script>
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "el-icon-location",
          index: "dashboard",
          title: "系统首页",
        },
        {
          icon: "el-icon-location",
          index: "table",
          title: "基础表格",
        },
        {
          icon: "el-icon-location",
          index: "tabs",
          title: "tab选项卡",
        },
        {
          icon: "el-icon-location",
          index: "3",
          title: "表单相关",
          subs: [
            {
              index: "form",
              title: "基本表单",
              icon: "el-icon-s-operation",
            },
            {
              index: "3-2",
              title: "三级菜单",
              icon: "el-icon-s-operation",
              subs: [
                {
                  index: "editor",
                  title: "富文本编辑器",
                  icon: "el-icon-s-order",
                },
                {
                  index: "markdown",
                  title: "markdown编辑器",
                  icon: "el-icon-s-order",
                },
              ],
            },
            {
              index: "upload",
              title: "文件上传",
              icon: "el-icon-s-operation",
            },
          ],
        },
        {
          index: "icon",
          title: "自定义图标",
          icon: "el-icon-s-tools",
        },
        {
          icon: "el-icon-s-tools",
          index: "charts",
          title: "schart图表",
        },
        {
          icon: "el-icon-s-tools",
          index: "6",
          title: "拖拽组件",
          subs: [
            {
              index: "drag",
              title: "拖拽列表",
              icon: "el-icon-s-operation",
            },
            {
              index: "dialog",
              title: "拖拽弹框",
              icon: "el-icon-s-operation",
            },
          ],
        },
        {
          icon: "el-icon-s-tools",
          index: "i18n",
          title: "国际化功能",
        },
        {
          icon: "el-icon-s-tools",
          index: "7",
          title: "错误处理",
          subs: [
            {
              index: "permission",
              title: "权限测试",
              icon: "el-icon-s-operation",
            },
            {
              index: "404",
              title: "404页面",
              icon: "el-icon-s-operation",
            },
          ],
        },
        {
          icon: "el-icon-s-tools",
          index: "/donate",
          title: "支持作者",
        },
      ],
    };
  },
  computed: {},
  methods: {},
};

//  menu: [
//         {
//           path: "/111",
//           name: "111",
//           label: "111",
//           icon: "111",
//           url: "",
//         },
//         {
//           path: "/222",
//           name: "222",
//           label: "222",
//           icon: "222",
//           url: "",
//         },
//         {
//           path: "/333",
//           name: "333",
//           label: "333",
//           icon: "333",
//           url: "",
//           children: [
//             {
//               path: "/3-111",
//               name: "3-111",
//               label: "3-111",
//               icon: "3-111",
//               url: "",
//             },
//             {
//               path: "/3-222",
//               name: "3-222",
//               label: "3-222",
//               icon: "3-222",
//               url: "",
//             },
//           ],
//         },
//         {
//           path: "/444",
//           name: "444",
//           label: "444",
//           icon: "444",
//           url: "",
//           children: [
//             {
//               path: "/4-111",
//               name: "4-111",
//               label: "4-111",
//               icon: "4-111",
//               url: "",
//               children: [
//                 {
//                   path: "/4-111",
//                   name: "4-111",
//                   label: "4-111",
//                   icon: "4-111",
//                   url: "",
//                 },
//                 {
//                   path: "/4-222",
//                   name: "4-222",
//                   label: "4-222",
//                   icon: "4-222",
//                   url: "",
//                 },
//               ],
//             },
//             {
//               path: "/4-222",
//               name: "4-222",
//               label: "4-222",
//               icon: "4-222",
//               url: "",
//             },
//           ],
//         },
//         {
//           path: "/555",
//           name: "555",
//           label: "555",
//           icon: "555",
//           url: "",
//           children: [
//             {
//               path: "/5-111",
//               name: "5-111",
//               label: "5-111",
//               icon: "5-111",
//               url: "",
//             },
//             {
//               path: "/5-222",
//               name: "5-222",
//               label: "5-222",
//               icon: "5-222",
//               url: "",
//             },
//           ],
//         },
//       ]
</script>

<style scoped>
.sidebar-el-menu:not(.el-menu--collapse) {
  height: 100vh;
}
</style>

