webpackJsonp([128],{"5uXp":function(t,e,r){"use strict";e.f=function(){return Object(o.a)({url:"/api/admin/groupType/all",method:"get"})},e.p=function(){return Object(o.a)({url:"/api/admin/role/tree",method:"get"})},e.m=function(){return Object(o.a)({url:"/api/admin/org/tree",method:"get"})},e.c=function(t){return Object(o.a)({url:"/api/admin/dataAuthority",method:"get",params:t})},e.e=function(t){return Object(o.a)({url:"/api/admin/group/tree",method:"get",data:t})},e.b=function(t){return Object(o.a)({url:"/api/admin/group",method:"post",data:t})},e.i=function(t){return Object(o.a)({url:"/api/admin/group/"+t,method:"get"})},e.d=function(t){return Object(o.a)({url:"/api/admin/group/"+t,method:"delete"})},e.n=function(t,e){return Object(o.a)({url:"/api/admin/group/"+t,method:"put",data:e})},e.j=function(t){return Object(o.a)({url:"/api/admin/group/"+t+"/user",method:"get"})},e.l=function(t,e){return Object(o.a)({url:"/api/admin/group/"+t+"/user",method:"put",params:e})},e.o=function(t,e){return Object(o.a)({url:"/api/admin/group/"+t+"/authority/element/remove",method:"post",params:e})},e.a=function(t,e){return Object(o.a)({url:"/api/admin/group/"+t+"/authority/element/add",method:"post",params:e})},e.g=function(t){return Object(o.a)({url:"/api/admin/group/"+t+"/authority/element",method:"get"})},e.k=function(t,e){return Object(o.a)({url:"/api/admin/group/"+t+"/authority/menu",method:"post",params:e})},e.h=function(t){return Object(o.a)({url:"/api/admin/group/"+t+"/authority/menu",method:"get"})};var o=r("vLgD")},HX6m:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("Dd8w"),a=r.n(o),n=r("P0XF"),i=r("5uXp"),u={name:"DataAuthority",components:{BaseTable:function(){return r.e(106).then(r.bind(null,"ss0d"))}},props:{userId:{required:!0}},created:function(){this.getDataAuthority(),this.getTreeData()},data:function(){return{roleFilterText:"",orgFilterText:"",roleTreeData:[],orgTreeData:[],roleProps:{children:"children",label:"rolenm"},orgProps:{children:"children",label:"orgnm"},columns:[{prop:"no",label:"序号",width:60},{prop:"usernm",label:"用户名",width:100},{prop:"rolenm",label:"角色名称",width:140},{prop:"orgnm",label:"机构名称",width:120},{prop:"operation",width:"120",label:"操作",operation:!0,operations:[{text:"删除",event:"removeDataAuthority",icon:"iconfont icon-iconfont-shanchu"}]}],userDataAuthority:[],usernm:"王珊",rolenm:""}},watch:{roleFilterText:function(t){this.$refs.roleTree.filter(t)},orgFilterText:function(t){this.$refs.orgTree.filter(t)}},computed:{showData:function(){var t=[];return this.userDataAuthority.forEach(function(e,r){var o=a()({},e);o.no=r+1,t.push(o)}),t}},methods:{filterNode:function(t,e){return!t||-1!==e.label.indexOf(t)},getDataAuthority:function(){var t=this;Object(i.c)({userId:this.userId}).then(function(e){t.userDataAuthority=e.data})},getTreeData:function(){var t=this;Object(i.p)().then(function(e){t.roleTreeData=e.data}),Object(i.m)().then(function(e){t.orgTreeData=e.data})},getRoleData:function(t){console.log("data",t),this.rolenm=t.rolenm},addDataAuthority:function(){var t=this,e=this.$refs.orgTree.getCheckedNodes();""!==this.rolenm&&void 0!==e&&e.length>0?(e.forEach(function(e){var r=Object(n.a)();t.userDataAuthority.push({id:r,userid:t.userId,usernm:t.usernm,rolenm:t.rolenm,orgnm:e.orgnm})}),this.$refs.roleTree.setCurrentKey(null),this.$refs.orgTree.setCheckedNodes([]),this.$message({type:"success",showClose:!0,message:"提交成功！"})):this.$message({type:"warning",showClose:!0,message:"请先选择角色和机构！"})},removeDataAuthority:function(t){var e=this;this.$confirm("确定删除此条数据权限配置吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var r=e.userDataAuthority.findIndex(function(e){return e.id===t});e.userDataAuthority.splice(r,1),e.$message({type:"success",message:"删除成功!"})}).catch(function(){})}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("base-table",{attrs:{columns:t.columns,data:t.showData,rowKey:"id"},on:{removeDataAuthority:t.removeDataAuthority}}),t._v(" "),r("el-row",{staticStyle:{"margin-top":"15px"}},[r("el-col",{attrs:{span:24}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.addDataAuthority}},[t._v("提交")])],1),t._v(" "),r("el-col",{staticStyle:{"margin-top":"15px"},attrs:{span:8}},[r("span",[t._v("角色选择")]),t._v(" "),r("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:t.roleFilterText,callback:function(e){t.roleFilterText=e},expression:"roleFilterText"}}),t._v(" "),r("el-tree",{ref:"roleTree",staticClass:"filter-tree",attrs:{data:t.roleTreeData,"node-key":"id","highlight-current":"",props:t.roleProps,"filter-node-method":t.filterNode},on:{"node-click":t.getRoleData}})],1),t._v(" "),r("el-col",{staticStyle:{"margin-top":"15px"},attrs:{span:16}},[r("span",[t._v("机构选择")]),t._v(" "),r("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:t.orgFilterText,callback:function(e){t.orgFilterText=e},expression:"orgFilterText"}}),t._v(" "),r("el-tree",{ref:"orgTree",staticClass:"filter-tree",attrs:{"check-strictly":"",data:t.orgTreeData,"show-checkbox":"","node-key":"orgcd","highlight-current":"",props:t.orgProps,"filter-node-method":t.filterNode}})],1)],1)],1)},staticRenderFns:[]};var s=r("VU/8")(u,l,!1,function(t){r("MQUw")},"data-v-396498c7",null);e.default=s.exports},MQUw:function(t,e){}});