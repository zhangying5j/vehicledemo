webpackJsonp([57],{JX7E:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("P0XF"),a={name:"EditTest",components:{EditTable:function(){return i.e(129).then(i.bind(null,"lkHm"))}},data:function(){return{currentEdit:"",columns:[{prop:"index",width:50,label:"",type:"selection"},{prop:"name",width:"120",label:"姓名",type:"input"},{prop:"sex",width:"120",label:"性别",type:"select",options:[{value:"male",label:"男"},{value:"female",label:"女"}]},{prop:"age",width:"120",label:"年龄",type:"input"},{prop:"birthday",width:"120",label:"生日",type:"input"},{prop:"test",width:"120",label:"未知"},{prop:"operation",width:"120",label:"操作",operation:!0,operations:[{text:"编辑",event:"edit",icon:"iconfont icon-bianji"},{text:"保存",event:"save",icon:"iconfont icon-fuzhi"},{text:"删除",event:"removeRecord",icon:"iconfont icon-iconfont-shanchu"}]}],data:[{no:"1",name:"张翰",sex:"男",age:"21",birthday:"2018-02-01",isEdit:!1,test:"12"},{no:"2",name:"李明",sex:"男",age:"25",birthday:"2018-01-01",isEdit:!1,test:"23"},{no:"3",name:"王珊",sex:"女",age:"32",birthday:"2018-02-02",isEdit:!1,test:"45"}]}},methods:{addRecord:function(){var t=Object(n.a)(),e={no:t,isEdit:!0,name:"",sex:"",age:"",birthday:"",test:"test"};this.data.push(e),this.edit(t)},removeRecord:function(t){var e=this;this.$confirm("确定删除此条数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var i=e.data.findIndex(function(i){return i[e.rowKey]===t});i===e.currentEditIndex&&(e.currentEdit=""),e.data.splice(i,1),e.$message({type:"success",message:"删除成功!"})}).catch(function(){})},edit:function(t){this.currentEditIndex>-1&&(this.data[this.currentEditIndex].isEdit=!1),this.currentEdit=t,this.data[this.currentEditIndex].isEdit=!0},save:function(){this.data[this.currentEditIndex].isEdit=!1,this.currentEdit=""}},computed:{currentEditIndex:function(){var t=this;return this.data.findIndex(function(e){return e.no===t.currentEdit})}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"data"},[e("div",{staticClass:"table"},[e("edit-table",{attrs:{columns:this.columns,data:this.data,rowKey:"no",currentEdit:this.currentEdit},on:{addRecord:this.addRecord,edit:this.edit,save:this.save,removeRecord:this.removeRecord}})],1)])])},staticRenderFns:[]};var r=i("VU/8")(a,d,!1,function(t){i("viVe")},"data-v-4e70c7d3",null);e.default=r.exports},viVe:function(t,e){}});