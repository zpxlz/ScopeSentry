import{d as e,dF as a,r as l,s as t,o as s,i as o,w as i,e as r,a as u,L as n,M as d,y as m,t as v,l as p}from"./index-vMt5tOuI.js";import{a as c,E as g}from"./el-form-CrZErb9v.js";import{E as f,a as b}from"./el-col-CK66atlO.js";import{E as y}from"./el-divider-RjUq80nQ.js";import"./el-tag-C3mt1pWb.js";import"./el-popper-CJZHtU_A.js";import{E as _}from"./el-select-v2-iqUJrQ5P.js";import{E as V}from"./el-switch-GToX5HcV.js";import{r as h}from"./index-znw49gEj.js";const w=(e,a,l)=>h.post({url:"/api/sensitive/data",data:{search:e,pageIndex:a,pageSize:l}}),j=e=>h.post({url:"/api/sensitive/delete",data:{ids:e}}),I=(e,a)=>h.post({url:"/api/sensitive/update/state",data:{ids:e,state:a}}),x=e({__name:"Detail",props:{closeDialog:{type:Function},getList:{type:Function},sensitiveForm:{}},setup(e){const{t:w}=p(),j=e,{sensitiveForm:I}=a(j),x=l({...I.value}),k=t({name:[{required:!0,message:w("sensitiveInformation.sensitiveNameMsg"),trigger:"blur"}],regular:[{required:!0,message:w("sensitiveInformation.sensitiveRegularMsg"),trigger:"blur"}]}),E=[{value:"null",label:"null"},{value:"green",label:"green"},{value:"red",label:"red"},{value:"cyan",label:"cyan"},{value:"yellow",label:"yellow"},{value:"orange",label:"orange"},{value:"gray",label:"gray"},{value:"pink",label:"pink"}],F=l(!1),M=l(),R=async e=>{F.value=!0,e&&await e.validate((async(e,a)=>{if(e){let e;e=""!=x.value.id?await(l=x.value.id,t=x.value.name,s=x.value.regular,o=x.value.color,i=x.value.state,h.post({url:"/api/sensitive/update",data:{id:l,name:t,regular:s,color:o,state:i}})):await((e,a,l,t)=>h.post({url:"/api/sensitive/add",data:{name:e,regular:a,color:l,state:t}}))(x.value.name,x.value.regular,x.value.color,x.value.state),200===e.code&&(j.getList(),j.closeDialog()),F.value=!1}else F.value=!1;var l,t,s,o,i}))};return(e,a)=>(s(),o(u(g),{model:x.value,"label-width":"auto",rules:k,"status-icon":"",ref_key:"ruleFormRef",ref:M},{default:i((()=>[r(u(c),{label:u(w)("sensitiveInformation.sensitiveName"),prop:"name"},{default:i((()=>[r(u(n),{modelValue:x.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>x.value.name=e),placeholder:u(w)("sensitiveInformation.sensitiveNameMsg")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),r(u(c),{label:u(w)("sensitiveInformation.sensitiveRegular"),prop:"regular"},{default:i((()=>[r(u(n),{modelValue:x.value.regular,"onUpdate:modelValue":a[1]||(a[1]=e=>x.value.regular=e),placeholder:u(w)("sensitiveInformation.sensitiveRegularMsg")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),r(u(c),{label:u(w)("sensitiveInformation.sensitiveColor")},{default:i((()=>[r(u(_),{modelValue:x.value.color,"onUpdate:modelValue":a[2]||(a[2]=e=>x.value.color=e),placeholder:"Please select color",options:E},null,8,["modelValue"])])),_:1},8,["label"]),r(u(c),{label:u(w)("common.state")},{default:i((()=>[r(u(V),{modelValue:x.value.state,"onUpdate:modelValue":a[3]||(a[3]=e=>x.value.state=e),"inline-prompt":"","active-text":u(w)("common.switchAction"),"inactive-text":u(w)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),r(u(y)),r(u(b),null,{default:i((()=>[r(u(f),{span:2,offset:8},{default:i((()=>[r(u(c),null,{default:i((()=>[r(u(d),{type:"primary",onClick:a[4]||(a[4]=e=>R(M.value)),loading:F.value},{default:i((()=>[m(v(u(w)("task.save")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"]))}});export{x as _,j as d,w as g,I as u};
