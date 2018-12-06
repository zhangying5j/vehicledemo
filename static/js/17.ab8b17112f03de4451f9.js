webpackJsonp([17],{"1xse":function(e,t){},kPQP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("6D10"),o={name:"SameFee",components:{BaseTable:function(){return a.e(120).then(a.bind(null,"ss0d"))},BackButton:function(){return a.e(121).then(a.bind(null,"uOVF"))}},data:function(){return{fleetTypeCode:[],fleetTypeList:[{code:"1",name:"家用-新车"},{code:"2",name:"家用-旧车"},{code:"3",name:"企业非营业客车"},{code:"4",name:"机关非营业客车"},{code:"5",name:"非营业货车(含特四)"},{code:"6",name:"营业货车(含特四)"},{code:"7",name:"特一"},{code:"8",name:"特二"},{code:"9",name:"特三"},{code:"10",name:"营业出租租赁客车"}],columns:[{prop:"agencyNo",width:120,label:"协议号"},{prop:"insuranceType",width:160,label:"险种"},{prop:"finalPayRate",width:120,label:"预期赔付率(%)"},{prop:"finalPayRateType",width:120,label:"预期赔付率分类"},{prop:"premiumPercent",width:120,label:"保费占比(%)"},{prop:"serviceCost",width:120,label:"手续费(%)"},{prop:"exhibitionCost",width:120,label:"展业费(%)"},{prop:"award",width:120,label:"价值提奖(%)"},{prop:"marketCost",width:120,label:"当前市场费用"},{prop:"checkedFeeUp",width:120,label:"已核费用上限"},{prop:"operationCostRate",width:120,label:"经营成本率(%)"}],sameFeeData:[{agencyNo:"50000100001",insuranceType:"机动车辆保险",finalPayRate:"66.93",finalPayRateType:"中II",premiumPercent:"55.00",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"96.3"},{agencyNo:"50000100001",insuranceType:"机动车综合商业保险",finalPayRate:"33.93",finalPayRateType:"低I",premiumPercent:"45.00",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"97.5"},{agencyNo:"全国合计：",insuranceType:"",finalPayRate:"27.29",finalPayRateType:"中I",premiumPercent:"60.00",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"96.84"}],columns2:[{prop:"agencyNo",width:130,label:"协议号"},{prop:"bizSector",width:160,label:"业务模块"},{prop:"insuranceType",width:170,label:"险种"},{prop:"specialFactor",width:160,label:"特殊因子"},{prop:"auto",width:160,label:"自主系数",isEdit:!0,type:"input"},{prop:"historyAuto",width:160,label:"历史自主系数"},{prop:"finalPayRate",width:120,label:"预期赔付率(%)"},{prop:"finalPayRateType",width:120,label:"预期赔付率分类"},{prop:"historyFullRate",width:120,label:"历史满期配费率(%)"},{prop:"premium",width:120,label:"保费规模",isEdit:!0,type:"input"},{prop:"premiumPercent",width:120,label:"保费占比(%)",isEdit:!0,type:"input"},{prop:"serviceCost",width:120,label:"手续费(%)",isEdit:!0,type:"input"},{prop:"exhibitionCost",width:120,label:"展业费(%)",isEdit:!0,type:"input"},{prop:"award",width:120,label:"价值提奖(%)",isEdit:!0,type:"input"},{prop:"operationCostRate",width:120,label:"经营成本率(%)"}],data2:[],allData:[{code:"1",data:[{agencyNo:"50000100001",bizSector:"家用-新车",insuranceType:"机动车辆保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"66.93",finalPayRateType:"中II",historyFullRate:"67.93",premium:"2603.40",premiumPercent:"8.10",serviceCost:"0.00",exhibitionCost:"0.00",award:"0.00",operationCostRate:"96.3"},{agencyNo:"50000100001",bizSector:"家用-新车",insuranceType:"机动车综合商业保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"33.93",finalPayRateType:"低I",historyFullRate:"34.93",premium:"8648.65",premiumPercent:"26.92",serviceCost:"0.00",exhibitionCost:"0.00",award:"0.00",operationCostRate:"97.5"}]},{code:"2",data:[{agencyNo:"50000100001",bizSector:"家用-旧车",insuranceType:"机动车辆保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"66.93",finalPayRateType:"中II",historyFullRate:"67.93",premium:"2603.40",premiumPercent:"8.10",serviceCost:"0.00",exhibitionCost:"0.00",award:"0.00",operationCostRate:"96.3"},{agencyNo:"50000100001",bizSector:"家用-旧车",insuranceType:"机动车综合商业保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"33.93",finalPayRateType:"低I",historyFullRate:"34.93",premium:"8648.65",premiumPercent:"26.92",serviceCost:"0.00",exhibitionCost:"0.00",award:"0.00",operationCostRate:"97.5"}]},{code:"3",data:[{agencyNo:"50000100001",bizSector:"企业非营业客车",insuranceType:"机动车辆保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"66.93",finalPayRateType:"中II",historyFullRate:"67.93",premium:"2603.40",premiumPercent:"8.10",serviceCost:"0.00",exhibitionCost:"0.00",award:"0.00",operationCostRate:"96.3"},{agencyNo:"50000100001",bizSector:"企业非营业客车",insuranceType:"机动车综合商业保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"33.93",finalPayRateType:"低I",historyFullRate:"34.93",premium:"8648.65",premiumPercent:"26.92",serviceCost:"0.00",exhibitionCost:"0.00",award:"0.00",operationCostRate:"97.5"}]},{code:"4",data:[{agencyNo:"50000100001",bizSector:"机关非营业客车",insuranceType:"机动车辆保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"66.93",finalPayRateType:"中II",historyFullRate:"67.93",premium:"2603.40",premiumPercent:"8.10",serviceCost:"0.00",exhibitionCost:"0.00",award:"0.00",operationCostRate:"96.3"}]},{code:"5",data:[]},{code:"6",data:[]},{code:"7",data:[]},{code:"8",data:[]},{code:"9",data:[]},{code:"10",data:[]}],approve1:"",approve2:"",t2HiddenFlag:!0}},methods:{merge:function(e){var t=e.row,a=e.column;e.rowIndex,e.columnIndex;if(["agencyNo","bizSector"].includes(a.property)){if(t.rowSpan[a.property]>1)return[t.rowSpan[a.property],1];if(0===t.rowSpan[a.property])return[0,0]}},analysis:function(){this.$router.push("/admin/agency/config/analysis")},change:function(e){var t=this;console.log(e),this.data2=[],0===e.length?this.t2HiddenFlag=!0:(this.t2HiddenFlag=!1,this.allData.forEach(function(a){e.includes(a.code)&&a.data.forEach(function(e){t.data2.push(e)})}))}},computed:{mergeData:function(){return Object(i.a)(this.data2,["agencyNo","bizSector"])}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns,data:e.sameFeeData,rowKey:"agencyNo"}})],1)]),e._v(" "),a("div",{staticClass:"sector-list"},[a("div",{staticClass:"biz-sector"},[a("el-form",{attrs:{"label-width":"120px",inline:!0}},[a("el-form-item",[a("el-checkbox-group",{on:{change:e.change},model:{value:e.fleetTypeCode,callback:function(t){e.fleetTypeCode=t},expression:"fleetTypeCode"}},[e._l(e.fleetTypeList,function(t){return a("el-checkbox",{key:t.code,attrs:{label:t.code,name:"fleetType"}},[e._v("\n              "+e._s(t.name)+"\n            ")])}),e._v(" "),a("el-checkbox",{staticStyle:{color:"red"},attrs:{label:"0"}},[e._v(" 未勾选板块出单取0费用")])],2)],1)],1)],1)]),e._v(" "),a("div",{staticClass:"data",attrs:{hidden:e.t2HiddenFlag},on:{"update:hidden":function(t){e.t2HiddenFlag=t}}},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns2,rowKey:"agencyNo",data:e.mergeData,spanMethod:e.merge}})],1)]),e._v(" "),a("div",{staticClass:"data"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"approval"},[a("div",{staticClass:"result"},[a("div",{staticClass:"title"},[e._v("申报情况说明")]),e._v(" "),a("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.approve1,callback:function(t){e.approve1=t},expression:"approve1"}})],1)])]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"approval"},[a("div",{staticClass:"result"},[a("div",{staticClass:"title"},[e._v("检视说明")]),e._v(" "),a("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.approve2,callback:function(t){e.approve2=t},expression:"approve2"}})],1)])])],1)],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",[e._v("配置部门")]),e._v(" "),a("back-button",{attrs:{type:"next"},on:{next:e.analysis}},[e._v("下一步")])],1)])},staticRenderFns:[]};var n=a("VU/8")(o,r,!1,function(e){a("1xse")},"data-v-dbe1b11e",null);t.default=n.exports}});