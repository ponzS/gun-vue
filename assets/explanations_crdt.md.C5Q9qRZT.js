import{_ as a,c as t,o as s,ag as i}from"./chunks/framework.BN2VI_cg.js";const u=JSON.parse('{"title":"Conflict-Free Replicated Data Types (CRDTs)","description":"","frontmatter":{},"headers":[],"relativePath":"explanations/crdt.md","filePath":"explanations/crdt.md"}'),n={name:"explanations/crdt.md"};function r(o,e,l,h,p,c){return s(),t("div",null,e[0]||(e[0]=[i(`<h1 id="conflict-free-replicated-data-types-crdts" tabindex="-1">Conflict-Free Replicated Data Types (CRDTs) <a class="header-anchor" href="#conflict-free-replicated-data-types-crdts" aria-label="Permalink to &quot;Conflict-Free Replicated Data Types (CRDTs)&quot;">​</a></h1><p>A <strong>CRDT (Conflict-Free Replicated Data Type)</strong> is a type of data structure designed for distributed systems, allowing multiple users or systems to update data simultaneously without conflicts. CRDTs ensure that all replicas of the data eventually converge to the same state, regardless of the order of updates, <strong>without requiring coordination like locks or central servers</strong>.</p><h2 id="benefits-of-crdts" tabindex="-1">Benefits of CRDTs <a class="header-anchor" href="#benefits-of-crdts" aria-label="Permalink to &quot;Benefits of CRDTs&quot;">​</a></h2><ul><li><strong>Offline &amp; Distributed Editing</strong> – Users can make changes offline, and their updates will sync correctly when they reconnect.</li><li><strong>Automatic Conflict Resolution</strong> – Merges updates automatically without requiring manual intervention.</li><li><strong>Scalability</strong> – Works efficiently in applications where many users update data at the same time.</li><li><strong>Strong Consistency Guarantees</strong> – Ensures that all users eventually see the same data without complex synchronization mechanisms.</li></ul><p>For more details, see the <a href="https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type" target="_blank" rel="noreferrer">Wikipedia page on CRDTs</a>.</p><p>The conflict resolution algorithm (also called HAM) is at the center of everything gun does. It&#39;s how peers eventually arrive at the same state, and how offline edits are merged. Every change in the system goes through HAM.</p><p>Before reading this, we recommend you read through this tech talk, which <a href="https://gun.eco/distributed/matters.html" target="_blank" rel="noreferrer">explains the high level concepts in easy to understand</a> terms. Also, check out the primer on our <a href="./CAP-Theorem.html">CAP Theorem</a> tradeoffs.</p><p>Finally, for those of you who know of Kyle Kingsbury (Aphyr), here are <a href="https://twitter.com/aphyr/status/646302398575587332" target="_blank" rel="noreferrer">some good tweets about us</a> from him. We are building out Jepsen tests with <a href="https://github.com/gundb/panic-server" target="_blank" rel="noreferrer">PANIC</a>, our distributed testing framework.</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><p>These are the constraints HAM operates under.</p><h3 id="offline-first" tabindex="-1">Offline-First <a class="header-anchor" href="#offline-first" aria-label="Permalink to &quot;Offline-First&quot;">​</a></h3><p>Favor high-availability over strong consistency, allowing users to make edits even when the machine is entirely offline (like a cellphone user without a network connection). This immediately rules out group consensus algorithms like <a href="https://en.wikipedia.org/wiki/Paxos_(computer_science)" target="_blank" rel="noreferrer">Paxos</a> or <a href="https://raft.github.io/" target="_blank" rel="noreferrer">Raft</a>.</p><h3 id="ordering" tabindex="-1">Ordering <a class="header-anchor" href="#ordering" aria-label="Permalink to &quot;Ordering&quot;">​</a></h3><p>The same state should be reached regardless of what order updates arrive in (update commutativity).</p><h3 id="conflict-handling" tabindex="-1">Conflict Handling <a class="header-anchor" href="#conflict-handling" aria-label="Permalink to &quot;Conflict Handling&quot;">​</a></h3><p>When merge conflicts happen, every machine should independently choose the same value (Strong Eventual Consistency).</p><p><a href="https://youtu.be/neqz5t4FSJI" target="_blank" title="GUN"><img src="http://img.youtube.com/vi/neqz5t4FSJI/0.jpg" width="425px"></a><br></p><h2 id="implementation" tabindex="-1">Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;Implementation&quot;">​</a></h2><p>Ultimately, we want to accept an update and merge it into our own data. Since gun&#39;s data structure is graph-oriented, updates will be in graph-format.</p><p>Because graphs only contain nodes, and nodes only contain key-value pairs, if we know how to merge key-value pairs, we can merge nodes, and in turn we can merge graphs. This means we&#39;ll focus on merging key-value pairs.</p><p>A key-value pair is atomic to HAM, meaning it won&#39;t try to merge primitives together, it&#39;ll just choose which to keep. Choosing is the tricky part, and requires an extra bit of metadata, called <code>state</code>. State is used to determine ordering of updates, and is always relative to the machine which receives it (including the machine creating the update).</p><p>Let&#39;s consider an example:</p><p>We have a node with one property, <code>&quot;name&quot;</code>, a value of <code>&quot;Alice&quot;</code>, and a state of <code>10</code>.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>We get an update that lists &quot;alice&quot; as <code>&quot;Allison&quot;</code> and state as <code>8</code>. Since the update state is less than our current state, we list it as only historically important, and don&#39;t include it in our data.</p><blockquote><p>Unless you&#39;re using a journaling plugin, historical updates are ignored.</p></blockquote><p>There&#39;s a bit more nuance to updates with greater state, so we&#39;ll discuss that in a bit. The next obvious question is what happens when we get an update with the same state as us, <em>but with a conflicting value?</em></p><h3 id="conflicts" tabindex="-1">Conflicts <a class="header-anchor" href="#conflicts" aria-label="Permalink to &quot;Conflicts&quot;">​</a></h3><p>Well, according to the goals we listed, <strong>it doesn&#39;t matter</strong> what value we choose, so long as everyone chooses it. We just need to be consistent. Another advantage is that gun supports a subset of JSON, so we only need to handle conflicts in that subset.</p><p>This allows us to define some simple rules that guarantee convergence, mostly through type and lexical comparisons. Here is a layman explanation, followed by more details:</p><blockquote><p><strong>NOTE: Lexical sort is only used if there is a conflict on the exact same value at the exact same time.</strong></p></blockquote><p><a href="https://youtu.be/qKIn9L2obug" target="_blank" title="GUN map"><img src="http://img.youtube.com/vi/c80vSf45H4k/0.jpg" width="425px"></a><br></p><h5 id="both-are-lexically-equal" tabindex="-1">Both are lexically equal <a class="header-anchor" href="#both-are-lexically-equal" aria-label="Permalink to &quot;Both are lexically equal&quot;">​</a></h5><p>Then there&#39;s no conflict, it doesn&#39;t matter which you choose.</p><h5 id="they-are-lexically-unequal" tabindex="-1">They are lexically unequal <a class="header-anchor" href="#they-are-lexically-unequal" aria-label="Permalink to &quot;They are lexically unequal&quot;">​</a></h5><p>Compare their string values with <code>JSON.stringify</code>, choosing the greater of the two.</p><h3 id="states" tabindex="-1">States <a class="header-anchor" href="#states" aria-label="Permalink to &quot;States&quot;">​</a></h3><p>This is dangerous territory, and if handled wrong can expose crippling application vulnerabilities. For example, a devious user submits an update with a state of 10 zillion. Now, no one gets to write until their state reaches 10 zillion plus 1.</p><p>That&#39;s generally frowned on. Check out this layman explainer:</p><p><a href="https://youtu.be/UBnkhpcLQuM" target="_blank" title="GUN map"><img src="http://img.youtube.com/vi/UBnkhpcLQuM/0.jpg" width="425px"></a><br></p><p>HAM handles this with machine relative vector. When the &quot;10 zillion&quot; update comes in, HAM simply waits until your machine reaches the state of 10 zillion before acknowledging it&#39;s existence. If an update isn&#39;t acknowledged, it never escapes volatile memory onto disk. We call this a deferred update.</p><p>This is good, because if no other machines have reached that state, the attacker will have no advantage over any other machine in the system. Their update intentionally remains volatile, giving the attacker only two options - retry with a non-malicious state that is closer to other machines, or bare the responsibility of keeping the update safe themselves until other machines catch up.</p><p>It turns out this vector can be calculated for any linear value. Numbers, decimals, alphabets, or even with timestamps - which should sound scary. Timestamps <a href="https://aphyr.com/posts/299-the-trouble-with-timestamps" target="_blank" rel="noreferrer">are dangerous</a>, since:</p><ul><li>System time doesn&#39;t always move forward (NTP corrections).</li><li>Clock synchronization isn&#39;t always reliable.</li><li>Some clocks move faster than others.</li><li>Your system time might be off by any amount (especially when considering user meddling).</li></ul><p>One of the constraints with HAM is that synchronization algorithms should not be required, including <a href="https://en.wikipedia.org/wiki/Network_Time_Protocol" target="_blank" rel="noreferrer">NTP</a> and it&#39;s variants, so accurate clocks can never be assumed.</p><p>Luckily, HAM doesn&#39;t care if your clock is accurate. It only cares about <em>machine relative</em> ordering, and whether an update should be part of history, current state, or ignored until some point in the future. For a layman explanation of this, check this video out:</p><p><a href="https://youtu.be/gRoJqzko_mE" target="_blank" title="GUN map"><img src="http://img.youtube.com/vi/gRoJqzko_mE/0.jpg" width="425px"></a><br></p><h3 id="state-boundaries" tabindex="-1">State Boundaries <a class="header-anchor" href="#state-boundaries" aria-label="Permalink to &quot;State Boundaries&quot;">​</a></h3><p>Each value is compared to the state of the last update and the state of your device&#39;s current loose clock.</p><p>Back to our <code>username</code> example:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Say your system clock is at state <code>15</code>.</p><blockquote><p>We&#39;re using smaller numbers than <code>Date.now()</code> because they&#39;re easier to mentally compare and reason about, but they have the same mathematical properties.</p></blockquote><h4 id="historical-state" tabindex="-1">Historical State <a class="header-anchor" href="#historical-state" aria-label="Permalink to &quot;Historical State&quot;">​</a></h4><p>Any update with a state less than the last update (<code>10</code>) is considered stale and no longer relevant - if wanted, it can be journaled.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This update is too old.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> update </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	name: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Allison&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		state: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h4 id="operating-state" tabindex="-1">Operating State <a class="header-anchor" href="#operating-state" aria-label="Permalink to &quot;Operating State&quot;">​</a></h4><p>Any update with state greater than the last update (<code>10</code>), yet less than your process state (<code>15</code>) is immediately merged. The state of the last update now becomes what we just merged to (<code>12</code>).</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Sweet spot!</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This will be merged.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> update </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	name: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Alicia&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		state: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h4 id="deferred-state" tabindex="-1">Deferred State <a class="header-anchor" href="#deferred-state" aria-label="Permalink to &quot;Deferred State&quot;">​</a></h4><p>Any update with a state greater than your system clock (<code>15</code>) is considered deferred, and won&#39;t be processed until your clock reaches that point. The further it is into the future, the larger vector it has in terms of distance before being processed.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Nope, ignore this until the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// clock reaches state \`22\`.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> update </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	name: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Ally&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		state: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="applying-it" tabindex="-1">Applying It <a class="header-anchor" href="#applying-it" aria-label="Permalink to &quot;Applying It&quot;">​</a></h3><p>Merging two nodes can be done by iterating over each field of an update, and deciding which field to choose: the one you already have, or the one proposed by the update.</p><p>If an update node has a field that the source object doesn&#39;t, the source node&#39;s field state is assumed to be <code>-Infinity</code>, meaning you always add that new field.</p><p>The same process can be repeated for graphs, iterating over each node in an update graph and merging it with the source.</p><p>You can find the HAM implementation in <a href="https://github.com/amark/gun/blob/master/gun.js" target="_blank" rel="noreferrer"><code>gun.js</code></a> under the name <code>function HAM</code>.</p><h3 id="considerations" tabindex="-1">Considerations <a class="header-anchor" href="#considerations" aria-label="Permalink to &quot;Considerations&quot;">​</a></h3><p>HAM doesn&#39;t guarantee multi-process linearizability because in highly-available systems, you don&#39;t know when all updates have finished network propagation. Instead, it guarantees Strong Eventual Consistency (SEC). If linearizability is necessary, either use a consensus system like <a href="http://research.microsoft.com/en-us/um/people/lamport/pubs/paxos-simple.pdf" target="_blank" rel="noreferrer">Paxos</a> (sacrificing availability), or explicitly build it into your data using linked lists, directed acyclic graphs (DAGs), or others.</p><ul><li>No Strong Consistency, linearizability, or serializability.</li><li>Vulnerable to the <a href="https://en.wikipedia.org/wiki/Double-spending" target="_blank" rel="noreferrer">Double Spending problem</a>.</li></ul><h2 id="questions" tabindex="-1">Questions <a class="header-anchor" href="#questions" aria-label="Permalink to &quot;Questions&quot;">​</a></h2><p>If you want more information about how the conflict engine works, you can message us <a href="http://gitter.im/amark/gun/" target="_blank" rel="noreferrer">on Gitter</a> or post a question on Stack Overflow with the <code>#gun</code> tag.</p><h2 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;Further Reading&quot;">​</a></h2><ul><li><a href="https://github.com/amark/gun/wiki/CAP-Theorem" target="_blank" rel="noreferrer">Where gun stands</a> on the CAP theorem.</li><li>Some challenges to <a href="http://codedependents.com/2014/01/13/mathematical-purity-in-distributed-systems-crdts-without-fear/" target="_blank" rel="noreferrer">distributed operations</a>.</li><li><a href="http://highscalability.com/blog/2013/5/1/myth-eric-brewer-on-why-banks-are-base-not-acid-availability.html" target="_blank" rel="noreferrer">Why banks are not ACID</a>.</li><li><a href="https://aphyr.com/posts/299-the-trouble-with-timestamps" target="_blank" rel="noreferrer">Concerns about timestamps</a> (Aphyr).</li><li><a href="http://stackoverflow.com/questions/29381442/eventual-consistency-vs-strong-eventual-consistency-vs-strong-consistency" target="_blank" rel="noreferrer">Eventual Consistency vs Strong Eventual Consistency vs Strong Consistency</a>.</li></ul><p>Again, we strongly recommend you check out the <a href="https://gun.eco/distributed/matters.html" target="_blank" rel="noreferrer">tech talk</a>.</p>`,75)]))}const k=a(n,[["render",r]]);export{u as __pageData,k as default};
