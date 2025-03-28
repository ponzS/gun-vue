import{p as E,h as L,c as i,e as c,k as s,o as a,j as t,G as g,r as O,t as C,N as V,n as b,w as P,T as U,F as q,B as J}from"./framework.BoVd_Pm6.js";import{E as F,a as I,G as M,H as W,D as Q,I as Y,J as z}from"./components.BLyRHMpj.js";import"./theme.C0V-IKld.js";function H(){const{share:$,isSupported:S}=F();function r(l,n="Bookmark"){return{Win:{content:`[InternetShortcut]
URL=${l}`,extension:".url",mime:"application/internet-shortcut"},Mac:{content:`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>URL</key>
  <string>${l}</string>
</dict>
</plist>`,extension:".webloc",mime:"application/x-apple-plist"},Linux:{content:`[Desktop Entry]
Encoding=UTF-8
Type=Link
Name=${n}
URL=${l}`,extension:".desktop",mime:"application/x-desktop"}}}function v(l,n,u){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&S){$({title:n,text:u.startsWith("text/")?l:"Your key file",files:[new File([l],n,{type:u})]});return}const x=new Blob([l],{type:u}),o=URL.createObjectURL(x),p=document.createElement("a");p.href=o,p.download=n,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(o)}return{saveLink:(l,n,u)=>{const o=r(l)[n];!(o!=null&&o.content)||!(o!=null&&o.extension)||v(o.content,`${u||"account"}${o.extension}`,o.mime)},savePng:(l,n)=>{fetch(l).then(u=>u.blob()).then(u=>v(u,`${n||"avatar"}.png`,u.type))},saveJson:(l,n)=>{v(JSON.stringify(l),`${n||"account"}.json`,"application/json")},sharePng:async(l,n)=>{if(!S){console.log("Sharing not supported");return}try{const u=await fetch(l).then(o=>o.blob());if(!u){console.error("Failed to create blob from data URL");return}const x=new File([u],`${n||"avatar"}.png`,{type:"image/png"});return $({title:n||"Gun-Vue avatar",files:[x]}).catch(o=>console.error("Share failed:",o))}catch(u){console.error("Share preparation failed:",u)}}}}const K={key:0,class:"flex p-4 items-center bg-dark-100 bg-opacity-20 mt-2 shadow-inset"},X={key:0,class:"i-la-lock"},Z={key:1,class:"i-la-unlock"},_={class:"text-sm"},ee={class:"flex flex-wrap gap-2 p-2"},te=["href"],se={key:1,class:"flex w-full justify-center mt-4"},ne={class:"p-2 flex flex-col w-full items-start",key:"text"},le={class:"flex gap-2 items-center mx-4"},oe={key:0,class:"px-2"},ie={key:1,class:"px-2"},ae={class:"w-full p-4 text-sm flex-1 rounded-xl break-all select-all",key:"text"},re={class:"p-2 flex flex-col items-center",key:"png"},ue={class:"flex gap-2 items-center mt-4"},de=["src"],ve={class:"p-4 flex flex-col gap-2",key:"link"},ce={class:"flex flex-wrap gap-2 items-center mx-4"},pe={key:0,class:"px-2"},me={key:1,class:"px-2"},ke=["onClick"],xe={class:"px-2"},fe=["href"],be={class:"px-2 font-normal font-mono text-xs"},ye={class:"p-4 flex flex-col gap-2 items-center",key:"qr"},Se={__name:"AuthCredentials",emits:["close"],setup($,{emit:S}){const r=E("pass"),{user:v}=I();function l(k){r.value!=k?r.value=k:r.value=null}const{pass:n}=M(),{text:u,copy:x,copied:o,isSupported:p}=W(),{share:T,isSupported:h}=F(),m=E(!0),y=L(()=>{var k;return m.value?(k=n==null?void 0:n.safe)==null?void 0:k.enc:JSON.stringify(v.pair())}),f=L(()=>m.value?n.links.pass:n.links.pair),w=L(()=>Q({pub:v.pub,embed:y.value})),{savePng:D,saveLink:G,sharePng:j}=H(),A={Win:"Windows",Mac:"MacOS",Linux:"Linux"};return(k,e)=>{var R,N;return s(v).is?(a(),i("div",{class:"flex flex-col items-stretch pb-4 border-1 border-dark-100 border-opacity-10 max-w-120 mx-auto dark-bg-dark-200",key:s(v).is},[e[30]||(e[30]=t("div",{class:"mt-4 mx-6"},"Please make sure to safely store your cryptographic keypair to be able to use it again later",-1)),g(s(Y)),(N=(R=s(n))==null?void 0:R.safe)!=null&&N.enc?(a(),i("div",K,[t("div",{class:"flex flex-col w-34 items-center",style:V({color:m.value?"green":"red"})},[t("button",{class:"m-2 button text-2xl",onClick:e[0]||(e[0]=d=>m.value=!m.value)},[m.value?(a(),i("div",X)):(a(),i("div",Z))]),t("div",_,C(m.value?"Encrypted":"Plain Text"),1),e[14]||(e[14]=t("div",{class:"text-m"},"Key Pair",-1))],4),t("div",ee,[t("button",{class:b(["button items-center",{active:r.value=="key"}]),onClick:e[1]||(e[1]=d=>l("key"))},e[15]||(e[15]=[t("div",{class:"i-la-envelope-open-text"},null,-1),t("div",{class:"px-2"},"Text",-1)]),2),t("button",{class:b(["button items-center",{active:r.value=="link"}]),href:f.value,target:"_blank",onClick:e[2]||(e[2]=d=>l("link"))},e[16]||(e[16]=[t("div",{class:"i-la-link"},null,-1),t("div",{class:"px-2"},"Link",-1)]),10,te),t("button",{class:b(["button items-center",{active:r.value=="qr"}]),onClick:e[3]||(e[3]=d=>l("qr"))},e[17]||(e[17]=[t("div",{class:"i-la-qrcode"},null,-1),t("div",{class:"px-2"},"QR",-1)]),2),t("button",{class:b(["button items-center",{active:r.value=="png"}]),onClick:e[4]||(e[4]=d=>l("png"))},e[18]||(e[18]=[t("div",{class:"i-la-user-circle"},null,-1),t("div",{class:"px-2"},"PNG",-1)]),2)])])):c("",!0),r.value?(a(),i("div",se,[g(U,{name:"fade",mode:"out-in"},{default:P(()=>[r.value=="key"?(a(),i("div",ne,[t("div",le,[s(p)?(a(),i("button",{key:0,class:"button items-center",onClick:e[5]||(e[5]=d=>s(x)(y.value))},[e[19]||(e[19]=t("div",{class:"i-la-copy"},null,-1)),g(U,{name:"fade",mode:"out-in",appear:""},{default:P(()=>[s(o)?(a(),i("div",oe,"Copied!")):(a(),i("div",ie,"Copy"))]),_:1})])):c("",!0),s(h)?(a(),i("button",{key:1,class:b(["button items-center",{active:r.value=="pass"}]),onClick:e[6]||(e[6]=d=>s(T)({title:s(v).name||"Gun-Vue keypair",text:y.value}))},e[20]||(e[20]=[t("div",{class:"i-la-share"},null,-1),t("div",{class:"px-1"},"Share",-1)]),2)):c("",!0),t("button",{class:"button items-center",onClick:e[7]||(e[7]=d=>k.downloadJson(y.value))},e[21]||(e[21]=[t("div",{class:"i-la-download"},null,-1),t("div",{class:"px-2"},"Download",-1)]))]),t("div",ae,C(y.value),1)])):r.value=="png"?(a(),i("div",re,[t("div",ue,[t("button",{class:"button items-center",onClick:e[8]||(e[8]=d=>s(D)(w.value,s(v).name))},e[22]||(e[22]=[t("div",{class:"i-la-download"},null,-1),t("div",{class:"px-2"},"Download",-1)])),s(h)?(a(),i("button",{key:0,class:"button items-center",onClick:e[9]||(e[9]=d=>s(j)(w.value,s(v).name))},e[23]||(e[23]=[t("div",{class:"i-la-share"},null,-1),t("div",{class:"px-1"},"Share",-1)]))):c("",!0)]),t("img",{class:"cursor-pointer shadow-lg rounded-full hover-lightness-120 hover-shadow-2xl -hover-translate-y-1 transition active-translate-y-1",src:w.value,onClick:e[10]||(e[10]=d=>s(D)(w.value,s(v).name))},null,8,de),e[24]||(e[24]=t("div",{class:"text-sm op-50 text-center m-4 max-w-50"},"Click the image to download the PNG file with your key embedded. You can use to login later. ",-1))])):r.value=="link"?(a(),i("div",ve,[t("div",ce,[s(p)?(a(),i("button",{key:0,class:"button items-center",onClick:e[11]||(e[11]=d=>s(x)(f.value))},[e[25]||(e[25]=t("div",{class:"i-la-copy"},null,-1)),g(U,{name:"fade",mode:"out-in",appear:""},{default:P(()=>[s(o)?(a(),i("div",pe,"Copied!")):(a(),i("div",me,"Copy"))]),_:1})])):c("",!0),s(h)?(a(),i("button",{key:1,class:b(["button items-center",{active:r.value=="pass"}]),onClick:e[12]||(e[12]=d=>s(T)({title:s(v).name||"Gun-Vue Login link",text:f.value}))},e[26]||(e[26]=[t("div",{class:"i-la-share"},null,-1),t("div",{class:"px-1"},"Share",-1)]),2)):c("",!0),(a(),i(q,null,J(A,(d,B)=>t("button",{class:"button items-center",key:B,onClick:ge=>s(G)(f.value,B,s(v).name)},[e[27]||(e[27]=t("div",{class:"i-la-download"},null,-1)),t("div",xe,C(d),1)],8,ke)),64))]),t("a",{class:"m-2 button items-center break-all",href:f.value,target:"_blank",onClick:e[13]||(e[13]=d=>l("links"))},[e[28]||(e[28]=t("div",{class:"i-la-link"},null,-1)),t("div",be,C(f.value),1)],8,fe)])):r.value=="qr"?(a(),i("div",ye,[g(s(z),{class:"max-w-600px",data:m.value?s(n).links.pass:s(n).links.pair},null,8,["data"]),e[29]||(e[29]=t("div",{class:"text-sm op-50 text-center mx-4 max-w-80"},"Make a screenshot to save the QR code for logging in later.",-1))])):c("",!0)]),_:1})])):c("",!0),O(k.$slots,"default")])):c("",!0)}}};export{Se as default};
