import{_ as f,o as a,c as n,E as t,t as _,e,n as v,a5 as b,F as k,U as x,G as g,I as y,M as C,V as w,W as D}from"./framework.088f8093.js";import{m as S,a2 as W,W as I,a3 as $,Z as l,a1 as B}from"./components.42f69420.js";import"../app.a6246997.js";import"./theme.f9063172.js";const h=s=>(w("data-v-bb42b76c"),s=s(),D(),s),F={class:"flex items-center rounded-lg capitalize mb-4"},z={class:"text-2xl font-bold"},P=h(()=>t("div",{class:"flex-1"},null,-1)),V=h(()=>t("div",{class:"i-la-times text-xl"},null,-1)),E=[V],M={class:"flex flex-wrap gap-2"},N={__name:"DictWordPage",props:{hash:{type:String,default:""}},emits:["def","close"],setup(s){const r=s,p=S("light"),{word:m}=W(r.hash),d=I(r.hash);return(u,o)=>(a(),n("div",{class:"flex flex-col p-4 rounded-xl",style:C({backgroundColor:e(p).hex(s.hash)})},[t("div",F,[t("div",z,_(e($)(e(m))),1),t("div",{class:v(["i-la-link link",{active:e(l).word==s.hash||e(d)[e(l).def]}]),onClick:o[0]||(o[0]=b(c=>e(l).word=e(l).word==s.hash?null:s.hash,["stop","prevent"]))},null,2),P,t("button",{class:"cursor-pointer p-2",onClick:o[1]||(o[1]=c=>u.$emit("close"))},E)]),t("div",M,[(a(!0),n(k,null,x(e(d),(c,i)=>(a(),n("div",{class:"p-0",key:i},[Object.keys(c).length>0?(a(),g(e(B),{key:0,class:"cursor-pointer",hash:i,onClick:R=>u.$emit("def",i)},null,8,["hash","onClick"])):y("",!0)]))),128))])],4))}},U=f(N,[["__scopeId","data-v-bb42b76c"]]);export{U as default};
