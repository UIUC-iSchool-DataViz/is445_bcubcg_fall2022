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

For Macs you may have to also install bundler: `gem install jekyll bundler` instead of just Jeykll (`gem install jekyll`), but first try to run the test webpage without this extra install and see if you get any errors.

### [Instructions for Windows](https://jekyllrb.com/docs/installation/windows/)

### [Instructions for Ubuntu Linux](https://jekyllrb.com/docs/installation/ubuntu/)

### [Instructions for Non-Ubuntu Linux](https://jekyllrb.com/docs/installation/other-linux/)


## Get relevant webpage templete files (have video starting from here)

git clone, make sure windows folks have git ALSO, folks need to install bundler

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

