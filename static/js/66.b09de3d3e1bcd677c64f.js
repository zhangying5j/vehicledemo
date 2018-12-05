webpackJsonp([66],{"8F4i":function(e,t){},csRf:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=o("Dd8w"),r=o.n(c),l=o("NYxO"),p={name:"BudgetYearinsurce",components:{BaseTable:function(){return o.e(118).then(o.bind(null,"ss0d"))}},created:function(){},data:function(){return{param:{org:"",autoChannelDown:"",autoChannelUp:"",autoProtectDown:"",autoProtectUp:""},rules:{org:[{required:!0,trigger:"change",message:"机构名称不能为空"}]},dataHidden:!0,orgList:[{code:"10000",name:"北京分公司"},{code:"20000",name:"上海分公司"},{code:"30000",name:"江苏省分公司"},{code:"40000",name:"山东省分公司"},{code:"50000",name:"山西省分公司"}],secondData:[{id:"1",org:"北京分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"2",org:"上海分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"3",org:"江苏省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"4",org:"山东省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"5",org:"山西省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"}],thirdData:[{id:"1",org:"山西省分公司太原支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"2",org:"山西省分公司大同支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"3",org:"山西省分公司阳泉支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"4",org:"山西省分公司长治支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"5",org:"山西省分公司晋城支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"6",org:"山西省分公司朔州支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"7",org:"山西省分公司晋中支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"8",org:"山西省分公司运城支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"9",org:"山西省分公司忻州支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"10",org:"山西省分公司临汾支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"11",org:"山西省分公司吕梁支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"}],impDialogVisible:!1,data:[],columns:[{prop:"org",label:"渠道",width:"120"},{prop:"a",label:"保单年单笔业务中介机构手续费率或个人代理人费用率最高值",width:"150",isEdit:!0,type:"input"},{prop:"b",label:"保单年中介机构手续费率或个人代理人费用率平均值",width:"150",isEdit:!0,type:"input"},{prop:"c",label:"保单年费用率",width:"150",isEdit:!0,type:"input"},{prop:"d",label:"保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"e",label:"保单年成本率",width:"180",isEdit:!0,type:"input"}],data31:[],columns31:[{prop:"org",label:"车种",width:"120"},{prop:"a",label:"保单年单笔业务中介机构手续费率最高值",width:"150",isEdit:!0,type:"input"},{prop:"b",label:"保单年中介机构手续费率平均值",width:"150",isEdit:!0,type:"input"},{prop:"c",label:"保单年单笔业务个人代理人费用率最高值",width:"150",isEdit:!0,type:"input"},{prop:"d",label:"保单年个人代理人费用率平均值",width:"150",isEdit:!0,type:"input"},{prop:"e",label:"保单年费用率",width:"150",isEdit:!0,type:"input"},{prop:"f",label:"保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"g",label:"保单年成本率",width:"180",isEdit:!0,type:"input"}]}},computed:r()({},Object(l.d)({formData:function(e){return e.budget.formData}})),methods:{query:function(){this.data=[{org:"传统直销"},{org:"新渠道直销"},{org:"电话、网络直销"},{org:"个人代理"},{org:"兼业代理"},{org:"专业代理"},{org:"经纪业务"}],this.data31=[{org:"家庭自用车"},{org:"营业客车"},{org:"非营业客车"},{org:"营业货车"},{org:"非营业货车"},{org:"其他"}]}}},a={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("div",[o("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("导入")]),e._v(" "),o("el-button",{attrs:{plain:"",size:"small",type:"primary"}},[e._v("编辑")]),e._v(" "),o("el-button",{attrs:{plain:"",size:"small",type:"primary"}},[e._v("保存")])],1),e._v(" "),e._m(0),e._v(" "),o("div",{staticClass:"data table"},[o("el-tabs",{attrs:{type:"border-card"}},[o("el-tab-pane",{attrs:{label:"分渠道"}},[o("base-table",{attrs:{columns:e.columns,data:e.data,rowKey:"id",showSummary:!0}})],1),e._v(" "),o("el-tab-pane",{attrs:{label:"分车种"}},[o("base-table",{attrs:{columns:e.columns31,data:e.data31,rowKey:"id",showSummary:!0}})],1)],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("br")])}]};var n=o("VU/8")(p,a,!1,function(e){o("8F4i")},"data-v-4476d20f",null);t.default=n.exports}});