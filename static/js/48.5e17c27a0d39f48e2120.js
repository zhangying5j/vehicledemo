webpackJsonp([48],{"1BVG":function(e,t){},fMN2:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("Z4dx"),o={name:"index",components:{BaseTable:function(){return l.e(112).then(l.bind(null,"ss0d"))},CommunalPagination:function(){return l.e(115).then(l.bind(null,"jH2g"))}},created:function(){var e=this;Object(a.c)().then(function(t){e.initData=t.data})},data:function(){return{initData:{},currentPage:1,pageSize:2,fleet:{companyCode:"",PolicyHolder:"",ProtocolCode:"",salesMan:"",isIncludeSub:"y",sort:[],submitTimeStart:"",submitTimeEnd:"",status:[]},columns:[{prop:"ProtocolCode",width:200,label:"代理协议号",align:"center"},{prop:"ProxyHolder",width:100,label:"代理人名称",align:"center"},{prop:"company",width:260,label:"归属机构",align:"center"},{prop:"PolicyHolder",width:120,label:"投保人",align:"center"},{prop:"inflowTime",width:200,label:"流入时间",align:"center"},{prop:"level",width:100,label:"级别",align:"center"},{prop:"status",width:100,label:"状态",align:"center",status:!0},{prop:"handler",width:100,label:"处理人",align:"center"},{prop:"submitUser",width:100,label:"提交人",align:"center"},{prop:"firstSubmit",width:200,label:"第一次提交时间",align:"center"},{prop:"operation",width:100,label:"操作",align:"center",operation:!0,operations:[{text:"审批",event:"approval"}]}],data:[{ProtocolCode:"5300800002016000004",ProxyHolder:"张刚",company:"山东省分公司济南中心支公司营业部",PolicyHolder:"济南市采购中心",inflowTime:"2016-03-21 18:28:34",level:"初审1",status:"正在处理",handler:"王伟",submitUser:"白静",firstSubmit:"2016-03-21 18:28:34"},{ProtocolCode:"5100400002016000003",ProxyHolder:"白宇",company:"山东省分公司烟台中心支公司营业部",PolicyHolder:"烟台水泵厂",inflowTime:"2016-05-04 11:59:10",level:"初级",status:"已处理未流转",handler:"王伟",submitUser:"刘志民",firstSubmit:"2016-05-04 11:57:02"},{ProtocolCode:"5330400002015000001",ProxyHolder:"刘明",company:"山东省分公司潍坊中心支公司营业部",PolicyHolder:"合力物流运输有限责任公司",inflowTime:"2016-05-04 11:59:10",level:"初审1",status:"已处理流转",handler:"李路",submitUser:"李路",firstSubmit:"2016-05-04 16:23:48"}],options:[{value:"level",label:"级别",children:[{value:"asc",label:"升序"},{value:"desc",label:"降序"}]},{value:"firstSubmit",label:"第一次提交时间",children:[{value:"asc",label:"升序"},{value:"desc",label:"降序"}]},{value:"company",label:"机构",children:[{value:"asc",label:"升序"},{value:"desc",label:"降序"}]}]}},computed:{currentData:function(){var e=[],t=(this.currentPage-1)*this.pageSize,l=this.currentPage*this.pageSize;l=l<=this.data.length?this.currentPage*this.pageSize:this.data.length;for(var a=t;a<l;++a)e.push(this.data[a]);return e}},methods:{reset:function(){},query:function(){console.log(this.fleet)},approval:function(e){this.$router.push("/admin/fleet/approval/detail/"+e)},search:function(e,t){this.currentPage=e,this.pageSize=t}}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"container"},[l("div",{staticClass:"form"},[l("el-form",{attrs:{"label-width":"120px",inline:!0,model:e.fleet}},[l("el-form-item",{attrs:{label:"机构代码:",prop:"companyCode"}},[l("el-select",{attrs:{placeholder:"请选择机构代码",size:"medium"},model:{value:e.fleet.companyCode,callback:function(t){e.$set(e.fleet,"companyCode",t)},expression:"fleet.companyCode"}},e._l(e.initData.companyList,function(t){return l("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?l("span",[e._v(" ")]):2===t.flag?l("span",[e._v("   ")]):e._e(),e._v(" "),l("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),l("el-form-item",{attrs:{label:"投保人:",prop:"PolicyHolder"}},[l("el-input",{model:{value:e.fleet.PolicyHolder,callback:function(t){e.$set(e.fleet,"PolicyHolder",t)},expression:"fleet.PolicyHolder"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"协议号:",prop:"ProtocolCode"}},[l("el-input",{model:{value:e.fleet.ProtocolCode,callback:function(t){e.$set(e.fleet,"ProtocolCode",t)},expression:"fleet.ProtocolCode"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"归属业务员:",prop:"salesMan"}},[l("el-input",{model:{value:e.fleet.salesMan,callback:function(t){e.$set(e.fleet,"salesMan",t)},expression:"fleet.salesMan"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"是否包含下级:",prop:"isIncludeSub"}},[l("el-select",{model:{value:e.fleet.isIncludeSub,callback:function(t){e.$set(e.fleet,"isIncludeSub",t)},expression:"fleet.isIncludeSub"}},[l("el-option",{attrs:{label:"是",value:"y"}}),e._v(" "),l("el-option",{attrs:{label:"否",value:"n"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"排序:",prop:"sort"}},[l("el-cascader",{attrs:{"expand-trigger":"hover",options:e.options},model:{value:e.fleet.sort,callback:function(t){e.$set(e.fleet,"sort",t)},expression:"fleet.sort"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"提交时间:",prop:"submitTime"}},[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择时间段"},model:{value:e.fleet.submitTimeStart,callback:function(t){e.$set(e.fleet,"submitTimeStart",t)},expression:"fleet.submitTimeStart"}})],1),e._v(" "),l("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),e._v(" "),l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择时间段"},model:{value:e.fleet.submitTimeEnd,callback:function(t){e.$set(e.fleet,"submitTimeEnd",t)},expression:"fleet.submitTimeEnd"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"申报状态:",prop:"status"}},[l("el-checkbox-group",{model:{value:e.fleet.status,callback:function(t){e.$set(e.fleet,"status",t)},expression:"fleet.status"}},[l("el-checkbox",{attrs:{label:"待处理",name:"1"}}),e._v(" "),l("el-checkbox",{attrs:{label:"正在处理",name:"2"}}),e._v(" "),l("el-checkbox",{attrs:{label:"已处理未流转",name:"3"}}),e._v(" "),l("el-checkbox",{attrs:{label:"已处理流转",name:"4"}}),e._v(" "),l("el-checkbox",{attrs:{label:"已处理完毕",name:"5"}})],1)],1)],1)],1),e._v(" "),l("div",{staticClass:"option"},[l("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.reset}},[e._v("重置")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),l("div",{staticClass:"data"},[l("div",{staticClass:"table"},[l("base-table",{attrs:{columns:e.columns,data:e.currentData,"show-header":!0,"row-key":"ProtocolCode"},on:{approval:e.approval}}),e._v(" "),l("communal-pagination",{attrs:{currentPage:e.currentPage,pageSize:e.pageSize,total:e.data.length},on:{search:e.search}})],1)])])},staticRenderFns:[]};var n=l("VU/8")(o,r,!1,function(e){l("1BVG")},"data-v-68105e08",null);t.default=n.exports}});