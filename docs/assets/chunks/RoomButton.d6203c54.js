import{b2 as B,I as r,m as $,b as R,b3 as y,be as C,aT as w}from"./components.42f69420.js";import"../app.a6246997.js";import{f as x,x as v,o as l,c as n,E as m,e as t,I as c,t as N,M as V,L as z,H as k,G as E}from"./framework.088f8093.js";import"./theme.f9063172.js";const I={class:"mx-2"},L=["src"],P=m("div",{class:"text-2xl font-normal"},"@",-1),S={key:1,class:"ml-1 text-sm"},T={__name:"RoomButton",emits:["room","rooms","browse"],setup(_){const s=x(!1),u=v(()=>B(r.pub));$("deep");const g=v(()=>R({pub:r.pub,size:200,attachment:"local"})),{logo:i}=y(r.pub);return(a,o)=>{var p,b,d,f;return l(),n("div",I,[m("button",{class:"button",style:V({...g.value}),onClick:o[0]||(o[0]=e=>s.value=!0)},[t(i)?(l(),n("img",{key:0,class:"h-12 rounded-xl mr-2",src:t(i)},null,8,L)):c("",!0),P,(d=(b=(p=u.value)==null?void 0:p.room)==null?void 0:b.profile)!=null&&d.name?(l(),n("div",S,N((f=u.value)==null?void 0:f.room.profile.name.substring(0,15)),1)):c("",!0)],4),z(t(w),{class:"break-all",open:s.value,"close-button":!1,onClose:o[5]||(o[5]=e=>s.value=!1)},{default:k(()=>[(l(),E(t(C),{key:t(r).pub,onRoom:o[2]||(o[2]=e=>a.$emit("room",e)),onRooms:o[3]||(o[3]=e=>a.$emit("rooms")),onBrowse:o[4]||(o[4]=e=>{a.$emit("browse",e),s.value=!1})},{default:k(()=>[m("button",{class:"button m-4",onClick:o[1]||(o[1]=e=>{a.$emit("rooms"),s.value=!1})},"Browse rooms")]),_:1}))]),_:1},8,["open"])])}}};export{T as default};
