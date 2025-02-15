import"./theme.BYJwSh06.js";import{h as x,p as i,O as g,U as k,R as _,T as v}from"./components.CRAO-38e.js";import{u as C}from"./useChat.ByPi61RD.js";import{d as S,q as w,aB as B,h as N,c as R,o as d,G as n,j as c,w as U,b as V,e as $,k as e,t as z,N as A,aY as D}from"./framework.DRT7JCoy.js";import{u as T}from"./useBackground.DFLP7wRI.js";const j={class:"px-4 py-6 flex flex-wrap items-center text-center"},q={class:"flex-1 ml-2 font-bold"},E={class:"p-4 bg-dark-50 bg-opacity-80 flex gap-2 flex sticky bottom-0"},W=S({__name:"ChatRoom",props:{title:{type:String,default:"Topics"},topic:{type:String,default:"general"},clickSound:{type:String,default:"audio/safe.mp3"}},emits:["account"],setup(m,{emit:G}){const u=m;let l;function f(){l||(l=new Audio(u.clickSound),l.volume=.1),l.play()}const{send:b,currentChat:r,sorted:p}=C();w(()=>u.topic,s=>{r.value=s},{immediate:!0}),B(p,(s,a)=>{if(s.length>a.length){f();const t=s.slice(-1)[0],{isSupported:o,show:y}=D({title:t==null?void 0:t.text,body:`${t==null?void 0:t.timestamp} by ${t==null?void 0:t.author}`,lang:"en",tag:"chat"});o.value&&y()}},{deep:!0});const h=N(()=>T({pub:x.pub,size:1200}));return(s,a)=>{var t;return d(),R("div",{class:"flex flex-col overflow-y-scroll",style:A([{flex:"1000 1 auto"},{...h.value}])},[n(e(k),{open:!!((t=e(i))!=null&&t.pub),onClose:a[0]||(a[0]=o=>e(i).pub="")},{default:U(()=>{var o;return[(o=e(i))!=null&&o.pub?(d(),V(e(g),{key:0,pub:e(i).pub},null,8,["pub"])):$("",!0)]}),_:1},8,["open"]),c("div",j,[c("div",q,z(e(r)),1)]),n(e(_),{messages:e(p)},null,8,["messages"]),c("div",E,[n(e(v),{class:"flex-auto",onSubmit:a[1]||(a[1]=o=>e(b)(o))})])],4)}}});export{W as default};
