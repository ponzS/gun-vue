import{_ as m,p as b,c as i,o as r,j as s,G as c,e as d,t as o,N as p,k as e,w as x,a as y,aD as _,aE as k}from"./framework.Cn0LGHOD.js";import{av as w,aw as g,af as C}from"./components.C0BSOouM.js";import"./theme.D-sWVP0O.js";const R={class:"cursor-pointer relative text-left"},D={key:0,class:"ml-2 font-bold"},N={key:0,class:"p-4 min-w-60vw max-w-full"},V={class:"flex flex-col items-start"},G={class:"p-0 flex items-center flex-wrap w-full"},S={key:0,class:"info"},$={class:"p-0"},h={class:"num p-0"},B={class:"num p-0"},P={class:"num p-0"},E={class:"p-0"},L={__name:"GunRelay",props:{text:{type:String,default:""}},setup(u){const{relay:l,setPeer:v,resetPeer:f}=w(),n=b(!1);return(T,t)=>(r(),i("div",R,[s("button",{class:"flex",onClick:t[0]||(t[0]=a=>n.value=!0)},[t[5]||(t[5]=s("div",{class:"i-carbon-bare-metal-server-01 text-xl -mt-1"},null,-1)),u.text?(r(),i("div",D,o(u.text),1)):d("",!0),s("div",{class:"p-1 bottom-0 left-2 rounded-full transition duration-300ms ease-in-out opacity-50 absolute",style:p({backgroundColor:e(l).blink?"white":"black"})},null,4)]),c(e(C),{open:n.value,onClose:t[4]||(t[4]=a=>n.value=!1)},{default:x(()=>[n.value?d("",!0):(r(),i("div",N,[s("div",{class:"h-2 w-full mb-2 rounded-full transition-all duration-300 ease-in-out opacity-40",style:p({backgroundColor:e(l).blink?"white":"black"})},null,4),s("div",V,[s("div",G,[t[6]||(t[6]=y(" Host: ")),_(s("input",{class:"mx-1 p-2 rounded-lg flex-auto dark-bg-dark-800","onUpdate:modelValue":t[1]||(t[1]=a=>e(l).peer=a)},null,512),[[k,e(l).peer]]),s("button",{class:"button m-1",onClick:t[2]||(t[2]=a=>e(v)(e(l).peer))},"Set"),s("button",{class:"button m-1",onClick:t[3]||(t[3]=a=>e(f)())},"Reset")]),e(l).status!="offline"?(r(),i("div",S,[s("div",$,"Relay server is "+o(e(l).status)+" for "+o(e(l).age),1),s("div",h,"Delay: "+o(e(l).delay)+" ms",1),s("div",B,"Pulse drift: "+o(e(l).lag)+" ms",1),s("div",P,"Active wires: "+o(e(l).activeWires)+" / "+o(e(l).totalConnections),1),s("div",E,"Data storage is "+o(e(l).store?"enabled":"disabled"),1)])):d("",!0)]),c(e(g))]))]),_:1},8,["open"])]))}},A=m(L,[["__scopeId","data-v-b4926c64"]]);export{A as default};
