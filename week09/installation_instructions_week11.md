---
title: Jekyll & Page Installation Instructions
layout: assignment
description: Install Jekyll & required pages for creating your own interactive website
---
 
# Installation instructions: Ruby, Ruby Gems & Jekyll

Follow the links for your system below.  **NOTE:** You will likely want to do this *outside* of your DataViz conda environment.

## General notes

If you already have Ruby installed (i.e. the "system" Ruby) -- *make sure you check the installation instructions for your relevant system anyway* -- it's possible you will want to install a non-system Ruby version.

If you already have Jekyll installed -- make sure it's the most recent version.

Pay attention if there are "next steps" listed after any of the commands, and make sure you do them.  For example, on a Mac after brew installs you'll see:

```
==> Next steps:
- Run these two commands in your terminal to add Homebrew to your PATH:
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/jnaiman/.bash_profile
    eval "$(/opt/homebrew/bin/brew shellenv)"
```

You need to run these two lines (echo and eval lines) in order to have the "brew" command in your path.

And after the Mac installation you'll see the instructions (for the .zshrc shell its a little different):

```
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.bash_profile
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.bash_profile
echo "chruby ruby-3.1.2" >> ~/.bash_profile # run 'chruby' to see actual version
```

Make sure you run these as well and re-open a Terminal window so that the relevant packages will be in your path.


### [Instructions for Macs](https://jekyllrb.com/docs/installation/macos/)

### [Instructions for Windows](https://jekyllrb.com/docs/installation/windows/)

### [Instructions for Ubuntu Linux](https://jekyllrb.com/docs/installation/ubuntu/)

### [Instructions for Non-Ubuntu Linux](https://jekyllrb.com/docs/installation/other-linux/)


## Get relevant webpage templete files (have video starting from here)

git clone, make sure windows folks have git

**Notes for Windows install:**
 * You need to have git installed - <a href="https://git-scm.com/">download link here</a>.  You will have to restart your computer.


## Install webpage files

remove any Gemfile.lock, run `bundle install`

## Check that the webpage runs

`bundle excece serve whatever` or with the `-l` option

and then navigate to the appropriate place

## Add all files to your github repo

double check that there is a blank "" for your baseurl

also, update the relevant _config.yml stuff to point to your links

add to your github.io repo and push

make sure that if there is other stuff in your repo you add this to the "ignore" list of things

--------------

DON'T NEED I THINK -- this has the ECHO stuff
```
==> chruby
Add the following to the ~/.bash_profile or ~/.zshrc file:
  source /opt/homebrew/opt/chruby/share/chruby/chruby.sh

To enable auto-switching of Rubies specified by .ruby-version files,
add the following to ~/.bash_profile or ~/.zshrc:
  source /opt/homebrew/opt/chruby/share/chruby/auto.sh
```

get the webpage stuff from the github repo

then do bundle install, remove Gemlock file before though

----------

There are a few ways to do this.  Probably the easiest is to download the correct version [from the Node.js page](https://nodejs.org/en/download/).

If you go this route, make sure you follow the final install instructions and have the `npm` executable in your `PATH`.  On my Mac the prompt looks like:

<img src="https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445AOG_fall2020/master/week10/images/nodejspat.png">

If you try any of the `npm` commands and it gives you an error about not knowing what `npm` is it is likely because it doesn't know where it is (given the example posted in the image above you could expliclity call `npm` with: `/usr/local/bin/npm`).



#### Another way: with conda (NOT recommended)

If the "default" way doesn't work for any reason you can try with conda in your terminal/Anaconda prompt:
 1. `conda activate DataViz`
 1. `conda install nodejs`
 
If you go this route, make sure you activate your DataViz environment before using any `npm` calls.

#### 1.1 Update npm to latest version if you already have it installed

Do this with:
```
npm install -g npm@latest
```
or for a specific version:
```
npm install -g npm@8.0.0
```

**NOTE:** to install things globally (-g) you might have to use `sudo` in front of the `npm` commands.

You can check your version with

```
npm -v
```
(mine is 8.0.0)


## 2. Use npm to install Idyll & other packages

You'll run these commands in a terminal (Mac) or anaconda prompt (Windows) so make sure you open them up.

**NOTE:** to install things globally (-g) you might have to use `sudo` in front of the `npm` commands.

1. Use `npm` to install Idyll (you might need root privileges to do so)
```
npm install -g idyll
```

1. Create new post with idyll (you can use the defaults)
```
idyll create
```
1. cd into post directory (with defaults this is `my-idyll-post`)
1. Install dependencies to install vegalite
```
npm install --save vega-lite react react-dom vega
```
1. Install vegalite for Idyll
```
npm install --save idyll-vega-lite
```
1. Test by:
  * downloading [this index.idyll file](https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_spring2021/master/week10/index.idyll) and replacing the default index.idyll file in your `my-idyll-post` directory
  * downloading [the LakeHuron.csv file](https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_spring2021/master/week10/data/LakeHuron.csv) and putting this in the `data/` sub-folder in the `my-idyll-post` directory
  * do `idyll` in your `my-idyll-post` directory and make sure it looks like whats in the test video below
     * **NOTE:** if you get an error and it won't build try `idyll --compileLibs=true` instead of just `idyll`.  You might get a "BABEL" warning that you can ignore for now.
  
<iframe width="560" height="315" src="https://www.youtube.com/embed/J_w9kowGkIs?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
