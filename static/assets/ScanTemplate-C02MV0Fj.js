import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CT9hu068.js";import{d as t,r as a,s as l,e as o,G as i,F as s,K as r,H as n,o as p,c as m,w as u,a as d,z as c,t as g,A as f,B as v,f as j,I as y,J as _,l as b}from"./index-KRGk12nW.js";import{a as h,E as x}from"./el-col-BAGtjXmv.js";import{E as w}from"./el-text-CzHloMOA.js";import{_ as S}from"./Table.vue_vue_type_script_lang-DpFssv_i.js";import{u as k}from"./useTable-F7zxLGkE.js";import{u as C}from"./useIcon-C2iD-PC_.js";import{e as T,f as E}from"./index-De549qh2.js";import{_ as z}from"./Dialog.vue_vue_type_style_index_0_lang-DWirc3I4.js";import A from"./DetailTemplate-xzaAPROD.js";import"./el-card-DCxCGAT-.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-wh2PzFWh.js";import"./el-table-column-iXo-_pHO.js";import"./index-DW-ADnkR.js";import"./debounce-DQE3XwSh.js";import"./el-checkbox-Bm2BCHMT.js";import"./isArrayLikeObject-TVjqJchl.js";import"./raf-1T_Q1bCh.js";import"./el-tag-C8hPWVQo.js";import"./el-pagination-BY5d0Jzg.js";import"./el-select-zTb78GhE.js";import"./strings-B5LAS_4L.js";import"./useInput-8TO2ocnj.js";import"./el-image-viewer-DAaUOm0A.js";import"./el-empty-CnGYcRUe.js";import"./tsxHelper-C8UKL7NZ.js";import"./el-dropdown-item-DmNiz-ql.js";import"./castArray-Bwuex2cE.js";import"./refs-BWFENJSL.js";import"./index-BhDrzngV.js";import"./index-Jp-pEfyE.js";import"./el-switch-74D2zXON.js";import"./el-form-wZC2EpEv.js";import"./el-virtual-list-3HlY3y8o.js";import"./el-select-v2-CJsjIm47.js";/* empty css                */import"./index-CVD5zqZx.js";import"./index-BbnfDR2n.js";const D={class:"mb-10px"},I={style:{position:"relative",top:"12px"}};function U(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!_(e)}const H=t({__name:"ScanTemplate",setup(t){const _=C({icon:"iconoir:search"}),{t:H}=b(),L=a(""),V=()=>{K()},N=l([{field:"selection",type:"selection",minWidth:55},{field:"name",label:H("task.templateName")},{field:"action",label:H("tableDemo.action"),formatter:(e,t,a)=>{let l,r;return o(s,null,[o(i,{type:"success",onClick:()=>ne(e.id)},U(l=H("common.edit"))?l:{default:()=>[l]}),o(i,{type:"danger",onClick:()=>$(e)},U(r=H("common.delete"))?r:{default:()=>[r]})])}}]),{tableRegister:O,tableState:P,tableMethods:R}=k({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=P,a=await E(L.value,e.value,t.value);return{list:a.data.list,total:a.data.total}},immediate:!0}),{loading:F,dataList:W,total:B,currentPage:G,pageSize:J}=P;J.value=20;const{getList:K,getElTableExpose:M}=R;function X(){return{background:"var(--el-fill-color-light)"}}const Y=a(!1);let q=H("task.addTemplate");const Q=()=>{Y.value=!1},Z=async()=>{r({title:"Delete",draggable:!0}).then((async()=>{await le()}))},$=async e=>{r({title:"Delete",draggable:!0}).then((async()=>{await te(e)}))},ee=a(!1),te=async e=>{ee.value=!0;try{await T([e.id]);ee.value=!1,K()}catch(t){ee.value=!1,K()}},ae=a([]),le=async()=>{const e=await M(),t=(null==e?void 0:e.getSelectionRows())||[];ae.value=t.map((e=>e.id)),ee.value=!0;try{await T(ae.value);ee.value=!1,K()}catch(a){ee.value=!1,K()}};n((()=>{ie(),window.addEventListener("resize",ie)}));const oe=a(0),ie=()=>{const e=window.innerHeight||document.documentElement.clientHeight;oe.value=.8*e},se=async()=>{re.value="",q=H("task.addTemplate"),Y.value=!0},re=a(""),ne=async e=>{re.value=e,q=H("task.editTemplate"),Y.value=!0};return(t,a)=>(p(),m(s,null,[o(d(e),null,{default:u((()=>[o(d(h),null,{default:u((()=>[o(d(x),{span:1},{default:u((()=>[o(d(w),{class:"mx-1",style:{position:"relative",top:"8px"}},{default:u((()=>[c(g(d(H)("task.templateName"))+": ",1)])),_:1})])),_:1}),o(d(x),{span:5},{default:u((()=>[o(d(f),{modelValue:L.value,"onUpdate:modelValue":a[0]||(a[0]=e=>L.value=e),placeholder:d(H)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(d(x),{span:5,style:{position:"relative",left:"16px"}},{default:u((()=>[o(d(v),{type:"primary",icon:d(_),style:{height:"100%"},onClick:V},{default:u((()=>[c("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(d(h),null,{default:u((()=>[o(d(x),{style:{position:"relative",top:"16px"}},{default:u((()=>[j("div",D,[o(d(i),{type:"primary",onClick:se},{default:u((()=>[c(g(d(H)("task.addTemplate")),1)])),_:1}),o(d(i),{type:"danger",loading:ee.value,onClick:Z},{default:u((()=>[c(g(d(H)("task.deleteTemplate")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),j("div",I,[o(d(S),{"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0},pageSize:d(J),"onUpdate:pageSize":a[1]||(a[1]=e=>y(J)?J.value=e:null),currentPage:d(G),"onUpdate:currentPage":a[2]||(a[2]=e=>y(G)?G.value=e:null),columns:N,data:d(W),stripe:"",border:!0,loading:d(F),"max-height":oe.value,resizable:!0,pagination:{total:d(B),pageSizes:[20,30,50,100,200,500,1e3]},onRegister:d(O),headerCellStyle:X,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","max-height","pagination","onRegister"])])])),_:1}),o(d(z),{modelValue:Y.value,"onUpdate:modelValue":a[3]||(a[3]=e=>Y.value=e),title:d(q),center:"",fullscreen:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:u((()=>[o(A,{closeDialog:Q,getList:d(K),id:re.value},null,8,["getList","id"])])),_:1},8,["modelValue","title"])],64))}});export{H as default};