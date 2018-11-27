webpackJsonp([103],{"6tQX":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Dd8w"),n=i.n(a),r=i("vLgD");var l=i("NYxO"),o={name:"groupType",data:function(){return{form:{id:void 0,code:void 0,name:void 0,description:void 0},rules:{code:[{required:!0,message:"请输入编码",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入类型名称",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],description:[{required:!0,message:"请输入描述",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}]},list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,name:void 0},dialogFormVisible:!1,dialogStatus:"",groupTypeManager_btn_edit:!1,groupTypeManager_btn_del:!1,groupTypeManager_btn_add:!1,textMap:{update:"编辑",create:"创建"},tableKey:0}},created:function(){this.getList(),this.groupTypeManager_btn_edit=this.elements["groupTypeManager:btn_edit"],this.groupTypeManager_btn_del=this.elements["groupTypeManager:btn_del"],this.groupTypeManager_btn_add=this.elements["groupTypeManager:btn_add"]},computed:n()({},Object(l.c)(["elements"])),methods:{getList:function(){var e,t=this;this.listLoading=!0,(e=this.listQuery,Object(r.a)({url:"/api/admin/groupType/page",method:"get",params:e})).then(function(e){t.list=e.data.rows,t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleCreate:function(){this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(e){var t,i=this;(t=e.id,Object(r.a)({url:"/api/admin/groupType/"+t,method:"get"})).then(function(e){i.form=e.data,i.dialogFormVisible=!0,i.dialogStatus="update"})},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var i;(i=e.id,Object(r.a)({url:"/api/admin/groupType/"+i,method:"delete"})).then(function(){t.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var i=t.list.indexOf(e);t.list.splice(i,1)})})},create:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var i;(i=t.form,Object(r.a)({url:"/api/admin/groupType",method:"post",data:i})).then(function(){t.dialogFormVisible=!1,t.list.push(t.form),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},cancel:function(e){this.dialogFormVisible=!1,this.$refs[e].resetFields()},update:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var i,a;t.dialogFormVisible=!1,t.form.password=void 0,(i=t.form.id,a=t.form,Object(r.a)({url:"/api/admin/groupType/"+i,method:"put",data:a})).then(function(){t.dialogFormVisible=!1;var e=t.list.findIndex(function(e){return e.id===t.form.id});t.$set(t.list,e,t.form),t.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})})})},resetTemp:function(){this.form={id:void 0,code:void 0,name:void 0,description:void 0}}}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"编码或名称"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),e._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),e.groupTypeManager_btn_add?i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("添加\n    ")]):e._e()],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"id",width:"65"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(" "+e._s(t.row.id)+" ")])]}}])}),e._v(" "),i("el-table-column",{attrs:{width:"200px",align:"center",label:"编码"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.code))])]}}])}),e._v(" "),i("el-table-column",{attrs:{width:"220px",align:"center",label:"类型名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),i("el-table-column",{attrs:{width:"200px",align:"center",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(" "+e._s(t.row.description)+" ")])]}}])}),e._v(" "),i("el-table-column",{attrs:{width:"200px",align:"center",label:"最后更新时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(" "+e._s(t.row.updTime))])]}}])}),e._v(" "),i("el-table-column",{attrs:{width:"200px",align:"center",label:"最后更新人"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v("\n          "+e._s(t.row.updName))])]}}])}),e._v(" "),i("el-table-column",{attrs:{width:"200px",align:"center",label:"最后更新主机"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v("\n          "+e._s(t.row.updHost))])]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.groupTypeManager_btn_edit?i("el-button",{attrs:{size:"small",type:"success"},on:{click:function(i){e.handleUpdate(t.row)}}},[e._v("\n          编辑\n        ")]):e._e(),e._v(" "),e.groupTypeManager_btn_del?i("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(i){e.handleDelete(t.row)}}},[e._v("删除\n        ")]):e._e()]}}])})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1),e._v(" "),i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"编码",prop:"code"}},[i("el-input",{attrs:{placeholder:"请输入编码"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"类型名称",prop:"name"}},[i("el-input",{attrs:{placeholder:"请输入类型名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"描述",prop:"description"}},[i("el-input",{attrs:{placeholder:"请输入描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.cancel("form")}}},[e._v("取 消")]),e._v(" "),"create"==e.dialogStatus?i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.create("form")}}},[e._v("确 定")]):i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.update("form")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]},u=i("VU/8")(o,s,!1,null,null,null);t.default=u.exports}});