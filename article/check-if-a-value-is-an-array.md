---
layout: article
title: Check if a value is an array
published: 2014-10-23
author: Maciek
sourceurl: 
tags: array
id: 544970b682f286f555000001
sesURL: Check-if-a-value-is-an-array
moreinfo: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
---

The simplest way to check if an object is an array (using ECMAScript 5 and higher) is the Array.isArray method.

<pre><code class="language-javascript">var x = [1,2,3];
var y = &quot;something else entirely&quot;;

console.log(Array.isArray(x)); // returns true
console.log(Array.isArray(y)); // returns false
</code></pre>
