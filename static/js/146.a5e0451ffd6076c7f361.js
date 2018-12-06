webpackJsonp([146],{SZ5I:function(e,o){},mo6E:function(e,o,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=l("Dd8w"),t=l.n(a),n=l("NYxO"),c={name:"QueryForm",props:{config:{type:Object,required:!0},rules:{type:Object,default:null}},data:function(){return{bizShow:!1,sectorList:[{code:"1",name:"家用-新车"},{code:"2",name:"家用-旧车"},{code:"3",name:"企业非营业客车"},{code:"4",name:"企业非营业货车"},{code:"5",name:"机关非营业客车"},{code:"6",name:"机关非营业货车"},{code:"7",name:"机关非营业特种车"},{code:"8",name:"机动非营业客车"},{code:"9",name:"营业出租客车"},{code:"10",name:"营业出租货车"},{code:"11",name:"营业城市公交"},{code:"12",name:"营业旅游客车"},{code:"13",name:"营业公路货车"},{code:"14",name:"营业公路挂车"}]}},created:function(){this.$store.dispatch("initConfigFormData")},computed:t()({},Object(n.d)({configFormData:function(e){return e.agency.configFormData}})),methods:{reset:function(){this.config.declareFlag=[],this.$refs.configForm.resetFields()},change:function(e){this.bizShow=1===e,this.$emit("change")}}},r={render:function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("div",[l("el-form",{ref:"configForm",attrs:{"label-width":"120px",model:e.config,rules:e.rules,inline:!0}},[l("el-row",[l("el-col",{attrs:{span:8,offset:8}},[l("el-form-item",{attrs:{prop:"type"}},[l("el-radio-group",{on:{change:e.change},model:{value:e.config.type,callback:function(o){e.$set(e.config,"type",o)},expression:"config.type"}},[l("el-radio",{staticStyle:{width:"110px"},attrs:{label:1}},[e._v("单一板块配费")]),e._v(" "),l("el-radio",{staticStyle:{width:"110px"},attrs:{label:2}},[e._v("单一来源配费")])],1)],1)],1)],1)],1),e._v(" "),l("el-form",{ref:"configForm",attrs:{"label-width":"120px",model:e.config,rules:e.rules,inline:!0}},[l("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.bizShow,expression:"bizShow"}],attrs:{label:"业务板块:",prop:"bizSector"}},[l("el-select",{model:{value:e.config.bizSector,callback:function(o){e.$set(e.config,"bizSector",o)},expression:"config.bizSector"}},e._l(e.sectorList,function(e){return l("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"代理人名称:",prop:"agent"}},[l("el-input",{model:{value:e.config.agent,callback:function(o){e.$set(e.config,"agent",o)},expression:"config.agent"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"协议号:",prop:"protocolNo"}},[l("el-input",{model:{value:e.config.protocolNo,callback:function(o){e.$set(e.config,"protocolNo",o)},expression:"config.protocolNo"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"归属业务员:",prop:"ownSalesMan"}},[l("el-input",{model:{value:e.config.ownSalesMan,callback:function(o){e.$set(e.config,"ownSalesMan",o)},expression:"config.ownSalesMan"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"是否协议收费:",prop:"isCharge"}},[l("el-select",{model:{value:e.config.isCharge,callback:function(o){e.$set(e.config,"isCharge",o)},expression:"config.isCharge"}},[l("el-option",{attrs:{label:"是",value:"y"}}),e._v(" "),l("el-option",{attrs:{label:"否",value:"n"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"是否包含下级:",prop:"isIncludeSub"}},[l("el-select",{model:{value:e.config.isIncludeSub,callback:function(o){e.$set(e.config,"isIncludeSub",o)},expression:"config.isIncludeSub"}},[l("el-option",{attrs:{label:"是",value:"y"}}),e._v(" "),l("el-option",{attrs:{label:"否",value:"n"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"业务渠道:",prop:"channel"}},[l("el-select",{attrs:{placeholder:"请选择业务渠道",clearable:""},model:{value:e.config.channel,callback:function(o){e.$set(e.config,"channel",o)},expression:"config.channel"}},e._l(e.configFormData.channelList,function(e){return l("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"业务来源:",prop:"source"}},[l("el-select",{attrs:{placeholder:"请选择业务来源",clearable:""},model:{value:e.config.source,callback:function(o){e.$set(e.config,"source",o)},expression:"config.source"}},e._l(e.configFormData.sourceList,function(e){return l("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"申报状态:",prop:"declareFlag"}},[l("el-checkbox-group",{model:{value:e.config.declareFlag,callback:function(o){e.$set(e.config,"declareFlag",o)},expression:"config.declareFlag"}},[l("el-checkbox",{attrs:{label:"1",name:"declareFlag"}},[e._v("未申报")]),e._v(" "),l("el-checkbox",{attrs:{label:"2",name:"declareFlag"}},[e._v("待审批")]),e._v(" "),l("el-checkbox",{attrs:{label:"3",name:"declareFlag"}},[e._v("已审批")]),e._v(" "),l("el-checkbox",{attrs:{label:"4",name:"declareFlag"}},[e._v("待修改")]),e._v(" "),l("el-checkbox",{attrs:{label:"5",name:"declareFlag"}},[e._v("需要重新申报")])],1)],1)],1)],1)},staticRenderFns:[]};var i=l("VU/8")(c,r,!1,function(e){l("SZ5I")},"data-v-702c3934",null);o.default=i.exports}});