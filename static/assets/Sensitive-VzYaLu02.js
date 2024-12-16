import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CT9hu068.js";import{d as t,r as a,s as l,e as o,S as i,G as s,F as n,o as r,c as u,w as m,a as p,z as d,t as c,A as f,B as g,f as v,I as y,J as _,l as j}from"./index-KRGk12nW.js";import{E as b,a as h}from"./el-col-BAGtjXmv.js";import{E as x}from"./el-text-CzHloMOA.js";import{_ as w}from"./Table.vue_vue_type_script_lang-DpFssv_i.js";import{_ as S}from"./Dialog.vue_vue_type_style_index_0_lang-DWirc3I4.js";import{u as C}from"./useTable-F7zxLGkE.js";import{u as k}from"./useIcon-C2iD-PC_.js";import{d as I,_ as z,g as A,u as E}from"./Detail.vue_vue_type_script_setup_true_lang-C4tASWfS.js";import"./el-card-DCxCGAT-.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-wh2PzFWh.js";import"./el-table-column-iXo-_pHO.js";import"./index-DW-ADnkR.js";import"./debounce-DQE3XwSh.js";import"./el-checkbox-Bm2BCHMT.js";import"./isArrayLikeObject-TVjqJchl.js";import"./raf-1T_Q1bCh.js";import"./el-tag-C8hPWVQo.js";import"./el-pagination-BY5d0Jzg.js";import"./el-select-zTb78GhE.js";import"./strings-B5LAS_4L.js";import"./useInput-8TO2ocnj.js";import"./el-image-viewer-DAaUOm0A.js";import"./el-empty-CnGYcRUe.js";import"./tsxHelper-C8UKL7NZ.js";import"./el-dropdown-item-DmNiz-ql.js";import"./castArray-Bwuex2cE.js";import"./refs-BWFENJSL.js";import"./index-BhDrzngV.js";import"./el-form-wZC2EpEv.js";import"./el-divider-ClRUh_tN.js";import"./el-virtual-list-3HlY3y8o.js";import"./el-select-v2-CJsjIm47.js";import"./el-switch-74D2zXON.js";import"./index-Jp-pEfyE.js";const R={class:"mb-10px"},U={class:"mb-10px"},W={class:"mb-10px"},D={class:"mb-10px"};function F(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!_(e)}const N=t({__name:"Sensitive",setup(t){const _=k({icon:"iconoir:search"}),{t:N}=j(),V=a(""),L=()=>{K()},P=l([{field:"selection",type:"selection",width:"55"},{field:"id",hidden:!0},{field:"name",label:N("sensitiveInformation.sensitiveName"),minWidth:40},{field:"regular",label:N("sensitiveInformation.sensitiveRegular"),minWidth:100},{field:"color",label:N("sensitiveInformation.sensitiveColor"),minWidth:20},{field:"state",label:N("common.state"),minWidth:40,formatter:(e,t,a)=>{if(null==a)return o("div",null,null);let l="",s="";return 1==a?(l="#2eb98a",s=N("common.on")):(l="red",s=N("common.off")),o(h,{gutter:20},{default:()=>[o(b,{span:1},{default:()=>[o(i,{icon:"clarity:circle-solid",color:l,size:10},null)]}),o(b,{span:5},{default:()=>[o(x,{type:"info"},F(s)?s:{default:()=>[s]})]})]})}},{field:"action",label:N("tableDemo.action"),minWidth:40,formatter:(e,t,a)=>{let l,i;return o(n,null,[o(s,{type:"primary",onClick:()=>te(e)},F(l=N("common.edit"))?l:{default:()=>[l]}),o(s,{type:"danger",onClick:()=>le(e)},F(i=N("common.delete"))?i:{default:()=>[i]})])}}]),{tableRegister:H,tableState:T,tableMethods:G}=C({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=T,a=await A(V.value,e.value,t.value);return{list:a.data.list,total:a.data.total}}}),{loading:O,dataList:B,total:J,currentPage:M,pageSize:$}=T,{getList:K,getElTableExpose:X}=G;function Y(){return{background:"var(--el-fill-color-light)"}}const q=a(!1),Q=async()=>{ee.id="",ee.color="null",ee.regular="",ee.name="",ee.state=!0,q.value=!0},Z=()=>{q.value=!1};let ee=l({id:"",name:"",regular:"",color:"null",state:!0});const te=e=>{ee.id=e.id,ee.color=e.color,ee.regular=e.regular,ee.name=e.name,ee.state=e.state,q.value=!0},ae=a(!1),le=async e=>{ae.value=!0;try{await I([e.id]);ae.value=!1,K()}catch(t){ae.value=!1,K()}},oe=a([]),ie=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await(async()=>{oe.value=[];const e=await X(),t=(null==e?void 0:e.getSelectionRows())||[];oe.value=t.map((e=>e.id)),ae.value=!0;try{await I(oe.value),ae.value=!1,K()}catch(a){ae.value=!1,K()}})()},se=async e=>{if(window.confirm("Are you sure you want to update the selected data?")){oe.value=[];const t=await X(),a=(null==t?void 0:t.getSelectionRows())||[];oe.value=a.map((e=>e.id)),await E(oe.value,e),K()}};return(t,a)=>(r(),u(n,null,[o(p(e),null,{default:m((()=>[o(p(h),{gutter:20,style:{"margin-bottom":"15px"}},{default:m((()=>[o(p(b),{span:1},{default:m((()=>[o(p(x),{class:"mx-1",style:{position:"relative",top:"8px",left:"30%"}},{default:m((()=>[d(c(p(N)("sensitiveInformation.sensitiveName"))+" :",1)])),_:1})])),_:1}),o(p(b),{span:5},{default:m((()=>[o(p(f),{modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e),placeholder:p(N)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(p(b),{span:5},{default:m((()=>[o(p(g),{type:"primary",icon:p(_),style:{height:"38px"},onClick:L},{default:m((()=>[d("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(p(h),{gutter:60},{default:m((()=>[o(p(b),{span:1},{default:m((()=>[v("div",R,[o(p(g),{type:"primary",onClick:Q},{default:m((()=>[d(c(p(N)("common.new")),1)])),_:1})])])),_:1}),o(p(b),{span:1},{default:m((()=>[v("div",U,[o(p(g),{type:"success",onClick:a[1]||(a[1]=e=>se(!0))},{default:m((()=>[d(c(p(N)("common.on")),1)])),_:1})])])),_:1}),o(p(b),{span:1},{default:m((()=>[v("div",W,[o(p(g),{type:"danger",onClick:a[2]||(a[2]=e=>se(!1))},{default:m((()=>[d(c(p(N)("common.off")),1)])),_:1})])])),_:1}),o(p(b),{span:1},{default:m((()=>[v("div",D,[o(p(s),{type:"danger",loading:ae.value,onClick:ie},{default:m((()=>[d(c(p(N)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),o(p(w),{pageSize:p($),"onUpdate:pageSize":a[3]||(a[3]=e=>y($)?$.value=e:null),currentPage:p(M),"onUpdate:currentPage":a[4]||(a[4]=e=>y(M)?M.value=e:null),columns:P,data:p(B),stripe:"",border:!0,loading:p(O),resizable:!0,pagination:{total:p(J),pageSizes:[10,20,50,100,200,500,1e3]},onRegister:p(H),headerCellStyle:Y,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),o(p(S),{modelValue:q.value,"onUpdate:modelValue":a[5]||(a[5]=e=>q.value=e),title:p(ee).id?t.$t("common.edit"):t.$t("common.new"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:300},{default:m((()=>[o(z,{closeDialog:Z,sensitiveForm:p(ee),getList:p(K)},null,8,["sensitiveForm","getList"])])),_:1},8,["modelValue","title"])],64))}});export{N as default};