import{d as v,x as f,f as h,o as s,c as n,E as e,t as p,L as b,H as _,F as k,U as x,G as g,e as c,I as u,T as y}from"./framework.088f8093.js";import{a as C,b8 as w,bz as R,bf as $}from"./components.42f69420.js";import"../app.a6246997.js";import"./theme.f9063172.js";const B={key:0,class:"flex flex-col"},V=e("div",{class:"text-lg font-bold"},"My rooms",-1),E=e("div",{class:"flex-1"},null,-1),N={class:"text-md font-bold mr-2"},U={key:0,class:"i-la-angle-down"},j={key:1,class:"i-la-angle-up"},F={key:0,class:"flex flex-wrap gap-2 mb-8"},L={class:"p-4 flex flex-wrap gap-1"},O=["onClick"],T=e("div",{class:"i-la-eye"},null,-1),z=e("div",{class:"ml-2"},"View",-1),D=[T,z],G=["onClick"],H=e("div",{class:"i-ion-enter-outline"},null,-1),I=e("div",{class:"ml-2"},"Enter",-1),M=[H,I],S=["onClick"],q=e("div",{class:"i-la-tools"},null,-1),A=e("div",{class:"ml-2"},"Renew",-1),J=[q,A],Z=v({__name:"UserRooms",emits:["browse"],setup(K,{emit:P}){const{user:m}=C(),i=f(()=>{var o;let t=(o=m.safe)==null?void 0:o.rooms;return t?(delete t._,t):{}}),l=h(!1);return(t,o)=>Object.keys(i.value).length>0?(s(),n("div",B,[e("div",{class:"flex p-4 bg-light-900 dark-bg-dark-700 rounded-xl mb-2 items-center cursor-pointer shadow-sm hover-shadow-md transition",onClick:o[0]||(o[0]=d=>l.value=!l.value)},[V,E,e("div",N,p(Object.keys(i.value).length),1),l.value?(s(),n("div",j)):(s(),n("div",U))]),b(y,{name:"fade",mode:"out-in"},{default:_(()=>[l.value?(s(),n("div",F,[(s(!0),n(k,null,x(i.value,(d,a)=>(s(),g(c(w),{key:a,style:{flex:"1 1 200px"},pub:a},{default:_(()=>[e("div",L,[e("button",{class:"button",onClick:r=>t.$emit("browse",a)},D,8,O),e("button",{class:"button",onClick:r=>c(R)(a)},M,8,G),e("button",{class:"button",onClick:r=>c($)(d)},J,8,S)])]),_:2},1032,["pub"]))),128))])):u("",!0)]),_:1})])):u("",!0)}});export{Z as default};
