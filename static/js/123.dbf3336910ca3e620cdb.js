webpackJsonp([123],{MqaJ:function(e,t){},rAJI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"LifeTableMain",components:{CommonTable:function(){return a.e(122).then(a.bind(null,"Lk4z"))},TabTable:function(){return a.e(126).then(a.bind(null,"b1QR"))},LifeTableAdviseList:function(){return a.e(119).then(a.bind(null,"kHaw"))}},props:{approveHidden:{type:Boolean,default:!0}},data:function(){return{outlineColumn:[{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"costRate",label:"目标保单成本率(%)",width:120,align:"center"},{prop:"changecostrate",label:"目标变动成本率",width:120,align:"center"},{prop:"payRate",label:"目标保单赔付率(%)",width:140,align:"center"},{prop:"feeRate",label:"目标保单费用率(%)",width:120,align:"center"},{prop:"claimRate",label:"目标理赔费用率(%)",width:120,align:"center"},{prop:"serverRate",label:"目标手续费率(%)",width:120,align:"center"},{prop:"otherRate",label:"目标其他费用率(%)",width:120,align:"center"},{prop:"discoutRate",label:"目标折扣率(%)",width:120,align:"center"}],outlineData:[{bizSector:"家庭自用",costRate:"96",changecostrate:"5",payRate:"103.45",feeRate:"11",claimRate:"12",serverRate:"9",otherRate:"4",discoutRate:"82"},{bizSector:"非营业客车",costRate:"96",changecostrate:"5",payRate:"103.45",feeRate:"11",claimRate:"12",serverRate:"9",otherRate:"4",discoutRate:"82"},{bizSector:"出租租赁",costRate:"96",changecostrate:"5",payRate:"103.45",feeRate:"11",claimRate:"12",serverRate:"9",otherRate:"4",discoutRate:"82"},{bizSector:"城市公交",costRate:"96",changecostrate:"5",payRate:"103.45",feeRate:"11",claimRate:"12",serverRate:"9",otherRate:"4",discoutRate:"82"},{bizSector:"公路客车",costRate:"96",changecostrate:"5",payRate:"103.45",feeRate:"11",claimRate:"12",serverRate:"9",otherRate:"4",discoutRate:"82"},{bizSector:"普通营业货运",costRate:"96",changecostrate:"5",payRate:"103.45",feeRate:"11",claimRate:"12",serverRate:"9",otherRate:"4",discoutRate:"82"},{bizSector:"自卸车",costRate:"96",changecostrate:"5",payRate:"103.45",feeRate:"11",claimRate:"12",serverRate:"9",otherRate:"4",discoutRate:"82"},{bizSector:"半挂牵引",costRate:"96",changecostrate:"5",payRate:"103.45",feeRate:"11",claimRate:"12",serverRate:"9",otherRate:"4",discoutRate:"82"},{bizSector:"挂车",costRate:"96",changecostrate:"5",payRate:"103.45",feeRate:"11",claimRate:"12",serverRate:"9",otherRate:"4",discoutRate:"82"},{bizSector:"特种车",costRate:"96",changecostrate:"5",payRate:"103.45",feeRate:"11",claimRate:"12",serverRate:"9",otherRate:"4",discoutRate:"82"},{bizSector:"其他",costRate:"96",changecostrate:"5",payRate:"103.45",feeRate:"11",claimRate:"12",serverRate:"9",otherRate:"4",discoutRate:"82"}],configCostColumn:[{prop:"orgCode",label:"机构代码",width:100,align:"center"},{prop:"insuranceType",label:"险种",width:120,align:"center"},{prop:"businessSource",label:"业务来源",width:120,align:"center"},{prop:"businessSegment",label:"业务板块",width:120,align:"center"},{prop:"businessTypeNo",label:"业务小类号",width:120,align:"center"},{prop:"bizSectorDetail",label:"业务板块明细",width:200,align:"center"},{prop:"isInverseDiscount",label:"是否反算折扣",width:120,align:"center"},{prop:"isInverseCost",label:"是否反算费用",width:120,align:"center"},{prop:"inverseOrder",label:"反算顺序",width:130,align:"center"},{prop:"inverseRadix",label:"反算基数",width:120,align:"center"},{prop:"demandRate",label:"要求利润率(%)",width:120,align:"center"},{prop:"autoDown",label:"自主系数下限",width:120,align:"center"},{prop:"autoUp",label:"自主系数上限",width:120,align:"center"},{prop:"marketCostDown",label:"跟单市场费用下限",width:90,align:"center"},{prop:"marketCostUp",label:"跟单市场费用上限",width:90,align:"center"},{prop:"serviceCostUp",label:"手续费上限",width:120,align:"center"},{prop:"exhibitionCostUp",label:"展业费上限",width:120,align:"center"},{prop:"awardUp",label:"价值提奖上限",width:120,align:"center"},{prop:"distributionOrder",label:"分配顺序",width:180,align:"center"},{prop:"payRateBusinessType",label:"赔付率业务类别(按规则计算)",width:130,align:"center"}],configCostData:[{orgCode:"北京分公司(00011)",insuranceType:"机动车辆保险(0501)",businessSource:"直接业务",businessSegment:"家用新车",businessTypeNo:"02000001",bizSectorDetail:"家用客车6座以下含车损",isInverseDiscount:"是",isInverseCost:"否",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",autoDown:.7225,autoUp:.9,marketCostDown:"",marketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"管理费-绩效",payRateBusinessType:"低I"},{orgCode:"北京分公司(00011)",insuranceType:"机动车综合商业保险(0511)",businessSource:"个人代理",businessSegment:"家用旧车",businessTypeNo:"02000002",bizSectorDetail:"家用客车6座以下不含车损",isInverseDiscount:"否",isInverseCost:"否",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",autoDown:.7225,autoUp:.9,marketCostDown:"",marketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"手续费-管理费-绩效",payRateBusinessType:"低II"},{orgCode:"北京分公司(00011)",insuranceType:"机动车辆保险(0501)",businessSource:"专业代理",businessSegment:"企业非营业客车",businessTypeNo:"02000003",bizSectorDetail:"企业客车含车损",isInverseDiscount:"否",isInverseCost:"是",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",autoDown:.723,autoUp:.9,marketCostDown:15,marketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"管理费-绩效",payRateBusinessType:"低III"},{orgCode:"北京分公司(00011)",insuranceType:"机动车辆保险(0501)",businessSource:"普通兼业代理",businessSegment:"企业非营业货车",businessTypeNo:"02000011",bizSectorDetail:"企业货车含车损",isInverseDiscount:"是",isInverseCost:"否",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",autoDown:.7225,autoUp:.9,marketCostDown:"",marketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"管理费-绩效",payRateBusinessType:"中I"},{orgCode:"北京分公司(00011)",insuranceType:"机动车综合商业保险(0511)",businessSource:"电话销售-PT",businessSegment:"机关非营业客车",businessTypeNo:"02000012",bizSectorDetail:"机关客车含车损",isInverseDiscount:"否",isInverseCost:"否",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",autoDown:.7225,autoUp:.9,marketCostDown:"",marketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"手续费-管理费-绩效",payRateBusinessType:"中II"},{orgCode:"北京分公司(00011)",insuranceType:"机动车辆保险(0501)",businessSource:"寿代产-个险",businessSegment:"机关非营业货车",businessTypeNo:"02000013",bizSectorDetail:"机关货车含车损",isInverseDiscount:"否",isInverseCost:"是",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",autoDown:.723,autoUp:.9,marketCostDown:15,marketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"管理费-绩效",payRateBusinessType:"中III"},{orgCode:"北京分公司(00011)",insuranceType:"机动车辆保险(0501)",businessSource:"寿代产-银保",businessSegment:"机关非营业特种车",businessTypeNo:"02000021",bizSectorDetail:"机关特种车含车损",isInverseDiscount:"是",isInverseCost:"否",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",autoDown:.7225,autoUp:.9,marketCostDown:"",marketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"管理费-绩效",payRateBusinessType:"高I"},{orgCode:"北京分公司(00011)",insuranceType:"机动车综合商业保险(0511)",businessSource:"银行邮政代理",businessSegment:"营业出租客车",businessTypeNo:"02000022",bizSectorDetail:"出租客车不含车损",isInverseDiscount:"否",isInverseCost:"否",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",autoDown:.7225,autoUp:.9,marketCostDown:"",marketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"手续费-管理费-绩效",payRateBusinessType:"高II"},{orgCode:"北京分公司(00011)",insuranceType:"机动车辆保险(0501)",businessSource:"寿代产-收展",businessSegment:"营业出租货车",businessTypeNo:"02000023",bizSectorDetail:"出租货车含车损",isInverseDiscount:"否",isInverseCost:"是",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",autoDown:.723,autoUp:.9,marketCostDown:15,marketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"管理费-绩效",payRateBusinessType:"高III"}],advise:""}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"data"},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"报价策略概要"}},[a("span",{staticStyle:{color:"red","font-size":"2px"}},[e._v("完全接受推荐业务小类&费用折扣")]),e._v(" "),a("common-table",{attrs:{showSummary:!0,columns:e.outlineColumn,dataSource:e.outlineData}}),e._v(" "),a("life-table-advise-list"),e._v(" "),a("div",{staticClass:"data",attrs:{hidden:e.approveHidden},on:{"update:hidden":function(t){e.approveHidden=t}}},[a("div",{staticClass:"approval"},[a("div",{staticClass:"result"},[a("div",{staticClass:"title"},[e._v("意见")]),e._v(" "),a("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.advise,callback:function(t){e.advise=t},expression:"advise"}})],1)])]),e._v(" "),a("div",{staticClass:"option",attrs:{hidden:e.approveHidden},on:{"update:hidden":function(t){e.approveHidden=t}}},[a("el-button",{attrs:{type:"primary",plain:"",size:"small"}},[e._v("审核通过")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:"",size:"small"}},[e._v("下发修改")])],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"报价策略"}},[a("tab-table")],1),e._v(" "),a("el-tab-pane",{attrs:{label:"历史数据表"}},[a("tab-table")],1),e._v(" "),a("el-tab-pane",{attrs:{label:"配费表"}},[a("common-table",{attrs:{columns:e.configCostColumn,dataSource:e.configCostData}})],1)],1)],1)])},staticRenderFns:[]};var r=a("VU/8")(s,i,!1,function(e){a("MqaJ")},"data-v-547913eb",null);t.default=r.exports}});