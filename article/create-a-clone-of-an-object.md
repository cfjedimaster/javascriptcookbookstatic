---
layout: article
title: Create a clone of an object.
published: 2013-06-29
author: Don Burks
sourceurl: 
tags: [object]
id: 51ce022de2fc093528000005
sesURL: Create-a-clone-of-an-object
moreinfo: 
---

While there are various ways to clone an object, this one is extremely consistent and also performs well on jsperf tests. However, please note that this technique with &quot;plain objects&quot; (ones that inherit directly from Object.prototype). See the comments for further discussion.

<pre><code class="language-javascript">function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}</code></pre>