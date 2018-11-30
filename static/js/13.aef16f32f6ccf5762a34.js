webpackJsonp([13],{"/MqJ":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"FactorConfig",components:{BaseTable:function(){return a.e(111).then(a.bind(null,"ss0d"))},BackButton:function(){return a.e(112).then(a.bind(null,"uOVF"))}},data:function(){return{dimDialogVisible:!1,cartypeid:"",columns:[{prop:"carType",label:"车种",width:60,align:"center"},{prop:"factorCount",label:"推荐因子个数",width:40,align:"center",isEdit:!0,type:"input"},{prop:"factors",label:"风险因子选择范围",width:100,align:"center"},{prop:"operation",width:160,label:"操作",operation:!0,operations:[{text:"预置智能推荐因子",event:"setDefaultDim"}]}],data:[{id:"1",carType:"家庭自用",factorCount:"5",factors:"新车购置价、使用性质、年龄",dimcds:["car-price","usage","age","insCom"]},{id:"2",carType:"非营业客车",factorCount:"4",factors:"新车购置价、使用性质、年龄",dimcds:["car-price","usage","age","insCom"]},{id:"3",carType:"出租租赁",factorCount:"3",factors:"新车购置价、使用性质、年龄",dimcds:["car-price","usage","age","insCom"]},{id:"4",carType:"城市公交",factorCount:"5",factors:"新车购置价、使用性质、年龄",dimcds:["car-price","usage","age","insCom"]},{id:"5",carType:"公路客车",factorCount:"4",factors:"新车购置价、使用性质、年龄",dimcds:["car-price","usage","age","insCom"]},{id:"6",carType:"普通营业货运",factorCount:"3",factors:"新车购置价、使用性质、年龄",dimcds:["car-price","usage","age","insCom"]},{id:"7",carType:"自卸车",factorCount:"5",factors:"新车购置价、使用性质、年龄",dimcds:["car-price","usage","age","insCom"]},{id:"8",carType:"半挂牵引",factorCount:"4",factors:"新车购置价、使用性质、年龄",dimcds:["car-price","usage","age","insCom"]},{id:"9",carType:"挂车",factorCount:"3",factors:"新车购置价、使用性质、年龄",dimcds:["car-price","usage","age","insCom"]},{id:"10",carType:"特种车",factorCount:"5",factors:"新车购置价、使用性质、年龄",dimcds:["car-price","usage","age","insCom"]},{id:"11",carType:"其他",factorCount:"5",factors:"新车购置价、使用性质、年龄",dimcds:["car-price","usage","age","insCom"]}],dimensionList:[{code:"car-price",name:"新车购置价"},{code:"usage",name:"使用性质"},{code:"age",name:"年龄"},{code:"insCom",name:"投保组合"},{code:"comLastCount",name:"商业险上年出险次数"},{code:"rci",name:"商业险上年出险金额"},{code:"gender",name:"性别"},{code:"car-age",name:"车龄"},{name:"交强险上年出险次数",code:"forceLastCount"},{name:"合计上年出险次数",code:"totalLastCount"},{name:"合计上年出险金额",code:"totalLastPay"},{name:"品牌车系分组",code:"jyBrandGroup"},{name:"座位数",code:"seatCount"},{name:"吨位数",code:"tonCount"},{name:"车龄",code:"useYear"},{name:"三者限额",code:"amount"},{name:"是否异地牌照",code:"outLandFlag"},{name:"是否投保盗抢险",code:"theftFlag"},{name:"是否投保车上人员责任险",code:"personDuty"},{name:"是否投保划痕险",code:"scratchFlag"},{name:"是否投保玻璃险",code:"glassFlag"},{name:"车辆种类",code:"carKind"},{name:"新续转保标识",code:"newFlag"}],currentCustomDimension:[]}},methods:{setDefaultDim:function(e){this.cartypeid=e;var t=this.data.findIndex(function(t){return t.id===e});this.currentCustomDimension=this.data[t].dimcds,this.dimDialogVisible=!0},handlePrev:function(){this.$router.push({path:"/admin/individual/declare/paramConfig"})},factorRecommend:function(){this.$router.push({path:"/admin/individual/declare/factorRecommend"})},addDimension:function(e,t){if(!this.currentCustomDimension.includes(t)){this.currentCustomDimension.push(t);var a=this.data.findIndex(function(t){return t.id===e});this.data[a].dimcds=this.currentCustomDimension}},removeDimension:function(e,t){this.currentCustomDimension.splice(this.currentCustomDimension.indexOf(t),1);var a=this.data.findIndex(function(t){return t.id===e});this.data[a].dimcds=this.currentCustomDimension}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"biz-content"},[a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns,data:e.data,rowKey:"id"},on:{setDefaultDim:e.setDefaultDim}})],1)]),e._v(" "),a("div",{staticClass:"option"},[a("back-button",{attrs:{plain:""},on:{prev:e.handlePrev}},[e._v("上一步")]),e._v(" "),a("back-button",{attrs:{type:"next"},on:{next:e.factorRecommend}},[e._v("查看推荐因子")])],1),e._v(" "),a("el-dialog",{attrs:{title:"预置智能推荐因子",visible:e.dimDialogVisible,width:"30%"},on:{"update:visible":function(t){e.dimDialogVisible=t}}},e._l(e.dimensionList,function(t){return a("el-tag",{key:t.code,attrs:{type:e.currentCustomDimension.includes(t.code)?"primary":"info",closable:!!e.currentCustomDimension.includes(t.code)},on:{close:function(a){e.removeDimension(e.cartypeid,t.code)}},nativeOn:{click:function(a){e.addDimension(e.cartypeid,t.code)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])}))],1)},staticRenderFns:[]};var o=a("VU/8")(n,i,!1,function(e){a("JJ2h")},"data-v-ec05f0a4",null);t.default=o.exports},JJ2h:function(e,t){}});