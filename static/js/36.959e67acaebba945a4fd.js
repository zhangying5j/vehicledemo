webpackJsonp([36],{JLPb:function(t,a){},i1hV:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("Dd8w"),n=i.n(e),d=i("NYxO"),m=i("P0XF"),l={name:"FleetBiz",components:{BackButton:function(){return i.e(124).then(i.bind(null,"uOVF"))}},data:function(){return{newName:"",mergeInputNameDialogVisible:!1,itemList:[{dimnm:"商业险上年出险次数",dimcd:"comLastCount",detail:[{tagid:"11",tagnm:"未投保商业险"},{tagid:"12",tagnm:"0次"},{tagid:"13",tagnm:"1次"},{tagid:"14",tagnm:"2次"},{tagid:"15",tagnm:"3次及以上"}]},{dimnm:"商业险上年出险金额",dimcd:"rci",detail:[{tagid:"21",tagnm:"0-1000"},{tagid:"22",tagnm:"1000-2000"},{tagid:"23",tagnm:"2000-5000"},{tagid:"24",tagnm:"5000-10000"},{tagid:"25",tagnm:"10000+"}]},{dimnm:"年龄",dimcd:"age",detail:[{tagid:"31",tagnm:"20以下"},{tagid:"32",tagnm:"20-30"},{tagid:"33",tagnm:"30-45"},{tagid:"34",tagnm:"45-60"},{tagid:"35",tagnm:"60以上"}]},{dimnm:"投保组合",dimcd:"insCom",detail:[{tagid:"41",tagnm:"单交"},{tagid:"42",tagnm:"单商_单三_无附加"},{tagid:"43",tagnm:"单商_单三_有附加"},{tagid:"44",tagnm:"单商_损三_无附加"},{tagid:"45",tagnm:"单商_损三_有附加"},{tagid:"46",tagnm:"交商_交三_无附加"},{tagid:"47",tagnm:"交商_交三_有附加"},{tagid:"48",tagnm:"交商_交三损_无附加"},{tagid:"49",tagnm:"交商_交三损_有附加"},{tagid:"410",tagnm:"交商_其他"}]},{dimnm:"性别",dimcd:"gender",detail:[{tagid:"51",tagnm:"男"},{tagid:"52",tagnm:"女"},{tagid:"53",tagnm:"未知"}]},{dimnm:"使用性质",dimcd:"usage",detail:[{tagid:"61",tagnm:"家庭自用"},{tagid:"62",tagnm:"营业出租租赁"},{tagid:"63",tagnm:"营业旅游"},{tagid:"64",tagnm:"营业货车"},{tagid:"65",tagnm:"非营业机关"},{tagid:"66",tagnm:"非营业企业"}]},{dimnm:"新车购置价",dimcd:"car-price",detail:[{tagid:"71",tagnm:"0-10万"},{tagid:"72",tagnm:"10-25万"},{tagid:"73",tagnm:"25-40万"},{tagid:"74",tagnm:"40万以上"}]},{dimnm:"车龄",dimcd:"car-age",detail:[{tagid:"81",tagnm:"1年以下"},{tagid:"82",tagnm:"1-3年"},{tagid:"83",tagnm:"3-6"},{tagid:"84",tagnm:"6-10"},{tagid:"85",tagnm:"10年以上"}]},{dimnm:"交强险上年出险次数",dimcd:"forceLastCount",detail:[]},{dimnm:"合计上年出险次数",dimcd:"totalLastCount",detail:[]},{dimnm:"合计上年出险金额",dimcd:"totalLastPay",detail:[]},{dimnm:" 品牌车系分组",dimcd:"jyBrandGroup",detail:[]},{dimnm:"座位数",dimcd:"seatCount",detail:[]},{dimnm:"吨位数",dimcd:"tonCount",detail:[]},{dimnm:"车龄",dimcd:"useYear",detail:[]},{dimnm:"三者限额",dimcd:"amount",detail:[]},{dimnm:"是否异地牌照",dimcd:"outLandFlag",detail:[]},{dimnm:"是否投保盗抢险",dimcd:"theftFlag",detail:[]},{dimnm:"是否投保车上人员责任险",dimcd:"personDuty",detail:[]},{dimnm:"是否投保划痕险",dimcd:"scratchFlag",detail:[]},{dimnm:"是否投保玻璃险",dimcd:"glassFlag",detail:[]},{dimnm:"车辆种类",dimcd:"carKind",detail:[]},{dimnm:"新续转保标识",dimcd:"newFlag",detail:[]}],bizData:[{id:"1",bizName:"家庭自用20以下男性",isEdit:!1,dims:[{dimnm:"商业险上年出险次数",dimcd:"comLastCount",tags:[{tagid:"11",tagnm:"未投保商业险"},{tagid:"12",tagnm:"0次"}]},{dimnm:"商业险上年出险金额",dimcd:"rci",tags:[{tagid:"21",tagnm:"0-1000"}]},{dimnm:"年龄",dimcd:"age",tags:[{tagid:"32",tagnm:"20-30"},{tagid:"33",tagnm:"30-45"}]}]}],businessSmallTypeColumns:[{prop:"lastbicount",title:"商业险上年出险次数",width:120,align:"center"},{prop:"lastbiamount",title:"商业险上年出险金额",width:120,align:"center"},{prop:"age",title:"年龄",width:100,align:"center"}],businessSmallTypeData:[{lastbicount:"1次",lastbiamount:"1000-2000",age:"20-30",isCustom:"否"},{lastbicount:"1次",lastbiamount:"1000-2000",age:"30-45",isCustom:"否"},{lastbicount:"1次",lastbiamount:"1000-2000",age:"45-60",isCustom:"否"},{lastbicount:"1次",lastbiamount:"1000-2000",age:"60以上",isCustom:"否"},{lastbicount:"1次",lastbiamount:"2000-5000",age:"20-30",isCustom:"否"},{lastbicount:"1次",lastbiamount:"2000-5000",age:"30-45",isCustom:"否"},{lastbicount:"1次",lastbiamount:"2000-5000",age:"45-60",isCustom:"否"},{lastbicount:"1次",lastbiamount:"2000-5000",age:"60以上",isCustom:"否"},{lastbicount:"2次",lastbiamount:"1000-2000",age:"20-30",isCustom:"否"},{lastbicount:"2次",lastbiamount:"1000-2000",age:"30-45",isCustom:"否"},{lastbicount:"2次",lastbiamount:"1000-2000",age:"45-60",isCustom:"否"},{lastbicount:"2次",lastbiamount:"1000-2000",age:"60以上",isCustom:"否"},{lastbicount:"2次",lastbiamount:"2000-5000",age:"20-30",isCustom:"否"},{lastbicount:"2次",lastbiamount:"2000-5000",age:"30-45",isCustom:"否"},{lastbicount:"2次",lastbiamount:"2000-5000",age:"45-60",isCustom:"否"},{lastbicount:"2次",lastbiamount:"2000-5000",age:"60以上",isCustom:"否"}],items:[{itemLabel:"商业险上年出险次数:",selectInfo:"请选择商业险上年出险次数",modelName:"01",options:[{optLabel:"上年未出险",optValue:"01"},{optLabel:"上年出险1次",optValue:"02"},{optLabel:"上年出险2次",optValue:"03"},{optLabel:"上年出险3次",optValue:"04"},{optLabel:"上年出险4次",optValue:"05"},{optLabel:"上年出险5次及以上",optValue:"06"}]},{itemLabel:"商业险上年出险金额:",selectInfo:"请选择商业险上年出险金额",modelName:"01",options:[{optLabel:"上年出险金额0",optValue:"01"},{optLabel:"上年出险金额0-1000",optValue:"02"},{optLabel:"上年出险金额1000-2000",optValue:"03"},{optLabel:"上年出险金额2000-5000",optValue:"04"},{optLabel:"上年出险金额5000-10000",optValue:"05"},{optLabel:"上年出险金额10000+",optValue:"06"}]},{itemLabel:"年龄:",selectInfo:"请选择年龄",modelName:"32",options:[{optValue:"31",optLabel:"20以下"},{optValue:"32",optLabel:"20-30"},{optValue:"33",optLabel:"30-45"},{optValue:"34",optLabel:"45-60"},{optValue:"35",optLabel:"60以上"}]}],specialTableBtn:{width:"100%",marginTop:"5px",border:"1px dashed #15afff",background:"#fff",color:"#15afff",display:"block"},currentEdit:"",activeName:""}},computed:n()({currentEditIndex:function(){var t=this;return this.bizData.findIndex(function(a){return a.id===t.currentEdit})}},Object(d.d)({tableHeader:function(t){return t.app.tableHeader}})),methods:{edit:function(t){this.currentEditIndex>-1&&(this.bizData[this.currentEditIndex].isEdit=!1),this.currentEdit=t,this.bizData[this.currentEditIndex].isEdit=!0},save:function(){this.bizData[this.currentEditIndex].isEdit=!1,this.currentEdit=""},remove:function(t){var a=this.bizData.findIndex(function(a){return a.id===t});a===this.currentEditIndex&&(this.currentEdit=""),this.bizData.splice(a,1)},addRecord:function(){var t=Object(m.a)(),a={id:t,bizName:"",isEdit:!0,tags:[]};this.bizData.push(a),this.edit(t)},removeTag:function(t,a){var i=this.bizData[this.currentEditIndex].dims,e=i.findIndex(function(a){return a.dimcd===t}),n=i[e].tags,d=n.findIndex(function(t){return t.tagid===a});n.splice(d,1),0===n.length&&i.splice(e,1)},addTag:function(t,a){var i=t.dimcd,e=t.dimnm,n=a.tagid,d=a.tagnm;if(this.currentEditIndex>-1){var m=this.bizData[this.currentEditIndex].dims,l=m.findIndex(function(t){return t.dimcd===i});if(-1===l){var s=[];s.push({tagid:n,tagnm:d}),this.bizData[this.currentEditIndex].dims.push({dimcd:i,dimnm:e,tags:s})}else{-1===m[l].tags.findIndex(function(t){return t.tagid===n})&&this.bizData[this.currentEditIndex].dims[l].tags.push({tagid:n,tagnm:d})}}},defalutMerge:function(){this.newName="机构缺省业务单元",this.mergeInputNameDialogVisible=!0},merge:function(){this.newName="",this.mergeInputNameDialogVisible=!0},saveMerge:function(){this.mergeBusinessSmallTypeDialogVisible=!1},config:function(){this.$router.push({path:"/admin/fleet/declare/configfee/disconfigfee"})},handleSelectionChange:function(t){this.multipleSelection=t,this.multipleSelection.forEach(function(t){console.log(t.carAge)})}}},s={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"biz-content"},[i("div",{staticClass:"form"},[i("el-form",{attrs:{"label-width":"170px",inline:!0,size:"small"}},[t._l(t.items,function(a){return i("el-form-item",{key:a.itemLabel,attrs:{label:a.itemLabel}},[i("el-select",{attrs:{editable:!1,placeholder:a.selectInfo},model:{value:a.modelName,callback:function(i){t.$set(a,"modelName",i)},expression:"item.modelName"}},t._l(a.options,function(t){return i("el-option",{key:t.optValue,attrs:{label:t.optLabel,value:t.optValue}})}))],1)}),t._v(" "),i("el-form-item",[i("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[t._v("查询")])],1)],2)],1),t._v(" "),i("div",{attrs:{calss:"data"}},[i("el-table",{attrs:{data:t.businessSmallTypeData,border:"",stripe:"","header-cell-style":t.tableHeader},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),t._l(t.businessSmallTypeColumns,function(t){return i("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,label:t.title,"min-width":t.width,align:t.align}})})],2)],1),t._v(" "),i("div",{staticClass:"option"},[i("el-button",{attrs:{type:"primary"},on:{click:t.defalutMerge}},[t._v("设置缺省业务单元")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.merge}},[t._v("合并")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.saveMerge}},[t._v("保存")])],1),t._v(" "),i("div",{staticClass:"option"},[i("back-button",{attrs:{plain:""}},[t._v("上一步")]),t._v(" "),i("back-button",{attrs:{plain:"",type:"next"},on:{next:t.config}},[t._v("下一步")])],1)])},staticRenderFns:[]};var o=i("VU/8")(l,s,!1,function(t){i("JLPb")},"data-v-a272fc02",null);a.default=o.exports}});