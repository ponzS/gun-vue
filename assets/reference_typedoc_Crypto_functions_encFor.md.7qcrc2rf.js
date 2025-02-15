import{_ as r,c as t,o as a,ag as o}from"./chunks/framework.DRT7JCoy.js";const u=JSON.parse('{"title":"Function: encFor()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/typedoc/Crypto/functions/encFor.md","filePath":"reference/typedoc/Crypto/functions/encFor.md"}'),n={name:"reference/typedoc/Crypto/functions/encFor.md"};function c(d,e,i,s,p,l){return a(),t("div",null,e[0]||(e[0]=[o('<p><a href="./../../README.html"><strong>Gun-Vue docs v0.22.0</strong></a></p><hr><p><a href="./../../modules.html">Gun-Vue docs</a> / <a href="./../README.html">Crypto</a> / encFor</p><h1 id="function-encfor" tabindex="-1">Function: encFor() <a class="header-anchor" href="#function-encfor" aria-label="Permalink to &quot;Function: encFor()&quot;">​</a></h1><blockquote><p><strong>encFor</strong>(<code>data</code>, <code>sender</code>, <code>receiver</code>): <code>Promise</code>&lt;<code>string</code>&gt;</p></blockquote><p>Defined in: <a href="https://github.com/DeFUCC/gun-vue/blob/284d636b7d1979d8b177f4da0a36aa9170e381db/src/crypto/useCrypto.js#L37" target="_blank" rel="noreferrer">src/crypto/useCrypto.js:37</a></p><p>Encrypts data for one receiver entity.</p><ol><li>Generates encryption secret using receiver&#39;s epub and sender&#39;s pair.</li><li>Encrypts data with this secret.</li></ol><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="data" tabindex="-1">data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;data&quot;">​</a></h3><p><code>string</code></p><p>Stringified data to be encrypted.</p><h3 id="sender" tabindex="-1">sender <a class="header-anchor" href="#sender" aria-label="Permalink to &quot;sender&quot;">​</a></h3><p><code>any</code></p><p>SEA Pair of the sender – <code>epriv</code> key will be used to encrypt the data.</p><h3 id="receiver" tabindex="-1">receiver <a class="header-anchor" href="#receiver" aria-label="Permalink to &quot;receiver&quot;">​</a></h3><p><a href="./../interfaces/Entity.html"><code>Entity</code></a></p><p>An object with <code>pub</code> and <code>epub</code> strings - the user.is object of the receiver&#39;s account.</p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Promise</code>&lt;<code>string</code>&gt;</p><ul><li>Encrypted data string to be sent.</li></ul>',21)]))}const f=r(n,[["render",c]]);export{u as __pageData,f as default};
