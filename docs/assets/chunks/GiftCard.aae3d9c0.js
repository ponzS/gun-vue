import{x as p,f as B,e as t,o as l,c as a,E as e,M as f,t as i,L as x,H as _,r as G,I as c,F as y,a5 as v}from"./framework.088f8093.js";import{a as D,m as O,ac as R,n as E,ad as L,ae as b,k,I as M,af as m}from"./components.42f69420.js";import"../app.a6246997.js";import"./theme.f9063172.js";const N={class:"flex flex-wrap gap-2 items-center px-2"},P={class:"flex-0 flex flex-wrap px-2 gap-2"},T={class:"flex flex-col"},V={class:"text-xl font-bold"},q={class:"flex flex-col"},A={class:"text-lg font-bold"},F={class:"flex items-center gap-2 flex-0"},I={class:"flex flex-col gap-2 text-xs"},z=e("div",{class:"i-la-arrow-right m-2"},null,-1),H={class:"flex flex-col gap-2 text-xs"},J={class:"flex gap-2 flex-wrap"},U={key:0,class:"flex flex-col gap-1"},K=e("div",{class:"text-xs"},"ROOM ",-1),Q={class:"p-0"},W={key:1,class:"flex flex-col gap-1"},X={class:"text-xs"},Y={class:"p-0"},Z={key:2,class:"flex flex-col gap-1"},tt=e("div",{class:"text-xs"},"PROJECT",-1),et={class:"flex flex-1 gap-2 p-2 items-center flex-wrap leading-tight text-xs",style:{flex:"1 1 20%"}},st={class:"flex gap-2"},it={__name:"GiftCard",props:{hash:{type:String,default:""}},emits:["project"],setup(r,{emit:ot}){const w=r,{user:h}=D(),C=O(),{gift:s,state:n}=R(w.hash),j=p(()=>new Date(s.date).toLocaleTimeString("en-GB")),S=p(()=>new Date(s.date).toLocaleDateString("en-GB")),$=p(()=>{const u=B();return E().user(s.room).get("profile").get("name").on(d=>u.value=d),u.value}),{project:g}=L(p(()=>s.project));return(u,o)=>Object.keys(t(s)).length>0?(l(),a("div",{key:0,class:"flex p-0 rounded-xl shadow-lg border-2 relative overflow-hidden",style:f({opacity:t(n).complete?1:.5})},[e("div",{class:"w-3 min-w-3 h-full flex-0",style:f({backgroundColor:t(C).hex(r.hash)})},null,4),e("div",N,[e("div",P,[e("div",T,[e("div",V,i(t(s).qn),1)]),e("div",q,[e("div",A,i(t(s).ql),1)])]),e("div",F,[e("div",I,[x(t(k),{pub:t(s).from,style:f({opacity:t(n).from?1:.4})},{default:_(()=>[x(t(b),{class:"mr-2",state:t(n).from},null,8,["state"])]),_:1},8,["pub","style"])]),z,e("div",H,[x(t(k),{pub:t(s).to,style:f({opacity:t(n).to?1:.4})},{default:_(()=>[x(t(b),{class:"mr-2",state:t(n).to},null,8,["state"])]),_:1},8,["pub","style"])])]),G(u.$slots,"default"),e("div",J,[t(s).room!=t(M).pub?(l(),a("div",U,[K,e("div",Q,i($.value),1)])):c("",!0),t(s).date?(l(),a("div",W,[e("div",X,i(S.value),1),e("div",Y,i(j.value),1)])):c("",!0),t(s).project?(l(),a("div",Z,[tt,e("div",{class:"py-1 px-2 rounded-lg text-sm",style:f({backgroundColor:t(g).color}),onClick:o[0]||(o[0]=d=>u.$emit("project",t(s).project))},i(t(g).title),5)])):c("",!0),e("div",et,i(t(s).wish),1)]),e("div",st,[t(s).from==t(h).pub?(l(),a(y,{key:0},[t(n).from?(l(),a("button",{key:1,class:"button",onClick:o[2]||(o[2]=v(d=>t(m)(r.hash,!1),["stop","prevent"]))},"Cancel")):(l(),a("button",{key:0,class:"button",onClick:o[1]||(o[1]=v(d=>t(m)(r.hash,!0),["stop","prevent"]))},"Propose"))],64)):c("",!0),t(s).to==t(h).pub?(l(),a(y,{key:1},[t(n).to?c("",!0):(l(),a("button",{key:0,class:"button",onClick:o[3]||(o[3]=v(d=>t(m)(r.hash,!0),["stop","prevent"]))},"Accept")),t(n).to?(l(),a("button",{key:1,class:"button",onClick:o[4]||(o[4]=v(d=>t(m)(r.hash,!1),["stop","prevent"]))},"Reject")):c("",!0)],64)):c("",!0)])])],4)):c("",!0)}};export{it as default};
