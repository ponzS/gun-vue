import{q as g}from"./components.uLkgiBox.js";import{ah as u,o as n,c as r,j as t,F as m,C as x,t as d}from"./framework.BhkIoD7n.js";import"./theme.CY_Hf4tR.js";const h={class:"flex flex-col gap-2 p-2"},k={class:"p-2 flex flex-wrap gap-2 bg-light-100 dark-bg-dark-400 rounded cursor-pointer max-w-90 overflow-scroll"},b={class:"p-0 text-xs bg-light-400 dark-bg-dark-800 select-none opacity-80"},_={class:"font-mono p-0 text-lg"},B={__name:"FileHash",setup(w){const i=u({});function c(l){var s;const e=(s=l==null?void 0:l.target)==null?void 0:s.files;for(const a of e){console.log(a);const o=new FileReader;o.readAsDataURL(a),o.onloadend=async()=>{const f=o.result,p=await g(f);i[p]={name:a.name}}}}return(l,e)=>(n(),r("div",h,[t("label",k,[e[1]||(e[1]=t("div",{class:"font-bold"},"Check file hash",-1)),e[2]||(e[2]=t("div",{class:"flex-1"},null,-1)),t("input",{type:"file",onChange:e[0]||(e[0]=s=>c(s))},null,32)]),(n(!0),r(m,null,x(i,(s,a)=>(n(),r("div",{class:"p-2 flex flex-col break-all bg-light-100 dark-bg-dark-400 shadow",key:a},[t("div",b,d(s.name),1),t("div",_,d(a),1)]))),128))]))}};export{B as default};
