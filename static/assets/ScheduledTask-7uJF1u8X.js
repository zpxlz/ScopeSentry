import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DYamwFJW.js";import{d as t,r as a,s as l,e as o,P as s,H as i,F as n,K as r,o as d,i as u,w as p,a as c,y as m,t as f,L as g,M as v,f as _,N as y,O as h,l as b,Q as j}from"./index-vMt5tOuI.js";import{E as x,a as k}from"./el-col-CK66atlO.js";import{E as w}from"./el-text-JTnFT2W3.js";import{a as S,E as V}from"./el-tab-pane-zqlH3GjE.js";import{E as P,a as E}from"./el-form-CrZErb9v.js";import{E as N}from"./el-input-number-CYT48m1q.js";import"./el-tag-C3mt1pWb.js";import{E as T}from"./el-popper-CJZHtU_A.js";import{E as I}from"./el-select-v2-iqUJrQ5P.js";import{E as C}from"./el-checkbox-DZAdOJwr.js";import"./el-tooltip-l0sNRNKZ.js";import{E as A}from"./el-switch-GToX5HcV.js";import{_ as U}from"./Table.vue_vue_type_script_lang-kKqRQLK4.js";import{u as L}from"./useTable-DO6t6Zuf.js";import{u as z}from"./useIcon-D1gqy2ud.js";import{a as D,s as M,b as W,u as R}from"./index-DQ6e6cIg.js";import{_ as F}from"./Dialog.vue_vue_type_style_index_0_lang-BoLcmuNj.js";import{_ as H}from"./AddTask.vue_vue_type_script_setup_true_lang-DQdvBit1.js";import{_ as O}from"./AddProject.vue_vue_type_script_setup_true_lang-2JPxvtWN.js";import{_ as q}from"./PageMonit.vue_vue_type_script_setup_true_lang-T7H_a8wL.js";import{a as B}from"./index-CcdpSLmp.js";import{_ as J}from"./ProgressInfo.vue_vue_type_script_setup_true_lang-CWZ81F6-.js";import"./el-card-CiG9T01-.js";import"./useInput-CPyPMgc8.js";import"./index-DMmJY3Ph.js";import"./isEqual-D2Iw95Gj.js";import"./debounce-heHWUU1E.js";import"./castArray-DsRHGUHq.js";import"./raf-RUFdlNuH.js";import"./el-table-column-Ty7HKRWd.js";import"./isArrayLikeObject-4WqnSTxS.js";import"./el-select-oq3jOrDj.js";import"./el-image-viewer-CkZtWhln.js";import"./tsxHelper-C3yG_Ynk.js";import"./el-dropdown-item-C2usTBce.js";import"./refs-B-F76yq7.js";import"./index-BjDunm1X.js";import"./index-znw49gEj.js";/* empty css                          */import"./el-divider-RjUq80nQ.js";import"./el-radio-group-PFBUXVzP.js";import"./index-Cei3qRzy.js";import"./index-CuGi13yK.js";import"./index-DY_7WVuJ.js";const K={class:"mb-10px"},Q={style:{position:"relative",top:"12px"}};function X(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!h(e)}const Y=t({__name:"ScheduledTask",setup(t){const h=z({icon:"iconoir:search"}),{t:Y}=b(),Z=a(""),G=()=>{fe()},$=l([{field:"selection",type:"selection",width:"55"},{field:"name",label:Y("task.taskName"),minWidth:30},{field:"cycle",label:Y("task.taskCycle")+"(h)",minWidth:20},{field:"type",label:Y("task.typeTask"),minWidth:20},{field:"lastTime",label:Y("task.lastTime"),minWidth:40,formatter:(e,t,a)=>""==a?"-":a},{field:"nextTime",label:Y("task.nextTime"),minWidth:40,formatter:(e,t,a)=>""==a||0==e.state?"-":a},{field:"state",label:Y("common.state"),minWidth:20,formatter:(e,t,a)=>{if(null==a)return o("div",null,null);let l="",i="";return 1==a?(l="#2eb98a",i=Y("common.on")):(l="red",i=Y("common.statusStop")),o(k,{gutter:20},{default:()=>[o(x,{span:1},{default:()=>[o(s,{icon:"clarity:circle-solid",color:l},null)]}),o(x,{span:5},{default:()=>[o(w,{type:"info"},X(i)?i:{default:()=>[i]})]})]})}},{field:"action",label:Y("tableDemo.action"),minWidth:40,formatter:(e,t,a)=>{let l,s,r,d,u="";return u="Scan"==e.type?"scan":"project",o(n,null,["page_monitoring"===e.id?o(i,{type:"success",onClick:()=>Me(e)},X(l=Y("common.edit"))?l:{default:()=>[l]}):o(n,null,[o(i,{type:"success",onClick:()=>we(e)},X(s=Y("common.edit"))?s:{default:()=>[s]}),o(i,{type:"danger",onClick:()=>Ve(e)},X(r=Y("common.delete"))?r:{default:()=>[r]}),o(i,{type:"primary",onClick:()=>oe(e.id,u,e.runner_id)},X(d=Y("task.taskProgress"))?d:{default:()=>[d]})])])}}]),ee=a(!1);let te="",ae="",le="";const oe=async(e,t,a)=>{te=e,ae=t,le=a,ee.value=!0},se=()=>{ee.value=!1},{tableRegister:ie,tableState:ne,tableMethods:re}=L({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=ne,a=await W(Z.value,e.value,t.value);return{list:a.data.list,total:a.data.total}},immediate:!1}),{loading:de,dataList:ue,total:pe,currentPage:ce,pageSize:me}=ne;me.value=20;const{getList:fe,getElTableExpose:ge}=re;function ve(){return{background:"var(--el-fill-color-light)"}}const _e=a(!1);let ye=Y("task.addTask");const he=()=>{_e.value=!1};let be=l({name:"",target:"",node:[],subdomainScan:!0,duplicates:"",subdomainConfig:[],urlScan:!0,sensitiveInfoScan:!0,pageMonitoring:"JS",crawlerScan:!0,vulScan:!1,vulList:[],portScan:!1,ports:"",dirScan:!0,waybackurl:!0,scheduledTasks:!0,hour:24,allNode:!1}),je="",xe="",ke=a(!0);const we=async e=>{if("Scan"==e.type){xe=e.id;const t=await D(e.id);if(200===t.code){const e=t.data;be.name=e.name,be.target=e.target,be.node=e.node,be.subdomainScan=e.subdomainScan,be.subdomainConfig=e.subdomainConfig,be.urlScan=e.urlScan,be.sensitiveInfoScan=e.sensitiveInfoScan,be.pageMonitoring=e.pageMonitoring,be.crawlerScan=e.crawlerScan,be.vulScan=e.vulScan,be.vulList=e.vulList,be.portScan=e.portScan,be.ports=e.ports,be.dirScan=e.dirScan,be.waybackurl=e.waybackurl,be.scheduledTasks=e.scheduledTasks,be.hour=e.hour,be.allNode=e.allNode,be.duplicates=e.duplicates,_e.value=!0}}else je=e.id,Ae.value=!0;ye=Y("common.edit")},Se=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await Te()},Ve=async e=>{window.confirm("Are you sure you want to delete the selected data?")&&await Ee(e)},Pe=a(!1),Ee=async e=>{Pe.value=!0;try{await M([e.id]);Pe.value=!1,fe()}catch(t){Pe.value=!1,fe()}},Ne=a([]),Te=async()=>{const e=await ge(),t=(null==e?void 0:e.getSelectionRows())||[];Ne.value=t.map((e=>e.id)),Pe.value=!0;try{await M(Ne.value);Pe.value=!1,fe()}catch(a){Pe.value=!1,fe()}};r((()=>{Ce(),window.addEventListener("resize",Ce)}));const Ie=a(0),Ce=()=>{const e=window.innerHeight||document.documentElement.clientHeight;Ie.value=.75*e},Ae=a(!1),Ue=()=>{Ae.value=!1},Le=a(!1),ze=a(!1),De=l({hour:24,allNode:!0,node:[],state:!0}),Me=async e=>{De.hour=e.cycle,De.allNode=e.allNode,De.node=e.node,De.state=e.state,Le.value=!0},We=l([]),Re=a(!1),Fe=a(!1),He=e=>{Re.value=!1,e?(De.allNode=!0,De.node=[],We.forEach((e=>De.node.push(e.value)))):(De.allNode=!1,De.node=[])};return(async()=>{const e=await B();e.data.list.length>0?(Fe.value=!1,e.data.list.forEach((e=>{We.push({value:e,label:e})}))):(Fe.value=!0,j.warning(Y("node.onlineNodeMsg")))})(),(t,a)=>(d(),u(c(e),null,{default:p((()=>[o(c(k),null,{default:p((()=>[o(c(x),{span:1},{default:p((()=>[o(c(w),{class:"mx-1",style:{position:"relative",top:"8px"}},{default:p((()=>[m(f(c(Y)("task.taskName"))+":",1)])),_:1})])),_:1}),o(c(x),{span:5},{default:p((()=>[o(c(g),{modelValue:Z.value,"onUpdate:modelValue":a[0]||(a[0]=e=>Z.value=e),placeholder:c(Y)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(c(x),{span:5,style:{position:"relative",left:"16px"}},{default:p((()=>[o(c(v),{type:"primary",icon:c(h),style:{height:"100%"},onClick:G},{default:p((()=>[m("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(c(k),null,{default:p((()=>[o(c(x),{style:{position:"relative",top:"16px"}},{default:p((()=>[_("div",K,[o(c(i),{type:"danger",loading:Pe.value,onClick:Se},{default:p((()=>[m(f(c(Y)("task.delTask")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),_("div",Q,[o(c(U),{"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0},pageSize:c(me),"onUpdate:pageSize":a[1]||(a[1]=e=>y(me)?me.value=e:null),currentPage:c(ce),"onUpdate:currentPage":a[2]||(a[2]=e=>y(ce)?ce.value=e:null),columns:$,data:c(ue),stripe:"",border:!0,loading:c(de),"max-height":Ie.value,resizable:!0,pagination:{total:c(pe),pageSizes:[20,30,50,100,200,500,1e3]},onRegister:c(ie),headerCellStyle:ve,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","max-height","pagination","onRegister"])]),o(c(F),{modelValue:_e.value,"onUpdate:modelValue":a[3]||(a[3]=e=>_e.value=e),title:c(ye),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[o(H,{closeDialog:he,getList:c(fe),vTaskForm:c(be),create:c(ke),taskid:c(xe),schedule:!0},null,8,["getList","vTaskForm","create","taskid"])])),_:1},8,["modelValue","title"]),o(c(F),{modelValue:Ae.value,"onUpdate:modelValue":a[4]||(a[4]=e=>Ae.value=e),title:c(Y)("common.edit"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[o(O,{closeDialog:Ue,projectid:c(je),getProjectData:c(fe),schedule:!1},null,8,["projectid","getProjectData"])])),_:1},8,["modelValue","title"]),o(c(F),{modelValue:Le.value,"onUpdate:modelValue":a[10]||(a[10]=e=>Le.value=e),title:c(Y)("common.edit"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[o(c(S),{type:"card"},{default:p((()=>[o(c(V),{label:c(Y)("router.configuration")},{default:p((()=>[o(c(P),{model:De,"label-width":"100px","status-icon":"",ref:"ruleFormRef"},{default:p((()=>[o(c(T),{content:c(Y)("task.selectNodeMsg"),placement:"top"},{default:p((()=>[o(c(E),{label:c(Y)("task.nodeSelect"),prop:"node"},{default:p((()=>[o(c(I),{modelValue:De.node,"onUpdate:modelValue":a[6]||(a[6]=e=>De.node=e),filterable:"",options:We,placeholder:"Please select node",style:{width:"80%"},multiple:"","tag-type":"success","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":7},{header:p((()=>[o(c(C),{modelValue:De.allNode,"onUpdate:modelValue":a[5]||(a[5]=e=>De.allNode=e),disabled:Fe.value,indeterminate:Re.value,onChange:He},{default:p((()=>[m(" All ")])),_:1},8,["modelValue","disabled","indeterminate"])])),_:1},8,["modelValue","options"])])),_:1},8,["label"])])),_:1},8,["content"]),o(c(E),{label:c(Y)("project.cycle"),prop:"type"},{default:p((()=>[o(c(N),{modelValue:De.hour,"onUpdate:modelValue":a[7]||(a[7]=e=>De.hour=e),min:1,"controls-position":"right",size:"small"},null,8,["modelValue"]),o(c(w),{style:{position:"relative",left:"16px"}},{default:p((()=>[m("Hour")])),_:1})])),_:1},8,["label"]),o(c(E),{label:c(Y)("common.state")},{default:p((()=>[o(c(A),{modelValue:De.state,"onUpdate:modelValue":a[8]||(a[8]=e=>De.state=e),"inline-prompt":"","active-text":c(Y)("common.switchAction"),"inactive-text":c(Y)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),o(c(k),null,{default:p((()=>[o(c(x),{span:2,offset:8},{default:p((()=>[o(c(E),null,{default:p((()=>[o(c(v),{type:"primary",onClick:a[9]||(a[9]=e=>(async()=>{ze.value=!0,await R(De.hour,De.node,De.allNode,De.state),ze.value=!1,fe()})()),loading:ze.value},{default:p((()=>[m(f(c(Y)("task.save")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["label"]),o(c(V),{label:c(Y)("task.data")},{default:p((()=>[o(q)])),_:1},8,["label"])])),_:1})])),_:1},8,["modelValue","title"]),o(c(F),{modelValue:ee.value,"onUpdate:modelValue":a[11]||(a[11]=e=>ee.value=e),title:c(Y)("task.taskProgress"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},width:"70%","max-height":"700"},{default:p((()=>[o(J,{closeDialog:se,getProgressInfoID:c(te),getProgressInfotype:c(ae),getProgressInforunnerid:c(le)},null,8,["getProgressInfoID","getProgressInfotype","getProgressInforunnerid"])])),_:1},8,["modelValue","title"])])),_:1}))}});export{Y as default};
