import{c as t,o as s,j as l,b as d,e as f,k as e,w as g,a0 as v}from"./framework.BfubPTv1.js";import{h as _,aO as b,a as k,aP as x,ax as h}from"./components.BOfiGZ0e.js";import"./theme.BXkzN2VE.js";const y={class:"flex flex-col relative items-center justify-center"},R=["src"],B={class:"text-2xl"},L={key:0,class:"i-la-camera"},z={__name:"RoomLogo",props:{pub:{type:String,default:_.pub},size:{type:Number,default:120},pic:{type:Number,default:200}},setup(u){const{room:c,updateRoomProfile:N}=b(),{user:n}=k(),a=u,{logo:r,uploadLogo:p,removeLogo:m}=x(a.pub);return(j,o)=>(s(),t("div",y,[l("img",{src:e(r)||"https://gun-vue.js.org/media/gun-vue-logo.svg"},null,8,R),e(c).hosts[e(n).pub]?(s(),d(e(h),{key:0,class:"absolute",options:{picSize:a.pic,preserveRatio:!1},onUpdate:o[1]||(o[1]=i=>e(p)(i))},{default:g(()=>[l("div",B,[e(r)?(s(),t("div",{key:1,class:"i-la-trash-alt",onClick:o[0]||(o[0]=v(i=>e(m)(),["stop","prevent"]))})):(s(),t("div",L))])]),_:1},8,["options"])):f("",!0)]))}};export{z as default};
