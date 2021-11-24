export default [
    // {
    //     icon: "el-icon-location",
    //     index: "dashboard",
    //     title: "系统首页",
    // },
    // {
    //     icon: "el-icon-location",
    //     index: "table",
    //     title: "基础表格",
    // },
    // {
    //     icon: "el-icon-location",
    //     index: "tabs",
    //     title: "tab选项卡",
    // },
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
    // {
    //     index: "icon",
    //     title: "自定义图标",
    //     icon: "el-icon-s-tools",
    // },
    // {
    //     icon: "el-icon-s-tools",
    //     index: "charts",
    //     title: "schart图表",
    // },
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
        subs: [
            {
                icon: "el-icon-s-tools",
                index: "i18n",
                title: "国际化功能",
            },
        ]
    },
]
