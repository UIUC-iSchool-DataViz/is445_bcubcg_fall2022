---
layout: week
visible: true
icon: undraw_cohort_analysis_stny.svg
notitle: true
examples:
  - filename: prep_notebook_week03.ipynb
    type: ipynb
    title: Prep Notebook, Week 3
    description: Prep notebook for this week
  - filename: inClass_week03.ipynb
    type: ipynb
    title: In class notebook, Week 3
    description: Prep notebook for this week
  - filename: fall2019_prep_notebook_furtherExamples_01.ipynb
    type: ipynb
    title: fall2019_prep_notebook_furtherExamples_01.ipynb
    description: Extra notebook from 2019 class
  - filename: fall2019_prep_notebook_furtherExamples_02.ipynb
    type: ipynb
    title: fall2019_prep_notebook_furtherExamples_02.ipynb
    description: Extra notebook from 2019 class
  - filename: fall2019_prep_notebook_furtherExamples_03.ipynb
    type: ipynb
    title: fall2019_prep_notebook_furtherExamples_03.ipynb
    description: Extra notebook from 2019 class
  - filename: spring2019_prep_notebook_furtherExamples_week03.ipynb
    type: ipynb
    title: spring2019_prep_notebook_furtherExamples_week03.ipynb
  - filename: spring2019_prep_notebook_week03_part1.ipynb
    type: ipynb
    title: spring2019_prep_notebook_week03_part1.ipynb
  - filename: spring2019_prep_notebook_week03_part2.ipynb
    type: ipynb
    title: spring2019_prep_notebook_week03_part2.ipynb
data:
  - filename: building_inventory.csv
    type: dataLink
    title: Buildings dataset
    description: Illinois buildings dataset
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/main/data/building_inventory.csv
  - filename: michigan_lld.flt
    type: dataLink
    title: Michigan Depth Map (86Mb)
    description: Measurments taken from around Lake Michigan (https://www.ngdc.noaa.gov/mgg/greatlakes/michigan.html)
    link: https://github.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/raw/main/data/michigan_lld.flt
  - filename: single_dicom.h5
    type: dataLink
    title: Brain Scan (72Mb)
    description: MRI scan of a brain
    link: https://github.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/raw/main/data/single_dicom.h5
library:
  - filename: palette_colors.py
    type: library
    title: Palette Colors (palette_colors.py)
    description: Python library, save to notebook folder or modify your path if you know how to do that
---

# Types of Viz and Choosing Colors

This week, we will cover a bit about colors, and more about data transformations, and how we can
choose colors and transforms to better suit our data.

We also did some basics of Pandas last week and we'll continue this week.

Note there are a variety of notebooks from previous iterations of this course listed under the *Materials* subsection of today's lecture.  The "furtherExamples" notebooks are just there as reference, we will not be going through them by hand.


## References

 * <a href="http://jonathansoma.com/lede/algorithms-2017/classes/fuzziness-matplotlib/understand-df-plot-in-pandas/">Pandas vs. Matplotlib</a>
 * <a href="https://github.com/jnaiman/IS-452AO-Fall2019/blob/master/Lectures/Week-09-Dictionaries.ipynb">IS452's Dictionary week</a>
 * Colors: <a href="https://www.rapidtables.com/web/color/RGB_Color.html">RGB color triplets</a>
 * While we won't be using <a href="https://wholetale.org/">Whole Tale</a> for this lecture, it was used for the last iteration of this course and you should feel free to go through the code walk-throughs presented there by Matt Turk - just search for "IS590" under the <a href="https://dashboard.wholetale.org/browse">Browse Tales</a> header.

## Optional Reading List

 1. VAD, Ch. 10: Map Color and Other Channels 
 2. <a href="https://serialmentor.com/dataviz/color-basics.html">FDV, Ch. 4: Color scales</a> 
 3. VAD, Ch. 5: Marks and Channels 
 4. <a href="https://www.csc2.ncsu.edu/faculty/healey/PP/">Perception in Visualization (pay extra attention to the parts about color)</a>  
 5. <a href="https://jiffyclub.github.io/palettable/#documentation">Palettable Docs</a>
