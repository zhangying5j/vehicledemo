webpackJsonp([10],{"+rGY":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("Dd8w"),n=r.n(i),a=r("5uXp"),o=r("NYxO"),u={name:"groupDetail",components:{"group-user":function(){return r.e(140).then(r.bind(null,"U/of"))},"group-authority":function(){return r.e(134).then(r.bind(null,"oTjz"))}},props:{type:{default:"1"}},data:function(){return{filterText:"",list:null,total:null,formEdit:!0,formAdd:!0,formStatus:"",dialogUserVisible:!1,dialogUserName:"关联用户",dialogAuthorityVisible:!1,dialogAuthorityName:"关联资源",listQuery:{groupType:this.type,name:void 0},treeData:[],defaultProps:{children:"children",label:"label"},labelPosition:"right",groupManager_btn_edit:!1,groupManager_btn_del:!1,groupManager_btn_add:!1,groupManager_btn_userManager:!1,groupManager_btn_resourceManager:!1,form:{code:void 0,name:void 0,description:void 0,groupType:this.type},currentId:-1}},watch:{filterText:function(t){this.$refs.groupTree.filter(t)}},created:function(){this.getList(),this.groupManager_btn_edit=this.elements["groupManager:btn_edit"],this.groupManager_btn_del=this.elements["groupManager:btn_del"],this.groupManager_btn_add=this.elements["groupManager:btn_add"],this.groupManager_btn_userManager=this.elements["groupManager:btn_userManager"],this.groupManager_btn_resourceManager=this.elements["groupManager:btn_resourceManager"]},computed:n()({},Object(o.c)(["elements"])),methods:{getList:function(){var t=this;Object(a.e)(this.listQuery).then(function(e){t.treeData=e.data})},filterNode:function(t,e){return!t||-1!==e.label.indexOf(t)},getNodeData:function(t){var e=this;this.formEdit||(this.formStatus="update"),Object(a.i)(t.id).then(function(t){e.form=t.data}),this.currentId=t.id},handlerEdit:function(){this.form.id&&(this.formEdit=!1,this.formStatus="update")},handlerAdd:function(){this.resetForm(),this.formEdit=!1,this.formStatus="create"},handleDelete:function(){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a.d)(t.currentId).then(function(){t.getList(),t.resetForm(),t.onCancel(),t.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3})})})},update:function(){var t=this;Object(a.n)(this.form.id,this.form).then(function(){t.getList(),t.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})})},create:function(){var t=this;Object(a.b)(this.form).then(function(){t.getList(),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})},onCancel:function(){this.formEdit=!0,this.formStatus=""},resetForm:function(){this.form={parentId:this.currentId,code:void 0,name:void 0,description:void 0,groupType:this.type}},handlerUser:function(){this.dialogUserVisible=!0,void 0!==this.$refs.groupUser&&(this.$refs.groupUser.groupId=this.currentId,this.$refs.groupUser.initUsers())},handlerAuthority:function(){this.dialogAuthorityVisible=!0,void 0!==this.$refs.groupAuthority&&(this.$refs.groupAuthority.groupId=this.currentId,this.$refs.groupAuthority.initAuthoritys())},closeUserDialog:function(){this.dialogUserVisible=!1},closeAuthorityDialog:function(){this.dialogAuthorityVisible=!1}}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-row",[r("el-col",{attrs:{span:24}},[r("el-button-group",[t.groupManager_btn_add?r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handlerAdd}},[t._v("添加")]):t._e(),t._v(" "),t.groupManager_btn_edit?r("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handlerEdit}},[t._v("编辑")]):t._e(),t._v(" "),t.groupManager_btn_del?r("el-button",{attrs:{type:"primary",icon:"el-icon-delete"},on:{click:t.handleDelete}},[t._v("删除")]):t._e(),t._v(" "),t.groupManager_btn_resourceManager?r("el-button",{attrs:{type:"primary"},on:{click:t.handlerAuthority}},[t._v("功能权限分配")]):t._e()],1)],1),t._v(" "),r("el-col",{staticStyle:{"margin-top":"15px"},attrs:{span:8}},[r("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}}),t._v(" "),r("el-tree",{ref:"groupTree",staticClass:"filter-tree",attrs:{data:t.treeData,"node-key":"id","highlight-current":"",props:t.defaultProps,"filter-node-method":t.filterNode,"default-expand-all":""},on:{"node-click":t.getNodeData}})],1),t._v(" "),r("el-col",{staticStyle:{"margin-top":"15px"},attrs:{span:16}},[r("el-form",{ref:"form",attrs:{"label-position":t.labelPosition,"label-width":"80px",model:t.form}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{attrs:{disabled:t.formEdit},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"编码"}},[r("el-input",{attrs:{disabled:t.formEdit},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{disabled:t.formEdit},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),"update"==t.formStatus?r("el-form-item",[t.groupManager_btn_edit?r("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("更新")]):t._e(),t._v(" "),r("el-button",{on:{click:t.onCancel}},[t._v("取消")])],1):t._e(),t._v(" "),"create"==t.formStatus?r("el-form-item",[t.groupManager_btn_add?r("el-button",{attrs:{type:"primary"},on:{click:t.create}},[t._v("保存")]):t._e(),t._v(" "),r("el-button",{on:{click:t.onCancel}},[t._v("取消")])],1):t._e()],1)],1),t._v(" "),r("el-dialog",{attrs:{title:t.dialogUserName,visible:t.dialogUserVisible},on:{"update:visible":function(e){t.dialogUserVisible=e}}},[r("group-user",{ref:"groupUser",attrs:{groupId:t.currentId},on:{closeUserDialog:t.closeUserDialog}})],1),t._v(" "),r("el-dialog",{attrs:{title:t.dialogAuthorityName,size:"large",visible:t.dialogAuthorityVisible},on:{"update:visible":function(e){t.dialogAuthorityVisible=e}}},[r("group-authority",{ref:"groupAuthority",attrs:{groupId:t.currentId},on:{closeAuthorityDialog:t.closeAuthorityDialog}})],1)],1)},staticRenderFns:[]},l={name:"group",components:{tabPane:r("VU/8")(u,s,!1,null,null,null).exports},data:function(){return{tabMapOptions:[],activeName:"secondMConfirm"}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(a.f)().then(function(e){t.tabMapOptions=e.data})}}},d={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-container"},[r("el-tabs",{staticStyle:{"margin-top":"15px"},attrs:{"tab-position":"left"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tabMapOptions,function(e){return r("el-tab-pane",{key:e.id,attrs:{label:e.name,name:e.code}},[r("keep-alive",[t.activeName==e.code?r("tab-pane",{attrs:{type:e.id}}):t._e()],1)],1)}))],1)},staticRenderFns:[]};var c=r("VU/8")(l,d,!1,function(t){r("BCI+")},"data-v-2718ec9e",null);e.default=c.exports},"5uXp":function(t,e,r){"use strict";e.f=function(){return Object(i.a)({url:"/api/admin/groupType/all",method:"get"})},e.p=function(){return Object(i.a)({url:"/api/admin/role/tree",method:"get"})},e.m=function(){return Object(i.a)({url:"/api/admin/org/tree",method:"get"})},e.c=function(t){return Object(i.a)({url:"/api/admin/dataAuthority",method:"get",params:t})},e.e=function(t){return Object(i.a)({url:"/api/admin/group/tree",method:"get",data:t})},e.b=function(t){return Object(i.a)({url:"/api/admin/group",method:"post",data:t})},e.i=function(t){return Object(i.a)({url:"/api/admin/group/"+t,method:"get"})},e.d=function(t){return Object(i.a)({url:"/api/admin/group/"+t,method:"delete"})},e.n=function(t,e){return Object(i.a)({url:"/api/admin/group/"+t,method:"put",data:e})},e.j=function(t){return Object(i.a)({url:"/api/admin/group/"+t+"/user",method:"get"})},e.l=function(t,e){return Object(i.a)({url:"/api/admin/group/"+t+"/user",method:"put",params:e})},e.o=function(t,e){return Object(i.a)({url:"/api/admin/group/"+t+"/authority/element/remove",method:"post",params:e})},e.a=function(t,e){return Object(i.a)({url:"/api/admin/group/"+t+"/authority/element/add",method:"post",params:e})},e.g=function(t){return Object(i.a)({url:"/api/admin/group/"+t+"/authority/element",method:"get"})},e.k=function(t,e){return Object(i.a)({url:"/api/admin/group/"+t+"/authority/menu",method:"post",params:e})},e.h=function(t){return Object(i.a)({url:"/api/admin/group/"+t+"/authority/menu",method:"get"})};var i=r("vLgD")},"BCI+":function(t,e){}});