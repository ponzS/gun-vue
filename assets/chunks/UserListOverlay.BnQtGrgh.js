import{d as y,m as w,p as m,aV as _,h as C,c as a,o as n,e as r,G as f,k as t,a0 as c,j as s,a as V,w as z,F as v,B,t as x,T as L}from"./framework.DtSfhgxr.js";import{a as N,b2 as U,aZ as G}from"./components.B_W1O-I8.js";import{u as M}from"./useGuests.CyfdqlpM.js";import"./theme.DKVKzJue.js";const T={class:"flex items-center"},$={class:"text-xl mr-2 capitalize"},j={class:"px-2 py-1 rounded-xl font-bold"},I=y({__name:"UserListOverlay",emits:["user"],setup(F,{emit:O}){const i=w("(min-width: 640px)"),{user:u}=N(),d=M(),o=m(),p=m();_(p,()=>{o.value&&(o.value=!1)});const b=C(()=>d.guests[u.pub]);return(g,e)=>(n(),a(v,null,[!o.value&&!t(i)?(n(),a("button",{key:0,class:"absolute flex items-center m-4 p-2 left-0 bottom-0 z-200",onMousedown:e[0]||(e[0]=c(l=>o.value=!0,["stop","prevent"]))},e[3]||(e[3]=[s("div",{class:"i-la-users text-3xl"},null,-1),s("div",{class:"ml-1 flex items-center gap-2"},[V("Users list"),s("div",{class:"i-la-angle-up"})],-1),s("div",{class:"flex-1"},null,-1)]),32)):r("",!0),t(u).is&&!b.value?(n(),a("button",{key:1,class:"button absolute flex items-center m-4 p-2 right-0 top-0 z-200",onClick:e[1]||(e[1]=c(l=>t(U)(),["stop","prevent"]))},e[4]||(e[4]=[s("div",{class:"i-la-plus"},null,-1),s("div",{class:"ml-2"},"Join",-1)]))):r("",!0),f(L,{name:"fade"},{default:z(()=>[t(i)||o.value&&!t(i)?(n(),a("div",{key:0,class:"absolute left-0 bottom-0 w-60 bg-light-200 dark-bg-dark-800 dark-bg-opacity-80 bg-opacity-70 z-100 overflow-y-scroll px-2 max-h-full flex flex-col gap-2 p-2 rounded-tr-xl",ref_key:"panel",ref:p},[(n(),a(v,null,B(["online","offline"],l=>s("div",{class:"flex flex-col gap-2",key:l},[s("div",T,[s("div",$,x(l),1),s("div",j,x(t(d).count[l]),1)]),f(t(G),{state:l,onUser:e[2]||(e[2]=k=>g.$emit("user",k))},null,8,["state"])])),64))],512)):r("",!0)]),_:1})],64))}});export{I as default};
