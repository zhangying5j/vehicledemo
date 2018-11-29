webpackJsonp([80],{jqkt:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Dd8w"),i=a.n(l),o=a("NYxO"),r={name:"TableConfig",data:function(){return{tabList:[{code:"carTab",name:"车辆信息表"},{code:"comTab",name:"商业险信息表"}],queryData:{tabName:"carTab"},editData:{title:"投保车辆"},rules:{tabName:[{required:!0,trigger:"blur",message:"查询条件不能为空"}]},rules2:{title:[{required:!0,trigger:"blur",message:"数据信息标题必须设置"}]},specialTableBtn:{width:"100%",marginTop:"5px",border:"1px dashed #15afff",background:"#fff",color:"#15afff",display:"block"},title:"",tabData:[{fieldName:"usePro",searchType:"select",isFlag:"yes",bizType:"usePro"},{fieldName:"carType",searchType:"select",isFlag:"yes",bizType:"carType"},{fieldName:"carColor",searchType:"edit",isFlag:"yes",bizType:""}],searchData:[{tabName:"车辆信息表",fieldName:"usePro",searchType:"select",isFlag:"no",bizType:"usePro"},{tabName:"车辆信息表",fieldName:"carType",searchType:"select",isFlag:"yes",bizType:"carType"}],contentData:[{tabName:"车辆信息表",fieldCName:"使用性质",fieldEName:"usePro",dataType:"varchar(100)",isFlag:"no",bizType:"usePro",isEdit:"yes",editType:"singleSelect",orderNo:"1",showType:"batchEdit"},{tabName:"车辆信息表",fieldCName:"车辆种类",fieldEName:"carType",dataType:"varchar(50)",isFlag:"yes",bizType:"carType",isEdit:"yes",editType:"multiSelect",orderNo:"2",showType:"batchEdit"},{tabName:"车辆信息表",fieldCName:"车辆颜色",fieldEName:"carColor",dataType:"varchar(50)",isFlag:"yes",bizType:"carColor",isEdit:"yes",editType:"edit",orderNo:"3",showType:"batchEdit"},{tabName:"车辆信息表",fieldCName:"车主姓名",fieldEName:"userName",dataType:"varchar(50)",isFlag:"no",bizType:"userName",isEdit:"no",editType:"",orderNo:"4",showType:"batchEdit"},{tabName:"车辆信息表",fieldCName:"购车时间",fieldEName:"buyTime",dataType:"datetime2(7)",isFlag:"yes",bizType:"buyTime",isEdit:"yes",editType:"time",orderNo:"5",showType:"batchEdit"},{tabName:"车辆信息表",fieldCName:"是否购买交强险",fieldEName:"isForce",dataType:"bit",isFlag:"no",bizType:"isForce",isEdit:"yes",editType:"singleSelect",orderNo:"6",showType:"batchEdit"}]}},methods:{queryChange:function(e){},query:function(){var e=this;this.$refs.queryForm.validate(function(t){t&&e.queryData.tabName})},changeField:function(e,t){var a=this.tabData.find(function(t){return t.fieldName===e});this.searchData[t].searchType=a.searchType,this.searchData[t].isFlag=a.isFlag,this.searchData[t].bizType=a.bizType},commit:function(){this.$refs.editForm.validate(function(e){})},add:function(){this.searchData.push({tabName:"车辆信息表",fieldName:"",searchType:"",isFlag:"",bizType:""})},removeRecord:function(e){var t=this;this.$confirm("确定删除此条数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=t.searchData.findIndex(function(t){return t.fieldName===e});t.searchData.splice(a,1),t.$message({type:"success",message:"删除成功!"})}).catch(function(){})}},computed:i()({},Object(o.d)({tableHeader:function(e){return e.app.tableHeader}}))},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"queryForm",attrs:{"label-width":"160px",model:e.queryData,rules:e.rules,inline:!0}},[a("el-form-item",{attrs:{label:"数据表名称",prop:"tabName"}},[a("el-select",{attrs:{placeholder:"请选择数据表名称",filterable:""},on:{change:e.queryChange},model:{value:e.queryData.tabName,callback:function(t){e.$set(e.queryData,"tabName",t)},expression:"queryData.tabName"}},e._l(e.tabList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("查询")])],1)],1),e._v(" "),a("el-form",{ref:"editForm",attrs:{"label-width":"160px",model:e.editData,rules:e.rules2,inline:!0}},[a("el-form-item",{attrs:{label:"维护信息标题设置:",prop:"title"}},[a("el-input",{model:{value:e.editData.title,callback:function(t){e.$set(e.editData,"title",t)},expression:"editData.title"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.searchData,stripe:"","header-cell-style":e.tableHeader}},[a("el-table-column",{attrs:{prop:"tabName",label:"查询表名称","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"fieldName",label:"查询条件字段名称","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择字段"},on:{change:function(a){e.changeField(t.row.fieldName,t.$index)}},model:{value:t.row.fieldName,callback:function(a){e.$set(t.row,"fieldName",a)},expression:"scope.row.fieldName"}},[a("el-option",{attrs:{label:"使用性质",value:"usePro"}}),e._v(" "),a("el-option",{attrs:{label:"车辆种类",value:"carType"}}),e._v(" "),a("el-option",{attrs:{label:"车辆颜色",value:"carColor"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"searchType",label:"查询方式","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择查询方式",disabled:""},model:{value:t.row.searchType,callback:function(a){e.$set(t.row,"searchType",a)},expression:"scope.row.searchType"}},[a("el-option",{attrs:{label:"编辑框",value:"edit"}}),e._v(" "),a("el-option",{attrs:{label:"下拉框",value:"select"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"isFlag",label:"代码标志","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择代码标志",disabled:""},model:{value:t.row.isFlag,callback:function(a){e.$set(t.row,"isFlag",a)},expression:"scope.row.isFlag"}},[a("el-option",{attrs:{label:"是",value:"yes"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"no"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"bizType",label:"代码分类名称","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择代码分类名称",disabled:""},model:{value:t.row.bizType,callback:function(a){e.$set(t.row,"bizType",a)},expression:"scope.row.bizType"}},[a("el-option",{attrs:{label:"使用性质",value:"usePro"}}),e._v(" "),a("el-option",{attrs:{label:"车辆种类",value:"carType"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[a("el-button",{staticStyle:{color:"#FE2B6F"},attrs:{type:"text",size:"small",icon:"iconfont icon-iconfont-shanchu"},nativeOn:{click:function(a){a.preventDefault(),e.removeRecord(t.row.fieldName)}}})],1)]}}])})],1)],1),e._v(" "),a("el-button",{style:e.specialTableBtn,attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.add}},[e._v("\n      新增行\n    ")]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.contentData,stripe:"","header-cell-style":e.tableHeader}},[a("el-table-column",{attrs:{prop:"tabName",label:"数据表名称","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"fieldCName",label:"中文字段名称","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"fieldEName",label:"英文字段名称","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"dataType",label:"数据类型","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"isFlag",label:"代码标志","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择代码标志",disabled:""},model:{value:t.row.isFlag,callback:function(a){e.$set(t.row,"isFlag",a)},expression:"scope.row.isFlag"}},[a("el-option",{attrs:{label:"是",value:"yes"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"no"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"bizType",label:"代码分类名称","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择代码分类名称"},model:{value:t.row.bizType,callback:function(a){e.$set(t.row,"bizType",a)},expression:"scope.row.bizType"}},[a("el-option",{attrs:{label:"使用性质",value:"usePro"}}),e._v(" "),a("el-option",{attrs:{label:"车辆种类",value:"carType"}}),e._v(" "),a("el-option",{attrs:{label:"车辆颜色",value:"carColor"}}),e._v(" "),a("el-option",{attrs:{label:"车主姓名",value:"userName"}}),e._v(" "),a("el-option",{attrs:{label:"购车时间",value:"buyTime"}}),e._v(" "),a("el-option",{attrs:{label:"是否购买交强险",value:"isForce"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"isEdit",label:"可编辑标志","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择可编辑标志"},model:{value:t.row.isEdit,callback:function(a){e.$set(t.row,"isEdit",a)},expression:"scope.row.isEdit"}},[a("el-option",{attrs:{label:"是",value:"yes"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"no"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"editType",label:"编辑方式","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择编辑方式",disabled:"no"===t.row.isEdit},model:{value:t.row.editType,callback:function(a){e.$set(t.row,"editType",a)},expression:"scope.row.editType"}},[a("el-option",{attrs:{label:"编辑框",value:"edit"}}),e._v(" "),a("el-option",{attrs:{label:"下拉单选框",value:"singleSelect"}}),e._v(" "),a("el-option",{attrs:{label:"下拉单选框",value:"multiSelect"}}),e._v(" "),a("el-option",{attrs:{label:"日期选择器",value:"time"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"orderNo",label:"展示顺序","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{placeholder:"请填写展示顺序"},model:{value:t.row.orderNo,callback:function(a){e.$set(t.row,"orderNo",a)},expression:"scope.row.orderNo"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"showType",label:"展示方式模板","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择展示方式模板"},model:{value:t.row.showType,callback:function(a){e.$set(t.row,"showType",a)},expression:"scope.row.showType"}},[a("el-option",{attrs:{label:"横向批量编辑模板",value:"batchEdit"}}),e._v(" "),a("el-option",{attrs:{label:"纵向单条编辑模板",value:"singleEdit"}})],1)]}}])})],1)],1)],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.commit}},[e._v("发布")])],1)])},staticRenderFns:[]};var n=a("VU/8")(r,s,!1,function(e){a("wWRF")},"data-v-26dae261",null);t.default=n.exports},wWRF:function(e,t){}});