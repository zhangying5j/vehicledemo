webpackJsonp([103],{Edgu:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),r=a("NYxO"),s={name:"BudgetList",components:{QueryForm:function(){return a.e(115).then(a.bind(null,"Hb8j"))},BaseTable:function(){return a.e(111).then(a.bind(null,"ss0d"))}},data:function(){return{currentPage:1,pageSize:10,budget:{formulateInstitution:"01000",type:"month",channel:"ct",timeSlot:"2018-1",version:"",isUpToDate:"",status:[],bore:"",productType:""},rules:{formulateInstitution:[{required:!0,trigger:"change",message:"预算制定机构不能为空"}],type:[{required:!0,trigger:"change",message:"预算类型不能为空"}],channel:[{required:!0,trigger:"change",message:"预算渠道不能为空"}],timeSlot:[{required:!0,trigger:"change",message:"预算时间段不能为空"}]},columns:[{prop:"subInstitution",label:"预算制定机构",width:140},{prop:"type",label:"预算类型",width:100},{prop:"channel",label:"预算渠道",width:120},{prop:"timeSlot",label:"预算时间段",width:140},{prop:"productType",label:"业务分类",width:100},{prop:"version",label:"版本",width:180},{prop:"status",label:"状态",width:100},{prop:"operation",label:"操作",width:200,operation:!0,operations:[{text:"详情",event:"detail"}]}],dataShow:!1,data:[]}},computed:n()({},Object(r.d)({tableHeader:function(t){return t.app.tableHeader},formData:function(t){return t.budget.formData},queryData:function(t){return t.budget.queryData}}),{currentData:function(){var t=[],e=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a<=this.data.length?this.currentPage*this.pageSize:this.data.length;for(var i=e;i<a;++i)t.push(this.data[i]);return t},timeSlots:function(){var t=[],e=this.budget.type+"";return"month"===e?(t.push({value:"201801",label:"2018第一季度"}),t.push({value:"201802",label:"2018第二季度"}),t.push({value:"201803",label:"2018第三季度"}),t.push({value:"201804",label:"2018第四季度"}),this.resetTime("201801")):"year"===e&&(t.push({value:"2018",label:"2018"}),this.resetTime("2018")),t}}),watch:{queryData:function(t){this.data=t}},methods:{query:function(){this.$refs.queryForm.valid()},getSplitList:function(){var t=this;this.dataShow=!0,this.currentPage=1;var e=this.formData,a=e.companyList.find(function(e){return e.code===t.budget.formulateInstitution}),i=e.types.find(function(e){return e.code===t.budget.type}),n=e.channelList.find(function(e){return e.code===t.budget.channel}),r=i.timeSlots.find(function(e){return e.code===t.budget.timeSlot});this.$store.dispatch("setQueryData",{subInstitution:a.name,type:i.name,channel:n.name,timeSlot:r.name})},detail:function(t){var e=this.budget.formulateInstitution;this.$router.push({path:"/admin/budget/detail/"+e+"/"+t})},modify:function(t){console.log(t)},resetForm:function(t){this.$refs[t].reset(),this.budget.status=[]},resetTime:function(t){this.budget.timeSlot=t},dataChange:function(t,e){this.pageSize=t,this.currentPage=e}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("query-form",{ref:"queryForm",attrs:{budget:t.budget,rules:t.rules,validMethod:"getSplitList"},on:{getSplitList:t.getSplitList}},[a("el-form-item",{attrs:{label:"是否最新",prop:"isUpToDate"}},[a("el-select",{model:{value:t.budget.isUpToDate,callback:function(e){t.$set(t.budget,"isUpToDate",e)},expression:"budget.isUpToDate"}},[a("el-option",{attrs:{value:"1",label:"是"}}),t._v(" "),a("el-option",{attrs:{value:"0",label:"否"}})],1)],1),t._v(" "),a("template",{slot:"last"},[a("el-form-item",{attrs:{label:"确认状态"}},[a("el-checkbox-group",{model:{value:t.budget.status,callback:function(e){t.$set(t.budget,"status",e)},expression:"budget.status"}},[a("el-checkbox",{attrs:{label:"0",name:"type"}},[t._v("未确认")]),t._v(" "),a("el-checkbox",{attrs:{label:"1",name:"type"}},[t._v("已确认")])],1)],1)],1)],2)],1),t._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(e){t.resetForm("queryForm")}}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.query}},[t._v("查询")])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.dataShow,expression:"dataShow"}],staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:t.columns,data:t.currentData,rowKey:"version",pagination:!0,total:t.data.length},on:{detail:t.detail,modify:t.modify,dataChange:t.dataChange}})],1)])])},staticRenderFns:[]},o=a("VU/8")(s,l,!1,null,null,null);e.default=o.exports}});