webpackJsonp([148],{cbJP:function(e,a){},vR4Z:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={name:"FutureAgent",components:{BaseTable:function(){return t.e(123).then(t.bind(null,"ss0d"))}},data:function(){return{detailShow:!1,companyList:[{code:"00000",name:"总公司",flag:0},{code:"01000",name:"北京分公司",flag:1},{code:"02001",name:"朝阳支公司",flag:2},{code:"02002",name:"丰台支公司",flag:2},{code:"02003",name:"大兴支公司",flag:2},{code:"02004",name:"东城支公司",flag:2},{code:"02005",name:"通州支公司",flag:2},{code:"02006",name:"房山支公司",flag:2},{code:"02007",name:"平谷支公司",flag:2},{code:"02008",name:"顺义支公司",flag:2},{code:"02009",name:"延庆支公司",flag:2},{code:"02010",name:"昌平支公司",flag:2},{code:"02011",name:"怀柔支公司",flag:2},{code:"02012",name:"海淀支公司",flag:2},{code:"27000",name:"山西省分公司",flag:1},{code:"02000",name:"山东省分公司",flag:1},{code:"03000",name:"江苏省分公司",flag:1},{code:"04000",name:"黑龙江省分公司",flag:1},{code:"05000",name:"重庆市分公司",flag:1},{code:"06000",name:"河南省分公司",flag:1},{code:"07000",name:"上海市分公司",flag:1},{code:"08000",name:"广东省分公司",flag:1},{code:"09000",name:"深圳市分公司",flag:1},{code:"10000",name:"天津市分公司",flag:1},{code:"11000",name:"青岛分公司",flag:1},{code:"12000",name:"辽宁省分公司",flag:1},{code:"13000",name:"河北省分公司",flag:1},{code:"14000",name:"海南省分公司",flag:1},{code:"15000",name:"广西分公司",flag:1},{code:"16000",name:"湖南省分公司",flag:1},{code:"17000",name:"浙江省分公司",flag:1},{code:"18000",name:"贵州省分公司",flag:1},{code:"19000",name:"四川省分公司",flag:1},{code:"20000",name:"青海省分公司",flag:1},{code:"21000",name:"云南省分公司",flag:1},{code:"22000",name:"陕西省分公司",flag:1},{code:"23000",name:"湖北省分公司",flag:1},{code:"24000",name:"吉林省分公司",flag:1},{code:"25000",name:"新疆分公司",flag:1},{code:"26000",name:"宁波市分公司",flag:1},{code:"28000",name:"大连市分公司",flag:1},{code:"29000",name:"甘肃省分公司",flag:1},{code:"30000",name:"安徽省分公司",flag:1},{code:"31000",name:"江西省分公司",flag:1},{code:"32000",name:"福建省分公司",flag:1},{code:"33000",name:"内蒙古分公司",flag:1},{code:"34000",name:"厦门市分公司",flag:1},{code:"35000",name:"宁夏自治区分公司",flag:1},{code:"36000",name:"西藏自治区分公司",flag:1}],channelList:[{code:"ct",name:"传统渠道",flag:0},{code:"org",name:"机构直管渠道",flag:1},{code:"vip",name:"重客渠道",flag:1},{code:"bank",name:"银保渠道",flag:1},{code:"agent",name:"经代渠道",flag:1},{code:"carIns",name:"车商渠道",flag:1},{code:"cross",name:"交叉销售渠道",flag:1},{code:"cn",name:"网电渠道",flag:0},{code:"tel",name:"电销渠道",flag:1},{code:"net",name:"网销渠道",flag:1},{code:"oat",name:"OAT",flag:1},{code:"mix",name:"融合渠道",flag:1}],sourceList:[{code:"00",name:"所有"},{code:"01",name:"个人代理"},{code:"02",name:"专业代理"},{code:"03",name:"兼业代理"}],config:{startdate:"2018-01-01",enddate:"2018-06-30",ownOrg:"",agent:"",protocolNo:"",ownSalesMan:"",isCharge:"",isIncludeSub:"",channel:"",source:""},columns:[{prop:"operation",width:120,label:"详情",align:"center",operation:!0,operations:[{text:"详情",event:"detail"}]},{prop:"premium",width:120,label:"保费规模预测(万元)"},{prop:"realpremium",width:120,label:"保费规模实际值(万元)"},{prop:"expbpayrate",width:120,label:"预期标费赔付率"},{prop:"hisbfullpayrate",width:120,label:"标费满期赔付率"},{prop:"personexppayrate",width:120,label:"核保人预估标费赔付率"},{prop:"realmanageCost",width:120,label:"自主折扣率"},{prop:"realserviceCost",width:120,label:"手续费率"},{prop:"realbjCostRate",width:120,label:"边际成本率"},{prop:"exppayrate",width:120,label:"预估赔付率"},{prop:"shouldpayRate",width:140,label:"理赔费用率(%)"},{prop:"marketdriverate",width:120,label:"营销推动费用率"},{prop:"salecostrate",width:120,label:"销售人力成本率"},{prop:"award",width:120,label:"其他费用率(%)"},{prop:"fixdefeerate",width:120,label:"固定费用率"},{prop:"changecosttate",width:120,label:"变动成本率"},{prop:"realcostRate",width:140,label:"保单成本率"},{prop:"realfeeRate",width:140,label:"保单费用率"},{prop:"realpayRate",width:140,label:"保单赔付率"}],columns1:[{prop:"dismanageCost",width:120,label:"自主折扣率"},{prop:"disserviceCost",width:120,label:"手续费率"},{prop:"disbjCostRate",width:120,label:"边际成本率"},{prop:"discostRate",width:140,label:"保单成本率"},{prop:"disfeeRate",width:140,label:"保单费用率"},{prop:"dispayRate",width:140,label:"保单赔付率"}],data:[{premium:953,expbpayrate:60,hisbfullpayrate:65,personexppayrate:66,realmanageCost:1.2,exppayrate:65,shouldpayRate:67,realserviceCost:16,marketdriverate:6,salecostrate:17,award:3,fixdefeerate:4,changecosttate:3,realcostRate:95,realfeeRate:16,realpayRate:65}],data1:[{dismanageCost:.1,disserviceCost:1,discostRate:-1,disfeeRate:1,dispayRate:-1}],detailcolumns:[{prop:"agencyNo",width:200,label:"代理协议号"},{prop:"agent",width:180,label:"代理人名称"},{prop:"ownOrg",width:260,label:"归属机构"}],detaildata:[{agencyNo:"50000100001",agent:"晋投保险经纪有限公司",ownOrg:"50000"},{agencyNo:"50000100002",agent:"晋投保险经纪有限公司",ownOrg:"50000"},{agencyNo:"50000100003",agent:"晋投保险经纪有限公司",ownOrg:"50000"},{agencyNo:"50000100004",agent:"晋投保险经纪有限公司",ownOrg:"50000"},{agencyNo:"50000100005",agent:"晋投保险经纪有限公司",ownOrg:"50000"}]}},methods:{query:function(){},spanDetailRow:function(e){e.row,e.column;var a=e.rowIndex;if(0===e.columnIndex)return 0===a||3===a?[3,1]:[0,0]},detail:function(){this.detailShow=!this.detailShow}}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"iv-container"},[t("div",{staticClass:"biz-content"},[t("el-form",{ref:"configForm",attrs:{"label-width":"120px",model:e.config,inline:!0}},[t("el-form-item",{attrs:{label:"统计起期"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.config.startdate,callback:function(a){e.$set(e.config,"startdate",a)},expression:"config.startdate"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"统计止期"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.config.enddate,callback:function(a){e.$set(e.config,"enddate",a)},expression:"config.enddate"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"归属机构:",prop:"ownOrg"}},[t("el-select",{attrs:{placeholder:"请选择归属机构",size:"medium"},model:{value:e.config.ownOrg,callback:function(a){e.$set(e.config,"ownOrg",a)},expression:"config.ownOrg"}},e._l(e.companyList,function(a){return t("el-option",{key:a.code,attrs:{value:a.code,label:a.name}},[1===a.flag?t("span",[e._v(" ")]):2===a.flag?t("span",[e._v("   ")]):e._e(),e._v(" "),t("span",[e._v(e._s(a.name))])])}))],1),e._v(" "),t("el-form-item",{attrs:{label:"代理人名称:",prop:"agent"}},[t("el-input",{model:{value:e.config.agent,callback:function(a){e.$set(e.config,"agent",a)},expression:"config.agent"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"协议号:",prop:"protocolNo"}},[t("el-input",{model:{value:e.config.protocolNo,callback:function(a){e.$set(e.config,"protocolNo",a)},expression:"config.protocolNo"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"归属业务员:",prop:"ownSalesMan"}},[t("el-input",{model:{value:e.config.ownSalesMan,callback:function(a){e.$set(e.config,"ownSalesMan",a)},expression:"config.ownSalesMan"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"业务渠道:",prop:"channel"}},[t("el-select",{attrs:{placeholder:"请选择业务渠道",clearable:""},model:{value:e.config.channel,callback:function(a){e.$set(e.config,"channel",a)},expression:"config.channel"}},e._l(e.channelList,function(e){return t("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"业务来源:",prop:"source"}},[t("el-select",{attrs:{placeholder:"请选择业务来源",clearable:""},model:{value:e.config.source,callback:function(a){e.$set(e.config,"source",a)},expression:"config.source"}},e._l(e.sourceList,function(e){return t("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("统计")])],1)],1),e._v(" "),t("div",{staticClass:"form"}),e._v(" "),t("div",{staticClass:"data"},[e._m(0),e._v(" "),t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns,data:e.data},on:{detail:e.detail}})],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.detailShow,expression:"detailShow"}],staticClass:"table"},[t("base-table",{attrs:{columns:e.detailcolumns,data:e.detaildata},on:{detail:e.detail}})],1),e._v(" "),e._m(1),e._v(" "),t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns1,data:e.data1}})],1),e._v(" "),e._m(2),e._v(" "),t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns1,data:e.data1}})],1)])],1)])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[this._v("代理协议定价汇总")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[this._v("目标偏离程度")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[this._v("监管报送偏离程度")])])}]};var n=t("VU/8")(l,o,!1,function(e){t("cbJP")},"data-v-ad6e4bc6",null);a.default=n.exports}});