webpackJsonp([60],{kLpC:function(t,e){},x0vE:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"top"},[s("div",{staticClass:"header"},[s("div",{staticClass:"logo"},[t._v("车险承保辅助决策系统")]),t._v(" "),s("div",{staticClass:"nav"},[s("router-link",{attrs:{to:"/index/home"}},[t._v("首页")]),t._v(" "),s("router-link",{attrs:{to:"/index/workspace"}},[t._v("我的工作台")])],1),t._v(" "),s("div",{staticClass:"user"},[s("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-tuichu2"},on:{click:t.logout}})],1)])]),t._v(" "),s("router-view"),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"coy"},[e("p",[this._v("技术支持：中软国际科技服务有限公司")])])])}]};var n=s("VU/8")({data:function(){return{}},methods:{logout:function(){var t=this;this.$confirm("确认要退出登录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$store.dispatch("LogOut").then(function(){t.$router.push({path:"/"})})})}}},i,!1,function(t){s("kLpC")},"data-v-470659ba",null);e.default=n.exports}});