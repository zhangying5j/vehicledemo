webpackJsonp([78],{DYKA:function(e,t){},JgBO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Dd8w"),n=a.n(l),r=a("lDdF"),i=a.n(r),o=a("uXZL"),c=a.n(o),s=a("NYxO"),p=a("Z4dx"),u=a("6D10"),d={name:"PricePlan",components:{BaseTable:function(){return a.e(106).then(a.bind(null,"ss0d"))},BizSectorList:function(){return a.e(108).then(a.bind(null,"jpoa"))}},created:function(){var e=this;Object(p.c)().then(function(t){e.initData=t.data}),Object(p.d)(this.param).then(function(t){var a=t.data.map(function(e){return{id:e.id,name:e.name}});e.$store.commit("SET_SECTORS",a),e.lifeData=t.data,e.businessSmallType[0].children=e.lifeData[1].cols,e.data=e.lifeData[1].detailData})},data:function(){return{flag:!0,pricePlan:{subCompanyCode:"01000",channel:"ct",version:"0200120180701001"},initData:{},businessSmallType:[{prop:"bizType",label:"业务小类",width:120,children:[]}],otherColumns:[{prop:"intelligent",label:"智能推荐结果",children:[{prop:"comAuto",label:"商业险自主折扣系数",width:120},{prop:"market",label:"车险手续费率",width:130}]},{prop:"parameterConfig",label:"参数配置",children:[{prop:"isDisCount",label:"是否反算折扣",width:120,align:"center"},{prop:"isFee",label:"是否反算费用",width:120,align:"center"},{prop:"targetCost",label:"配置目标成本(%)",width:140,align:"center"},{prop:"noMarket",label:"配置非市场费用率(%)",width:170,align:"center"},{prop:"comAutoUp",label:"商业险自主折扣系数上限",width:200,align:"center"},{prop:"comAutoDown",label:"商业险自主折扣系数下限",width:200,align:"center"},{prop:"comMarketUp",label:"商业险手续费率上限(%)",width:220,align:"center"},{prop:"comMarketDown",label:"商业险手续费率下限(%)",width:220,align:"center"},{prop:"forceMarket",label:"交强险市场费用率配置值",width:220,align:"center"},{prop:"expComPer",label:"预期商业险保费占比",width:210,align:"center"},{prop:"expForcePer",label:"预期交强险保费占比",width:210,align:"center"},{prop:"expPremium",label:"预期该类业务保费规模(万元)",width:230,align:"center"},{prop:"expPremiumRate",label:"预期该类业务保费占比",width:210,align:"center"}]},{prop:"actual",label:"实际该类业务保费占比",children:[{prop:"comAutoAvg",label:"商业险自主系数平均值",width:210,align:"center"},{prop:"comMarketAvg",label:"商业险市场费用率平均值",width:220,align:"center"},{prop:"comFull",label:"商业险满期赔付率(含IBNR)",width:220,align:"center"},{prop:"comFinal",label:"商业险终极赔付率",width:220,align:"center"},{prop:"comOperation",label:"商业险预期经营成本率(%)",width:220,align:"center"},{prop:"forceFinal",label:"交强险终极赔付率(%)",width:220,align:"center"},{prop:"forceFull",label:"交强险满期赔付率(%)(含IBNR)",width:240,align:"center"},{prop:"forceOperation",label:"交强险预期经营成本率(%)",width:220,align:"center"},{prop:"actualComPer",label:"实际商业险保费占比",width:210,align:"center"},{prop:"actualForcePer",label:"实际交强险保费占比",width:210,align:"center"},{prop:"actualPremiumRate",label:"实际该类业务保费占比",width:210,align:"center"}]},{prop:"future",label:"车险未来经营情况预测",children:[{prop:"totalFinal",label:"车险合计终极赔付率(%)",width:220,align:"center"},{prop:"totalFull",label:"车险合计满期赔付率(%)(含IBNR)",width:240,align:"center"},{prop:"totalMarket",label:"车险合计市场费用率(%)",width:220,align:"center"},{prop:"totalOperation",label:"车险合计预期经营成本率(%)",width:220,align:"center"}]}],lifeData:[],data:[],dialogShow:!1,expColumns:[{prop:"bizNo",label:"业务小类编号",width:120},{prop:"bizMark",label:"业务小类描述",width:130},{prop:"carType",label:"车型",width:130},{prop:"lastCount",label:"上年出险次数",width:130},{prop:"insuranceFlag",label:"转保续保标志",width:130},{prop:"com",label:"推荐商业险自主折扣系数",width:130},{prop:"market",label:"推荐手续费用率",width:130}],expData:[{bizNo:"010000",bizMark:"红色车型",carType:"红色车型",lastCount:"",insuranceFlag:"",market:"0.638",com:"0.30"},{bizNo:"020100",bizMark:"管控车型,未出险",carType:"管控车型",lastCount:"出险0次",insuranceFlag:"",market:"0.638",com:"0.30"},{bizNo:"020200",bizMark:"管控车型,出险",carType:"管控车型",lastCount:"出险1次",insuranceFlag:"",market:"0.638",com:"0.30"},{bizNo:"020300",bizMark:"管控车型,出险",carType:"管控车型",lastCount:"出险2次",insuranceFlag:"",market:"0.638",com:"0.30"},{bizNo:"020400",bizMark:"管控车型,出险",carType:"管控车型",lastCount:"出险3次及以上",insuranceFlag:"",market:"0.638",com:"0.30"},{bizNo:"030100",bizMark:"非管控非红色,未出险",carType:"非管控非红色",lastCount:"新车及未出险",insuranceFlag:"",market:"0.638",com:"0.30"},{bizNo:"030200",bizMark:"非管控非红色,未出险",carType:"非管控非红色",lastCount:"平台新保",insuranceFlag:"",market:"0.638",com:"0.30"},{bizNo:"030301",bizMark:"非管控非红色,出险",carType:"非管控非红色",lastCount:"出险1次",insuranceFlag:"转保",market:"0.638",com:"0.30"},{bizNo:"030302",bizMark:"非管控非红色,出险",carType:"非管控非红色",lastCount:"出险1次",insuranceFlag:"续保",market:"0.638",com:"0.30"},{bizNo:"030401",bizMark:"非管控非红色,出险",carType:"非管控非红色",lastCount:"出险2次",insuranceFlag:"转保",market:"0.638",com:"0.30"},{bizNo:"030402",bizMark:"非管控非红色,出险",carType:"非管控非红色",lastCount:"出险2次",insuranceFlag:"续保",market:"0.638",com:"0.30"},{bizNo:"030501",bizMark:"非管控非红色,出险",carType:"非管控非红色",lastCount:"出险3次及以上",insuranceFlag:"转保",market:"0.638",com:"0.30"},{bizNo:"030502",bizMark:"非管控非红色,出险",carType:"非管控非红色",lastCount:"出险3次及以上",insuranceFlag:"续保",market:"0.638",com:"0.30"}]}},methods:{sectorClick:function(e){var t=this.sectors.findIndex(function(t){return t.id===e});this.businessSmallType[0].children=this.lifeData[t].cols,this.data=this.lifeData[t].detailData},exportData:function(){var e=this;this.$confirm("确定导出该销售指引吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"销售指引导出成功!"});var t=c.a.utils.table_to_book(document.querySelector("#outTab2")),a=c.a.write(t,{bookType:"xlsx",bookSST:!0,type:"array"});try{i.a.saveAs(new Blob([a],{type:"application/octet-stream"}),"销售指引.xlsx")}catch(e){"undefined"!=typeof console&&console.info(e,a)}return a}).catch(function(){})},merge:function(e){var t=e.row,a=e.column;e.rowIndex,e.columnIndex;if(["carType","lastCount"].includes(a.property)){if(t.rowSpan[a.property]>1)return[t.rowSpan[a.property],1];if(0===t.rowSpan[a.property])return[0,0]}},query:function(){},exportPriceData:function(){var e=this;this.$confirm("确定导出该定价策略吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"定价策略导出成功!"});var t=["家用-旧车","家用-新车","企业非营业客车","企业非营业货车","机关非营业客车","机关非营业货车","机关非营业特种车","机动非营业客车","营业出租客车","营业出租货车","营业城市公交","营业旅游客车","营业公路货车","营业公路挂车"],a={};t.forEach(function(e){console.log(e),a[e]=c.a.utils.table_to_sheet(document.querySelector("#out-table"))});var l=c.a.utils.book_new();return l.SheetNames=t,l.Sheets=a,c.a.writeFile(l,"定价策略.xlsx")}).catch(function(){})},tableCellClassName:function(e){var t=!1;return""===e.row[e.column.property]&&(t=!0),t?"info-cell":null}},computed:n()({columns:function(){return this.businessSmallType.concat(this.otherColumns)},mergeData:function(){return Object(u.a)(this.expData,["carType","lastCount"])}},Object(s.d)({sectors:function(e){return e.individual.sectors}}))},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"pricePlanForm",attrs:{"label-width":"120px",inline:!0,model:e.pricePlan}},[a("el-form-item",{attrs:{label:"机构代码",prop:"subCompanyCode"}},[a("el-select",{attrs:{placeholder:"请选择机构代码",size:"medium"},model:{value:e.pricePlan.subCompanyCode,callback:function(t){e.$set(e.pricePlan,"subCompanyCode",t)},expression:"pricePlan.subCompanyCode"}},e._l(e.initData.companyList,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"渠道",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择渠道",size:"medium"},model:{value:e.pricePlan.channel,callback:function(t){e.$set(e.pricePlan,"channel",t)},expression:"pricePlan.channel"}},e._l(e.initData.channelList,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"版本号:",prop:"version"}},[a("el-input",{attrs:{readonly:""},model:{value:e.pricePlan.version,callback:function(t){e.$set(e.pricePlan,"version",t)},expression:"pricePlan.version"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("查询")])],1)],1)],1),e._v(" "),a("biz-sector-list",{attrs:{title:"选择业务板块",sectors:e.sectors,active:"2"},on:{sectorClick:e.sectorClick}}),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"btn"},[a("div",{staticStyle:{float:"right"}},[a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:e.exportPriceData}},[e._v("定价策略导出")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(t){e.dialogShow=!0}}},[e._v("销售报价策略导出")])],1)])]),e._v(" "),a("base-table",{attrs:{columns:e.columns,data:e.data,id:"out-table"}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.dialogShow,width:"60%"},on:{"update:visible":function(t){e.dialogShow=t}}},[a("div",{staticClass:"data"},[a("base-table",{attrs:{columns:e.expColumns,data:e.mergeData,spanMethod:e.merge,border:e.flag,cellClassName:e.tableCellClassName,id:"outTab2"}})],1),e._v(" "),a("div",{staticClass:"option",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",type:"primary"},on:{click:e.exportData}},[e._v("销售指引导出")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary"},on:{click:function(t){e.dialogShow=!1}}},[e._v("关闭")])],1)])],1)},staticRenderFns:[]};var b=a("VU/8")(d,m,!1,function(e){a("DYKA")},"data-v-0dac5f14",null);t.default=b.exports}});