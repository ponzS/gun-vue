import{_ as h,c as i,o,j as t,t as p,k as e,a0 as k,n as v,F as x,B as g,b,e as C,N as y}from"./framework.DRT7JCoy.js";import{o as w,a4 as D,Z as $,a5 as B,$ as a,a3 as F}from"./components.CRAO-38e.js";import"./theme.BYJwSh06.js";const z={class:"flex items-center rounded-lg capitalize mb-4"},N={class:"text-2xl font-bold"},S={class:"flex flex-wrap gap-2"},W={__name:"DictWordPage",props:{hash:{type:String,default:""}},emits:["def","close"],setup(l){const d=l,f=w("light"),{word:m}=D(d.hash),c=$(d.hash);return(u,s)=>(o(),i("div",{class:"flex flex-col p-4 rounded-xl",style:y({backgroundColor:e(f).hex(l.hash)})},[t("div",z,[t("div",N,p(e(B)(e(m))),1),t("div",{class:v(["i-la-link link",{active:e(a).word==l.hash||e(c)[e(a).def]}]),onClick:s[0]||(s[0]=k(r=>e(a).word=e(a).word==l.hash?null:l.hash,["stop","prevent"]))},null,2),s[3]||(s[3]=t("div",{class:"flex-1"},null,-1)),t("button",{class:"cursor-pointer p-2",onClick:s[1]||(s[1]=r=>u.$emit("close"))},s[2]||(s[2]=[t("div",{class:"i-la-times text-xl"},null,-1)]))]),t("div",S,[(o(!0),i(x,null,g(e(c),(r,n)=>(o(),i("div",{class:"p-0",key:n},[Object.keys(r).length>0?(o(),b(e(F),{key:0,class:"cursor-pointer",hash:n,onClick:j=>u.$emit("def",n)},null,8,["hash","onClick"])):C("",!0)]))),128))])],4))}},E=h(W,[["__scopeId","data-v-bb42b76c"]]);export{E as default};
