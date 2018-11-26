webpackJsonp([85],{EgZR:function(e,t){},Fr7u:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Dd8w"),n=i.n(a),o=i("NYxO"),l={name:"ParamConfig",components:{BaseTable:function(){return i.e(106).then(i.bind(null,"ss0d"))},BackButton:function(){return i.e(107).then(i.bind(null,"uOVF"))}},data:function(){return{impDialogVisible:!1,columns:[{prop:"bizpcatgcd",label:"业务板块",width:150,align:"center"},{prop:"channelnmscope",label:"数据范围-渠道",width:130,align:"center",isEdit:!1,type:"select",options:[{value:"01",label:"网电"},{value:"02",label:"传统"}]},{prop:"levelscope",label:"数据范围(本级或上级)",width:180,align:"center",isEdit:!1,type:"select",options:[{value:"01",label:"本级"},{value:"02",label:"上级"}]},{prop:"monthscope",label:"保单范围(回滚月份数)",width:180,align:"center",isEdit:!1,type:"select",options:[{value:"12",label:"12"},{value:"18",label:"18"},{value:"24",label:"24"},{value:"30",label:"30"},{value:"36",label:"36"}]},{prop:"bcmode",label:"交商补贴模式",width:180,align:"center",isEdit:!1,type:"select",options:[{value:"01",label:"交商整体补贴"},{value:"02",label:"交商单元补贴"}]},{prop:"autoChannelDown",label:"自主渠道系数下限",width:150,align:"center",isEdit:!1,type:"input"},{prop:"autoChannelUp",label:"自主渠道系数上限",width:150,align:"center",isEdit:!1,type:"input"},{prop:"autoProtectDown",label:"自主核保系数下限",width:150,align:"center",isEdit:!1,type:"input"},{prop:"autoProtectUp",label:"自主核保系数上限",width:150,align:"center",isEdit:!1,type:"input"},{prop:"expectcostratemin",label:"保单成本率下限（%）",width:170,align:"center",isEdit:!1,type:"input"},{prop:"expectcostratemax",label:"保单成本率上限（%）",width:170,align:"center",isEdit:!1,type:"input"},{prop:"marketcostmin",label:"理赔费用率（%）",width:150,align:"center",isEdit:!1,type:"input"},{prop:"marketcostmax",label:"其他费用率",width:150,align:"center",isEdit:!1,type:"input"},{prop:"operation",width:120,label:"操作",operation:!0,operations:[{text:"预置智能推荐维度",event:"setDefaultDim"}]}],editFlag:!1,dimDialogVisible:!1,dimensionList:[{code:"car-price",name:"新车购置价"},{code:"usage",name:"使用性质"},{code:"age",name:"年龄"},{code:"insCom",name:"投保组合"},{code:"comLastCount",name:"商业险上年出险次数"},{code:"rci",name:"商业险上年出险金额"},{code:"gender",name:"性别"},{code:"car-age",name:"车龄"},{name:"交强险上年出险次数",code:"forceLastCount"},{name:"合计上年出险次数",code:"totalLastCount"},{name:"合计上年出险金额",code:"totalLastPay"},{name:"品牌车系分组",code:"jyBrandGroup"},{name:"座位数",code:"seatCount"},{name:"吨位数",code:"tonCount"},{name:"车龄",code:"useYear"},{name:"三者限额",code:"amount"},{name:"是否异地牌照",code:"outLandFlag"},{name:"是否投保盗抢险",code:"theftFlag"},{name:"是否投保车上人员责任险",code:"personDuty"},{name:"是否投保划痕险",code:"scratchFlag"},{name:"是否投保玻璃险",code:"glassFlag"},{name:"车辆种类",code:"carKind"},{name:"新续转保标识",code:"newFlag"}],currentCustomDimension:["car-price","usage","age","insCom"]}},computed:n()({},Object(o.d)({tableHeader:function(e){return e.app.tableHeader},sectorParam:function(e){return e.individual.sectorParam},paramTableShow:function(e){return e.individual.paramTableShow}})),methods:{setDefaultDim:function(){this.dimDialogVisible=!0},edit:function(){this.columns.forEach(function(e){void 0!==e.isEdit&&(e.isEdit=!0)}),this.editFlag=!0},query:function(){this.columns.forEach(function(e){void 0!==e.isEdit&&(e.isEdit=!1)}),this.editFlag=!1},recommend:function(){this.$router.push({path:"/admin/individual/declare/recommend"})},download:function(){var e=this;this.$confirm("确定下载模板?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"模板下载成功!"})}).catch(function(){})},upload:function(){this.impDialogVisible=!1,this.$message({type:"success",message:"数据导入成功!"})},exportData:function(){var e=this;this.$confirm("确定导出数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"数据导出成功!"})}).catch(function(){})}}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.paramTableShow,expression:"paramTableShow"}],staticClass:"biz-content"},[i("div",{staticClass:"data"},[e._m(0),e._v(" "),i("div",{staticClass:"table"},[i("base-table",{attrs:{columns:e.columns,data:e.sectorParam,rowKey:"id"},on:{setDefaultDim:e.setDefaultDim}})],1)]),e._v(" "),i("div",{staticClass:"option"},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:e.download}},[e._v("模板下载")]),e._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.impDialogVisible=!0}}},[e._v("数据导入")]),e._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:e.exportData}},[e._v("数据导出")]),e._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.editFlag,expression:"!editFlag"}],attrs:{type:"primary",plain:""},on:{click:e.edit}},[e._v("编辑")]),e._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:e.editFlag,expression:"editFlag"}],attrs:{type:"primary",plain:""},on:{click:e.query}},[e._v("保存")]),e._v(" "),i("back-button",{attrs:{type:"next"},on:{next:e.recommend}},[e._v("智能推荐")])],1),e._v(" "),i("el-dialog",{attrs:{title:"数据导入",visible:e.impDialogVisible,width:"40%"},on:{"update:visible":function(t){e.impDialogVisible=t}}},[i("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")]),e._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传excel文件，且不超过500kb")])],1),e._v(" "),i("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:e.upload}},[e._v("导入")]),e._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.impDialogVisible=!1}}},[e._v("关闭")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"预置智能推荐维度",visible:e.dimDialogVisible,width:"30%"},on:{"update:visible":function(t){e.dimDialogVisible=t}}},e._l(e.dimensionList,function(t){return i("el-tag",{key:t.code,attrs:{type:e.currentCustomDimension.includes(t.code)?"primary":"info"},nativeOn:{click:function(i){e.addDimension(t.code)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])}))],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip tip-default"},[t("span",{staticClass:"pull-left"},[this._v("基础业务清单范围来自平台：2015年10月1日至2017年10月1日")]),this._v(" "),t("div",{staticClass:"pull-right danger"},[this._v("如果数据量过小会，将影响推荐结果有效性，请合理选择数据范围！")])])}]};var c=i("VU/8")(l,s,!1,function(e){i("EgZR")},"data-v-079f5182",null);t.default=c.exports}});