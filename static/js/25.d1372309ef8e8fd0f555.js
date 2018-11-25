webpackJsonp([25],{AASt:function(e,a){},g9Hn:function(e,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={name:"Organization",components:{QueryForm:function(){return i.e(119).then(i.bind(null,"xen3"))},BaseTable:function(){return i.e(106).then(i.bind(null,"ss0d"))},Budget:function(){return i.e(1).then(i.bind(null,"otlB"))}},data:function(){return{warnTableVisible:!1,inspect:{org:"27000",channel:"ct",type:"month",timeRange:"2018Q1",version:"50000201801010900"},columns:[{prop:"thirdOrg",width:120,label:"山西省分公司",align:"center"},{prop:"premiumIncome",width:240,label:"保费收入",align:"center",children:[{prop:"expIncome",width:120,label:"预算值(万元)",align:"center"},{prop:"realIncome",width:120,label:"实际值(万元)",align:"center"},{prop:"disIncome",width:120,label:"二者差(万元)",align:"center"}]},{prop:"operationCostRate",width:120,label:"综合成本率",align:"center",children:[{prop:"expOperation",width:120,label:"预算值(%)",align:"center"},{prop:"realOperation",width:120,label:"实际值(%)",align:"center"},{prop:"disOperation",width:120,label:"二者差(%)",align:"center"}]},{prop:"marketCostRate",width:120,label:"手续费率",align:"center",children:[{prop:"expMarket",width:120,label:"预算值(%)",align:"center"},{prop:"realMarket",width:120,label:"实际值(%)",align:"center"},{prop:"disMarket",width:120,label:"二者差(%)",align:"center"}]},{prop:"finalPayRate",width:120,label:"终极赔付率",align:"center",children:[{prop:"expFinal",width:120,label:"预算值(%)",align:"center"},{prop:"realFinal",width:120,label:"实际值(%)",align:"center"},{prop:"disFinal",width:120,label:"二者差(%)",align:"center"}]}],orgData:[{id:"1",thirdOrg:"太原支公司",expIncome:"4930.55",realIncome:"4942.15",disIncome:"11.60",expOperation:"97.6",realOperation:"98.2",disOperation:"0.6",expMarket:"16.8",realMarket:"17.5",disMarket:"0.7",expFinal:"56.89",realFinal:"56.86",disFinal:"-0.03"},{id:"2",thirdOrg:"大同支公司",expIncome:"3693.80",realIncome:"3706.50",disIncome:"12.70",expOperation:"97.9",realOperation:"97.7",disOperation:"-0.2",expMarket:"20.1",realMarket:"21.3",disMarket:"1.2",expFinal:"59",realFinal:"58.6",disFinal:"-0.4"},{id:"3",thirdOrg:"阳泉支公司",expIncome:"2530.35",realIncome:"2543.25",disIncome:"12.90",expOperation:"97.4",realOperation:"97.3",disOperation:"-0.1",expMarket:"17.2",realMarket:"18.5",disMarket:"1.3",expFinal:"57.2",realFinal:"57.6",disFinal:"0.4"},{id:"4",thirdOrg:"长治支公司",expIncome:"2571.00",realIncome:"2583.10",disIncome:"12.10",expOperation:"97.6",realOperation:"98.2",disOperation:"0.6",expMarket:"16.8",realMarket:"17.5",disMarket:"0.7",expFinal:"56.89",realFinal:"56.86",disFinal:"-0.03"},{id:"5",thirdOrg:"晋城支公司",expIncome:"2511.45",realIncome:"2523.25",disIncome:"11.80",expOperation:"97.9",realOperation:"97.7",disOperation:"-0.2",expMarket:"20.1",realMarket:"21.3",disMarket:"1.2",expFinal:"59",realFinal:"58.6",disFinal:"-0.4"},{id:"6",thirdOrg:"朔州支公司",expIncome:"2496.85",realIncome:"2510.65",disIncome:"13.80",expOperation:"97.4",realOperation:"97.3",disOperation:"-0.1",expMarket:"17.2",realMarket:"18.5",disMarket:"1.3",expFinal:"57.2",realFinal:"57.6",disFinal:"0.4"},{id:"7",thirdOrg:"晋中支公司",expIncome:"2587.80",realIncome:"2603.40",disIncome:"15.60",expOperation:"97.6",realOperation:"98.2",disOperation:"0.6",expMarket:"16.8",realMarket:"17.5",disMarket:"0.7",expFinal:"56.89",realFinal:"56.86",disFinal:"-0.03"},{id:"8",thirdOrg:"运城支公司",expIncome:"2545.15",realIncome:"2564.55",disIncome:"19.40",expOperation:"97.9",realOperation:"97.7",disOperation:"-0.2",expMarket:"20.1",realMarket:"21.3",disMarket:"1.2",expFinal:"59",realFinal:"58.6",disFinal:"-0.4"},{id:"9",thirdOrg:"忻州支公司",expIncome:"2499.25",realIncome:"2514.05",disIncome:"14.80",expOperation:"97.4",realOperation:"97.3",disOperation:"-0.1",expMarket:"17.2",realMarket:"18.5",disMarket:"1.3",expFinal:"57.2",realFinal:"57.6",disFinal:"0.4"},{id:"10",thirdOrg:"临汾支公司",expIncome:"3006.35",realIncome:"3018.65",disIncome:"12.30",expOperation:"97.9",realOperation:"97.7",disOperation:"-0.2",expMarket:"20.1",realMarket:"21.3",disMarket:"1.2",expFinal:"59",realFinal:"58.6",disFinal:"-0.4"},{id:"11",thirdOrg:"吕梁支公司",expIncome:"2598.55",realIncome:"2614.45",disIncome:"15.90",expOperation:"97.6",realOperation:"98.2",disOperation:"0.6",expMarket:"16.8",realMarket:"17.5",disMarket:"0.7",expFinal:"56.89",realFinal:"56.86",disFinal:"-0.03"},{id:"12",thirdOrg:"合计",expIncome:"31971.1",realIncome:"32124",disIncome:"152.9",expOperation:"97.66",realOperation:"97.80",disOperation:"0.14",expMarket:"18.11",realMarket:"19.13",disMarket:"1.03",expFinal:"57.74",realFinal:"57.67",disFinal:"-0.06"}]}},methods:{inspectTable:function(){},exportTable:function(){},sum:function(e){var a=e.columns,i=e.data,r=[];return a.forEach(function(e,a){0===a?r[a]="合计":(r[a]=0,i.forEach(function(i){r[a]+=Number(i[e.property])}),a>=4&&(r[a]/=i.length),r[a]=r[a].toFixed(2))}),r},tableCellClassName:function(e){var a=e.row,i=e.column,r=!1;return"disIncome"===i.property?r=Math.abs(a.disIncome)>15:"disOperation"===i.property?r=Math.abs(a.disOperation)>.5:"disMarket"===i.property?r=Math.abs(a.disMarket)>1:"disFinal"===i.property&&(r=Math.abs(a.disFinal)>.3),r?"alert-cell":null}}},t={render:function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"container"},[i("div",{staticClass:"form"},[i("query-form",{ref:"queryForm",attrs:{inspect:e.inspect}})],1),e._v(" "),i("div",{staticClass:"option"},[i("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.inspectTable}},[e._v("检视")]),e._v(" "),i("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.exportTable}},[e._v("导出报表")]),e._v(" "),i("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:function(a){e.warnTableVisible=!0}}},[e._v("查看预警报告")])],1),e._v(" "),i("div",{staticClass:"data"},[i("div",{staticClass:"title"},[i("el-alert",{attrs:{title:"统计截止月份：2018年3月 涉及保单范围：2018年1月1日 - 2018年3月21日",type:"info",closable:!1}})],1),e._v(" "),i("div",{staticClass:"table"},[i("base-table",{attrs:{"cell-class-name":e.tableCellClassName,columns:e.columns,data:e.orgData,"row-key":"id"}})],1)]),e._v(" "),i("el-dialog",{attrs:{title:"预警报告",visible:e.warnTableVisible,fullscreen:""},on:{"update:visible":function(a){e.warnTableVisible=a}}},[i("budget",{attrs:{typeProp:"org"}})],1)],1)},staticRenderFns:[]};var n=i("VU/8")(r,t,!1,function(e){i("AASt")},"data-v-a797d26c",null);a.default=n.exports}});