webpackJsonp([108],{Ugw0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),l=i.n(a),p=i("NYxO"),n={name:"Add",components:{BaseTable:function(){return i.e(111).then(i.bind(null,"ss0d"))}},data:function(){return{targetFeeRateFlag:!1,targetChangeCostRateFlag:!1,tempcolumns:[{prop:"subInstitution",label:"机构",width:160},{prop:"type",label:"预算周期",width:100},{prop:"timeSlot",label:"预算时间段",width:120},{prop:"targetPremium",label:"目标保费收入",width:140,isEdit:!0,type:"input"},{prop:"targetCostRate",label:"目标保单成本率",width:140,isEdit:!0,type:"input",children:[{prop:"targetPayRate",label:"目标保单赔付率",width:140,isEdit:!0,type:"input"},{prop:"targetExpPayRate",label:"目标理赔费用率",width:140,isEdit:!0,type:"input"},{prop:"targetFeeRate",label:"目标保单费用率",width:140,isEdit:!0,type:"input"}]},{prop:"targetChangeCostRate",label:"目标变动成本率",width:140,isEdit:!0,type:"input",children:[{prop:"targetPayRate",label:"目标保单赔付率",width:140,isEdit:!0,type:"input"},{prop:"targetExpPayRate",label:"目标理赔费用率",width:140,isEdit:!0,type:"input"},{prop:"saleRate",label:"销售费用率",width:140,isEdit:!0,type:"input",children:[{prop:"serverFeeRate",label:"手续费率",width:140,isEdit:!0,type:"input"},{prop:"salePersonRate",label:"销售人力薪酬率",width:140,isEdit:!0,type:"input"},{prop:"saleDriverFeeRate",label:"营销推动费用率",width:140,isEdit:!0,type:"input"}]}]},{prop:"targetPayRate",label:"目标保单赔付率",width:140,isEdit:!0,type:"input"},{prop:"targetFeeRate",label:"目标保单费用率",width:140,isEdit:!0,type:"input",children:[{prop:"saleRate",label:"销售费用率",width:140,isEdit:!0,type:"input",children:[{prop:"serverFeeRate",label:"手续费率",width:140,isEdit:!0,type:"input"},{prop:"salePersonRate",label:"销售人力薪酬率",width:140,isEdit:!0,type:"input"},{prop:"saleDriverFeeRate",label:"营销推动费用率",width:140,isEdit:!0,type:"input"}]},{prop:"fixedFeeRate",label:"固定费用率",width:140,isEdit:!0,type:"input"},{prop:"otherFeeRate",label:"其他费用率",width:140,isEdit:!0,type:"input"}]},{prop:"targetExpPayRate",label:"目标理赔费用率",width:140,isEdit:!0,type:"input",children:[{prop:"targetDirectExpPayRate",label:"目标直接理赔费用率",width:140,isEdit:!0,type:"input"},{prop:"targetIndirectExpPayRate",label:"目标间接理赔费用率",width:140,isEdit:!0,type:"input"}]},{prop:"lossBizRatio",label:"亏损业务占比",width:140,isEdit:!0,type:"input"},{prop:"lossBizPremium",label:"严重亏损业务保费规模",width:140,isEdit:!0,type:"input"}],columns:[{prop:"subInstitution",label:"机构",width:160},{prop:"type",label:"预算周期",width:100},{prop:"timeSlot",label:"预算时间段",width:120},{prop:"targetPremium",label:"目标保费收入",width:140,isEdit:!0,type:"input"},{prop:"targetCostRate",label:"目标保单成本率",width:140,isEdit:!0,type:"input"},{prop:"targetChangeCostRate",label:"目标变动成本率",width:140,isEdit:!0,type:"input"},{prop:"targetPayRate",label:"目标保单赔付率",width:140,isEdit:!0,type:"input"},{prop:"targetFeeRate",label:"目标保单费用率",width:140,isEdit:!0,type:"input"},{prop:"targetExpPayRate",label:"目标理赔费用率",width:140,isEdit:!0,type:"input"},{prop:"lossBizRatio",label:"亏损业务占比",width:140,isEdit:!0,type:"input"},{prop:"lossBizPremium",label:"严重亏损业务保费规模",width:140,isEdit:!0,type:"input"}],impDialogVisible:!1}},computed:l()({},Object(p.d)({tableHeader:function(t){return t.app.tableHeader},addData:function(t){return t.budget.addData}})),methods:{hearclick:function(t,e){console.log(t);var i=this.tempcolumns.findIndex(function(e){return e.prop===t.property});this.tempcolumns[i].expand=!0},save:function(){this.columns.forEach(function(t){void 0!==t.isEdit&&(t.isEdit=!1)})},approval:function(){var t=this,e=this.$createElement;this.$msgbox({title:"提示",message:e("p",null,[e("p",null,"①4个季度累计保费收入预算值小于年度保费收入预算值!"),e("p",null,"②4个季度预算加权合计经营成本率大于年度预算经营成本率!"),e("p",{style:"color: blue"},"确定提交审批吗?")]),showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"下发成功!"})}).catch(function(){})},getSummaries:function(t){var e=t.columns,i=t.data,a=[];return i.length>0&&e.forEach(function(t,e){if(0!==e)if(1!==e)if(2!==e)if(3!==e)if(4!==e){var l=i.map(function(i){return 5===e?Number(i[t.property]):Number(i[t.property].replace("%",""))});l.every(function(t){return isNaN(t)})?a[e]="N/A":(a[e]=l.reduce(function(t,e){var i=Number(e);return isNaN(i)?t:t+e},0),5===e?a[e]=a[e].toFixed(2):e>5&&(a[e]/=i.length,a[e]=a[e].toFixed(2),a[e]+="%"))}else a[e]=i[0].productType;else a[e]=i[0].timeSlot;else a[e]=i[0].channel;else a[e]=i[0].type;else a[e]="全国总计:"}),a},download:function(){var t=this;this.$confirm("确定下载预算模板?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"预算模板下载成功!"})}).catch(function(){})},upload:function(){this.impDialogVisible=!1,this.$message({type:"success",message:"导入成功!"}),this.$store.dispatch("uploadData")},exportData:function(){var t=this;this.$confirm("确定导出预算数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"预算数据导出成功!"})}).catch(function(){})}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"data"},[i("div",{staticClass:"table"},[i("el-table",{attrs:{stripe:"",border:"","header-cell-style":t.tableHeader,"max-height":"450",data:t.addData},on:{"header-click":t.hearclick}},t._l(t.tempcolumns,function(e){return i("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,label:e.label,"min-width":e.width,align:e.align?e.align:"center"}},[e.children&&e.expand?t._l(e.children,function(e){return i("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}},[e.children&&e.expand?t._l(e.children,function(t){return i("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align?t.align:"center"}})}):t._e()],2)}):t._e()],2)}))],1),t._v(" "),i("div",{staticClass:"option"},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.download}},[t._v("下载预算模板")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.impDialogVisible=!0}}},[t._v("导入预算数据")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.exportData}},[t._v("导出预算数据")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.save}},[t._v("保存")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.approval}},[t._v("下发")])],1),t._v(" "),i("el-dialog",{attrs:{title:"导入预算数据",visible:t.impDialogVisible,width:"40%"},on:{"update:visible":function(e){t.impDialogVisible=e}}},[i("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[i("el-button",{attrs:{size:"small",type:"primary"}},[t._v("选择文件")]),t._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传excel文件，且不超过500kb")])],1),t._v(" "),i("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.upload}},[t._v("导入")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.impDialogVisible=!1}}},[t._v("关闭")])],1)],1)],1)},staticRenderFns:[]},o=i("VU/8")(n,r,!1,null,null,null);e.default=o.exports}});