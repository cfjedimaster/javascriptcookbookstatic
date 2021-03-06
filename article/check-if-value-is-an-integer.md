---
layout: article
title: Check if a value is an integer
published: 2014-05-27
author: Dr. Axel Rauschmayer
sourceurl: http://www.2ality.com/2014/05/is-integer.html
tags: math
id: 5384a74ca766e24d50000001
sesURL: Check-if-a-value-is-an-integer
moreinfo: 
---

There are a few different ways you can determine if a value is an integer in JavaScript. ECMAScript6 provides a direct <a href="https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger">isInteger</a> method, but for current browsers you can apply a few different methods. The simplest is to compare the result of Math.round to the original value. Using triple equality checking also handles non-numbers as well.

<pre><code class="language-javascript">function isInteger(x) {
    return Math.round(x) === x;
}</code></pre>
