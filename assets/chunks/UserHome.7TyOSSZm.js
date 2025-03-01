import{d as w,p as c,q as $,aj as k,h as C,c as i,o as l,G as n,b as d,w as u,e as v,k as s,j as o,N as h,T as g,F as B,B as U}from"./framework.Cf-rbDpz.js";import{a as F,aS as L,b6 as R,U as S,b7 as j,b8 as N,b9 as _,ba as M,ab as p,bb as V,bc as z}from"./components.C4pu8j8n.js";import"./theme.C5sSAONz.js";import A from"./RoomButton.BLsgHqE8.js";import P from"./FileShare.BW3CH3At.js";import T from"./FileInfo.C33BQmxB.js";import"./useBackground.DwWnOnzu.js";const q={class:"flex flex-col items-center w-full"},E={key:1,class:"flex flex-wrap w-full gap-2 p-2"},G={class:"flex flex-col items-start bg-light-900 dark-bg-dark-500 p-2 rounded-xl max-h-40vh overflow-y-scroll",style:{flex:"1 1 200px"}},H={class:"flex flex-col items-stretch bg-light-900 dark-bg-dark-500 p-2 rounded-xl max-h-40vh overflow-y-scroll",style:{flex:"1 1 200px"}},I={key:0,class:"i-la-angle-down"},O={key:1,class:"i-la-angle-up"},D={class:"flex flex-wrap items-stretch bg-light-900 dark-bg-dark-500 p-2 rounded-xl max-w-600px max-h-40vh overflow-y-scroll",style:{flex:"1 1 300px"}},J={class:"flex flex-col items-stretch bg-light-900 dark-bg-dark-500 p-2 rounded-xl",style:{flex:"1 1 200px"}},K={key:0,class:"i-la-angle-down"},Q={key:1,class:"i-la-angle-up"},re=w({__name:"UserHome",emits:["user","room","close","chat","browse"],setup(W,{emit:X}){const{user:r}=F();function x(){r.db.get("safe").get("saved").put(!0)}const b=c(!1);$(()=>r.is,()=>{r.db.get("safe").get("saved").on(a=>b.value=a)},{immediate:!0});const m=k("showChats",!0),f=k("showRooms",!0),y=C(()=>Object.entries(L(r.pub)).filter(([a,e])=>e[r.pub]).map(([a])=>a));return(a,e)=>(l(),i("div",q,[n(s(S),{open:s(r).is&&!b.value,"close-button":"",onClose:e[1]||(e[1]=t=>x())},{default:u(()=>[b.value?v("",!0):(l(),d(s(R),{key:0},{default:u(()=>[o("button",{class:"button mx-8 justify-center",onClick:e[0]||(e[0]=t=>x())},e[10]||(e[10]=[o("div",{class:"i-la-check"},null,-1),o("div",{class:"ml-2"},"I've stored my user key securely",-1)]))]),_:1}))]),_:1},8,["open"]),s(r).is?(l(),i("div",E,[n(s(N),{onBrowse:e[2]||(e[2]=t=>{a.$emit("browse",t),a.$emit("close")})}),o("div",G,[n(s(_)),o("button",{class:"button",style:h({backgroundColor:s(r).color}),onClick:e[3]||(e[3]=t=>{a.$emit("user",s(r).pub),a.$emit("close")})}," My public profile",4)]),o("div",H,[o("button",{class:"z-100 bg-light-400 dark-bg-dark-700 rounded-xl sticky top-0 items-center w-full flex p-2",onClick:e[4]||(e[4]=t=>m.value=!s(m))},[e[11]||(e[11]=o("div",{class:"font-bold text-lg"},"Messages",-1)),e[12]||(e[12]=o("div",{class:"flex-1"},null,-1)),s(m)?(l(),i("div",I)):(l(),i("div",O))]),n(g,{name:"fade",mode:"out-in"},{default:u(()=>[s(m)?(l(),d(s(M),{key:0,onChat:e[5]||(e[5]=t=>a.$emit("chat",t))})):v("",!0)]),_:1})]),o("div",D,[s(p)?(l(),d(T,{key:0,file:s(p),onClose:e[6]||(e[6]=t=>p.value=null)},null,8,["file"])):(l(),d(s(V),{key:1,onFile:e[7]||(e[7]=t=>p.value=t)},{default:u(()=>[n(P)]),_:1}))]),o("div",J,[n(s(z),{onBrowse:e[8]||(e[8]=t=>a.$emit("room",t))}),o("button",{class:"items-center w-full flex px-2 pb-2",onClick:e[9]||(e[9]=t=>f.value=!s(f))},[e[13]||(e[13]=o("div",{class:"font-bold text-lg"},"Starred rooms",-1)),e[14]||(e[14]=o("div",{class:"flex-1"},null,-1)),s(f)?(l(),i("div",K)):(l(),i("div",Q))]),n(g,{name:"fade",mode:"out-in"},{default:u(()=>[s(f)?(l(),i("div",{class:"flex flex-col gap-4",key:s(r).pub},[(l(!0),i(B,null,U(y.value,t=>(l(),d(A,{key:t,pub:t,onBrowse:Y=>a.$emit("room",t),panel:!1},null,8,["pub","onBrowse"]))),128))])):v("",!0)]),_:1})])])):(l(),d(s(j),{key:0}))]))}});export{re as default};
