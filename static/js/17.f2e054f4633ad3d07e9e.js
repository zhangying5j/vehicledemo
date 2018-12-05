webpackJsonp([17],{EFuX:function(e,t){},ydWB:function(e,t,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=p("Dd8w"),l=p.n(i),o=p("NYxO"),r={name:"BudgetNewbudger",components:{BaseTable:function(){return p.e(118).then(p.bind(null,"ss0d"))}},created:function(){},data:function(){return{param:{org:"",autoChannelDown:"",autoChannelUp:"",autoProtectDown:"",autoProtectUp:""},rules:{org:[{required:!0,trigger:"change",message:"机构名称不能为空"}]},dataHidden:!0,orgList:[{code:"10000",name:"北京分公司"},{code:"20000",name:"上海分公司"},{code:"30000",name:"江苏省分公司"},{code:"40000",name:"山东省分公司"},{code:"50000",name:"山西省分公司"}],secondData:[{id:"1",org:"北京分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"2",org:"上海分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"3",org:"江苏省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"4",org:"山东省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"5",org:"山西省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"}],thirdData:[{id:"1",org:"山西省分公司太原支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"2",org:"山西省分公司大同支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"3",org:"山西省分公司阳泉支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"4",org:"山西省分公司长治支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"5",org:"山西省分公司晋城支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"6",org:"山西省分公司朔州支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"7",org:"山西省分公司晋中支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"8",org:"山西省分公司运城支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"9",org:"山西省分公司忻州支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"10",org:"山西省分公司临汾支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"11",org:"山西省分公司吕梁支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"}],impDialogVisible:!1,data:[],columns:[{prop:"org",label:"渠道",width:"120"},{prop:"a",label:"标准保费",width:"150",isEdit:!0,type:"input"},{prop:"aa",label:"含NCD的保费",width:"150",isEdit:!0,type:"input"},{prop:"b",label:"含NCD、自主核保系数、自主渠道系数的保费",width:"150",isEdit:!0,type:"input"},{prop:"c",label:"NCD平均值",width:"150",isEdit:!0,type:"input"},{prop:"d",label:"自主核保系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"e",label:"自主核保系数最低值",width:"180",isEdit:!0,type:"input"},{prop:"f",label:"自主核保系数最高值",width:"180",isEdit:!0,type:"input"},{prop:"g",label:"自主渠道系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"h",label:"自主渠道系数最低值",width:"150",isEdit:!0,type:"input"},{prop:"i",label:"自主渠道系数最高值",width:"150",isEdit:!0,type:"input"},{prop:"j",label:"自主渠道系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"k",label:"自主折扣系数最低值",width:"150",isEdit:!0,type:"input"},{prop:"l",label:"自主折扣系数最高值",width:"150",isEdit:!0,type:"input"},{prop:"m",label:"自主折扣系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"n",label:"假设仍沿用行业旧基准费率的平均自主核保系数",width:"150",isEdit:!0,type:"input"},{prop:"o",label:"假设仍沿用行业旧基准费率的平均自主核保系数",width:"150",isEdit:!0,type:"input"},{prop:"p",label:"假设仍沿用行业旧基准费率的平均自主渠道系数",width:"150",isEdit:!0,type:"input"},{prop:"q",label:"假设仍沿用行业旧基准费率的平均自主折扣系数",width:"150",isEdit:!0,type:"input"},{prop:"r",label:"标准保费的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"s",label:"含NCD的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"t",label:"含NCD、自主核保系数的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"u",label:"含NCD、自主核保系数、自主渠道系数的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"v",label:"保单年费用率",width:"150",isEdit:!0,type:"input"},{prop:"w",label:"保单年单笔业务中介机构手续费率或个人代理人费用率最高值",width:"150",isEdit:!0,type:"input"},{prop:"x",label:"保单年中介机构手续费率或个人代理人费用率平均值",width:"150",isEdit:!0,type:"input"},{prop:"y",label:"保单年成本率",width:"150",isEdit:!0,type:"input"}],data21:[],columns21:[{prop:"org",label:"车种",width:"120"},{prop:"ss",label:"",width:"150",isEdit:!0,type:"input"},{prop:"a",label:"标准保费",width:"150",isEdit:!0,type:"input"},{prop:"b",label:"含NCD、自主核保系数、自主渠道系数的保费",width:"150",isEdit:!0,type:"input"},{prop:"c",label:"含NCD的保费",width:"150",isEdit:!0,type:"input"},{prop:"d",label:"自主核保系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"e",label:"自主核保系数最低值",width:"180",isEdit:!0,type:"input"},{prop:"f",label:"自主核保系数最高值",width:"180",isEdit:!0,type:"input"},{prop:"g",label:"自主渠道系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"h",label:"自主渠道系数最低值",width:"150",isEdit:!0,type:"input"},{prop:"i",label:"自主渠道系数最高值",width:"150",isEdit:!0,type:"input"},{prop:"j",label:"自主渠道系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"k",label:"自主折扣系数最低值",width:"150",isEdit:!0,type:"input"},{prop:"l",label:"自主折扣系数最高值",width:"150",isEdit:!0,type:"input"},{prop:"m",label:"自主折扣系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"n",label:"假设仍沿用行业旧基准费率的平均自主核保系数",width:"150",isEdit:!0,type:"input"},{prop:"o",label:"假设仍沿用行业旧基准费率的平均自主核保系数",width:"150",isEdit:!0,type:"input"},{prop:"p",label:"假设仍沿用行业旧基准费率的平均自主渠道系数",width:"150",isEdit:!0,type:"input"},{prop:"q",label:"假设仍沿用行业旧基准费率的平均自主折扣系数",width:"150",isEdit:!0,type:"input"},{prop:"r",label:"标准保费的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"s",label:"含NCD的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"t",label:"含NCD、自主核保系数的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"u",label:"含NCD、自主核保系数、自主渠道系数的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"v",label:"保单年费用率",width:"150",isEdit:!0,type:"input"},{prop:"w",label:"保单年单笔业务中介机构手续费率最高值",width:"150",isEdit:!0,type:"input"},{prop:"x",label:"保单年中介机构手续费率平均值",width:"150",isEdit:!0,type:"input"},{prop:"xy",label:"保单年单笔业务个人代理人费用率最高值",width:"150",isEdit:!0,type:"input"},{prop:"xx",label:"保单年个人代理人费用率平均值",width:"150",isEdit:!0,type:"input"},{prop:"y",label:"保单年成本率",width:"150",isEdit:!0,type:"input"}]}},computed:l()({},Object(o.d)({formData:function(e){return e.budget.formData}})),methods:{query:function(){this.data=[{org:"传统直销"},{org:"新渠道直销"},{org:"电话、网络直销"},{org:"个人代理"},{org:"兼业代理"},{org:"专业代理"},{org:"经纪业务"}],this.data21=[{org:"客车",ss:["家庭自用车"]},{org:"货车",ss:"营业货车"}]}}},a={render:function(){var e=this,t=e.$createElement,p=e._self._c||t;return p("div",{staticClass:"container"},[p("div",[p("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("导入")]),e._v(" "),p("el-button",{attrs:{plain:"",size:"small",type:"primary"}},[e._v("编辑")]),e._v(" "),p("el-button",{attrs:{plain:"",size:"small",type:"primary"}},[e._v("保存")])],1),e._v(" "),e._m(0),e._v(" "),p("div",{staticClass:"data table"},[p("el-tabs",{attrs:{type:"border-card"}},[p("el-tab-pane",{attrs:{label:"分渠道"}},[p("base-table",{attrs:{columns:e.columns,data:e.data,rowKey:"id",showSummary:!0}})],1),e._v(" "),p("el-tab-pane",{attrs:{label:"分车种"}},[p("base-table",{attrs:{columns:e.columns21,data:e.data21,rowKey:"id",showSummary:!0}})],1)],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("br")])}]};var n=p("VU/8")(r,a,!1,function(e){p("EFuX")},"data-v-d69ca8fc",null);t.default=n.exports}});