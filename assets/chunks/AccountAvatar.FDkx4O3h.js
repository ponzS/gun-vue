import{o as c}from"./components.CRAO-38e.js";import{u as f}from"./useAvatar.XX_fy8H4.js";import{d as m,c as t,o as r,r as p,k as s,N as i,j as b}from"./framework.DRT7JCoy.js";import"./theme.BYJwSh06.js";const h={class:"flex flex-col items-center justify-center"},y=["width","height","src"],g=m({__name:"AccountAvatar",props:{pub:{type:String,default:""},size:{type:Number,default:42},border:{type:Number,default:2}},setup(e){const o=e,l=c("deep"),{avatar:n,blink:d}=f(()=>o.pub,()=>o.size);return(u,a)=>(r(),t("div",h,[e.pub?(r(),t("img",{key:0,class:"border rounded-full overflow-hidden transition duration-500 ease-out",style:i({borderColor:s(d)?s(l).hex(e.pub):"transparent",borderWidth:`${e.border}px`}),width:e.size,height:e.size,src:s(n)},null,12,y)):(r(),t("div",{key:1,class:"pb-2 px-1",style:i({fontSize:e.size+"px"})},a[0]||(a[0]=[b("div",{class:"i-la-user"},null,-1)]),4)),p(u.$slots,"default")]))}});export{g as default};
