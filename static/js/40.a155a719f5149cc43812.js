webpackJsonp([40],{few2:function(t,e){},kQEw:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),n=i.n(a),l=i("NYxO"),s=i("P0XF"),r={name:"CustomTwo",components:{BackButton:function(){return i.e(121).then(i.bind(null,"uOVF"))},BizSectorList:function(){return i.e(122).then(i.bind(null,"jpoa"))}},data:function(){return{itemList:[{title:"年龄",name:"age",detail:[{label:"20以下"},{label:"20-30"},{label:"31-45"},{label:"46-60"},{label:"60以上"}]},{title:"性别",name:"gender",detail:[{label:"男"},{label:"女"}]},{title:"使用性质",name:"usage",detail:[{label:"家庭自用"},{label:"营业出租租赁"},{label:"营业旅游"},{label:"营业货车"},{label:"非营业机关"},{label:"非营业企业"}]},{title:"商业险上年出险金额",name:"rci",detail:[{label:"未投保商业险"},{label:"0-1000"},{label:"1000-2000"},{label:"2000-5000"},{label:"5000-10000"},{label:"10000+"}]},{title:"新车购置价",name:"car-price",detail:[{label:"0-10万"},{label:"10-25万"},{label:"25-40万"},{label:"40万以上"}]},{title:"车龄",name:"car-age",detail:[{label:"0"},{label:"1-3"},{label:"3-6"},{label:"6-10"},{label:"10年以上"}]}],bizData:[{id:"1",bizName:"家庭自用少年",isEdit:!1,tags:["20以下","男","家庭自用"]}],specialTableBtn:{width:"100%",marginTop:"5px",border:"1px dashed #15afff",background:"#fff",color:"#15afff",display:"block"},currentEdit:"",activeName:""}},computed:n()({currentEditIndex:function(){var t=this;return this.bizData.findIndex(function(e){return e.id===t.currentEdit})}},Object(l.d)({tableHeader:function(t){return t.app.tableHeader},sectors:function(t){return t.individual.sectors}})),methods:{getClassBySector:function(t){},edit:function(t){this.currentEditIndex>-1&&(this.bizData[this.currentEditIndex].isEdit=!1),this.currentEdit=t,this.bizData[this.currentEditIndex].isEdit=!0},save:function(){this.bizData[this.currentEditIndex].isEdit=!1,this.currentEdit=""},remove:function(t){var e=this.bizData.findIndex(function(e){return e.id===t});e===this.currentEditIndex&&(this.currentEdit=""),this.bizData.splice(e,1)},addRecord:function(){var t=Object(s.a)(),e={id:t,bizName:"",isEdit:!0,tags:[]};this.bizData.push(e),this.edit(t)},removeTag:function(t){var e=this.bizData[this.currentEditIndex].tags.findIndex(function(e){return e===t});this.bizData[this.currentEditIndex].tags.splice(e,1)},addTag:function(t){this.currentEditIndex>-1&&(-1===this.bizData[this.currentEditIndex].tags.findIndex(function(e){return e===t})&&this.bizData[this.currentEditIndex].tags.push(t))},config:function(){this.$router.push({path:"/admin/source/config/customDisFee/three"})}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"biz-content"},[i("biz-sector-list",{attrs:{title:"选择业务板块",sectors:t.sectors},on:{sectorClick:t.getClassBySector}}),t._v(" "),i("div",{staticClass:"data"},[i("el-row",{attrs:{gutter:10}},[i("el-col",{attrs:{span:6}},[i("el-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.itemList,function(e){return i("el-collapse-item",{key:e.name,attrs:{title:e.title,name:e.name}},[i("div",{staticClass:"grid-content bg-purple dimension-dialog"},[i("div",{staticClass:"dimension"},t._l(e.detail,function(e){return i("div",{key:e.label,staticClass:"item",on:{click:function(i){t.addTag(e.label)}}},[i("span",[t._v(t._s(e.label))])])}))])])}))],1),t._v(" "),i("el-col",{attrs:{span:18}},[i("div",{staticClass:"grid-content bg-purple-dark"},[i("el-table",{staticClass:"tb-edit",attrs:{border:"",size:"mini",data:t.bizData,"header-cell-style":t.tableHeader}},[i("el-table-column",{attrs:{prop:"title",label:"业务小类名称",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isEdit?i("el-input",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"业务小类名称"},model:{value:e.row.bizName,callback:function(i){t.$set(e.row,"bizName",i)},expression:"scope.row.bizName"}}):i("span",[t._v(t._s(e.row.bizName))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"tags",label:"业务小类范围"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.tags,function(a){return i("el-tag",{key:a,attrs:{"disable-transitions":"",size:"small",closable:e.row.isEdit},on:{close:function(e){t.removeTag(a)}}},[t._v("\n                  "+t._s(a)+"\n                ")])})}}])}),t._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top"}},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentEdit!==e.row.id,expression:" currentEdit!== scope.row.id"}],attrs:{size:"small",type:"text",icon:"iconfont icon-bianji"},on:{click:function(i){t.edit(e.row.id)}}})],1),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"保存",placement:"top"}},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentEdit===e.row.id,expression:"currentEdit === scope.row.id"}],staticStyle:{"margin-left":"0"},attrs:{size:"small",type:"text",icon:"iconfont icon-fuzhi"},on:{click:t.save}})],1),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[i("el-button",{staticStyle:{color:"#FE2B6F"},attrs:{type:"text",size:"small",icon:"iconfont icon-iconfont-shanchu"},nativeOn:{click:function(i){i.preventDefault(),t.remove(e.row.id)}}})],1)]}}])})],1),t._v(" "),i("el-button",{style:t.specialTableBtn,attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.addRecord}},[t._v("\n            新增行\n          ")])],1)])],1)],1),t._v(" "),i("div",{staticClass:"option"},[i("back-button",{attrs:{plain:""}},[t._v("上一步")]),t._v(" "),i("back-button",{attrs:{plain:"",type:"next"},on:{next:t.config}},[t._v("下一步")])],1)],1)},staticRenderFns:[]};var o=i("VU/8")(r,c,!1,function(t){i("few2")},"data-v-799b6faf",null);e.default=o.exports}});