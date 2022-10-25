---
layout: post
title: "Resources for learning programming"
categories: [ development ]
tags: [ tools, featured ]
created: Jan 05, 2020 10:40 AM
image: assets/images/15.jpg
---

This document is designed to contain the content that I found most useful and deserving of attention from those both interested or passionate about Machine Learning. Much of the content here comes from my scribbles in Obsidian Notes, where my studies are organized and archived.
I will continue to move content from Obsidian to this blog as soon as I feel that I have sufficiently understood something.

{:.no_toc}

* A markdown unordered list which will be replaced with the ToC, excluding the "Contents header" from above
{:toc}

**Preamble:**

*This is a collection of some of my favorite resources, content, courses, and everything else that I used to for the past 2 years. I wasn't very consistent with updating it so it's probably missing a lot but I'll try to fill in the gaps slowly.*

*Having taught myself this far, I've learned a lot. So much so that I have a separate article detailing what I've learned about learning.*

*There's a mix of content types throughout the document. You'll find one-pagers, cheatsheets, article (and series of articles), videos (and series of videos), MOOCs, books, textbooks, and other creative ways education is distributed online. There is a large range in terms of emphasis of attention; some resources are more cosmetically inclined, others are more dense and utility-heavy. But everything here, in my opinion, is well made; or at the very least made with integrity. I am deeply thankful to the creators and providers of such content.*

*One more thing. I would only ever recommend content and give advice once I feel like I've reached the slope of enlightenment part of the dunning kruger graph. This means there are certain things that I'm currently studying or learning and although I'm collecting content and resources, I don't think I'm smart enough to discern good from bad just yet, and so I won't write about it. For example, I'm currently learning Rust and Solana. I hope one day I'll share my notes once I feel reasonably competent.*

> "*'Amateur.' you say that as if it was a dirty word or something, but 'amateur' comes from the Latin word 'amare' which means love... To do something for the love of it.*" - Mozart in the Jungle

# Why Coding?

- Begin by reading [Wait but Why’s incredible post on superintelligence](https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html), the final frontier of artificial intelligence. Read both part 1 and 2 to gain a full understanding and appreciation for A.I’s true potential.
- Watch Andrew Ng’s talk on [A.I as the next Electricity](https://www.youtube.com/watch?v=fgbBtnCvcDI), he also provides some great next steps for those that want to break into the industry.

# **You know nothing:**

*Where I started when I was 18. Where everyone starts at some point.*

## Programming

Machine Learning doesn't require a serious technical background in computer science or software engineering, at least if you're aiming for something of a hobby or leisure activity. But it most certainly requires basic programming knowledge.

- Language
    - A fluent knowledge of Python is basically all you need to know to start off. Knowledge in other languages can help, Java (ubiquity and reliability) Javascript (for usable projects) and C++ (For doing research) in particular can be useful.
    - If you want a high level overview of programming languages as a concept itself, check out this [series of short videos](https://www.youtube.com/playlist?list=PL7141DE955793D3F0).
    - [roadmap.sh](https://roadmap.sh/) has great collection of concept flowcharts and accompanying explained videos on the most popular languages and frameworks
- Data structures and Algorithms
    - Absolutely necessary upon moving into more difficult A.I algorithms. Emphasis on Stacks, Computational efficiency, and Graphs/Trees. These concepts will come up in the A.I specialization, especially as you conceptualize your own models.
        - Udacity has an incredible course called intro to “data structures and algorithms”, perfect for getting the seasoned programmer started with learning the concepts necessary to nail a developer position interview.
- Full stack web dev
    - If you're into Python, look no further than the [fullstackpython.com](https://www.fullstackpython.com/) website, which covers everything form the basics of Python itself to SQL ORMs, HTML template engines, and Deployment options
    - [Fireship](https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA)'s YouTube channel has garnered a huge following and with the quality and consistency of content, it's easy to see why. Useful for getting a high level understanding of just about anything you need to know in full stack web dev
    - I haven't tried it myself but [The Odin Project](https://www.theodinproject.com/paths) is a very interesting take on learning full-stack on your own.
- Databases
    - There are many database paradigms. Having a general knowledge of the strengths and weaknesses of each will be supremely useful when it comes to building applications

{% capture details %}
- Thorough knowledge and familiarity with advanced programming concepts like functions and classes is necessary. The quality of your programs will be hugely advanced, and some tools require knowledge in these concepts
- There is this wonderfully written list of the top [mistakes beginner programmers make](https://edgecoders.com/the-mistakes-i-made-as-a-beginner-programmer-ac8b3e54c312). Through experience I found a lot of these mistakes to be true, and are often amplified when the programmer in question is self-taught. Calling yourself out on these mistakes will make you a better programmer.
- To absolutely master Python, one should be aware of tips and tricks like [this](https://www.youtube.com/watch?v=VBokjWj_cEA), [this](https://www.youtube.com/watch?v=SNTZpy0oDB8), and [this](https://www.youtube.com/watch?v=9XQOd8ODNbs). You should know what are, and how to use dunder methods, decorators, and design patterns.
- Hilariously accurate, the response to [this thread on Stack Exchange](https://stackoverflow.com/questions/2573135/python-progression-path-from-apprentice-to-guru) outlines the progression that most Python programmers will experience.
- Be brutally honest and constantly inquisitive with your study in computer science; it will make a difference in everything else you learn and do. Here’s [a list of Python’s best kept secrets](https://stackoverflow.com/questions/101268/hidden-features-of-python) that spell the difference between boys and men
- Built by MIT, this course is your one stop shop for learning above and beyond what you could possibly learn in school. Here's [the missing semester of your CS education](https://missing.csail.mit.edu/)
- Organize your developer life with Git
    - Read the [Git flow](https://nvie.com/posts/a-successful-git-branching-model/) and [Github flow](https://guides.github.com/introduction/flow/) branching models
    - Here's a great [summary/cheatsheet for git](https://duzun.me/tips/git)
    - GitHub and GitLab are two very popular repository management services that each have their uses
        - Get familiar with Issues, Pull Requests, Licenses, OAuth, and automation tools like Github Actions
- Start learning terminal-level dev tools
- Go from command to Powershell
    - Don't be too loyal to any one OS, install WSL to learn Linux
        - One of the best courses for this is [Learn Linux the hard way](https://archive.is/xDb8o)
        - As recommended by my dear friend Ananya: [Linux Journey](https://linuxjourney.com/) is a cute little website that teaches the ways of Linux
        - If you're more of an interactive learner, I recommend [learnshell.org](http://learnshell.org) and [linuxsurvival.com](https://linuxsurvival.com)
        - If you want to get down and dirty, [scripting](https://www.shellscript.sh/index.html) is an important know-how (Here's another excellent [guide on Shell programming](http://matt.might.net/articles/bash-by-example/#:~:text=Bash%20as%20a%20scripting%20language,the%20top%20of%20the%20file.&text=To%20execute%20the%20script%20from,%2Fpath%2Fto%2Finterpreter%20.))
{% endcapture %}
{% capture summary %} Intermediate programming {% endcapture %}{% include details.html %}


{% capture details %}
- Advanced Programming
    - To reach this point, one should have a strong foundation built with OOP, Data structures/Algorithms, and skills with some handy dev tools. Fluency in at least one language as well as some background in other languages (ideally one that is different from your native language) is beneficial.
        - Design Patterns have their criticisms, but are useful as they are ubiquitous. If you can a hand of the OG GoF textbook online, definitely give it a go, otherwise, settle for "Head first: Design Patterns", or "Dive into Design Patterns"
        - Youtube has a great wealth of design pattern resources, one of my favorites of which is a [playlist by Christopher Okhravi](https://www.youtube.com/playlist?list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc)
        - This [brief video by William Lin](https://www.youtube.com/watch?v=bVKHRtafgPc&t=223s), a competitive programmer provides a great outline on how to get into programming
    - Also start learning [vim](http://www2.geog.ucl.ac.uk/~plewis/teaching/unix/vimtutor)
        - Start with vimtutor (on mac and linux type in `vimtutor` in your terminal, on Windows... tough luck)
        - Also have a peek at some of the many [vim cheatsheets](https://www.fprintf.net/vimCheatSheet.html) (there are many, I just linked the most generic one)
        - In the meantime, use something like Anki to rote memorize commands
        - Anki is for learning words, the [vim grammar](https://takac.github.io/2013/01/30/vim-grammar/) is for writing poetry
        - Indoctrinate yourself as a vim vimmer by watching the top two ([1](https://www.youtube.com/watch?v=_NUO4JEtkDw), [2](https://www.youtube.com/watch?v=wlR5gYd6um0)) vim tutorials
        - Use [vimgenius](http://www.vimgenius.com/) to practice, or [vim adventures](https://vim-adventures.com/) if you're into that kinda thing
        - Pick up some basic [vimscript](https://learnxinyminutes.com/docs/vimscript/) along the way, and learn about [.vimrc](https://github.com/amix/vimrc)
        - Get destroyed by the pros over at [vimgolf](https://www.vimgolf.com/)
{% endcapture %}
{% capture summary %} Intermediate programming {% endcapture %}{% include details.html %}
          
- General Programming resources
    - I literally worship Runestone Academy's library of courses. Each little course serves as a great touch up on topics you may have encountered before, or as a way to get your feet wet in something new, as I have with the [Java for Python programmers coursette](https://runestone.academy/runestone/books/published/java4python/Java4Python.html)
    - [Learn x in y minutes](https://learnxinyminutes.com/) is a collection of "tours" for a variety of programming stuffs
    - This Information-dense course by Stanford is called "[The Missing Semester of your CS education](https://missing.csail.mit.edu/)", and it truly lives up to its name.
    - If you like learning by analogy or comparison, have a look at "[Rosetta Code](https://rosettacode.org/wiki/Rosetta_Code)", a wiki of hundreds of programming languages demonstrating hundreds of tasks.
    - There's also "[Hyperpolyglot](https://hyperpolyglot.org/)", a simple site with side by side comparison charts of different programming languages organized by various catagories. Keep in mind the language versions in the demos are very old (the site isn't maintained).
    - [Exercism](https://exercism.org/) is a potent blend of resources, practice, and mentors to help you become fluent in almost any language you would want to learn. I'm doing their Rust course.
- Language Specific Resources
    - Python
        - [Socratica](https://www.youtube.com/channel/UCW6TXMZ5Pq6yL6_k5NZ2e0Q) is a YouTube channel for learning science and Python; their Python course is probably one of the best in quality, time, and understandability on the internet.
        - Codeacademy, something of a gatekeeper for learning coding — Just don’t use this alone and call it a day.
        - The [Real Python website](https://realpython.com/) is the internet’s best collection of in depth tutorials and lessons on literally anything to do with Python. I would tell you to read everything but it would probably take years to go through all the amazing content.
            - And if you’re going to learn Python, it’s mandatory that you know [NumPy](https://www.kaggle.com/sanikamal/notes-on-numpy).
    - Javascript
        - [Colt Steele's JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/) was recommended by my good friend Nikhil Budathoki, a student at UWaterloo's CS program.
        - [Scrimba](https://scrimba.com/) is an amazing website with interactive-video style courses on a variety of programming topics. I highly recommend the Intro to React tutorial!
    - Java
        - This is jumping ahead a bit but the Algorithms in Java textbook by Robert Sedgewick is great for learning the ins and out of Java as well as algorithms in CS

# **You know some things:**

*You are a seasoned programmer. Perhaps you’re coming as an expert from another field like VR/AR, web dev, chemistry, biology, etc. That being said, you have a solid foundation in math and/or coding. A.I is just another skill you want to add to your toolbox.*

**Things you’ll need to suceed:**

- To know how to [read](https://www.slideshare.net/DamianGordon1/pseudocode-10373156) (and [write](https://blog.usejournal.com/how-to-write-pseudocode-a-beginners-guide-29956242698)) pseudocode

## Blogs and things to follow

## Repositories and Tools

### Learning

- [DevDocs](https://devdocs.io/) is an open source collection of API and framework documentations all in one searchable tree.
- [OverAPI](https://overapi.com/) is another web portal with links to many languages and frameworks and their top resources
- [CSS-Tricks](https://css-tricks.com/) is great, especially their article on flexbox.
- [High Scalability](http://highscalability.com/) is super legit. I had to revisit it 6 months after I discovered it to even comprehend what I was reading.

### Growing

- [Showwcase](https://www.showwcase.com/?ref=producthunt) is a growing community of developers from around the world sharing insights and what they're working on.

### Designing

- If you're like me and don't trust my own taste in colors, check out [Color Hunt](https://colorhunt.co/)
- Eventually, you'll have your own design system in place. Check out Shopify's [Polaris](https://polaris.shopify.com/), Twilio's [Paste](https://paste.twilio.design/), Zendesk's [Garden](https://garden.zendesk.com/), and Github's [Primer](https://primer.style/), or any of the design systems listed [here](https://github.com/alexpate/awesome-design-systems)

### Developing

- Responsiveness is super important for websites! A website shouldn't be rendered unusable just because they resized the window. Check out [Responsively](https://responsively.app/) to help with that.
- Cross-browser compatability is increasingly important as JS evolves over time. Use [LambdaTest](https://www.lambdatest.com/) to check for issues.
- Once you've familiarized yourself with base frameworks like React, Vue and Angular, check out what I call "meta-frameworks" like Next.js, [Blitz.js](https://blitzjs.com/showcase), and [Redwoodjs](https://redwoodjs.com/)

### Marketing

- The number of things I have to reluctantly provide my email for is annoying; use [TempMail](https://temp-mail.org/en/) for a quick throwaway email! It even works as a "corporate email" ;)
- Whenever you need to screenshot your code use [ray.so](ray.so) or [carbon.now.sh](carbon.now.sh).
- Make Tweets and other posts look elegant with [poet.so](poet.so).

# **Know More**

Not for use as the basis for learning machine learning, but rather as a complimentary to whatever regiment you have set yourself.

- ~~Courtesy of my friend Nikhil, [Quantopian.com](https://www.quantopian.com/) is a fantastic dive into quantitative finance~~ Quantopian has been shut down :(.

Equally important to what I find worth using are the things that I find not worth doing. Below are the resources I didn't find worth their time:

<p id="modTime"></p>
