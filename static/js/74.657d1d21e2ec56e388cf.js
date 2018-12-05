webpackJsonp([74],{"7PLz":function(t,e){},Xk55:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Dd8w"),i=a.n(r),o=a("NYxO"),s=a("Z4dx"),l={name:"MyPlan",components:{CommunalPagination:function(){return a.e(115).then(a.bind(null,"jH2g"))}},created:function(){var t=this;Object(s.b)().then(function(e){t.initData=e.data})},data:function(){return{initData:{},lifeTableSearch:{configCostModel:"",orgCode:"",channel:"",version:"",approval:"",activeStatus:"",status:[]},configCostModelList:[{configCostModelCode:"001",configCostModelName:"个车模式"},{configCostModelCode:"002",configCostModelName:"车队模式"}],statusList:[{statusCode:"1",statusName:"待申报"},{statusCode:"2",statusName:"待审批"},{statusCode:"3",statusName:"已审批"},{statusCode:"4",statusName:"待修改"},{statusCode:"5",statusName:"需要重新申报"}],columns:[{prop:"org",width:120,label:"机构",align:"center"},{prop:"planVersionNo",width:240,label:"方案版本号"},{prop:"targetPremium",label:"目标保费收入",width:140},{prop:"targetCostRate",label:"目标保单成本率",width:140},{prop:"targetChangeCostRate",label:"目标变动成本率",width:140},{prop:"targetPayRate",label:"目标保单赔付率",width:140},{prop:"targetFeeRate",label:"目标保单费用率",width:140},{prop:"targetExpPayRate",label:"目标理赔费用率",width:140},{prop:"lossBizRatio",label:"亏损业务占比",width:140},{prop:"lossBizPremium",label:"严重亏损业务保费规模",width:260},{prop:"status",label:"状态",width:120}],columns2:[{prop:"planType",width:120,label:"方案类型"},{prop:"planVersionNo",width:240,label:"方案版本号"},{prop:"targetPremium",label:"目标保费收入",width:140},{prop:"targetCostRate",label:"目标保单成本率",width:140},{prop:"targetChangeCostRate",label:"目标变动成本率",width:140},{prop:"targetPayRate",label:"目标保单赔付率",width:140},{prop:"targetFeeRate",label:"目标保单费用率",width:140},{prop:"targetExpPayRate",label:"目标理赔费用率",width:140},{prop:"lossBizRatio",label:"亏损业务占比",width:140},{prop:"lossBizPremium",label:"严重亏损业务保费规模",width:140},{prop:"ratio",width:120,label:"历史占比"}],data:[{org:"北京分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"未申报"},{version:"0200220180501002",org:"天津分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"审批驳回"},{org:"上海分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"未申报"},{org:"北京分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"未申报"},{org:"天津分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"未申报"},{org:"上海分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"未申报"},{org:"北京分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"未申报"},{org:"天津分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"未申报"},{org:"上海分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"未申报"}],data2:[{id:"1",planType:"单车",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",ratio:"50%"},{id:"2",planType:"车队",planVersionNo:"201801010022356",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",ratio:"25%"},{id:"3",planType:"代理协议",planVersionNo:"201801010037526",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",ratio:"25%"},{id:"4",planType:"合计",planVersionNo:"--",targetPremium:"10000",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",ratio:"100%"}],currentPage:1,pageSize:5}},computed:i()({currentData:function(){var t=[],e=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a<=this.data.length?this.currentPage*this.pageSize:this.data.length;for(var r=e;r<a;++r)t.push(this.data[r]);return t}},Object(o.d)({tableHeader:function(t){return t.app.tableHeader}})),methods:{search:function(t,e){this.currentPage=t,this.pageSize=e,console.log(t)},modify:function(t){this.$router.push({path:"/admin/individual/declare/config"})},active:function(t){this.$router.push({path:"/admin/individual/myplandetail"})},detail:function(t){var e=this.data2.find(function(e){return e.id===t}).planType;"单车"===e?this.$router.push("/admin/individual/query/detail"):"车队"===e?this.$router.push("/admin/fleet/query/detail/5300800002016000004"):"代理协议"===e&&this.$router.push("/admin/agency/query/detail")},commit:function(){this.$message({type:"success",message:"提交成功!"})},resetForm:function(){this.$refs.lifeTableSearchForm.resetFields()}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"lifeTableSearchForm",attrs:{"label-width":"120px",inline:!0,model:t.lifeTableSearch}},[a("el-form-item",{attrs:{label:"机构代码:",prop:"orgCode"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:t.lifeTableSearch.orgCode,callback:function(e){t.$set(t.lifeTableSearch,"orgCode",e)},expression:"lifeTableSearch.orgCode"}},t._l(t.initData.companyList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}},[1===e.flag?a("span",[t._v(" ")]):2===e.flag?a("span",[t._v("   ")]):t._e(),t._v(" "),a("span",[t._v(t._s(e.name))])])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"版本号:",prop:"version"}},[a("el-input",{model:{value:t.lifeTableSearch.version,callback:function(e){t.$set(t.lifeTableSearch,"version",e)},expression:"lifeTableSearch.version"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"活跃状态:",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择活跃状态"},model:{value:t.lifeTableSearch.activeStatus,callback:function(e){t.$set(t.lifeTableSearch,"activeStatus",e)},expression:"lifeTableSearch.activeStatus"}},[a("el-option",{attrs:{label:"活跃",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"休眠",value:"0"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.resetForm}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[t._v("查询")])],1),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.currentData,stripe:"","header-cell-style":t.tableHeader}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{staticStyle:{width:"100%"},attrs:{"show-header":!1,data:t.data2,stripe:"","header-cell-style":t.tableHeader}},[t._l(t.columns2,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align?t.align:"center"}})}),t._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"show",rawName:"v-show",value:"合计"!==e.row.planType,expression:"scope.row.planType !== '合计'"}],attrs:{type:"text",size:"small"},on:{click:function(a){t.detail(e.row.id)}}},[t._v("查看")])]}}])})],2)]}}])}),t._v(" "),t._l(t.columns,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align?t.align:"center"}})}),t._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:t.commit}},[t._v("提交")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[t._v("取消")])]}}])})],2)],1),t._v(" "),a("communal-pagination",{attrs:{currentPage:t.currentPage,pageSize:t.pageSize,total:t.data.length},on:{search:t.search}})],1)])},staticRenderFns:[]};var p=a("VU/8")(l,n,!1,function(t){a("7PLz")},"data-v-339abde4",null);e.default=p.exports}});