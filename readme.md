# Flax rebase

Flax is a preconfigured eleventy setup to allow documentation 

### the basics
- a theming engine [theme]
- a postcss setup
- a coherent njk layout system
- a set of 11ty plugins
- a common markdown language with custom scripts
- a esbuild to manipulate all the needed js
- pagedjs support to have nicely made pdf
- an asset system for element on the site (how should we handle svg).


### Flax layouts system
you can add the system on top of any 
- book flavor (single or multiples)
- journal flavor (single or multiple)
- preprint flavor
- custom flavor (simply add your own setup)


### Documentation with Flax
flax is a great system to generate documentation output as website or as printed matters. 
it can also include a single cms system

### what flax is not?


# TODO

set base.njk with theme inside.


set json file to manage data and theme




[theme]
to set the theme: 
1. import the theme you want (flax install theme)
2. set the theme in site.json


[copy]
the static folder includes a folder named `tocopy` , anything in that folder is copied to the end site based on the root.
so if you add a `/copy/fonts/something.ttf`  it will be available, on the website as `/fonts/something.ttf`
It’s very useful for static elements that need to be available on the site, and not created by flax


