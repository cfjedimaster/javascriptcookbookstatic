---
layout: article
title: Get the current URL via JavaScript
published: 2013-08-15
author: 
sourceurl: 
tags: [misc]
id: 520c32a3c7480a5524000003
sesURL: Get-the-current-URL-via-JavaScript
moreinfo: https://developer.mozilla.org/en-US/docs/Web/API/document.URL
---

There's actually two different ways to get the current URL.  Both document.URL and document.location.href return the URL. However, if you wish to actually change the document's location, only document.location.href. If you only need to read the value, then document.URL is fine.

Note that if you wish to work with the various parts of the current location, inspect document.location. It has properties for things like the port, protocol, etc.

<pre><code class="language-javascript">var ourLocation = document.URL;
console.log(&quot;Currently at &quot; + ourLocation);</code></pre>
