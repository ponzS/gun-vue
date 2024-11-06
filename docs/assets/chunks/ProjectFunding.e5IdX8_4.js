import{o as t,c as o,j as n,F as u,k as s,b as m,C as b,t as c,w as C,aC as w,aT as B,e as v}from"./framework.BhkIoD7n.js";import{a as j,aK as F,m as $,ad as S}from"./components.uLkgiBox.js";import{a as G}from"./useGifts.D91d76ZM.js";import"./theme.CY_Hf4tR.js";import"./composables.BEPdKJiS.js";const P={class:"flex flex-col"},D={class:"text-xl my-4 p-2 flex items-center"},E={key:1,class:"text-xs"},V={key:0,class:"p-2 flex flex-col gap-4"},_={class:"p-2 w-full flex items-center gap-2"},A={class:"text-xl font-bold"},K={class:"text-xl"},L={class:"flex flex-wrap gap-2"},T={class:"mr-2"},Q={__name:"ProjectFunding",props:{path:{type:String,default:""},enabled:{type:Boolean,default:!1}},emits:["enable","gift","open"],setup(l,{emit:U}){const h=l,{gifts:z,collections:x}=G(h.path),{user:i}=j();return(f,e)=>(t(),o("div",P,[n("div",D,[e[2]||(e[2]=n("div",{class:"font-bold"},"Project funding",-1)),e[3]||(e[3]=n("div",{class:"flex-1"},null,-1)),l.enabled?(t(),m(s(F),{key:1,gift:{project:l.path,to:l.path.slice(-87)},onSent:e[1]||(e[1]=a=>f.$emit("gift",a))},null,8,["gift"])):(t(),o(u,{key:0},[l.path.includes(s(i).pub)?(t(),o("button",{key:0,class:"button",onClick:e[0]||(e[0]=a=>f.$emit("enable"))},"Enable Funding")):(t(),o("div",E,"Funding not yet enabled by the author"))],64))]),l.enabled?(t(),o("div",V,[(t(!0),o(u,null,b(s(x),(a,p)=>{var g,y,k;return t(),o("div",{class:"flex flex-col gap-2 p-2 bg-dark-50 rounded-xl bg-opacity-10 shadow-xl",key:a},[n("div",_,[n("div",A,c(a.sum),1),n("div",K,c(p),1),e[4]||(e[4]=n("div",{class:"opacity-50"},"by",-1)),n("div",L,[(t(!0),o(u,null,b(a.from,(r,d)=>(t(),m(s($),{key:r,pub:d},{default:C(()=>[n("div",T,c(r)+" "+c(p),1)]),_:2},1032,["pub"]))),128))])]),(k=(y=(g=s(x))==null?void 0:g[p])==null?void 0:y.from)!=null&&k[s(i).pub]||l.path.includes(s(i).pub)?(t(!0),o(u,{key:0},b(a.list,(r,d)=>w((t(),m(s(S),{class:"cursor-pointer",key:d,hash:d,onClick:H=>f.$emit("open",d)},null,8,["hash","onClick"])),[[B,r.from==s(i).pub||r.to==s(i).pub]])),128)):v("",!0)])}),128))])):v("",!0)]))}};export{Q as default};
