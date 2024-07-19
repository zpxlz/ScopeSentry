import{d as e,K as t,r as a,s as l,o as i,c as o,e as r,a as s,w as p,N as n,F as m,l as u,_ as d}from"./index-vMt5tOuI.js";import{u as c}from"./useTable-DO6t6Zuf.js";import{E as j}from"./el-card-CiG9T01-.js";import{E as g}from"./el-select-oq3jOrDj.js";import"./el-tag-C3mt1pWb.js";import"./el-popper-CJZHtU_A.js";import{E as x,a as h}from"./el-col-CK66atlO.js";import{_ as b}from"./Table.vue_vue_type_script_lang-kKqRQLK4.js";import{u as f}from"./useCrudSchemas-gxupr6De.js";import{o as v}from"./index-DO8QlVWZ.js";import _ from"./Csearch-DF880vSD.js";import"./useInput-CPyPMgc8.js";import"./index-DMmJY3Ph.js";import"./isEqual-D2Iw95Gj.js";import"./debounce-heHWUU1E.js";import"./el-table-column-Ty7HKRWd.js";import"./el-checkbox-DZAdOJwr.js";import"./isArrayLikeObject-4WqnSTxS.js";import"./raf-RUFdlNuH.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-image-viewer-CkZtWhln.js";import"./tsxHelper-C3yG_Ynk.js";import"./el-dropdown-item-C2usTBce.js";import"./castArray-DsRHGUHq.js";import"./refs-B-F76yq7.js";import"./index-BjDunm1X.js";import"./tree-BfZhwLPs.js";import"./index-znw49gEj.js";import"./ContentWrap.vue_vue_type_script_setup_true_lang-DYamwFJW.js";import"./el-text-JTnFT2W3.js";import"./el-divider-RjUq80nQ.js";import"./el-tree-select-eURulGpf.js";import"./index-eyqQYDWr.js";import"./Dialog.vue_vue_type_style_index_0_lang-BoLcmuNj.js";import"./useIcon-D1gqy2ud.js";import"./exportData.vue_vue_type_script_setup_true_lang-ncKTqQw8.js";import"./el-tab-pane-zqlH3GjE.js";import"./el-form-CrZErb9v.js";import"./el-radio-group-PFBUXVzP.js";import"./el-space-CvMwlCn7.js";const y=d(e({__name:"Subdomain",props:{projectList:{}},setup(e){const{t:d}=u(),y=[{keyword:"ip",example:'ip="192.168.2.1"',explain:d("searchHelp.ip")},{keyword:"domain",example:'domain="example.com"',explain:d("searchHelp.domain")},{keyword:"type",example:'type="CNAME"',explain:d("searchHelp.subdomainType")},{keyword:"value",example:'value="allcdn.example.com"',explain:d("searchHelp.subdoaminValue")},{keyword:"project",example:'project="Hackerone"',explain:d("searchHelp.project")}];t((()=>{E(),window.addEventListener("resize",E)}));const S=a(0),E=()=>{const e=window.innerHeight||document.documentElement.clientHeight;S.value=.7*e},w=a(""),T=e=>{w.value=e,R()},z=l([{field:"selection",type:"selection",minWidth:"55"},{field:"index",label:d("tableDemo.index"),type:"index",minWidth:"30"},{field:"host",label:d("subdomain.subdomainName"),minWidth:"200"},{field:"type",label:d("subdomain.recordType"),minWidth:"200",columnKey:"type",filters:[{text:"A",value:"A"},{text:"NS",value:"NS"},{text:"CNAME",value:"CNAME"},{text:"PTR",value:"PTR"},{text:"TXT",value:"TXT"}]},{field:"value",label:d("subdomain.recordValue"),minWidth:"250",formatter:(e,t,a)=>{let l="";return a.forEach(((e,t)=>{l+=`${e}\r\n`})),l}},{field:"ip",label:"IP",minWidth:"150",formatter:(e,t,a)=>{let l="";return a.forEach(((e,t)=>{l+=`${e}\r\n`})),l}},{field:"time",label:d("asset.time"),minWidth:"200"}]),{allSchemas:C}=f(z),{tableRegister:P,tableState:k,tableMethods:A}=c({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=k,a=await v(w.value,e.value,t.value,M);return{list:a.data.list,total:a.data.total}},immediate:!0}),{loading:L,dataList:N,total:H,currentPage:W,pageSize:I}=k,{getList:R,getElTableExpose:U}=A;function D(){return{background:"var(--el-fill-color-light)"}}const M=l({}),F=async e=>{Object.assign(M,e),R()},K=(e,t)=>{Object.assign(M,t),w.value=e,R()};return(e,t)=>(i(),o(m,null,[r(_,{getList:s(R),handleSearch:T,searchKeywordsData:y,index:"subdomain",getElTableExpose:s(U),projectList:e.$props.projectList,handleFilterSearch:K},null,8,["getList","getElTableExpose","projectList"]),r(s(h),null,{default:p((()=>[r(s(x),null,{default:p((()=>[r(s(j),{style:{height:"min-content"}},{default:p((()=>[r(s(b),{pageSize:s(I),"onUpdate:pageSize":t[0]||(t[0]=e=>n(I)?I.value=e:null),currentPage:s(W),"onUpdate:currentPage":t[1]||(t[1]=e=>n(W)?W.value=e:null),columns:s(C).tableColumns,data:s(N),stripe:"","max-height":S.value,border:!0,loading:s(L),resizable:!0,onRegister:s(P),onFilterChange:F,headerCellStyle:D,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),r(s(x),{":span":24},{default:p((()=>[r(s(j),null,{default:p((()=>[r(s(g),{pageSize:s(I),"onUpdate:pageSize":t[2]||(t[2]=e=>n(I)?I.value=e:null),currentPage:s(W),"onUpdate:currentPage":t[3]||(t[3]=e=>n(W)?W.value=e:null),"page-sizes":[10,20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:s(H)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1})],64))}}),[["__scopeId","data-v-23d0c242"]]);export{y as default};
