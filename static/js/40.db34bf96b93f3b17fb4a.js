webpackJsonp([40],{"3Ags":function(e,a){},ghDE:function(e,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t={name:"BizSector",components:{QueryForm:function(){return i.e(125).then(i.bind(null,"xen3"))},BaseTable:function(){return i.e(112).then(i.bind(null,"ss0d"))},Budget:function(){return i.e(1).then(i.bind(null,"otlB"))}},data:function(){return{warnTableVisible:!1,inspect:{org:"27000",channel:"ct",type:"month",timeRange:"2018Q1",version:"50000201801010900"},columns:[{prop:"bizName",width:150,label:"个车分类生命表(业务板块)",align:"center"},{prop:"premiumIncome",width:240,label:"保费收入",align:"center",children:[{prop:"realIncome",width:120,label:"实际值(万元)",align:"center"},{prop:"incomePercent",width:120,label:"占比(%)",align:"center"}]},{prop:"operationCostRate",width:120,label:"综合成本率",align:"center",children:[{prop:"expOperation",width:120,label:"预算值(%)",align:"center"},{prop:"realOperation",width:120,label:"实际值(%)",align:"center"},{prop:"disOperation",width:120,label:"二者差(%)",align:"center"}]},{prop:"marketCostRate",width:120,label:"手续费率",align:"center",children:[{prop:"expMarket",width:120,label:"预算值(%)",align:"center"},{prop:"realMarket",width:120,label:"实际值(%)",align:"center"},{prop:"disMarket",width:120,label:"二者差(%)",align:"center"}]},{prop:"finalPayRate",width:120,label:"终极赔付率",align:"center",children:[{prop:"expFinal",width:120,label:"预算值(%)",align:"center"},{prop:"realFinal",width:120,label:"实际值(%)",align:"center"},{prop:"disFinal",width:120,label:"二者差(%)",align:"center"}]}],bizData:[{id:"1",bizName:"家庭自用客车",realIncome:"8647.78",incomePercent:"26.92",expOperation:"97.6",realOperation:"98.2",disOperation:"0.6",expMarket:"16.8",realMarket:"17.5",disMarket:"0.7",expFinal:"56.89",realFinal:"56.86",disFinal:"-0.03"},{id:"2",bizName:"非营业企业客车",realIncome:"5126.99",incomePercent:"15.96",expOperation:"97.9",realOperation:"97.7",disOperation:"-0.2",expMarket:"20.1",realMarket:"21.3",disMarket:"1.2",expFinal:"59",realFinal:"58.6",disFinal:"-0.4"},{id:"3",bizName:"营业客车",realIncome:"5033.83",incomePercent:"15.67",expOperation:"97.4",realOperation:"97.3",disOperation:"-0.1",expMarket:"17.2",realMarket:"18.5",disMarket:"1.3",expFinal:"57.2",realFinal:"57.6",disFinal:"0.4"},{id:"4",bizName:"非营业货车",realIncome:"2605.25",incomePercent:"8.11",expOperation:"97.6",realOperation:"98.2",disOperation:"0.6",expMarket:"16.8",realMarket:"17.5",disMarket:"0.7",expFinal:"56.89",realFinal:"56.86",disFinal:"-0.03"},{id:"5",bizName:"营业货车",realIncome:"2563.50",incomePercent:"7.98",expOperation:"97.9",realOperation:"97.7",disOperation:"-0.2",expMarket:"20.1",realMarket:"21.3",disMarket:"1.2",expFinal:"59",realFinal:"58.6",disFinal:"-0.4"},{id:"6",bizName:"特种车",realIncome:"2512.10",incomePercent:"7.82",expOperation:"97.4",realOperation:"97.3",disOperation:"-0.1",expMarket:"17.2",realMarket:"18.5",disMarket:"1.3",expFinal:"57.2",realFinal:"57.6",disFinal:"0.4"},{id:"7",bizName:"摩托车和拖拉机",realIncome:"5634.55",incomePercent:"17.54",expOperation:"97.6",realOperation:"98.2",disOperation:"0.6",expMarket:"16.8",realMarket:"17.5",disMarket:"0.7",expFinal:"56.89",realFinal:"56.86",disFinal:"-0.03"},{id:"8",bizName:"合计",realIncome:"32124",incomePercent:"100",expOperation:"97.62",realOperation:"97.86",disOperation:"0.24",expMarket:"17.68",realMarket:"18.64",disMarket:"0.96",expFinal:"57.47",realFinal:"57.45",disFinal:"-0.018"}]}},methods:{inspectTable:function(){},exportTable:function(){},sum:function(e){var a=e.columns,i=e.data,t=[];return a.forEach(function(e,a){0===a?t[a]="合计":(t[a]=0,i.forEach(function(i){t[a]+=Number(i[e.property])}),a>=3&&(t[a]/=i.length),t[a]=t[a].toFixed(2))}),t},tableCellClassName:function(e){var a=e.row,i=e.column,t=!1;return"disIncome"===i.property?t=Math.abs(a.disIncome)>15:"disOperation"===i.property?t=Math.abs(a.disOperation)>.5:"disMarket"===i.property?t=Math.abs(a.disMarket)>1:"disFinal"===i.property&&(t=Math.abs(a.disFinal)>.3),t?"alert-cell":null}}},n={render:function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"container"},[i("div",{staticClass:"form"},[i("query-form",{ref:"queryForm",attrs:{inspect:e.inspect}})],1),e._v(" "),i("div",{staticClass:"option"},[i("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.inspectTable}},[e._v("检视")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.exportTable}},[e._v("导出报表")]),e._v(" "),i("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:function(a){e.warnTableVisible=!0}}},[e._v("查看预警报告")])],1),e._v(" "),i("div",{staticClass:"data"},[i("div",{staticClass:"title"},[i("el-alert",{attrs:{title:"统计截止月份：2018年3月 涉及保单范围：2018年1月1日 - 2018年3月21日",type:"info",closable:!1}})],1),e._v(" "),i("div",{staticClass:"table"},[i("base-table",{attrs:{columns:e.columns,data:e.bizData,"row-key":"id"}})],1)]),e._v(" "),i("el-dialog",{attrs:{title:"预警报告",visible:e.warnTableVisible,fullscreen:""},on:{"update:visible":function(a){e.warnTableVisible=a}}},[i("budget",{attrs:{typeProp:"biz"}})],1)],1)},staticRenderFns:[]};var r=i("VU/8")(t,n,!1,function(e){i("3Ags")},"data-v-70de0125",null);a.default=r.exports}});