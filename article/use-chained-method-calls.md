---
layout: article
title: Use chained method calls
published: 2014-05-02
author: Steve Brownlee
sourceurl: 
tags: [misc]
id: 536298e5faedbd807c000001
sesURL: Use-chained-method-calls
moreinfo: 
---

Libraries like jQuery support chained method calls. This allows you to run multiple different operations at once. For example:
&lt;p/&gt;
$(&quot;someSelector&quot;).addClass(&quot;cool&quot;).appendTo(&quot;somethingElse&quot;);
&lt;p/&gt;
In order to support this your methods need to perform their particular action but then return it's own API again to the caller. In the example below, the Cyclone object supports methods spin, to, with, and start. Notice how spin, to, and with return pointers to the API such that you can chain them as you see it.

<pre><code class="language-javascript">var Cyclone = function (name) {
    this.name = name;
};

Cyclone.prototype.spin = function () {
    var cycloneOptions = {};

    var start = function () {
        this.move(cycloneOptions);
    }.bind(this);

    var withStuff = function (debris) {
        cycloneOptions.debris = debris;
        return {
            start: start
        }
    };

    var to = function (location) {
        cycloneOptions.location = location;
        return {
            start: start,
            withStuff: withStuff
        }
    };

    return {
        to: to
    }
};

Cyclone.prototype.move = function (options) {
    // Move the cyclone with the given options
};

var marmaduke = new Cyclone('Marmaduke');
marmaduke.spin().to('Japan').start();  // A standard typhoon

var nigel = new Cyclone('Nigel');
nigel.spin().to('Japan').withStuff('Haddock').start();  // A typhoon loaded with dead fish</code></pre>
