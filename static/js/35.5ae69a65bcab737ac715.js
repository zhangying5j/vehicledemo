webpackJsonp([35],{gsra:function(e,t){},v4rp:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("NYxO"),r={name:"IndividualVehicle",components:{RecommendStep:function(){return i.e(118).then(i.bind(null,"fWNb"))},QueryForm:function(){return i.e(139).then(i.bind(null,"dQTo"))}},created:function(){this.$store.dispatch("initPriceSteps")},data:function(){return{}},computed:Object(n.d)({individualSteps:function(e){return e.individual.individualSteps},stepProcess:function(e){return e.individual.stepProcess},lifeFormOptionShow:function(e){return e.individual.lifeFormOptionShow},lifeFormReadOnly:function(e){return e.individual.lifeFormReadOnly},versionFlag:function(e){return e.individual.versionFlag}}),methods:{querySector:function(){var e=this;this.$store.dispatch("queryParam").then(function(){e.$router.push({path:"/admin/individual/declare/paramConfig"})})},recommend:function(){this.$router.push({path:"/admin/individual/declare/recommend"})}}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"iv-container"},[t("div",{staticClass:"step"},[t("recommend-step",{attrs:{step:this.stepProcess,steps:this.individualSteps}})],1),this._v(" "),t("div",{staticClass:"c-main"},[t("div",{staticClass:"form"},[t("query-form",{on:{recommend:this.recommend,querySector:this.querySector}})],1),this._v(" "),t("router-view")],1)])},staticRenderFns:[]};var o=i("VU/8")(r,s,!1,function(e){i("gsra")},"data-v-9699efa4",null);t.default=o.exports}});