import{i as v,h as $,as as P,aC as h}from"./components.CRAO-38e.js";import{a as y,b as x,u as M}from"./useZip.DoVI34WP.js";import{p as Z}from"./useMd.CtKUW1Jd.js";import{ah as w,h as b,p as k,b2 as A}from"./framework.DRT7JCoy.js";function G(i){if(!i)return;const l=v(),e=w({}),o=w({});l.user($.pub).get("posts").map().on(function(t,n){let a=n.indexOf(i);if(a==-1)return;let c=n.slice(-87),r=n.slice(0,44),p=n.slice(45,89);a==0?(e[p]=e[p]||{},e[p][c]=t):(o[r]=o[r]||{},o[r][c]=t)});const u=b(()=>{let t=0;for(let n in e)t:for(let a in e[n])if(e[n][a]){t++;break t}return t}),f=b(()=>{let t=0;for(let n in o)t:for(let a in o[n])if(o[n][a]){t++;break t}return t}),s=k(!1);async function d(){s.value=!0,s.value=!await E(i,e)}function m(t){F(i,t)}return{posts:e,backlinks:o,countPosts:u,countBacklinks:f,downloadPosts:d,downloading:s,uploadPosts:m}}async function E(i,l){if(!l)return;const{zipPost:e,downloadZip:o}=x(),u=A({});for(let f in l){const{post:s}=M({hash:f});u[f]=s,s.title&&await e(s)}return await o({title:`#${i}`}),!0}function F(i,l){Array.from(l).forEach(async e=>{const o=await P.loadAsync(e);o.comment&&console.info("Zip file comment: "+o.comment),o.forEach(async(u,f)=>{var s;if(u.endsWith("index.md")){let d=u.slice(0,-9),m=await f.async("string"),{frontmatter:t,content:n}=Z(m);if(t=t||{},t.title=(t==null?void 0:t.title)||d,t.icon){const c=await o.file(`${d}/${t.icon}`).async("base64"),r=h(c);t.icon=`data:${r};base64,${c}`}if(t.cover){const c=await((s=o==null?void 0:o.file(`${d}/${t.cover}`))==null?void 0:s.async("base64")),r=h(c);t.cover=`data:${r};base64,${c}`}let a={...t,content:n};y(i,a)}})})}export{G as u};
