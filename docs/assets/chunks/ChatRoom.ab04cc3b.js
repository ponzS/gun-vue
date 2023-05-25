import"../app.a6246997.js";import{H as h,b as g,I as k,o as l,J as C,U as v,K as w,L as S}from"./components.42f69420.js";import{w as _,I as B}from"./theme.f9063172.js";import{d as I,w as N,x as E,o as d,c as H,L as i,H as L,e as t,G as U,I as V,E as c,t as $,M as z}from"./framework.088f8093.js";const A={class:"px-4 py-6 flex flex-wrap items-center text-center"},D={class:"flex-1 ml-2 font-bold"},M={class:"p-4 bg-dark-50 bg-opacity-80 flex gap-2 flex sticky bottom-0"},Q=I({__name:"ChatRoom",props:{title:{type:String,default:"Topics"},topic:{type:String,default:"general"},clickSound:{type:String,default:"audio/safe.mp3"}},emits:["account"],setup(f,{emit:R}){const r=f;let n;function m(){n||(n=new Audio(r.clickSound),n.volume=.1),n.play()}const{send:b,currentChat:u,sorted:p}=h();N(()=>r.topic,a=>{u.value=a},{immediate:!0}),_(p,(a,s)=>{if(a.length>s.length){m();const e=a.slice(-1)[0],{isSupported:o,notification:G,show:y,close:J,onClick:K,onShow:T,onError:W,onClose:j}=B({title:e==null?void 0:e.text,body:`${e==null?void 0:e.timestamp} by ${e==null?void 0:e.author}`,lang:"en",tag:"chat"});o.value&&y()}},{deep:!0});const x=E(()=>g({pub:k.pub,size:1200}));return(a,s)=>{var e;return d(),H("div",{class:"flex flex-col overflow-y-scroll",style:z([{flex:"1000 1 auto"},{...x.value}])},[i(t(v),{open:!!((e=t(l))!=null&&e.pub),onClose:s[0]||(s[0]=o=>t(l).pub="")},{default:L(()=>{var o;return[(o=t(l))!=null&&o.pub?(d(),U(t(C),{key:0,pub:t(l).pub},null,8,["pub"])):V("",!0)]}),_:1},8,["open"]),c("div",A,[c("div",D,$(t(u)),1)]),i(t(w),{messages:t(p)},null,8,["messages"]),c("div",M,[i(t(S),{class:"flex-auto",onSubmit:s[1]||(s[1]=o=>t(b)(o))})])],4)}}});export{Q as default};
