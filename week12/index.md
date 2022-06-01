---
layout: week
visible: true
icon: undraw_Books_l33t.svg
notitle: true
examples:
  - filename: inClass_week12_spring2022
    type: iodide
    title: In Class Notebook, Week 12
    description: In Class Starboard Notebook
    link: https://starboard.gg/nb/nZa79A6
  - filename: prep_notebook_week12_spring2022
    type: iodide
    title: Prep Starboard Notebook, Week 12
    description: Prep Starboard Notebook
    link: https://starboard.gg/nb/nrWqgSu
  - filename: index.idyll
    type: iodide
    title: Prep index.idyll file, Week 12
    description: We'll be building toward a webpage like <a href="https://jnaiman.github.io/misc/">this</a> today using <a href="https://idyll-lang.org/">Idyll's</a> built-in components. 
    link: https://github.com/UIUC-iSchool-DataViz/is445_spring2022/blob/master/week12/corg/prepIdyll/index.idyll
  - filename: index.idyll
    type: iodidePast
    title: Past index.idyll file with more vega-lite
    description: index.idyll file - Even more vega-lite examples 
    link: https://github.com/UIUC-iSchool-DataViz/is445_AOUAOG_fall2021/blob/master/week11/corg/prepIdyll/index.idyll
  - filename: In Class Idyll
    type: iodide
    title: In class Idyll resources, Week 12
    description: Updating storage of Idyll files in class
    link: https://github.com/UIUC-iSchool-DataViz/is445_spring2022/tree/master/week12/inClass
  - filename: prep_notebook_week11
    type: iodidePast
    title: Previous class notebook
    description: Prep Iodide Notebook, Spring 2020
    link: https://alpha.iodide.io/notebooks/4399/
data:
  - filename: mobility.csv
    type: dataLink
    title: The Mobility dataset (online)
    description: A dataset of USA "mobility" which (I <b>think</b> comes from a <a href="https://www.census.gov/library/working-papers/2018/adrm/CES-WP-18-40R.html">a large census study from 1989-2015</a>) and is collected in several places <a href="http://www.stat.cmu.edu/~cshalizi/uADA/15/hw/01/mobility.csv">including right here</a>.  Here "mobility" is refering to how easy it is for a person to move up in economic status (<a href="http://www.stat.cmu.edu/~cshalizi/uADA/15/hw/01/hw-01.pdf">more info can be found here</a>) based on factors like parental income, location, race, etc.
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_spring2021/master/week08/data/mobility.csv
  - filename: corgs_per_country_over_time_columns_2020.csv
    type: dataLink
    title: Corgis per country over time 
    description: This dataset is from the <a href="http://cardiped.net/">Cardigan Archives</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/grabCorgData_subpages.py">scraped using Beautiful Soup in Python</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/calc_corgData.ipynb">further processed in Python</a> into this form.
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445AOG_fall2020/master/week11/corg/corgs_per_country_over_time_columns_2020.csv
  - filename: corgiData_countries_subset_2020.json
    type: dataLink
    title: Subset of full Corgi database 
    description: This dataset is from the <a href="http://cardiped.net/">Cardigan Archives</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/grabCorgData_subpages.py">scraped using Beautiful Soup in Python</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/calc_corgData.ipynb">further processed in Python</a> into this form.
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445AOG_fall2020/master/week11/corg/corgiData_countries_subset_2020.json
---

# Finish up with Starboard, Intro to Idyll 

Today we'll cover a brief intro of [Idyll](https://idyll-lang.org/) and web development in general.

<!--
## Downloads & Links

### Iodide Notebooks:

 * We'll finish up with this notebook: <a href="https://alpha.iodide.io/notebooks/6217/">Prep Iodide Notebook</a>
 * <a href="https://alpha.iodide.io/notebooks/6219/">In Class Iodide Notebook</a> 
 
 Feel free to check out [Spring 2020's notebook that uses police shooting data for visualization](https://alpha.iodide.io/notebooks/4399/) if you are interested in other mappable datasets.  
-->
 
## Extra files

Further example of Idyll pages: website from [Spring 2020](https://jnaiman.github.io/items_dataviz_spring2020/) which focuses on using [d3.js](https://d3js.org/) to do many plots since vega-lite was not working well at that time.  The index.idyll file, along with example d3 components and a styles.css file for the final map are in [this subdirectory from that course page here](https://github.com/UIUC-iSchool-DataViz/spring2020/tree/master/week15/corg).

Full corgi dataset available [here](corg/corgiData_countries_full_2020.json).


<!--
### Idyll Files & Example pages

We'll be building toward [this index.idyll file right here](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week11/corg/prepIdyll/index.idyll).


Further examples include:
 * Website from [Spring 2020](https://jnaiman.github.io/items_dataviz_spring2020/) which focuses on using [d3.js](https://d3js.org/) to do many plots since vega-lite was not working well at that time.  The index.idyll file, along with example d3 components and a styles.css file for the final map are in [this subdirectory from that course page here](https://github.com/UIUC-iSchool-DataViz/spring2020/tree/master/week15/corg).
-->

<!--
### Data

 1. <a href="corg/corgs_per_country_over_time_columns_2020.csv" download>Corgis per country over time (corgs_per_country_over_time_columns_2020.csv)</a>
 1. <a href="corg/corgiData_countries_subset_2020.json" download>Subset of full Corgi database (corgiData_countries_subset_2020.json)</a>
 
This dataset is from the [Cardigan Archives](http://cardiped.net/) and [scraped using Beautiful Soup in Python](https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/grabCorgData_subpages.py) and [further processed in Python](https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/calc_corgData.ipynb) into this form.
-->
 
<!--
### Links & Code

 1. We'll be building toward a webpage like [this](https://jnaiman.github.io/) today using [Idyll](https://idyll-lang.org/)'s built-in components.
 1. We got to this [Markdown code right here in Class this week](https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/inClass/index.idyll).
 1. Full Markdown code for this week and next week [available right here](https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/index.idyll).
-->

## Optional reading list

 1. <a href="https://idyll-lang.org/docs"> Idyll Docs</a> - in particular: <a href="https://idyll-lang.org/docs/components">Built in</a>/<a href="https://idyll-lang.org/docs/components/npm">npm installed</a> components
 1. Idyll example: [https://mathisonian.github.io/diy-data-fugazi/](https://mathisonian.github.io/diy-data-fugazi/)
