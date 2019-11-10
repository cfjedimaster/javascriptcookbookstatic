---
layout: article
title: Determine touch support and add handlers.
published: 2013-06-20
author: Kevin Hoyt
sourceurl: 
tags: [touch,mobile,event]
id: 51bf5c84124581ef24000001
sesURL: Determine-touch-support-and-add-handlers
moreinfo: 
---

Determine if touch events are available and use a single line to add an event listener to handle mouse or touch in most cases.

<pre><code class="language-javascript">touch = ( 'ontouchstart' in document.documentElement ) ? true : false;

// Quick ternary operation based on previous findings
element = document.querySelector( '#yourElement' );
element.addEventListener( touch ? 'touchstart' : 'mousedown', doInputStart );

// Get the coordinates based on input type
if( touch )
{
  // Stop the default handling of the event
  evt.preventDefault();

  // Get the touch coordinates
  clientX = evt.touches[0].clientX;
  clientY = evt.touches[0].clientY;
} else {
  // Not touch so grab mouse coordinates
  clientX = evt.clientX;
  clientY = evt.clientY;
}</code></pre>
