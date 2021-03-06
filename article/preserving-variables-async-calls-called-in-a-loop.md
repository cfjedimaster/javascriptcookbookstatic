---
layout: article
title: Preserving variables inside async calls called in a loop.
published: 2013-06-20
author: Dominic Bartl
sourceurl: 
tags: [function,async]
id: 51c35382b0e9cd5061000001
sesURL: Preserving-variables-inside-async-calls-called-in-a-loop
moreinfo: http://benalman.com/news/2010/11/immediately-invoked-function-expression/
---

f you want to run asynchronous  functions inside a loop, but still want to keep the index or other variables after a callback gets executed you can wrap your code in an IIFE (immediately-invoked function expression). 

<pre><code class="language-javascript">var arr = ['Hello', 'World', 'Javascript', 'Async', ':)'];
for( var i = 0; i &lt; arr.length; i++) {
 (function(index){
   setTimeout(function(){

      console.log(arr[index]);
   }, 500);

 })(i);
}</code></pre>
