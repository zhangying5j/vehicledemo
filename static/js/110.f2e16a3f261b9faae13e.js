webpackJsonp([110],{"0Krr":function(e,t){},Hb8j:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("Dd8w"),o=l.n(a),n=l("NYxO"),r={name:"QueryForm",props:{budget:{type:Object,required:!0},rules:{type:Object,default:null},versionShow:{type:Boolean,default:!0},validMethod:{type:String}},data:function(){return{timeSlots:[{code:"2018-1",name:"2018年第一季度"},{code:"2018-2",name:"2018年第二季度"},{code:"2018-3",name:"2018年第三季度"},{code:"2018-4",name:"2018年第四季度"}]}},created:function(){this.$store.dispatch("initFormData")},computed:o()({},Object(n.d)({formData:function(e){return e.budget.formData}}),{type:function(){return this.budget.type}}),watch:{type:function(e){if(this.budget.timeSlot="",""!==e){var t=this.formData.types.find(function(t){return t.code===e});this.timeSlots=t.timeSlots,t.timeSlots.length>0&&(this.budget.timeSlot=t.timeSlots[0].code)}}},methods:{valid:function(){var e=this;this.$refs.budgetForm.validate(function(t){t&&e.$emit(e.validMethod)})},reset:function(){this.timeSlots=[],this.$refs.budgetForm.resetFields()}}},i={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-form",{ref:"budgetForm",attrs:{"label-width":"120px",model:e.budget,rules:e.rules,inline:!0}},[l("el-form-item",{attrs:{label:"预算制定机构",prop:"formulateInstitution"}},[l("el-select",{attrs:{placeholder:"请选择预算制定机构",clearable:""},model:{value:e.budget.formulateInstitution,callback:function(t){e.$set(e.budget,"formulateInstitution",t)},expression:"budget.formulateInstitution"}},e._l(e.formData.companyList,function(t){return l("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?l("span",[e._v(" ")]):2===t.flag?l("span",[e._v("   ")]):e._e(),e._v(" "),l("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),l("el-form-item",{attrs:{label:"预算类型",prop:"type"}},[l("el-select",{attrs:{placeholder:"请选择预算类型",clearable:""},model:{value:e.budget.type,callback:function(t){e.$set(e.budget,"type",t)},expression:"budget.type"}},e._l(e.formData.types,function(e){return l("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"预算渠道",prop:"channel"}},[l("el-select",{attrs:{placeholder:"请选择预算渠道",clearable:""},model:{value:e.budget.channel,callback:function(t){e.$set(e.budget,"channel",t)},expression:"budget.channel"}},e._l(e.formData.channelList,function(t){return l("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?l("span",[e._v("   ")]):e._e(),e._v(" "),l("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),l("el-form-item",{attrs:{label:"预算时间段",prop:"timeSlot"}},[l("el-select",{attrs:{placeholder:"请选择时间段",clearable:""},model:{value:e.budget.timeSlot,callback:function(t){e.$set(e.budget,"timeSlot",t)},expression:"budget.timeSlot"}},e._l(e.timeSlots,function(e){return l("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"业务分类",prop:"productType"}},[l("el-select",{attrs:{placeholder:"请选择业务分类",clearable:""},model:{value:e.budget.productType,callback:function(t){e.$set(e.budget,"productType",t)},expression:"budget.productType"}},e._l(e.formData.productTypeList,function(e){return l("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),e._t("default"),e._v(" "),e.versionShow?l("el-form-item",{attrs:{label:"版本",prop:"version"}},[l("el-input",{model:{value:e.budget.version,callback:function(t){e.$set(e.budget,"version",t)},expression:"budget.version"}})],1):e._e(),e._v(" "),e._t("last")],2)},staticRenderFns:[]};var s=l("VU/8")(r,i,!1,function(e){l("0Krr")},"data-v-2a8337e2",null);t.default=s.exports}});