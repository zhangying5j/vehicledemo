webpackJsonp([9],{"6sld":function(e,t){},"Vq+d":function(e,t,r){"use strict";t.c=function(e){return Object(n.a)({url:"/api/admin/menu/tree",method:"get",params:e})},t.a=function(e){return Object(n.a)({url:"/api/admin/menu",method:"post",data:e})},t.d=function(e){return Object(n.a)({url:"/api/admin/menu/"+e,method:"get"})},t.b=function(e){return Object(n.a)({url:"/api/admin/menu/"+e,method:"delete"})},t.e=function(e,t){return Object(n.a)({url:"/api/admin/menu/"+e,method:"put",data:t})};var n=r("vLgD")},iSzD:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Dd8w"),i=r.n(n),o=r("Vq+d"),a=r("NYxO"),l={name:"menu",components:{"menu-element":function(){return r.e(142).then(r.bind(null,"oVlV"))}},data:function(){return{filterText:"",list:null,total:null,formEdit:!0,formAdd:!0,formStatus:"",showElement:!1,typeOptions:["menu","dirt"],listQuery:{name:void 0},treeData:[],defaultProps:{children:"children",label:"title"},labelPosition:"right",form:{code:void 0,title:void 0,parentId:void 0,href:void 0,icon:void 0,orderNum:void 0,description:void 0,path:void 0,enabled:void 0,type:void 0,attr1:void 0},currentId:-1,menuManager_btn_add:!1,menuManager_btn_edit:!1,menuManager_btn_del:!1}},watch:{filterText:function(e){this.$refs.menuTree.filter(e)}},created:function(){this.getList(),this.menuManager_btn_add=this.elements["menuManager:btn_add"],this.menuManager_btn_del=this.elements["menuManager:btn_del"],this.menuManager_btn_edit=this.elements["menuManager:btn_edit"]},computed:i()({},Object(a.c)(["elements"])),methods:{getList:function(){var e=this;Object(o.c)(this.listQuery).then(function(t){e.treeData=t.data})},filterNode:function(e,t){return!e||-1!==t.title.indexOf(e)},getNodeData:function(e){var t=this;this.formEdit||(this.formStatus="update"),Object(o.d)(e.id).then(function(e){t.form=e.data}),this.currentId=e.id,this.showElement=!0,this.$refs.menuElement.getList()},handlerEdit:function(){this.form.id&&(this.formEdit=!1,this.formStatus="update")},handlerAdd:function(){this.resetForm(),this.formEdit=!1,this.formStatus="create"},handleDelete:function(){var e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.b)(e.currentId).then(function(){e.getList(),e.resetForm(),e.onCancel(),e.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3})})})},update:function(){var e=this;Object(o.e)(this.form.id,this.form).then(function(){e.getList(),e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})},create:function(){var e=this;Object(o.a)(this.form).then(function(){e.getList(),e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})},onCancel:function(){this.formEdit=!0,this.formStatus=""},resetForm:function(){this.form={code:void 0,title:void 0,parentId:this.currentId,href:void 0,icon:void 0,orderNum:void 0,description:void 0,path:void 0,enabled:void 0}}}},d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container calendar-list-container"},[r("div",{staticClass:"filter-container"},[r("el-button-group",[e.menuManager_btn_add?r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handlerAdd}},[e._v("添加")]):e._e(),e._v(" "),e.menuManager_btn_edit?r("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handlerEdit}},[e._v("编辑")]):e._e(),e._v(" "),e.menuManager_btn_del?r("el-button",{attrs:{type:"primary",icon:"el-icon-delete"},on:{click:e.handleDelete}},[e._v("删除")]):e._e()],1)],1),e._v(" "),r("el-row",[r("el-col",{staticStyle:{"margin-top":"15px"},attrs:{span:8}},[r("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),r("el-tree",{ref:"menuTree",staticClass:"filter-tree",attrs:{data:e.treeData,"node-key":"id","highlight-current":"",props:e.defaultProps,"filter-node-method":e.filterNode,"default-expand-all":""},on:{"node-click":e.getNodeData}})],1),e._v(" "),r("el-col",{staticStyle:{"margin-top":"15px"},attrs:{span:16}},[r("el-card",{staticClass:"box-card"},[r("el-form",{ref:"form",attrs:{"label-position":e.labelPosition,"label-width":"80px",model:e.form}},[r("el-form-item",{attrs:{label:"路径编码",prop:"code"}},[r("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入路径编码"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"父级节点",prop:"parentId"}},[r("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入父级节点",readonly:""},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"图标",prop:"icon"}},[r("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入图标"},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"资源路径",prop:"href"}},[r("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入资源路径"},model:{value:e.form.href,callback:function(t){e.$set(e.form,"href",t)},expression:"form.href"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-select",{staticClass:"filter-item",attrs:{disabled:e.formEdit,placeholder:"请输入资源请求类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeOptions,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"排序",prop:"orderNum"}},[r("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入排序"},model:{value:e.form.orderNum,callback:function(t){e.$set(e.form,"orderNum",t)},expression:"form.orderNum"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"前端组件",prop:"attr1"}},[r("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入描述"},model:{value:e.form.attr1,callback:function(t){e.$set(e.form,"attr1",t)},expression:"form.attr1"}})],1),e._v(" "),"update"==e.formStatus?r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("更新")]),e._v(" "),r("el-button",{on:{click:e.onCancel}},[e._v("取消")])],1):e._e(),e._v(" "),"create"==e.formStatus?r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.create}},[e._v("保存")]),e._v(" "),r("el-button",{on:{click:e.onCancel}},[e._v("取消")])],1):e._e()],1)],1),e._v(" "),r("el-card",{staticClass:"box-card align-left"},[r("span",[e._v("按钮或资源")]),e._v(" "),r("menu-element",{ref:"menuElement",attrs:{menuId:e.currentId}})],1)],1)],1)],1)},staticRenderFns:[]};var s=r("VU/8")(l,d,!1,function(e){r("6sld")},"data-v-7aa4de2f",null);t.default=s.exports}});