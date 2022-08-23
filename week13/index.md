---
layout: week
visible: true
icon: undraw_monitor_iqpq.svg
notitle: true
examples:
  - filename: In Class Jekyll
    type: iodide
    title: In class Jekyll resources, Week 14
    description: Updating storage of Jekyll files in class
    link: https://github.com/UIUC-iSchool-DataViz/is445_spring2022/tree/master/week14/inClass
  - filename: Prep repo
    type: iodide
    title: Prep resources, Week 14
    description: Prep Jekyll file and components
    link: https://github.com/jnaiman/online_cv_public
  - filename: inClass_week14.ipynb
    type: ipynb
    title: In class jupyter notebook
    description: Placeholder for in class coding
  - filename: prep_notebook_week14_part1.ipynb
    type: ipynb
    title: Prep Notebook, Week 14, Part 1
    description: Prep notebook for this week
  - filename: prep_notebook_week14_part2.ipynb
    type: ipynb
    title: Prep Notebook, Week 14, Part 2
    description: Prep notebook for this week
data:
  - filename: corgs_per_country_over_time_columns_2020.csv
    type: dataLink
    title: Corgis per country over time 
    description: This dataset is from the <a href="http://cardiped.net/">Cardigan Archives</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/grabCorgData_subpages.py">scraped using Beautiful Soup in Python</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/calc_corgData.ipynb">further processed in Python</a> into this form.
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/main/data/corgs_per_country_over_time_columns_2020.csv
  - filename: corgiData_countries_subset_2020.json
    type: dataLink
    title: Subset of full Corgi database 
    description: This dataset is from the <a href="http://cardiped.net/">Cardigan Archives</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/grabCorgData_subpages.py">scraped using Beautiful Soup in Python</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/calc_corgData.ipynb">further processed in Python</a> into this form.
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/main/data/corgiData_countries_subset_2020.json
  - filename: galaxyFiles.zip
    type: dataLink
    title: Galaxy Particle Simulation files (77Mb)
    description: Downsampled output files from a particle simulation of a galaxy merger
    link: https://github.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/raw/main/data/galaxyFiles.zip
  - filename: IsolatedGalaxy.tar.gz
    type: dataLink
    title: Isolated Galaxy dataset (292 Mb)
    description: A single snapshot in time of a grid simulation of an isolated galaxy 
    link: http://yt-project.org/data/IsolatedGalaxy.tar.gz
library:
  - filename: solverlibs.py
    type: library
    title: Solver library (solverlibs.py)
    description: Python library, save to notebook folder or modify your path if you know how to do that
---

# A few more Jekyll+Altair things, Starting SciViz

A few more things in Jekyll+Altair.



<!-- #### Galaxy data (if time)

 1. Download and unzip [this set of files here (galaxyFiles.zip, 77M)](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/raw/master/week13/galaxyFiles.zip)
 1. Make note of where this unzips -- this is where `solverlibs.py` gets unpacked.
 
We'll be using the <a href="http://yt-project.org/data/IsolatedGalaxy.tar.gz" download>Isolated Galaxy dataset (292 Mb)</a> dataset for sci viz next week.
-->

## Optional reading list

1. <a href="https://altair-viz.github.io/gallery/index.html">Altair Docs</a> 
1. <a href="https://books.google.com/books?hl=en&lr=&id=jUw7DwAAQBAJ&oi=fnd&pg=PA91&dq=scientific+visualization+misinformation&ots=Cv0QmoCdM2&sig=7xycURu8Um_C9VtHqf-aWg4qaEo#v=onepage&q=scientific%20visualization%20misinformation&f=false">Chapter 5: Dimensions of Visual Misinformation in the Emerging Media Landscape in the book "Misinformation and Mass Audiences"</a>

Also, here is a slightly more in-depth explanation of path/ray tracing which we'll talk about more in Week 14:

<iframe width="560" height="315" src="https://www.youtube.com/embed/frLwRLS_ZR0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
