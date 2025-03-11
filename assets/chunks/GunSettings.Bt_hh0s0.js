import{_ as R,p as d,ai as B,C as M,c as a,o,j as s,t as r,k as l,G as c,aD as x,aT as S,aE as w,e as f,w as b,F as C,B as _,N as F,n as O,T as k,b as z}from"./framework.Cn0LGHOD.js";import"./theme.D-sWVP0O.js";import{av as P,t as j,ax as E,az as n,aA as I,ay as A}from"./components.C0BSOouM.js";/* empty css                                                                     */const L="@gun-vue/app",W="0.24.0",q="module",H="https://gun-vue.js.org",J={type:"github",url:"https://github.com/sponsors/davay42"},K="davay42 <davay@defucc.me>",Q="MIT",X={type:"git",url:"https://github.com/DeFUCC/gun-vue",directory:"app"},Y={".":"./dist/app.js","./style.css":"./dist/style.css"},Z="./dist/app.js",ee="./dist/app.js",se=["/dist"],te="pnpm@9.15.4",le={"build-app":"vite build --emptyOutDir",build:"vite build --config vite.config.lib.js",deploy:"sh deploy.sh",dev:"vite --host",preview:"vite preview --host"},oe={vue:"3.5.13"},ae={"@unocss/reset":"66.1.0-beta.3","@vueuse/core":"13.0.0",ola:"1.2.1","vue-router":"4.5.0"},ne={"@unocss/extractor-pug":"66.1.0-beta.3","@vitejs/plugin-vue":"5.2.1","vite-plugin-singlefile":"2.2.0"},ie={name:L,version:W,type:q,homepage:H,funding:J,author:K,license:Q,repository:X,exports:Y,main:Z,module:ee,files:se,packageManager:te,scripts:le,peerDependencies:oe,dependencies:ae,devDependencies:ne},re={class:"flex relative p-4 flex-col items-stretch gap-4"},de={class:"p-0 flex items-center gap-2"},ue={class:"opacity-50 hover-op-100",href:"https://github.com/DeFUCC/gun-vue/releases",target:"_blank"},pe={class:"border-1 shadow-lg rounded-lg p-2 flex items-center gap-2"},ve={class:"flex flex-col border-1 shadow-lg rounded-lg"},ge={class:"p-2 flex items-center flex-wrap w-full gap-2"},ce={class:"flex flex-col px-2 pb-4"},fe={class:"flex items-center gap-2"},me={key:0,class:"text-sm"},xe={key:0,class:"i-la-angle-up"},be={key:1,class:"i-la-angle-down"},ke={key:0,class:"flex flex-col font-normal items-start"},ye=["onClick"],he={class:"flex-1 underline"},we={class:"font-bold"},Ce={class:"flex gap-2 flex-col border-1 shadow-lg rounded-lg p-1"},_e={class:"flex items-center gap-2 p-2 dark-bg-dark-400 bg-light-800 rounded"},je={class:"text-sm mt-1"},Te={key:0,class:"i-la-angle-up"},De={key:1,class:"i-la-angle-down"},Ge={key:0,class:"flex flex-col gap-2"},$e={class:"flex items-center gap-2"},Ve={class:"text-sm"},Ue=["onClick"],Ne={class:"flex flex-col border-1 shadow-lg rounded-lg overflow-hidden"},Re={class:"flex items-baseline gap-2 p-2 dark-bg-dark-400 bg-light-800 rounded"},Be={key:0,class:"i-la-angle-up"},Me={key:1,class:"i-la-angle-down"},Se={__name:"GunSettings",props:{text:{type:String,default:""}},setup(Fe){const{relay:u,setPeer:y,resetPeer:T}=P();d(!1);const{relays:m,loadRelays:D}=E();B({graph:!1,log:!1,share:!1});const i=d(""),G=()=>{i.value&&!n.value.includes(i.value)&&(n.value.push(i.value),i.value="")},$=h=>{const e=n.value.indexOf(h);e>-1&&n.value.splice(e,1)},p=d(!1),v=d(!1),g=d(!1);function V(){setTimeout(()=>{window.location.reload()})}return(h,e)=>{const U=M("ui-dark");return o(),a("div",re,[s("div",de,[e[12]||(e[12]=s("a",{class:"-mr-8",style:{background:"none !important"},href:"/",target:"_self"},[s("img",{class:"w-20 transition-all duration-500 ease-in-out",src:"https://gun-vue.js.org/media/gun-vue-logo.svg"})],-1)),e[13]||(e[13]=s("p",null,"Gun-Vue demo app",-1)),s("a",ue,"v."+r(l(ie).version),1),e[14]||(e[14]=s("a",{class:"opacity-50 hover-op-100",href:"https://gun-vue.js.org/basics/what-is.html",target:"_blank"},"Docs",-1)),e[15]||(e[15]=s("div",{class:"flex-auto"},null,-1)),s("button",{class:"button",onClick:e[0]||(e[0]=t=>V()),"aria-label":"refresh the page",title:"Refresh"},e[11]||(e[11]=[s("div",{class:"i-la-undo-alt"},null,-1)]))]),s("div",pe,[c(U,{class:"button"}),s("button",{class:"text-lg",onClick:e[1]||(e[1]=()=>{})},"Dark Mode"),e[16]||(e[16]=s("div",{class:"flex-auto"},null,-1)),x(s("input",{class:"mr-2",type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=t=>l(j).dark=t),switch:""},null,512),[[S,l(j).dark]])]),s("div",ve,[s("div",ge,[e[19]||(e[19]=s("div",{class:"i-carbon-bare-metal-server-01 text-lg -mt-1"},null,-1)),e[20]||(e[20]=s("div",{class:"text-lg"},"Relay ",-1)),x(s("input",{class:"p-2 rounded-lg flex-auto dark-bg-dark-800","onUpdate:modelValue":e[3]||(e[3]=t=>l(u).peer=t)},null,512),[[w,l(u).peer]]),s("button",{class:"button",onClick:e[4]||(e[4]=t=>l(y)(l(u).peer))},e[17]||(e[17]=[s("div",{class:"i-la-check"},null,-1)])),s("button",{class:"button",onClick:e[5]||(e[5]=t=>l(T)())},e[18]||(e[18]=[s("div",{class:"i-la-undo-alt"},null,-1)]))]),s("div",ce,[s("div",fe,[e[21]||(e[21]=s("div",{class:"text-lg text-left"},"Volunteer GUN relay peers",-1)),e[22]||(e[22]=s("a",{href:"https://github.com/amark/gun/wiki/volunteer.dht",target:"_blank"},[s("div",{class:"i-la-info-circle"})],-1)),Object.keys(l(m)).length?(o(),a("div",me,r(Object.keys(l(m)).length),1)):f("",!0),e[23]||(e[23]=s("div",{class:"flex-auto"},null,-1)),s("button",{class:"button",onClick:e[6]||(e[6]=t=>{v.value=!v.value,l(D)()})},[v.value?(o(),a("div",xe)):(o(),a("div",be))])]),c(k,{name:"fade",mode:"out-in",appear:""},{default:b(()=>[v.value?(o(),a("ul",ke,[(o(!0),a(C,null,_(l(m),t=>(o(),a("li",{class:O(["flex w-full text-left p-1 hover-bg-light-500 cursor-pointer hover-dark-bg-dark-600",{active:t.url==l(u).peer}]),key:t.host,style:F({order:t.ping}),onClick:N=>l(y)(t.url)},[s("div",he,r(t==null?void 0:t.host),1),s("div",we,r(t.ping)+" ms",1)],14,ye))),128))])):f("",!0)]),_:1})])]),s("div",Ce,[s("div",_e,[e[25]||(e[25]=s("div",{class:"i-la-network-wired text-lg"},null,-1)),e[26]||(e[26]=s("div",{class:"text-xl"},"Web-torrent trackers ",-1)),s("div",je,r(l(n).length),1),e[27]||(e[27]=s("div",{class:"flex-1"},null,-1)),s("button",{class:"button",onClick:e[7]||(e[7]=t=>n.value=l(I))},e[24]||(e[24]=[s("div",{class:"i-la-undo-alt"},null,-1)])),s("button",{class:"button",onClick:e[8]||(e[8]=t=>p.value=!p.value)},[p.value?(o(),a("div",Te)):(o(),a("div",De))])]),c(k,{name:"fade",mode:"out-in",appear:""},{default:b(()=>[p.value?(o(),a("div",Ge,[s("div",$e,[x(s("input",{class:"p-1 rounded flex-auto bg-light-100 dark-bg-dark-800 max-w-60","onUpdate:modelValue":e[9]||(e[9]=t=>i.value=t)},null,512),[[w,i.value]]),s("button",{class:"button",onClick:G},e[28]||(e[28]=[s("div",{class:"i-la-plus"},null,-1)]))]),(o(!0),a(C,null,_(l(n).toReversed(),t=>(o(),a("div",{class:"p-1 flex gap-2",key:t},[s("div",Ve,r(t),1),s("button",{onClick:N=>$(t)},e[29]||(e[29]=[s("div",{class:"i-la-times"},null,-1)]),8,Ue)]))),128))])):f("",!0)]),_:1})]),s("div",Ne,[s("div",Re,[e[30]||(e[30]=s("div",{class:"i-mdi-graph-outline"},null,-1)),e[31]||(e[31]=s("div",{class:"text-xl"},"GUN graph",-1)),e[32]||(e[32]=s("div",{class:"flex-1"},null,-1)),s("button",{class:"button",onClick:e[10]||(e[10]=t=>g.value=!g.value)},[g.value?(o(),a("div",Be)):(o(),a("div",Me))])]),c(k,{name:"fade",mode:"out-in",appear:""},{default:b(()=>[g.value?(o(),z(l(A),{key:0,class:"max-h-40vh overflow-y-scroll"})):f("",!0)]),_:1})])])}}},Ie=R(Se,[["__scopeId","data-v-95e6a5d3"]]);export{Ie as default};
