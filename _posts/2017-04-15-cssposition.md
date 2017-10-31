---
layout: post
title:  "CSS Position Property"
excerpt: "The different types of positioning used in CSS."
categories: [notes]
comments: false
---

There are a few types of positioning available as a
CSS property. These include static, absolute, relative,
and fixed.
 
Static positioning is the default if no position property
is specified in the CSS. This just means that the elements
are positioned according to the normal flow of elements
on a page.
 
Relative positioning is like static positioning except
now you can specify the actual position of the element
using the properties top, bottom, left and right. They
are positioned relative to the viewport unless a parent
element is set to position relative as well, in which
case it will be positioned relative to the parent element.
 
Absolute positioned elements are removed from the normal
flow of the page. Any surrounding elements will behave
as if the absolutely positioned element is not present.
Instead, elements that are absolutely positioned, can
be positioned with the top, bottom, right, left properties
and relative to either the viewport or the parent element
that is relative positioned.
 
Elements that are fixed positioned remain fixed in the
position specified relative to the viewport. So when
the document is scrolled, the element remains in the
same position regardless. Example of this include
navigation bars that remain fixed at the top as you
scroll down a web page.