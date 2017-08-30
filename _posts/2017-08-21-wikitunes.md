---
layout: post
title:  "Thoughts on the Wikipedia Viewer & Itunes Song Listener"
excerpt: "My thoughts on this project, what I learned, and what 
challenges I encountered."
categories: [projects]
comments: true
---

For both the Wikipedia Viewer and Itunes Song Listener
apps, I used similar functions in my code. I split it
up as follows: a function that calls the API and gets
a response, a function which creates html tags to render
the data to, and a function that iterates over the
array of objects and appends to the container on the
page.
 
To circumvent the CORS issue, I specified the datatype
as jsonp (JSON object with padding).
 
Throughout building these apps, I use console.log to
incrementally test whether certain elements work - such
as whether the API call is successful or not, what
data is being returned in the response, and whether
the HTML tags to be appended are being created
correctly.