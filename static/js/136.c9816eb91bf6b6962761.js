webpackJsonp([136],{ZBYk:function(e,t){},lkHm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),a=n.n(r),l=n("NYxO"),o={name:"EditTable",props:{maxHeight:{type:Number,default:450},columns:{type:Array,required:!0},data:{type:Array,required:!0},rowKey:{type:String,required:!0},currentEdit:{type:String,required:!0},refName:{type:String,default:"editTable"}},data:function(){return{specialTableBtn:{width:"100%",marginTop:"5px",border:"1px dashed #15afff",background:"#fff",color:"#15afff",display:"block"}}},computed:a()({},Object(l.d)({tableHeader:function(e){return e.app.tableHeader}})),methods:{addRecord:function(){this.$emit("addRecord")},emitEvent:function(e,t){this.$emit(e,t)},handleSelectionChange:function(e){var t=[],n=this.rowKey;e.forEach(function(e){t.push(e[n])}),this.$emit("selectionChange",t)},toggleSelection:function(e){this.$refs[this.refName].toggleRowSelection(this.data[e],!0)},clearSelection:function(e){var t=this;this.data.forEach(function(n){e.includes(n[t.rowKey])&&t.$refs[t.refName].toggleRowSelection(n,!1)})}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{ref:e.refName,attrs:{stripe:"",border:"","highlight-current-row":"","header-cell-style":e.tableHeader,"max-height":e.maxHeight,data:e.data},on:{"selection-change":e.handleSelectionChange}},[e._l(e.columns,function(t){return[t.operation?n("el-table-column",{key:t.prop,attrs:{"header-align":"center",fixed:"right",label:t.label,width:t.width,align:t.align?t.align:"center"},scopedSlots:e._u([{key:"default",fn:function(r){return e._l(t.operations,function(t){return n("el-tooltip",{key:t.event,staticClass:"item",attrs:{effect:"dark",placement:"top",content:t.text}},[n("el-button",{attrs:{size:"small",type:"text",icon:t.icon},on:{click:function(n){e.emitEvent(t.event,r.row[e.rowKey])}}})],1)})}}])}):["selection","index","expand"].includes(t.type)?n("el-table-column",{key:t.prop,attrs:{"header-align":"center",type:t.type,prop:t.prop,width:t.width,label:t.label,align:t.align?t.align:"center"}}):n("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align?t.align:"center"},scopedSlots:e._u([{key:"default",fn:function(r){return[r.row.isEdit&&"input"===t.type?n("el-input",{attrs:{size:"small"},model:{value:r.row[t.prop],callback:function(n){e.$set(r.row,t.prop,n)},expression:"scope.row[column.prop]"}}):r.row.isEdit&&"select"===t.type?n("el-select",{attrs:{size:"small"},model:{value:r.row[t.prop],callback:function(n){e.$set(r.row,t.prop,n)},expression:"scope.row[column.prop]"}},e._l(t.options,function(e){return n("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})):n("span",[e._v(e._s(r.row[t.prop]))])]}}])})]})],2),e._v(" "),n("el-button",{style:e.specialTableBtn,attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.addRecord}},[e._v("\n    新增行\n  ")])],1)},staticRenderFns:[]};var c=n("VU/8")(o,i,!1,function(e){n("ZBYk")},"data-v-94af59c0",null);t.default=c.exports}});