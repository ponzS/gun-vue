import{R as g,U as c,j as l}from"./components.C0BSOouM.js";import{ai as m,p as u}from"./framework.Cn0LGHOD.js";function k(e){e||(e=c.pub);const s=m({}),n=l();return n.user(e).get("mates").map().once((t,o)=>{if(t){const i={emoji:a(t),text:t};s[o]=i,n.user(o).get("mates").get(e).on(r=>{r?s[o].back=a(r):delete s[o].back})}else delete s[o]}),s}function a(e,s="👋"){if(!e||typeof e!="string")return"";let n=g.break(e)[0];return p(n)?n:s}function p(e){return new RegExp("\\p{Extended_Pictographic}","u").test(e)}function E(e){var i,r;const s=u("👋"),n=u(!1),t=(r=(i=c)==null?void 0:i.db)==null?void 0:r.get("mates").get(e);t==null||t.on(f=>{n.value=a(f)});function o(){t==null||t.put(n.value?!1:a(s.value))}return{emoji:s,isMate:n,toggleMate:o}}export{k as a,a as g,p as i,E as u};
