webpackJsonp([96],{RCfz:function(e,t){},Xk55:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Dd8w"),r=a.n(l),n=a("NYxO"),i=a("Z4dx"),s={name:"MyPlan",components:{CommunalPagination:function(){return a.e(121).then(a.bind(null,"jH2g"))}},created:function(){var e=this;Object(i.b)().then(function(t){e.initData=t.data})},data:function(){return{activeName:"1",initData:{},lifeTableSearch:{configCostModel:"",orgCode:"",channel:"",version:"",approval:"",activeStatus:"",status:[]},configCostModelList:[{configCostModelCode:"001",configCostModelName:"个车模式"},{configCostModelCode:"002",configCostModelName:"车队模式"}],statusList:[{statusCode:"1",statusName:"待申报"},{statusCode:"2",statusName:"待审批"},{statusCode:"3",statusName:"已审批"},{statusCode:"4",statusName:"待修改"},{statusCode:"5",statusName:"需要重新申报"}],columns:[{prop:"planCombNo",width:240,label:"方案组合编号"},{prop:"applyer",label:"申报人",width:140},{prop:"applyDate",label:"申报时间",width:140},{prop:"applystatus",label:"申报状态",width:120}],columns2:[{prop:"planType",width:120,label:"方案类型"},{prop:"planVersionNo",width:240,label:"方案版本号"},{prop:"targetPremium",label:"目标保费收入",width:140},{prop:"targetCostRate",label:"目标保单成本率",width:140},{prop:"targetChangeCostRate",label:"目标变动成本率",width:140},{prop:"targetPayRate",label:"目标保单赔付率",width:140},{prop:"targetFeeRate",label:"目标保单费用率",width:140},{prop:"targetExpPayRate",label:"目标理赔费用率",width:140},{prop:"lossBizRatio",label:"亏损业务占比",width:140},{prop:"lossBizPremium",label:"严重亏损业务保费规模",width:140},{prop:"ratio",width:120,label:"历史占比"}],data:[{planCombNo:"20180101002587",applyer:"张翰",applyDate:"2018-0-1-01",applystatus:"未申报"},{planCombNo:"20180101002587",applyer:"张翰",applyDate:"2018-0-1-01",applystatus:"待审批"},{planCombNo:"20180101002587",applyer:"张翰",applyDate:"2018-0-1-01",applystatus:"审核通过"}],data2:[{id:"1",planType:"单车",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",ratio:"50%"},{id:"2",planType:"车队",planVersionNo:"201801010022356",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",ratio:"25%"},{id:"3",planType:"代理协议",planVersionNo:"201801010037526",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",ratio:"25%"},{id:"4",planType:"合计",planVersionNo:"--",targetPremium:"10000",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",ratio:"100%"}],currentPage:1,pageSize:5}},computed:r()({currentData:function(){var e=[],t=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a<=this.data.length?this.currentPage*this.pageSize:this.data.length;for(var l=t;l<a;++l)e.push(this.data[l]);return e}},Object(n.d)({tableHeader:function(e){return e.app.tableHeader}})),methods:{search:function(e,t){this.currentPage=e,this.pageSize=t,console.log(e)},modify:function(e){this.$router.push({path:"/admin/individual/declare/config"})},active:function(e){this.$router.push({path:"/admin/individual/myplandetail"})},detail:function(e){var t=this.data2.find(function(t){return t.id===e}).planType;"单车"===t?this.$router.push("/admin/individual/query/detail"):"车队"===t?this.$router.push("/admin/fleet/query/detail/5300800002016000004"):"代理协议"===t&&this.$router.push("/admin/agency/query/detail")},commit:function(){this.$message({type:"success",message:"提交成功!"})},resetForm:function(){this.$refs.lifeTableSearchForm.resetFields()}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"biz-content"},[a("div",{staticClass:"form"},[a("el-form",{ref:"lifeTableSearchForm",attrs:{"label-width":"120px",inline:!0,model:e.lifeTableSearch}},[a("el-form-item",{attrs:{label:"机构名称:",prop:"orgCode"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:e.lifeTableSearch.orgCode,callback:function(t){e.$set(e.lifeTableSearch,"orgCode",t)},expression:"lifeTableSearch.orgCode"}},e._l(e.initData.companyList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?a("span",[e._v(" ")]):2===t.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"版本号:",prop:"version"}},[a("el-input",{model:{value:e.lifeTableSearch.version,callback:function(t){e.$set(e.lifeTableSearch,"version",t)},expression:"lifeTableSearch.version"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"活跃状态:",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择活跃状态"},model:{value:e.lifeTableSearch.activeStatus,callback:function(t){e.$set(e.lifeTableSearch,"activeStatus",t)},expression:"lifeTableSearch.activeStatus"}},[a("el-option",{attrs:{label:"活跃",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"休眠",value:"0"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("查询")])],1),e._v(" "),a("el-tabs",{attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"方案组合",name:"1"}},[a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentData,stripe:"","header-cell-style":e.tableHeader}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-table",{staticStyle:{width:"100%"},attrs:{"show-header":!1,data:e.data2,stripe:"","header-cell-style":e.tableHeader}},[e._l(e.columns2,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"show",rawName:"v-show",value:"合计"!==t.row.planType,expression:"scope.row.planType !== '合计'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.detail(t.row.id)}}},[e._v("查看")])]}}])})],2)]}}])}),e._v(" "),e._l(e.columns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:e.commit}},[e._v("提交")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("取消")])]}}])})],2)],1),e._v(" "),a("communal-pagination",{attrs:{currentPage:e.currentPage,pageSize:e.pageSize,total:e.data.length},on:{search:e.search}})],1)]),e._v(" "),a("el-tab-pane",{attrs:{label:"车队协议",name:"2"}},[a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentData,stripe:"","header-cell-style":e.tableHeader}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-table",{staticStyle:{width:"100%"},attrs:{"show-header":!1,data:e.data2,stripe:"","header-cell-style":e.tableHeader}},[e._l(e.columns2,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"show",rawName:"v-show",value:"合计"!==t.row.planType,expression:"scope.row.planType !== '合计'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.detail(t.row.id)}}},[e._v("查看")])]}}])})],2)]}}])}),e._v(" "),e._l(e.columns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:e.commit}},[e._v("提交")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("取消")])]}}])})],2)],1),e._v(" "),a("communal-pagination",{attrs:{currentPage:e.currentPage,pageSize:e.pageSize,total:e.data.length},on:{search:e.search}})],1)]),e._v(" "),a("el-tab-pane",{attrs:{label:"代理协议",name:"3"}},[a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentData,stripe:"","header-cell-style":e.tableHeader}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-table",{staticStyle:{width:"100%"},attrs:{"show-header":!1,data:e.data2,stripe:"","header-cell-style":e.tableHeader}},[e._l(e.columns2,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"show",rawName:"v-show",value:"合计"!==t.row.planType,expression:"scope.row.planType !== '合计'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.detail(t.row.id)}}},[e._v("查看")])]}}])})],2)]}}])}),e._v(" "),e._l(e.columns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:e.commit}},[e._v("提交")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("取消")])]}}])})],2)],1),e._v(" "),a("communal-pagination",{attrs:{currentPage:e.currentPage,pageSize:e.pageSize,total:e.data.length},on:{search:e.search}})],1)])],1)],1)},staticRenderFns:[]};var p=a("VU/8")(s,o,!1,function(e){a("RCfz")},"data-v-08ae439b",null);t.default=p.exports}});