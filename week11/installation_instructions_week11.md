---
title: Idyll Installation Instructions
layout: assignment
description: Install Idyll
---
 
# Installation instructions: npm & Idyll & vega-lite for Idyll

## 1. Install npm

There are a few ways to do this.  Probably the easiest is to download the correct version [from the Node.js page](https://nodejs.org/en/download/).

If you go this route, make sure you follow the final install instructions and have the `npm` executable in your `PATH`.  On my Mac the prompt looks like:

<img src="https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445AOG_fall2020/master/week10/images/nodejspat.png">

If you try any of the `npm` commands and it gives you an error about not knowing what `npm` is it is likely because it doesn't know where it is (given the example posted in the image above you could expliclity call `npm` with: `/usr/local/bin/npm`).

**Notes for Windows install:**
 * You need to have git installed - <a href="https://git-scm.com/">download link here</a>.  You will have to restart your computer.


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
