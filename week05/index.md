---
layout: week
visible: true
icon: undraw_data_reports_706v.svg
notitle: true
examples:
  - filename: inClass_week05.ipynb
    type: ipynbInClass
    title: In class Notebook, Week 5
    description: Prep notebook for this week
  - filename: prep_notebook_week05.ipynb
    type: ipynb
    title: Prep Notebook, Week 5
    description: Prep notebook for this week
  - filename: fall2019_examples_week05.ipynb
    type: ipynb
    title: fall2019_examples_week05.ipynb
  - filename: spring2019_notes_week05_part1.ipynb
    type: ipynb
    title: spring2019_notes_week05_part1.ipynb
  - filename: spring2019_notes_week05_part2.ipynb
    type: ipynb
    title: spring2019_notes_week05_part2.ipynb
data:
  - filename: ufo-scrubbed-geocoded-time-standardized-00.csv
    type: dataLink
    title: The UFO Sitings Dataset (13Mb)
    description: Data about world wide reports of UFO sitings
    link:  https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/main/data/ufo-scrubbed-geocoded-time-standardized-00.csv
  - filename: michigan_lld.flt
    type: dataLink
    title: Michigan Depth Map (86Mb)
    description: Measurments taken from around Lake Michigan (https://www.ngdc.noaa.gov/mgg/greatlakes/michigan.html)
    link:  https://github.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/raw/main/data/michigan_lld.flt
  - filename: nations.json
    type: dataLink
    title: Wealth of Nations Data - nations.json
    description: GDP of nations as a function of time
    link: https://uiuc-ischool-dataviz.github.io/spring2019online/week06/data_and_libs/nations.json
library:
  - filename: wealth_of_nations.py
    type: library
    title: Wealth of Nations Library (wealth_of_nations.py)
    description: Python library, save to notebook folder or modify your path if you know how to do that
---

# Continuing interactivity with bqplot

Time to start talking about interactivity in more detail!

During class today, we will explore creating interactive visualizations using
bqplot.  For next week, we will discuss the taxonomy of interactive
visualizations and how we can use that understanding to better guide our
construction.

 * [Narrative Visualization](http://doi.org/10.1109/TVCG.2010.179) by Segel and
   Heer
 * [Watch This: A Taxonomy for Dynamic Data Visualization](http://doi.org/10.1109/VAST.2012.6400552) by Cottam et al
 * [FiveThirtyEight Datasets](https://github.com/fivethirtyeight/data)
 
<!-- ## Downloads

### Data:

 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week04/data/ufo-scrubbed-geocoded-time-standardized-00.csv" download>The UFO Sitings Dataset (13Mb) - ufo-scrubbed-geocoded-time-standardized-00.csv</a>
 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week05/data/michigan_lld.flt" download>Michigan Depth Map (86Mb) - michigan_lld.flt</a>
 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week06/data_and_libs/nations.json" download>Wealth of Nations Data - nations.json</a>
 -->

### Resources

<!-- * <a href='wealth_of_nations.py' download>Wealth of Nations Library - wealth_of_nations.py</a> -->
 * [Github pages: https://pages.github.com/](https://pages.github.com/)

## Optional Reading List

 1. <a href="https://www.youtube.com/watch?v=rraXF0EjRC8">Video about bqplot</a> 
 2. <a href="https://towardsdatascience.com/a-comprehensive-guide-to-the-grammar-of-graphics-for-effective-visualization-of-multi-dimensional-1f92b4ed4149">An introduction to Grammar of Graphics</a> 
 3. <a href="https://ipywidgets.readthedocs.io/en/latest/">ipywidgets Docs</a>; <a href="https://traitlets.readthedocs.io/en/stable/">Traitlets Docs</a>; <a href="https://bqplot.readthedocs.io/en/latest/">bqplot Docs</a>
