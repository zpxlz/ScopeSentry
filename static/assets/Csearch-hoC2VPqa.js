import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BnfBOZXX.js";import{d as a,dC as l,s as t,r as o,O as s,o as i,c as n,e as r,w as p,a as d,z as u,f as c,t as m,y as v,A as f,F as g,R as h,i as y,j as _,S as x,l as j,J as b,L as w,_ as k}from"./index-CXVsFj8T.js";import{a as C,E as S}from"./el-col-BpyP6u5N.js";import{E as H,a as V}from"./el-table-column-D2FtGLuH.js";import"./el-checkbox-BZWiJvwQ.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper--Yn4Et2q.js";import{E}from"./el-tag-BGlgaZfK.js";import{E as $}from"./el-text-C59JYDss.js";import{E as F}from"./el-divider-BsLzYQsX.js";import{E as T,a as z}from"./el-tree-select-Dhef5_az.js";import{b as L,E as U,a as D}from"./el-dropdown-item-frpByJrV.js";import"./el-select-B9ZM6-bz.js";import{E as I}from"./el-switch-C1qZpWLl.js";import{_ as A}from"./Dialog.vue_vue_type_style_index_0_lang-BlwFW53e.js";import{u as O}from"./useIcon-BVOxJxgs.js";import{_ as W}from"./exportData.vue_vue_type_script_setup_true_lang-CtXnim1U.js";import{r as J}from"./index-DHB8X29L.js";import"./el-card-Pr8by1x0.js";import"./index-CG2vo_0e.js";import"./debounce-X5b9ADvL.js";import"./isArrayLikeObject-CJ6Fae5P.js";import"./raf-CqfJXkvs.js";import"./index-BLNThGzp.js";import"./strings-B3umeZh4.js";import"./el-pagination-BrX-SOwB.js";import"./castArray-CDWPsquX.js";import"./refs-C99qiN1Z.js";import"./useInput-DIrxmvP2.js";import"./el-tab-pane-B-U9u4O0.js";import"./el-form-DsJHnfol.js";import"./el-radio-group-LT5L5VW3.js";import"./el-space-pNq-QNia.js";import"./index-r6j39E7X.js";import"./Table.vue_vue_type_script_lang-CPNkrxnT.js";import"./el-image-viewer-DG9lZtjp.js";import"./el-empty-Dwg96ACM.js";import"./tsxHelper-B8VnjSdt.js";import"./index-DPK1tYEg.js";import"./useTable-C-Ac8o2L.js";const K={style:{float:"left"}},N={style:{float:"right",color:"var(--el-text-color-secondary)","font-size":"13px"}},q={class:"custom-dropdown"},B={key:0,class:"dropdown-item"},R={class:"label-text"},P={class:"label-text"},M={class:"flex gap-2"},X=k(a({__name:"Csearch",props:{getList:{type:Function},handleSearch:{type:Function},searchKeywordsData:{},index:{},getElTableExpose:{type:Function},handleFilterSearch:{type:Function},projectList:{},dynamicTags:{},handleClose:{type:Function},openAggregation:{type:Function},crudSchemas:{},statisticsHidden:{type:Boolean},changeStatisticsHidden:{type:Function}},emits:["update-column-visibility"],setup(a,{emit:k}){const{t:X}=j(),{query:Z}=l(),G=a,Q=t([...G.searchKeywordsData]),Y={keyword:"task",example:'task=="test"',explain:X("searchHelp.taskName")};Q.push(Y),Q.push({keyword:"tag",example:'tag=="test"',explain:"find tags"});const ee=[{operator:"=",meaning:X("searchHelp.like"),value:'=""'},{operator:"!=",meaning:X("searchHelp.notIn"),value:'!=""'},{operator:"==",meaning:X("searchHelp.equal"),value:'==""'}],ae=[{operator:"&&",meaning:X("searchHelp.and"),value:"&&",logic:"1"},{operator:"||",meaning:X("searchHelp.or"),value:"||",logic:"1"},{operator:"()",meaning:X("searchHelp.brackets"),value:"()",logic:"1"}],le=ee.concat(ae),te=o(!1);(()=>{const e=JSON.parse(localStorage.getItem(`columnConfig_${G.index}`)||"{}");G.crudSchemas.forEach((a=>{void 0!==e[a.field]&&(a.hidden=e[a.field])}))})(),s((()=>G.crudSchemas),(()=>{(()=>{const e=G.crudSchemas.reduce(((e,a)=>("select"!=a.field&&(e[a.field]=a.hidden),e)),{});localStorage.setItem(`columnConfig_${G.index}`,JSON.stringify(e))})()}),{deep:!0});const oe=()=>{te.value=!0};function se(){return{background:"var(--el-fill-color-light)"}}const ie=o(""),ne=O({icon:"iconoir:search"}),re=O({icon:"tdesign:chat-bubble-help"}),pe=O({icon:"ri:arrow-drop-down-line"}),de=O({icon:"ph:export-light"}),ue=O({icon:"carbon:data-vis-1"}),ce=O({icon:"openmoji:delete"}),me=o(!1),ve=()=>{me.value=!0},fe=o([]),ge=async()=>{b.confirm("Whether to delete?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((async()=>{const e=await G.getElTableExpose(),a=(null==e?void 0:e.getSelectionRows())||[];fe.value=a.map((e=>e.id)),await J(fe.value,G.index),G.getList()})).catch((()=>{w({type:"info",message:"Delete canceled"})}))},he=o(""),ye=o(!1),_e=o(!1);let xe=o(!0),je=o(!1),be=o(!1);const we=(e,a)=>{if(he.value=e,""==e&&(xe.value=!0,be.value=!1,je.value=!1),xe.value){be.value&&(e=e.replace(he.value,"").trim());a(Q.filter((a=>a.keyword.toLowerCase().includes(e.toLowerCase()))))}else if(je.value){const l=e.replace(he.value,"").trim();a(ee.filter((e=>e.operator.includes(l))))}else if(be.value&&e.endsWith(" ")){const l=e.replace(ie.value,"").trim();a(ae.filter((e=>e.operator.includes(l))))}else a([])},ke=e=>{if(e.keyword){let a="";a=be.value?he.value+e.keyword:e.keyword,he.value=a,ie.value=a,ye.value=!0,xe.value=!1,je.value=!0}else e.logic?(ie.value=`${he.value}${e.value}`,he.value=ie.value,xe.value=!0):(ie.value=`${he.value}${e.value}`,he.value=ie.value,_e.value=!0,je.value=!1,be.value=!0)},Ce=o(!1),Se=o([]);s((()=>Se.value),(e=>{(async()=>{G.handleFilterSearch(ie.value,{project:Se.value})})()}));const He=o(G.dynamicTags?[...G.dynamicTags]:[]),Ve=()=>{const e={};He.value.forEach((a=>{const[l,t]=a.split("=");l in e?e[l].push(t):e[l]=[t]})),e.project=Se.value,G.handleFilterSearch(ie.value,e)};let Ee=Z.task;void 0!==Ee&&""!==Ee&&He.value.push(`task=${Ee}`),Ve(),s((()=>G.dynamicTags),(e=>{He.value=e?[...e]:[],Ve()}),{immediate:!1});const $e=k,Fe=o(G.statisticsHidden),Te=()=>{location.reload()};return(a,l)=>(i(),n(g,null,[r(d(e),null,{default:p((()=>[r(d(C),{class:"row-bg",gutter:20},{default:p((()=>[r(d(S),{span:6},{default:p((()=>[r(d(T),{modelValue:ie.value,"onUpdate:modelValue":l[0]||(l[0]=e=>ie.value=e),"fetch-suggestions":we,placeholder:d(X)("form.input"),popperClass:"my-autocomplete",onSelect:ke,style:{width:"100%"}},{append:p((()=>[r(d(u),{onClick:oe,text:"",style:{display:"contents"},icon:d(re)},null,8,["icon"])])),default:p((({item:e})=>[c("span",K,m(e.keyword||e.operator),1),c("span",N,m(e.explain||e.meaning),1)])),_:1},8,["modelValue","placeholder"])])),_:1}),r(d(S),{span:1.5},{default:p((()=>[r(d(u),{type:"primary",icon:d(ne),onClick:l[1]||(l[1]=e=>a.$props.handleSearch(ie.value))},{default:p((()=>[v(m(d(X)("form.input")),1)])),_:1},8,["icon"])])),_:1}),r(d(S),{span:1.5},{default:p((()=>[r(d(u),{type:"primary",onClick:ve,icon:d(de)},{default:p((()=>[v(m(d(X)("asset.export")),1)])),_:1},8,["icon"])])),_:1}),r(d(S),{span:4},{default:p((()=>[r(d(z),{loading:Ce.value,modelValue:Se.value,"onUpdate:modelValue":l[2]||(l[2]=e=>Se.value=e),data:a.$props.projectList,placeholder:d(X)("project.project"),multiple:"",filterable:"","show-checkbox":"","collapse-tags":"","max-collapse-tags":1},null,8,["loading","modelValue","data","placeholder"])])),_:1}),r(d(S),{span:1.5,xs:1.5,sm:1.5,md:1.5},{default:p((()=>[r(d(L),{trigger:"click"},{dropdown:p((()=>[r(d(U),null,{default:p((()=>[r(d(D),{icon:d(ce),onClick:ge},{default:p((()=>[v(m(d(X)("common.delete")),1)])),_:1},8,["icon"])])),_:1})])),default:p((()=>[r(d(u),{plain:"",class:"custom-button align-bottom"},{default:p((()=>[v(m(d(X)("common.operation"))+" ",1),r(d(f),{class:"el-icon--right"},{default:p((()=>[r(d(pe))])),_:1})])),_:1})])),_:1})])),_:1}),r(d(S),{span:1,style:{display:"flex","align-items":"center"}},{default:p((()=>[r(d(L),null,{dropdown:p((()=>[r(d(U),null,{default:p((()=>[(i(!0),n(g,null,h(a.crudSchemas,((e,a)=>(i(),y(d(D),{key:a},{default:p((()=>["selection"!=e.field?(i(),n("div",B,[c("span",R,m(e.label),1),r(d(I),{size:"small",modelValue:e.hidden,"onUpdate:modelValue":a=>e.hidden=a,"active-value":!1,"inactive-value":!0,onChange:a=>(e=>{$e("update-column-visibility",{field:e.field,hidden:e.hidden})})(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])):_("",!0)])),_:2},1024)))),128)),"asset"==a.$props.index?(i(),y(d(D),{key:0},{default:p((()=>[c("span",P,m(d(X)("asset.Chart")),1),r(d(I),{size:"small",modelValue:Fe.value,"onUpdate:modelValue":l[3]||(l[3]=e=>Fe.value=e),"active-value":!1,"inactive-value":!0,onChange:l[4]||(l[4]=e=>a.changeStatisticsHidden(Fe.value))},null,8,["modelValue"])])),_:1})):_("",!0),r(d(D),{divided:""},{default:p((()=>[r(d(u),{style:{width:"100%"},type:"primary",onClick:Te},{default:p((()=>[v("Save")])),_:1})])),_:1})])),_:1})])),default:p((()=>[c("div",q,[r(d(x),{icon:"ant-design:setting-outlined",class:"cursor-pointer"})])])),_:1})])),_:1}),r(d(S),{span:2,xs:2,sm:2,md:2},{default:p((()=>["SensitiveResult"==a.index?(i(),y(d(u),{key:0,type:"success",onClick:a.$props.openAggregation,icon:d(ue)},{default:p((()=>[v(m(d(X)("project.aggregation")),1)])),_:1},8,["onClick","icon"])):_("",!0)])),_:1})])),_:1}),r(d(C),{style:{"margin-top":"10px"}},{default:p((()=>[r(d(S),{span:24},{default:p((()=>[c("div",M,[(i(!0),n(g,null,h(He.value,(e=>(i(),y(d(E),{key:e,closable:"","disable-transitions":!1,type:"info",size:"small",onClose:a=>function(e){G.handleClose&&G.handleClose(e)}(e)},{default:p((()=>[v(m(e),1)])),_:2},1032,["onClose"])))),128))])])),_:1})])),_:1})])),_:1}),r(d(A),{modelValue:te.value,"onUpdate:modelValue":l[5]||(l[5]=e=>te.value=e),title:d(X)("common.querysyntax"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[r(d(C),null,{default:p((()=>[r(d(S),null,{default:p((()=>[r(d($),{tag:"b",size:"small"},{default:p((()=>[v(m(d(X)("searchHelp.operator")),1)])),_:1}),r(d(F),{direction:"vertical"}),r(d($),{size:"small",type:"danger"},{default:p((()=>[v(m(d(X)("searchHelp.notice")),1)])),_:1})])),_:1}),r(d(S),{style:{"margin-top":"10px"}},{default:p((()=>[r(d(H),{headerCellStyle:se,data:d(le)},{default:p((()=>[r(d(V),{prop:"operator",label:d(X)("searchHelp.operator"),width:"300"},null,8,["label"]),r(d(V),{prop:"meaning",label:d(X)("searchHelp.meaning")},null,8,["label"])])),_:1},8,["data"])])),_:1}),r(d(S),{style:{"margin-top":"15px"}},{default:p((()=>[r(d($),{tag:"b",size:"small"},{default:p((()=>[v(m(d(X)("searchHelp.keywords")),1)])),_:1})])),_:1}),r(d(S),{style:{"margin-top":"10px"}},{default:p((()=>[r(d(H),{headerCellStyle:se,data:Q},{default:p((()=>[r(d(V),{prop:"keyword",label:d(X)("searchHelp.keywords")},null,8,["label"]),r(d(V),{prop:"example",label:d(X)("searchHelp.example")},null,8,["label"]),r(d(V),{prop:"explain",label:d(X)("searchHelp.explain")},null,8,["label"])])),_:1},8,["data"])])),_:1})])),_:1})])),_:1},8,["modelValue","title"]),r(d(A),{modelValue:me.value,"onUpdate:modelValue":l[6]||(l[6]=e=>me.value=e),title:d(X)("asset.export"),center:"","max-height":"300",width:"auto",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[r(W,{index:a.$props.index,searchParams:ie.value},null,8,["index","searchParams"])])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-4c26abd1"]]);export{X as default};
