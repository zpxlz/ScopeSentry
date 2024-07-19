import{_ as e}from"./Table.vue_vue_type_script_lang-kKqRQLK4.js";import{W as a,c8 as t,a0 as l,bk as s,X as o,d as r,a4 as i,r as n,a5 as u,a1 as c,b4 as d,R as p,o as m,c as g,aE as v,a as y,i as f,w as _,aF as j,aa as b,A as h,n as x,a6 as S,ae as k,u as w,y as V,t as z,j as A,e as D,f as R,F as E,l as P,J as C,v as L}from"./index-vMt5tOuI.js";import{E as U,b as B,a as F}from"./el-dropdown-item-C2usTBce.js";import"./el-popper-CJZHtU_A.js";import{E as N}from"./el-select-oq3jOrDj.js";import"./el-tag-C3mt1pWb.js";import{E as T,a as J}from"./el-checkbox-DZAdOJwr.js";import{E as $}from"./el-switch-GToX5HcV.js";/* empty css                          */import{_ as q}from"./Dialog.vue_vue_type_style_index_0_lang-BoLcmuNj.js";import{d as I}from"./index-DY_7WVuJ.js";import{_ as O}from"./AddProject.vue_vue_type_script_setup_true_lang-2JPxvtWN.js";import{u as X}from"./useIcon-D1gqy2ud.js";const W=a({size:{type:[Number,String],values:t,default:"",validator:e=>l(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:s},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:o(String),default:"cover"}}),G={error:e=>e instanceof Event},H=["src","alt","srcset"],K=r({name:"ElAvatar"});const M=k(S(r({...K,props:W,emits:G,setup(e,{emit:a}){const t=e,s=i("avatar"),o=n(!1),r=u((()=>{const{size:e,icon:a,shape:l}=t,o=[s.b()];return c(e)&&o.push(s.m(e)),a&&o.push(s.m("icon")),l&&o.push(s.m(l)),o})),S=u((()=>{const{size:e}=t;return l(e)?s.cssVarBlock({size:d(e)||""}):void 0})),k=u((()=>({objectFit:t.fit})));function w(e){o.value=!0,a("error",e)}return p((()=>t.src),(()=>o.value=!1)),(e,a)=>(m(),g("span",{class:x(y(r)),style:v(y(S))},[!e.src&&!e.srcSet||o.value?e.icon?(m(),f(y(b),{key:1},{default:_((()=>[(m(),f(j(e.icon)))])),_:1})):h(e.$slots,"default",{key:2}):(m(),g("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:v(y(k)),onError:w},null,44,H))],6))}}),[["__file","avatar.vue"]])),Q={class:"flex cursor-pointer"},Y={class:"pr-16px"},Z={class:"name"},ee={class:"assets-info"},ae=r({__name:"ProjectList",props:{tableDataList:{type:Array,default:()=>[]},getProjectTag:{type:Function,required:!0},total:{type:Number,default:0},multipleSelection:{type:Boolean},selectedRows:{type:Array,default:()=>[]}},emits:["update:selectedRows"],setup(a,{emit:t}){const{t:l}=P(),{push:s}=w(),o=a,r=n(!1);let i="";const u=n(!1),c=()=>{u.value=!1},d=X({icon:"uil:edit"}),v=X({icon:"material-symbols:delete-outline"}),j=X({icon:"carbon:data-vis-1"}),b=e=>{"edit"==e.type?(async e=>{i=e,u.value=!0})(e.id):"del"==e.type?(e=>{const a=n(!1);C({title:"Delete",draggable:!0,message:()=>L("div",{style:{display:"flex",alignItems:"center"}},[L("p",{style:{margin:"0 10px 0 0"}},l("task.delAsset")),L($,{modelValue:a.value,"onUpdate:modelValue":e=>{a.value=e}})])}).then((async()=>{await I([e],a.value)}))})(e.id):le(e.id)},h=()=>{o.getProjectTag(x.value,S.value)},x=n(1),S=n(50),k=n(!1),W=n(!1),G=n(!1),H=t,K=n([...o.selectedRows]);p(K,(e=>{JSON.stringify(e)!==JSON.stringify(o.selectedRows)&&H("update:selectedRows",e),ae.value=e.length===o.tableDataList.length})),p((()=>o.selectedRows),(e=>{K.value=[...e]})),p((()=>o.tableDataList),(e=>{ae.value=K.value.length===e.length}));const ae=n(!1),te=()=>{ae.value?K.value=o.tableDataList.map((e=>e.id)):K.value=[]},le=e=>{s(`/project-management/project-detail?id=${e}`)};return(t,s)=>(m(),g(E,null,[a.multipleSelection?(m(),f(y(T),{key:0,modelValue:ae.value,"onUpdate:modelValue":s[0]||(s[0]=e=>ae.value=e),onChange:te},{default:_((()=>[V(z(y(l)("common.selectAll")),1)])),_:1},8,["modelValue"])):A("",!0),D(y(J),{modelValue:K.value,"onUpdate:modelValue":s[1]||(s[1]=e=>K.value=e)},{default:_((()=>[D(y(e),{columns:[],data:a.tableDataList,loading:r.value,"custom-content":"","card-wrap-style":{width:"210px",marginBottom:"20px",marginRight:"20px"}},{content:_((e=>[D(y(U),{trigger:"contextmenu",onCommand:b},{dropdown:_((()=>[D(y(B),null,{default:_((()=>[D(y(F),{icon:y(d),command:{type:"edit",id:e.id}},{default:_((()=>[V(z(y(l)("common.edit")),1)])),_:2},1032,["icon","command"]),D(y(F),{icon:y(v),command:{type:"del",id:e.id}},{default:_((()=>[V(z(y(l)("common.delete")),1)])),_:2},1032,["icon","command"]),D(y(F),{icon:y(j),command:{type:"aggregation",id:e.id}},{default:_((()=>[V(z(y(l)("project.aggregation")),1)])),_:2},1032,["icon","command"])])),_:2},1024)])),default:_((()=>[R("div",Q,[a.multipleSelection?(m(),f(y(T),{key:0,value:e.id,class:"pr-16px"},null,8,["value"])):A("",!0),R("div",Y,[""!=e.logo?(m(),f(y(M),{key:0,src:e.logo,class:"avatar",fit:"cover"},null,8,["src"])):(m(),f(y(M),{key:1,class:"avatar avatar-placeholder"},{default:_((()=>[V(z(e.name.charAt(0)),1)])),_:2},1024))]),R("div",null,[R("div",Z,z(e.name),1),R("div",ee,z(y(l)("project.totalAssets"))+" : "+z(e.AssetCount),1)])])])),_:2},1024)])),_:1},8,["data","loading"])])),_:1},8,["modelValue"]),D(y(N),{"current-page":x.value,"onUpdate:currentPage":s[2]||(s[2]=e=>x.value=e),"page-size":S.value,"onUpdate:pageSize":s[3]||(s[3]=e=>S.value=e),"page-sizes":[50,70,100,200,400],small:k.value,disabled:G.value,background:W.value,layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:h,onCurrentChange:h},null,8,["current-page","page-size","small","disabled","background","total"]),D(y(q),{modelValue:u.value,"onUpdate:modelValue":s[4]||(s[4]=e=>u.value=e),title:y(l)("common.edit"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:_((()=>[D(O,{closeDialog:c,projectid:y(i),getProjectData:t.$props.getProjectTag,schedule:!1},null,8,["projectid","getProjectData"])])),_:1},8,["modelValue","title"])],64))}});export{ae as _};
