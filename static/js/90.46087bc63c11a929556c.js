webpackJsonp([90],{"3mE9":function(e,l){},cuiM:function(e,l,r){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=r("Dd8w"),c=r.n(o),t=r("NYxO"),a={name:"ChartMonthanalysis",components:{BaseTable:function(){return r.e(118).then(r.bind(null,"ss0d"))}},created:function(){},data:function(){return{param:{org:"10000",insurceType:""},rules:{org:[{required:!0,trigger:"change",message:"机构名称不能为空"}]},dataHidden:!0,orgList:[{code:"10000",name:"北京分公司"},{code:"20000",name:"上海分公司"},{code:"30000",name:"江苏省分公司"},{code:"40000",name:"山东省分公司"},{code:"50000",name:"山西省分公司"}],insurceTypeList:[{code:"1",name:"车险整体"},{code:"2",name:"商业险"},{code:"3",name:"交强险"}],customerTypeList:[{code:"1",name:"新续转"},{code:"2",name:"新报"},{code:"3",name:"续保"},{code:"4",name:"转保"}],columns:[{prop:"o",label:"机构",width:"120"},{prop:"tr",label:"业务发展",align:"center",children:[{prop:"expOperation",width:120,label:"保单件数",align:"center"},{prop:"realOperation",width:120,label:"同比",align:"center"},{prop:"disOperation",width:120,label:"件均保费（元）",align:"center"},{prop:"a",width:120,label:"同比",align:"center"},{prop:"b",width:120,label:"保费收入（元）",align:"center"},{prop:"c",width:120,label:"同比",align:"center"},{prop:"f",width:120,label:"签单保费（元）",align:"center"},{prop:"d",width:120,label:"同比",align:"center"}]},{prop:"trwt",width:120,label:"承保条件",align:"center",children:[{prop:"ss",width:120,label:"业务占比",align:"center"},{prop:"ssss",width:120,label:"同比",align:"center"},{prop:"dasf",width:120,label:"新保占比",align:"center"},{prop:"fdafda",width:120,label:"同比",align:"center"}]},{prop:"rew4",width:120,label:"业务质量",align:"center",children:[{prop:"gf",width:120,label:"手续费",align:"center"},{prop:"da",width:120,label:"同比",align:"center"},{prop:"dfsaf",width:120,label:"签单折扣",align:"center"},{prop:"fag",width:120,label:"同比",align:"center"}]},{prop:"r42425",width:120,label:"业务质量",align:"center",children:[{prop:"das",width:120,label:"日历年赔付率",align:"center"},{prop:"fdas",width:120,label:"同比",align:"center"},{prop:"fdac",width:120,label:"17保单赔付率（进展至201806）",align:"center"},{prop:"fdad",width:120,label:"18年保单赔付率（进展至201806）",align:"center"},{prop:"zcxvc",width:120,label:"同比",align:"center"},{prop:"xds",width:120,label:"满期出险率",align:"center"},{prop:"gfdsg",width:120,label:"同比",align:"center"},{prop:"jf",width:120,label:"案均赔款（已决+未决）",align:"center"},{prop:"mvb",width:120,label:"同比",align:"center"},{prop:"jhf",width:120,label:"已决案均",align:"center"},{prop:"nv",width:120,label:"同比",align:"center"},{prop:"jhfn",width:120,label:"未决案均",align:"center"},{prop:"uf",width:120,label:"同比",align:"center"}]}],data:[],secondData:[{id:"1",org:"北京分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"2",org:"上海分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"3",org:"江苏省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"4",org:"山东省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"5",org:"山西省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"}],thirdData:[{id:"1",org:"山西省分公司太原支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"2",org:"山西省分公司大同支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"3",org:"山西省分公司阳泉支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"4",org:"山西省分公司长治支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"5",org:"山西省分公司晋城支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"6",org:"山西省分公司朔州支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"7",org:"山西省分公司晋中支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"8",org:"山西省分公司运城支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"9",org:"山西省分公司忻州支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"10",org:"山西省分公司临汾支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"11",org:"山西省分公司吕梁支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"}],impDialogVisible:!1}},computed:c()({},Object(t.d)({formData:function(e){return e.budget.formData}})),methods:{query:function(){var e=this;this.columns[0].label=this.orgList.find(function(l){return l.code===e.param.org}).name,this.data=[{o:"细分市场"},{o:"家庭自用"},{o:"非营业客车"},{o:"非营业货车"},{o:"营业客车"},{o:"普通营业货车"},{o:"三大货"},{o:"特种车"},{o:"营业货运"},{o:"其他"}]}}},n={render:function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("div",{staticClass:"container"},[r("div",{staticClass:"form"},[r("el-form",{ref:"",attrs:{"label-width":"120px",inline:!0,model:e.param}},[r("el-form-item",{attrs:{label:"机构代码:",prop:"org"}},[r("el-select",{attrs:{placeholder:"请选择机构代码",size:"medium",required:""},model:{value:e.param.org,callback:function(l){e.$set(e.param,"org",l)},expression:"param.org"}},e._l(e.orgList,function(e){return r("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"险种:",prop:"insurceType"}},[r("el-select",{attrs:{size:"medium"},model:{value:e.param.insurceType,callback:function(l){e.$set(e.param,"insurceType",l)},expression:"param.insurceType"}},e._l(e.insurceTypeList,function(e){return r("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"新续转:",prop:"customerType"}},[r("el-select",{attrs:{size:"medium"},model:{value:e.param.customerType,callback:function(l){e.$set(e.param,"customerType",l)},expression:"param.customerType"}},e._l(e.customerTypeList,function(e){return r("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),r("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("查询")])],1)],1),e._v(" "),r("div",{staticClass:"data"},[r("div",{staticClass:"table"},[r("base-table",{attrs:{columns:e.columns,data:e.data,rowKey:"id"}})],1)])])},staticRenderFns:[]};var p=r("VU/8")(a,n,!1,function(e){r("3mE9")},"data-v-1bd37646",null);l.default=p.exports}});