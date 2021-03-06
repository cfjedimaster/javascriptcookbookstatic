---
layout: article
title: Restrict a number to a range.
published: 2013-08-13
author: Chrysto Panayotov
sourceurl: http://blog.bassta.bg/category/snippets/
tags: [math]
id: 520aab38c7480a5524000002
sesURL: Restrict-a-number-to-a-range
moreinfo: 
---

Given that you need to restrict a number to a lower and upper bound, the function below will handle it by using a combination of Math.min and Math.max. 

_number is the number you want to restrict.
_min is the minimal value.
_max is the maximum value.

If the _number is less than _min, the function returns the _min value. If the _number is greater than _max, the function returns _max value. 

<pre><code class="language-javascript">function bound(_number, _min, _max){
        return Math.max(Math.min(_number, _max), _min);
}</code></pre>
