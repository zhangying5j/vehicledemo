webpackJsonp([136],{CEYg:function(e,a){},dQTo:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=r("NYxO"),t=r("Z4dx"),n={name:"QueryForm",data:function(){return{initData:{},rules:{orgcd:[{required:!0,trigger:"change",message:"机构不能为空"}],channelcd:[{required:!0,trigger:"change",message:"渠道不能为空"}]}}},computed:Object(i.d)({viewParameters:function(e){return e.individual.viewParameters},lifeFormOptionShow:function(e){return e.individual.lifeFormOptionShow},rollbackFlag:function(e){return e.individual.rollbackFlag},versionFlag:function(e){return e.individual.versionFlag},param:function(e){return e.individual.param}}),created:function(){var e=this;Object(t.c)().then(function(a){e.initData=a.data})},methods:{querySector:function(){this.valid("querySector")},valid:function(e){var a=this;this.$refs.individualVehicleForm.validate(function(r){r&&a.$emit(e)})}}},l={render:function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("el-form",{ref:"individualVehicleForm",attrs:{inline:!0,size:"small",model:e.param,rules:e.rules}},[r("el-form-item",{attrs:{label:"机构名称",prop:"orgcd"}},[r("el-select",{attrs:{placeholder:"请选择机构名称",size:"medium",disabled:!e.lifeFormOptionShow},model:{value:e.param.orgcd,callback:function(a){e.$set(e.param,"orgcd",a)},expression:"param.orgcd"}},e._l(e.initData.companyList,function(a){return r("el-option",{key:a.code,attrs:{value:a.code,label:a.name}},[1===a.flag?r("span",[e._v(" ")]):2===a.flag?r("span",[e._v("   ")]):e._e(),e._v(" "),r("span",[e._v(e._s(a.name))])])}))],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.rollbackFlag,expression:"rollbackFlag"}],attrs:{label:"交商补贴模式",prop:"cbmode"}},[r("el-select",{attrs:{placeholder:"请选择交商补贴模式",size:"medium"},model:{value:e.param.cbmode,callback:function(a){e.$set(e.param,"cbmode",a)},expression:"param.cbmode"}},[r("el-option",{attrs:{label:"交商整体补贴",value:"交商整体补贴"}}),e._v(" "),r("el-option",{attrs:{label:"交商单元补贴",value:"交商单元补贴"}})],1)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.versionFlag,expression:"versionFlag"}],attrs:{label:"版本号"}},[r("el-input",{attrs:{readonly:""},model:{value:e.param.version,callback:function(a){e.$set(e.param,"version",a)},expression:"param.version"}})],1),e._v(" "),r("el-form-item",[r("el-button",{directives:[{name:"show",rawName:"v-show",value:e.viewParameters,expression:"viewParameters"}],attrs:{plain:"",size:"small",type:"primary"},on:{click:e.querySector}},[e._v("查看参数")])],1)],1)},staticRenderFns:[]};var o=r("VU/8")(n,l,!1,function(e){r("CEYg")},"data-v-51f123a1",null);a.default=o.exports}});