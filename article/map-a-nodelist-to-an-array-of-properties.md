---
layout: article
title: Map a NodeList to an array of properties.
published: 2013-06-27
author: n1k0
sourceurl: 
tags: [array]
id: 51cc28f2e2fc093528000003
sesURL: Map-a-NodeList-to-an-array-of-properties
moreinfo: 
---

The NodeList type does not implement the useful bits of the Array interface. This code essentially recreates the list into a regular array.

<pre><code class="language-javascript">var nodes = document.querySelectorAll('a');
var urls = [].map.call(nodes, function(node) {
    return node.href;
});
</code></pre>
