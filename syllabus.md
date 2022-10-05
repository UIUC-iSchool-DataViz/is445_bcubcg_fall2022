---
layout: syllabus
title: Syllabus
notitle: true
---

# COVID-19 Statement
In keeping with University and iSchool policy, all students are required to engage in appropriate behavior to protect the health and safety of our community.  

If you feel ill or are unable to come to class or complete class assignments due to issues related to COVID-19, including but not limited to: testing positive yourself, feeling ill, caring for a family member with COVID-19, or having unexpected child-care obligations, should contact their instructor immediately and cc their advisor.

Additionally, please be aware that there are mental health resources available to students:
 * https://www.counselingcenter.illinois.edu/ 
 * https://mckinley.illinois.edu/medical-services/mental-health 
 * https://www.disability.illinois.edu/health/mental-health-resources 
 

## Impact on assignments

Finally, due to the current messiness of the COVID learning environment, we are allowing up to three late homeworks.  If you need to “use” one of your late homeworks email the instructor and/or the TA.  You do not need to provide any explanation for why you’d like to use one of your late homeworks.  You will then have until the end of the week -- the Friday after the homework was due, midnight -- to turn in this assignment.  No extensions can be applied to Weekly Viz reports or any parts of the Final Project.

Late policies for homeworks not on extension include: 10% off for 1 day late, 20% off for 2 days late, 30% off for 3 days late.  All homeworks not on extension will be given a zero if turned in after 3 days past the due date.

# Course Description

Data visualization is crucial to conveying information drawn from models,
observations or investigations. This course will provide an overview of
historical and modern techniques for visualizing data, drawing on
quantitative, statistical, and network-focused datasets. Topics will include
construction of communicative visualizations, the modern software ecosystem
of visualization, and techniques for aggregation and interpretation of data
through visualization. Particular attention will be paid to the Python
ecosystem and multi-dimensional quantitative datasets. 

# Land Acknowledgment

As a land-grant institution, the University of Illinois at Urbana-Champaign has
a responsibility to acknowledge the historical context in which it exists. In
order to remind ourselves and our community, we will begin this event with the
following statement. We are currently on the lands of the Peoria, Kaskaskia,
Peankashaw, Wea, Miami, Mascoutin, Odawa, Sauk, Mesquaki, Kickapoo, Potawatomi,
Ojibwe, and Chickasaw Nations. It is necessary for us to acknowledge these
Native Nations and for us to work with them as we move forward as an
institution. Over the next 150 years, we will be a vibrant community inclusive
of all our differences, with Native peoples at the core of our efforts.

[More information can be found on the Chancellor's
Website.](https://chancellor.illinois.edu/land_acknowledgement.html)

## Course Overview

This course is designed to give practical advice to students on
communicating data through visualization.  This will involve a considerable
amount of programming, and typically this programming will be done in Python, 
and some Javascript later in the course.
For the most part, our data will be quantitative and multi-dimensional.  The
course will aim to provide both an understanding of what data visualizations
communicate and a set of tools for constructing them yourself.

The course will follow a common pattern within each three-hour instructional
session.  The first 60-90 minutes will be focused on lecture, where concepts
and tools will be introduced; typically, each class will focus on one type of
visualization or class of visualization.  The remaining time will include
exploration of a dataset, which may be independent or in groups, and then a
wrap-up session at the end.

Students are expected to have laptops with them, as well as access to Python
installations (we will go over how to setup the correct packages), and will be encouraged to participate in class.  Homework will
be assigned and collected through
other methods specified at time of submission like Moodle.

The central themes of the course are:

1. What are the components of an effective visualization of quantitative data?
2. What tools and ecosystems are available for visualizing data?
3. What systems can be put in place to generate visualizations rapidly and with
   high-fidelity representation?

## Pre- and Co-requisites

None, although basic Python programming experience is assumed.  A brief
introduction to Python will be presented during the course.

# Course Materials

There is no required textbook for this course.  All course materials will be posted to
the GitHub repository at https://github.com/UIUC-iSchool-DataViz/is445_spring2021 .

A list of Python libraries week-by-week and tips on how to install them <a href="https://uiuc-ischool-dataviz.github.io/is445_spring2021/week01/installation_instructions">can be found by clicking this link</a>.

**Optional** textbook [Visualization Analysis and Design by Tamara Munzner](https://www.amazon.com/gp/product/1466508914/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1).  You can find a lot of the concepts from this textbook on [the books webpage](https://www.cs.ubc.ca/~tmm/vadbook/) and the [associated lecture slides](https://www.cs.ubc.ca/~tmm/talks.html#vadallslides).

As the course progresses, a list of recommended readings will be generated for
each class.  These will be included in the course materials repository, and
students are encouraged to fork that repository and issue pull requests to add
suggested readings.

# Writing Resources
The iSchool Writing Resources is the in-house writing support team for graduate students at the iSchool.  They are here to help you with your writing and help you feel more comfortable and confident in your skills. The writing consultants are not professors or evaluators. They simply know the struggles of graduate and undergraduate-level writing and want to help you learn how to succeed and improve your writing skills. The iSchool writing consultants can help you with every step of the writing process. For detailed information on our services please visit our website:
https://publish.illinois.edu/ischoolwritingresources/


# Topic Calendar & Optional Reading

Below is an approximate outline of the course and **optional** reading for each week.  
Note that the reading is meant to be *complementary* to the course, i.e. we won't 
simply rehash what is in the reading during class.

This course is always under development and  the
course outline below is subject to some flexibility; students will be encouraged
to provide feedback on the topics covered, particularly toward the end.  Topics
that are of particular interest will be emphasized.

**Optional texts:**
 * <a href="https://www.amazon.com/Visualization-Analysis-Design-AK-Peters/dp/1466508914/ref=sr_1_2?crid=1WC409BVX1489&keywords=visualization+analysis+and+design&qid=1580082878&sprefix=visualization%2Caps%2C158&sr=8-2">Visualization Analysis & Design, Tamara Munzner</a>. You can find a lot of the concepts from this textbook on [the books webpage](https://www.cs.ubc.ca/~tmm/vadbook/) and the [associated lecture slides](https://www.cs.ubc.ca/~tmm/talks.html#vadallslides).
 * Edward Tufte wrote a series of visualization books that are often thought of as foundational to the field.  These include <a href="https://www.amazon.com/Visual-Display-Quantitative-Information/dp/0961392142/ref=sr_1_1?keywords=edward+tufte+books&qid=1580082986&sr=8-1">The Visual Display of Quantitative Information</a>, <a href="https://www.amazon.com/Beautiful-Evidence-Edward-R-Tufte/dp/0961392177/ref=sr_1_2?keywords=edward+tufte+books&qid=1580082986&sr=8-2">Beautiful Evidence</a>, <a href="https://www.amazon.com/Envisioning-Information-Edward-R-Tufte/dp/0961392118/ref=sr_1_3?keywords=edward+tufte+books&qid=1580082986&sr=8-3">Envisioning Information</a>, and <a href="https://www.amazon.com/Visual-Explanations-Quantities-Evidence-Narrative/dp/0961392126/ref=sr_1_4?keywords=edward+tufte+books&qid=1580082986&sr=8-4">Visual Explanations: Images and Quantities, Evidence and Narrative<a>
 * There is a free online book, <a href="https://serialmentor.com/dataviz/">Fundamentals of Data Visualization by Claus O. Wilke</a> that provies a lot of nice examples and serves as an intro to Tamara Munzner's book.  It has an <a href="https://serialmentor.com/dataviz/bibliography.html">annotated bibliography at the end</a> that gives a few references for books in data viz that include programming. It is built from the linked <a href="https://github.com/clauswilke/dataviz">GitHub repo</a>.  Note that this book is focused on static (not interactive) visualizations.
 * Additional references will be added as needed.

Acronyms for books:
 * VAD: Visualization Analysis & Design
 * FDV: Fundamentals of Data Visualization

**Course Outline and *Optional* Reading List**

<style>
table th:first-of-type {
    width: 10%;
}
table th:nth-of-type(2) {
    width: 30%;
}
table th:nth-of-type(3) {
    width: 60%;
}
</style>

| Week   | Topic  |  Reading 
-------|-------------------|---------
| <a name="week1">Week 1</a> | Introduction, syllabus, examples, and some basics | 1. VAD, Ch. 1: What's Viz, and Why Do It? <br> 2. <a href="https://serialmentor.com/dataviz/introduction.html">FDV, Ch. 1: Introduction</a> & <a href="https://serialmentor.com/dataviz/proportional-ink.html">FDV, Ch. 17: The principle of proportional ink</a> <br> 3. <a href="https://medium.com/multiple-views-visualization-research-explained/same-data-multiple-perspectives-curse-of-knowledge-in-visual-data-communication-d827c381f936">Same Data, Multiple Perspectives</a> <br> 4. [Intro to Jupyter Notebook Video](https://www.youtube.com/watch?v=3C9E2yPBw7s)
| <a name="week2">Week 2</a> | Data storage & Operations; Image data | 1. VAD, Ch. 2: What: Data Abstraction <br> 2. <a href="https://serialmentor.com/dataviz/aesthetic-mapping.html">FDV, Ch. 2: Visualizing data: Mapping data onto aesthetics</a> <br> 3. VAD, Ch. 13: Reduce Items and Attributes <br> 4. <a href="https://serialmentor.com/dataviz/image-file-formats.html">FDV, Ch. 27: Understanding the most commonly used image file formats</a> <br> 5. <a href="https://github.com/jnaiman/IS-452AO-Fall2019/blob/master/Lectures/Week-10-JSONandCSV.ipynb">IS452's intro to CSV files (bottom of page)</a> <br> 6. <a href="https://github.com/jnaiman/IS-452AO-Fall2019/blob/master/Lectures/Week-09-Dictionaries.ipynb">IS452's Intro to Dictionaries</a> <br> 7. <a href="https://pandas.pydata.org/pandas-docs/stable/">Pandas Docs</a> & <a href="https://docs.scipy.org/doc/numpy/reference/">NumPy Docs</a> 
| <a name="week3">Week 3</a> | Types of Viz and color, colormaps | 1. VAD, Ch. 10: Map Color and Other Channels <br> 2. <a href="https://serialmentor.com/dataviz/color-basics.html">FDV, Ch. 4: Color scales</a> <br> 3. VAD, Ch. 5: Marks and Channels <br> 4. <a href="https://www.csc2.ncsu.edu/faculty/healey/PP/">Perception in Visualization (pay extra attention to the parts about color)</a>  <br> 5. <a href="https://jiffyclub.github.io/palettable/#documentation">Palettable Docs</a>
| <a name="week4">Week 4</a> | Beginning Interactivity | 1. <a href="https://ipywidgets.readthedocs.io/en/latest/examples/Widget%20Basics.html">Intro to ipywidgets</a> <br> 2. <a href="https://github.com/jupyter-widgets/ipywidgets/blob/master/docs/source/examples/Index.ipynb">Example Widgets Notebooks</a> <br> 3. VAD Ch. 7: Arrange Tables <br> 4. <a href="https://serialmentor.com/dataviz/histograms-density-plots.html">FDV, Ch. 7: Visualizing distributions: Histograms and density plots</a> 
| <a name="week5">Week 5</a> | Distributions, Engines |  1. <a href="https://www.youtube.com/watch?v=rraXF0EjRC8">Video about bqplot</a> <br> 2. <a href="https://towardsdatascience.com/a-comprehensive-guide-to-the-grammar-of-graphics-for-effective-visualization-of-multi-dimensional-1f92b4ed4149">An introduction to Grammar of Graphics</a> <br> 3. <a href="https://ipywidgets.readthedocs.io/en/latest/">ipywidgets Docs</a>; <a href="https://traitlets.readthedocs.io/en/stable/">Traitlets Docs</a>; <a href="https://bqplot.readthedocs.io/en/latest/">bqplot Docs</a>
| <a name="week6">Week 6</a> | Dashboards & Maps with bqplot | 1. VAD Ch. 8.1-8.3: Arrange Spatial Data <br> 2. VAD Ch. 11.1-11.5: Manipulate View <br> 3. <a href="https://serialmentor.com/dataviz/geospatial-data.html">FDV, Ch. 15: Visualizing geospatial data</a>
| <a name="week7">Week 7</a> | More with maps - bqplot, cartopy, ipyleaflet, geopandas | 1. VAD Ch. 8.1-8.3: Arrange Spatial Data <br> 2. <a href="https://serialmentor.com/dataviz/geospatial-data.html">FDV, Ch. 15: Visualizing geospatial data</a> <br> 3. VAD, Ch. 13.4.2: Reduce Items and Attributes <br> 4. <a href="https://scitools.org.uk/cartopy/docs/latest/">Cartopy docs</a>; <a href="https://ipyleaflet.readthedocs.io/en/latest/">ipyleaflet docs</a>; <a href="https://geopandas.org/">Geopandas Docs</a>
| <a name="week8">Week 8</a> | Designing for the web with Python & Javascript with Starboard | 1. <a href="https://starboard.gg/">Starboard Docs</a> - in particular: <a href="https://starboard.gg/#python">Pandas & Python</a> & <a href="https://www.markdownguide.org/basic-syntax/">general Markdown format</a> <br> 2. <a href="https://www.codecademy.com/learn/introduction-to-javascript">Intro to Javascript</a> <br> 3. <a href="https://serialmentor.com/dataviz/directory-of-visualizations.html">FDV, Ch. 5: Directory of visualizations</a>
| <a name="week9">Week 9</a> | Designing for the web with Python & Javascript, Web dev with Starboard; Considering your audience | 1. <a href="https://medium.com/multiple-views-visualization-research-explained/same-data-multiple-perspectives-curse-of-knowledge-in-visual-data-communication-d827c381f936">Same Data, Multiple Perspectives</a> <br> 2. <a href="https://serialmentor.com/dataviz/telling-a-story.html">FDV, Ch. 29: Telling a story and making a point</a> <br> 3. <a href="https://starboard.gg/">Starboard Docs</a> <br> 4. <a href="https://vega.github.io/vega-lite/docs/">vega-lite docs</a> - in particular: <a href="https://vega.github.io/vega-lite/docs/transform.html">Vega-lite transformations</a> & <a href="https://vega.github.io/vega-lite/docs/selection.html">Vega-lite selections</a> <br> 5. <a href="https://jekyllrb.com/showcase/"> Jekyll Examples</a>
| <a name="week10">Week 10</a> | More javascript & web dev with Jekyll  | 1. <a href="https://jekyllrb.com/tutorials/home/">Jekyll Tutorials (hit "Next" to see them at bottom)</a>
| <a name="week11">Week 11</a> | More web dev with Jekyll & Altair  | 1. <a href="https://jekyllrb.com/tutorials/home/">Jekyll Tutorials (hit "Next" to see them at bottom)</a> <br> 2. <a href="https://altair-viz.github.io/gallery/index.html">Altair docs</a> - in particular <a href="https://altair-viz.github.io/user_guide/encoding.html#encoding-data-types">Encoding Data Types</a>, <a href="https://altair-viz.github.io/user_guide/internals.html#converting-vega-lite-to-altair">Vegalite-Altair conversions</a>, <a href="https://altair-viz.github.io/user_guide/transform/bin.html#bin-transforms">Binning</a>, <a href="https://altair-viz.github.io/user_guide/transform/filter.html">Filter transforms</a> and <a href="https://altair-viz.github.io/gallery/interactive_cross_highlight.html#interactive-chart-with-cross-highlight">interactive examples</a>
| <a name="week12">Week 12</a> | Election Day, no classes, go vote if you are eligible! | NA
| <a name="week13">Week 13</a> | More Jekyll & Altair & vega-lite, Publishing Viz | 1. <a href="https://altair-viz.github.io/gallery/index.html">Altair Docs</a> - in particular <a href="https://altair-viz.github.io/user_guide/data.html#including-index-data">Including Indexes</a>, <a href="https://altair-viz.github.io/altair-tutorial/notebooks/06-Selections.html">Interactivity & Selections</a>, <a href="https://altair-viz.github.io/gallery/multiline_tooltip.html#multi-line-tooltip">Multi-line tooltips</a>, <a href="https://altair-viz.github.io/user_guide/interactions.html#bindings-selections-conditions-making-charts-interactive">Interactive Binning</a>, <a href="https://altair-viz.github.io/user_guide/transform/filter.html#filter-transform">Filter Transformations</a>, <a href="https://altair-viz.github.io/altair-tutorial/notebooks/09-Geographic-plots.html">Geographic plots</a>, and <a href="https://altair-viz.github.io/user_guide/transform/fold.html">Fold Transformations</a> <br> 2. <a href="https://books.google.com/books?hl=en&lr=&id=jUw7DwAAQBAJ&oi=fnd&pg=PA91&dq=scientific+visualization+misinformation&ots=Cv0QmoCdM2&sig=7xycURu8Um_C9VtHqf-aWg4qaEo#v=onepage&q=scientific%20visualization%20misinformation&f=false">Chapter 5: Dimensions of Visual Misinformation in the Emerging Media Landscape in the book "Misinformation and Mass Audiences"</a>
| <a name="week14">Week 14</a>  | Fall break, no classes, enjoy! | NA
| <a name="week15">Week 15</a> | Scientific visualization <br> <br> Guest lecture about scientific & cinematic viz from <a href="https://svs.gsfc.nasa.gov/">NASA SVS</a>  |  1. VAD Ch. 8.4-8.6: Arrange Spatial Data <br> 2. VAD Ch. 11.6: Manipulate View <br> 3. <a href="https://yt-project.org/">yt docs</a> <br> 4. <a href="https://yt-project.org/doc/visualizing/volume_rendering.html">yt Volume Rendering Tutorial</a>
| <a name="week16">Week 16</a> | Network Viz & Word cloud Viz; Class summary | 1. VAD Ch. 9: Arrange Networks and Trees <br> 2. VAD, Ch. 13.4.3.1: Reduce Items and Attributes <br> 3. VAD, Ch. 6: Rules of Thumb <br> 4. [FDV, Ch. 28: Choosing the right visualization software](https://serialmentor.com/dataviz/choosing-visualization-software.html) <br> 5. [FDV, Ch. 26: Don't go 3D](https://serialmentor.com/dataviz/no-3d.html) <br> 6. [FDV, Ch. 25: Avoid line drawings](https://serialmentor.com/dataviz/avoid-line-drawings.html)


# About Your Instructor

Jill Naiman's background is in theoretical and computational astrophysics with a current research emphasis on scientific data visualization and the digitization of historical scientific images and text.  In addition to her position as Teaching Faculty at the iSchool, she is also currently a Visiting Scholar at the Advanced Visualization Lab at the National Center for Supercomputing Applications.  She is currently involved in projects related to increasing access to industry-standard special effects software for scientists - more info can be found <a href="http://ytini.com">here</a> and <a href="http://astroblend.com">here</a>.  Information about her astrophysical research and outreach efforts can be found <a href="http://astronaiman.com">here</a>.

# Library Resources

| http://www.library.illinois.edu/lis/ |
| lislib@library.illinois.edu          |
| Phone: (217) 300-8439                |

# Writing and Bibliographic Style Resources
The campus-wide Writers Workshop provides free consultations. For more
information see <http://www.cws.illinois.edu/workshop/> The iSchool
has a Writing Resources Moodle site
<https://courses.ischool.illinois.edu/course/view.php?id=1705> and
iSchool writing coaches also offer free consultations.


# Academic Integrity

Please review and reflect on the academic integrity policy of the University of Illinois, http://studentcode.illinois.edu/article1_part4_1-401.html, to which we subscribe. By turning in materials for review, you certify that all work presented is your own and has been done by you independently, or as a member of a designated group for group assignments. 

If, in the course of your writing, you use the words or ideas of another writer, proper acknowledgement must be given (using APA, Chicago, or MLA style). Not to do so is to commit plagiarism, a form of academic dishonesty. If you are not absolutely clear on what constitutes plagiarism and how to cite sources appropriately, now is the time to learn. Please ask me!

Please be aware that the consequences for plagiarism or other forms of academic dishonesty will be severe. Students who violate university standards of academic integrity are subject to disciplinary action, including a reduced grade, failure in the course, and suspension or dismissal from the University.

Criteria for grading homework assignments include (but are not limited to) creativity and the amount of original work demonstrated in the assignment. However, students are permitted to use and adapt the work of others, provided that the following guidelines are followed:
 * Use of other people’s material must not infringe the copyright of the original author, nor violate the terms of any licensing agreement. Know and respect the principles of fair use with respect to copyrighted material.
 * Students must scrupulously attribute the original source and author of whatever material has been adapted for the assignment. Summarize the changes or adaptations that have been made. Make plain how much of the assignment represents original work.
 
*This applies to code as well* -- you are welcome to use online sources (e.g. StackOverflow) but be sure to include the URL in your code comments.

Additionally, unless explicitly stated **do not** publish homework solutions online.

# Statement of Inclusion

[Review the statement](http://www.inclusiveillinois.illinois.edu/mission.html).

As the state’s premier public university, the University of Illinois at Urbana-Champaign’s core mission is to serve the interests of the diverse people of the state of Illinois and beyond. The institution thus values inclusion and a pluralistic learning and research environment, one which we respect the varied perspectives and lived experiences of a diverse community and global workforce. We support diversity of worldviews, histories, and cultural knowledge across a range of social groups including race, ethnicity, gender identity, sexual orientation, abilities, economic class, religion, and their intersections.


# Accessibility Statement

To obtain accessibility-related academic adjustments and/or auxiliary aids, students with disabilities must contact the course instructor and the  [Disability Resources and Educational Services](http://disability.illinois.edu/) (DRES) as soon as possible. To contact DRES you may visit 1207 S. Oak St., Champaign, call 333-4603 (V/TTY), or e-mail a message to disability@uiuc.edu.  

This syllabus may be obtained in alternative formats upon request. Please contact the instructor.


# Assignments and Evaluation

Students will be graded based on a combination of assignments (70%: 40% (maximum) standard prose/code assignments and
30% weekly visualization reports) and a final
project (30%).  The final project will be a capstone to the course, and will
have greater flexibility in software packages and data sources.  This project
will be introduced around Week 8.

There will be opportunities for extra credit in the homework and final project portions.  The *maximum* homework score is 
fixed at 40% (even with extra credit included).

**In summary, your grades consist of:**

| 40% | Standard assignments in prose or code form (40% is the MAX grade, even with extra credit)
| 30% | Weekly visualization reports
| 30% | Final project


Assignments in this course will be a mixture of coding/visualization work and
written work.  These two may not be distinct assignments; students will be
asked to describe their code and justify choices for making decisions with
respect to visualizations.

Students are expected, unless otherwise instructed, to be the principal authors
of their code.  This does not mean they may not investigate resources such as
StackOverflow, package documentation, etc; however, they *must* cite when
resources (especially StackOverflow and other "recipe" sites) are utilized.

Assignments will take two forms, and will be given at the end of each class.
Students will have until the following class to turn these in; assignments will
be collected electronically.

 * The first type of assignment will be a written document, constituting 
   either a brief literature review or an analysis of a visualization or
   set of visualizations.  The parameters for these assignments will be given
   during class, but will typically involve a critique of a visualization,
   including citing relevant works in the visualization literature.
 * The second type of assignment will be a hands-on, code-based assignment.
   Students will be provided either a dataset *or* a class of datasets from
   which they can choose, and construct one or multiple mechanisms of drawing
   information out of this visually.  These will be submitted in the form of
   Jupyter notebooks.  Each visualization must be accompanied by narrative
   description from the student describing why design decisions were made.

The submission process for homeworks will be described by example during class
before any homeworks are to be submitted.

Submissions will be in PDF and/or .ipynb (Jupyter notebook) format, and, when 
appropriate, a datafile needed to run the notebook file.  If coding is 
required for the assignment, you will *not* get full points if you do not 
submit the notebook file.  If the code requires a dataset and this is not 
included in your submission you will not get full credit.  Files should be 
uploaded individually, no *.zip files will be accepted.

Each assignment will be based on "correctness" and the narrative description of
the process.  "Correctness" in this case indicates that the code runs without
issue, results are produced, and each component of the assignment is completed.
The narrative description of the process will be graded on grammar minimally and
more so on completeness and thoughtfulness.

### Grading Policy

All assignments are required for all students, aside from one homework (lowest HW grade will be dropped). 
Note that the Syllabus Quiz is in the homework grading category, but will *not* be droppable.
Completing all assignments is
not a guarantee of a passing grade.  You must do homework, visualization reports, and final to 
receive a passing grade. Late or incomplete assignments will not be given full credit
unless the student has contacted the instructor prior to the due date of the
assignment (or in the case of emergencies, as soon as practicable).


**Grading Scale:**

| 94-100       | A
| 90-93        | A-
| 87-89        | B+
| 83-86        | B
| 80-82        | B-
| 77-79        | C+
| 73-76        | C
| 70-72        | C-
| 67-69        | D+
| 63-66        | D
| 60-62        | D-
| 59 and below | F

### Incompletes

Students must request an incomplete grade from the instructor. The instructor
and student will agree on a due date for completion of coursework and the
student must file an Incomplete Form signed by the student, the instructor, and
the student’s academic advisor with the School’s records representative. More
information on incompletes is available here:
<http://webdocs.ischool.illinois.edu/registration/incomplete_grade_form.pdf>

### Attendance Policy

Students are required to attend each class, and if they are unable to do so
must notify the instructor and TA in advance and request an excused absence.
Participation in class -- in the form of comments, questions, and discussion --
is expected.

### Email/Slack Policies and Turn-around times

We aim to respond to Slack messages in the main channel within 24 business hours and email within 3 business days.  Please note that personal Slack messages are treated as emails and turn around times will be within 3 days (though we will make every effort to respond sooner than that).  Please do not use Slack for any questions about grades, or other personal queries -- email is the appropriate venue for these questions.  Do not post working code or solutions of any kind on Slack publically.


## Emergency Response: Run, Hide, Fight

Emergencies can happen anywhere and at any time. It is important that
we take a minute to prepare for a situation in which our safety or
even our lives could depend on our ability to react quickly. When
we’re faced with any kind of emergency – like fire, severe weather or
if someone is trying to hurt you – we have three options: Run, hide or
fight.


### Run

Leaving the area quickly is the best option if it is safe to do so.

- Take time now to learn the different ways to leave your building.
- Leave personal items behind.
- Assist those who need help, but consider whether doing so puts
  yourself at risk.
- Alert authorities of the emergency when it is safe to do so.

### Hide

When you can’t or don’t want to run, take shelter indoors.

- Take time now to learn different ways to seek shelter in your building.
- If severe weather is imminent, go to the nearest indoor storm refuge area.
- If someone is trying to hurt you and you can’t evacuate, get to a place
  where you can’t be seen, lock or barricade your area, silence your
  phone, don’t make any noise and don’t come out until you receive an
  Illini-Alert indicating it is safe to do so.

### Fight

As a last resort, you may need to fight to increase your chances of
survival.

- Think about what kind of common items are in your area which you
  can use to defend yourself.
- Team up with others to fight if the situation allows.
- Mentally prepare yourself – you may be in a fight for your life.

Please be aware of persons with disabilities who may need additional
assistance in emergency situations.


### Other resources

- [police.illinois.edu/safe](http://police.illinois.edu/safe) for more
  information on how to prepare for emergencies, including how to run,
  hide or fight and building floor plans that can show you safe areas.
- [emergency.illinois.edu](http://emergency.illinois.edu) to sign up for
  Illini-Alert text messages.
- Follow the University of Illinois Police Department on Twitter and
  Facebook to get regular updates about campus safety.

