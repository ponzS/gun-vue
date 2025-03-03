import{aU as F,a as P,i as h,aO as L,q as U,aV as z,aK as N,aW as S,o as T,aX as V,aY as H,aZ as M,aB as j}from"./components.CMX5F39n.js";import{u as A}from"./useMd.ChpmhiH8.js";import{u as G}from"./useBackground.CENn_yVt.js";import"./theme.DFJsZiVm.js";import{h as _,ah as O,c as n,o as a,j as s,r as q,b as d,k as e,G as c,e as w,t as D,F as R,B,N as E}from"./framework.Cf-rbDpz.js";const K={class:"flex flex-col items-stretch"},W={class:"max-w-full flex flex-col items-stretche bg-light-100 bg-opacity-20 dark-bg-dark-800 dark-bg-opacity-40 p-4 md-p-12 shadow-xl backdrop-blur-md backdrop-filter rounded-t-xl"},X={class:"flex flex-wrap items-center gap-8"},Y={class:"flex flex-col flex-auto",style:{flex:"100"}},Z={class:"flex gap-2 items-center"},I={key:0,class:"i-la-star"},J={key:1,class:"i-la-star-solid"},Q={class:"text-md"},ee={class:"flex items-center flex-wrap"},te={class:"flex flex-col items-center bg-light-300 dark-bg-dark-400"},se={class:"flex flex-wrap items-center gap-2 p-4"},oe={class:"px-4 max-w-55ch"},le={class:"relative"},ae={key:0,class:"flex items-center"},re=["innerHTML"],xe={__name:"RoomPage",props:{pub:{type:String,default:""},titles:{type:Object,default:()=>F}},emits:["rooms","browse","user"],setup(f){const x=f,{user:p}=P(),i=_(()=>x.pub?x.pub:h.pub),{room:o,leaveRoom:ie,updateRoomProfile:b,enterRoom:ne}=L(i.value),$=A(),u=O({name:!1,description:!1,text:!1});U("deep");const C=_(()=>G({pub:i.value,size:1200,attachment:"local"}));return(m,t)=>{var v,k,g,y;return a(),n("div",K,[s("div",{class:"pt-32 px-2 md-px-8 bg-cover relative flex flex-col items-center",style:E({...C.value})},[s("div",W,[s("div",X,[(a(),d(e(z),{class:"flex-1 rounded-2xl overflow-hidden min-w-20",pub:i.value,key:i.value},null,8,["pub"])),s("div",Y,[s("div",Z,[c(e(N),{class:"font-bold text-2xl",text:e(o).profile.name||i.value.substring(0,12),editable:e(o).hosts[e(p).pub]&&i.value==e(h).pub&&!u.name,onUpdate:t[0]||(t[0]=r=>e(b)("name",r))},null,8,["text","editable"]),t[6]||(t[6]=s("div",{class:"flex-1"},null,-1)),(v=e(p))!=null&&v.is?(a(),n("button",{key:0,class:"button z-100",onPointerdown:t[1]||(t[1]=r=>e(S)(i.value))},[e(o).isFavourite?(a(),n("div",J)):(a(),n("div",I))],32)):w("",!0)]),s("div",Q,D(e(o).profile.description),1),s("div",ee,[t[7]||(t[7]=s("div",{class:"font-bold mr-2"},"Hosts: ",-1)),(a(!0),n(R,null,B(e(o).hosts,(r,l)=>(a(),n("div",{class:"p-2 flex flex-col items-start gap-2",key:l},[c(e(T),{pub:l,selectable:!0},null,8,["pub"])]))),128))]),c(e(V),{pub:i.value},null,8,["pub"])])])])],4),q(m.$slots,"default"),s("div",te,[s("div",se,[(a(!0),n(R,null,B(f.titles,(r,l)=>(a(),d(e(H),{key:l,cert:e(o).features[l],type:l,title:r,pub:i.value,open:e(o).features[l]||l=="users"&&e(o).features.space||l=="chat"&&e(o).features.chat,onClick:ue=>m.$emit("browse",l)},null,8,["cert","type","title","pub","open","onClick"]))),128))]),s("div",oe,[(a(),d(e(M),{state:"offline",onUser:t[2]||(t[2]=r=>m.$emit("user",r)),roomPub:(k=e(o))==null?void 0:k.pub,key:e(o).pub},null,8,["roomPub"]))]),s("div",le,[u.text===!1?(a(),n("div",ae,[s("div",{class:"p-4 prose max-w-65ch",innerHTML:e($).render(((g=e(o).profile)==null?void 0:g.text)||"")},null,8,re),(y=e(o).hosts)!=null&&y[e(p).pub]?(a(),n("button",{key:0,class:"button absolute top-4 right-4 z-200",onClick:t[3]||(t[3]=r=>{var l;return u.text=((l=e(o).profile)==null?void 0:l.text)||""})},t[8]||(t[8]=[s("div",{class:"i-la-pen"},null,-1)]))):w("",!0)])):(a(),d(e(j),{key:1,text:u.text,"onUpdate:text":t[4]||(t[4]=r=>u.text=r),onClose:t[5]||(t[5]=r=>{e(b)("text",u.text),u.text=!1})},null,8,["text"]))])])])}}};export{xe as default};
