webpackJsonp([136],{"5nEf":function(e,a){},"Uu+n":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={name:"Operation",components:{BaseTable:function(){return t.e(111).then(t.bind(null,"ss0d"))},LifeTableAdviseList:function(){return t.e(119).then(t.bind(null,"kHaw"))}},data:function(){return{param:{company:"02000000-山东分公司",channel:"经代渠道（专属）",saleMan:"李伟",renewalState:"新保",policyHolder:"范禹寰",biDiscount:"1.41118",underwriterLossRate:"0.00"},columns1:[{prop:"type",width:160,label:"车队类型",align:"center"},{prop:"discountRate",width:120,label:"折后赔付率(%)",align:"center"},{prop:"objInfoCoefficient",width:120,label:"客观信息系数",align:"center"},{prop:"driveRegionRoute",width:120,label:"行驶区域和路线系数",align:"center"},{prop:"ProtocolCode",width:140,label:"营运管理水平系数",align:"center"},{prop:"operationTimeStaff",width:140,label:"运营时段与人员配备系数",align:"center"},{prop:"specialRiskFactor",width:120,label:"特殊风险因子",align:"center"},{prop:"finalLossRate",width:120,label:"预期赔付率(%)",align:"center"},{prop:"finalLossRateType",width:120,label:"预期赔付率分类",align:"center"}],columns2:[{prop:"type",width:160,label:"车队类型",align:"center"},{prop:"serviceCharge",width:100,label:"手续费(%)",align:"center"},{prop:"manageCharge",width:100,label:"管理费(%)",align:"center"},{prop:"valueCharge",width:100,label:"价值提奖(%)",align:"center"},{prop:"marketRateMerge",width:140,label:"市场费用率合计",align:"center"},{prop:"nonMarketRateMerge",width:140,label:"非市场费用率合计",align:"center"},{prop:"operatingCostRate",width:120,label:"经营成本率(%)",align:"center"}],data1:[{type:"非运营企业客车",discountRate:"36.93",objInfoCoefficient:"16.93",driveRegionRoute:"16.93",ProtocolCode:"16.93",operationTimeStaff:"16.93",specialRiskFactor:"16.93",finalLossRate:"6.93",finalLossRateType:"101BLUE"},{type:"非运营企业客车（含特四）",discountRate:"36.93",objInfoCoefficient:"16.93",driveRegionRoute:"16.93",ProtocolCode:"16.93",operationTimeStaff:"16.93",specialRiskFactor:"16.93",finalLossRate:"6.93",finalLossRateType:"101BLUE"}],data2:[{type:"非运营企业客车",serviceCharge:"36.93",manageCharge:"16.93",valueCharge:"16.93",marketRateMerge:"16.93",nonMarketRateMerge:"16.93",operatingCostRate:"9.9"},{type:"非运营企业客车（含特四）",serviceCharge:"36.93",manageCharge:"16.93",valueCharge:"16.93",marketRateMerge:"16.93",nonMarketRateMerge:"16.93",operatingCostRate:"9.9"}],approvalDesc:"",approvalResult:"",approval:""}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"form"},[t("el-form",{attrs:{inline:!0,"label-width":"140px",model:e.param}},[t("el-form-item",{attrs:{label:"归属机构",prop:"company"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.company,callback:function(a){e.$set(e.param,"company",a)},expression:"param.company"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"归属渠道",prop:"channel"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.channel,callback:function(a){e.$set(e.param,"channel",a)},expression:"param.channel"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"归属业务员",prop:"saleMan"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.saleMan,callback:function(a){e.$set(e.param,"saleMan",a)},expression:"param.saleMan"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"续保状态",prop:"renewalState"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.renewalState,callback:function(a){e.$set(e.param,"renewalState",a)},expression:"param.renewalState"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"投保人",prop:"policyHolder"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.policyHolder,callback:function(a){e.$set(e.param,"policyHolder",a)},expression:"param.policyHolder"}}),e._v("`\n      ")],1),e._v(" "),t("el-form-item",{attrs:{label:"商业险申报折扣",prop:"biDiscount"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.biDiscount,callback:function(a){e.$set(e.param,"biDiscount",a)},expression:"param.biDiscount"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"核保人预估赔付率",prop:"underwriterLossRate"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.underwriterLossRate,callback:function(a){e.$set(e.param,"underwriterLossRate",a)},expression:"param.underwriterLossRate"}})],1)],1)],1),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("div",{staticClass:"title"},[e._v("车队预期赔付率结果展示")]),e._v(" "),t("base-table",{attrs:{sumText:"全国合计",columns:e.columns1,data:e.data1,"show-header":!0,showSummary:!0}})],1),e._v(" "),t("div",{staticClass:"table"},[t("div",{staticClass:"title"},[e._v("车队预期经营结果展示")]),e._v(" "),t("base-table",{attrs:{sumText:"全国合计",columns:e.columns2,data:e.data2,"show-header":!0,showSummary:!0}})],1),e._v(" "),t("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[e._v("\n      调整后预期赔付率：50% 调整后经营成本率：50%\n    ")]),e._v(" "),t("life-table-advise-list")],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{plain:""}},[e._v("影像资料")])],1)])},staticRenderFns:[]};var n=t("VU/8")(l,r,!1,function(e){t("5nEf")},"data-v-795239a3",null);a.default=n.exports}});