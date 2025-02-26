import{d as T,p as d,m as V,aV as $,c as l,o as t,e as p,G as y,k as o,t as f,w as b,j as a,T as g,aE as A,Z as N,aF as z,F as v,B as h,b as F}from"./framework.DtSfhgxr.js";import{u as S}from"./useChat.FdETSvkf.js";import"./theme.BtAP0b9B.js";import{A as D}from"./components.DEDLcqDQ.js";const E={class:"flex flex-wrap"},K={class:"text-xl font-bold p-2"},L={key:0,class:"i-la-plus"},M={key:1,class:"i-la-times"},O={key:0,class:"flex flex-wrap"},P={class:"flex flex-col p-2 gap-2 h-full"},j=["onClick"],G={class:"flex-1"},H=T({__name:"ChatTopics",props:{title:{type:String,default:"Topics"},topic:{type:String,default:"general"}},emits:["topic"],setup(x){const{addChat:w,chats:C}=S(),r=d(""),n=d(!1),m=d(),i=d(!0),u=V("(min-width: 640px)");return $(m,()=>u.value?null:i.value=!1),(_,e)=>(t(),l(v,null,[!i.value&&!o(u)?(t(),l("button",{key:0,class:"button absolute z-200 top-4 left-4",onClick:e[0]||(e[0]=s=>i.value=!0)},f(x.title),1)):p("",!0),y(g,{name:"fade",mode:"out-in",appear:""},{default:b(()=>[o(u)||i.value&&!o(u)?(t(),l("div",{key:0,class:"px-1 py-2 flex flex-col bg-dark-50 dark-bg-dark-400 bg-opacity-95 gap-2 overflow-y-scroll scroll-smooth absolute sm-static z-20 w-220px max-w-full text-light-900 backdrop-filter backdrop-blur-xl",ref_key:"chatsPanel",ref:m,style:{flex:"0 1 320px"}},[a("div",E,[a("div",K,f(x.title),1),e[4]||(e[4]=a("div",{class:"flex-1"},null,-1)),a("div",{class:"cursor-pointer self-center text-2xl p-2",onClick:e[1]||(e[1]=s=>n.value=!n.value)},[y(g,{name:"fade",mode:"out-in"},{default:b(()=>[n.value?(t(),l("div",M)):(t(),l("div",L))]),_:1})])]),n.value?(t(),l("div",O,[A(a("input",{class:"p-2 m-2 w-full rounded-xl text-dark-800","onUpdate:modelValue":e[2]||(e[2]=s=>r.value=s),placeholder:"New chat",onKeyup:e[3]||(e[3]=N(s=>{o(w)(r.value),r.value="",n.value=!1},["enter"]))},null,544),[[z,r.value]])])):p("",!0),a("div",P,[(t(!0),l(v,null,h(o(C),(s,c)=>(t(),l("div",{class:"font-bold bg-light-100 bg-opacity-10 rounded-xl px-2 cursor-pointer flex",key:c,onClick:B=>{_.$emit("topic",c),i.value=!1}},[a("div",G,f(c),1),(t(!0),l(v,null,h(s,(B,k)=>(t(),F(o(D),{key:k,size:20,pub:k},null,8,["pub"]))),128))],8,j))),128))])],512)):p("",!0)]),_:1})],64))}});export{H as default};
