webpackJsonp([141],{Ju5o:function(e,r,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=l("Dd8w"),t=l.n(a),o=l("NYxO"),n={name:"RealQueryForm",props:{realForm:{type:Object,required:!0},rules:{type:Object,default:null}},created:function(){this.$store.dispatch("initRealFormData")},computed:t()({},Object(o.d)({realFormData:function(e){return e.inspect.realFormData}}),{inspectType:function(){return this.inspect.type}})},c={render:function(){var e=this,r=e.$createElement,l=e._self._c||r;return l("el-form",{ref:"realForm",attrs:{"label-width":"120px",model:e.realForm,rules:e.rules,inline:!0}},[l("el-form-item",{attrs:{label:"机构",prop:"org"}},[l("el-select",{attrs:{placeholder:"请选择机构",clearable:""},model:{value:e.realForm.org,callback:function(r){e.$set(e.realForm,"org",r)},expression:"realForm.org"}},e._l(e.realFormData.orgList,function(e){return l("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"渠道",prop:"channel"}},[l("el-select",{attrs:{placeholder:"请选择渠道",clearable:""},model:{value:e.realForm.channel,callback:function(r){e.$set(e.realForm,"channel",r)},expression:"realForm.channel"}},e._l(e.realFormData.channelList,function(e){return l("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"统计粒度",prop:"size"}},[l("el-select",{attrs:{placeholder:"请选择统计粒度",clearable:""},model:{value:e.realForm.size,callback:function(r){e.$set(e.realForm,"size",r)},expression:"realForm.size"}},e._l(e.realFormData.sizeList,function(e){return l("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"统计期间",prop:"timeRange"}},[l("el-select",{attrs:{placeholder:"请选择统计期间",clearable:""},model:{value:e.realForm.timeRange,callback:function(r){e.$set(e.realForm,"timeRange",r)},expression:"realForm.timeRange"}},e._l(e.realFormData.timeRangeList,function(e){return l("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"产品类型",prop:"productType"}},[l("el-select",{attrs:{placeholder:"请选择产品类型",clearable:""},model:{value:e.realForm.productType,callback:function(r){e.$set(e.realForm,"productType",r)},expression:"realForm.productType"}},e._l(e.realFormData.productTypeList,function(e){return l("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1)],1)},staticRenderFns:[]};var s=l("VU/8")(n,c,!1,function(e){l("t4Uj")},"data-v-4ec847ac",null);r.default=s.exports},t4Uj:function(e,r){}});