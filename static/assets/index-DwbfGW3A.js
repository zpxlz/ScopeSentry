import{r as a}from"./index-znw49gEj.js";const t=t=>a.post({url:"/api/project_aggregation/project/info",data:{id:t}}),r=t=>a.post({url:"/api/project_aggregation/project/asset/count",data:{id:t}}),o=t=>a.post({url:"/api/project_aggregation/project/vul/statistics",data:{id:t}}),e=t=>a.post({url:"/api/project_aggregation/project/vul/data",data:{id:t}}),p=(t,r,o)=>a.post({url:"/api/project_aggregation/project/subdomain/data",data:{search:t,filter:r,fq:o}}),i=(t,r,o)=>a.post({url:"/api/project_aggregation/project/port/data",data:{search:t,filter:r,fq:o}}),s=(t,r,o)=>a.post({url:"/api/project_aggregation/project/service/data",data:{search:t,filter:r,fq:o}});export{r as a,o as b,e as c,p as d,i as e,s as f,t as g};
