import{f as v,v as _,x,o as r,c as a,E as s,e as o,t as d,as as y,at as g,I as c}from"./framework.088f8093.js";import{aW as k,am as C}from"./components.42f69420.js";import"../app.a6246997.js";import"./theme.f9063172.js";const D={class:"p-2"},h={key:0,class:"flex flex-col gap-2 max-w-16em"},w={class:"grid gap-2 items-center",style:{"grid-template-columns":"auto 1fr"}},b=s("h3",null,"ID: ",-1),E=s("div",{class:"flex-1"},null,-1),$=s("div",{class:"i-la-sync"},null,-1),j=s("h3",null,"Title:",-1),A={class:"text-xs overflow-scroll"},T={__name:"ProjectForm",props:{title:{type:String,default:""},source:{type:String,default:""},required:{type:Array,default:["id","title"]}},emits:["added"],setup(m,{emit:B}){const i=m,n=v(!1),{newProject:e,addProject:f}=k();_(()=>{e.title=i.title,e.source=i.source});const p=x(()=>i.required.reduce((u,t)=>u&&!!(e!=null&&e[t]),!0));return(u,t)=>(r(),a("div",D,[n.value?(r(),a("div",h,[s("div",w,[b,s("div",{class:"p-2 flex items-center cursor-pointer gap-1",onClick:t[0]||(t[0]=l=>o(e).id=o(C)(6))},[s("pre",null,d(o(e).id),1),E,$]),j,y(s("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=l=>o(e).title=l)},null,512),[[g,o(e).title]])]),s("pre",A,d(o(e)),1),p.value?(r(),a("button",{key:0,class:"button",onClick:t[2]||(t[2]=l=>o(f)(()=>u.$emit("added")))},"ADD PROJECT "+d(p.value),1)):c("",!0)])):c("",!0),n.value?c("",!0):(r(),a("button",{key:1,class:"button text-lg",onClick:t[3]||(t[3]=l=>n.value=!0)},"Add a new project"))]))}};export{T as default};
