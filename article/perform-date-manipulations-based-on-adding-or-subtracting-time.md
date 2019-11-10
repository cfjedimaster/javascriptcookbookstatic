---
layout: article
title: Perform date manipulations based on adding or subtracting time
published: 2013-07-25T21:22:25.845Z
author: 
sourceurl: 
tags: [date]
id: 51f1962dc7480a5524000001
sesURL: Perform-date-manipulations-based-on-adding-or-subtracting-time
moreinfo: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
---

A common programming challenge is to perform simple date &quot;math&quot; on a value. So for example, given that you have a certain date, what date will it be three hours from then? Or - if today is the 27th, what month will it be in two days? There are many ways of doing this (and many libraries available with their own implementation), but one simple way is just combine a get and set call. So for example, adding three hours to a JavaScript date can be done by using setHours after running getHours. In the code below, I've demonstrated multiple different versions of this in action.

<pre><code class="language-javascript">//First, start with a particular time
var date = new Date();

//Add two hours
date.setHours(date.getHours() + 2);

//Go back 3 days
date.setDate(date.getDate() - 3);

//One minute ago...
date.setMinutes(date.getMinutes() - 1);</code></pre>
