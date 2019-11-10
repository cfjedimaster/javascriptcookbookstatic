---
layout: article
title: Combining Library and Worker code in one script.
published: 2013-06-27
author: Calvin Metcalf
sourceurl: 
tags: [workers]
id: 51cc288ce2fc093528000002
sesURL: Combining-Library-and-Worker-code-in-one-script
moreinfo: 
---

Worker location is determined relative to the html page not to the script that calls them. So if you need to call a worker from a script that might be called as &lt;script src=&quot;script.js&quot;&gt; on one page and &lt;script src=&quot;js/script.js&quot;&gt; on another this pattern lets you avoid using absolute URLs.

<pre><code class="language-javascript">
 if (typeof document === "undefined") {(function(self){
                /*
                worker stuff
                */
})(self)} else {(function(exports){
        "use strict";
        function getPath(){
                var scripts = document.getElementsByTagName("script");
                var len = scripts.length;
                var i = 0;
                while(i<len){
/*  change  --------> */if(/scriptWithWorker(\.min)?\.js/.test(scripts[i].src)){
                                return scripts[i].src;
                        }
                        i++;
                }
        }
        var worker = new Worker(getPath());
        /*
        non-worker code
        */
})(window)};
</code></pre>