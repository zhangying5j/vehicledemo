webpackJsonp([31],{"i/9Z":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"DisConfigFee",components:{BaseTable:function(){return a.e(112).then(a.bind(null,"ss0d"))}},data:function(){return{totalPay:"",configColumns:[{prop:"bizSector",width:120,label:"业务单元"},{prop:"bizTypeNo",width:120,label:"业务单元号"},{prop:"bizDetail",width:230,label:"业务单元明细"},{prop:"insuranceType",width:120,label:"险种代码"},{prop:"manageCost",width:120,label:"折扣率(%)",isEdit:!0,type:"input"},{prop:"serviceCost",width:120,label:"手续费率(%)",isEdit:!0,type:"input"},{prop:"premiumPercent",width:120,label:"业务占比(%)",isEdit:!0,type:"input"},{prop:"finalPayRate",width:140,label:"理赔费用率(%)",isEdit:!0,type:"input"},{prop:"award",width:120,label:"其他费用率(%)",isEdit:!0,type:"input"},{prop:"operationCostRate",width:140,label:"保单成本率(%)",isEdit:!0,type:"input"}],configData:[{bizSector:"家用车-新车",bizTypeNo:"00001",bizDetail:"家用车，新车，含车损",insuranceType:"0507",finalPayRate:"57.6",auto:"0.56",historyAuto:"1.00",premiumPercent:"10.8",serviceCost:"0.4",manageCost:"1.2",award:"1.5",operationCostRate:"96.7"},{bizSector:"家用车-新车",bizTypeNo:"00002",bizDetail:"家用车，新车，含车损",insuranceType:"0528",finalPayRate:"56.6",auto:"0.56",historyAuto:"1.00",premiumPercent:"11.8",serviceCost:"0.8",manageCost:"1.2",award:"1.5",operationCostRate:"97.7"},{bizSector:"家用车-新车",bizTypeNo:"00003",bizDetail:"家用车，新车，单三者，同保",insuranceType:"0507",finalPayRate:"57.6",auto:"0.56",historyAuto:"1.00",premiumPercent:"10.8",serviceCost:"0.4",manageCost:"1.2",award:"1.5",operationCostRate:"96.7"},{bizSector:"家用车-旧车",bizTypeNo:"00004",bizDetail:"家用车，新车，单三者，同保",insuranceType:"0528",finalPayRate:"56.6",auto:"0.56",historyAuto:"1.00",premiumPercent:"11.8",serviceCost:"0.8",manageCost:"1.2",award:"1.5",operationCostRate:"97.7"},{bizSector:"家用车-旧车",bizTypeNo:"00005",bizDetail:"家用车，旧车，单三者",insuranceType:"0507",finalPayRate:"57.6",auto:"0.56",historyAuto:"1.00",premiumPercent:"10.8",serviceCost:"0.4",manageCost:"1.2",award:"1.5",operationCostRate:"96.7"},{bizSector:"家用车-旧车",bizTypeNo:"00006",bizDetail:"家用车，旧车，单三者",insuranceType:"0528",finalPayRate:"56.6",auto:"0.56",historyAuto:"1.00",premiumPercent:"11.8",serviceCost:"0.8",manageCost:"1.2",award:"1.5",operationCostRate:"97.7"}]}},methods:{analysis:function(){this.$router.push("/admin/fleet/declare/configfee/futresult")}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"biz-content"},[a("div",{staticClass:"form"},[a("el-form",{attrs:{"label-width":"120px",inline:!0}},[a("el-form-item",{attrs:{label:"预估总保费:"}},[a("el-input",{model:{value:t.totalPay,callback:function(e){t.totalPay=e},expression:"totalPay"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:t.configColumns,data:t.configData,rowKey:"version"}})],1)]),t._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[t._v("差异配费导出")]),t._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[t._v("差异配费导入")]),t._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:t.analysis}},[t._v("下一步")])],1)])},staticRenderFns:[]};var n=a("VU/8")(i,o,!1,function(t){a("xIdD")},"data-v-a0752b86",null);e.default=n.exports},xIdD:function(t,e){}});