webpackJsonp([1],{dQTv:function(e,t){},otlB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Dd8w"),o=a.n(n),i=a("NYxO"),r={name:"Budget",components:{BasePagination:function(){return a.e(124).then(a.bind(null,"aTIo"))}},props:{typeProp:{type:String,default:""}},data:function(){return{dataHidden:!0,queryData:{type:"",org:"27000",channel:"ct",version:"50000201801010900",startDate:"2018-01-01",endDate:"2018-03-01"},rules:{type:[{required:!0,trigger:"change",message:"检视类型不能为空"}],org:[{required:!0,trigger:"change",message:"所属机构不能为空"}],channel:[{required:!0,trigger:"change",message:"所属渠道不能为空"}],startDate:[{required:!0,trigger:"blur",message:"起始日期不能为空"}],endDate:[{required:!0,trigger:"blur",message:"截止日期不能为空"}]},typeList:[{code:"fee",name:"预算对比-配费模式"},{code:"org",name:"预算对比-分机构"},{code:"biz",name:"预算对比-分业务板块"}],orgList:[{code:"01000",name:"北京分公司",children:[{code:"02001",name:"朝阳支公司"},{code:"02002",name:"丰台支公司"},{code:"02003",name:"大兴支公司"},{code:"02004",name:"东城支公司"},{code:"02005",name:"通州支公司"},{code:"02006",name:"房山支公司"},{code:"02007",name:"平谷支公司"},{code:"02008",name:"顺义支公司"},{code:"02009",name:"延庆支公司"},{code:"02010",name:"昌平支公司"},{code:"02011",name:"怀柔支公司"},{code:"02012",name:"海淀支公司"}]},{code:"02000",name:"山东省分公司"},{code:"03000",name:"江苏省分公司"},{code:"04000",name:"黑龙江省分公司"},{code:"05000",name:"重庆市分公司"},{code:"06000",name:"河南省分公司"},{code:"07000",name:"上海市分公司"},{code:"08000",name:"广东省分公司"},{code:"09000",name:"深圳市分公司"},{code:"10000",name:"天津市分公司"},{code:"11000",name:"青岛分公司"},{code:"12000",name:"辽宁省分公司"},{code:"13000",name:"河北省分公司"},{code:"14000",name:"海南省分公司"},{code:"15000",name:"广西分公司"},{code:"16000",name:"湖南省分公司"},{code:"17000",name:"浙江省分公司"},{code:"18000",name:"贵州省分公司"},{code:"19000",name:"四川省分公司"},{code:"20000",name:"青海省分公司"},{code:"21000",name:"云南省分公司"},{code:"22000",name:"陕西省分公司"},{code:"23000",name:"湖北省分公司"},{code:"24000",name:"吉林省分公司"},{code:"25000",name:"新疆分公司"},{code:"26000",name:"宁波市分公司"},{code:"27000",name:"山西省分公司"},{code:"28000",name:"大连市分公司"},{code:"29000",name:"甘肃省分公司"},{code:"30000",name:"安徽省分公司"},{code:"31000",name:"江西省分公司"},{code:"32000",name:"福建省分公司"},{code:"33000",name:"内蒙古分公司"},{code:"34000",name:"厦门市分公司"},{code:"35000",name:"宁夏自治区分公司"},{code:"36000",name:"西藏自治区分公司"}],channelList:[{code:"ct",name:"传统渠道",flag:0},{code:"org",name:"机构直管渠道",flag:1},{code:"vip",name:"重客渠道",flag:1},{code:"bank",name:"银保渠道",flag:1},{code:"agent",name:"经代渠道",flag:1},{code:"carIns",name:"车商渠道",flag:1},{code:"cross",name:"交叉销售渠道",flag:1},{code:"cn",name:"网电渠道",flag:0},{code:"tel",name:"电销渠道",flag:1},{code:"net",name:"网销渠道",flag:1},{code:"oat",name:"OAT",flag:1},{code:"mix",name:"融合渠道",flag:1}],columns:[{prop:"version",label:"预算版本号",width:120,isShow:!0},{prop:"feeModel",label:"配费模式",width:120,isShow:!1},{prop:"bizSector",label:"业务板块",width:120,isShow:!1},{prop:"inspectIndex",label:"检视指标",width:120,isShow:!0},{prop:"inspectResult",label:"检视结果",width:120,isShow:!0},{prop:"inspectDate",label:"检视日期",width:120,isShow:!0}],currentPage:1,pageSize:5,data:[],feeData:[{version:"50000201801010900",feeModel:"个车分类",bizSector:"",inspectIndex:"保费收入-实际值",inspectResult:"超过预算200万",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"车队协议",bizSector:"",inspectIndex:"保费收入占比",inspectResult:"超过预算5%",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"代理协议",bizSector:"",inspectIndex:"经营成本率-对比差值",inspectResult:"超过预算3%",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"个车分类",bizSector:"",inspectIndex:"市场费用率-实际值",inspectResult:"超过预算10%",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"车队协议",bizSector:"",inspectIndex:"保费收入-实际值",inspectResult:"超过预算100万",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"代理协议",bizSector:"",inspectIndex:"保费收入占比",inspectResult:"超过预算3%",inspectDate:"2018-01-21"}],orgData:[{version:"50000201801010900",feeModel:"",bizSector:"",inspectIndex:"保费收入-实际值",inspectResult:"超过预算200万",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"",bizSector:"",inspectIndex:"保费收入占比",inspectResult:"超过预算5%",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"",bizSector:"",inspectIndex:"经营成本率-对比差值",inspectResult:"超过预算3%",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"",bizSector:"",inspectIndex:"市场费用率-实际值",inspectResult:"超过预算10%",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"",bizSector:"",inspectIndex:"保费收入-实际值",inspectResult:"超过预算100万",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"",bizSector:"",inspectIndex:"保费收入占比",inspectResult:"超过预算3%",inspectDate:"2018-01-21"}],bizData:[{version:"50000201801010900",feeModel:"个车分类",bizSector:"家庭自用客车",inspectIndex:"保费收入-实际值",inspectResult:"超过预算200万",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"车队协议",bizSector:"非营业企业客车",inspectIndex:"保费收入占比",inspectResult:"超过预算5%",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"代理协议",bizSector:"营业客车",inspectIndex:"经营成本率-对比差值",inspectResult:"超过预算3%",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"个车分类",bizSector:"摩托车和拖拉机",inspectIndex:"市场费用率-实际值",inspectResult:"超过预算10%",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"车队协议",bizSector:"非营业货车",inspectIndex:"保费收入-实际值",inspectResult:"超过预算100万",inspectDate:"2018-01-21"},{version:"50000201801010900",feeModel:"代理协议",bizSector:"营业货车",inspectIndex:"保费收入占比",inspectResult:"超过预算3%",inspectDate:"2018-01-21"}]}},mounted:function(){""!==this.typeProp&&(this.queryData.type=this.typeProp,this.searchData())},methods:{typeChange:function(e){this.currentPage=1,"fee"===e?(this.columns.forEach(function(e){"feeModel"===e.prop?e.isShow=!0:"bizSector"===e.prop&&(e.isShow=!1)}),this.data=this.feeData,this.dataHidden=!1):"org"===e?(this.columns.forEach(function(e){"feeModel"===e.prop?e.isShow=!1:"bizSector"===e.prop&&(e.isShow=!1)}),this.data=this.orgData,this.dataHidden=!1):"biz"===e?(this.columns.forEach(function(e){"feeModel"===e.prop?e.isShow=!0:"bizSector"===e.prop&&(e.isShow=!0)}),this.data=this.bizData,this.dataHidden=!1):(this.columns.forEach(function(e){"feeModel"===e.prop?e.isShow=!1:"bizSector"===e.prop&&(e.isShow=!1)}),this.data=[],this.dataHidden=!0)},resetForm:function(){},searchData:function(){var e=this;this.$refs.queryForm.validate(function(t){t&&(e.currentPage=1,"fee"===e.queryData.type?(e.columns.forEach(function(e){"feeModel"===e.prop?e.isShow=!0:"bizSector"===e.prop&&(e.isShow=!1)}),e.data=e.feeData,e.dataHidden=!1):"org"===e.queryData.type?(e.columns.forEach(function(e){"feeModel"===e.prop?e.isShow=!1:"bizSector"===e.prop&&(e.isShow=!1)}),e.data=e.orgData,e.dataHidden=!1):"biz"===e.queryData.type?(e.columns.forEach(function(e){"feeModel"===e.prop?e.isShow=!0:"bizSector"===e.prop&&(e.isShow=!0)}),e.data=e.bizData,e.dataHidden=!1):(e.columns.forEach(function(e){"feeModel"===e.prop?e.isShow=!1:"bizSector"===e.prop&&(e.isShow=!1)}),e.data=[],e.dataHidden=!0))})},exportData:function(){},dataChange:function(e,t){this.pageSize=e,this.currentPage=t}},computed:o()({curData:function(){var e=[],t=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a>this.data.length?this.data.length:a;for(var n=t;n<a;++n)e.push(this.data[n]);return e}},Object(i.d)({tableHeader:function(e){return e.app.tableHeader}}))},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"queryForm",attrs:{"label-width":"120px",model:e.queryData,rules:e.rules,inline:!0}},[a("el-form-item",{attrs:{label:"检视类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择检视类型"},on:{change:e.typeChange},model:{value:e.queryData.type,callback:function(t){e.$set(e.queryData,"type",t)},expression:"queryData.type"}},e._l(e.typeList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"所属机构",prop:"org"}},[a("el-select",{attrs:{placeholder:"请选择所属机构"},model:{value:e.queryData.org,callback:function(t){e.$set(e.queryData,"org",t)},expression:"queryData.org"}},e._l(e.orgList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"所属渠道",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择所属渠道"},model:{value:e.queryData.channel,callback:function(t){e.$set(e.queryData,"channel",t)},expression:"queryData.channel"}},e._l(e.channelList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"预算版本号",prop:"version"}},[a("el-input",{model:{value:e.queryData.version,callback:function(t){e.$set(e.queryData,"version",t)},expression:"queryData.version"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"起始日期",prop:"startDate"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择起始日期"},model:{value:e.queryData.startDate,callback:function(t){e.$set(e.queryData,"startDate",t)},expression:"queryData.startDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"截止日期",prop:"endDate"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择截止日期"},model:{value:e.queryData.endDate,callback:function(t){e.$set(e.queryData,"endDate",t)},expression:"queryData.endDate"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.searchData}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.exportData}},[e._v("导出")])],1),e._v(" "),a("div",{staticClass:"data",attrs:{hidden:e.dataHidden},on:{"update:hidden":function(t){e.dataHidden=t}}},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.curData,stripe:"","header-cell-style":e.tableHeader}},e._l(e.columns,function(t){return t.isShow?a("el-table-column",{key:t.prop,attrs:{"header-align":"center",align:"center",prop:t.prop,label:t.label,"min-width":t.width}}):e._e()})),e._v(" "),a("base-pagination",{attrs:{total:e.data.length},on:{dataChange:e.dataChange}})],1)])])},staticRenderFns:[]};var s=a("VU/8")(r,c,!1,function(e){a("dQTv")},"data-v-7dc57652",null);t.default=s.exports}});