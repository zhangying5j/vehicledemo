webpackJsonp([104],{oUwX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Dd8w"),i=a.n(r),n=a("NYxO"),l={name:"BudgetDetail",components:{BackButton:function(){return a.e(112).then(a.bind(null,"uOVF"))},QueryForm:function(){return a.e(115).then(a.bind(null,"Hb8j"))},BaseTable:function(){return a.e(111).then(a.bind(null,"ss0d"))},LifeTableAdviseList:function(){return a.e(119).then(a.bind(null,"kHaw"))}},props:{orgCode:{type:String,required:!0},version:{type:String,required:!0}},created:function(){this.$store.dispatch("setQueryDetailData",{orgCode:this.orgCode})},data:function(){return{budget:{formulateInstitution:this.orgCode,type:"",channel:"",timeSlot:"",isUpToDate:"",version:this.version},columns:[{prop:"subInstitution",label:"机构",width:200,align:"right"},{prop:"type",label:"预算类型",width:80},{prop:"channel",label:"预算渠道",width:120},{prop:"timeSlot",label:"预算时间段",width:100},{prop:"productType",label:"业务分类",width:100},{prop:"targetPremium",label:"目标保费收入",width:140},{prop:"targetOperaCostRate",label:"目标保单成本率",width:140},{prop:"targetReimburseRate",label:"目标保单赔付率",width:140},{prop:"targetMarketCostRate",label:"目标手续费率",width:140},{prop:"targetNonMarketCostRate",label:"目标其他费用率",width:140}]}},computed:i()({},Object(n.d)({tableHeader:function(t){return t.app.tableHeader},queryDetailData:function(t){return t.budget.queryDetailData}}))},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("query-form",{ref:"detailForm",attrs:{budget:t.budget}},[a("el-form-item",{attrs:{label:"是否最新",prop:"isUpToDate"}},[a("el-select",{model:{value:t.budget.isUpToDate,callback:function(e){t.$set(t.budget,"isUpToDate",e)},expression:"budget.isUpToDate"}},[a("el-option",{attrs:{value:"1"}},[t._v("是")]),t._v(" "),a("el-option",{attrs:{value:"0"}},[t._v("否")])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"option"}),t._v(" "),a("div",{staticClass:"data"},[a("base-table",{attrs:{columns:t.columns,data:t.queryDetailData,rowKey:"no"}}),t._v(" "),a("div",{staticClass:"option"},[a("back-button",[t._v("返回")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[t._v("下载预算Excel模板")])],1)],1)])},staticRenderFns:[]},s=a("VU/8")(l,o,!1,null,null,null);e.default=s.exports}});