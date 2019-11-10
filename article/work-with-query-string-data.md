---
layout: article
title: Work with Query String Data
published: 2014-05-08
author: Jakub Jankiewicz
sourceurl: 
tags: [misc]
id: 536ba8cd00021bf86b000001
sesURL: Work-with-Query-String-Data
moreinfo: 
---

The query string (everything after the question mark in the URL) can be parsed with a few simple string functions. The code below automatically parses the query string and stores it in a variable called query. Given a URL of the form kittens.html?x=1&amp;y=2, the query object will contain an X and Y property with the proper values.

<pre><code class="language-javascript">var query = (function() {
    function decode(string) {
        return decodeURIComponent(string.replace(/\+/g, &quot; &quot;));
    }
    var result = {};
    if (location.search) {
        location.search.substring(1).split('&amp;').forEach(function(pair) {
            pair = pair.split('=');
            result[decode(pair[0])] = decode(pair[1]);
        });
    }
    return result;
})();
</code></pre>
