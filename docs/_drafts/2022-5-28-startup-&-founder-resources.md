---
layout: post
title: "Resources for the wandering startup founder"
categories: [ development ]
tags: [ tools, featured ]
created: Jan 05, 2020 10:40 AM
image: assets/images/11.jpg
---

This blog is for the founder and startup resources I found most useful during my time as a founder. It's meant to mimic the way the A.I resources mirrored my journey as an ML engineer and web-developer.

{:.no_toc}

* A markdown unordered list which will be replaced with the ToC, excluding the "Contents header" from above
  {:toc}

**Preamble:**

I recently joined Entrepreneur First (EF) a program for normal people with crazy ideas and strong desires to build a startup. I would say that EF was my first step to seriously trying to build my own business. 
These are the resources I came across during my time in the program that helped me learn.

> "Run into the spike" - Alice Bentinck
> "Productivity is de-risking" - Matt Clifford

# Why entrepreneurship?


# **You know nothing:**

*Where I started when I was 21. At this point I'd only been programming for 4 years and have built products for companies before, but never for my own business.*

## The Basics

* They say it all starts with the words you use. Immerse yourself in the [terminology and jargon](https://foundersbook.co/startupcards?utm_content=null&utm_source=Sailthru&utm_medium=email&utm_campaign=Friday%20Email&utm_term=4ABCD).

## Motivation

# **You know some things:**

*You are a seasoned programmer. Perhaps you’re coming as an expert from another field like VR/AR, web dev, chemistry, biology, etc. That being said, you have a solid foundation in math and/or coding. A.I is just another skill you want to add to your toolbox.*

**Things you’ll need to succeed:**

- To know how to [read](https://www.slideshare.net/DamianGordon1/pseudocode-10373156) (and [write](https://blog.usejournal.com/how-to-write-pseudocode-a-beginners-guide-29956242698)) pseudocode

## Machine learning

- These models are not Neural Networks. These are your linear regressions, Kernel methods like Support Vector machines, Decision Trees, etc. keep in mind that Machine Learning isn't about the model, it's more about the method. Roughly speaking, there are [14 types of machine learning](https://machinelearningmastery.com/types-of-learning-in-machine-learning/), and as the field develops, there will be more.
    - Udacity’s intro to A.I and machine learning is perfect for these pre-deep-learning concepts. Many times you will find (especially in times of scarce data), that these algorithms do a better job than the more popular neural network architectures.
    - The last resource you should take a look at is this wonderful paper called “[A few useful things to know about machine learning](https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf)”. These are 12 of the key takeaways, tips, and tricks, of machine learning.
    - In addition to the 12 tips, [this article](https://www.nature.com/articles/d41586-019-02307-y) written by Patrick Riley of Google Advanced Science, highlights the 3 pitfalls most commonly seen in his real world experience at the intersection of machine learning and science.
    - [Yannic Kilcher’s Youtube channel](https://www.youtube.com/channel/UCZHmQk67mSJgfCCTn7xBfew/videos) has a measly 3k subscribers but he deserves far more for his break-down of the newest and best machine learning papers. He has various conversations with expert researchers and frequently attends top conference, documenting both in videos of varying length. We need more channels like his.
    - How do you know whether or not you know your stuff? [Google Data scien(tist)ce (interview) questions.](https://www.google.com/search?q=data+sceintist+question&rlz=1C1CHBF_enCA839CA839&oq=data+sceintist+question&aqs=chrome..69i57j0l5.3409j0j1&sourceid=chrome&ie=UTF-8) If you can answer each one without help and within an accceptable degree of accuracy, you know your stuff.
    - Straight from Stanford’s CS 229 Deep Learning course, [this repo](https://github.com/afshinea/stanford-cs-229-machine-learning) contains cheatsheets to cover all basic machine learning needs. The same guys also made one for deep learning specifically (in the next section)
    - [Mathematicalmonk](https://www.youtube.com/playlist?list=PLD0F06AA0D2E8FFBA)’s channel. The most consistent and thorough youtube series, covers the explanation down to the math. Watch them all. Trust me it’s worth it.

### Deep Learning

- Neural Networks. The forefront of A.I research and focus. 70% of your time will be spent with NNs
    - Udacity Intro to Deep Learning is an obvious starting point. The course is relatively short and concise, and has just enough projects and content to give you a base level understanding of Deep Learning.
    - [The deep learning book](https://www.deeplearningbook.org/), written by Ian Goodfellow and Yoshua Bengio, is all you need to get familiar with the fundamentals of deep learning. This book is especially good at coinciding the math with the concepts.
    - [What do neural networks learn?](https://www.youtube.com/watch?v=UojVVG4PAG0) Is a great video that ties together math and neural networks. The video is structured such that even if you don’t know the math, you’ll still understand the computational differences between linear regression to neural nets and everything in between.
    - deeplearning.net and its documentation is one of the old-but-gold sites for learning everything deep learning. Curated by the makers of Theano, you’ll learn everything from Restricted Boltzmann Machines to Monte Carlo sampling. Each tutorial comes complete with a high level look at the math and the code (implemented in Python and Theano).
    - [Arxiv Insights YouTube channel](https://www.youtube.com/channel/UCNIkB2IeJ-6AmZv7bQ1oBYg/videos) keeps to its namesake by publishing high qualiy videos of explainations behind some of the more complex topics in Deep Learning and RL. With proper references, clear visualizations, and thorough analysis, it’s a required watch.
    - [ML From scratch’s blog post](https://mlfromscratch.com/neural-networks-explained/) is the most thorough and holistic blog post on neural network basics. You don’t need any Medium articles or half-assed blog posts after this; everything else is just noise.
    - God bless these Stanford kids who made a [repo containing cheat sheets for deep learning basics.](https://github.com/afshinea/stanford-cs-230-deep-learning) It comprises of notes collected in Stanford’s CS 230 Deep Learning course.
    - I don’t know who this guy is, but for the past while, he has consistently put up silent short videos (2 mins on average) on [his YouTube channel](https://www.youtube.com/channel/UCUiiX2d45FqmuTZvY55id2g) depcting the use of various Python and PyTorch tips and tricks. I watch these videos when I want to be productive without doing work. It’s fun to interpret what he’s doing and why something makes sense. I think that’s why it’s so compelling ([kind of like Primitive Technology](https://www.youtube.com/channel/UCAL3JXZSzSm8AlZyD3nQdBA)).
    - Convolutional Neural Networks, easily the most revered deep learning paradigm since its inception. There are literally thousands of resources, ranging from generic to overcomplicated. And in the eye of the storm, we have [this](https://arxiv.org/abs/1603.07285).
    - Applicable to Machine Learning in general as well, but this [blog post by Andrej Kaparthy](http://karpathy.github.io/2019/04/25/recipe/) started as a Twitter thread and became the biblical guide for intermediate ML engineers trying to train their models.

## Production Tools

- Knowledge of the A.I libraries and packages available to you (You will probably learn about the packages and libraries as you go). Knowledge of the other tools available to you, like Google Colab (and Cloud). AWS, and various others is important. Understanding which is better for what purpose is key.
    - Udacity’s Intro to Deep Learning with PyTorch is possibly the greatest deep learning course currently available for free online. Created by Facebook A.I, the course covers everything from the fundamental basics of Deep Learning, all the way to CNNs and RNNs, all with guided PyTorch tutorials.
    - Tensorflow has the benefit of being backed by the biggest company in the world, and hence it has the most detailed documentation and series of tutorials than any other production tool on the internet. You can’t go wrong with their proprietary tutorial series.
    - [Deep lizard](https://www.youtube.com/channel/UC4UJ26WkceqONNF5S26OiVw) is a YouTube channel that puts out consistent, concise, and high quality content. They have series on neural networks in Javascript and Python, and utilizing libraries from Keras to Pytorch. They even have series on RL. They deserve far more subscribers.
    - [Jeff Heaton](https://www.youtube.com/user/HeatonResearch) is probably the most likable machine learning tutor on YouTube. His tutorials cover the basics of deep learning, particularly with Keras and TF, and ranges from AWS and Flask pipelines all the way to visualization and preprocessing. Subscribe, if not for his content, then for his mustache.
    - The [entire Google Suite at your disposal](https://github.com/gregsramblings/google-cloud-4-words/blob/master/README.md?utm_campaign=Data_Elixir&utm_source=Data_Elixir_244), most of which is free, some of which are paid per use. Amazon Web Services is also a must have for large projects or deployment level tasks.
    - Learning to visualize multidimensional data is a machine learning must. [This medium article](https://towardsdatascience.com/the-art-of-effective-visualization-of-multi-dimensional-data-6c7202990c57) does a fantastic job explaining and demonstrating data visualization using an open source dataset using only matplotlib and seaborn, from 1D to 6D.
    - At surface level, there’s not much difference in between Keras, PyTorch, and TF. It’s only when you become an intermediate user that they each come into their own. It’s stuff like [this](https://github.com/FrancescoSaverioZuppichini/Pytorch-how-and-when-to-use-Module-Sequential-ModuleList-and-ModuleDict) and [this](https://blog.paperspace.com/pytorch-101-advanced/) that makes PyTorch consistent, intuitive, and highly flexible for professional users.
    - If you're a total badass then have a look at [JAX](https://github.com/google/jax) (and it's precursors [Autograd](https://github.com/hips/autograd) and [XLA](https://www.tensorflow.org/xla))
    - For a while I hated TensorFlow and refused to use it unless necessary, until I discovered Sonnet, DeepMind's in house DL Library.
        - DeepMind's family of libraries ([Haiku](https://github.com/deepmind/dm-haiku), [RLax](https://github.com/deepmind/rlax)) make TensorFlow a bit more approachable, and if it's good enough for DeepMind, it's more than good enough for me
    - Parameter optimization
        - So you've built your model and want to make sure that it's the best version it can be. Enter hyperparameter tuning. There are multiple common methods ranging from large scale (GA algos and Grid Search) to more refined and empirical (Bayesian opt and Random Search). There are also multiple frameworks that support their development. [Ray Tune](https://ray.readthedocs.io/en/latest/index.html) is one of the few that has good-enough documentation and is kept up to date.
        - Botorch and Ax are PyTorch extension libraries meant for parameter optimization.

## Putting it all Together

- Once you’ve learned from the somewhat watered-down resources above, review your knowledge with these advanced resources brought to you by some of the most legitamate people in the field of Machine Learning and Deep Learning.
    - [Deep Drizzle](https://deep-learning-drizzle.github.io/?fbclid=IwAR3K-Gh4NXR79TXXhgy36Zduo691oxUstbHDJq_nC4yq73cQhIrkzsSsBUY) repo is a collection of the very very academic/university courses (video lectures included). If you can sit through any given video on 2x speed and understand everything without question, you’re a legend

## Bonus: A history of A.I

- Not a hard skill, but certainly very useful to know. Understanding the past provides deeper insight to the situation in the present as well as elucidates certain possibilities in the near-future. This means covering everything from the “symbolic A.I” era and precursor methods like autoregressive models. Learn about the development of Back propagation. You’ll know you’re far back enough when you start hearing more Pearl, Minsky, and Chomsky and less Hinton, Lecun, and Bengio. Learn about how David Rumelhart one-upped the development of neural networks, and how Alex Krizhevsky’s simple idea changed the game.

## Blogs and things to follow

- The [ML explained blog](https://mlexplained.com/) is by a Carnegie Mellon university student who curates some quality content about once a month, explaining some more niche areas of deep learning as well as tutorials on building things from scratch.
- [Distill](https://distill.pub/) is so well curated that some people actually consider it to be on par with mid to top tier research papers in terms of quality of content. Many people on the notoriously serious [ML subreddit](https://www.reddit.com/r/MachineLearning/) also approve (which you should definitely follow).
- [Paperspace Blog](https://blog.paperspace.com/) is another one of those gems hidden in the pile of noise on the internet. Created by the Paperspace company (who does cloud and A.I stuff), the blog gathers quality content, approved by the company itself, who pays it’s writters with GPU credit (pretty clever).
- Remember to try and keep your ego and biases away from studying. [This Stack Exchange dicussion](https://academia.stackexchange.com/questions/37021/why-is-it-bad-to-judge-a-paper-by-citation-count) is an example of why something as simple as citation count should be regarded with skepticism.
- Here are 7 websites to help you keep up to date with the rapidly changing world of machine learning:
    - [Arxiv Sanity](http://www.arxiv-sanity.com/)
    - [Deep Learning Monitor](https://deeplearn.org/)
    - [Papers with Code](https://paperswithcode.com/)
    - [Connected Papers](https://www.connectedpapers.com/)
    - [42Papers](https://42papers.com/)
    - [Deepai.org](https://deepai.org/)
    - [Iris AI](https://the.iris.ai/)

## Repositories and Tools

- [Every library ever built on top of PyTorch.](https://github.com/bharathgs/Awesome-pytorch-list) That’s it.
- [Udacity Nanodegrees - open sourced](https://github.com/mikesprague/udacity-nanodegrees): A repo of Nanodegree content straight from Udacity (no certificate)
- [Open ML University](https://curriculum.openmlu.com/?fbclid=IwAR2XbmCa8al5Hhgjd_17aKOu7-n_aRdBGUhIYKQv8UmGhuR462tJoD3FTbg): A project put together by an acquaintance Sang-Jin Kim.

# **Know More**

Not for use as the basis for learning machine learning, but rather as a complimentary to whatever regiment you have set yourself.

- Short and sweet, [The 100 page Machine Learning bo](https://www.google.com/search?q=The+Hundred+Page+Machine+Learning+Book+by+Andrej+Burkov&rlz=1C1CHBF_enCA839CA839&oq=The+Hundred+Page+Machine+Learning+Book+by+Andrej+Burkov&aqs=chrome..69i57j69i64&sourceid=chrome&ie=UTF-8)ok is a great primer into ML
- Courtesy of my friend Nikhil, [Quantopian.com](https://www.quantopian.com/) is a fantastic dive into quantitative finance

<p id="modTime"></p>
