webpackJsonp([53],{"/9fU":function(t,e){},j9Vi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),l=n.n(i),o=n("NYxO"),a={name:"riskInfo",components:{BackButton:function(){return n.e(112).then(n.bind(null,"uOVF"))}},data:function(){return{premiumPercentColumn:[{prop:"fleetType",width:120,label:"车队类型",align:"center"},{prop:"info",width:120,label:"信息内容",align:"center"},{prop:"option",width:120,label:"选项",align:"center"},{prop:"premiumPercent",width:120,label:"保费占比",align:"center"}],premiumPercentData:[{fleetType:"营业出租租赁客车",info:"车龄",option:"0-1年",premiumPercent:"50.00"},{fleetType:"营业出租租赁客车",info:"车龄",option:"1-2年",premiumPercent:"30.00"},{fleetType:"营业出租租赁客车",info:"车龄",option:"2-3年",premiumPercent:"10.00"},{fleetType:"营业出租租赁客车",info:"车龄",option:"3-5年",premiumPercent:"0.00"},{fleetType:"营业出租租赁客车",info:"车龄",option:"5-8年",premiumPercent:"0.00"},{fleetType:"营业出租租赁客车",info:"车龄",option:"8年以上",premiumPercent:"0.00"},{fleetType:"营业出租租赁客车",info:"使用性质",option:"出租",premiumPercent:"0.00"},{fleetType:"营业出租租赁客车",info:"使用性质",option:"租赁",premiumPercent:"0.00"}],riskOptionColumn:[{prop:"fleetType",width:120,label:"车队类型",align:"center"},{prop:"info",width:120,label:"风险描述",align:"center"},{prop:"optionValue",width:120,label:"选项值",align:"center"},{prop:"option",width:120,label:"选项",align:"center"}],riskOptionData:[{fleetType:"营业出租租赁客车",info:"特殊风险因子",optionValue:"",option:"",specialTag:!0},{fleetType:"营业出租租赁客车",info:"安全奖惩制能够落实",optionValue:"",option:"是",specialTag:!1},{fleetType:"营业出租租赁客车",info:"安全奖惩制能够落实",optionValue:"",option:"否",specialTag:!1},{fleetType:"营业出租租赁客车",info:"每日排班出车情况",optionValue:"",option:"1人只白班出车",specialTag:!1},{fleetType:"营业出租租赁客车",info:"每日排班出车情况",optionValue:"",option:"2人白班夜班轮流出车",specialTag:!1}],fleetType:"",currentRow:0,rowSpan:0,specialRiskVisible:!1}},computed:l()({},Object(o.d)({tableHeader:function(t){return t.app.tableHeader}})),methods:{configProtocol:function(){this.$router.push("/admin/fleet/declare/modify/configProtocol")},spanRow:function(t){t.row,t.column;var e=t.rowIndex,n=t.columnIndex;return 0===n?0===e?[8,1]:[0,0]:1===n?0===e?[6,1]:6===e?[2,1]:[0,0]:void 0},spanRow2:function(t){t.row,t.column;var e=t.rowIndex,n=t.columnIndex;return 0===n?0===e?[5,1]:[0,0]:1===n?0===e?[1,1]:1===e?[2,1]:3===e?[2,1]:[0,0]:void 0}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"data"},[t._m(0),t._v(" "),n("div",{staticClass:"table"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.premiumPercentData,"span-method":t.spanRow,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.premiumPercentColumn,function(e){return n("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align},scopedSlots:t._u([{key:"default",fn:function(i){return["premiumPercent"===e.prop?n("el-input",{attrs:{size:"small"},model:{value:i.row[e.prop],callback:function(n){t.$set(i.row,e.prop,n)},expression:"scope.row[column.prop]"}}):n("span",[t._v(t._s(i.row[e.prop]))])]}}])})})),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.riskOptionData,"span-method":t.spanRow2,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.riskOptionColumn,function(e){return n("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align},scopedSlots:t._u([{key:"default",fn:function(i){return["optionValue"===e.prop?n("el-checkbox",{model:{value:i.row[e.prop],callback:function(n){t.$set(i.row,e.prop,n)},expression:"scope.row[column.prop]"}}):i.row.specialTag&&"info"===e.prop?n("span",[t._v(t._s(i.row[e.prop])),n("el-button",{attrs:{type:"text",icon:"el-icon-edit",circle:""},on:{click:function(e){t.specialRiskVisible=!0}}})],1):n("span",[t._v(t._s(i.row[e.prop]))])]}}])})}))],1)]),t._v(" "),n("div",{staticClass:"option"},[n("back-button",[t._v("上一步")]),t._v(" "),n("back-button",{attrs:{type:"next"},on:{next:t.configProtocol}},[t._v("下一步")])],1),t._v(" "),n("el-dialog",{attrs:{title:"特殊风险因子详细信息",visible:t.specialRiskVisible},on:{"update:visible":function(e){t.specialRiskVisible=e}}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[t._v(" ")])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[t._v("风险因子")])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[t._v("核保人评价")])])],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[t._v("驾驶员30岁以上年龄占比(%)：")])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-input")],1)]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-input")],1)])],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[t._v("每车驾驶员配备：")])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-input")],1)]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-input")],1)])],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[t._v("固定资源比例(%)：")])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-input")],1)]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-input")],1)])],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[t._v("其他：")])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-input")],1)]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-input")],1)])],1),t._v(" "),n("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.specialRiskVisible=!1}}},[t._v("确认")])],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"desc",staticStyle:{"font-weight":"bold",padding:"5px 15px"}},[this._v("风险信息录入")])])}]};var p=n("VU/8")(a,r,!1,function(t){n("/9fU")},"data-v-5ff8fb38",null);e.default=p.exports}});