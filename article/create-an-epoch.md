---
layout: article
title: Generate an epoch.
published: 2013-06-28
author: Don Burks
sourceurl: 
tags: [date]
id: 51ccdf57e2fc093528000004
sesURL: Generate-an-epoch
moreinfo: 
---

Javascript's Date Object always works in milliseconds, but most date/time code works on unix epochs. This is just a quickie one-off function designed to give you an epoch to work with.


<pre><code class="language-javascript">function timestamp() {
    return Math.round(Date.now() / 1000);
}</code></pre>
