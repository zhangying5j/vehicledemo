webpackJsonp([128],{"8qXw":function(e,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=r("Dd8w"),t=r.n(n),a=r("NYxO"),l={name:"VersionQueryForm",props:{personForm:{type:Object,required:!0},rules:{type:Object,default:null},endMonthShow:{type:Boolean,required:!0},timeRangeShow:{type:Boolean,required:!0},versionShow:{type:Boolean,required:!0}},created:function(){this.$store.dispatch("initPersonFormData")},computed:t()({},Object(a.d)({personFormData:function(e){return e.inspect.personFormData}}))},s={render:function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("el-form",{ref:"personForm",attrs:{"label-width":"120px",model:e.personForm,rules:e.rules,inline:!0}},[r("el-form-item",{attrs:{label:"机构",prop:"org"}},[r("el-select",{attrs:{placeholder:"请选择机构",clearable:""},model:{value:e.personForm.org,callback:function(o){e.$set(e.personForm,"org",o)},expression:"personForm.org"}},e._l(e.personFormData.orgList,function(e){return r("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"渠道",prop:"channel"}},[r("el-select",{attrs:{placeholder:"请选择渠道",clearable:""},model:{value:e.personForm.channel,callback:function(o){e.$set(e.personForm,"channel",o)},expression:"personForm.channel"}},e._l(e.personFormData.channelList,function(e){return r("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),e.endMonthShow?r("el-form-item",{attrs:{label:"作用区间",prop:"monthrange"}},[r("el-date-picker",{attrs:{type:"month",placeholder:"选择月","value-format":"yyyy-MM"},model:{value:e.personForm.startmonth,callback:function(o){e.$set(e.personForm,"startmonth",o)},expression:"personForm.startmonth"}}),e._v(" "),r("span",[e._v("至")]),e._v(" "),r("el-date-picker",{attrs:{type:"month",placeholder:"选择月","value-format":"yyyy-MM"},model:{value:e.personForm.endmonth,callback:function(o){e.$set(e.personForm,"endmonth",o)},expression:"personForm.endmonth"}})],1):e._e(),e._v(" "),e.timeRangeShow?r("el-form-item",{attrs:{label:"预算期间",prop:"timeRange"}},[r("el-select",{attrs:{placeholder:"请选择预算期间",clearable:""},model:{value:e.personForm.timeRange,callback:function(o){e.$set(e.personForm,"timeRange",o)},expression:"personForm.timeRange"}},e._l(e.personFormData.timeRangeList,function(e){return r("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1):e._e(),e._v(" "),r("el-form-item",{attrs:{label:"精算模型版本",prop:"version"}},[r("el-input",{model:{value:e.personForm.actuaryVersion,callback:function(o){e.$set(e.personForm,"actuaryVersion",o)},expression:"personForm.actuaryVersion"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"预算方案版本",prop:"version"}},[r("el-input",{model:{value:e.personForm.version,callback:function(o){e.$set(e.personForm,"version",o)},expression:"personForm.version"}})],1)],1)},staticRenderFns:[]};var p=r("VU/8")(l,s,!1,function(e){r("vHCv")},"data-v-51ab47f8",null);o.default=p.exports},vHCv:function(e,o){}});