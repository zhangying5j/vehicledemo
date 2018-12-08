webpackJsonp([105],{PQWw:function(e,t){},g9Hn:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"Organization",components:{QueryForm:function(){return r.e(136).then(r.bind(null,"xen3"))},BaseTable:function(){return r.e(123).then(r.bind(null,"ss0d"))},Budget:function(){return r.e(1).then(r.bind(null,"otlB"))}},data:function(){return{warnTableVisible:!1,inspect:{org:"27000",channel:"each",type:"month",timeRange:"2018Q1",startmonth:"2017-01",endmonth:"2017-03",version:"50000201801010900"},columns:[{prop:"thirdOrg",width:120,label:"山西省分公司",align:"center"},{prop:"premium",width:120,label:"目标保费规模",align:"center",children:[{prop:"exppremium",width:120,label:"预算值(万元)",align:"center"},{prop:"realpremium",width:120,label:"实际值(万元)",align:"center"},{prop:"ratepremium",width:120,label:"预算达成率(%)",align:"center"},{prop:"schedulepremium",width:120,label:"序时进度(%)",align:"center"}]},{prop:"costrate",width:120,label:"目标保单成本率",align:"center",children:[{prop:"expcostrate",width:120,label:"预算值(%)",align:"center"},{prop:"realcostrate",width:120,label:"实际值(%)",align:"center"},{prop:"discostrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"changeCostRate",width:120,label:"目标变动成本率",align:"center",children:[{prop:"expChangeCostRate",width:120,label:"预算值(%)",align:"center"},{prop:"realChangeCostRate",width:120,label:"实际值(%)",align:"center"},{prop:"disChangeCostRate",width:120,label:"二者差(%)",align:"center"}]},{prop:"bjCostRate",width:120,label:"目标边际成本率",align:"center",children:[{prop:"expBjCostRate",width:120,label:"预算值(%)",align:"center"},{prop:"realBjCostRate",width:120,label:"实际值(%)",align:"center"},{prop:"disBjCostRate",width:120,label:"二者差(%)",align:"center"}]},{prop:"payRate",width:120,label:"目标保单赔付率",align:"center",children:[{prop:"expPayRate",width:120,label:"预算值(%)",align:"center"},{prop:"realPayRate",width:120,label:"实际值(%)",align:"center"},{prop:"disPayRate",width:120,label:"二者差(%)",align:"center"}]},{prop:"expPayRate",width:120,label:"目标理赔费用率",align:"center",children:[{prop:"expExpPayRate",width:120,label:"预算值(%)",align:"center"},{prop:"realExpPayRate",width:120,label:"实际值(%)",align:"center"},{prop:"disExpPayRate",width:120,label:"二者差(%)",align:"center"}]},{prop:"FeeRate",width:120,label:"目标保单费用率",align:"center",children:[{prop:"expFeeRate",width:120,label:"预算值(%)",align:"center"},{prop:"realFeeRate",width:120,label:"实际值(%)",align:"center"},{prop:"disFeeRate",width:120,label:"二者差(%)",align:"center"}]},{prop:"directExpPayRate",width:120,label:"目标直接理赔费用率",align:"center",children:[{prop:"expDirectExpPayRate",width:120,label:"预算值(%)",align:"center"},{prop:"realDirectExpPayRate",width:120,label:"实际值(%)",align:"center"},{prop:"disDirectExpPayRate",width:120,label:"二者差(%)",align:"center"}]},{prop:"indirectExpPayRate",width:120,label:"目标间接理赔费用率",align:"center",children:[{prop:"expIndirectExpPayRate",width:120,label:"预算值(%)",align:"center"},{prop:"realIndirectExpPayRate",width:120,label:"实际值(%)",align:"center"},{prop:"disIndirectExpPayRate",width:120,label:"二者差(%)",align:"center"}]},{prop:"saleRate",width:120,label:"销售费用率",align:"center",children:[{prop:"expSaleRate",width:120,label:"预算值(%)",align:"center"},{prop:"realSaleRate",width:120,label:"实际值(%)",align:"center"},{prop:"disSaleRate",width:120,label:"二者差(%)",align:"center"}]},{prop:"fixedFeeRate",width:120,label:"固定费用率",align:"center",children:[{prop:"expFixedFeeRate",width:120,label:"预算值(%)",align:"center"},{prop:"realFixedFeeRate",width:120,label:"实际值(%)",align:"center"},{prop:"disFixedFeeRate",width:120,label:"二者差(%)",align:"center"}]},{prop:"otherFeeRate",width:120,label:"其他费用率",align:"center",children:[{prop:"expOtherFeeRate",width:120,label:"预算值(%)",align:"center"},{prop:"realOtherFeeRate",width:120,label:"实际值(%)",align:"center"},{prop:"disOtherFeeRate",width:120,label:"二者差(%)",align:"center"}]},{prop:"serverFeeRate",width:120,label:"手续费率",align:"center",children:[{prop:"expServerFeeRate",width:120,label:"预算值(%)",align:"center"},{prop:"realServerFeeRate",width:120,label:"实际值(%)",align:"center"},{prop:"disServerFeeRate",width:120,label:"二者差(%)",align:"center"}]},{prop:"salePersonRate",width:120,label:"销售人力薪酬率",align:"center",children:[{prop:"expSalePersonRate",width:120,label:"预算值(%)",align:"center"},{prop:"realSalePersonRate",width:120,label:"实际值(%)",align:"center"},{prop:"disSalePersonRate",width:120,label:"二者差(%)",align:"center"}]},{prop:"saleDriverFeeRate",width:120,label:"营销推动费用率",align:"center",children:[{prop:"expSaleDriverFeeRate",width:120,label:"预算值(%)",align:"center"},{prop:"realSaleDriverFeeRate",width:120,label:"实际值(%)",align:"center"},{prop:"disSaleDriverFeeRate",width:120,label:"二者差(%)",align:"center"}]}],orgData:[{id:"1",thirdOrg:"太原支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"2",thirdOrg:"大同支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"3",thirdOrg:"阳泉支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"4",thirdOrg:"长治支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"5",thirdOrg:"晋城支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"6",thirdOrg:"朔州支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"7",thirdOrg:"晋中支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"8",thirdOrg:"运城支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"9",thirdOrg:"忻州支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"10",thirdOrg:"临汾支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"11",thirdOrg:"吕梁支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"12",thirdOrg:"合计",exppremium:"54236.05",realpremium:"54363.65",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"}]}},methods:{inspectTable:function(){},exportTable:function(){},sum:function(e){var t=e.columns,r=e.data,a=[];return t.forEach(function(e,t){0===t?a[t]="合计":(a[t]=0,r.forEach(function(r){a[t]+=Number(r[e.property])}),t>=3&&(a[t]/=r.length),a[t]=a[t].toFixed(2))}),a},tableCellClassName:function(e){var t=e.row,r=e.column,a=!1;return"ratepremium"===r.property?a=Math.abs(t.ratepremium)<1:"schedulepremium"===r.property?a=Math.abs(t.schedulepremium)>.5:"discostrate"===r.property&&(a=Math.abs(t.discostrate)>.5),a?"alert-cell":null}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"form"},[r("query-form",{ref:"queryForm",attrs:{inspect:e.inspect}})],1),e._v(" "),r("div",{staticClass:"option"},[r("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.inspectTable}},[e._v("检视")]),e._v(" "),r("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.exportTable}},[e._v("导出报表")]),e._v(" "),r("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:function(t){e.warnTableVisible=!0}}},[e._v("查看预警报告")])],1),e._v(" "),r("div",{staticClass:"data"},[r("div",{staticClass:"title"},[r("el-alert",{attrs:{title:"统计截止月份：2018年3月 涉及保单范围：2018年1月1日 - 2018年3月21日",type:"info",closable:!1}})],1),e._v(" "),r("div",{staticClass:"table"},[r("base-table",{attrs:{"cell-class-name":e.tableCellClassName,columns:e.columns,data:e.orgData,"row-key":"id"}})],1)]),e._v(" "),r("el-dialog",{attrs:{title:"预警报告",visible:e.warnTableVisible,fullscreen:""},on:{"update:visible":function(t){e.warnTableVisible=t}}},[r("budget",{attrs:{typeProp:"org"}})],1)],1)},staticRenderFns:[]};var i=r("VU/8")(a,l,!1,function(e){r("PQWw")},"data-v-06991637",null);t.default=i.exports}});