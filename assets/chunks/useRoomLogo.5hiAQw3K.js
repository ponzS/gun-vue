import{i as a,j as l,b2 as r,r as c}from"./components.D9Mx4r1X.js";import{p as i}from"./framework.Cn0LGHOD.js";function m(s=a.pub){const t=i(),u=l();u.user(s).get("profile").get("logo").once(o=>{if(!o){t.value=null;return}u.get("#logos").get(o).once(e=>{t.value=e})});async function g(o){if(o){const e=await c(o);u.get("#logos").get(e).put(o),r("logo",e)}else n()}function n(){r("logo",null)}return{logo:t,uploadLogo:g,removeLogo:n}}export{m as u};
