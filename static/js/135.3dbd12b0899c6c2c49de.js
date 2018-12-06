webpackJsonp([135],{"7COU":function(e,t){},b1QR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("NYxO"),r=a("Z4dx"),i={name:"TabTable",components:{BizSectorList:function(){return a.e(122).then(a.bind(null,"jpoa"))}},data:function(){return{totalData:[],dataSource:[],currentSector:0,columns:[{prop:"bizSmallType",label:"业务单元",children:[{prop:"insureCombine",label:"投保组合",width:200,align:"center"},{prop:"lastYearAmount",label:"商业险上年出险金额",width:200,align:"center"},{prop:"age",label:"年龄",width:120,align:"center"}]},{prop:"intelligence",label:"智能推荐结果",children:[{prop:"comAuto",label:"商业自主系数",width:120,align:"center"},{prop:"market",label:"车险市场费用率",width:130,align:"center"}]},{prop:"paramConfig",label:"参数配置",children:[{prop:"exptocost",label:"目标车险保单成本率",width:200,align:"center"},{prop:"expbicost",label:"目标商业险保单成本率",width:210,align:"center"},{prop:"psmode",label:"定价策略模式",width:170,align:"center"},{prop:"fupayrate",label:"赔付率预测值",width:170,align:"center"},{prop:"autorate",label:"自主折扣系数",width:170,align:"center"},{prop:"marketrate",label:"手续费率",width:170,align:"center"},{prop:"payrate",label:"目标赔付率",width:240,align:"center"},{prop:"hisfullpayrate",label:"历史满期赔付率",width:240,align:"center"},{prop:"exppayrate",label:"预期赔付率",width:240,align:"center"}]},{prop:"carInsurance",label:"经营结果目标",children:[{prop:"costRate",label:"目标保单成本率(%)",width:120,align:"center"},{prop:"changecostrate",label:"目标变动成本率",width:120,align:"center"},{prop:"payRate",label:"目标保单赔付率(%)",width:140,align:"center"},{prop:"feeRate",label:"目标保单费用率(%)",width:120,align:"center"},{prop:"claimRate",label:"目标理赔费用率(%)",width:120,align:"center"},{prop:"serverRate",label:"目标手续费率(%)",width:120,align:"center"},{prop:"otherRate",label:"目标其他费用率(%)",width:120,align:"center"},{prop:"discoutRate",label:"目标折扣率(%)",width:120,align:"center"},{prop:"fupremium",label:"年度保费规模预测值",width:120,align:"center"},{prop:"fucostRate",label:"预测保单成本率(%)",width:120,align:"center"},{prop:"fuchangecostrate",label:"预测变动成本率",width:240,align:"center"},{prop:"fupayRate",label:"预测保单赔付率(%)",width:140,align:"center"},{prop:"fufeeRate",label:"预测保单费用率(%)",width:120,align:"center"},{prop:"fuclaimRate",label:"预测理赔费用率(%)",width:120,align:"center"},{prop:"fuserverRate",label:"预测手续费率(%)",width:120,align:"center"},{prop:"fuotherRate",label:"预测其他费用率(%)",width:120,align:"center"},{prop:"fudiscoutRate",label:"预测折扣率(%)",width:120,align:"center"}]},{prop:"disCarInsurance",label:"目标偏离程度",children:[{prop:"discostRate",label:"偏离目标保单成本率",width:120,align:"center"},{prop:"dischangecostrate",label:"偏离目标变动成本率",width:240,align:"center"},{prop:"dispayRate",label:"偏离目标保单赔付率",width:140,align:"center"},{prop:"disfeeRate",label:"偏离目标保单费用率",width:120,align:"center"},{prop:"disclaimRate",label:"偏离目标理赔费用率",width:120,align:"center"},{prop:"disserverRate",label:"偏离目标手续费率",width:120,align:"center"},{prop:"disotherRate",label:"偏离目标其他费用率",width:120,align:"center"},{prop:"disdiscoutRate",label:"偏离目标折扣率",width:120,align:"center"}]}]}},computed:Object(l.d)({sectors:function(e){return e.individual.sectors},tableHeader:function(e){return e.app.tableHeader}}),created:function(){var e=this;Object(r.c)(this.param).then(function(t){e.totalData=t.data;var a=t.data.map(function(e){return{id:e.id,name:e.name}});e.$store.commit("SET_SECTORS",a),e.dataSource=t.data[e.currentSector].detailData})},methods:{sectorClick:function(e){this.currentSector=this.sectors.findIndex(function(t){return t.id===e}),this.dataSource=this.totalData[this.currentSector].detailData}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("biz-sector-list",{attrs:{title:"选择业务板块",sectors:e.sectors},on:{sectorClick:e.sectorClick}}),e._v(" "),a("div",{staticClass:"title"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary",plain:"",size:"small"}},[e._v("导出")])],1)]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{height:"450",data:e.dataSource,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.columns,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}},e._l(t.children,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))}))],1)])])},staticRenderFns:[]};var c=a("VU/8")(i,n,!1,function(e){a("7COU")},"data-v-f01fe260",null);t.default=c.exports}});