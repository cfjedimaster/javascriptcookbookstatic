---
layout: article
title: Create a random nonce string using JavaScript
published: 2015-03-10
author: Nic Raboy
sourceurl: https://blog.nraboy.com/2015/03/create-a-random-nonce-string-using-javascript/
tags: [string]
id: createarandomnonestringusingjavascript
sesURL: Check-a-random-nonce-string-using-JavaScript
moreinfo: 
---

Have you ever needed to come up with a random string of characters say for a password?  Maybe you're looking for a random string of characters for an oauth 1.0 nonce. The function below gives an example of how to do this.
<p/>
We first define a string of all the allowed characters in our final randomized string.  We then loop until a given length which will represent the string size.  In this loop we will look at the allowed character string as a kind of array (character by character) and randomly choose an index of the array. 

<pre><code class="language-javascript">var randomString = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}</code></pre>
