import{d as e,s as a,a5 as t,r as l,o,i as n,w as c,e as i,a as d,L as s,y as u,t as r,j as p,c as m,M as f,l as g,Q as v}from"./index-vMt5tOuI.js";import{E as b,a as h}from"./el-checkbox-DZAdOJwr.js";/* empty css                          */import{E as S}from"./el-divider-RjUq80nQ.js";import{a as k,E as _}from"./el-form-CrZErb9v.js";import{E as V,a as w}from"./el-col-CK66atlO.js";import{E as x}from"./el-switch-GToX5HcV.js";import"./el-tooltip-l0sNRNKZ.js";import{E as y}from"./el-popper-CJZHtU_A.js";import{a as j,E as U}from"./el-radio-group-PFBUXVzP.js";import"./el-tag-C3mt1pWb.js";import{E as M}from"./el-select-v2-iqUJrQ5P.js";import{E as N}from"./el-input-number-CYT48m1q.js";import{E as A}from"./el-text-JTnFT2W3.js";import{b as I,u as P,c as T}from"./index-DY_7WVuJ.js";import{b as E}from"./index-Cei3qRzy.js";import{b as C}from"./index-CuGi13yK.js";import{a as L}from"./index-CcdpSLmp.js";const q={key:1},D=e({__name:"AddProject",props:{closeDialog:{type:Function},projectid:{},getProjectData:{type:Function},schedule:{type:Boolean}},setup(e){const{t:D}=g();let F=a({name:"",tag:"",logo:"",target:"",scheduledTasks:!0,subdomainScan:!0,subdomainConfig:[],urlScan:!0,sensitiveInfoScan:!0,pageMonitoring:"JS",crawlerScan:!0,vulScan:!1,vulList:[],hour:24,waybackurl:!0,portScan:!0,ports:"",dirScan:!1,node:[],allNode:!1,duplicates:""});const J=e,R=t((()=>{const e={name:[{required:!0,message:D("project.msgProject"),trigger:"blur"}],tag:[{required:!0,message:D("project.msgProjectTag"),trigger:"blur"}],target:[{required:!0,message:D("project.msgProjectScope"),trigger:"blur"}],node:[{required:!1,message:D("task.nodeMsg"),trigger:"blur"}]};return F.scheduledTasks&&(e.node=[{required:!0,message:D("task.nodeMsg"),trigger:"blur"}]),e})),z=a([]),B=l(!1),G=l(),H=l(!1);(async()=>{const e=await E();e.data.list.length>0&&(z.push({value:"All Poc",label:"All Poc"}),e.data.list.forEach((e=>{z.push({value:e.id,label:e.name})})))})();const K=l(!1);(async()=>{if(""!=J.projectid){K.value=!0;const e=await T(J.projectid);F.name=e.data.name,F.tag=e.data.tag,F.target=e.data.target,F.logo=e.data.logo,F.scheduledTasks=e.data.scheduledTasks,F.subdomainScan=e.data.subdomainScan,F.subdomainConfig=e.data.subdomainConfig,F.urlScan=e.data.urlScan,F.sensitiveInfoScan=e.data.sensitiveInfoScan,F.pageMonitoring=e.data.pageMonitoring,F.crawlerScan=e.data.crawlerScan,F.vulScan=e.data.vulScan,F.vulList=e.data.vulList,F.hour=e.data.hour,F.portScan=e.data.portScan,F.ports=e.data.ports,F.dirScan=e.data.dirScan,F.allNode=e.data.allNode,F.node=e.data.node,F.duplicates=e.data.duplicates,K.value=!1}})();const O=a([]);(async()=>{const e=await C("",1,1e4);e.data.list.length>0&&e.data.list.forEach((e=>{O.push({value:e.id,label:e.name})}))})();const Q=l(!1),W=l(!1),Y=a([]);(async()=>{const e=await L();e.data.list.length>0?(W.value=!1,e.data.list.forEach((e=>{Y.push({value:e,label:e})}))):(W.value=!0,v.warning(D("node.onlineNodeMsg")))})();const X=e=>{Q.value=!1,e?(F.allNode=!0,F.node=[],Y.forEach((e=>F.node.push(e.value)))):(F.allNode=!1,F.node=[])};return(e,a)=>(o(),n(d(_),{model:d(F),"label-width":"auto",rules:R.value,"status-icon":"",ref_key:"ruleFormRef",ref:G,loading:K.value},{default:c((()=>[i(d(k),{label:d(D)("project.projectName"),prop:"name"},{default:c((()=>[i(d(s),{modelValue:d(F).name,"onUpdate:modelValue":a[0]||(a[0]=e=>d(F).name=e),placeholder:d(D)("project.msgProject")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),i(d(k),{label:"TAG",prop:"tag"},{default:c((()=>[i(d(s),{modelValue:d(F).tag,"onUpdate:modelValue":a[1]||(a[1]=e=>d(F).tag=e),placeholder:d(D)("project.msgProjectTag")},null,8,["modelValue","placeholder"])])),_:1}),i(d(k),{label:d(D)("project.projectScope"),prop:"target"},{default:c((()=>[i(d(s),{modelValue:d(F).target,"onUpdate:modelValue":a[2]||(a[2]=e=>d(F).target=e),placeholder:d(D)("project.msgProjectScope"),type:"textarea",autosize:{minRows:6,maxRows:15}},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),i(d(k),{label:"Logo",prop:"logo"},{default:c((()=>[i(d(s),{modelValue:d(F).logo,"onUpdate:modelValue":a[3]||(a[3]=e=>d(F).logo=e),placeholder:"http(s)://xxxxx.xx"},null,8,["modelValue"])])),_:1}),i(d(S),{"content-position":"center",style:{}},{default:c((()=>[u(r(d(D)("project.scheduledTasks")),1)])),_:1}),i(d(w),null,{default:c((()=>[i(d(V),{span:6},{default:c((()=>[i(d(k),{label:d(D)("project.scheduledTasks")},{default:c((()=>[i(d(y),{effect:"dark",content:d(D)("project.msgScheduledTasks"),placement:"top"},{default:c((()=>[i(d(x),{modelValue:d(F).scheduledTasks,"onUpdate:modelValue":a[4]||(a[4]=e=>d(F).scheduledTasks=e),"inline-prompt":"","active-text":d(D)("common.switchAction"),"inactive-text":d(D)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["content"])])),_:1},8,["label"])])),_:1}),d(F).scheduledTasks?(o(),n(d(V),{key:0,span:12},{default:c((()=>[i(d(k),{label:d(D)("project.cycle"),prop:"type"},{default:c((()=>[i(d(N),{modelValue:d(F).hour,"onUpdate:modelValue":a[5]||(a[5]=e=>d(F).hour=e),min:1,"controls-position":"right",size:"small"},null,8,["modelValue"]),i(d(A),{style:{position:"relative",left:"16px"}},{default:c((()=>[u("Hour")])),_:1})])),_:1},8,["label"])])),_:1})):p("",!0)])),_:1}),i(d(w),null,{default:c((()=>[i(d(V),null,{default:c((()=>[i(d(k),{label:d(D)("configuration.runNowOne")},{default:c((()=>[i(d(x),{modelValue:H.value,"onUpdate:modelValue":a[6]||(a[6]=e=>H.value=e),"inline-prompt":"","active-text":d(D)("common.switchAction"),"inactive-text":d(D)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1})])),_:1}),d(F).scheduledTasks||H.value?(o(),n(d(y),{key:0,content:d(D)("task.selectNodeMsg"),placement:"top"},{default:c((()=>[i(d(k),{label:d(D)("task.nodeSelect"),prop:"node"},{default:c((()=>[i(d(M),{modelValue:d(F).node,"onUpdate:modelValue":a[8]||(a[8]=e=>d(F).node=e),filterable:"",options:Y,placeholder:"Please select node",style:{width:"80%"},multiple:"","tag-type":"success","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":7},{header:c((()=>[i(d(b),{modelValue:d(F).allNode,"onUpdate:modelValue":a[7]||(a[7]=e=>d(F).allNode=e),disabled:W.value,indeterminate:Q.value,onChange:X},{default:c((()=>[u(" All ")])),_:1},8,["modelValue","disabled","indeterminate"])])),_:1},8,["modelValue","options"])])),_:1},8,["label"])])),_:1},8,["content"])):p("",!0),d(F).scheduledTasks||H.value?(o(),m("div",q,[i(d(S),{"content-position":"center",style:{width:"60%",left:"20%"}},{default:c((()=>[u(r(d(D)("task.duplicates")),1)])),_:1}),i(d(w),null,{default:c((()=>[i(d(V),{span:24},{default:c((()=>[i(d(k),{label:d(D)("task.duplicates"),prop:"type"},{default:c((()=>[i(d(j),{modelValue:d(F).duplicates,"onUpdate:modelValue":a[9]||(a[9]=e=>d(F).duplicates=e)},{default:c((()=>[i(d(U),{label:"None",name:"duplicates",checked:!0,value:"None"}),i(d(y),{effect:"dark",content:d(D)("task.duplicatesMsg"),placement:"top"},{default:c((()=>[i(d(U),{label:d(D)("task.duplicatesSubdomain"),name:"duplicates",value:"subdomain"},null,8,["label"])])),_:1},8,["content"]),i(d(y),{effect:"dark",content:d(D)("task.duplicatesPortMsg"),placement:"top"},{default:c((()=>[i(d(U),{label:d(D)("task.duplicatesPort"),name:"duplicates",value:"port"},null,8,["label"])])),_:1},8,["content"])])),_:1},8,["modelValue"])])),_:1},8,["label"])])),_:1})])),_:1}),i(d(S),{"content-position":"center",style:{width:"60%",left:"20%"}},{default:c((()=>[u(r(d(D)("subdomain.subdomainName")),1)])),_:1}),i(d(w),null,{default:c((()=>[i(d(V),{span:6},{default:c((()=>[i(d(k),{label:d(D)("task.subdomainScan")},{default:c((()=>[i(d(x),{modelValue:d(F).subdomainScan,"onUpdate:modelValue":a[10]||(a[10]=e=>d(F).subdomainScan=e),"inline-prompt":"","active-text":d(D)("common.switchAction"),"inactive-text":d(D)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),i(d(V),{span:12},{default:c((()=>[d(F).subdomainScan?(o(),n(d(k),{key:0,label:d(D)("task.config"),prop:"type"},{default:c((()=>[i(d(h),{modelValue:d(F).subdomainConfig,"onUpdate:modelValue":a[11]||(a[11]=e=>d(F).subdomainConfig=e)},{default:c((()=>[i(d(b),{label:"Subfinder",name:"subdomainConfig",checked:!0}),i(d(b),{label:"Ksubdomain",name:"subdomainConfig",checked:!0})])),_:1},8,["modelValue"])])),_:1},8,["label"])):p("",!0)])),_:1})])),_:1}),i(d(S),{"content-position":"center",style:{width:"60%",left:"20%"}},{default:c((()=>[u(r(d(D)("task.portScan")),1)])),_:1}),i(d(w),null,{default:c((()=>[i(d(V),{span:6},{default:c((()=>[i(d(k),{label:d(D)("task.portScan")},{default:c((()=>[i(d(x),{modelValue:d(F).portScan,"onUpdate:modelValue":a[12]||(a[12]=e=>d(F).portScan=e),"inline-prompt":"","active-text":d(D)("common.switchAction"),"inactive-text":d(D)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),i(d(V),{span:12},{default:c((()=>[d(F).portScan?(o(),n(d(k),{key:0,label:d(D)("task.portSelect"),prop:"portScan"},{default:c((()=>[i(d(M),{modelValue:d(F).ports,"onUpdate:modelValue":a[13]||(a[13]=e=>d(F).ports=e),filterable:"",options:O,placeholder:"Please select port",style:{width:"80%"}},null,8,["modelValue","options"])])),_:1},8,["label"])):p("",!0)])),_:1})])),_:1}),i(d(S),{"content-position":"center",style:{width:"60%",left:"20%"}},{default:c((()=>[u(r(d(D)("dirScan.dirScanName")),1)])),_:1}),i(d(k),{label:d(D)("dirScan.dirScanName")},{default:c((()=>[i(d(x),{modelValue:d(F).dirScan,"onUpdate:modelValue":a[14]||(a[14]=e=>d(F).dirScan=e),"inline-prompt":"","active-text":d(D)("common.switchAction"),"inactive-text":d(D)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),i(d(S),{"content-position":"center",style:{width:"60%",left:"20%"}},{default:c((()=>[u(r(d(D)("crawler.crawlerName")),1)])),_:1}),i(d(w),null,{default:c((()=>[i(d(V),{span:6},{default:c((()=>[i(d(y),{effect:"dark",content:d(D)("task.msgUrl"),placement:"top"},{default:c((()=>[i(d(k),{label:d(D)("task.url")},{default:c((()=>[i(d(x),{modelValue:d(F).urlScan,"onUpdate:modelValue":a[15]||(a[15]=e=>d(F).urlScan=e),"inline-prompt":"","active-text":d(D)("common.switchAction"),"inactive-text":d(D)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1},8,["content"])])),_:1}),i(d(V),{span:6},{default:c((()=>[d(F).urlScan?(o(),n(d(k),{key:0,label:d(D)("task.sensitiveInfoScan"),prop:"type"},{default:c((()=>[i(d(x),{modelValue:d(F).sensitiveInfoScan,"onUpdate:modelValue":a[16]||(a[16]=e=>d(F).sensitiveInfoScan=e),"inline-prompt":"","active-text":d(D)("common.switchAction"),"inactive-text":d(D)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])):p("",!0)])),_:1}),i(d(V),{span:6},{default:c((()=>[i(d(y),{effect:"dark",content:d(D)("task.waybackUrlMsg"),placement:"top"},{default:c((()=>[d(F).urlScan?(o(),n(d(k),{key:0,label:"waybackurl",prop:"type"},{default:c((()=>[i(d(x),{modelValue:d(F).waybackurl,"onUpdate:modelValue":a[17]||(a[17]=e=>d(F).waybackurl=e),"inline-prompt":"","active-text":d(D)("common.switchAction"),"inactive-text":d(D)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1})):p("",!0)])),_:1},8,["content"])])),_:1}),i(d(V),{span:12,offset:6},{default:c((()=>[d(F).urlScan?(o(),n(d(k),{key:0,label:d(D)("task.pageMonitoring"),prop:"type"},{default:c((()=>[i(d(j),{modelValue:d(F).pageMonitoring,"onUpdate:modelValue":a[18]||(a[18]=e=>d(F).pageMonitoring=e)},{default:c((()=>[i(d(U),{label:"None",name:"pageMonitoring"}),i(d(y),{effect:"dark",content:d(D)("task.msgPageMonitoringAll"),placement:"top"},{default:c((()=>[i(d(U),{label:"All",name:"pageMonitoring",checked:!0})])),_:1},8,["content"]),i(d(y),{effect:"dark",content:d(D)("task.msgPageMonitoringJs"),placement:"top"},{default:c((()=>[i(d(U),{label:"JS",name:"pageMonitoring"})])),_:1},8,["content"])])),_:1},8,["modelValue"])])),_:1},8,["label"])):p("",!0)])),_:1})])),_:1}),i(d(k),{label:d(D)("crawler.crawlerName"),prop:"type"},{default:c((()=>[i(d(y),{effect:"dark",content:d(D)("task.msgCrawler"),placement:"top"},{default:c((()=>[i(d(x),{modelValue:d(F).crawlerScan,"onUpdate:modelValue":a[19]||(a[19]=e=>d(F).crawlerScan=e),"inline-prompt":"","active-text":d(D)("common.switchAction"),"inactive-text":d(D)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["content"])])),_:1},8,["label"]),i(d(S),{"content-position":"center",style:{width:"60%",left:"20%"}},{default:c((()=>[u(r(d(D)("task.vulScan")),1)])),_:1}),i(d(w),null,{default:c((()=>[i(d(V),{span:6},{default:c((()=>[i(d(k),{label:d(D)("task.vulScan")},{default:c((()=>[i(d(x),{modelValue:d(F).vulScan,"onUpdate:modelValue":a[20]||(a[20]=e=>d(F).vulScan=e),"inline-prompt":"","active-text":d(D)("common.switchAction"),"inactive-text":d(D)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),i(d(V),{span:18},{default:c((()=>[d(F).vulScan?(o(),n(d(k),{key:0,label:d(D)("task.vulList"),prop:"type"},{default:c((()=>[i(d(M),{modelValue:d(F).vulList,"onUpdate:modelValue":a[21]||(a[21]=e=>d(F).vulList=e),filterable:"",options:z,placeholder:"Please select vul",style:{width:"80%"},multiple:"","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":3},null,8,["modelValue","options"])])),_:1},8,["label"])):p("",!0)])),_:1})])),_:1})])):p("",!0),i(d(S)),i(d(w),null,{default:c((()=>[i(d(V),{span:2,offset:12},{default:c((()=>[i(d(k),null,{default:c((()=>[i(d(f),{type:"primary",onClick:a[22]||(a[22]=e=>(async e=>{B.value=!0,e&&(await e.validate((async(e,a)=>{e?""==J.projectid?(200===(await I(H.value,F.name,F.tag,F.target,F.logo,F.scheduledTasks,F.subdomainScan,F.subdomainConfig,F.urlScan,F.sensitiveInfoScan,F.pageMonitoring,F.crawlerScan,F.vulScan,F.vulList,F.hour,F.portScan,F.ports,F.dirScan,F.allNode,F.node,F.waybackurl,F.duplicates)).code&&J.closeDialog(),B.value=!1):(200===(await P(H.value,J.projectid,F.name,F.tag,F.target,F.logo,F.scheduledTasks,F.subdomainScan,F.subdomainConfig,F.urlScan,F.sensitiveInfoScan,F.pageMonitoring,F.crawlerScan,F.vulScan,F.vulList,F.hour,F.portScan,F.ports,F.dirScan,F.allNode,F.node,F.waybackurl,F.duplicates)).code&&J.closeDialog(),B.value=!1):B.value=!1})),J.getProjectData(1,50))})(G.value)),loading:B.value},{default:c((()=>[u(r(d(D)("task.save")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules","loading"]))}});export{D as _};
