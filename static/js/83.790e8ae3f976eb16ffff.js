webpackJsonp([83],{"5YAR":function(e,t){},EUY8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),o=n.n(a),r=n("lDdF"),s=n.n(r),i=n("uXZL"),l=n.n(i),c=n("NYxO"),u=n("6D10"),d={name:"ReportCustom",components:{BaseTable:function(){return n.e(106).then(n.bind(null,"ss0d"))}},mounted:function(){this.currentDimCode=["channel","carFlag","carPrice","usage","age","insCom"],this.currentIndexCode=["org","channel","carFlag","totalPremium","yearCompPremium","monthCompPremium","curMonthPremium","curYearPremium","comFullRate"]},data:function(){return{activeName:"select",params:{scene:"",insMonth:"201808",secondOrg:"01000",thirdOrg:"02001",channel:"",carFlag:""},thirdOrgList:[{code:"02001",name:"朝阳支公司"},{code:"02002",name:"丰台支公司"},{code:"02003",name:"大兴支公司"},{code:"02004",name:"东城支公司"},{code:"02005",name:"通州支公司"},{code:"02006",name:"房山支公司"},{code:"02007",name:"平谷支公司"},{code:"02008",name:"顺义支公司"},{code:"02009",name:"延庆支公司"},{code:"02010",name:"昌平支公司"},{code:"02011",name:"怀柔支公司"},{code:"02012",name:"海淀支公司"}],rules:{},columnShowList:[],indexShow:!1,detailShow:!1,currentDimCode:[],currentIndexCode:[],dimColumn:[],indexColumn:[],releaseDialogShow:!1,setKeyWords:[],report:{reportName:"",keyWord:""},selectShow:!1,secondShow:!1,expandFlag:!1,selectColumn:[],columnChangeList:[],showColumn:[]}},created:function(){this.$store.dispatch("initCustomFormData")},computed:o()({currentDimList:function(){var e=this;return this.currentDimCode.map(function(t){return e.customFormData.dimList.find(function(e){return e.code===t})})},currentIndexList:function(){var e=this,t=[];return this.customFormData.dimList.forEach(function(n){e.currentIndexCode.includes(n.code)&&t.push(n)}),this.customFormData.indexList.forEach(function(n){e.currentIndexCode.includes(n.code)&&t.push(n)}),t},columns:function(){var e=[];return this.thirdShow&&this.indexColumn.length>0&&e.push({prop:"thirdOrg",width:120,label:"三级机构"}),e.concat(this.indexColumn)},thirdShow:function(){return this.secondShow&&this.expandFlag},keyWords:function(){var e=this.dimColumn.map(function(e){return e.label}),t=this.indexColumn.map(function(e){return e.label});return e.concat(t).concat(this.setKeyWords)},mergeData:function(){return Object(u.a)(this.thirdData,["secondOrg"])}},Object(c.d)({tableHeader:function(e){return e.app.tableHeader},customFormData:function(e){return e.chart.customFormData},tableData:function(e){return e.chart.tableData},thirdData:function(e){return e.chart.thirdData}})),watch:{currentDimList:function(e){var t=this;this.dimColumn=[],e.forEach(function(e){t.dimColumn.push({prop:e.code,label:e.name,width:e.width})})},currentIndexCode:function(e){console.log(e),e.includes("org")?this.secondShow=!0:this.secondShow=!1},currentIndexList:function(e){var t=this;this.indexColumn=[],e.forEach(function(e){"org"!==e.code&&t.indexColumn.push({prop:e.code,label:e.name,width:e.width})})},columns:function(e){this.columnChangeList=e}},methods:{toggleChoose:function(){this.activeName=!this.activeName},expandChange:function(e,t){t.length>0?this.expandFlag=!0:this.expandFlag=!1},merge:function(e){var t=e.row,n=e.column;e.rowIndex,e.columnIndex;if(["secondOrg"].includes(n.property)){if(t.rowSpan[n.property]>1)return[t.rowSpan[n.property],1];if(0===t.rowSpan[n.property])return[0,0]}},getThridOrg:function(e){var t=this.customFormData.orgList.find(function(t){return t.code===e});this.thirdOrgList=t.children},addIndex:function(e){this.currentIndexCode.includes(e)||this.currentIndexCode.push(e)},removeIndex:function(e){this.currentIndexCode.splice(this.currentIndexCode.indexOf(e),1)},query:function(){""===this.params.insMonth||""===this.params.secondOrg||""===this.params.thirdOrg?this.$message({type:"warning",message:"数据量过大，建议先选择承保月份、二级机构、三级机构等条件以缩小选择范围"}):(this.$store.dispatch("getTabData"),this.$store.dispatch("getThirdData"))},release:function(){var e=this;this.$confirm("确定发布该自定义报表吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"发布成功!"})}).catch(function(){})},addKeyWord:function(){var e=this.report.keyWord;""!==e&&(-1===this.keyWords.findIndex(function(t){return t===e})?this.setKeyWords.push(e):this.$message({type:"warning",message:"该关键字已存在，不能重复添加!"}))},exportData:function(){var e=this;this.$confirm("确定导出该报表数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"报表数据导出成功!"});var t=l.a.utils.table_to_book(document.querySelector("#out-table")),n=l.a.write(t,{bookType:"xlsx",bookSST:!0,type:"array"});try{s.a.saveAs(new Blob([n],{type:"application/octet-stream"}),"固定报表数据.xlsx")}catch(e){"undefined"!=typeof console&&console.info(e,n)}return n}).catch(function(){})},leftMove:function(){var e=this;if(""===this.selectColumn)this.$message({type:"warning",message:"请至少选择一列，再进行左移操作!"});else{var t=this.columnChangeList.findIndex(function(t){return t.prop===e.selectColumn});if(0===t)this.$message({type:"warning",message:"已经是最左列，不能左移!"});else{this.showColumn=[];var n=this.columnChangeList[t];this.columnChangeList.splice(t,1),this.columnChangeList.splice(t-1,0,n)}}},rightMove:function(){var e=this;if(""===this.selectColumn)this.$message({type:"warning",message:"请至少选择一列，再进行右移操作!"});else{var t=this.columnChangeList.findIndex(function(t){return t.prop===e.selectColumn});if(t===this.columnChangeList.length-1)this.$message({type:"warning",message:"已经是最右列，不能右移!"});else{this.showColumn=[];var n=this.columnChangeList[t];this.columnChangeList.splice(t,1),this.columnChangeList.splice(t+1,0,n)}}},createTable:function(){this.showColumn=this.columnChangeList}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"form",staticStyle:{"margin-top":"30px"}},[n("el-form",{ref:"chartForm",attrs:{"label-width":"180px",model:e.params,rules:e.rules,inline:!0}},[n("el-form-item",{attrs:{label:"统计月份",prop:"insMonth"}},[n("el-select",{attrs:{placeholder:"请选择统计月份"},model:{value:e.params.insMonth,callback:function(t){e.$set(e.params,"insMonth",t)},expression:"params.insMonth"}},e._l(e.customFormData.insMonthList,function(e){return n("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"二级机构",prop:"secondOrg"}},[n("el-select",{attrs:{placeholder:"请选择二级机构"},on:{change:e.getThridOrg},model:{value:e.params.secondOrg,callback:function(t){e.$set(e.params,"secondOrg",t)},expression:"params.secondOrg"}},e._l(e.customFormData.orgList,function(e){return n("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"三级机构",prop:"thirdOrg"}},[n("el-select",{attrs:{placeholder:"请选择三级机构",clearable:""},model:{value:e.params.thirdOrg,callback:function(t){e.$set(e.params,"thirdOrg",t)},expression:"params.thirdOrg"}},e._l(e.thirdOrgList,function(e){return n("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),e._l(e.currentDimList,function(t){return n("el-form-item",{key:t.code,attrs:{label:t.name,prop:t.name}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.params[t.code],callback:function(n){e.$set(e.params,t.code,n)},expression:"params[dim.code]"}},e._l(t.detail,function(e){return n("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1)})],2)],1),e._v(" "),n("div",{staticStyle:{"text-align":"center",margin:"10px auto"}},[n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary"},on:{click:function(t){e.selectShow=!e.selectShow}}},[n("span",[e._v("业务报表设置")]),e._v(" "),e.selectShow?n("i",{staticClass:"el-icon-arrow-up"}):n("i",{staticClass:"el-icon-arrow-down"})]),e._v(" "),n("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.createTable}},[e._v("生成动态表格")]),e._v(" "),n("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("查询")]),e._v(" "),n("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:function(t){e.releaseDialogShow=!0}}},[e._v("发布")]),e._v(" "),n("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.exportData}},[e._v("导出")])],1),e._v(" "),n("el-card",{directives:[{name:"show",rawName:"v-show",value:e.selectShow,expression:"selectShow"}],staticClass:"box-card"},[n("div",{staticClass:"clearfix text-center",staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[n("span",[e._v("业务报表设置")]),e._v(" "),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[n("i",{staticClass:"el-icon-arrow-down",on:{click:e.toggleChoose}})])],1),e._v(" "),n("el-collapse-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.activeName,expression:"activeName"}]},[n("div",{staticClass:"sector-list"},[n("div",{staticClass:"title"},[e._v("选择查询条件")]),e._v(" "),n("div",{staticClass:"biz-sector"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:24}},[n("el-form",{attrs:{"label-width":"120px",inline:!0}},[n("el-form-item",[n("el-checkbox-group",{model:{value:e.currentDimCode,callback:function(t){e.currentDimCode=t},expression:"currentDimCode"}},e._l(e.customFormData.dimList,function(t){return n("el-checkbox",{key:t.code,attrs:{label:t.code}},[e._v(e._s(t.name))])}))],1)],1)],1)],1)],1)]),e._v(" "),n("div",{staticClass:"sector-list"},[n("div",{staticClass:"title"},[e._v("选择展示信息项")]),e._v(" "),n("div",{staticClass:"biz-sector"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"grid-content bg-purple-light"},[n("div",{staticClass:"tag"},[e._l(e.currentIndexList,function(t){return n("el-tag",{key:t.code,attrs:{closable:"",type:"primary"},on:{close:function(n){e.removeIndex(t.code)}}},[e._v("\n                      "+e._s(t.name)+"\n                    ")])}),e._v(" "),n("el-button",{attrs:{size:"small",plain:"",icon:"el-icon-plus"},on:{click:function(t){e.indexShow=!0}}},[e._v("新增展示信息项")])],2)])])],1)],1)]),e._v(" "),n("div",{staticClass:"sector-list"},[n("div",{staticClass:"title"},[e._v("表格布局设置")]),e._v(" "),n("div",{staticClass:"biz-sector"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:24}},[n("el-form",{attrs:{"label-width":"120px",inline:!0}},[n("el-form-item",[n("el-button",{attrs:{type:"text"}},[n("i",{staticClass:"el-icon-d-arrow-left",on:{click:e.leftMove}}),e._v(" "),n("span",{on:{click:e.leftMove}},[e._v("左移")])]),e._v(" "),n("el-button",{attrs:{type:"text"}},[n("span",{on:{click:e.rightMove}},[e._v("右移")]),e._v(" "),n("i",{staticClass:"el-icon-d-arrow-right",on:{click:e.rightMove}})])],1),e._v(" "),n("el-form-item",[n("el-radio-group",{model:{value:e.selectColumn,callback:function(t){e.selectColumn=t},expression:"selectColumn"}},e._l(e.columnChangeList,function(t){return n("el-radio",{key:t.prop,attrs:{label:t.prop}},[e._v(e._s(t.label))])}))],1)],1)],1)],1)],1)])])])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showColumn.length>0,expression:"showColumn.length > 0"}],staticClass:"data"},[n("div",{staticClass:"table"},[n("el-table",{attrs:{stripe:"",border:"","header-cell-style":e.tableHeader,"max-height":"450",id:"out-table",data:e.tableData},on:{"expand-change":e.expandChange}},[n("el-table-column",{attrs:{prop:"insMonth",label:"统计月份",width:"120",align:"center"}}),e._v(" "),e.secondShow?n("el-table-column",{attrs:{prop:"secondOrg",label:"二级机构",width:"120",align:"center"}}):e._e(),e._v(" "),e.secondShow?n("el-table-column",{attrs:{type:"expand",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-table",{attrs:{width:"100%",stripe:"",border:"","header-cell-style":e.tableHeader,"show-header":!1,data:e.mergeData,spanMethod:e.merge}},[n("el-table-column",{attrs:{prop:"insMonth",label:"统计月份",width:"120",align:"center"}}),e._v(" "),e.secondShow?n("el-table-column",{attrs:{prop:"secondOrg",label:"二级机构",width:"170",align:"center"}}):e._e(),e._v(" "),e._l(e.showColumn,function(e){return n("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label}})})],2)]}}])}):e._e(),e._v(" "),e._l(e.showColumn,function(e){return n("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label}})})],2)],1)]),e._v(" "),n("el-dialog",{attrs:{title:"选择展示信息项",visible:e.indexShow,width:"50%"},on:{"update:visible":function(t){e.indexShow=t}}},[n("p",[e._v("选择维度")]),e._v(" "),e._l(e.customFormData.dimList,function(t){return n("el-tag",{key:t.code,attrs:{type:e.currentIndexCode.includes(t.code)?"primary":"info"},nativeOn:{click:function(n){e.addIndex(t.code)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])}),e._v(" "),n("p",[e._v("选择指标")]),e._v(" "),e._l(e.customFormData.indexList,function(t){return n("el-tag",{key:t.code,attrs:{type:e.currentIndexCode.includes(t.code)?"primary":"info"},nativeOn:{click:function(n){e.addIndex(t.code)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])})],2),e._v(" "),n("el-dialog",{attrs:{title:"完善报表信息",visible:e.releaseDialogShow,width:"50%"},on:{"update:visible":function(t){e.releaseDialogShow=t}}},[n("div",{staticClass:"form"},[n("el-form",{ref:"reportForm",attrs:{"label-width":"125px",model:e.report}},[n("el-form-item",{attrs:{label:"报表名称：",prop:"reportName"}},[n("el-input",{model:{value:e.report.reportName,callback:function(t){e.$set(e.report,"reportName",t)},expression:"report.reportName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"报表关键字：",prop:"keyWord"}},[n("el-input",{attrs:{placeholder:"请添加报表关键字"},model:{value:e.report.keyWord,callback:function(t){e.$set(e.report,"keyWord",t)},expression:"report.keyWord"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-circle-plus-outline"},on:{click:e.addKeyWord},slot:"append"})],1),e._v(" "),n("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.release}},[e._v("发布")])],1),e._v(" "),n("el-form-item",{attrs:{label:"报表已有关键字",prop:"keyWord"}},e._l(e.keyWords,function(t){return n("el-tag",{key:t,attrs:{closable:"",type:"primary"},on:{close:function(n){e.removeKey(t)}}},[e._v("\n            "+e._s(t)+"\n          ")])}))],1)],1)])],1)},staticRenderFns:[]};var p=n("VU/8")(d,m,!1,function(e){n("5YAR")},"data-v-08bfff5c",null);t.default=p.exports}});