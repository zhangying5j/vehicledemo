webpackJsonp([129],{lzNk:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={name:"BudgetCompare",components:{BaseTable:function(){return t.e(110).then(t.bind(null,"ss0d"))}},data:function(){return{detailHidden:!0,columns:[{prop:"detail",width:120,label:"详情",align:"center",operation:!0,operations:[{text:"详情",event:"detail"}]},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center",children:[{prop:"proPremiumScale",width:120,label:"协议合计",align:"center"}]},{prop:"finalPayRate",width:120,label:"预期赔付率(%)",align:"center",children:[{prop:"proFinalPayRate",width:80,label:"协议合计",align:"center"},{prop:"expFinalPayRate",width:40,label:"预算",align:"center"}]},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center",children:[{prop:"proMarketCostRate",width:80,label:"协议合计",align:"center"},{prop:"expMarketCostRate",width:40,label:"预算",align:"center"}]},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center",children:[{prop:"proOperationCostRate",width:80,label:"协议合计",align:"center"},{prop:"expOperationCostRate",width:40,label:"预算",align:"center"}]}],data:[{insuranceType:"交强险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{insuranceType:"商业险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{insuranceType:"交商合计",proPremiumScale:"450",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"}],detailColumns:[{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center",children:[{prop:"proPremiumScale",width:120,label:"协议合计",align:"center"}]},{prop:"finalPayRate",width:120,label:"预期赔付率(%)",align:"center",children:[{prop:"proFinalPayRate",width:80,label:"协议合计",align:"center"},{prop:"expFinalPayRate",width:40,label:"预算",align:"center"}]},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center",children:[{prop:"proMarketCostRate",width:80,label:"协议合计",align:"center"},{prop:"expMarketCostRate",width:40,label:"预算",align:"center"}]},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center",children:[{prop:"proOperationCostRate",width:80,label:"协议合计",align:"center"},{prop:"expOperationCostRate",width:40,label:"预算",align:"center"}]}],detailData:[{bizSector:"家用车-新车",insuranceType:"交强险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-新车",insuranceType:"商业险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-新车",insuranceType:"交商合计",proPremiumScale:"450",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-旧车",insuranceType:"交强险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-旧车",insuranceType:"商业险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-旧车",insuranceType:"交商合计",proPremiumScale:"450",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"}]}},methods:{detail:function(){this.detailHidden=!this.detailHidden},merge:function(e){e.row,e.column;var a=e.rowIndex;if(0===e.columnIndex)return 0===a?[this.data.length,1]:[0,0]}}},n={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("base-table",{attrs:{columns:e.columns,data:e.data,rowKey:"insuranceType",spanMethod:e.merge},on:{detail:e.detail}}),e._v(" "),t("base-table",{directives:[{name:"show",rawName:"v-show",value:!e.detailHidden,expression:"!detailHidden"}],attrs:{columns:e.detailColumns,data:e.detailData,rowKey:"insuranceType"}})],1)},staticRenderFns:[]};var o=t("VU/8")(r,n,!1,function(e){t("vuDO")},"data-v-7b75511a",null);a.default=o.exports},vuDO:function(e,a){}});