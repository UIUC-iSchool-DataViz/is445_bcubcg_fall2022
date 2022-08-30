---
layout: week
visible: true
icon: undraw_version_control_9bpv.svg
notitle: true
examples:
  - filename: prep_notebook_week02.ipynb
    type: ipynb
    title: Prep Notebook, Week 2
    description: Prep notebook for this week
  - filename: inClass_week02.ipynb
    type: ipynb
    title: In class, Week 2
    description: in class notebook for this week
  - filename: spring2021_prep_notebook_week02.ipynb
    type: ipynb
    title: Notebook from past class 
    description: Extra notebook from 2021 class
  - filename: spring2019_prep_notebook_week02.ipynb
    type: ipynb
    title: Notebook from past class (2019)
    description: Extra notebook from 2019 class
data:
  - filename: building_inventory.csv
    type: dataLink
    title: Buildings dataset
    description: Illinois buildings dataset
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/main/data/building_inventory.csv
  - filename: littleCorgiInHat.png
    type: dataLink
    title: Corgi in Hat
    description: Image of a corgi in a hat
    link: https://github.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/raw/main/data/littleCorgiInHat.png
  - filename: stitch_reworked.png
    type: dataLink
    title: Stitch Image
    description: Three-color image of stitch
    link: https://github.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/raw/main/data/stitch_reworked.png
---

# Data Storage and Operations

This week we discussed how data is stored on disk and in memory, how that
interacts with our visualization process, and we introduced the notion of a
palette of operations you can apply to data to visualize it.

<!-- ## Downloads: Data

 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week02/building_inventory.csv" download>Building Inventory CSV file (building_inventory.csv)</a>
 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week01/images/stitch_reworked.png" download>Stitch Image (stitch_reworked.png)</a>
 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week04/data/littleCorgiInHat.png" download>Another practice image (littleCorgiInHat.png)</a>
 -->

## References

 * Python:
    * <a href="https://github.com/jnaiman/IS-452AO-Fall2019/blob/master/Lectures/Week-10-JSONandCSV.ipynb">IS452's Intro to Reading & Writing CSV files (scroll down on page)</a>
    * <a href="https://github.com/jnaiman/IS-452AO-Fall2019/blob/master/Lectures/Week-09-Dictionaries.ipynb">IS452's Dictionary week</a>
 * Colors: <a href="https://www.rapidtables.com/web/color/RGB_Color.html">RGB color triplets (we will also cover this extensively next week)</a>

Also, more about numpy.reshape (and what the -1 means): https://stackoverflow.com/questions/18691084/what-does-1-mean-in-numpy-reshape

## Optional Reading List (See syllabus for acronyms)

 1. VAD, Ch. 2: What: Data Abstraction 
 2. <a href="https://serialmentor.com/dataviz/aesthetic-mapping.html">FDV, Ch. 2: Visualizing data: Mapping data onto aesthetics</a> 
 3. VAD, Ch. 13: Reduce Items and Attributes 
 4. <a href="https://serialmentor.com/dataviz/image-file-formats.html">FDV, Ch. 27: Understanding the most commonly used image file formats</a> 
 5. <a href="https://github.com/jnaiman/IS-452AO-Fall2019/blob/master/Lectures/Week-10-JSONandCSV.ipynb">IS452's intro to CSV files (bottom of page)</a> 
 6. <a href="https://github.com/jnaiman/IS-452AO-Fall2019/blob/master/Lectures/Week-09-Dictionaries.ipynb">IS452's Intro to Dictionaries</a> 
 7. <a href="https://pandas.pydata.org/pandas-docs/stable/">Pandas Docs</a> & <a href="https://docs.scipy.org/doc/numpy/reference/">NumPy Docs</a> 
