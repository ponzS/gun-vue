import{m as g,ax as V,ay as N,az as $}from"./components.42f69420.js";import"../app.a6246997.js";import{_ as z,x as D,J as E,o as a,c as o,E as c,M as b,e as t,I as l,t as v,L as w,G as L,r as T,V as U,W as j}from"./framework.088f8093.js";import"./theme.f9063172.js";const A=s=>(U("data-v-452f279b"),s=s(),j(),s),G={class:"flex flex-wrap items-center max-w-full w-full backdrop-blur-lg rounded-2xl bg-light-100 bg-opacity-80 dark-bg-dark-400 dark-bg-opacity-80 backdrop-blur-sm backdrop-filter shadow-md",style:{flex:"14 1 620px"}},J={key:0,class:"p-0",style:{flex:"1 1 40px"}},M=["src"],O={key:1,class:"flex flex-col p-2 overflow-hidden",style:{flex:"10 1 280px"}},R={class:"px-2"},W={class:"flex items-center"},q={class:"flex flex-col"},F={key:0,class:"text-xl font-bold my-2"},H={key:1,class:"statement"},K=A(()=>c("div",{class:"flex-1"},null,-1)),Q={class:"flex items-center flex-wrap items-center mt-2 gap-2"},X={key:0,class:"i-la-youtube mx-1"},Y={key:1,class:"i-mdi-text-long mx-1"},Z={key:2,class:"flex gap-1 rounded-xl p-1 bg-dark-50 bg-opacity-20 flex-wrap items-center",style:{flex:"1 1 230px"}},ee={__name:"PostCard",props:{hash:{type:String,default:""},authors:{type:Object,default:()=>({})},tag:{type:[String,Boolean],default:""},back:Boolean,actions:{type:Boolean,default:!0}},emits:["user"],setup(s){const S=s;g("light");const B=g("deep"),{post:e}=V({hash:S.hash}),C=D(()=>e.icon||e.title||e.statement||e.link);return(n,d)=>{var i,r,u,h,p,m,x,f,_,k,y;const I=E("post-link");return a(),o("div",{class:"card",style:b({backgroundImage:`url(${((i=t(e))==null?void 0:i.cover)||((r=t(e))==null?void 0:r.raw)})`,backgroundColor:t(B).hex(s.hash)})},[c("div",{class:"p-0",style:b({paddingTop:(u=t(e))!=null&&u.cover||(h=t(e))!=null&&h.raw?"18em":"0"})},null,4),c("div",G,[(p=t(e))!=null&&p.icon?(a(),o("div",J,[c("img",{class:"w-20 max-h-20 rounded-full m-2",src:t(e).icon,width:"40px"},null,8,M)])):l("",!0),C.value?(a(),o("div",O,[c("div",R,[c("div",W,[c("div",q,[(m=t(e))!=null&&m.title?(a(),o("div",F,v(t(e).title),1)):l("",!0),(x=t(e))!=null&&x.statement?(a(),o("div",H,v(t(e).statement),1)):l("",!0)]),K,w(I,{hash:s.hash},null,8,["hash"])])]),c("div",Q,[(f=t(e))!=null&&f.youtube?(a(),o("div",X)):l("",!0),(_=t(e))!=null&&_.text?(a(),o("div",Y)):l("",!0),(k=t(e))!=null&&k.link?(a(),L(t(N),{key:2,url:(y=t(e))==null?void 0:y.link},null,8,["url"])):l("",!0),T(n.$slots,"default",{},void 0,!0)])])):l("",!0),s.actions?(a(),o("div",Z,[w(t($),{authors:s.authors,hash:s.hash,tag:s.tag,back:s.back,onUser:d[0]||(d[0]=P=>n.$emit("user",P))},null,8,["authors","hash","tag","back"])])):l("",!0)])],4)}}},le=z(ee,[["__scopeId","data-v-452f279b"]]);export{le as default};
