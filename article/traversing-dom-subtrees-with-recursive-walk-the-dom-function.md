---
layout: article
title: Traversing DOM (sub)trees with a recursive "walk the DOM" function.
published: 2013-06-26T13:49:59.167Z
author: Douglas Crockford
sourceurl: http://www.youtube.com/watch?v=Y2Y0U-2qJMs&feature=youtu.be&t=27m15s
tags: [dom]
id: 51c9b4cbe2fc093528000001
sesURL: Traversing-DOM-subtrees-with-a-recursive-walk-the-DOM-function
moreinfo: 
---

This function traverses a DOM (sub)tree and executes a given function on each Element and Text node it visits.

<pre><code class="language-javascript">function walkTheDOM(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walkTheDOM(node, func);
        node = node.nextSibling;
    }
}

// Example usage: Process all Text nodes on the page
walkTheDOM(document.body, function (node) {
    if (node.nodeType === 3) { // Is it a Text node?
        var text = node.data.trim();
        if (text.length &gt; 0) { // Does it have non white-space text content?
            // process text
        }
    }
});</code></pre>
