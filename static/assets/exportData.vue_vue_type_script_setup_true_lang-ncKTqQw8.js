import{d as e,s as t,e as a,H as l,F as o,r as i,o as r,i as s,w as n,a as d,y as p,t as u,L as m,M as c,O as f,l as y}from"./index-vMt5tOuI.js";import{E as x,a as b}from"./el-tab-pane-zqlH3GjE.js";import{E as _,a as g}from"./el-form-CrZErb9v.js";import{a as w,E as h}from"./el-radio-group-PFBUXVzP.js";import{E as v}from"./el-tag-C3mt1pWb.js";import{E as j}from"./el-space-CvMwlCn7.js";import{r as E}from"./index-znw49gEj.js";import{_ as S}from"./Table.vue_vue_type_script_lang-kKqRQLK4.js";import{u as T}from"./useTable-DO6t6Zuf.js";const C=e=>E.post({url:"/api/export/delete",data:{ids:e}});function R(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!f(e)}const k=e({__name:"exportData",props:{index:{},searchParams:{}},setup(e){const{t:f}=y(),k=e,A=t({type:"all",quantity:0}),V=async()=>{var e,t,a,l;O.value=!0,await(e=k.index,t=A.quantity,a=A.type,l=k.searchParams,E.post({url:"/api/export",data:{index:e,quantity:t,type:a,search:l}})),O.value=!1},q=t([{field:"selection",type:"selection"},{field:"file_name",label:f("export.fileName"),width:"160"},{field:"state",label:f("export.state"),width:"160",formatter:(e,t,l)=>{if(0==l){let e;return a(v,{type:"info"},R(e=f("export.run"))?e:{default:()=>[e]})}if(1==l){let e;return a(v,{type:"success"},R(e=f("export.success"))?e:{default:()=>[e]})}{let e;return a(v,{type:"danger"},R(e=f("export.fail"))?e:{default:()=>[e]})}}},{field:"create_time",label:f("export.createTime"),width:"160"},{field:"end_time",label:f("export.endTime"),width:"160",formatter:(e,t,a)=>""==a?"-":a},{field:"data_type",label:f("export.type"),width:"120"},{field:"file_size",label:f("export.fileSize"),width:"100",formatter:(e,t,a)=>""==a?"-":a+" MB"},{field:"action",label:f("tableDemo.action"),width:"200",formatter:(e,t,i)=>{let r,s;return a(o,null,[a(l,{type:"success",onClick:()=>I(e.file_name)},R(r=f("export.download"))?r:{default:()=>[r]}),a(l,{type:"danger",onClick:()=>H(e)},R(s=f("common.delete"))?s:{default:()=>[s]})])}}]),{tableRegister:U,tableState:L,tableMethods:M}=T({fetchDataApi:async()=>({list:(await E.get({url:"/api/export/record"})).data.list}),immediate:!1}),{dataList:N,loading:P}=L,{getList:D,getElTableExpose:F}=M,I=async e=>{const t=document.createElement("a");t.href="/api/export/download?file_name="+e,t.click()},O=i(!1),z=e=>{"exportRecords"==e&&D()},B=i(!1),H=async e=>{window.confirm("Are you sure you want to delete the selected data?")&&await Q(e)},Q=async e=>{B.value=!0;try{await C([e.file_name]);B.value=!1,D()}catch(t){B.value=!1,D()}},X=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await J()},G=i([]),J=async()=>{const e=await F(),t=(null==e?void 0:e.getSelectionRows())||[];G.value=t.map((e=>e.file_name)),B.value=!0;try{await C(G.value);B.value=!1,D()}catch(a){B.value=!1,D()}};return(e,t)=>(r(),s(d(b),{tabPosition:"left",onTabChange:z,"model-value":"export"},{default:n((()=>[a(d(x),{label:d(f)("asset.export"),name:"export"},{default:n((()=>[a(d(_),{model:A,"label-width":"auto",style:{position:"relative"}},{default:n((()=>[a(d(g),{label:d(f)("export.exportType")},{default:n((()=>[a(d(w),{modelValue:A.type,"onUpdate:modelValue":t[0]||(t[0]=e=>A.type=e)},{default:n((()=>[a(d(h),{value:"all"},{default:n((()=>[p(u(d(f)("export.exportTypeAll")),1)])),_:1}),a(d(h),{value:"search"},{default:n((()=>[p(u(d(f)("export.exportTypeSearch")),1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["label"]),a(d(g),{label:d(f)("export.exportQuantity")},{default:n((()=>[a(d(m),{modelValue:A.quantity,"onUpdate:modelValue":t[1]||(t[1]=e=>A.quantity=e)},null,8,["modelValue"])])),_:1},8,["label"]),a(d(g),null,{default:n((()=>[a(d(c),{type:"primary",onClick:V,style:{left:"40%",position:"relative"},loading:O.value},{default:n((()=>[p(" Create ")])),_:1},8,["loading"])])),_:1})])),_:1},8,["model"])])),_:1},8,["label"]),a(d(x),{label:d(f)("export.exportRecords"),name:"exportRecords"},{default:n((()=>[a(d(j),{direction:"vertical",alignment:"flex-start"},{default:n((()=>[a(d(l),{type:"danger",loading:B.value,onClick:X},{default:n((()=>[p(u(d(f)("common.delete")),1)])),_:1},8,["loading"]),a(d(S),{onRegister:d(U),columns:q,data:d(N),loading:d(P),"max-height":"500",style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["onRegister","columns","data","loading"])])),_:1})])),_:1},8,["label"])])),_:1}))}});export{k as _};
