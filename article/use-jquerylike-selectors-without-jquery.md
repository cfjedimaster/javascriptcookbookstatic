---
layout: article
title: Use jQuery-like Selectors without jQuery.
published: 2013-06-20
author: Erik Haubold
sourceurl: 
tags: [dom,css]
id: 51c315a83321d3744f000001
sesURL: Use-jQuerylike-Selectors-without-jQuery
moreinfo: 
---

If you wish to use jQuery-like selectors without having to actually load the jQuery framework, you can use this simple function to mimic selector behavior. 

This function will returns false if nothing found, a DOM node if exactly one element is found and the list of matches otherwise.

<pre><code class="language-javascript">function $( cssquery ) {
    var t = document.querySelectorAll(cssquery);
    return (t.length === 0) ? false : (t.length === 1) ? t[0] : t;
}</code></pre>
