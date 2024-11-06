import{p as c,h as N,o as e,c as a,j as s,t as b,k as l,e as n,b as v,G as k,w as x,T as w,r as C,F as T,C as A,aC as F,aT as U,N as V,aO as j}from"./framework.BhkIoD7n.js";import{a as G,ay as L,az as E,aA as H}from"./components.uLkgiBox.js";import{u as O}from"./usePosts.CkJ2MaUh.js";import{c as y}from"./useReactions.nrCPf9_J.js";import"./theme.CY_Hf4tR.js";import"./useZip.BGc_hCit.js";import"./useMd.XDBWPWBw.js";import"./useGift.BetTuMja.js";import"./composables.BEPdKJiS.js";const Q={class:"flex flex-col z-10 items-start justify-items-stretch"},R={key:0,class:"flex flex-wrap items-center p-2 text-xl sticky z-100 top-0 shadow-lg bg-light-700 w-full"},q={class:"p-2 font-bold mx-2"},I={class:"flex flex-col bg-dark-50 bg-opacity-20 backdrop-filter backdrop-blur-md flex-1 p-2 w-full gap-8"},J={key:0,class:"p-2 flex flex-wrap z-300 text-sm bg-light-300 bg-opacity-40 dark-bg-dark-500 rounded-2xl m-2 flex-1",style:{order:"-2147483647",flex:"1000 100%"}},K={key:1,class:"flex flex-wrap gap-2"},M={key:0,class:"i-la-plus"},W={key:1,class:"i-la-times"},X={key:0,class:"i-la-eye"},Y={key:1,class:"i-la-eye-slash"},Z={key:0,class:"i-la-file-download"},_={key:1,class:"i-la-redo-alt animate-spin"},tt={key:1,class:"p-2 flex items-center gap-2",style:{order:"-2147483647",flex:"1000 100%"}},et={class:"flex flex-wrap gap-4 p-2"},ct={__name:"PostList",props:{tag:{type:String,default:""},header:{type:Boolean,default:!0}},emits:["close","browse","user"],setup(i,{emit:h}){const{user:u}=G(),$=i,P=h,{posts:p,backlinks:st,countPosts:g,countBacklinks:lt,downloadPosts:z,downloading:S,uploadPosts:B}=O($.tag),r=c();c(!1);const f=c(!1),D=N(()=>{const d={};for(let t in p){const o=y(p[t]);(f.value||o>0)&&(d[t]=p[t])}return d});return(d,t)=>(e(),a("div",Q,[i.header?(e(),a("div",R,[s("div",{class:"text-xl ml-2 font-bold cursor-pointer",style:{flex:"1 100px"},onClick:t[0]||(t[0]=o=>d.$emit("close"))},"# "+b(i.tag),1),t[7]||(t[7]=s("div",{class:"flex-1"},null,-1)),s("div",q,b(l(g)),1)])):n("",!0),s("div",I,[l(u).pub?(e(),a("div",J,[i.header?(e(),v(l(L),{key:0})):n("",!0),l(u).pub?(e(),a("div",K,[s("button",{class:"button",onClick:t[1]||(t[1]=o=>r.value=!r.value)},[k(w,{name:"fade",mode:"out-in"},{default:x(()=>[r.value?(e(),a("div",W)):(e(),a("div",M))]),_:1}),t[8]||(t[8]=s("div",{class:"ml-2 mr-1"},"Add",-1))]),t[11]||(t[11]=s("label",{class:"button",title:"Upload feed",for:"import-feed"},[s("div",{class:"i-la-file-upload"}),s("div",{class:"ml-2 mr-1"},"Upload")],-1)),s("button",{class:"button",onClick:t[2]||(t[2]=o=>f.value=!f.value)},[f.value?(e(),a("div",X)):(e(),a("div",Y)),t[9]||(t[9]=s("div",{class:"ml-2"},"Show hidden",-1))]),0<l(g)?(e(),a("button",{key:0,class:"button",title:"Download feed",onClick:t[3]||(t[3]=o=>l(z)())},[l(S)?(e(),a("div",_)):(e(),a("div",Z)),t[10]||(t[10]=s("div",{class:"ml-2 mr-1"},"Download",-1))])):n("",!0),C(d.$slots,"default")])):n("",!0),s("input",{class:"hidden",id:"import-feed",ref:"file",tabindex:"-1",type:"file",accept:".zip",multiple:"",onChange:t[4]||(t[4]=o=>l(B)(o.target.files))},null,544),k(w,{name:"fade"},{default:x(()=>[r.value?(e(),v(l(E),{key:0,tag:i.tag,onClose:t[5]||(t[5]=o=>r.value=!1)},null,8,["tag"])):n("",!0)]),_:1})])):n("",!0),l(u).pub?n("",!0):(e(),a("div",tt,[s("button",{class:"button",onClick:t[6]||(t[6]=o=>l(u).auth=!0)},"Authorize to post here"),C(d.$slots,"default")]))]),s("div",et,[k(j,{name:"list"},{default:x(()=>[(e(!0),a(T,null,A(D.value,(o,m)=>F((e(),v(l(H),{class:"max-w-xl flex-1 shadow-xl",key:m,style:V({order:-l(y)(o),opacity:l(y)(o)>0?1:.3}),hash:m,tag:i.tag,authors:o,onClick:ot=>P("browse",m)},null,8,["style","hash","tag","authors","onClick"])),[[U,i.tag!=m]])),128))]),_:1})])]))}};export{ct as default};
