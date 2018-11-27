webpackJsonp([135],{"Vq+d":function(e,t,n){"use strict";t.c=function(e){return Object(r.a)({url:"/api/admin/menu/tree",method:"get",params:e})},t.a=function(e){return Object(r.a)({url:"/api/admin/menu",method:"post",data:e})},t.d=function(e){return Object(r.a)({url:"/api/admin/menu/"+e,method:"get"})},t.b=function(e){return Object(r.a)({url:"/api/admin/menu/"+e,method:"delete"})},t.e=function(e,t){return Object(r.a)({url:"/api/admin/menu/"+e,method:"put",data:t})};var r=n("vLgD")},oTjz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),a=n.n(r),i=n("Vq+d"),l=n("xjvr"),u=n("5uXp"),o=n("NYxO"),s={name:"menu",props:{groupId:{default:"1"}},data:function(){return{filterText:"",list:null,total:null,listQuery:{name:void 0},treeData:[],defaultProps:{children:"children",label:"title"},groupManager_menu:!1,groupManager_element:!1}},watch:{filterText:function(e){this.$refs.menuTree.filter(e)}},created:function(){this.getList(),this.groupManager_menu=this.elements["groupManager:menu"],this.groupManager_element=this.elements["groupManager:element"]},computed:a()({},Object(o.c)(["elements"])),methods:{getList:function(){var e=this;Object(i.c)(this.listQuery).then(function(t){e.treeData=t.data,e.initAuthoritys()})},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},getNodeData:function(e){var t=this;this.listQuery.menuId=e.id,Object(l.d)(this.listQuery).then(function(e){t.list=e.data.rows;for(var n={},r=0;r<t.list.length;r++)n[t.list[r].id]=t.list[r];Object(u.g)(t.groupId).then(function(e){for(var r={},a=0;a<e.data.length;a++){var i=e.data[a];void 0!==n[i]&&void 0===r[i]&&(t.$refs.elementTable.toggleRowSelection(n[e.data[a]]),r[i]=!0)}})}),this.currentId=e.id},getTreeNodeKey:function(e){return console.log("key",e.id),e.id},handleSelectionChange:function(e,t){for(var n=!0,r=0;r<e.length;r++)if(e[r].id===t.id){Object(u.a)(this.groupId,{menuId:this.currentId,elementId:t.id}),n=!1;break}n&&Object(u.o)(this.groupId,{menuId:this.currentId,elementId:t.id})},update:function(){var e=this;this.$emit("closeAuthorityDialog");for(var t=this.$refs.menuTree.getCheckedNodes(),n=[],r=0;r<t.length;r++)n.push(t[r].id);Object(u.k)(this.groupId,{menuTrees:n.join()}).then(function(){e.$notify({title:"成功",message:"保存成功",type:"success",duration:2e3})})},initAuthoritys:function(){var e=this;Object(u.h)(this.groupId).then(function(t){for(var n=[],r=0;r<t.data.length;r++)n.push(t.data[r].id);e.$refs.menuTree.setCheckedKeys(n)})}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("el-col",{attrs:{span:24}},[e.groupManager_menu?n("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("保存")]):e._e()],1),e._v(" "),n("el-col",{staticStyle:{"margin-top":"15px"},attrs:{span:8}},[n("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),n("el-tree",{ref:"menuTree",staticClass:"filter-tree",attrs:{"check-strictly":"",data:e.treeData,"show-checkbox":"","node-key":"id","highlight-current":"",props:e.defaultProps,"filter-node-method":e.filterNode,"default-expand-all":""},on:{"node-click":e.getNodeData}})],1),e._v(" "),n("el-col",{staticStyle:{"margin-top":"15px"},attrs:{span:16}},[n("el-table",{ref:"elementTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{select:e.handleSelectionChange}},[e.groupManager_element?n("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),e._v(" "),n("el-table-column",{attrs:{width:"200px",align:"center",label:"资源编码"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("\n            "+e._s(t.row.code))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"200px",align:"center",label:"资源类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("\n            "+e._s(t.row.type))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"200px",align:"center",label:"资源名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("\n            "+e._s(t.row.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"200px",align:"center",label:"资源地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("\n            "+e._s(t.row.uri))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"200px",align:"center",label:"资源请求类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("\n            "+e._s(t.row.method))])]}}])})],1)],1)],1)},staticRenderFns:[]},c=n("VU/8")(s,d,!1,null,null,null);t.default=c.exports},xjvr:function(e,t,n){"use strict";t.d=function(e){return Object(r.a)({url:"/api/admin/element/list",method:"get",params:e})},t.a=function(e){return Object(r.a)({url:"/api/admin/element",method:"post",data:e})},t.c=function(e){return Object(r.a)({url:"/api/admin/element/"+e,method:"get"})},t.b=function(e){return Object(r.a)({url:"/api/admin/element/"+e,method:"delete"})},t.e=function(e,t){return Object(r.a)({url:"/api/admin/element/"+e,method:"put",data:t})};var r=n("vLgD")}});