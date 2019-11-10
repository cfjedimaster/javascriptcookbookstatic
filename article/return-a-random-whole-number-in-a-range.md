---
layout: article
title: Return a random whole number in a range.
published: 2013-06-14
author: 
sourceurl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
tags: [math]
id: 51bb3e202712f31a5a000001
sesURL: Return-a-random-whole-number-in-a-range
moreinfo: 
---

This recipe will return a whole number between a lower and higher range. For a deeper discussion of this code, see this StackOverflow comment from Ionut Stan: http://stackoverflow.com/a/1527820/52160.

<pre><code class="language-javascript">/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}</code></pre>
