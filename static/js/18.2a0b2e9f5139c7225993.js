webpackJsonp([18],{"+5km":function(e,t){},z3ca:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("NYxO"),c={name:"ConfigFee",components:{RecommendStep:function(){return n.e(118).then(n.bind(null,"fWNb"))}},computed:Object(i.d)({stepProcess:function(e){return e.fleet.fleetFeeStepProcess}}),data:function(){return{steps:[{id:"1",title:"车队历史承保信息",icon:"iconfont icon-ziyuan1",path:"/admin/fleet/declare/configfee/hisInfo"},{id:"2",title:"定价因子划分",icon:"iconfont icon-ziyuan2",path:"/admin/fleet/declare/configfee/fleetdim"},{id:"3",title:"定价因子组合",icon:"iconfont icon-ziyuan3",path:"/admin/fleet/declare/configfee/fleetbiz"},{id:"4",title:"差异配费",icon:"iconfont icon-ziyuan4",path:"/admin/fleet/declare/configfee/disconfigfee"},{id:"5",title:"经营结果预测",icon:"iconfont icon-ziyuan5",path:"/admin/fleet/declare/configfee/futresult"}]}},methods:{}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"iv-container"},[t("div",{staticClass:"step"},[t("recommend-step",{attrs:{step:this.stepProcess,steps:this.steps}})],1),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")(c,o,!1,function(e){n("+5km")},"data-v-d18c07f8",null);t.default=s.exports}});