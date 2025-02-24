import{d as $,p as C,q as B,aj as y,h,c as i,o as l,G as r,b as d,w as u,e as x,k as s,j as o,N as U,F,B as L,T as w}from"./framework.DtSfhgxr.js";import{a as S,aS as _,b8 as N,U as R,b9 as j,ba as P,bb as V,bc as A,bd as M,ab as p,be as T}from"./components.B_W1O-I8.js";import"./theme.DKVKzJue.js";import q from"./RoomButton.CBTQsbQn.js";import z from"./FileShare.C3LU8YOM.js";import E from"./FileInfo.BK-uUnRG.js";import"./useBackground.tz2eghdO.js";const G={class:"flex flex-col items-center w-full"},H={key:1,class:"flex flex-wrap w-full gap-2 p-2"},I={class:"p-4 flex flex-col items-stretch gap-4",style:{flex:"1 1 200px"}},D={class:"flex flex-col items-stretch bg-light-900 dark-bg-dark-500 p-2 rounded-xl",style:{flex:"1 1 200px"}},J={key:0,class:"i-la-angle-down"},K={key:1,class:"i-la-angle-up"},O={class:"flex flex-col items-stretch bg-light-900 dark-bg-dark-500 p-2 rounded-xl",style:{flex:"1 1 200px"}},Q={key:0,class:"i-la-angle-down"},W={key:1,class:"i-la-angle-up"},X={class:"flex flex-wrap items-stretch bg-light-900 dark-bg-dark-500 p-2 rounded-xl max-w-600px max-h-40vh overflow-y-scroll overscroll-none",style:{flex:"1 1 300px"}},de=$({__name:"UserHome",emits:["user","room","close","chat","browse"],setup(Y,{emit:Z}){const{user:a}=S();function k(){a.db.get("safe").get("saved").put(!0)}const v=C(!1);B(()=>a.is,()=>{a.db.get("safe").get("saved").on(n=>v.value=n)},{immediate:!0});const m=y("showChats",!0),f=y("showRooms",!0),c=h(()=>_(a.pub));return(n,e)=>(l(),i("div",G,[r(s(R),{open:s(a).is&&!v.value,"close-button":"",onClose:e[1]||(e[1]=t=>k())},{default:u(()=>[v.value?x("",!0):(l(),d(s(N),{key:0},{default:u(()=>[o("button",{class:"button mx-8 justify-center",onClick:e[0]||(e[0]=t=>k())},e[10]||(e[10]=[o("div",{class:"i-la-check"},null,-1),o("div",{class:"ml-2"},"I've stored my user key securely",-1)]))]),_:1}))]),_:1},8,["open"]),s(a).is?(l(),i("div",H,[r(s(P),{onBrowse:e[2]||(e[2]=t=>{n.$emit("browse",t),n.$emit("close")})}),o("div",I,[r(s(V)),o("button",{class:"p-2 rounded-xl font-bold text-lg shadow-md",style:U({backgroundColor:s(a).color}),onClick:e[3]||(e[3]=t=>{n.$emit("user",s(a).pub),n.$emit("close")})}," My public profile",4)]),o("div",D,[r(s(A),{onBrowse:e[4]||(e[4]=t=>n.$emit("room",t))}),o("button",{class:"items-center w-full flex px-2 pb-2",onClick:e[5]||(e[5]=t=>f.value=!s(f))},[e[11]||(e[11]=o("div",{class:"font-bold text-lg"},"Starred rooms",-1)),e[12]||(e[12]=o("div",{class:"flex-1"},null,-1)),s(f)?(l(),i("div",J)):(l(),i("div",K))]),r(w,{name:"fade",mode:"out-in"},{default:u(()=>{var t,g;return[s(f)?(l(),i("div",{class:"flex flex-col gap-4",key:s(a).pub},[(l(!0),i(F,null,L((g=(t=c.value)==null?void 0:t.rooms)==null?void 0:g.value,(ee,b)=>(l(),d(q,{key:b,pub:b,onBrowse:se=>n.$emit("room",b),panel:!1},null,8,["pub","onBrowse"]))),128))])):x("",!0)]}),_:1})]),o("div",O,[o("button",{class:"items-center w-full flex px-2 pb-2",onClick:e[6]||(e[6]=t=>m.value=!s(m))},[e[13]||(e[13]=o("div",{class:"font-bold text-lg"},"My chats",-1)),e[14]||(e[14]=o("div",{class:"flex-1"},null,-1)),s(m)?(l(),i("div",Q)):(l(),i("div",W))]),r(w,{name:"fade",mode:"out-in"},{default:u(()=>[s(m)?(l(),d(s(M),{key:0,onChat:e[7]||(e[7]=t=>n.$emit("chat",t))})):x("",!0)]),_:1})]),o("div",X,[s(p)?(l(),d(E,{key:0,file:s(p),onClose:e[8]||(e[8]=t=>p.value=null)},null,8,["file"])):(l(),d(s(T),{key:1,onFile:e[9]||(e[9]=t=>p.value=t)},{default:u(()=>[r(z)]),_:1}))])])):(l(),d(s(j),{key:0}))]))}});export{de as default};
