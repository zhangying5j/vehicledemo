webpackJsonp([89],{v4rp:function(i,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("NYxO"),d={name:"IndividualVehicle",components:{RecommendStep:function(){return e.e(126).then(e.bind(null,"fWNb"))},QueryForm:function(){return e.e(147).then(e.bind(null,"dQTo"))}},created:function(){this.$store.dispatch("initPriceSteps"),this.querySector()},data:function(){return{steps:[{id:"1",title:"推荐参数配置",icon:"iconfont icon-ziyuan1",path:"/admin/individual/declare/paramConfig"},{id:"2",title:"智能推荐",icon:"iconfont icon-ziyuan2",path:"/admin/individual/declare/recommend"},{id:"3",title:"自定义维度切分",icon:"iconfont icon-ziyuan3",path:"/admin/individual/declare/custom"},{id:"4",title:"确认业务小类结构",icon:"iconfont icon-ziyuan4",path:"/admin/individual/declare/confirm"},{id:"5",title:"编制定价策略",icon:"iconfont icon-ziyuan5",path:"/admin/individual/declare/config"},{id:"6",title:"补充定价规则",icon:"iconfont icon-ziyuan6",path:"/admin/individual/declare/supply"}],disabled:!0}},computed:Object(t.d)({individualSteps:function(i){return i.individual.individualSteps},stepProcess:function(i){return i.individual.stepProcess},lifeFormOptionShow:function(i){return i.individual.lifeFormOptionShow},lifeFormReadOnly:function(i){return i.individual.lifeFormReadOnly},versionFlag:function(i){return i.individual.versionFlag},maxStep:function(i){return i.individual.maxStep}}),methods:{handleStepId:function(i){console.log(i+1);var n=i+1;n>this.maxStep&&this.$store.commit("SET_MAX_STEP",String(n))},querySector:function(){var i=this;this.$store.dispatch("queryParam").then(function(){i.$router.push({path:"/admin/individual/declare/paramConfig"})})},recommend:function(){this.$router.push({path:"/admin/individual/declare/recommend"})}}},a={render:function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("div",{staticClass:"iv-container"},[e("div",{staticClass:"step"},[e("recommend-step",{attrs:{disabled:i.disabled,step:i.stepProcess,maxStep:i.maxStep,steps:i.individualSteps},on:{stepId:i.handleStepId}})],1),i._v(" "),e("div",{staticClass:"c-main"},[e("div",{staticClass:"form"},[e("query-form",{on:{recommend:i.recommend,querySector:i.querySector}})],1),i._v(" "),e("router-view")],1)])},staticRenderFns:[]};var o=e("VU/8")(d,a,!1,function(i){e("wFjf")},"data-v-265f8f13",null);n.default=o.exports},wFjf:function(i,n){}});