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

I couldn't get crontab to work (I think it has to do with the user-key/ssh permissions something something), but that is probably a much more elegant solution.

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
