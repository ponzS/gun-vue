import{p as c,s as x,h as y,o as r,c as i,j as s,k as l,t as d,aC as g,aD as k,e as p}from"./framework.BhkIoD7n.js";import{a as C}from"./useProject.DEogJoqh.js";import{ab as D}from"./components.uLkgiBox.js";import"./theme.CY_Hf4tR.js";const b={class:"p-2"},w={key:0,class:"flex flex-col gap-2 max-w-16em"},j={class:"grid gap-2 items-center",style:{"grid-template-columns":"auto 1fr"}},$={class:"text-xs overflow-scroll"},S={__name:"ProjectForm",props:{title:{type:String,default:""},source:{type:String,default:""},required:{type:Array,default:["id","title"]}},emits:["added"],setup(f,{emit:A}){const n=f,a=c(!1),{newProject:t,addProject:v}=C();x(()=>{t.title=n.title,t.source=n.source});const m=y(()=>n.required.reduce((u,e)=>u&&!!(t!=null&&t[e]),!0));return(u,e)=>(r(),i("div",b,[a.value?(r(),i("div",w,[s("div",j,[e[6]||(e[6]=s("h3",null,"ID: ",-1)),s("div",{class:"p-2 flex items-center cursor-pointer gap-1",onClick:e[0]||(e[0]=o=>l(t).id=l(D)(6))},[s("pre",null,d(l(t).id),1),e[4]||(e[4]=s("div",{class:"flex-1"},null,-1)),e[5]||(e[5]=s("div",{class:"i-la-sync"},null,-1))]),e[7]||(e[7]=s("h3",null,"Title:",-1)),g(s("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>l(t).title=o)},null,512),[[k,l(t).title]])]),s("pre",$,d(l(t)),1),m.value?(r(),i("button",{key:0,class:"button",onClick:e[2]||(e[2]=o=>l(v)(()=>u.$emit("added")))},"ADD PROJECT "+d(m.value),1)):p("",!0)])):p("",!0),a.value?p("",!0):(r(),i("button",{key:1,class:"button text-lg",onClick:e[3]||(e[3]=o=>a.value=!0)},"Add a new project"))]))}};export{S as default};
