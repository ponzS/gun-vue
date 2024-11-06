import{d as k,p as i,q as g,o as r,c as u,j as l,a2 as w,aC as d,aD as f,e as p,G as v,k as C,w as N,T as S}from"./framework.BhkIoD7n.js";import{a as V,w as x,x as E,Q as L,S as T,y as h}from"./components.uLkgiBox.js";import"./theme.CY_Hf4tR.js";const q={class:"flex flex-col my-4 flex-1 items-center bg-light-700 dark-bg-dark-50 rounded-3xl p-4 shadow-lg"},A={class:"flex"},B={key:0,class:"flex"},P={class:"hidden"},Q={class:"flex flex-wrap"},O=k({__name:"AuthForm",setup(U){const n=i("pass"),a=i(),o=i(null),{auth:c}=V();function m(t){n.value!=t?n.value=t:n.value=null}g(a,async t=>{if(!t)return;typeof t=="string"&&t.includes("#/auth/")&&(t=x(t)),t&&typeof t=="string"&&t.substring(0,3)=="SEA"&&(o.value="");let e=E(t);e!=null&&e.pub&&(e!=null&&e.priv)?(c(e),a.value=null):console.log("No valid pair")});async function y(t=a.value){typeof t=="string"&&t.includes("#/auth/")&&(t=x(t)),a.value=await T.decrypt(t,o.value)}function b(t){var e;h((e=t.target)==null?void 0:e.files,s=>a.value=s)}return(t,e)=>(r(),u("div",q,[e[9]||(e[9]=l("div",{class:"font-bold text-xl"},"I already have an account",-1)),e[10]||(e[10]=l("div",{class:"text-md"},"Login with a saved key",-1)),l("div",A,[l("button",{class:"button m-2 cursor-pointer flex items-center",onClick:e[0]||(e[0]=s=>m("key"))},e[6]||(e[6]=[l("div",{class:"i-la-key text-xl"},null,-1),l("div",{class:"p-1 ml-1 font-bold"},"Paste",-1)])),e[7]||(e[7]=w('<label class="button m-2 cursor-pointer flex items-center" for="qr-input"><div class="i-la-qrcode text-xl"></div><div class="p-1 ml-1 font-bold">QR</div></label><label class="button m-2 cursor-pointer flex items-center" for="json-input"><div class="i-la-file-code text-xl"></div><div class="p-1 ml-1 font-bold">JSON</div></label>',2))]),o.value!==null?(r(),u("form",B,[d(l("input",{class:"py-1 px-4 m-1 rounded-xl","onUpdate:modelValue":e[1]||(e[1]=s=>o.value=s),autofocus:"",autocomplete:"current-password",type:"text",placeholder:"Enter the password"},null,512),[[f,o.value]]),l("button",{class:"button text-2xl",type:"submit",onClick:e[2]||(e[2]=s=>y())},e[8]||(e[8]=[l("div",{class:"i-la-sign-in-alt"},null,-1)]))])):p("",!0),l("div",P,[v(C(L),{onLoaded:e[3]||(e[3]=s=>a.value=s)}),l("input",{id:"json-input",ref:"file",tabindex:"-1",type:"file",accept:"application/json",onChange:e[4]||(e[4]=s=>b(s))},null,544)]),l("div",Q,[v(S,{name:"fade"},{default:N(()=>[n.value=="key"?d((r(),u("textarea",{class:"p-2 text-sm flex-1 w-full dark-bg-dark-200",key:"text","onUpdate:modelValue":e[5]||(e[5]=s=>a.value=s),rows:"6",cols:"40",placeholder:"Paste your key pair here"},null,512)),[[f,a.value]]):p("",!0)]),_:1})])]))}});export{O as default};
