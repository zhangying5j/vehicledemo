webpackJsonp([28],{"+RJ3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("6D10"),i={name:"index",components:{BaseTable:function(){return a.e(123).then(a.bind(null,"ss0d"))}},data:function(){return{columns:[{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"bizClassNo",width:120,label:"业务小类号",align:"center"},{prop:"premiumScale",width:120,label:"保费规模",align:"center",isEdit:!0,type:"input"},{prop:"premiumAmount",width:120,label:"保费收入占比",align:"center",children:[{prop:"forecastValue",width:120,label:"预测值",align:"center"},{prop:"realValue",width:120,label:"实际值",align:"center",isEdit:!0,type:"input"},{prop:"diff",width:120,label:"二者差",align:"center",isEdit:!0,type:"select",options:[{value:"test",label:"测试"}]}]},{prop:"status",width:120,label:"状态",align:"center",status:!0},{prop:"operation",width:120,label:"操作",align:"center",operation:!0,operations:[{text:"编辑",event:"edit"},{text:"审批",event:"approval"}]}],data:[{id:"hn-1",bizSector:"家用-新车",bizClassNo:"1",premiumScale:"8.89",forecastValue:"51.00",realValue:"61.01",diff:"10.01",status:"审批",statusType:""},{id:"hn-2",bizSector:"家用-新车",bizClassNo:"1",premiumScale:"8.89",forecastValue:"51.00",realValue:"61.01",diff:"10.01",status:"待审批",statusType:"success"},{id:"ho-1",bizSector:"家用-旧车",bizClassNo:"1",premiumScale:"10.88",forecastValue:"51.00",realValue:"61.01",diff:"10.01",status:"已审批",statusType:"warn"},{id:"ho-2",bizSector:"家用-旧车",bizClassNo:"2",premiumScale:"10.88",forecastValue:"51.00",realValue:"61.01",diff:"10.01",status:"审批",statusType:"danger"}],columns1:[{prop:"index",width:50,label:"",type:"selection"},{prop:"no",width:120,label:"编号"},{prop:"name",width:120,label:"姓名"}],data1:[{no:"1",name:"赵"},{no:"2",name:"钱"},{no:"3",name:"孙"},{no:"4",name:"李"},{no:"5",name:"周"},{no:"6",name:"吴"},{no:"7",name:"郑"},{no:"8",name:"王"},{no:"9",name:"冯"},{no:"10",name:"陈"},{no:"11",name:"褚"},{no:"12",name:"卫"}],pageSize:5,currentPage:1}},computed:{mergeData:function(){return Object(n.a)(this.data,["bizSector","bizClassNo"])},stuData:function(){var e=[],t=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a>this.data1.length?this.data1.length:a;for(var n=t;n<a;++n)e.push(this.data1[n]);return e}},methods:{tick:function(){var e=document.getElementsByClassName("el-table__footer")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0],t=e.getElementsByTagName("td");e.removeChild(t[1]),t[0].setAttribute("colspan","2")},edit:function(e){console.log("edit",e)},approval:function(e){console.log("approval",e)},merge:function(e){var t=e.row,a=e.column;e.rowIndex,e.columnIndex;if(["bizSector","bizClassNo"].includes(a.property)){if(t.rowSpan[a.property]>1)return[t.rowSpan[a.property],1];if(0===t.rowSpan[a.property])return[0,0]}},dataChange:function(e,t){this.pageSize=e,this.currentPage=t},selectChange:function(e){console.log(e)}}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("base-table",{attrs:{columns:this.columns1,data:this.stuData,pagination:!0,total:this.data1.length,rowKey:"no"},on:{dataChange:this.dataChange,selectChange:this.selectChange}}),this._v(" "),t("el-button",{attrs:{type:"primary",loading:!0}},[this._v("加载中")])],1)},staticRenderFns:[]};var r=a("VU/8")(i,o,!1,function(e){a("FYxv")},"data-v-c7db8afa",null);t.default=r.exports},FYxv:function(e,t){}});