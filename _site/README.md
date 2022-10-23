# Course Template

This repository is a template for managing coursework using GitHub pages.  It
uses the theme [dinky](https://github.com/pages-themes/dinky),
[nbviewer.js](https://github.com/kokes/nbviewer.js), and
[reveal.js](https://revealjs.com/) for presenting material.

For each week of class, create a subdirectory `weekZZ` (where `ZZ` is the week
of the class) and place any `.ipynb` and `.md` files in that directory.
Lectures can utilize the layout `lecture`, which will present them in revealjs.

**NOTE for instructors:** If you are online (or even in person), one suggestion I got from students was to 
be able to have "real time" access to the in class notebooks.  This was accomplished by having a little 
auto-commit script going on in the background 

```
cd YOUR_PATH_GOES_HERE/is445_bcubcg_fall2022; while :; do clear; source auto_commit.sh; sleep 30; done
```

For example, in my `.bash_profile` I have:

```
# auto github push
# usage: githubAutoSync <PATH>/is445_bcubcg_fall2022
githubAutoSync(){
    while [ true ]
    do
	cd $1
	source auto_commit.sh
	sleep 15
    done

    }
```

I couldn't get crontab to work (I think it has to do with the user-key/ssh permissions something something), but that is probably a much more elegant solution.

Also, for doing stuff with Jekyll in week ~10-ish I've got an auto-update based on the [online cv template](https://github.com/jnaiman/online_cv_public) that we are building from in the class:

```
# auto github push a set of files
# $1: jekyll directory; e.g. /Users/<USERNAME>/online_cv_fall2022
# $2: link to file to upload in repo; e.g. /Users/<USERNAME>/is445_bcubcg_fall2022/week11/inClass
# $3: main github page like /Users/<USERNAME>/is445_bcubcg_fall2022
githubAutoSyncJekyll(){
    # make dirs if not there
    mkdir -p $2
    mkdir -p $2/_posts
    mkdir -p $2/pages
    mkdir -p $2/_data
    mkdir -p $2/_projects
    mkdir -p $2/assets/pngs
    mkdir -p $2/assets/json 
    while [ true ]
    do
	cd $3
	cp $1/_config.yml $2
	cp $1/_posts/* $2/_posts/
	cp $1/_projects/* $2/_projects/
	cp $1/assets/pngs/* $2/assets/pngs/
	cp $1/assets/json/* $2/assets/json/
	cp $1/pages/projects.html $2/pages/
	cp $1/pages/about.md $2/pages/
	cp $1/_data/programming-skills.yml $2/_data/
	cp $1/_data/other-skills.yml $2/_data/
	cp $1/_data/timeline.yml $2/_data/
	source auto_commit.sh
	sleep 15
    done
    }
```

### To run locally

bundle exec jekyll serve -l


## Notes on Course Materials

This course was a 3 hour online version of this course in person.

As of Fall 2020, this section and the [section developed in parallel by Matthew Turk](https://github.com/UIUC-iSchool-DataViz/fall2020-BOG-BOU) have
diverged somewhat.  Occasionally, contributions will be passed back and forth
and the commit message history may not reflect the original authorship.

These two repositories have been developed in collaboration, and authorship is
shared between Jill Naiman and  Matthew Turk.

## Notes on common errors

jekyll 3.9.0 | Error:  No such file or directory @ realpath_rec 
 * hack: `touch /Users/jillnaiman/is445_spring2022/week03/jillnaiman@Jills-MacBook-Pro.local.36174`

Sometimes you have to re-install the bundle, to do this delete the Gemfile.lock and run `bundle install`
