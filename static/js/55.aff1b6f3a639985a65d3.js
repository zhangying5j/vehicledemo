webpackJsonp([55],{"3lHb":function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("Z4dx"),i={name:"baseInfo",components:{BackButton:function(){return t.e(107).then(t.bind(null,"uOVF"))},BaseTable:function(){return t.e(106).then(t.bind(null,"ss0d"))}},created:function(){var e=this;Object(a.c)().then(function(l){e.initData=l.data})},data:function(){return{initData:{},fleetDeclare:{orgCode:"01000",channel:"ct",ownSalesMan:"李莉",policyHolder:"天元人力资源有限公司",insuranceType:"1",expPayRate:"51.96"},fleetTypeCode:["10"],fleetTypeList:[{code:"1",name:"非营业企业客车"},{code:"2",name:"营业公路客运"},{code:"3",name:"营业城市公交"},{code:"4",name:"营业旅游车"},{code:"5",name:"非营业货车(含特四)"},{code:"6",name:"营业货车(含特四)"},{code:"7",name:"特一"},{code:"8",name:"特二"},{code:"9",name:"特三"},{code:"10",name:"营业出租租赁客车"}],importCols:[{prop:"d1",label:"车队类型",aligin:"center",width:120},{prop:"d2",label:"座位数/吨位数/特种车类型",aligin:"center",width:220},{prop:"d3",label:"车龄分段",aligin:"center",width:120},{prop:"d4",label:"承保车辆数",aligin:"center",width:120},{prop:"d5",label:"平均新车购置价(万元)",aligin:"center",width:120},{prop:"d6",label:"商业险自主渠道系数(0.85-1.15)",aligin:"center",width:120},{prop:"d7",label:"商业险自主核保系数(0.85-1.15)",aligin:"center",width:120},{prop:"d8",label:"交强险",aligin:"center",width:120},{prop:"d9",label:"车损",aligin:"center",width:120},{prop:"d10",label:"三者保额(万元)",aligin:"center",width:120},{prop:"d11",label:"盗抢",aligin:"center",width:120},{prop:"d12",label:"车上人员保额(驾驶员，万元)",aligin:"center",width:120},{prop:"d13",label:"车上人员总保额(乘客，万元)",aligin:"center",width:120},{prop:"d14",label:"车上货物保额(万元)",aligin:"center",width:120},{prop:"d15",label:"玻璃类型",aligin:"center",width:120},{prop:"d16",label:"自燃",aligin:"center",width:120},{prop:"d17",label:"其他险别",aligin:"center",width:120},{prop:"d18",label:"备注",aligin:"center",width:120}],importData:[{d1:"出租、租赁营业客车06",d2:"6座以下",d3:"[0-1)年",d4:"300",d5:"20",d6:"1.12",d7:"1.12",d8:"是",d9:"是",d10:"30",d11:"是",d12:"2",d13:"2",d14:"2",d15:"国产",d16:"是",d17:"是",d18:"无"},{d1:"出租、租赁营业客车06",d2:"6座以下",d3:"[0-1)年",d4:"300",d5:"20",d6:"1.12",d7:"1.12",d8:"是",d9:"是",d10:"30",d11:"是",d12:"2",d13:"2",d14:"2",d15:"国产",d16:"是",d17:"是",d18:"无"},{d1:"出租、租赁营业客车06",d2:"6座以下",d3:"[0-1)年",d4:"300",d5:"20",d6:"1.12",d7:"1.12",d8:"是",d9:"是",d10:"30",d11:"是",d12:"2",d13:"2",d14:"2",d15:"国产",d16:"是",d17:"是",d18:"无"},{d1:"出租、租赁营业客车06",d2:"6座以下",d3:"[0-1)年",d4:"300",d5:"20",d6:"1.12",d7:"1.12",d8:"是",d9:"是",d10:"30",d11:"是",d12:"2",d13:"2",d14:"2",d15:"国产",d16:"是",d17:"是",d18:"无"}],importDialogVisible:!1,importTableVisible:!1}},methods:{riskInfo:function(){this.$router.push("/admin/fleet/declare/modify/riskInfo")}}},o={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"container"},[t("div",{staticClass:"form"},[t("el-form",{ref:"fleetDeclareForm",attrs:{"label-width":"180px",inline:!0,model:e.fleetDeclare}},[t("el-form-item",{attrs:{label:"归属机构:",prop:"ownOrg"}},[t("el-select",{attrs:{placeholder:"请选择归属机构"},model:{value:e.fleetDeclare.orgCode,callback:function(l){e.$set(e.fleetDeclare,"orgCode",l)},expression:"fleetDeclare.orgCode"}},e._l(e.initData.companyList,function(l){return t("el-option",{key:l.code,attrs:{value:l.code,label:l.name}},[1===l.flag?t("span",[e._v(" ")]):2===l.flag?t("span",[e._v("   ")]):e._e(),e._v(" "),t("span",[e._v(e._s(l.name))])])}))],1),e._v(" "),t("el-form-item",{attrs:{label:"归属渠道:",prop:"channel"}},[t("el-select",{attrs:{placeholder:"请选择渠道"},model:{value:e.fleetDeclare.channel,callback:function(l){e.$set(e.fleetDeclare,"channel",l)},expression:"fleetDeclare.channel"}},e._l(e.initData.channelList,function(e){return t("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"归属业务员:",prop:"ownSalesMan"}},[t("el-input",{model:{value:e.fleetDeclare.ownSalesMan,callback:function(l){e.$set(e.fleetDeclare,"ownSalesMan",l)},expression:"fleetDeclare.ownSalesMan"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"投保人名称:",prop:"policyHolder"}},[t("el-input",{model:{value:e.fleetDeclare.policyHolder,callback:function(l){e.$set(e.fleetDeclare,"policyHolder",l)},expression:"fleetDeclare.policyHolder"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"续保状态:",prop:"insuranceType"}},[t("el-select",{model:{value:e.fleetDeclare.insuranceType,callback:function(l){e.$set(e.fleetDeclare,"insuranceType",l)},expression:"fleetDeclare.insuranceType"}},[t("el-option",{attrs:{value:"1",label:"新保"}}),e._v(" "),t("el-option",{attrs:{value:"2",label:"续保"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"核保人预估赔付率(%)",prop:"expPayRate"}},[t("el-input",{model:{value:e.fleetDeclare.expPayRate,callback:function(l){e.$set(e.fleetDeclare,"expPayRate",l)},expression:"fleetDeclare.expPayRate"}})],1)],1)],1),e._v(" "),t("div",{staticClass:"sector-list"},[t("div",{staticClass:"title"},[e._v("车队类型")]),e._v(" "),t("div",{staticClass:"biz-sector"},[t("el-form",{attrs:{"label-width":"120px",inline:!0}},[t("el-form-item",[t("el-checkbox-group",{model:{value:e.fleetTypeCode,callback:function(l){e.fleetTypeCode=l},expression:"fleetTypeCode"}},[e._l(e.fleetTypeList,function(l){return t("el-checkbox",{key:l.code,attrs:{label:l.code,name:"fleetType"}},[e._v("\n              "+e._s(l.name)+"\n            ")])}),e._v(" "),t("el-checkbox",{staticStyle:{color:"red"},attrs:{label:"0"}},[e._v(" 未勾选板块出单取0费用")])],2)],1)],1)],1)]),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{on:{click:function(l){e.importDialogVisible=!0}}},[e._v("导  入")]),e._v(" "),t("el-button",[e._v("配置部门")]),e._v(" "),t("back-button",{attrs:{type:"next"},on:{next:e.riskInfo}},[e._v("下一步")])],1),e._v(" "),t("base-table",{directives:[{name:"show",rawName:"v-show",value:e.importTableVisible,expression:"importTableVisible"}],attrs:{columns:e.importCols,data:e.importData,"show-header":!0}}),e._v(" "),t("el-dialog",{attrs:{title:"信息导入",visible:e.importDialogVisible,width:"400px"},on:{"update:visible":function(l){e.importDialogVisible=l}}},[t("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","auto-upload":!1,drag:""}},[t("i",{staticClass:"el-icon-upload"}),e._v(" "),t("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),t("em",[e._v("点击上传")])]),e._v(" "),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("Excel格式，以.xls为后缀名")])]),e._v(" "),t("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:function(l){e.importDialogVisible=!1,e.importTableVisible=!0}}},[e._v("导入")]),e._v(" "),t("el-button",{attrs:{type:"primary",plain:""},on:{click:function(l){e.importDialogVisible=!1}}},[e._v("关闭")])],1)],1)],1)},staticRenderFns:[]};var n=t("VU/8")(i,o,!1,function(e){t("ri8B")},"data-v-483eff59",null);l.default=n.exports},ri8B:function(e,l){}});