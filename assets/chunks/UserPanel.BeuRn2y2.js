import"./theme.BtAP0b9B.js";import{a as m,q as p,be as f,M as v}from"./components.DEDLcqDQ.js";import{u as b}from"./useBackground.DBe3xEzA.js";import{d as k,h as x,c as o,e as _,k as e,o as a,j as l,G as i,t as g,N as r}from"./framework.DtSfhgxr.js";const y={class:"flex items-center"},C={class:"text-xl mx-2 font-bold"},B={key:0,class:"i-la-lock"},w={key:1,class:"i-la-unlock"},j=k({__name:"UserPanel",emits:["browse"],setup(N,{emit:z}){const{user:s,leave:u}=m();p("deep");const d=x(()=>b({pub:s.pub,size:600,light:.5,draw:"circles"}));return(U,t)=>{var n;return e(s).is?(a(),o("div",{key:0,class:"p-4 flex items-center w-full",style:r({...d.value})},[l("div",y,[i(e(f),{size:60}),l("div",C,g((n=e(s))==null?void 0:n.name),1)]),i(e(v),{pub:e(s).pub},null,8,["pub"]),t[3]||(t[3]=l("div",{class:"flex-1"},null,-1)),l("div",{class:"p-1 m-1 rounded-full transition-all duration-300 ease-in-out",style:r({backgroundColor:e(s).blink?"white":"black"})},null,4),l("button",{class:"p-2 text-2xl",onClick:t[0]||(t[0]=c=>e(s).db.get("safe").get("saved").put(!e(s).safe.saved))},[e(s).safe.saved?(a(),o("div",B)):(a(),o("div",w))]),l("button",{class:"text-2xl ml-1 p-2",onClick:t[1]||(t[1]=c=>e(u)())},t[2]||(t[2]=[l("div",{class:"i-ion-exit-outline"},null,-1)]))],4)):_("",!0)}}});export{j as default};
