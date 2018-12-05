webpackJsonp([23],{RuNW:function(t,e){},"v/u6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),a=n.n(i),o=n("NYxO"),r=n("Z4dx"),s={name:"FleetDim",components:{BackButton:function(){return n.e(119).then(n.bind(null,"uOVF"))},BizSectorList:function(){return n.e(120).then(n.bind(null,"jpoa"))},TagDimension:function(){return n.e(125).then(n.bind(null,"RXyt"))},RangeDimension:function(){return n.e(123).then(n.bind(null,"t+1g"))}},data:function(){return{baseRecommend:[],currentSector:0,dimensionList:[],currentCustomDimension:[],currentDimensionDetail:[],currentDimension:"",dimensionColumns:[{prop:"no",title:"序号",width:50,align:"center"},{prop:"tag",title:"标签",width:200,align:"center"},{prop:"range",title:"标签范围",width:128,align:"center"},{prop:"a",title:"满期赔付率（%）",width:140,align:"center"},{prop:"b",title:"预期赔付率（%）",width:160,align:"center"},{prop:"c",title:"保费占比（%）",width:120,align:"center"}],currentDimensionData:[{id:"comLastCount",type:"tag",title:"商业险上年出险次数",tags:[{code:"noCom",name:"未投保商业险"},{code:"newCar",name:"新车"},{code:"newIns",name:"新保"},{code:"no3",name:"连续3年+未出险"},{code:"no2",name:"连续2年未出险"},{code:"no1",name:"上年未出险"},{code:"1",name:"1次"},{code:"2",name:"2次"},{code:"3",name:"3次"},{code:"4",name:"4次"},{code:"5",name:"5次+"}],split:[{id:"1",title:"未投保商业险",tags:["noCom"]},{id:"2",title:"0次",tags:["newCar","newIns","no3","no2","no1"]},{id:"3",title:"1次",tags:["1"]},{id:"4",title:"2次",tags:["2"]},{id:"5",title:"3次及以上",tags:["3","4","5"]}]},{id:"age",type:"range",title:"年龄",list:[{id:"1",isEdit:!1,title:"少年",start:"0",end:"20"},{id:"2",isEdit:!1,title:"青年",start:"20",end:"30"},{id:"3",isEdit:!1,title:"中年",start:"31",end:"45"},{id:"4",isEdit:!1,title:"中老年",start:"46",end:"60"},{id:"5",isEdit:!1,title:"老年",start:"60",end:"N"}]},{id:"rci",type:"range",title:"商业险上年出险金额",list:[{id:"1",isEdit:!1,title:"1000以下",start:"0",end:"1000"},{id:"2",isEdit:!1,title:"2000以下",start:"1000",end:"2000"},{id:"3",isEdit:!1,title:"5000以下",start:"2000",end:"5000"},{id:"4",isEdit:!1,title:"10000以下",start:"5000",end:"10000"},{id:"5",isEdit:!1,title:"10000以上",start:"10000",end:"N"}]}],rangeShow:"",dialogTableVisible:!1,dimensionDialogVisible:!1}},created:function(){var t=this;Object(r.a)(this.param).then(function(e){t.baseRecommend=e.data;var n=e.data.map(function(t){return{id:t.id,name:t.name}});t.$store.commit("SET_SECTORS",n),t.loadDimension(),t.currentDimension=e.data[0].dimensionList[0].code,t.currentDimensionDetail=e.data[0].dimensionList[0].detail})},computed:a()({},Object(o.d)({sectors:function(t){return t.individual.sectors},param:function(t){return t.individual.param},tableHeader:function(t){return t.app.tableHeader}}),{customerDimensionList:function(){var t=this;return this.currentCustomDimension.map(function(e){return t.dimensionList.find(function(t){return t.code===e})})},leftDimensionList:function(){var t=this;return this.dimensionList.filter(function(e){return!t.currentCustomDimension.includes(e.code)})}}),methods:{loadDimension:function(){this.dimensionList=this.baseRecommend[this.currentSector].dimensionList.map(function(t){return{code:t.code,name:t.name}}),this.currentCustomDimension=this.baseRecommend[this.currentSector].recommendDimension},getClassBySector:function(t){this.currentSector=this.sectors.findIndex(function(e){return e.id===t}),this.loadDimension()},addDimension:function(t){this.currentCustomDimension.includes(t)||(this.currentCustomDimension.push(t),"forceLastPay"===t&&this.currentDimensionData.push({id:"forceLastPay",type:"range",title:"交强险上年出险金额",list:[]}))},removeDimension:function(t){var e=this.currentDimensionData.findIndex(function(e){return e.id===t});this.currentDimensionData.splice(e,1),this.currentCustomDimension.splice(this.currentCustomDimension.indexOf(t),1)},dimensionDetail:function(t){this.currentDimension=t;var e=this.baseRecommend[this.currentSector].dimensionList.find(function(e){return e.code===t});this.rangeShow=e.rangeShow,this.currentDimensionDetail=e.detail},confirm:function(){this.$router.push({path:"/admin/fleet/declare/configfee/fleetbiz"})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"biz-content"},[n("biz-sector-list",{attrs:{title:"选择业务板块",sectors:t.sectors},on:{sectorClick:t.getClassBySector}}),t._v(" "),n("div",{attrs:{id:"custom_latitude"}},[n("div",{staticClass:"tableSector"},[n("div",{staticClass:"grid-content bg-purple-light"},[n("div",{staticClass:"tag"},[t._l(t.customerDimensionList,function(e){return n("el-tag",{key:e.code,attrs:{closable:"",type:t.currentDimension===e.code?"primary":"info"},on:{close:function(n){t.removeDimension(e.code)}},nativeOn:{click:function(n){t.dimensionDetail(e.code)}}},[t._v("\n              "+t._s(e.name)+"\n            ")])}),t._v(" "),n("el-button",{attrs:{size:"small",plain:"",icon:"el-icon-plus"},on:{click:function(e){t.dimensionDialogVisible=!0}}},[t._v("新增因子")]),t._v(" "),n("el-button",{staticStyle:{float:"right"},attrs:{type:"text",icon:"iconfont icon-bianji",size:"small"},on:{click:function(e){t.dialogTableVisible=!0}}},[t._v("编辑")])],2),t._v(" "),n("el-table",{attrs:{data:t.currentDimensionDetail,stripe:"","header-cell-style":t.tableHeader,height:"400px"}},[n("el-table-column",{attrs:{"header-align":"center",prop:"no",label:"序号","min-width":"50",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{"header-align":"center",prop:"tag",label:"标签","min-width":"200",align:"center"}}),t._v(" "),t.rangeShow?n("el-table-column",{attrs:{"header-align":"center",prop:"range",label:"标签范围","min-width":"250",align:"center"}}):t._e(),t._v(" "),t.rangeShow?t._e():n("el-table-column",{attrs:{"header-align":"center",prop:"down",label:"从()","min-width":"125",align:"center"}}),t._v(" "),t.rangeShow?t._e():n("el-table-column",{attrs:{"header-align":"center",prop:"up",label:"至(不含)","min-width":"125",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{"header-align":"center",prop:"a",label:"满期赔付率（%）","min-width":"140",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{"header-align":"center",prop:"b",label:"预期赔付率（%）","min-width":"160",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{"header-align":"center",prop:"c",label:"保费占比（%）","min-width":"120",align:"center"}})],1)],1)])]),t._v(" "),n("el-dialog",{attrs:{title:"编辑维度",fullscreen:"",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[t._l(t.currentDimensionData,function(e){return["tag"===e.type?n("tag-dimension",{key:e.id,attrs:{data:e}}):t._e(),t._v(" "),"range"===e.type?n("range-dimension",{key:e.id,attrs:{data:e}}):t._e()]}),t._v(" "),n("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("保存维度")]),t._v(" "),n("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("关闭")])],1)],2),t._v(" "),n("el-dialog",{attrs:{title:"添加维度",visible:t.dimensionDialogVisible,width:"30%"},on:{"update:visible":function(e){t.dimensionDialogVisible=e}}},t._l(t.dimensionList,function(e){return n("el-tag",{key:e.code,attrs:{type:t.currentCustomDimension.includes(e.code)?"primary":"info"},nativeOn:{click:function(n){t.addDimension(e.code)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}))],1),t._v(" "),n("div",{staticClass:"option"},[n("back-button",{attrs:{type:"next"},on:{next:t.confirm}},[t._v("下一步")])],1)])},staticRenderFns:[]};var c=n("VU/8")(s,l,!1,function(t){n("RuNW")},"data-v-b9101938",null);e.default=c.exports}});