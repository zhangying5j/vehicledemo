webpackJsonp([132],{"+7/T":function(a,e){},kHaw:function(a,e,p){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"LifeTableAdviseList",components:{CommonTable:function(){return p.e(134).then(p.bind(null,"Lk4z"))}},data:function(){return{adviseColumn:[{prop:"approval",width:120,label:"审核人",align:"center"},{prop:"appOrg",width:120,label:"审核人机构",align:"center"},{prop:"nextApproval",width:120,label:"下级审核人",align:"center"},{prop:"approveTime",width:120,label:"审核时间",align:"center"},{prop:"approveAdvise",width:120,label:"审核意见",align:"center"}],adviseData:[{approval:"孙强",appOrg:"朝阳支公司",nextApproval:"张翰",approveTime:"2018-01-01",approveAdvise:"建议修改"},{approval:"孙强",appOrg:"朝阳支公司",nextApproval:"张翰",approveTime:"2018-01-02",approveAdvise:"审核通过"},{approval:"张翰",appOrg:"北京分公司",nextApproval:"李冰",approveTime:"2018-01-03",approveAdvise:"退回"},{approval:"孙强",appOrg:"朝阳支公司",nextApproval:"张翰",approveTime:"2018-01-04",approveAdvise:"退回"},{approval:"孙强",appOrg:"朝阳支公司",nextApproval:"张翰",approveTime:"2018-01-02",approveAdvise:"审核通过"},{approval:"张翰",appOrg:"北京分公司",nextApproval:"李冰",approveTime:"2018-01-05",approveAdvise:"审核通过"},{approval:"李冰",appOrg:"总公司",nextApproval:"--",approveTime:"2018-01-06",approveAdvise:"审核通过"}]}}},t={render:function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"data",staticStyle:{width:"100%"}},[e("common-table",{attrs:{columns:this.adviseColumn,dataSource:this.adviseData}})],1)])},staticRenderFns:[]};var o=p("VU/8")(r,t,!1,function(a){p("+7/T")},"data-v-8b19ae54",null);e.default=o.exports}});