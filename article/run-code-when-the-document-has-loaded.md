---
layout: article
title: Run code when the document has loaded.
published: 2013-06-20
author: 
sourceurl: 
tags: [event]
id: 51bf26be63f3b5af6a000001
sesURL: Run-code-when-the-document-has-loaded
moreinfo: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/DOMContentLoaded
---

Most popular JavaScript frameworks make it easy to run code when the document is loaded. But if you aren't using a framework, you can simply listen for the DOMContentLoaded event instead. 

This event is fired when the document's HTML is loaded and parsed, but before any stylesheets or images may be loaded.

<pre><code class="language-javascript">document.addEventListener(&quot;DOMContentLoaded&quot;, init, false);

function init() {
     console.log(&quot;init&quot;);

 }</code></pre>
