---
layout: post
title:  "Ways to Improve Page Performance"
excerpt: "Some ways to improve the performance and actual/perceived load time of a web page."
categories: [notes]
comments: false
---

Some ways to improve the performance or actual/perceived load time of a website
include:
 
- Reducing the number of HTTP requests made (e.g. by using CSS sprites)
- Reducing lines of code by writing clean code and refactoring (e.g. creating functions where repeating lines of code occur)
- Reducing the overall size of the files
- Minifying CSS and Javascript into .min.css and .min.js files (when the code is placed all on one line)
- Debouncing or throttling scroll events that fire too often
- Uploading images onto a content delivery network (CDN) which will reduce
the load on the server when static content is served from a CDN
- Optimise and reduce the file sizes of images
- Load javascript files later on by placing script tags at the bottom of the
HTML document instead of the head section (place only essential assets in the head 
section so that the website visually appears during load time)