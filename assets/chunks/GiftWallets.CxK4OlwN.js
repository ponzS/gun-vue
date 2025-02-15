import{h as B,ah as y,p as D,c as n,o,j as l,G as g,e as k,F as v,B as b,b as $,w,k as r,N as S,aF as m,t as G,aZ as j,aG as x}from"./framework.DRT7JCoy.js";import{a as q,i as E,ah as C,U as I,ad as L}from"./components.CRAO-38e.js";import"./theme.BYJwSh06.js";import{c as N}from"./currencies.G9pkebxG.js";const R={class:"flex flex-col gap-2"},F={class:"flex flex-col gap-2"},M=["onClick"],O={class:"p-2"},Y={class:"grid grid-cols-2 gap-2",style:{"grid-template-columns":"1fr 6fr"}},T=["value"],J={__name:"GiftWallets",props:{pub:{type:String,default:"OKrDaDeD8VeA27d673RqlodSnebnaDq6Ci23Ys_ABWE.q8fI2lkxO46R8TMjeUeAf7I0yBS5mdH_Cb9_285Wkqk"},activeWallet:{type:Object,default:()=>({})}},emits:["wallet","clear"],setup(u,{emit:z}){const f=u,{user:i}=q(),c=E();B(()=>i.pub==f.pub);const p=y({});c.user(f.pub).get("wallets").map().on((a,e)=>{if(!a){delete p[e];return}let t={...a};delete t._,p[e]=t});const d=D(),s=y({currency:"",account:"",url:""});function W(){const a=L();c.user().get("wallets").get(a).put(s),d.value=!1}function U(a){console.log(a),c.user().get("wallets").get(a).put(null)}return(a,e)=>(o(),n(v,null,[l("div",R,[l("div",F,[(o(!0),n(v,null,b(p,(t,V)=>(o(),$(r(C),{class:"cursor-pointer",key:t,wallet:t,style:S({backgroundColor:t==u.activeWallet?"#3333":""}),onClick:A=>t!=u.activeWallet?a.$emit("wallet",t):a.$emit("clear")},{default:w(()=>[r(i).pub==u.pub?(o(),n("div",{key:0,class:"i-la-trash-alt opacity-40 hover-opacity-90",onClick:A=>U(V)},null,8,M)):k("",!0)]),_:2},1032,["wallet","style","onClick"]))),128))]),r(i).pub==u.pub?(o(),n("button",{key:0,class:"button",onClick:e[0]||(e[0]=t=>d.value=!0)},"Add a wallet")):k("",!0)]),g(r(I),{open:d.value,onClose:e[5]||(e[5]=t=>d.value=!1)},{default:w(()=>[l("div",O,[e[10]||(e[10]=l("div",{class:"text-xl"},"Add a new wallet",-1)),l("div",Y,[e[6]||(e[6]=l("div",{class:"p-2"},"Currency",-1)),m(l("select",{class:"rounded-xl dark-bg-dark-100 p-2","onUpdate:modelValue":e[1]||(e[1]=t=>s.currency=t),placeholder:"Your account currency"},[(o(!0),n(v,null,b(r(N),t=>(o(),n("option",{key:t,value:t},G(t),9,T))),128))],512),[[j,s.currency]]),e[7]||(e[7]=l("div",{class:"p-2"},"Account",-1)),m(l("textarea",{class:"shadow-lg rounded-xl p-2","onUpdate:modelValue":e[2]||(e[2]=t=>s.account=t),type:"text",placeholder:"Your account details"},null,512),[[x,s.account]]),e[8]||(e[8]=l("div",{class:"p-2"},"URL",-1)),m(l("input",{class:"shadow-lg rounded-xl p-2","onUpdate:modelValue":e[3]||(e[3]=t=>s.url=t),type:"text",placeholder:"Link to the payment gateway"},null,512),[[x,s.url]]),e[9]||(e[9]=l("div",{class:"p-2"},"PREVIEW",-1)),g(r(C),{wallet:s},null,8,["wallet"]),l("button",{class:"button col-span-2",onClick:e[4]||(e[4]=t=>W())},"Add the wallet")])])]),_:1},8,["open"])],64))}};export{J as default};
